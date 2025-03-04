import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import axios from "axios"; // Library for making API requests to our FastAPI backend.

const CodeEditor = ({ starterCode, onCodeChange }) => {
  const [code, setCode] = useState(starterCode); // Sets starting code (func name)
  const [output, setOutput] = useState(""); // Stores output

  const handleCodeChange = (newCode) => {
    setCode(newCode);
    onCodeChange(newCode);
  };

  /**
   * Handles running the code
   * - Sends user's py3 code to FastAPI backend.
   * - Shows the output or errors.
   */
  const handleRunCode = async() => {
    setOutput("Running...");
    
    try {
      const response = await axios.post("http://localhost:8000/run", { code });
      // Sends a POST request with the user's code to FastAPI backend.

        if (response.data.error) {
          setOutput(`Error:\n${response.data.error}`);
        } else {
          setOutput(response.data.output);
        }
      } catch (error) {
          setOutput("Failed to run code.");
      }
    };
  

return (
  <div className="w-full h-full flex flex-col bg-[#1E1E1E]">
    <CodeMirror // Code Editor
      value={code}
      height="100%"
      width = "100%"
      theme={vscodeDark}
      extensions={[python()]}
      onChange={(value) => setCode(value)}
      basicSetup={{
        lineNumbers: true,
        mode: "python",
        tabSize: 4,
        indentUnit: 4,
        smartIndent: true,
      }}
      className="w-full h-full"
      style={{
        backgroundColor: "#404040",
      }}
    />

    {/* Run Button */}
    <div className="p-2 bg-neutral-800 flex justify-between items-center">
      <button
        className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
        onClick={handleRunCode} // RUNS CODE ON BUTTON CLICK.
      >
        Run Code
      </button>
    </div>
    
    {/* Output Screen */}
    {output && (
      <div className="bg-neutral-900 text-white p-4 overflow-auto h-32">
        <pre>{output}</pre> {/* Output is preformatted */}
      </div>
    )}
  </div>
  );
};

export default CodeEditor;
