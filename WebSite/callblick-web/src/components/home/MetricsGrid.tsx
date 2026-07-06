import StatCounter from "@/components/StatCounter";
import FadeInSection from "@/components/FadeInSection";

const metrics = [
  { value: "99.4%", label: "Transcription Accuracy" },
  { value: "10x", label: "Faster QA Reviews" },
  { value: "< 60s", label: "Per Call Analysis" },
  { value: "100%", label: "Call Coverage" },
];

export default function MetricsGrid() {
  return (
    <section className="py-32 relative z-10">
      <div
        className="max-w-7xl mx-auto px-6 py-20 rounded-3xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,25,49,0.9) 0%, rgba(13,31,53,0.9) 50%, rgba(2,9,18,0.9) 100%)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Radial glow behind metrics */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(44,143,255,0.06) 0%, transparent 70%)",
          }}
        />

        <FadeInSection className="text-center mb-16 relative">
          <h2
            className="text-[clamp(32px,4vw,48px)] font-black tracking-[-0.03em] mb-4"
            style={{ color: "#EEF4FF" }}
          >
            Numbers that speak for themselves.
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#B3CFE5" }}>
            Proven results across thousands of enterprise call centers worldwide.
          </p>
        </FadeInSection>

        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="glass-card p-8 text-center glow-hover"
            >
              <StatCounter value={m.value} label={m.label} duration={1200 + i * 150} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
