import FadeInSection from "@/components/FadeInSection";
import StatCounter from "@/components/StatCounter";

const metrics = [
  {
    value: "60s",
    label: "Fast Call Processing",
    note: "An average call can be processed in as little as 60 seconds",
    accent: "#2C8FFF",
  },
  {
    value: "100",
    label: "Points Per Hour",
    note: "100 points equals 1 hour of call analysis",
    accent: "#7AB8FF",
  },
  {
    value: "$0.065",
    label: "Low Minute Cost",
    note: "1 call minute plus analysis can be as low as this amount",
    accent: "#22c55e",
  },
  {
    value: "0",
    label: "Data Retention",
    note: "Zero data retention options are available by plan",
    accent: "#EEF4FF",
  },
];

export default function MetricsGrid() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Asymmetric layout: label left, numbers right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left label col */}
          <FadeInSection className="lg:col-span-2 lg:pt-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] mb-4" style={{ color: "#2C8FFF" }}>
              By the numbers
            </p>
            <h2
              className="font-black tracking-[-0.03em] mb-6"
              style={{ color: "#EEF4FF", fontSize: "clamp(32px,4vw,48px)", lineHeight: "1.05" }}
            >
              Numbers that
              <br />
              speak for
              <br />
              themselves.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#B3CFE5", maxWidth: 340 }}>
              Proven on real-time data across different enterprises, with pricing and privacy controls based on the selected plan.
            </p>
          </FadeInSection>

          {/* Right stats 2×2 */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-4">
            {metrics.map((m, i) => (
              <FadeInSection key={i} delay={i * 80}>
                <div
                  className="rounded-2xl p-6 flex flex-col justify-between transition-all duration-300"
                  style={{
                    background: "rgba(10,25,49,0.7)",
                    border: `1px solid ${m.accent}18`,
                    minHeight: 140,
                  }}
                >
                  {/* Accent line at top */}
                  <div
                    className="w-8 h-0.5 mb-4 rounded-full"
                    style={{ background: m.accent }}
                  />
                  <StatCounter value={m.value} label={m.label} duration={1000 + i * 200} />
                  <p className="text-xs mt-3" style={{ color: "rgba(179,207,229,0.72)" }}>
                    {m.note}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
