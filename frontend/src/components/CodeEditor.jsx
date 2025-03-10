import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import AIButton from "./AIButton";

const CodeEditor = ({ starterCode, onCodeChange, onRunCode, onSubmitCode, output, submitOutput }) => {
  const [code, setCode] = useState(starterCode); // Sets starting code (func name)

  const handleLocalCodeChange = (newCode) => {
    console.log("Updating Local Code State:", newCode); // Debug log
    setCode(newCode);
    onCodeChange(newCode);
  }
  
return (
  <div className="w-full h-full flex flex-col bg-[#1E1E1E]">
    <CodeMirror // Code Editor
      value={code}
      height="100%"
      width = "100%"
      theme={vscodeDark}
      extensions={[python()]}
      onChange={(value) => handleLocalCodeChange(value)}
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
    
      {/* Buttons inside CodeEditor */}
      <div className="p-2 bg-neutral-800 flex justify-between items-center">
        <AIButton /> {/* AI Button on Left */}

        <div className="flex space-x-2">
          <button
            className="px-2 py-1 bg-green-500 hover:bg-green-600 text-white font-bold rounded"
            onClick={() => onRunCode(code)} 
          >
            Run
          </button>

          <button 
            className="px-2 py-1 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded"
            onClick={() => onSubmitCode(code)}
          >
            Submit
          </button>
        </div>
      </div>
    
      {/* Run Output */}
      {output && (
        <div className="bg-neutral-900 text-white p-4 overflow-auto h-24 mt-2">
          <h3 className="font-bold text-green-400">Run Output:</h3>
          <pre>{output}</pre>
        </div>
      )}

      {/* Submission Output */}
      {submitOutput && (
        <div className="bg-neutral-900 text-white p-4 overflow-auto h-32 mt-2">
          <h3 className="font-bold text-purple-400">Submission Results:</h3>
          <pre>{submitOutput}</pre>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;
