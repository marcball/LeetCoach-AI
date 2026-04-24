import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <Link
        to="/"
        className="text-sm font-bold tracking-tight text-white hover:text-white transition-all duration-700 hover:[filter:drop-shadow(0_0_6px_#FFD60A)_drop-shadow(0_0_20px_rgba(255,214,10,0.45))]"
      >
        LeetCoach <span className="text-[#FFD60A]">AI</span>
      </Link>
      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-neutral-500 border border-white/10">
        Beta
      </span>
    </nav>
  );
}
