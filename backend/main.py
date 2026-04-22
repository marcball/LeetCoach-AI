from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import subprocess
import sys
import openai
from openai import OpenAI
import os
from typing import List, Dict, Any

app = FastAPI()

class CodeRequest(BaseModel):
    code: str
    test_cases: List[Dict[str, Any]]
    title: str
    method: str = "twoSum"  # function name to call on Solution(), e.g. "twoSum", "maxProfit"

# Add CORS middleware: gives React access to the backend.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allow requests from React
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

openai.api_key = os.getenv("OPENAI_API_KEY")

@app.post("/analyze")
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
            messages=conversation
        )

        response_dict = response.model_dump()
        ai_response = response_dict['choices'][0]['message']['content']
        return {"response": ai_response}


    except Exception as e:
        return { "error": str(e) }
    

@app.post("/run")
def run_code(request: CodeRequest):
    try:
        # Run Python code safely inside of a subprocess
        code_to_run = request.code

        # Auto-call the solution with the first test case so print statements and return value show up
        if request.test_cases:
            inputs = request.test_cases[0]["input"]
            code_to_run += f"\n\nsol = Solution()\nresult = sol.{request.method}(*{inputs})\nif result is not None: print(result)"

        process = subprocess.run(
            [sys.executable, "-c", code_to_run],
            capture_output=True,
            text=True,
            timeout=5
        )

        return {"output": process.stdout, "error": process.stderr}

    except subprocess.TimeoutExpired:
        raise HTTPException(status_code=101, detail="⏳ CODE TIMED OUT 5 SECONDS - MAKE IT FASTER! ⏳")

    except Exception as e:
        raise HTTPException(status_code=102, detail=f"Internal Server Error: {e}")

@app.post("/submit")
def submit_code(request: CodeRequest):
    
    # Receive the test cases from frontend
    test_cases = request.test_cases  
    title = request.title.upper()

    try:
        passed = 0
        total = len(test_cases)
        results = []

        #submitting debug log here

        for case in test_cases:
            inputs = case["input"]
            expected_output = str(case["expected"])

            user_code = f"""
{request.code}

sol = Solution()
print(sol.{request.method}(*{inputs}))
"""


            
            print('running user code:', user_code) #debug log
            
            process = subprocess.run(
                [sys.executable, "-c", user_code],
                capture_output=True,
                text=True,
                timeout=5
            )

            actual_output = process.stdout.strip()

            if actual_output == expected_output:
                passed += 1
                results.append(f"✅ Test {passed}/{total} passed for input {case['input']}")
            else:
                results.append(f"❌ Test failed for input {case['input']}. Expected {expected_output}, got {actual_output}")

        # Calculate percent:
        percentage = round((passed / total) * 100, 2)


        # Final Results Summary
        if passed == total:
            final_message = f"✅ GREAT JOB! ✅ {title} COMPLETED {passed}/{total} TEST CASES PASSED! ({percentage}%)!"
        else:
            final_message = f"❌ FAILED - LOCK IN! ❌{passed}/{total} ({percentage}) test cases passed." #Do passed/total percent as well.

        return {"output": "\n".join(results) + "\n" + final_message}

    except subprocess.TimeoutExpired:
        raise HTTPException(status_code=101, detail="⏳ CODE TIMED OUT 5 SECONDS - MAKE IT FASTER! ⏳")
    except Exception as e:
        raise HTTPException(status_code=102, detail=f"Internal Server Error: {e}")


@app.get("/")
def read_root():
    return {"message": "🚀 THIS MESSAGE IS COMING FROM THE BACKEND SERVER WOOOOOOOOP 🦍🦍🦍🦍"}
