import { Link } from "react-router-dom";
import Banner from "../components/Banner";

const categories = [
  {
    name: "Arrays & Hashing",
    icon: "▦",
    problems: 1,
    difficulty: "Easy",
    active: true,
    link: "/problems/python/twosum",
  },
  { name: "Two Pointers", icon: "⇆", problems: 1, difficulty: "Easy", active: true, link: "/problems/python/validpalindrome" },
  { name: "Sliding Window", icon: "⊡", problems: 1, difficulty: "Easy", active: true, link: "/problems/python/buysellstock" },
  { name: "Stack", icon: "⊟", problems: 0, difficulty: "Easy", active: false },
  { name: "Binary Search", icon: "⌖", problems: 0, difficulty: "Easy", active: false },
  { name: "Linked List", icon: "⊸", problems: 0, difficulty: "Medium", active: false },
  { name: "Trees / BST", icon: "⑂", problems: 0, difficulty: "Medium", active: false },
  { name: "Graphs / DFS / BFS", icon: "◎", problems: 0, difficulty: "Hard", active: false },
  { name: "Dynamic Programming", icon: "→", problems: 0, difficulty: "Hard", active: false },
];

const difficultyStyle = {
  Easy: "text-green-400 bg-green-400/10 border-green-400/20",
  Medium: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  Hard: "text-red-400 bg-red-400/10 border-red-400/20",
};

export default function DSAPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Banner />

      <div className="max-w-5xl mx-auto px-4 md:px-8 pt-16 pb-28">
        <h1 className="text-center text-3xl md:text-5xl font-bold tracking-tight mb-3">
          Pick a topic.
        </h1>
        <p className="text-center text-neutral-500 text-sm md:text-base mb-16">
          Master the patterns that show up in every interview.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => {
            const card = (
              <div
                className={`relative border rounded-2xl p-6 flex flex-col gap-3 transition-all duration-200 ${
                  cat.active
                    ? "border-[#FFD60A]/30 bg-[#0f0f0f] hover:border-[#FFD60A]/60 hover:shadow-[0_0_20px_rgba(255,214,10,0.08)] cursor-pointer"
                    : "border-white/[0.06] bg-[#0c0c0c] opacity-50 cursor-default"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xl ${cat.active ? "text-[#FFD60A]" : "text-neutral-600"}`}>
                    {cat.icon}
                  </span>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${difficultyStyle[cat.difficulty]}`}>
                    {cat.difficulty}
                  </span>
                </div>

                <h3 className="text-white font-bold text-sm leading-snug">{cat.name}</h3>

                {cat.active ? (
                  <p className="text-[#FFD60A] text-xs font-medium">
                    {cat.problems} {cat.problems === 1 ? "Problem" : "Problems"}
                  </p>
                ) : (
                  <p className="text-neutral-700 text-xs flex items-center gap-1.5">
                    <span>🔒</span> Coming Soon
                  </p>
                )}
              </div>
            );

            return cat.active ? (
              <Link key={cat.name} to={cat.link}>
                {card}
              </Link>
            ) : (
              <div key={cat.name}>{card}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
