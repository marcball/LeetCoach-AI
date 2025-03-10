import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import problems from "./ProblemsData"; // Import problem data
import ProblemDivider from "./components/ProblemDivider";
import CodeEditor from "./components/CodeEditor"; // Imports our code editor

export default function ProblemTemplate() {
  const { topic, problemID } = useParams();
  console.log("🔷 topic:", topic, " | problemID:", problemID); // debug

  const problem = problems[topic]?.[problemID];

  if (!problem) {
    return <h1 className="text-red-500 text-3xl">Problem Not Found</h1>;
  }

  const [problemWidth, setProblemWidth] = useState(50); // Percentage width of the left side
  const [userCode, setUserCode] = useState(problem.starterCode || ""); // Starter code in editor
  const [runOutput, setRunOutput] = useState("");
  const [submitOutput, setSubmitOutput] = useState("");


  // Function to update the width of problem side.
  const handleDrag = useCallback((newX) => {
    const screenWidth = window.innerWidth;
    const newWidth = (newX / screenWidth) * 100;
    if (newWidth > 5 && newWidth < 95) {
      setProblemWidth(newWidth);
    }
  }, [problemWidth]);

  const handleCodeChange = (newCode) => {
    console.log("User typed: (before)", newCode); // debug log
    setUserCode(newCode); // update userCode's state.
    console.log("User typed: (after)", newCode); // debug log
  }


  /**
  * Handles running the code
  * - Sends user's py3 code to FastAPI backend.
  * - Shows the output or errors.
  */
  const handleRun = async (code) => {
    setRunOutput("Running..."); // ensure the output updates properly
  
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/run`, { 
        code,
        test_cases: [],  // No test cases for Run
        title: "null"
      });
  
      console.log("Run Response:", response.data); // debugging log
  
      if (response.data.error) {
        setRunOutput(`Error:\n${response.data.error}`);
      } else {
        setRunOutput(response.data.output || "No output returned."); // fix to ensure it updates
      }
    } catch (error) {
      console.error("Run Error:", error);
      setRunOutput(`Failed to run code. ${error.message}`);
    }
  };

    const handleSubmit = async () => {

      console.log("🔷 SUBMITTING CODE:", userCode); // Debug log ✅

      setSubmitOutput("Submitting...");
    
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/submit`, { 
          code: userCode,
          test_cases: problems.python.twosum.testCases,
          title: problem.meta.title, 
        });

        console.log("🔷 Submit Response:", response.data); // for debugging ✅
    
        if (response.data.error) {
          setSubmitOutput(`Error:\n${response.data.error}`);
        } else {
          setSubmitOutput(response.data.output || "No output returned.");
          console.log("Updated submitOutput:", response.data.output); // debug
        }
      } catch (error) {
        console.error("😡 Submit Error:", error); // for debugging ✅
        setSubmitOutput("Failed to submit code.");
      }
    };
  

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
      <ProblemDivider onDrag={handleDrag} />

      {/* Right: Code Editor Placeholder */}
      <div 
        className="flex flex-col"
        style={{ width: `${100 - problemWidth}%`, height: "100vh", transition: "width 0.1s ease-in-out" }}
      >
        <h2 className="text-xl font-semibold text-white ">Code Editor: Python</h2>
        {/* Code Editor added */}
        <CodeEditor 
          starterCode={userCode} 
          onCodeChange={handleCodeChange}
          onRunCode={handleRun}
          onSubmitCode={handleSubmit}
          output={runOutput}
          submitOutput={submitOutput}
          problemTitle={problem.meta.title}
        /> 
      </div>
    </div>
  );
  
}