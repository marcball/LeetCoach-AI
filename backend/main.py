from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import subprocess
import sys
import re
import openai
from openai import OpenAI
import os
from typing import List, Dict, Any
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

limiter = Limiter(key_func=get_remote_address)
app = FastAPI()
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

class CodeRequest(BaseModel):
    code: str
    test_cases: List[Dict[str, Any]]
    title: str
    method: str = "twoSum"

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

openai.api_key = os.getenv("OPENAI_API_KEY")

# ── Security ──────────────────────────────────────────────────────────────────

# Modules that could leak secrets or damage the server
_BLOCKED_MODULES = [
    'os', 'sys', 'subprocess', 'socket', 'requests', 'urllib', 'http',
    'shutil', 'pathlib', 'glob', 'tempfile', 'signal', 'ctypes',
    'multiprocessing', 'threading', 'asyncio', 'importlib', 'pty',
    'atexit', 'gc', 'inspect', 'ast', 'tokenize', 'dis',
]

# Minimal env passed to subprocesses — excludes all secrets
_SAFE_ENV = {k: v for k, v in os.environ.items()
             if k in ('PATH', 'PYTHONPATH', 'PYTHONHOME', 'HOME', 'LANG', 'LC_ALL', 'TZ')}


def _validate_code(code: str) -> None:
    """Raise HTTPException if code contains dangerous imports or builtins."""
    for mod in _BLOCKED_MODULES:
        if re.search(rf'\bimport\s+{re.escape(mod)}\b', code) or \
           re.search(rf'\bfrom\s+{re.escape(mod)}\b', code):
            raise HTTPException(status_code=400, detail=f"Import of '{mod}' is not permitted.")
    for pattern, label in [
        (r'\b__import__\s*\(', '__import__'),
        (r'\beval\s*\(', 'eval'),
        (r'\bexec\s*\(', 'exec'),
        (r'\bopen\s*\(', 'open'),
        (r'\bcompile\s*\(', 'compile'),
        (r'\bbreakpoint\s*\(', 'breakpoint'),
    ]:
        if re.search(pattern, code):
            raise HTTPException(status_code=400, detail=f"Use of '{label}' is not permitted.")


# ── Endpoints ────────────────────────────────────────────────────────────────

@app.post("/analyze")
@limiter.limit("15/minute")
async def analyze_code(request: Request):
    body = await request.json()
    user_code = body.get("userCode", "")
    user_message = body.get("userMessage", "")
    problem_title = body.get("problemTitle", "")

    conversation = [
        {
            "role": "system",
            "content": """You are a LeetCode tutor that NEVER provides direct answers or code...

            Your goal is to help users improve their problem-solving skills without ever giving away direct solutions.

            Your approach should be progressive based on the user's effort:

            If the user has written minimal or no code:
            - Be strict and encouraging. Ask them to attempt the problem first.
            - Prompt them with questions like: "What's your initial approach?" or "How would you break this problem down?"

            If the user is stuck with substantial code:
            - Analyze their approach and identify logical errors without fixing them directly.
            - Offer conceptual hints: "Have you considered using a hash map?" or "What if you traversed the array in reverse?"
            - Point out edge cases they might be missing.
            - Ask guiding questions to help them discover the issue themselves.

            If the user has working code:
            - Discuss time and space complexity.
            - Suggest optimizations: "Your solution works, but can you reduce the time complexity from O(n²) to O(n)?"
            - Explain trade-offs between different approaches.

            General guidelines:
            - NEVER write complete code solutions or implementations.
            - Focus on teaching WHY an approach works or doesn't work.
            - Help them understand algorithmic concepts and data structure choices.
            - Point out common misconceptions about algorithms.
            - Encourage critical thinking through questions rather than direct answers.

            Your job is to make them better problem-solvers, not to solve problems for them.

            Minimize the amount of text you output. Less is more. We want hints not paragraphs mainly if avoidable.
            """
        },
        {
            "role": "user",
            "content": f"Problem: {problem_title}\n\nUser Code:\n{user_code}\n\nUser Message:\n{user_message}"
        }
    ]

    try:
        client = OpenAI()
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=conversation,
            max_tokens=500
        )
        response_dict = response.model_dump()
        ai_response = response_dict['choices'][0]['message']['content']
        return {"response": ai_response}

    except Exception as e:
        return {"error": str(e)}


@app.post("/run")
def run_code(request: CodeRequest):
    _validate_code(request.code)

    try:
        code_to_run = request.code

        if request.test_cases:
            inputs = request.test_cases[0]["input"]
            code_to_run += f"\n\nsol = Solution()\nresult = sol.{request.method}(*{inputs})\nif result is not None: print(result)"

        process = subprocess.run(
            [sys.executable, "-c", code_to_run],
            capture_output=True,
            text=True,
            timeout=5,
            env=_SAFE_ENV,
        )

        return {"output": process.stdout, "error": process.stderr}

    except subprocess.TimeoutExpired:
        raise HTTPException(status_code=101, detail="⏳ CODE TIMED OUT 5 SECONDS - MAKE IT FASTER! ⏳")

    except Exception as e:
        raise HTTPException(status_code=102, detail=f"Internal Server Error: {e}")


@app.post("/submit")
def submit_code(request: CodeRequest):
    _validate_code(request.code)

    test_cases = request.test_cases

    try:
        passed = 0
        total = len(test_cases)
        results = []

        for case in test_cases:
            inputs = case["input"]
            expected_output = str(case["expected"])

            user_code = f"""
{request.code}

sol = Solution()
print(sol.{request.method}(*{inputs}))
"""

            process = subprocess.run(
                [sys.executable, "-c", user_code],
                capture_output=True,
                text=True,
                timeout=5,
                env=_SAFE_ENV,
            )

            actual_output = process.stdout.strip()

            if actual_output == expected_output:
                passed += 1
                results.append(f"✅ Test {passed}/{total} passed for input {case['input']}")
            else:
                results.append(f"❌ Test failed for input {case['input']}. Expected {expected_output}, got {actual_output}")

        if passed == total:
            final_message = f"✅ Congratulations, you've successfully completed: {request.title}!"
        else:
            final_message = f"Not quite — {passed}/{total} test cases passed. Keep going!"

        return {"output": "\n".join(results) + "\n" + final_message, "success": passed == total}

    except subprocess.TimeoutExpired:
        raise HTTPException(status_code=101, detail="⏳ CODE TIMED OUT 5 SECONDS - MAKE IT FASTER! ⏳")
    except Exception as e:
        raise HTTPException(status_code=102, detail=f"Internal Server Error: {e}")


@app.get("/")
def read_root():
    return {"message": "🚀 THIS MESSAGE IS COMING FROM THE BACKEND SERVER WOOOOOOOOP 🦍🦍🦍🦍"}
