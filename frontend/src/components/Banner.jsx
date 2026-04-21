export default function Banner() {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <span className="text-sm font-bold tracking-tight text-white">
        LeetCoach <span className="text-[#FFD60A]">AI</span>
      </span>
      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-neutral-500 border border-white/10">
        Beta
      </span>
    </nav>
  );
}
