"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ── Circular equalizer SVG ── */
function EqOrb() {
  const bars = 48;
  const cx = 260;
  const cy = 260;
  const innerR = 90;
  const outerR = 200;

  const barEls = Array.from({ length: bars }).map((_, i) => {
    const angle = (i / bars) * 2 * Math.PI - Math.PI / 2;
    const h = Math.round(18 + Math.sin(i * 0.52) * 30 + Math.sin(i * 0.19) * 20);
    const x1 = cx + Math.cos(angle) * innerR;
    const y1 = cy + Math.sin(angle) * innerR;
    const x2 = cx + Math.cos(angle) * (innerR + h);
    const y2 = cy + Math.sin(angle) * (innerR + h);
    const delay = ((i * 0.18) % 3).toFixed(2);
    const dur = (1.8 + (i % 5) * 0.28).toFixed(2);
    return { x1, y1, x2, y2, delay, dur, i };
  });

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer halo rings */}
      <svg
        viewBox="0 0 520 520"
        className="absolute inset-0 w-full h-full animate-spin-slow"
        style={{ opacity: 0.18 }}
      >
        <circle cx="260" cy="260" r="240" fill="none" stroke="#2C8FFF" strokeWidth="0.5" strokeDasharray="4 10" />
        <circle cx="260" cy="260" r="220" fill="none" stroke="#2C8FFF" strokeWidth="0.3" />
      </svg>

      <svg
        viewBox="0 0 520 520"
        className="absolute inset-0 w-full h-full animate-spin-slow-reverse"
        style={{ opacity: 0.12 }}
      >
        <circle cx="260" cy="260" r="255" fill="none" stroke="#2C8FFF" strokeWidth="0.4" strokeDasharray="2 18" />
      </svg>

      {/* Main equalizer SVG */}
      <svg viewBox="0 0 520 520" className="relative w-full h-full" style={{ filter: "drop-shadow(0 0 32px rgba(44,143,255,0.3))" }}>
        <defs>
          <radialGradient id="orb-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2C8FFF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#020912" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="core-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0D2A4A" />
            <stop offset="100%" stopColor="#020912" />
          </radialGradient>
        </defs>

        {/* Ambient glow */}
        <circle cx="260" cy="260" r="260" fill="url(#orb-glow)" />

        {/* Eq bars */}
        {barEls.map(({ x1, y1, x2, y2, delay, dur, i }) => (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={i % 6 === 0 ? "#EEF4FF" : "#2C8FFF"}
            strokeWidth={i % 6 === 0 ? "2" : "1.5"}
            strokeLinecap="round"
            style={{ opacity: 0.7 + (i % 4) * 0.07 }}
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              from="1"
              to="0.55"
              dur={`${dur}s`}
              begin={`${delay}s`}
              repeatCount="indefinite"
              additive="sum"
              attributeType="XML"
            />
          </line>
        ))}

        {/* Inner circle */}
        <circle cx="260" cy="260" r="88" fill="url(#core-grad)" stroke="rgba(44,143,255,0.3)" strokeWidth="1" />

        {/* Center phone icon path */}
        <g transform="translate(238,234)" fill="none">
          <rect x="4" y="0" width="28" height="44" rx="5" stroke="#2C8FFF" strokeWidth="1.8" />
          <rect x="10" y="4" width="16" height="28" rx="2" fill="rgba(44,143,255,0.15)" />
          <circle cx="18" cy="38" r="3" fill="#2C8FFF" opacity="0.6" />
          <line x1="8" y1="4" x2="8" y2="40" stroke="rgba(44,143,255,0.2)" strokeWidth="0.8" />
        </g>

        {/* Floating data dots */}
        {[
          { cx: 180, cy: 140, label: "99.4%", sub: "accuracy" },
          { cx: 360, cy: 120, label: "10×", sub: "faster" },
          { cx: 390, cy: 370, label: "100%", sub: "coverage" },
        ].map((dot, i) => (
          <g key={i}>
            <circle cx={dot.cx} cy={dot.cy} r="28" fill="rgba(10,25,49,0.95)" stroke="rgba(44,143,255,0.35)" strokeWidth="1" />
            <text x={dot.cx} y={dot.cy - 4} textAnchor="middle" fill="#EEF4FF" fontSize="10" fontWeight="800" fontFamily="system-ui">{dot.label}</text>
            <text x={dot.cx} y={dot.cy + 10} textAnchor="middle" fill="#2C8FFF" fontSize="7" fontWeight="600" fontFamily="system-ui">{dot.sub}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient — off-center, not centered */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 70% 50%, rgba(44,143,255,0.10) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — editorial copy, not centred */}
        <div>
          <p
            className="text-xs font-black uppercase tracking-[0.2em] mb-8"
            style={{ color: "#2C8FFF" }}
          >
            Call Intelligence Platform
          </p>

          <h1
            className="font-black leading-[0.95] tracking-[-0.04em] mb-8"
            style={{
              color: "#EEF4FF",
              fontSize: "clamp(52px, 7vw, 88px)",
            }}
          >
            Every call
            <br />
            <em
              className="not-italic"
              style={{
                background: "linear-gradient(135deg, #2C8FFF 0%, #7AB8FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              analysed.
            </em>
            <br />
            Nothing
            <br />
            missed.
          </h1>

          <p
            className="text-lg leading-relaxed max-w-md mb-10"
            style={{ color: "#B3CFE5", fontWeight: 400 }}
          >
            AI transcription, QA scoring, and compliance monitoring — across
            100% of your calls, in under 60 seconds each.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm"
              style={{
                background: "#2C8FFF",
                color: "#fff",
                boxShadow: "0 8px 32px rgba(44,143,255,0.4)",
              }}
            >
              Start free — no card needed
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm"
              style={{
                color: "#EEF4FF",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              Watch 3-min demo
            </Link>
          </div>

          {/* Inline social proof — no pill badge */}
          <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
              {["#2C8FFF","#7AB8FF","#B3CFE5","#EEF4FF"].map((c, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[9px] font-black"
                  style={{ borderColor: "#020912", background: c, color: "#020912" }}
                >
                  {["SC","MR","PN","TW"][i]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="text-xs" style={{ color: "#eab308" }}>{s}</span>
                ))}
              </div>
              <p className="text-xs" style={{ color: "#B3CFE5" }}>
                Loved by 500+ QA teams
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — circular equalizer graphic */}
        <div
          className="relative w-full aspect-square max-w-lg mx-auto"
          style={{ filter: "drop-shadow(0 0 60px rgba(44,143,255,0.12))" }}
        >
          <EqOrb />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #020912)" }}
      />
    </section>
  );
}
