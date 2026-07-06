"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, X } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

/* ── per-feature SVG illustrations ── */
function TranscriptIllustration() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <defs>
        <linearGradient id="fi-tg" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#2C8FFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2C8FFF" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {[
        { y: 18, w: 130, speaker: true },
        { y: 42, w: 100, speaker: false },
        { y: 66, w: 145, speaker: true },
        { y: 90, w: 85, speaker: false },
        { y: 114, w: 120, speaker: true },
      ].map((l, i) => (
        <g key={i}>
          <circle cx="10" cy={l.y + 5} r="5" fill={l.speaker ? "rgba(44,143,255,0.4)" : "rgba(255,255,255,0.12)"} />
          <rect x="22" y={l.y} width={l.w} height="10" rx="5" fill={l.speaker ? "url(#fi-tg)" : "rgba(255,255,255,0.07)"} />
          <rect x={22 + l.w + 6} y={l.y + 1} width="26" height="8" rx="4"
            fill="rgba(34,197,94,0.12)" stroke="rgba(34,197,94,0.3)" strokeWidth="0.6" />
          <text x={22 + l.w + 19} y={l.y + 7} textAnchor="middle" fill="#22c55e" fontSize="5" fontFamily="system-ui">
            {(0.91 + i * 0.02).toFixed(2)}
          </text>
        </g>
      ))}
    </svg>
  );
}

function ScoringIllustration() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <defs>
        <radialGradient id="fi-ring" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(34,197,94,0.15)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <circle cx="52" cy="70" r="44" fill="url(#fi-ring)" />
      <circle cx="52" cy="70" r="38" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
      <circle cx="52" cy="70" r="38" fill="none" stroke="#22c55e" strokeWidth="7"
        strokeDasharray="216 239" strokeDashoffset="60" strokeLinecap="round" />
      <text x="52" y="66" textAnchor="middle" fill="#EEF4FF" fontSize="18" fontWeight="900" fontFamily="system-ui">91</text>
      <text x="52" y="79" textAnchor="middle" fill="#B3CFE5" fontSize="6" fontFamily="system-ui">/ 100</text>
      {[
        { label: "Script adherence", v: 96, c: "#22c55e" },
        { label: "Compliance", v: 100, c: "#22c55e" },
        { label: "Product knowledge", v: 84, c: "#2C8FFF" },
        { label: "Closing technique", v: 71, c: "#eab308" },
      ].map((r, i) => (
        <g key={i} transform={`translate(106,${14 + i * 30})`}>
          <text y="8" fill="#B3CFE5" fontSize="7" fontFamily="system-ui">{r.label}</text>
          <rect y="13" width="80" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
          <rect y="13" width={r.v * 0.8} height="6" rx="3" fill={r.c} opacity="0.8" />
          <text x="85" y="19" fill={r.c} fontSize="7" fontWeight="700" fontFamily="system-ui">{r.v}</text>
        </g>
      ))}
    </svg>
  );
}

function RedFlagIllustration() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      {/* Timeline */}
      <line x1="10" y1="80" x2="190" y2="80" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
      {Array.from({ length: 36 }).map((_, i) => {
        const x = 10 + (i / 35) * 180;
        const h = Math.round(6 + Math.sin(i * 0.65) * 18 + Math.sin(i * 0.22) * 9);
        const flagged = i >= 13 && i <= 17;
        return <rect key={i} x={x - 1.5} y={80 - h / 2} width="3" height={h} rx="1.5"
          fill={flagged ? "#ef4444" : "rgba(44,143,255,0.45)"} opacity={flagged ? 1 : 0.6} />;
      })}
      {/* Flag callout */}
      <line x1="82" y1="38" x2="82" y2="70" stroke="#ef4444" strokeWidth="0.8" strokeDasharray="3 2" />
      <rect x="40" y="16" width="116" height="26" rx="7"
        fill="rgba(239,68,68,0.1)" stroke="rgba(239,68,68,0.4)" strokeWidth="0.8" />
      <text x="98" y="28" textAnchor="middle" fill="#ef4444" fontSize="7.5" fontWeight="700" fontFamily="system-ui">Missing disclosure — 00:42</text>
      <text x="98" y="38" textAnchor="middle" fill="rgba(239,68,68,0.7)" fontSize="6.5" fontFamily="system-ui">High severity · Auto-escalated</text>
      {/* Second flag */}
      <line x1="130" y1="58" x2="130" y2="73" stroke="#eab308" strokeWidth="0.8" strokeDasharray="3 2" />
      <rect x="100" y="44" width="86" height="16" rx="5"
        fill="rgba(234,179,8,0.08)" stroke="rgba(234,179,8,0.35)" strokeWidth="0.7" />
      <text x="143" y="55" textAnchor="middle" fill="#eab308" fontSize="6.5" fontFamily="system-ui">Guarantee language — 02:11</text>
      {/* Alert count */}
      <rect x="10" y="98" width="58" height="22" rx="6" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.25)" strokeWidth="0.8" />
      <text x="39" y="112" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="700" fontFamily="system-ui">2 Red Flags</text>
      <rect x="76" y="98" width="58" height="22" rx="6" fill="rgba(234,179,8,0.08)" stroke="rgba(234,179,8,0.25)" strokeWidth="0.8" />
      <text x="105" y="112" textAnchor="middle" fill="#eab308" fontSize="8" fontWeight="700" fontFamily="system-ui">1 Warning</text>
    </svg>
  );
}

function AnalyticsIllustration() {
  const series = [
    { vals: [42, 48, 52, 61, 68, 74, 80, 85], color: "#2C8FFF", label: "Campaign A" },
    { vals: [30, 34, 40, 44, 52, 58, 62, 70], color: "#7AB8FF", label: "Campaign B" },
    { vals: [55, 58, 60, 55, 62, 68, 72, 78], color: "#22c55e", label: "Campaign C" },
  ];
  const W = 160, H = 90;
  const toX = (i: number) => (i / 7) * W;
  const toY = (v: number) => H - (v / 100) * H;
  const path = (vals: number[]) =>
    vals.map((v, i) => `${i === 0 ? "M" : "L"}${toX(i)},${toY(v)}`).join(" ");

  return (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <defs>
        {series.map((s, i) => (
          <linearGradient key={i} id={`ai-g${i}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={s.color} stopOpacity="0.2" />
            <stop offset="100%" stopColor={s.color} stopOpacity="0" />
          </linearGradient>
        ))}
      </defs>
      <g transform="translate(10, 10)">
        {[0, 25, 50, 75, 100].map(v => (
          <line key={v} x1="0" y1={toY(v)} x2={W} y2={toY(v)}
            stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}
        {series.map((s, i) => (
          <g key={i}>
            <path d={`${path(s.vals)} L${toX(7)},${H} L0,${H} Z`}
              fill={`url(#ai-g${i})`} />
            <path d={path(s.vals)} fill="none" stroke={s.color}
              strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx={toX(7)} cy={toY(s.vals[7])} r="3.5"
              fill={s.color} stroke="rgba(2,9,18,0.8)" strokeWidth="1.5" />
          </g>
        ))}
        {/* Legend */}
        {series.map((s, i) => (
          <g key={i} transform={`translate(0, ${H + 16 + i * 12})`}>
            <line x1="0" y1="4" x2="12" y2="4" stroke={s.color} strokeWidth="2" strokeLinecap="round" />
            <text x="17" y="8" fill="#B3CFE5" fontSize="7.5" fontFamily="system-ui">{s.label}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

function SentimentIllustration() {
  const pts: [number, number][] = [
    [0,52],[1,45],[2,48],[3,40],[4,35],[5,42],[6,55],[7,62],[8,68],[9,72],[10,78],[11,82]
  ];
  const W = 180, H = 100;
  const toX = ([t]: [number, number]) => (t / 11) * W;
  const toY = ([, v]: [number, number]) => H - (v / 100) * H;
  const d = pts.map(([t, v], i) => `${i === 0 ? "M" : "L"}${(t/11)*W},${H-(v/100)*H}`).join(" ");
  const area = `M0,${H} ${pts.map(([t,v]) => `L${(t/11)*W},${H-(v/100)*H}`).join(" ")} L${W},${H} Z`;

  return (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <defs>
        <linearGradient id="si-g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
          <stop offset="40%" stopColor="#2C8FFF" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g transform="translate(10,10)">
        <rect x="0" y="0" width={W} height={H*0.28} rx="0" fill="rgba(34,197,94,0.04)" />
        <rect x="0" y={H*0.6} width={W} height={H*0.4} rx="0" fill="rgba(239,68,68,0.04)" />
        <text x="4" y="10" fill="rgba(34,197,94,0.45)" fontSize="6.5" fontFamily="system-ui">Positive</text>
        <text x="4" y={H-3} fill="rgba(239,68,68,0.45)" fontSize="6.5" fontFamily="system-ui">Negative</text>
        <path d={area} fill="url(#si-g)" />
        <path d={d} fill="none" stroke="#2C8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {pts.slice(-3).map((p, i) => (
          <circle key={i} cx={toX(p)} cy={toY(p)} r="3" fill="#22c55e" opacity="0.85" />
        ))}
        {/* Annotation */}
        <line x1={toX(pts[4])} y1={toY(pts[4])-8} x2={toX(pts[4])} y2={toY(pts[4])}
          stroke="#ef4444" strokeWidth="0.8" strokeDasharray="2 2" />
        <rect x={toX(pts[4])-30} y={toY(pts[4])-22} width="60" height="13" rx="4"
          fill="rgba(239,68,68,0.1)" stroke="rgba(239,68,68,0.4)" strokeWidth="0.7" />
        <text x={toX(pts[4])} y={toY(pts[4])-13} textAnchor="middle"
          fill="#ef4444" fontSize="6" fontFamily="system-ui">Objection raised</text>
      </g>
    </svg>
  );
}

function HITLIllustration() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      {/* AI box */}
      <rect x="8" y="18" width="82" height="56" rx="8"
        fill="rgba(44,143,255,0.07)" stroke="rgba(44,143,255,0.25)" strokeWidth="0.8" />
      <text x="49" y="32" textAnchor="middle" fill="#2C8FFF" fontSize="7" fontWeight="700" fontFamily="system-ui">AI Suggestion</text>
      {[44, 56, 68].map(y => (
        <rect key={y} x="18" y={y} width={y === 44 ? 56 : y === 56 ? 44 : 50} height="7" rx="3.5"
          fill="rgba(255,255,255,0.06)" />
      ))}
      <circle cx="76" cy="64" r="7" fill="rgba(44,143,255,0.15)" stroke="rgba(44,143,255,0.4)" strokeWidth="0.8" />
      <text x="76" y="68" textAnchor="middle" fill="#2C8FFF" fontSize="9" fontFamily="system-ui">✓</text>

      {/* Arrow */}
      <path d="M94,44 C110,44 112,56 104,68" fill="none"
        stroke="rgba(44,143,255,0.35)" strokeWidth="1.2" strokeDasharray="3 2" />
      <polygon points="99,65 106,71 108,62" fill="rgba(44,143,255,0.45)" />

      {/* Human box */}
      <rect x="110" y="28" width="82" height="68" rx="8"
        fill="rgba(34,197,94,0.06)" stroke="rgba(34,197,94,0.25)" strokeWidth="0.8" />
      <text x="151" y="42" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="700" fontFamily="system-ui">Reviewer Override</text>
      {[48, 60].map(y => (
        <rect key={y} x="120" y={y} width={y === 48 ? 60 : 50} height="7" rx="3.5"
          fill="rgba(255,255,255,0.06)" />
      ))}
      <rect x="120" y="74" width="62" height="13" rx="6"
        fill="rgba(234,179,8,0.1)" stroke="rgba(234,179,8,0.3)" strokeWidth="0.7" />
      <text x="151" y="83" textAnchor="middle" fill="#eab308" fontSize="6.5" fontFamily="system-ui">RC-04: Script change</text>

      {/* Audit trail */}
      <text x="8" y="110" fill="#B3CFE5" fontSize="6.5" fontWeight="700" fontFamily="system-ui">Audit trail</text>
      {[0,1,2,3,4].map(i => (
        <g key={i} transform={`translate(${8+i*38},118)`}>
          <circle cx="6" cy="6" r="5"
            fill={i < 3 ? "rgba(44,143,255,0.18)" : "rgba(255,255,255,0.04)"}
            stroke={i < 3 ? "rgba(44,143,255,0.4)" : "rgba(255,255,255,0.08)"} strokeWidth="0.7" />
          <text x="6" y="9" textAnchor="middle"
            fill={i < 3 ? "#2C8FFF" : "rgba(255,255,255,0.2)"} fontSize="6" fontFamily="system-ui">{i+1}</text>
          {i < 4 && <line x1="14" y1="6" x2="32" y2="6" stroke="rgba(255,255,255,0.06)" strokeWidth="0.7" />}
        </g>
      ))}
    </svg>
  );
}

const features = [
  {
    n: "01", title: "Real-time Transcription",
    tagline: "Speaker-diarized, confidence-scored.",
    description: "Industry-leading STT with per-word confidence, 30+ languages, and filler word detection. Results in under 2 seconds.",
    bullets: ["Speaker-separated transcripts","Per-word confidence scores","30+ language support","Custom vocabulary lists","Filler word detection","Silence / hold time tracking"],
    Illustration: TranscriptIllustration, accent: "#2C8FFF",
  },
  {
    n: "02", title: "QA Scoring",
    tagline: "Your rubric. AI consistency.",
    description: "Build weighted questionnaires, score every call automatically, benchmark by agent, team, and campaign — no manual review needed.",
    bullets: ["Custom questionnaire builder","Weighted answer scoring","Agent and team benchmarks","Score trend reporting","Batch scoring for campaigns","Supervisor override workflow"],
    Illustration: ScoringIllustration, accent: "#22c55e",
  },
  {
    n: "03", title: "Red Flag Detection",
    tagline: "Violations caught automatically.",
    description: "Define keyword libraries and compliance rules. Get instant alerts on 100% of calls — timestamped and escalation-ready.",
    bullets: ["Custom keyword & phrase library","Regex pattern matching","Real-time alert triggers","Escalation routing rules","Violation severity levels","Full audit trail per event"],
    Illustration: RedFlagIllustration, accent: "#ef4444",
  },
  {
    n: "04", title: "Campaign Analytics",
    tagline: "Multi-campaign visibility.",
    description: "Aggregate QA scores, sentiment, and red flag counts by batch, campaign, and agent. Export to CSV or any BI tool.",
    bullets: ["Campaign performance dashboard","Batch comparison views","Agent leaderboard","Conversion correlation","Export to CSV / BI tools","Scheduled report delivery"],
    Illustration: AnalyticsIllustration, accent: "#7AB8FF",
  },
  {
    n: "05", title: "Sentiment Timeline",
    tagline: "The emotional arc of every call.",
    description: "Per-utterance sentiment charted over call duration, with objection and escalation annotations overlaid.",
    bullets: ["Per-utterance sentiment scores","Timeline chart with event overlay","Aggregate sentiment by segment","Correlation with QA scores","Escalation detection","Emotional intensity signals"],
    Illustration: SentimentIllustration, accent: "#eab308",
  },
  {
    n: "06", title: "Human-in-the-Loop",
    tagline: "AI suggests. You confirm.",
    description: "One-click overrides with reason codes. Every correction builds a full audit trail and feeds model improvement.",
    bullets: ["Side-by-side AI vs reviewer view","Override with reason codes","Full correction history","Reviewer performance tracking","Disagreement analytics","Model retraining feed"],
    Illustration: HITLIllustration, accent: "#2C8FFF",
  },
];

const comparisonRows = [
  { feature: "Review speed", manual: "Hours per call", callblick: "< 60 seconds" },
  { feature: "Coverage", manual: "5–10% of calls", callblick: "100% of calls" },
  { feature: "Consistency", manual: "Varies by reviewer", callblick: "Objective every time" },
  { feature: "Red flag detection", manual: "Reactive", callblick: "Automatic" },
  { feature: "Audit trail", manual: "Manual notes", callblick: "Full history" },
  { feature: "Cost per review", manual: "High", callblick: "90% lower" },
];

export default function FeaturesPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-28 pb-32">

      {/* ── Page header — left-aligned, no pill ── */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <FadeInSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] mb-5" style={{ color: "#2C8FFF" }}>
              Platform capabilities
            </p>
            <h1
              className="font-black tracking-[-0.04em] leading-[0.95]"
              style={{ color: "#EEF4FF", fontSize: "clamp(44px,6vw,72px)" }}
            >
              Six tools.
              <br />
              <span style={{
                background: "linear-gradient(135deg, #2C8FFF, #7AB8FF)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
              }}>One platform.</span>
            </h1>
          </div>
          <div>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#B3CFE5" }}>
              Everything your QA team needs — integrated, configurable, and ready
              to process your first call in minutes.
            </p>
            <Link href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
              style={{ background: "#2C8FFF", color: "#fff", boxShadow: "0 8px 24px rgba(44,143,255,0.35)" }}
            >
              See pricing →
            </Link>
          </div>
        </FadeInSection>
      </div>

      {/* ── Feature list — number + illustration grid ── */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="flex flex-col divide-y" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {features.map((f, i) => {
            const { Illustration } = f;
            const open = expanded === i;
            return (
              <FadeInSection key={i} delay={i * 40}>
                <div
                  className="cursor-pointer transition-all duration-300"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                  onClick={() => setExpanded(open ? null : i)}
                >
                  {/* Row header — always visible */}
                  <div className="flex items-center gap-6 py-6 group">
                    <span
                      className="text-sm font-black tabular-nums flex-shrink-0 w-8"
                      style={{ color: open ? f.accent : "rgba(255,255,255,0.2)" }}
                    >
                      {f.n}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-4 flex-wrap">
                        <h3
                          className="text-xl font-black transition-colors duration-200"
                          style={{ color: open ? "#EEF4FF" : "rgba(238,244,255,0.7)" }}
                        >
                          {f.title}
                        </h3>
                        <span className="text-sm hidden sm:block" style={{ color: "#B3CFE5" }}>
                          {f.tagline}
                        </span>
                      </div>
                    </div>
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
                      style={{
                        background: open ? f.accent : "rgba(255,255,255,0.05)",
                        transform: open ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <line x1="5" y1="1" x2="5" y2="9" stroke={open ? "#020912" : "#B3CFE5"} strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="1" y1="5" x2="9" y2="5" stroke={open ? "#020912" : "#B3CFE5"} strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Expanded panel */}
                  {open && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10">
                      {/* Illustration */}
                      <div
                        className="rounded-2xl overflow-hidden"
                        style={{
                          background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${f.accent}08 0%, rgba(10,25,49,0.8) 70%)`,
                          border: `1px solid ${f.accent}20`,
                          height: 180,
                          padding: "20px",
                        }}
                      >
                        <Illustration />
                      </div>

                      {/* Copy */}
                      <div>
                        <p className="text-base leading-relaxed mb-6" style={{ color: "#B3CFE5" }}>
                          {f.description}
                        </p>
                        <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                          {f.bullets.map((b, j) => (
                            <li key={j} className="flex items-center gap-2">
                              <Check size={13} style={{ color: f.accent, flexShrink: 0 }} />
                              <span className="text-sm" style={{ color: "#B3CFE5" }}>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>

      {/* ── Comparison ── */}
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-12">
          <div className="lg:col-span-2">
            <p className="text-xs font-black uppercase tracking-[0.2em] mb-4" style={{ color: "#2C8FFF" }}>
              Why switch
            </p>
            <h2
              className="font-black tracking-[-0.04em] leading-[1.0]"
              style={{ color: "#EEF4FF", fontSize: "clamp(32px,4vw,48px)" }}
            >
              AI vs.
              <br />manual QA.
            </h2>
          </div>
          <div className="lg:col-span-3">
            <p className="text-base leading-relaxed" style={{ color: "#B3CFE5" }}>
              Manual QA covers at best 10% of calls at enormous cost and with inconsistent results.
              CallBlick processes every single call in under 60 seconds.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="grid grid-cols-3" style={{ background: "rgba(44,143,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              {["Criteria", "Manual QA", "CallBlick AI"].map((h, i) => (
                <div key={h} className={`px-6 py-4 text-xs font-black uppercase tracking-widest ${i > 0 ? "text-center" : ""}`}
                  style={{ color: i === 2 ? "#2C8FFF" : "#B3CFE5" }}>
                  {h}
                </div>
              ))}
            </div>
            {comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 group"
                style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent" }}>
                <div className="px-6 py-4 text-sm font-medium" style={{ color: "#EEF4FF" }}>{row.feature}</div>
                <div className="px-6 py-4 text-sm text-center flex items-center justify-center gap-2" style={{ color: "#B3CFE5" }}>
                  <X size={13} style={{ color: "#ef4444", flexShrink: 0 }} />{row.manual}
                </div>
                <div className="px-6 py-4 text-sm text-center flex items-center justify-center gap-2 font-medium" style={{ color: "#22c55e" }}>
                  <Check size={13} style={{ flexShrink: 0 }} />{row.callblick}
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection className="mt-12">
          <Link href="/pricing"
            className="inline-flex px-8 py-4 rounded-xl font-semibold text-sm"
            style={{ background: "#2C8FFF", color: "#fff", boxShadow: "0 8px 32px rgba(44,143,255,0.35)" }}
          >
            Start free — no card needed →
          </Link>
        </FadeInSection>
      </div>
    </div>
  );
}
