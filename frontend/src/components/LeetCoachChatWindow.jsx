import { useState, useEffect, useRef } from "react";
import { analyzeCodeWithAI } from "../utils/openaiApi";

export default function LeetCoachChatWindow({ userCode, problemTitle, isOpen, toggleChat }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState({ x: window.innerWidth / 2 - 280, y: 100 });
  const [size, setSize] = useState({ width: 560, height: 400 });

  const chatRef = useRef(null);
  const dragging = useRef(false);
  const resizing = useRef(false);
  const resizeStart = useRef({ mouseX: 0, mouseY: 0, width: 0, height: 0 });

  useEffect(() => {
    const savedMessages = localStorage.getItem(`leetcoach_chat_${problemTitle}`);
    if (savedMessages) setMessages(JSON.parse(savedMessages));

    const savedPosition = localStorage.getItem("leetcoach_position");
    if (savedPosition) setPosition(JSON.parse(savedPosition));
  }, [problemTitle]);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(`leetcoach_chat_${problemTitle}`, JSON.stringify(messages));
    }
  }, [messages, problemTitle]);

  useEffect(() => {
    localStorage.setItem("leetcoach_position", JSON.stringify(position));
  }, [position]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    const aiResponse = await analyzeCodeWithAI(input, userCode, problemTitle);
    setMessages([...newMessages, { sender: "ai", text: aiResponse }]);
    setLoading(false);
  };

  const handleDragMouseDown = () => {
    dragging.current = true;
    if (chatRef.current) chatRef.current.style.transition = "none";
  };

  const handleResizeMouseDown = (e) => {
    e.stopPropagation();
    resizing.current = true;
    resizeStart.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      width: size.width,
      height: size.height,
    };
  };

  const handleMouseMove = (e) => {
    if (dragging.current) {
      const newX = Math.max(0, Math.min(window.innerWidth - size.width, e.clientX - size.width / 2));
      const newY = Math.max(50, Math.min(window.innerHeight - size.height, e.clientY - 20));
      setPosition({ x: newX, y: newY });
    }
    if (resizing.current) {
      const dx = e.clientX - resizeStart.current.mouseX;
      const dy = e.clientY - resizeStart.current.mouseY;
      setSize({
        width: Math.min(800, Math.max(320, resizeStart.current.width + dx)),
        height: Math.min(700, Math.max(260, resizeStart.current.height + dy)),
      });
    }
  };

  const handleMouseUp = () => {
    if (dragging.current && chatRef.current) {
      dragging.current = false;
      chatRef.current.style.transition = "left 0.2s ease-out";
      if (position.x < window.innerWidth * 0.1) {
        setPosition((p) => ({ ...p, x: 10 }));
      } else if (position.x > window.innerWidth * 0.9) {
        setPosition((p) => ({ ...p, x: window.innerWidth - size.width - 10 }));
      }
    }
    resizing.current = false;
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [position, size]);

  return (
    <>
      {isOpen && (
        <div
          ref={chatRef}
          className="text-white rounded-2xl shadow-2xl flex flex-col overflow-hidden select-none"
          style={{
            left: position.x,
            top: position.y,
            position: "absolute",
            width: size.width,
            height: size.height,
            background: "#111",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Header */}
          <div
            className="px-4 py-3 border-b cursor-move flex items-center justify-between flex-shrink-0"
            style={{ background: "#0a0a0a", borderColor: "rgba(255,255,255,0.07)" }}
            onMouseDown={handleDragMouseDown}
          >
            <span className="text-sm font-bold text-white">
              LeetCoach <span className="text-[#FFD60A]">AI</span>
            </span>
            <button
              onClick={toggleChat}
              onMouseDown={(e) => e.stopPropagation()}
              className="w-6 h-6 rounded-full flex items-center justify-center text-neutral-500 hover:bg-white/10 hover:text-white transition-colors text-base leading-none"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 min-h-0">
            {messages.length === 0 && (
              <p className="text-neutral-600 text-sm text-center mt-4">Ask me anything about this problem.</p>
            )}
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-3 py-2 text-sm ${
                  msg.sender === "user"
                    ? "bg-[#007AFF] text-white rounded-2xl rounded-br-sm"
                    : "bg-[#1e1e1e] text-neutral-300 rounded-2xl rounded-bl-sm"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#1e1e1e] text-neutral-400 rounded-2xl rounded-bl-sm px-3 py-2 text-xs">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div
            className="px-3 py-3 border-t flex gap-2 flex-shrink-0"
            style={{ background: "#0a0a0a", borderColor: "rgba(255,255,255,0.07)" }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 px-3 py-1.5 rounded-xl text-white text-sm placeholder-neutral-600 focus:outline-none"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
              placeholder="Ask a question..."
            />
            <button
              onClick={sendMessage}
              className="px-3 py-1.5 bg-[#007AFF] hover:bg-[#0066cc] text-white text-sm font-bold rounded-xl transition-colors"
            >
              Send
            </button>
          </div>

          {/* Resize handle */}
          <div
            className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
            onMouseDown={handleResizeMouseDown}
            style={{
              background: "linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.15) 50%)",
              borderRadius: "0 0 16px 0",
            }}
          />
        </div>
      )}
    </>
  );
}
