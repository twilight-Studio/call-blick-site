import Link from "next/link";
import {
  Mic,
  BarChart3,
  ShieldAlert,
  Layers,
  TrendingUp,
  CheckCircle2,
  Check,
  X,
} from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const features = [
  {
    icon: Mic,
    title: "Real-time Transcription",
    tagline: "Every word captured. Instantly.",
    description:
      "Industry-leading speech-to-text with speaker diarization, precise timestamps, and per-word confidence scoring. Supports 30+ languages.",
    bullets: [
      "Speaker-separated transcripts",
      "Per-word confidence scores",
      "30+ language support",
      "Custom vocabulary lists",
      "Filler word detection",
      "Silence / hold time tracking",
    ],
  },
  {
    icon: BarChart3,
    title: "QA Scoring",
    tagline: "Objective scores. Zero bias.",
    description:
      "Build custom questionnaires with weighted answers. Every call is scored automatically against your rubric — no manual review needed.",
    bullets: [
      "Custom questionnaire builder",
      "Weighted answer scoring",
      "Agent and team benchmarks",
      "Score trend reporting",
      "Batch scoring for campaigns",
      "Supervisor override workflow",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Red Flag Detection",
    tagline: "Catch risks before they escalate.",
    description:
      "Define custom keyword libraries and compliance rules. Get instant alerts when violations are detected — across 100% of calls.",
    bullets: [
      "Custom keyword & phrase library",
      "Regex pattern matching",
      "Real-time alert triggers",
      "Escalation routing rules",
      "Violation severity levels",
      "Full audit trail per event",
    ],
  },
  {
    icon: Layers,
    title: "Campaign Analytics",
    tagline: "See what's working across every campaign.",
    description:
      "Aggregate QA performance, sentiment scores, and red flag counts by batch, campaign, and individual agent.",
    bullets: [
      "Campaign performance dashboard",
      "Batch comparison views",
      "Agent leaderboard",
      "Conversion correlation",
      "Export to CSV / BI tools",
      "Scheduled report delivery",
    ],
  },
  {
    icon: TrendingUp,
    title: "Sentiment Timeline",
    tagline: "Read the room, sentence by sentence.",
    description:
      "Visualize the emotional arc of every conversation with per-utterance sentiment scoring charted over the full call duration.",
    bullets: [
      "Per-utterance sentiment scores",
      "Timeline chart with event overlay",
      "Aggregate sentiment by segment",
      "Correlation with QA scores",
      "Escalation detection",
      "Emotional intensity signals",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Human-in-the-Loop",
    tagline: "AI suggests. Humans confirm.",
    description:
      "Reviewers can accept, reject, or override any AI answer with reason codes — building a continuous feedback loop for model improvement.",
    bullets: [
      "Side-by-side AI vs reviewer view",
      "Override with reason codes",
      "Full correction history",
      "Reviewer performance tracking",
      "Disagreement analytics",
      "Model retraining feed",
    ],
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
  return (
    <div className="min-h-screen pt-24 pb-32">
      {/* Hero */}
      <FadeInSection className="text-center max-w-3xl mx-auto px-6 mb-24">
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
        <h1
          className="text-[clamp(40px,6vw,64px)] font-black tracking-[-0.04em] mb-4"
          style={{ color: "#EEF4FF" }}
        >
          Everything you need for world-class call center QA.
        </h1>
        <p className="text-lg" style={{ color: "#B3CFE5" }}>
          Six powerful capabilities — fully integrated, infinitely configurable.
        </p>
      </FadeInSection>

      {/* Feature cards grid */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <FadeInSection key={i} delay={i * 60}>
                <div
                  className="rounded-3xl p-8 h-full flex flex-col transition-all duration-300 glow-hover"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: "rgba(44,143,255,0.12)",
                      border: "1px solid rgba(44,143,255,0.25)",
                    }}
                  >
                    <Icon size={22} color="#2C8FFF" />
                  </div>

                  <div
                    className="text-xs font-black uppercase tracking-[0.14em] mb-2"
                    style={{ color: "#2C8FFF" }}
                  >
                    {feature.tagline}
                  </div>

                  <h3
                    className="text-xl font-black mb-3"
                    style={{ color: "#EEF4FF" }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "#B3CFE5" }}
                  >
                    {feature.description}
                  </p>

                  <ul className="flex flex-col gap-2 flex-1">
                    {feature.bullets.map((b, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <Check
                          size={14}
                          style={{ color: "#22c55e", flexShrink: 0 }}
                        />
                        <span
                          className="text-sm"
                          style={{ color: "#B3CFE5" }}
                        >
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Link
                      href="#"
                      className="text-sm font-bold flex items-center gap-1 transition-colors duration-150"
                      style={{ color: "#2C8FFF" }}
                    >
                      See it in action →
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>

      {/* Comparison table */}
      <div className="max-w-5xl mx-auto px-6">
        <FadeInSection className="text-center mb-12">
          <h2
            className="text-[clamp(28px,4vw,44px)] font-black tracking-[-0.03em] mb-4"
            style={{ color: "#EEF4FF" }}
          >
            CallBlick vs. Manual QA
          </h2>
          <p className="text-lg" style={{ color: "#B3CFE5" }}>
            The case for AI-powered quality assurance.
          </p>
        </FadeInSection>

        <FadeInSection>
          <div
            className="rounded-3xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {/* Table header */}
            <div
              className="grid grid-cols-3 gap-0"
              style={{ background: "rgba(44,143,255,0.08)" }}
            >
              <div className="px-6 py-4 text-sm font-black uppercase tracking-wider" style={{ color: "#B3CFE5" }}>
                Criteria
              </div>
              <div className="px-6 py-4 text-sm font-black uppercase tracking-wider text-center" style={{ color: "#B3CFE5" }}>
                Manual QA
              </div>
              <div className="px-6 py-4 text-sm font-black uppercase tracking-wider text-center" style={{ color: "#2C8FFF" }}>
                CallBlick AI
              </div>
            </div>

            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 gap-0"
                style={{
                  background:
                    i % 2 === 0
                      ? "rgba(255,255,255,0.02)"
                      : "rgba(255,255,255,0.01)",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className="px-6 py-4 text-sm font-medium"
                  style={{ color: "#EEF4FF" }}
                >
                  {row.feature}
                </div>
                <div
                  className="px-6 py-4 text-sm text-center flex items-center justify-center gap-2"
                  style={{ color: "#B3CFE5" }}
                >
                  <X size={14} style={{ color: "#ef4444", flexShrink: 0 }} />
                  {row.manual}
                </div>
                <div
                  className="px-6 py-4 text-sm text-center flex items-center justify-center gap-2 font-medium"
                  style={{ color: "#22c55e" }}
                >
                  <Check size={14} style={{ flexShrink: 0 }} />
                  {row.callblick}
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection className="text-center mt-12">
          <Link
            href="/pricing"
            className="inline-block px-8 py-4 rounded-2xl font-bold text-base"
            style={{
              background: "#2C8FFF",
              color: "#fff",
              boxShadow: "0 0 32px rgba(44,143,255,0.35)",
            }}
          >
            See Pricing →
          </Link>
        </FadeInSection>
      </div>
    </div>
  );
}
