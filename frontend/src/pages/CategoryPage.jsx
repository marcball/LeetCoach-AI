import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Banner from "../components/Banner";
import problems from "../ProblemsData";

const categoryConfig = {
  arrays: { name: "Arrays & Hashing", filter: "Arrays" },
  "two-pointers": { name: "Two Pointers", filter: "Two Pointers" },
  "sliding-window": { name: "Sliding Window", filter: "Sliding Window" },
  stack: { name: "Stack", filter: "Stack" },
  "binary-search": { name: "Binary Search", filter: "Binary Search" },
};

const difficultyStyle = {
  Easy: "text-green-400 bg-green-400/10 border-green-400/20",
  Medium: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  Hard: "text-red-400 bg-red-400/10 border-red-400/20",
};

function Checkbox({ done }) {
  if (done) {
    return (
      <div className="w-[18px] h-[18px] rounded-[4px] bg-green-500 border border-green-500 flex items-center justify-center flex-shrink-0">
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }
  return (
    <div className="w-[18px] h-[18px] rounded-[4px] border border-neutral-700 flex-shrink-0" />
  );
}

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const config = categoryConfig[categorySlug];
  const [completed, setCompleted] = useState(new Set());

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("leetcoach_completed") || "[]");
    setCompleted(new Set(saved));
  }, []);

  if (!config) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#0a0a0a]">
        <p className="text-red-400 text-xl">Category not found.</p>
      </div>
    );
  }

  const categoryProblems = Object.entries(problems.python).filter(
    ([, problem]) => problem.meta.category === config.filter
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Banner />

      <div className="max-w-3xl mx-auto px-4 md:px-8 pt-16 pb-28">
        <Link to="/dsa" className="text-neutral-600 text-xs hover:text-neutral-400 transition-colors">
          ← Back to topics
        </Link>

        <h1 className="text-3xl font-bold tracking-tight mt-6 mb-2">{config.name}</h1>
        <p className="text-neutral-500 text-sm mb-10">
          {categoryProblems.length} {categoryProblems.length === 1 ? "problem" : "problems"}
        </p>

        <div className="flex flex-col gap-2">
          {categoryProblems.map(([id, problem]) => (
            <Link key={id} to={`/problems/python/${id}`}>
              <div className="flex items-center justify-between px-5 py-4 rounded-xl border border-white/[0.06] bg-[#0f0f0f] hover:border-[#FFD60A]/30 hover:bg-[#111] transition-all duration-150 cursor-pointer">
                <div className="flex items-center gap-3">
                  <Checkbox done={completed.has(id)} />
                  <span className="text-white text-sm font-medium">{problem.meta.title}</span>
                </div>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${difficultyStyle[problem.meta.difficulty] || "text-neutral-400"}`}>
                  {problem.meta.difficulty}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
