import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import problems from "./ProblemsData";
import ProblemDivider from "./components/ProblemDivider";
import CodeEditor from "./components/CodeEditor";
import LeetCoachChatWindow from "./components/LeetCoachChatWindow";

export default function ProblemTemplate() {
  const { topic, problemID } = useParams();
  const problem = problems[topic]?.[problemID];

  // All hooks must be declared before any conditional return
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [problemWidth, setProblemWidth] = useState(50);
  const [userCode, setUserCode] = useState(problem?.starterCode || "");
  const [runOutput, setRunOutput] = useState("");
  const [submitOutput, setSubmitOutput] = useState("");
  const [resetKey, setResetKey] = useState(0);

  const toggleChat = () => setIsChatOpen((prev) => !prev);

  const handleReset = () => {
    setUserCode(problem?.starterCode || "");
    setResetKey((k) => k + 1);
  };

  const handleDrag = useCallback((newX) => {
    const screenWidth = window.innerWidth;
    const newWidth = (newX / screenWidth) * 100;
    if (newWidth > 5 && newWidth < 95) {
      setProblemWidth(newWidth);
    }
  }, []);

  const handleCodeChange = (newCode) => setUserCode(newCode);

  const handleRun = async (code) => {
    setRunOutput("Running...");
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/run`, {
        code,
        test_cases: problem.testCases,
        title: problem.meta.title,
        method: problem.meta.method,
      });
      if (response.data.error) {
        setRunOutput(`Error:\n${response.data.error}`);
      } else {
        setRunOutput(response.data.output || "No output returned.");
      }
    } catch (error) {
      console.error("Run Error:", error);
      setRunOutput(`Failed to run code. ${error.message}`);
    }
  };

  const handleSubmit = async () => {
    setSubmitOutput("Submitting...");
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/submit`, {
        code: userCode,
        test_cases: problem.testCases,
        title: problem.meta.title,
        method: problem.meta.method,
      });
      if (response.data.error) {
        setSubmitOutput(`Error:\n${response.data.error}`);
      } else {
        setSubmitOutput(response.data.output || "No output returned.");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setSubmitOutput("Failed to submit code.");
    }
  };

  if (!problem) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#0a0a0a]">
        <p className="text-red-400 text-xl">Problem not found.</p>
      </div>
    );
  }

  const difficultyColors = {
    Easy: "text-green-400 bg-green-400/10 border-green-400/20",
    Medium: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    Hard: "text-red-400 bg-red-400/10 border-red-400/20",
  };

  return (
    <div className="flex h-screen w-screen bg-[#0a0a0a] text-white">
      <div
        className="overflow-y-auto p-8"
        style={{ width: `${problemWidth}%`, transition: "width 0.1s ease-in-out" }}
      >
        <h1 className="text-2xl font-bold tracking-tight">{problem.meta.title}</h1>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-xs text-neutral-600">{problem.meta.category}</span>
          <span className={`text-xs font-medium px-2 py-0.5 rounded border ${difficultyColors[problem.meta.difficulty] || "text-neutral-400"}`}>
            {problem.meta.difficulty}
          </span>
        </div>

        <div className="mt-6 text-neutral-400 text-sm leading-relaxed space-y-3">
          {problem.description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <h2 className="text-xs font-semibold text-neutral-600 uppercase tracking-widest mt-8 mb-3">Examples</h2>
        {problem.example.map((ex, index) => (
          <div key={index} className="mt-2 p-4 bg-[#111] border border-white/5 rounded-lg text-sm font-mono">
            <p><span className="text-neutral-500">Input: </span><span className="text-neutral-200">{ex.input}</span></p>
            <p><span className="text-neutral-500">Output: </span><span className="text-neutral-200">{ex.output}</span></p>
            {ex.explanation && <p className="text-neutral-600 mt-1">{ex.explanation}</p>}
          </div>
        ))}

        <h2 className="text-xs font-semibold text-neutral-600 uppercase tracking-widest mt-8 mb-3">Constraints</h2>
        <ul className="space-y-1.5 text-sm text-neutral-500 font-mono">
          {problem.constraints.map((constraint, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-[#FFD60A]/40 select-none">—</span>
              {constraint}
            </li>
          ))}
        </ul>
      </div>

      <ProblemDivider onDrag={handleDrag} />

      <div
        className="flex flex-col"
        style={{ width: `${100 - problemWidth}%`, height: "100vh", transition: "width 0.1s ease-in-out" }}
      >
        <div className="px-4 py-2.5 bg-[#111] border-b border-white/5 flex items-center justify-between">
          <span className="text-xs font-medium text-neutral-500">Python 3</span>
          <button
            onClick={handleReset}
            title="Reset to starter code"
            className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-neutral-300 text-sm font-medium rounded-lg transition-colors border border-white/5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
              <path d="M3 3v5h5"/>
            </svg>
          </button>
        </div>
        <CodeEditor
          key={resetKey}
          starterCode={userCode}
          onCodeChange={handleCodeChange}
          onRunCode={handleRun}
          onSubmitCode={handleSubmit}
          output={runOutput}
          submitOutput={submitOutput}
          problemTitle={problem.meta.title}
          toggleChat={toggleChat}
        />

        {isChatOpen && (
          <LeetCoachChatWindow
            userCode={userCode}
            problemTitle={problem.meta.title}
            isOpen={isChatOpen}
            toggleChat={toggleChat}
          />
        )}
      </div>
    </div>
  );
}
