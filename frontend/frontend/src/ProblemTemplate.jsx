import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import problems from "./ProblemsData"; // Import problem data
import ProblemBorder from "./components/ProblemBorder";
import CodeEditor from "./components/CodeEditor"; // Imports our code editor

export default function ProblemTemplate() {
  const { topic } = useParams();
  const problem = problems[topic];

  if (!problem) {
    return <h1 className="text-red-500 text-3xl">Problem Not Found</h1>;
  }

  const [problemWidth, setProblemWidth] = useState(50); // Percentage width of the left side
  const [userCode, setUserCode] = useState(problem.starterCode || ""); // Starter code in editor

  // Function to update the width of problem side.
  const handleDrag = useCallback((newX) => {
    const screenWidth = window.innerWidth;
    const newWidth = (newX / screenWidth) * 100;
    if (newWidth > 5 && newWidth < 95) {
      setProblemWidth(newWidth);
    }
  }, [problemWidth]);

  return (
    <div className="flex h-screen w-screen bg-gray text-white">
      {/* Left: Problem Statement */}
      <div 
        className="w-1/2 p-8 overflow-y-auto"
        style={{ width: `${problemWidth}%`, transition: "width 0.1s ease-in-out" }}
      >
        <h1 className="text-3xl font-bold">{problem.meta.title}</h1>
        <p className="text-zinc-400 mt-2 text-sm">{problem.meta.category} ➜ {problem.meta.difficulty}</p>

        {/* Problem Description */}
        <div className="mt-6 text-gray-200">
          {problem.description.map((line, index) => (
            <p key={index} className="mb-3">{line}</p>
          ))}
        </div>



        {/* Examples */}
        <h2 className="text-lg font-semibold mt-6">Examples:</h2>
        {problem.example.map((ex, index) => (
          <div key={index} className="mt-3 p-4 bg-neutral-700 rounded-md"> {/* MAKE THIS NOT BLUE BEHIND IT */}
            <p><strong>Input:</strong> {ex.input}</p>
            <p><strong>Output:</strong> {ex.output}</p>
            {ex.explanation && <p className="text-zinc-400">{ex.explanation}</p>}
          </div>
        ))}

        {/* Constraints */}
        <h2 className="text-lg font-semibold mt-6">Constraints:</h2>
          <ul className="list-disc ml-6 text-zinc-400">
            {problem.constraints.map((constraint, index) => (
              <li key={index}>{constraint}</li>
            ))}
          </ul>
      </div>

      {/* Draggable Border */}
      <ProblemBorder onDrag={handleDrag} />

      {/* Right: Code Editor Placeholder */}
      <div 
        className="flex flex-col"
        style={{ width: `${100 - problemWidth}%`, height: "100vh", transition: "width 0.1s ease-in-out" }}
      >
        <h2 className="text-xl font-semibold text-white mb-4">Code Editor: Python</h2>
        {/* Code Editor added */}
        <CodeEditor starterCode={userCode} onCodeChange={setUserCode} /> 
      </div>
    </div>
  );
  
}
