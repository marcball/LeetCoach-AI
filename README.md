# LeetCoach

LeetCoach is an AI-powered LeetCode-style coding interview prep platform. It allows users to practice real DSA problems, write Python code in a live editor, and receive intelligent feedback from an AI tutor — without ever giving away the solution.

---

## Overview

LeetCoach replicates the experience of solving LeetCode problems and simulates a technical interview environment enhanced by AI tutoring. As you write and submit code, the AI helps you understand the problem, debug issues, and think critically — based on how much effort you've put in.

---

## Features

### Core Capabilities
- Live Python code editor with VS Code-style theme
- Problem statement with real constraints and examples
- Run button for raw code output
- Submit button that runs multiple test cases and gives verdicts
- Responsive two-panel layout (problem ↔ code)
- AI coaching button (LeetCoach) with animated UI

### AI Tutor (GPT-4o-mini Model)
- Integrated with OpenAI API using the `gpt-4o-mini` model
- Tutor follows a progressive help model:
  - Strict if you haven’t tried much
  - Offers hints if you’re stuck
  - Helps debug if you’ve written substantial code
- Will **never provide direct solutions**
- Focuses on explaining time/space complexity, edge cases, and misconceptions

---

-----------------------------------------------------------
DSA Website for Leetcode questions with AI assistance for interview prep.


venv\Scripts\activate   IN \LEETCOACH\ to get venv on


cd backend
uvicorn main:app --reload --port 8000

cd frontend\frontend
npm run dev

http://127.0.0.1:8000 -- backend
http://localhost:5173 -- frontend



To update your project in the future

git add .
git commit -m "Your commit message"
git push origin main


**Add this to where you call apiKey from:
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

-----------------------------------------------------------

