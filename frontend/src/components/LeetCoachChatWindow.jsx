import React, { useState, useEffect, useRef } from "react";
import { analyzeCodeWithAI } from "../utils/openaiApi";

export default function LeetCoachChatWindow( {userCode, problemTitle, isOpen, toggleChat }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState({ x: window.innerWidth / 2 - 960, y: 100 })
  // Might  change the starting position of the text window ^^

  const chatRef = useRef(null); // Let's us change the window position
  const dragging = useRef(false); // Tracks if user is CURRENTLY dragging the window.
  
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


  // For sending messages:
  const sendMessage = async() => {
    if (!input.trim()) return;

    const newMessages= [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const aiResponse = await analyzeCodeWithAI(input, userCode, problemTitle);

    setMessages([...newMessages, {sender: "ai", text: aiResponse }]);
    setLoading(false);
  }

  const handleMouseDown = (event) => {
    dragging.current = true;
    chatRef.current.style.transition = "none";
  };

  const handleMouseMove = (event) => {
    if (!dragging.current) return;

    const newX = Math.max(0, Math.min(window.innerWidth - 960, event.clientX - 480));
    const newY = Math.max(50, Math.min(window.innerHeight - 600, event.clientY - 20));

    setPosition({ x: newX, y: newY });
  };

  // Magnetic snapping to left / right
  const handleMouseUp = () => {
    if (!chatRef.current) return; // Prevents our debug error
    dragging.current = false;
    chatRef.current.style.transition = "left 0.2 ease-out";

    if (position.x < window.innerWidth * 0.2) {
      setPosition({ x: 10, y: position.y }); // Snaps to left side
    } else if (position.x > window.innerWidth * 0.8) {
      setPosition({ x: window.innerWidth - 960, y: position.y }); // Snaps to right side
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
          className="fixed w-80 h-96 bg-gray-800 text-white rounded shadow-lg flex flex-col"
          style={{ 
            left: position.x, 
            top: position.y, 
            position: "absolute",
            width: "49vw",
            maxWidth: "960px",
            height: "49vh",
            maxHeight: "800px",
          }}
        >
          {/* Chat Header */}
          <div className="p-2 bg-gray-900 cursor-move flex justify-between" onMouseDown={handleMouseDown}>
            <h2 className="text-lg">LeetCoach AI</h2>
            <button onClick={toggleChat}>✖</button>
          </div>

          {/* Messages Window */}
          <div className="flex-1 p-2 overflow-y-auto">
            {messages.length === 0 && <p className="text-gray-400">Ask me anything about this problem!</p>}
            {messages.map((msg, index) => (
              <div key={index} className={`p-2 my-1 ${msg.sender === "user" ? "text-right text-blue-400" : "text-left text-gray-300"}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {loading && <p className="p-2 text-gray-400">Thinking...</p>}

          {/* Input Field */}
          <div className="p-2 bg-gray-900 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-1 rounded text-black"
              placeholder="Type a question..."
            />
            <button onClick={sendMessage} className="ml-2 bg-blue-500 px-2 py-1 rounded">Send</button>
          </div>
        </div>
      )}
    </>
  );
}
