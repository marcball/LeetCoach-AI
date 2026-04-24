import { Link } from "react-router-dom";
import Banner from "./components/Banner";
import ParticleBackground from "./components/ParticleBackground";

export default function App() {
  return (
    <div className="w-screen text-white bg-[#0a0a0a]">

      {/* ── HERO — full viewport ── */}
      <div className="min-h-screen flex flex-col">
        <Banner />

        <div className="relative flex flex-col items-center flex-1 px-4 text-center overflow-hidden pt-32">
          {/* Particles */}
          <ParticleBackground />

          {/* Central yellow glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 1 }}>
            <div className="w-[600px] h-[420px] bg-[#FFD60A] opacity-[0.05] rounded-full blur-[160px]" />
          </div>
          {/* Subtle white edge glows for depth */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-white opacity-[0.012] rounded-full blur-[130px] pointer-events-none" style={{ zIndex: 1 }} />
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-white opacity-[0.012] rounded-full blur-[130px] pointer-events-none" style={{ zIndex: 1 }} />

          <div className="relative flex flex-col items-center" style={{ zIndex: 2 }}>
            <div className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full border border-white/10 text-neutral-500 text-xs font-medium tracking-widest uppercase">
              <span className="text-[#FFD60A]">✦</span>
              <span>AI-Powered Learning</span>
            </div>

            <h1 className="text-[2.8rem] sm:text-[4rem] md:text-[5.5rem] font-bold tracking-tight leading-[1.05] text-white">
              Code smarter.<br />
              Get <span className="text-[#FFD60A]">hired</span> faster.
            </h1>

            <p className="mt-6 text-base text-neutral-500 max-w-sm leading-relaxed">
              Get hints, not answers — learn to think like an engineer.
            </p>

            <Link to="/dsa" className="mt-7">
              <button className="inline-flex items-center gap-2 bg-[#FFD60A] hover:bg-[#e6c000] hover:scale-105 hover:shadow-[0_0_28px_rgba(255,214,10,0.4)] text-black font-bold py-3.5 px-9 rounded-full text-sm transition-all duration-200">
                Get Started
                <span className="text-base leading-none">→</span>
              </button>
            </Link>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none" style={{ zIndex: 2 }}>
            <span className="text-neutral-700 text-[10px] uppercase tracking-[0.2em]">scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-neutral-700 to-transparent" />
          </div>
        </div>
      </div>

      {/* ── BELOW FOLD — Feature cards ── */}
      <div className="border-t border-white/[0.06] px-4 md:px-8 py-16 md:py-28">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-neutral-600 text-xs uppercase tracking-widest mb-5">What you get</p>
          <h2 className="text-center text-white text-4xl font-bold tracking-tight mb-20">
            Everything you need to get hired.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-white/10 rounded-2xl p-8 bg-[#0f0f0f]">
              <div className="text-[#FFD60A] text-lg mb-6">✦</div>
              <h3 className="text-white font-bold text-base mb-3">Hints, not answers</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">Targeted nudges that teach you to think through problems, not just reach the answer. You build real instincts.</p>
            </div>

            <div className="border border-white/[0.15] rounded-2xl p-8 bg-[#121212] relative overflow-hidden">
              <div className="absolute inset-0 bg-[#FFD60A] opacity-[0.025] pointer-events-none" />
              <div className="relative z-10">
                <div className="text-[#FFD60A] text-lg mb-6">◈</div>
                <h3 className="text-white font-bold text-base mb-3">Personalized hints</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">The AI reads your actual code and responds to your specific approach. Not a generic response based on the problem.</p>
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 bg-[#0f0f0f]">
              <div className="text-[#FFD60A] text-lg mb-6">⟳</div>
              <h3 className="text-white font-bold text-base mb-3">Interview-ready patterns</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">Work through the exact patterns that show up most in technical interviews, with an AI that adapts to your level.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
