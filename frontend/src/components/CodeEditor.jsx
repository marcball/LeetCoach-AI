import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import AIButton from "./AIButton";

const CodeEditor = ({ starterCode, onCodeChange, onRunCode, onSubmitCode, output, submitOutput, toggleChat }) => {
  const [code, setCode] = useState(starterCode);

  const handleLocalCodeChange = (newCode) => {
    setCode(newCode);
    onCodeChange(newCode);
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#1a1a1a]">
      <CodeMirror
        value={code}
        height="100%"
        width="100%"
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
      />

      <div className="px-3 py-2 bg-[#111] border-t border-white/5 flex justify-between items-center">
        <AIButton toggleChat={toggleChat} />
        <div className="flex gap-2">
          <button
            className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-neutral-300 text-sm font-medium rounded-lg transition-colors border border-white/5"
            onClick={() => onRunCode(code)}
          >
            Run
          </button>
          <button
            className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-[#FFD60A] text-sm font-medium rounded-lg transition-colors border border-white/5"
            onClick={() => onSubmitCode(code)}
          >
            Submit
          </button>
        </div>
      </div>

      {output && (
        <div className="bg-[#0a0a0a] border-t border-white/5 p-4 overflow-auto h-24">
          <p className="text-xs font-semibold text-neutral-600 uppercase tracking-widest mb-2">Output</p>
          <pre className="text-sm text-neutral-300 font-mono">{output}</pre>
        </div>
      )}

      {submitOutput && (
        <div className="bg-[#0a0a0a] border-t border-white/5 p-4 overflow-auto h-32">
          <p className="text-xs font-semibold text-neutral-600 uppercase tracking-widest mb-2">Submission</p>
          <pre className="text-sm text-neutral-300 font-mono">{submitOutput}</pre>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;
