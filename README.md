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

