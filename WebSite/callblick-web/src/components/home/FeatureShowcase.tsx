import FadeInSection from "@/components/FadeInSection";
import {
  Mic,
  BarChart3,
  ShieldAlert,
  Layers,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Mic,
    headline: "Every word captured. Instantly.",
    sub: "Real-time speech-to-text with speaker diarization, precise timestamps, and per-word confidence scores — so nothing slips through.",
    bullets: [
      "Speaker-separated transcripts with timestamps",
      "Per-word confidence scoring",
      "Supports 30+ languages and accents",
    ],
    mockup: "transcription",
  },
  {
    icon: BarChart3,
    headline: "Objective scores. Zero bias.",
    sub: "Questionnaire-driven AI scoring evaluates every call against your rubric — weighted by importance — delivering consistent grades at scale.",
    bullets: [
      "Custom QA questionnaire builder",
      "Weighted scoring per answer",
      "Benchmarks by agent, team, and campaign",
    ],
    mockup: "scoring",
  },
  {
    icon: ShieldAlert,
    headline: "Catch risks before they escalate.",
    sub: "Automatic detection of compliance violations, forbidden phrases, and regulatory red flags — in real time, across 100% of calls.",
    bullets: [
      "Custom keyword & phrase libraries",
      "Instant alerts and escalation workflows",
      "Full audit trail per violation",
    ],
    mockup: "redflags",
  },
  {
    icon: Layers,
    headline: "See what's working across every campaign.",
    sub: "Aggregate performance analytics sliced by batch, campaign, and individual agent — so you know exactly where to coach.",
    bullets: [
      "Campaign-level performance dashboards",
      "Agent leaderboards and trend lines",
      "Export to CSV or BI tools",
    ],
    mockup: "analytics",
  },
  {
    icon: TrendingUp,
    headline: "Read the room, sentence by sentence.",
    sub: "Per-utterance sentiment scores charted over the full call duration — revealing the emotional arc of every conversation.",
    bullets: [
      "Positive / neutral / negative per utterance",
      "Timeline chart with call events overlay",
      "Correlation with QA outcomes",
    ],
    mockup: "sentiment",
  },
  {
    icon: CheckCircle2,
    headline: "AI suggests. Humans confirm.",
    sub: "Reviewers can override any AI answer with one click. Every correction feeds back into the model — with a full audit trail.",
    bullets: [
      "Side-by-side AI vs reviewer view",
      "Override with reason codes",
      "Full correction history",
    ],
    mockup: "hitl",
  },
];

function FeatureMockup({ type }: { type: string }) {
  const colors: Record<string, string> = {
    transcription: "#2C8FFF",
    scoring: "#22c55e",
    redflags: "#ef4444",
    analytics: "#8b5cf6",
    sentiment: "#eab308",
    hitl: "#2C8FFF",
  };
  const color = colors[type] || "#2C8FFF";

  return (
    <div
      className="rounded-3xl p-6 h-64 flex flex-col gap-4"
      style={{
        background: "rgba(10,25,49,0.9)",
        border: `1px solid ${color}30`,
        boxShadow: `0 0 40px ${color}10`,
      }}
    >
      <div className="flex items-center justify-between">
        <div
          className="h-5 w-32 rounded-lg"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />
        <div
          className="h-5 w-16 rounded-full"
          style={{ background: `${color}20`, border: `1px solid ${color}40` }}
        />
      </div>

      {type === "transcription" && (
        <div className="flex flex-col gap-2 mt-2">
          {[
            { speaker: "Agent", text: "Thank you for calling today...", w: "80%" },
            { speaker: "Customer", text: "I wanted to ask about my policy", w: "70%" },
            { speaker: "Agent", text: "Of course, let me pull that up.", w: "65%" },
            { speaker: "Customer", text: "The renewal date is what I am unsure about", w: "85%" },
          ].map((line, i) => (
            <div key={i} className="flex items-start gap-2">
              <div
                className="text-[10px] font-bold mt-0.5 flex-shrink-0 px-2 py-0.5 rounded-full"
                style={{
                  background: i % 2 === 0 ? `${color}20` : "rgba(255,255,255,0.06)",
                  color: i % 2 === 0 ? color : "#B3CFE5",
                }}
              >
                {line.speaker}
              </div>
              <div
                className="h-4 rounded-lg"
                style={{ width: line.w, background: "rgba(255,255,255,0.06)" }}
              />
            </div>
          ))}
        </div>
      )}

      {type === "scoring" && (
        <div className="flex flex-col gap-3 mt-2">
          {[
            { label: "Opening Script", score: 95 },
            { label: "Product Knowledge", score: 88 },
            { label: "Compliance Check", score: 100 },
            { label: "Closing Technique", score: 72 },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div
                className="text-[10px] w-28 flex-shrink-0"
                style={{ color: "#B3CFE5" }}
              >
                {item.label}
              </div>
              <div
                className="flex-1 h-2 rounded-full"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${item.score}%`,
                    background: item.score >= 90 ? "#22c55e" : item.score >= 75 ? color : "#eab308",
                  }}
                />
              </div>
              <div className="text-xs font-bold w-8 text-right" style={{ color: "#EEF4FF" }}>
                {item.score}
              </div>
            </div>
          ))}
        </div>
      )}

      {type === "redflags" && (
        <div className="flex flex-col gap-2 mt-2">
          {[
            { text: "Missing required disclosure at 00:42", severity: "high" },
            { text: "Guarantee language detected at 01:18", severity: "high" },
            { text: "Script deviation at 03:05", severity: "medium" },
          ].map((flag, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-3 py-2 rounded-xl"
              style={{
                background: flag.severity === "high" ? "rgba(239,68,68,0.1)" : "rgba(234,179,8,0.1)",
                border: `1px solid ${flag.severity === "high" ? "rgba(239,68,68,0.3)" : "rgba(234,179,8,0.3)"}`,
              }}
            >
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: flag.severity === "high" ? "#ef4444" : "#eab308" }}
              />
              <div className="text-[11px]" style={{ color: "#EEF4FF" }}>{flag.text}</div>
            </div>
          ))}
        </div>
      )}

      {(type === "analytics" || type === "sentiment" || type === "hitl") && (
        <div className="flex items-end gap-1 flex-1 mt-2">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${Math.round(25 + Math.sin(i * 0.6 + (type === "sentiment" ? 1 : 0)) * 35 + 35)}%`,
                background:
                  type === "sentiment"
                    ? i > 16
                      ? "#22c55e"
                      : i > 8
                      ? color
                      : "rgba(44,143,255,0.35)"
                    : `${color}${Math.floor(40 + (i / 24) * 120).toString(16)}`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function FeatureShowcase() {
  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <FadeInSection className="text-center mb-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(44,143,255,0.1)",
              border: "1px solid rgba(44,143,255,0.25)",
            }}
          >
            <span
              className="text-[10px] font-black uppercase tracking-[0.14em]"
              style={{ color: "#2C8FFF" }}
            >
              Features
            </span>
          </div>
          <h2
            className="text-[clamp(36px,5vw,52px)] font-black tracking-[-0.03em] mb-4"
            style={{ color: "#EEF4FF" }}
          >
            Everything your QA team needs.
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#B3CFE5" }}
          >
            From transcription to compliance, every tool you need to run a
            world-class call center QA operation.
          </p>
        </FadeInSection>

        {/* Alternating feature rows */}
        <div className="flex flex-col gap-24">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isEven = i % 2 === 0;

            return (
              <FadeInSection key={i} delay={i * 50}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* Copy side */}
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <div
                      className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6"
                      style={{
                        background: "rgba(44,143,255,0.12)",
                        border: "1px solid rgba(44,143,255,0.25)",
                      }}
                    >
                      <Icon size={22} color="#2C8FFF" />
                    </div>
                    <h3
                      className="text-[28px] font-black tracking-[-0.02em] mb-4"
                      style={{ color: "#EEF4FF" }}
                    >
                      {feature.headline}
                    </h3>
                    <p
                      className="text-base leading-relaxed mb-6"
                      style={{ color: "#B3CFE5" }}
                    >
                      {feature.sub}
                    </p>
                    <ul className="flex flex-col gap-3">
                      {feature.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ background: "rgba(44,143,255,0.15)" }}
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: "#2C8FFF" }}
                            />
                          </div>
                          <span
                            className="text-sm font-medium"
                            style={{ color: "#B3CFE5" }}
                          >
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mockup side */}
                  <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                    <FeatureMockup type={feature.mockup} />
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
