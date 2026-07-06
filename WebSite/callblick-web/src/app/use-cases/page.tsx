"use client";

import { useState } from "react";
import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";

/* ── Per-industry SVG illustrations ── */
function InsuranceIllustration() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <defs>
        <linearGradient id="ins-g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(44,143,255,0.15)" />
          <stop offset="100%" stopColor="rgba(10,25,49,0.8)" />
        </linearGradient>
      </defs>
      {/* Document */}
      <rect x="30" y="20" width="110" height="140" rx="8" fill="url(#ins-g)" stroke="rgba(44,143,255,0.25)" strokeWidth="1" />
      <text x="85" y="42" textAnchor="middle" fill="#2C8FFF" fontSize="8" fontWeight="700" fontFamily="system-ui">INSURANCE SCRIPT</text>
      {/* Lines */}
      {[55,70,85,100,115,130,145].map((y, i) => (
        <rect key={y} x="44" y={y} width={i === 2 ? 82 : i === 5 ? 60 : 96} height="7" rx="3.5"
          fill="rgba(255,255,255,0.07)" />
      ))}
      {/* Green checks on required disclosures */}
      <circle cx="133" cy="58" r="7" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.4)" strokeWidth="0.8" />
      <text x="133" y="62" textAnchor="middle" fill="#22c55e" fontSize="9" fontFamily="system-ui">✓</text>
      <circle cx="133" cy="88" r="7" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.4)" strokeWidth="0.8" />
      <text x="133" y="92" textAnchor="middle" fill="#22c55e" fontSize="9" fontFamily="system-ui">✓</text>
      <circle cx="133" cy="118" r="7" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.4)" strokeWidth="0.8" />
      <text x="133" y="122" textAnchor="middle" fill="#ef4444" fontSize="9" fontFamily="system-ui">✗</text>

      {/* Alert callout */}
      <line x1="140" y1="118" x2="168" y2="118" stroke="#ef4444" strokeWidth="0.8" strokeDasharray="3 2" />
      <rect x="168" y="108" width="100" height="28" rx="7"
        fill="rgba(239,68,68,0.1)" stroke="rgba(239,68,68,0.35)" strokeWidth="0.8" />
      <text x="218" y="120" textAnchor="middle" fill="#ef4444" fontSize="7.5" fontWeight="700" fontFamily="system-ui">Missing disclosure</text>
      <text x="218" y="130" textAnchor="middle" fill="rgba(239,68,68,0.7)" fontSize="6.5" fontFamily="system-ui">00:42 · Auto-flagged</text>

      {/* Waveform strip at bottom */}
      <text x="30" y="177" fill="#B3CFE5" fontSize="7.5" fontWeight="700" fontFamily="system-ui">Call timeline</text>
      {Array.from({ length: 38 }).map((_, i) => {
        const x = 30 + (i / 37) * 240;
        const h = Math.round(4 + Math.sin(i * 0.6) * 8 + Math.sin(i * 0.23) * 5);
        const fl = i >= 15 && i <= 19;
        return <rect key={i} x={x - 1.5} y={190 - h / 2} width="3" height={h} rx="1.5"
          fill={fl ? "#ef4444" : "rgba(44,143,255,0.4)"} opacity={fl ? 1 : 0.55} />;
      })}
    </svg>
  );
}

function FinanceIllustration() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      {/* Audit ledger */}
      <rect x="20" y="15" width="260" height="125" rx="10"
        fill="rgba(10,25,49,0.8)" stroke="rgba(44,143,255,0.2)" strokeWidth="1" />
      {/* Header row */}
      <rect x="20" y="15" width="260" height="28" rx="10" fill="rgba(44,143,255,0.08)" />
      <rect x="20" y="33" width="260" height="10" fill="rgba(44,143,255,0.08)" />
      {["Call ID","Agent","Score","Status"].map((h, i) => (
        <text key={h} x={38 + i * 62} y={33} fill="#B3CFE5" fontSize="7" fontWeight="700" fontFamily="system-ui">{h}</text>
      ))}
      {/* Rows */}
      {[
        ["#4821","R.Kim","94","Pass"],
        ["#4822","D.Lee","71","Review"],
        ["#4823","M.Park","100","Pass"],
        ["#4824","T.Wu","88","Pass"],
        ["#4825","S.Cho","58","Fail"],
      ].map(([id,agent,score,status], i) => {
        const color = status === "Pass" ? "#22c55e" : status === "Review" ? "#eab308" : "#ef4444";
        return (
          <g key={i} transform={`translate(0, ${55 + i * 17})`}>
            <rect x="20" y="-1" width="260" height="17" rx="0"
              fill={i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent"} />
            <text x="38" y="11" fill="#B3CFE5" fontSize="7.5" fontFamily="system-ui">{id}</text>
            <text x="100" y="11" fill="#B3CFE5" fontSize="7.5" fontFamily="system-ui">{agent}</text>
            <text x="162" y="11" fill="#EEF4FF" fontSize="7.5" fontWeight="700" fontFamily="system-ui">{score}</text>
            <rect x="206" y="2" width="32" height="11" rx="5" fill={`${color}18`} />
            <text x="222" y="10" textAnchor="middle" fill={color} fontSize="6.5" fontWeight="700" fontFamily="system-ui">{status}</text>
          </g>
        );
      })}

      {/* PCI badge */}
      <rect x="20" y="152" width="88" height="32" rx="8"
        fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.3)" strokeWidth="0.8" />
      <text x="64" y="164" textAnchor="middle" fill="#8b5cf6" fontSize="7.5" fontWeight="700" fontFamily="system-ui">PCI Compliant</text>
      <text x="64" y="177" textAnchor="middle" fill="rgba(139,92,246,0.7)" fontSize="6.5" fontFamily="system-ui">No data exposed</text>

      {/* SOC2 badge */}
      <rect x="118" y="152" width="78" height="32" rx="8"
        fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.25)" strokeWidth="0.8" />
      <text x="157" y="164" textAnchor="middle" fill="#22c55e" fontSize="7.5" fontWeight="700" fontFamily="system-ui">SOC 2 Type II</text>
      <text x="157" y="177" textAnchor="middle" fill="rgba(34,197,94,0.6)" fontSize="6.5" fontFamily="system-ui">Certified</text>

      {/* Export indicator */}
      <rect x="206" y="152" width="74" height="32" rx="8"
        fill="rgba(44,143,255,0.08)" stroke="rgba(44,143,255,0.25)" strokeWidth="0.8" />
      <text x="243" y="164" textAnchor="middle" fill="#2C8FFF" fontSize="7.5" fontWeight="700" fontFamily="system-ui">500 reviews</text>
      <text x="243" y="177" textAnchor="middle" fill="rgba(44,143,255,0.7)" fontSize="6.5" fontFamily="system-ui">Exported in 2 min</text>
    </svg>
  );
}

function SupportIllustration() {
  const calls = [
    { name: "J.Smith", score: 88, csat: 4.5, escalated: false },
    { name: "A.Park", score: 62, csat: 2.1, escalated: true },
    { name: "L.Chen", score: 94, csat: 4.8, escalated: false },
    { name: "R.Davis", score: 71, csat: 3.2, escalated: false },
  ];
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      {/* CSAT vs QA scatter feel — simplified as cards */}
      {calls.map((c, i) => {
        const x = 20 + (i % 2) * 140;
        const y = 12 + Math.floor(i / 2) * 80;
        const scoreColor = c.score >= 85 ? "#22c55e" : c.score >= 70 ? "#2C8FFF" : "#eab308";
        return (
          <g key={i} transform={`translate(${x},${y})`}>
            <rect width="128" height="68" rx="8"
              fill="rgba(10,25,49,0.8)"
              stroke={c.escalated ? "rgba(239,68,68,0.35)" : "rgba(255,255,255,0.07)"}
              strokeWidth="0.8" />
            {c.escalated && (
              <rect x="0" y="0" width="128" height="68" rx="8"
                fill="rgba(239,68,68,0.04)" />
            )}
            <text x="12" y="16" fill="#EEF4FF" fontSize="8" fontWeight="700" fontFamily="system-ui">{c.name}</text>
            {c.escalated && (
              <rect x="72" y="6" width="44" height="12" rx="6"
                fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.4)" strokeWidth="0.7" />
            )}
            {c.escalated && (
              <text x="94" y="15" textAnchor="middle" fill="#ef4444" fontSize="6.5" fontWeight="700" fontFamily="system-ui">Escalated</text>
            )}
            {/* QA score bar */}
            <text x="12" y="32" fill="#B3CFE5" fontSize="6.5" fontFamily="system-ui">QA Score</text>
            <rect x="12" y="35" width="104" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
            <rect x="12" y="35" width={c.score * 1.04} height="6" rx="3" fill={scoreColor} opacity="0.8" />
            <text x="118" y="41" fill={scoreColor} fontSize="7" fontWeight="700" fontFamily="system-ui">{c.score}</text>
            {/* CSAT */}
            <text x="12" y="54" fill="#B3CFE5" fontSize="6.5" fontFamily="system-ui">CSAT</text>
            <text x="44" y="54" fill="#eab308" fontSize="7.5" fontFamily="system-ui">{"★".repeat(Math.floor(c.csat))}</text>
            <text x={44 + Math.floor(c.csat) * 9} y="54" fill="#B3CFE5" fontSize="6.5" fontFamily="system-ui">{c.csat.toFixed(1)}</text>
          </g>
        );
      })}

      {/* Correlation label */}
      <rect x="20" y="172" width="260" height="22" rx="7"
        fill="rgba(44,143,255,0.06)" stroke="rgba(44,143,255,0.2)" strokeWidth="0.7" />
      <text x="150" y="186" textAnchor="middle" fill="#2C8FFF" fontSize="7.5" fontWeight="700" fontFamily="system-ui">
        r = 0.87 correlation between QA score and CSAT
      </text>
    </svg>
  );
}

const useCases = [
  {
    slug: "insurance",
    label: "Insurance Sales",
    headline: "Stay compliant.\nClose with confidence.",
    description: "Insurance sales calls carry strict regulatory requirements. CallBlick ensures every agent delivers required disclosures, stays on script, and leaves a full audit trail.",
    stats: [
      { val: "100%", label: "Disclosure verification" },
      { val: "−62%", label: "Compliance incidents" },
      { val: "< 45s", label: "Per-call analysis" },
    ],
    painPoints: [
      { title: "Compliance disclosure verification", desc: "Every required disclosure verified, timestamped, and logged automatically." },
      { title: "Script adherence scoring", desc: "Score agents on approved script adherence and flag material deviations." },
      { title: "Objection handling detection", desc: "Identify objections and evaluate agent responses — with coaching clips." },
    ],
    redFlag: "Missing required disclosures",
    quote: { text: "CallBlick flagged a missing disclosure issue across 12% of our calls in week one. We fixed the script and haven't had a compliance incident since.", name: "Rachel Kim", role: "Head of Compliance, SunBridge Insurance" },
    Illustration: InsuranceIllustration,
    accent: "#2C8FFF",
  },
  {
    slug: "finance",
    label: "Financial Services",
    headline: "Full audit trails.\nZero regulatory risk.",
    description: "Financial services firms face scrutiny on every customer interaction. CallBlick provides the automated QA infrastructure to prove compliance at scale — ready for any regulator.",
    stats: [
      { val: "500", label: "Reviews in 2 minutes" },
      { val: "100%", label: "Call coverage" },
      { val: "PCI", label: "Sensitive data detection" },
    ],
    painPoints: [
      { title: "Regulatory QA automation", desc: "Apply jurisdiction-specific questionnaires to every call automatically." },
      { title: "PCI / sensitive data detection", desc: "Detect and flag card numbers, SSNs, and other sensitive spoken data." },
      { title: "Agent performance benchmarking", desc: "Benchmark agents against team standards with objective, auditable scores." },
    ],
    redFlag: "PCI / sensitive data spoken on call",
    quote: { text: "Our regulators requested a sample of QA records during an audit. We pulled 500 fully documented reviews in minutes. It was a game-changer.", name: "Daniel Osei", role: "VP Compliance, Meridian Capital" },
    Illustration: FinanceIllustration,
    accent: "#22c55e",
  },
  {
    slug: "support",
    label: "Customer Support",
    headline: "Coach smarter.\nEscalate earlier.",
    description: "Customer support teams live and die by call quality. CallBlick gives supervisors real-time visibility into every agent's performance — with evidence-backed coaching.",
    stats: [
      { val: "+22%", label: "CSAT improvement" },
      { val: "r=0.87", label: "QA↔CSAT correlation" },
      { val: "10×", label: "More coaching data" },
    ],
    painPoints: [
      { title: "CSAT correlation with call quality", desc: "Link QA scores directly to CSAT outcomes to understand what drives satisfaction." },
      { title: "Agent coaching with evidence clips", desc: "Generate coaching moments with exact audio timestamps." },
      { title: "Escalation pattern detection", desc: "Identify calls trending toward escalation before they reach a supervisor." },
    ],
    redFlag: "SLA breach risk flagging",
    quote: { text: "We were flying blind on agent coaching. CallBlick gave us the evidence to have data-driven conversations with every rep. CSAT is up 22%.", name: "Tasha Williams", role: "Customer Success Director, NovaCare" },
    Illustration: SupportIllustration,
    accent: "#eab308",
  },
];

export default function UseCasesPage() {
  const [active, setActive] = useState(0);
  const uc = useCases[active];
  const { Illustration } = uc;

  return (
    <div className="min-h-screen pt-28 pb-32 relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 55% 50% at 20% 30%, rgba(44,143,255,0.07) 0%, transparent 60%)"
      }} />

      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <FadeInSection>
          <p className="text-xs font-black uppercase tracking-[0.2em] mb-5" style={{ color: "#2C8FFF" }}>
            Use cases
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h1
              className="font-black tracking-[-0.04em] leading-[0.95]"
              style={{ color: "#EEF4FF", fontSize: "clamp(44px,6vw,72px)" }}
            >
              Built for
              <br />
              <span style={{
                background: "linear-gradient(135deg, #2C8FFF, #7AB8FF)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
              }}>your industry.</span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "#B3CFE5" }}>
              CallBlick adapts to the compliance requirements, risk profiles, and coaching
              workflows of your specific vertical.
            </p>
          </div>
        </FadeInSection>
      </div>

      {/* ── Industry switcher — vertical tabs on desktop ── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

          {/* Vertical tab list */}
          <div className="flex flex-row lg:flex-col gap-2">
            {useCases.map((u, i) => (
              <button key={i} onClick={() => setActive(i)}
                className="text-left px-4 py-3 rounded-xl transition-all duration-200 text-sm font-semibold flex items-center gap-2.5"
                style={active === i ? {
                  background: `${u.accent}12`,
                  border: `1px solid ${u.accent}35`,
                  color: "#EEF4FF",
                } : {
                  background: "transparent",
                  border: "1px solid transparent",
                  color: "#B3CFE5",
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: active === i ? u.accent : "rgba(255,255,255,0.2)" }} />
                {u.label}
              </button>
            ))}
          </div>

          {/* Content area */}
          <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Left: copy */}
            <div>
              <h2
                className="font-black tracking-[-0.03em] mb-4 whitespace-pre-line leading-[1.05]"
                style={{ color: "#EEF4FF", fontSize: "clamp(28px,3.5vw,40px)" }}
              >
                {uc.headline}
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#B3CFE5" }}>
                {uc.description}
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {uc.stats.map((s, i) => (
                  <div key={i} className="rounded-xl p-4"
                    style={{ background: "rgba(10,25,49,0.7)", border: `1px solid ${uc.accent}18` }}>
                    <div className="w-4 h-0.5 rounded mb-2" style={{ background: uc.accent }} />
                    <div className="text-xl font-black" style={{ color: "#EEF4FF" }}>{s.val}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#B3CFE5" }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Pain points */}
              <div className="flex flex-col gap-3 mb-8">
                {uc.painPoints.map((p, i) => (
                  <div key={i} className="flex gap-3 group">
                    <div className="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${uc.accent}15`, border: `1px solid ${uc.accent}30` }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: uc.accent }} />
                    </div>
                    <div>
                      <div className="text-sm font-bold mb-0.5" style={{ color: "#EEF4FF" }}>{p.title}</div>
                      <div className="text-sm" style={{ color: "#B3CFE5" }}>{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Red flag inline tag — not a pill badge, more like a warning strip */}
              <div className="flex items-center gap-3 mb-8 py-2.5 px-4 rounded-lg"
                style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)" }}>
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#ef4444" }} />
                <span className="text-xs font-semibold" style={{ color: "#ef4444" }}>
                  Red flag monitored: {uc.redFlag}
                </span>
              </div>

              <Link href="/pricing"
                className="inline-flex px-7 py-3.5 rounded-xl text-sm font-semibold"
                style={{ background: uc.accent, color: uc.accent === "#eab308" ? "#020912" : "#fff", boxShadow: `0 8px 24px ${uc.accent}35` }}
              >
                Get started →
              </Link>
            </div>

            {/* Right: illustration + quote */}
            <div className="flex flex-col gap-5">
              {/* Illustration panel */}
              <div className="rounded-2xl overflow-hidden p-4"
                style={{
                  background: `radial-gradient(ellipse 80% 70% at 50% 50%, ${uc.accent}08 0%, rgba(10,25,49,0.85) 70%)`,
                  border: `1px solid ${uc.accent}20`,
                  height: 220,
                }}>
                <Illustration />
              </div>

              {/* Quote */}
              <div className="rounded-2xl p-6"
                style={{ background: "rgba(10,25,49,0.7)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex gap-0.5 mb-3">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i} className="text-xs" style={{ color: "#eab308" }}>{s}</span>
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed mb-4 italic" style={{ color: "#EEF4FF" }}>
                  &ldquo;{uc.quote.text}&rdquo;
                </blockquote>
                <div>
                  <div className="text-sm font-black" style={{ color: "#EEF4FF" }}>{uc.quote.name}</div>
                  <div className="text-xs" style={{ color: "#B3CFE5" }}>{uc.quote.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
