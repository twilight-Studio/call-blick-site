"use client";

import FadeInSection from "@/components/FadeInSection";

/* ─── Unique SVG graphic per feature ─── */

function TranscriptionGraphic() {
  const lines = [
    { w: 220, label: "Agent", offset: 0 },
    { w: 170, label: "Customer", offset: 1 },
    { w: 200, label: "Agent", offset: 2 },
    { w: 140, label: "Customer", offset: 3 },
    { w: 190, label: "Agent", offset: 4 },
  ];
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full">
      <defs>
        <linearGradient id="tg1" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#2C8FFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2C8FFF" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="tg2" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#7AB8FF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#7AB8FF" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      {lines.map((l, i) => (
        <g key={i} transform={`translate(0, ${14 + i * 32})`}>
          <rect x="0" y="0" width="44" height="16" rx="8"
            fill={i % 2 === 0 ? "rgba(44,143,255,0.15)" : "rgba(255,255,255,0.05)"}
          />
          <text x="22" y="11.5" textAnchor="middle" fill={i % 2 === 0 ? "#2C8FFF" : "#B3CFE5"}
            fontSize="7" fontWeight="700" fontFamily="system-ui">
            {l.label}
          </text>
          <rect x="54" y="3" width={l.w} height="10" rx="5"
            fill={`url(#tg${i % 2 + 1})`}
          />
          <circle cx={54 + l.w + 8} cy="8" r="3.5"
            fill={i % 2 === 0 ? "rgba(44,143,255,0.5)" : "rgba(255,255,255,0.15)"}
          />
          <text x={54 + l.w + 8} y="10" textAnchor="middle" fill="#B3CFE5" fontSize="5" fontFamily="system-ui">
            {(0.87 + (i * 0.03)).toFixed(2)}
          </text>
        </g>
      ))}
      {/* Live indicator */}
      <circle cx="302" cy="12" r="5" fill="#22c55e" opacity="0.9">
        <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="294" y="13" textAnchor="end" fill="#22c55e" fontSize="7" fontWeight="700" fontFamily="system-ui">LIVE</text>
    </svg>
  );
}

function ScoringGraphic() {
  const items = [
    { label: "Opening Script", score: 95, color: "#22c55e" },
    { label: "Compliance", score: 100, color: "#22c55e" },
    { label: "Product Knowledge", score: 82, color: "#2C8FFF" },
    { label: "Closing", score: 68, color: "#eab308" },
  ];
  return (
    <svg viewBox="0 0 300 180" className="w-full h-full">
      <defs>
        <linearGradient id="sg-bg" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.01)" />
        </linearGradient>
      </defs>
      {/* Big score ring */}
      <circle cx="60" cy="90" r="48" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
      <circle cx="60" cy="90" r="48" fill="none" stroke="#22c55e" strokeWidth="8"
        strokeDasharray={`${(88 / 100) * 301} 301`}
        strokeDashoffset="75"
        strokeLinecap="round"
      />
      <text x="60" y="85" textAnchor="middle" fill="#EEF4FF" fontSize="20" fontWeight="900" fontFamily="system-ui">88</text>
      <text x="60" y="100" textAnchor="middle" fill="#B3CFE5" fontSize="7" fontFamily="system-ui">QA SCORE</text>

      {/* Bar list */}
      {items.map((item, i) => (
        <g key={i} transform={`translate(128, ${16 + i * 38})`}>
          <text y="10" fill="#B3CFE5" fontSize="8" fontFamily="system-ui">{item.label}</text>
          <rect y="16" width="155" height="7" rx="3.5" fill="rgba(255,255,255,0.05)" />
          <rect y="16" width={item.score * 1.55} height="7" rx="3.5" fill={item.color} opacity="0.85" />
          <text x="160" y="23" fill={item.color} fontSize="8" fontWeight="800" fontFamily="system-ui">{item.score}</text>
        </g>
      ))}
    </svg>
  );
}

function RedFlagGraphic() {
  return (
    <svg viewBox="0 0 300 180" className="w-full h-full">
      {/* Timeline line */}
      <line x1="20" y1="90" x2="280" y2="90" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />

      {/* Waveform */}
      {Array.from({ length: 50 }).map((_, i) => {
        const x = 20 + (i / 50) * 260;
        const h = Math.round(8 + Math.sin(i * 0.7) * 22 + Math.sin(i * 0.23) * 12);
        const isFlagged = i >= 18 && i <= 22;
        return (
          <rect key={i} x={x - 1.5} y={90 - h / 2} width="2.5" height={h} rx="1.2"
            fill={isFlagged ? "#ef4444" : "rgba(44,143,255,0.5)"}
            opacity={isFlagged ? 1 : 0.65}
          />
        );
      })}

      {/* Flag marker */}
      <line x1="124" y1="30" x2="124" y2="110" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
      <rect x="80" y="8" width="128" height="28" rx="8" fill="rgba(239,68,68,0.12)" stroke="rgba(239,68,68,0.4)" strokeWidth="1" />
      <circle cx="94" cy="22" r="5" fill="rgba(239,68,68,0.3)" />
      <text x="95" y="25" fill="#ef4444" fontSize="7" fontWeight="800" fontFamily="system-ui">!</text>
      <text x="104" y="26" fill="#EEF4FF" fontSize="7.5" fontFamily="system-ui">Missing disclosure</text>
      <text x="104" y="33" fill="#B3CFE5" fontSize="6.5" fontFamily="system-ui">00:42 · High severity</text>

      {/* Second flag */}
      <line x1="178" y1="50" x2="178" y2="110" stroke="#eab308" strokeWidth="1" strokeDasharray="3 3" />
      <rect x="152" y="34" width="98" height="22" rx="7" fill="rgba(234,179,8,0.1)" stroke="rgba(234,179,8,0.35)" strokeWidth="1" />
      <text x="162" y="48" fill="#eab308" fontSize="7.5" fontFamily="system-ui">Guarantee language</text>

      {/* Tick marks on timeline */}
      {[0, 1, 2, 3, 4, 5].map(i => (
        <g key={i}>
          <line x1={20 + i * 52} y1="95" x2={20 + i * 52} y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <text x={20 + i * 52} y="110" textAnchor="middle" fill="#B3CFE5" fontSize="6.5" fontFamily="system-ui">
            0{i}:{i === 0 ? "00" : i * 52 % 60 < 10 ? `0${i * 10}` : `${i * 10}`}
          </text>
        </g>
      ))}
    </svg>
  );
}

function AnalyticsGraphic() {
  const campaigns = [
    { label: "Campaign A", vals: [72, 68, 75, 82, 88, 91], color: "#2C8FFF" },
    { label: "Campaign B", vals: [58, 62, 61, 70, 74, 80], color: "#7AB8FF" },
  ];
  const w = 280;
  const h = 120;
  const cols = 6;
  const maxVal = 100;

  const pathFor = (vals: number[]) => {
    const pts = vals.map((v, i) => {
      const x = (i / (cols - 1)) * w;
      const y = h - (v / maxVal) * h;
      return `${x},${y}`;
    });
    return "M" + pts.join(" L");
  };

  const areaFor = (vals: number[]) => {
    const pts = vals.map((v, i) => {
      const x = (i / (cols - 1)) * w;
      const y = h - (v / maxVal) * h;
      return `${x},${y}`;
    });
    return `M0,${h} ${pts.map((p, i) => (i === 0 ? "L" : "") + p).join(" L")} L${w},${h} Z`;
  };

  return (
    <svg viewBox="0 0 300 180" className="w-full h-full">
      <defs>
        <linearGradient id="ag1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#2C8FFF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#2C8FFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ag2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#7AB8FF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#7AB8FF" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g transform="translate(10, 10)">
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map(v => (
          <line key={v} x1="0" y1={h - (v / 100) * h} x2={w} y2={h - (v / 100) * h}
            stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        ))}

        {/* Areas */}
        {campaigns.map((c, ci) => (
          <path key={ci} d={areaFor(c.vals)} fill={`url(#ag${ci + 1})`} />
        ))}

        {/* Lines */}
        {campaigns.map((c, ci) => (
          <path key={ci} d={pathFor(c.vals)} fill="none" stroke={c.color}
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        ))}

        {/* Dots on last point */}
        {campaigns.map((c, ci) => {
          const lv = c.vals[c.vals.length - 1];
          return (
            <circle key={ci} cx={w} cy={h - (lv / 100) * h} r="4"
              fill={c.color} stroke="rgba(2,9,18,0.8)" strokeWidth="2" />
          );
        })}

        {/* Legend */}
        {campaigns.map((c, ci) => (
          <g key={ci} transform={`translate(0, ${h + 22 + ci * 14})`}>
            <line x1="0" y1="5" x2="16" y2="5" stroke={c.color} strokeWidth="2" strokeLinecap="round" />
            <text x="22" y="9" fill="#B3CFE5" fontSize="8" fontFamily="system-ui">{c.label}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

function SentimentGraphic() {
  const points: [number, number][] = [
    [0, 55], [1, 48], [2, 52], [3, 45], [4, 60], [5, 55],
    [6, 50], [7, 42], [8, 35], [9, 30], [10, 40], [11, 52],
    [12, 65], [13, 72], [14, 68], [15, 75], [16, 80], [17, 85],
    [18, 82], [19, 88],
  ];
  const w = 280;
  const h = 120;

  const toXY = ([t, v]: [number, number]) => {
    const x = (t / (points.length - 1)) * w;
    const y = h - (v / 100) * h;
    return [x, y] as [number, number];
  };

  const pathD = points.map((p, i) => {
    const [x, y] = toXY(p);
    return `${i === 0 ? "M" : "L"}${x},${y}`;
  }).join(" ");

  const areaD = points.map((p, i) => {
    const [x, y] = toXY(p);
    return `${i === 0 ? `M0,${h} L` : "L"}${x},${y}`;
  }).join(" ") + ` L${w},${h} Z`;

  const negative = points.filter(p => p[1] < 45);
  const positive = points.filter(p => p[1] >= 70);

  return (
    <svg viewBox="0 0 300 180" className="w-full h-full">
      <defs>
        <linearGradient id="sent-area" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.25" />
          <stop offset="50%" stopColor="#2C8FFF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g transform="translate(10, 10)">
        {/* Zone bands */}
        <rect x="0" y="0" width={w} height={h * 0.3} rx="0" fill="rgba(34,197,94,0.04)" />
        <rect x="0" y={h * 0.55} width={w} height={h * 0.45} rx="0" fill="rgba(239,68,68,0.04)" />

        {/* Labels */}
        <text x="4" y="11" fill="rgba(34,197,94,0.5)" fontSize="7" fontFamily="system-ui">Positive</text>
        <text x="4" y={h - 4} fill="rgba(239,68,68,0.5)" fontSize="7" fontFamily="system-ui">Negative</text>

        {/* Area + line */}
        <path d={areaD} fill="url(#sent-area)" />
        <path d={pathD} fill="none" stroke="#2C8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        {/* Highlight peaks */}
        {positive.map((p, i) => {
          const [x, y] = toXY(p);
          return <circle key={i} cx={x} cy={y} r="3" fill="#22c55e" opacity="0.8" />;
        })}
        {negative.map((p, i) => {
          const [x, y] = toXY(p);
          return <circle key={i} cx={x} cy={y} r="3" fill="#ef4444" opacity="0.8" />;
        })}

        {/* Annotation */}
        <line x1={toXY(points[8])[0]} y1={toXY(points[8])[1] - 8} x2={toXY(points[8])[0]} y2={toXY(points[8])[1]} stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
        <rect x={toXY(points[8])[0] - 28} y={toXY(points[8])[1] - 22} width="56" height="14" rx="4" fill="rgba(239,68,68,0.12)" stroke="rgba(239,68,68,0.4)" strokeWidth="0.8" />
        <text x={toXY(points[8])[0]} y={toXY(points[8])[1] - 12} textAnchor="middle" fill="#ef4444" fontSize="6.5" fontFamily="system-ui">Objection raised</text>
      </g>
    </svg>
  );
}

function HITLGraphic() {
  return (
    <svg viewBox="0 0 300 180" className="w-full h-full">
      {/* AI suggestion box */}
      <rect x="10" y="20" width="130" height="65" rx="10" fill="rgba(44,143,255,0.08)" stroke="rgba(44,143,255,0.3)" strokeWidth="1" />
      <text x="22" y="38" fill="#2C8FFF" fontSize="7.5" fontWeight="700" fontFamily="system-ui">AI Suggestion</text>
      <rect x="22" y="44" width="88" height="8" rx="4" fill="rgba(255,255,255,0.06)" />
      <rect x="22" y="56" width="72" height="8" rx="4" fill="rgba(255,255,255,0.06)" />
      <rect x="22" y="68" width="60" height="8" rx="4" fill="rgba(255,255,255,0.06)" />
      {/* AI tick */}
      <circle cx="124" cy="75" r="8" fill="rgba(44,143,255,0.15)" stroke="rgba(44,143,255,0.4)" strokeWidth="1" />
      <text x="124" y="79" textAnchor="middle" fill="#2C8FFF" fontSize="10" fontFamily="system-ui">✓</text>

      {/* Arrow */}
      <path d="M145,52 C165,52 170,68 160,80" fill="none" stroke="rgba(44,143,255,0.4)" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points="155,77 162,83 164,74" fill="rgba(44,143,255,0.5)" />

      {/* Human review box */}
      <rect x="160" y="50" width="130" height="80" rx="10" fill="rgba(34,197,94,0.07)" stroke="rgba(34,197,94,0.3)" strokeWidth="1" />
      <text x="172" y="67" fill="#22c55e" fontSize="7.5" fontWeight="700" fontFamily="system-ui">Reviewer Override</text>
      <rect x="172" y="74" width="70" height="8" rx="4" fill="rgba(255,255,255,0.06)" />
      <rect x="172" y="86" width="88" height="8" rx="4" fill="rgba(255,255,255,0.06)" />
      {/* Reason code badge */}
      <rect x="172" y="100" width="72" height="16" rx="8" fill="rgba(234,179,8,0.12)" stroke="rgba(234,179,8,0.35)" strokeWidth="0.8" />
      <text x="208" y="111" textAnchor="middle" fill="#eab308" fontSize="7" fontFamily="system-ui">RC-04: Script change</text>

      {/* Audit trail dots */}
      <text x="18" y="118" fill="#B3CFE5" fontSize="7.5" fontWeight="700" fontFamily="system-ui">Audit trail</text>
      {[0,1,2,3,4].map(i => (
        <g key={i} transform={`translate(${18 + i * 42}, 128)`}>
          <circle cx="6" cy="6" r="5" fill={i < 3 ? "rgba(44,143,255,0.2)" : "rgba(255,255,255,0.05)"}
            stroke={i < 3 ? "rgba(44,143,255,0.4)" : "rgba(255,255,255,0.1)"} strokeWidth="0.8" />
          <text x="6" y="9" textAnchor="middle" fill={i < 3 ? "#2C8FFF" : "rgba(255,255,255,0.2)"} fontSize="6" fontFamily="system-ui">{i + 1}</text>
          {i < 4 && <line x1="14" y1="6" x2="36" y2="6" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />}
        </g>
      ))}
    </svg>
  );
}

/* ─── Bento cells config ─── */
const cells = [
  {
    id: "transcription",
    col: "lg:col-span-2",
    title: "Async Transcription",
    tagline: "Every word, attributed.",
    desc: "Speaker-diarized transcripts with per-word confidence scores and 30+ language support. An average call can be processed in as little as 60 seconds.",
    Graphic: TranscriptionGraphic,
    accentColor: "#2C8FFF",
  },
  {
    id: "redflags",
    col: "lg:col-span-1",
    title: "Red Flag Detection",
    tagline: "Compliance, automated.",
    desc: "Timestamped flags for missing disclosures, forbidden phrases, and regulatory violations across uploaded calls.",
    Graphic: RedFlagGraphic,
    accentColor: "#ef4444",
  },
  {
    id: "scoring",
    col: "lg:col-span-1",
    title: "QA Scoring",
    tagline: "Objective. Consistent.",
    desc: "Custom questionnaire rubrics, weighted per answer. Every call scored the same way, every time.",
    Graphic: ScoringGraphic,
    accentColor: "#22c55e",
  },
  {
    id: "analytics",
    col: "lg:col-span-2",
    title: "Campaign Analytics",
    tagline: "Know what's moving the needle.",
    desc: "Aggregate QA trends by campaign, batch, and agent. Built-in leaderboards and CSV export.",
    Graphic: AnalyticsGraphic,
    accentColor: "#7AB8FF",
  },
  {
    id: "sentiment",
    col: "lg:col-span-2",
    title: "Sentiment Timeline",
    tagline: "The emotional arc of every call.",
    desc: "Per-utterance sentiment mapped over the call duration — with objection and escalation annotations.",
    Graphic: SentimentGraphic,
    accentColor: "#eab308",
  },
  {
    id: "hitl",
    col: "lg:col-span-1",
    title: "Human-in-the-Loop",
    tagline: "AI suggests. You decide.",
    desc: "One-click overrides with reason codes. Every correction logged, every disagreement tracked.",
    Graphic: HITLGraphic,
    accentColor: "#2C8FFF",
  },
];

export default function FeatureShowcase() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header — left aligned, no pill */}
        <FadeInSection className="mb-16 max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] mb-4" style={{ color: "#2C8FFF" }}>
            Platform
          </p>
          <h2
            className="font-black tracking-[-0.03em] mb-4"
            style={{ color: "#EEF4FF", fontSize: "clamp(32px,4.5vw,52px)", lineHeight: "1.05" }}
          >
            Six tools.<br />One platform.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#B3CFE5", maxWidth: 420 }}>
            Everything your QA team needs, integrated and ready in minutes.
          </p>
        </FadeInSection>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {cells.map((cell, i) => {
            const { Graphic } = cell;
            const isTall = cell.col.includes("col-span-2");
            return (
              <FadeInSection
                key={cell.id}
                delay={i * 60}
                className={`${cell.col} group`}
              >
                <div
                  className="h-full rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
                  style={{
                    background: "rgba(10,25,49,0.6)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    minHeight: isTall ? 280 : 260,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.border = `1px solid ${cell.accentColor}30`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${cell.accentColor}10`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Graphic area */}
                  <div
                    className="flex-1 p-5 pb-0 overflow-hidden"
                    style={{
                      background: `radial-gradient(ellipse 80% 80% at 50% 60%, ${cell.accentColor}08 0%, transparent 70%)`,
                    }}
                  >
                    <div className="h-44">
                      <Graphic />
                    </div>
                  </div>

                  {/* Text area */}
                  <div
                    className="px-5 py-5"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <p
                      className="text-[10px] font-black uppercase tracking-[0.16em] mb-1.5"
                      style={{ color: cell.accentColor }}
                    >
                      {cell.tagline}
                    </p>
                    <h3
                      className="text-base font-black mb-1.5"
                      style={{ color: "#EEF4FF" }}
                    >
                      {cell.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#B3CFE5" }}>
                      {cell.desc}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
