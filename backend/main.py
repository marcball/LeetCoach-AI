from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import subprocess

app = FastAPI()

class CodeRequest(BaseModel):
    code: str   # This is the Python code sent from the frontend.

# Add CORS middleware: gives React access to the backend.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], # Allow requests from React
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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


@app.get("/")
def read_root():
    return {"message": "🚀 THIS MESSAGE IS COMING FROM THE BACKEND SERVER WOOOOOOOOP 🦍🦍🦍🦍"}
