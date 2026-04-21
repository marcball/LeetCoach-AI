import { useState, useEffect, useRef } from "react";
import { analyzeCodeWithAI } from "../utils/openaiApi";

export default function LeetCoachChatWindow({ userCode, problemTitle, isOpen, toggleChat }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState({ x: window.innerWidth / 2 - 320, y: 100 });

  const chatRef = useRef(null);
  const dragging = useRef(false);

  useEffect(() => {
    const savedMessages = localStorage.getItem(`leetcoach_chat_${problemTitle}`);
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }

    const savedPosition = localStorage.getItem("leetcoach_position");
    if (savedPosition) {
      setPosition(JSON.parse(savedPosition));
    }
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

  const handleMouseDown = () => {
    dragging.current = true;
    chatRef.current.style.transition = "none";
  };

  const handleMouseMove = (event) => {
    if (!dragging.current) return;

    const newX = Math.max(0, Math.min(window.innerWidth - window.innerWidth * 0.35, event.clientX - window.innerWidth * 0.175));
    const newY = Math.max(50, Math.min(window.innerHeight - window.innerHeight * 0.38, event.clientY - 20));

    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    if (!chatRef.current) return;
    dragging.current = false;
    chatRef.current.style.transition = "left 0.2s ease-out";

    if (position.x < window.innerWidth * 0.1) {
      setPosition({ x: 10, y: position.y });
    } else if (position.x > window.innerWidth * 0.9) {
      setPosition({ x: window.innerWidth - window.innerWidth * 0.35 - 10, y: position.y });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [position]);

  return (
    <>
      {isOpen && (
        <div
          ref={chatRef}
          className="text-white rounded-xl shadow-2xl flex flex-col overflow-hidden"
          style={{
            left: position.x,
            top: position.y,
            position: "absolute",
            width: "35vw",
            maxWidth: "672px",
            height: "38vh",
            maxHeight: "400px",
            background: "#111",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div
            className="px-4 py-3 border-b cursor-move flex items-center justify-between"
            style={{ background: "#0a0a0a", borderColor: "rgba(255,255,255,0.07)" }}
            onMouseDown={handleMouseDown}
          >
            <span className="text-sm font-bold text-white">
              Leet<span className="text-[#FFD60A]">Coach</span> AI
            </span>
            <button
              onClick={toggleChat}
              className="text-neutral-600 hover:text-white transition-colors text-xl leading-none"
            >
              ×
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.length === 0 && (
              <p className="text-neutral-600 text-sm text-center mt-4">Ask me anything about this problem.</p>
            )}
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                  msg.sender === "user"
                    ? "bg-[#007AFF] text-white font-medium rounded-br-sm"
                    : "bg-white/5 text-neutral-300 rounded-bl-sm"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {loading && (
            <p className="px-4 py-2 text-[#FFD60A]/60 text-xs">Thinking...</p>
          )}

          <div
            className="px-3 py-3 border-t flex gap-2"
            style={{ background: "#0a0a0a", borderColor: "rgba(255,255,255,0.07)" }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 px-3 py-1.5 rounded-lg text-white text-sm placeholder-neutral-600 focus:outline-none"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
              placeholder="Ask a question..."
            />
            <button
              onClick={sendMessage}
              className="px-3 py-1.5 bg-[#007AFF] hover:bg-[#e6c000] text-white text-sm font-bold rounded-lg transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
