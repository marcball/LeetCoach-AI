from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import subprocess
import openai
import os
from typing import List, Dict

app = FastAPI()

class CodeRequest(BaseModel):
    code: str   # This is the Python code sent from the frontend.
    test_cases: List[Dict[str, List]] # list of test cases, each with expected input/output
    title: str # problem title

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
            (💡 paste your original system prompt here!)"""
        },
        {
            "role": "user",
            "content": f"Problem: {problem_title}\n\nUser Code:\n{user_code}\n\nUser Message:\n{user_message}"
        }
    ]

    try:
        response = openai.completions.create(
            model="gpt-4o",
            messages=conversation
        )
        return { "response": response.choices[0].message["content"] }
    except Exception as e:
        return { "error": str(e) }
    

@app.post("/run")
def run_code(request: CodeRequest):
    try:
        # Run Python code safely inside of a subprocess
        process = subprocess.run(
            ["python", "-c", request.code],
            capture_output=True,
            text=True,
            timeout=5 # 5 seconds to prevent infinite loops.
        )

        return {"output": process.stdout, "error": process.stderr}
    
    except subprocess.TimeoutExpired:
        raise HTTPException(status_code=101, detail="⏳ CODE TIMED OUT 5 SECONDS - MAKE IT FASTER! ⏳")
        
    except Exception as e:
        raise HTTPException(status_code=102, detail="Internal Server Error: {e}")

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
            nums, target = case["input"]
            expected_output = str(case["expected"])

            user_code = f"""
{request.code} 

sol = Solution()
print(sol.twoSum({nums}, {target}))
"""


            
            print('running user code:', user_code) #debug log
            
            process = subprocess.run(
                ["python", "-c", user_code],
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
