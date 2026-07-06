"use client";

import Link from "next/link";
import { ArrowRight, Play, Zap } from "lucide-react";
import WaveformBg from "@/components/WaveformBg";
import StatCounter from "@/components/StatCounter";

const stats = [
  { value: "99.4%", label: "Accuracy" },
  { value: "24/7", label: "Uptime" },
  { value: "10x", label: "Faster Reviews" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(44,143,255,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Waveform background */}
      <WaveformBg />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow pill */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: "rgba(44,143,255,0.1)",
            border: "1px solid rgba(44,143,255,0.25)",
          }}
        >
          <Zap size={12} color="#2C8FFF" />
          <span
            className="text-[10px] font-black uppercase tracking-[0.14em]"
            style={{ color: "#2C8FFF" }}
          >
            AI-Powered Call Intelligence
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-[clamp(48px,8vw,80px)] font-black leading-[1.05] tracking-[-0.04em] mb-6"
          style={{ color: "#EEF4FF" }}
        >
          Intelligence
          <br />
          at every{" "}
          <span style={{ color: "#2C8FFF" }}>conversation.</span>
        </h1>

        {/* Sub-copy */}
        <p
          className="text-lg font-medium max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#B3CFE5" }}
        >
          Unlock deep insights from your calls with AI-powered transcription,
          QA scoring, and compliance monitoring.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <Link
            href="#"
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 animate-pulse-glow"
            style={{
              background: "#2C8FFF",
              color: "#fff",
              boxShadow: "0 0 32px rgba(44,143,255,0.35)",
            }}
          >
            Get Started Free
            <ArrowRight size={18} />
          </Link>
          <button
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-150"
            style={{
              color: "#EEF4FF",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "transparent",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "rgba(44,143,255,0.15)" }}
            >
              <Play size={12} color="#2C8FFF" style={{ marginLeft: 2 }} />
            </div>
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap items-center justify-center gap-12 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          {stats.map((s, i) => (
            <StatCounter key={i} value={s.value} label={s.label} duration={1200 + i * 200} />
          ))}
        </div>
      </div>

      {/* App mockup */}
      <div className="relative z-10 w-full max-w-5xl mx-auto mt-20 px-4 animate-float">
        <div
          className="w-full rounded-3xl overflow-hidden"
          style={{
            border: "1px solid rgba(44,143,255,0.2)",
            background: "rgba(10,25,49,0.9)",
            boxShadow: "0 40px 120px rgba(44,143,255,0.15), 0 0 0 1px rgba(255,255,255,0.05)",
          }}
        >
          {/* Mock browser chrome */}
          <div
            className="flex items-center gap-2 px-5 py-3"
            style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="w-3 h-3 rounded-full" style={{ background: "#ef4444" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#eab308" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
            <div
              className="ml-4 flex-1 max-w-xs h-6 rounded-lg"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />
          </div>

          {/* Mock dashboard */}
          <div className="p-6 grid grid-cols-3 gap-4" style={{ minHeight: 300 }}>
            {/* Sidebar mock */}
            <div className="col-span-1 space-y-3">
              {["Calls", "QA Scoring", "Analytics", "Red Flags", "Reports"].map((item, i) => (
                <div
                  key={item}
                  className="h-9 rounded-xl flex items-center px-4 gap-3"
                  style={{
                    background: i === 1 ? "rgba(44,143,255,0.15)" : "rgba(255,255,255,0.03)",
                    border: i === 1 ? "1px solid rgba(44,143,255,0.3)" : "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: i === 1 ? "#2C8FFF" : "rgba(255,255,255,0.2)" }}
                  />
                  <span className="text-xs font-medium" style={{ color: i === 1 ? "#EEF4FF" : "#B3CFE5" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Main content mock */}
            <div className="col-span-2 space-y-4">
              {/* Metric cards */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Calls Today", val: "247", up: true },
                  { label: "QA Score", val: "91.4%", up: true },
                  { label: "Red Flags", val: "3", up: false },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl p-4"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div className="text-xs mb-1" style={{ color: "#B3CFE5" }}>{m.label}</div>
                    <div className="text-xl font-black" style={{ color: "#EEF4FF" }}>{m.val}</div>
                    <div
                      className="text-xs mt-1 font-medium"
                      style={{ color: m.up ? "#22c55e" : "#ef4444" }}
                    >
                      {m.up ? "↑ 12%" : "↓ 2"}
                    </div>
                  </div>
                ))}
              </div>

              {/* Waveform bar chart mock */}
              <div
                className="rounded-2xl p-4"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="text-xs mb-3 font-medium" style={{ color: "#B3CFE5" }}>
                  Sentiment Timeline
                </div>
                <div className="flex items-end gap-1 h-16">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${Math.round(20 + Math.sin(i * 0.5) * 30 + 30)}%`,
                        background:
                          i > 20
                            ? "#22c55e"
                            : i > 12
                            ? "#2C8FFF"
                            : "rgba(44,143,255,0.4)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom clip fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, #020912)",
          }}
        />
      </div>
    </section>
  );
}
