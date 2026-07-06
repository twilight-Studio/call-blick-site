import FadeInSection from "@/components/FadeInSection";

const steps = [
  {
    n: "01",
    title: "Connect your calls",
    description:
      "Plug in via API, webhook, or direct upload. Works with every major telephony provider out of the box.",
    detail: "Twilio · Genesys · Five9 · NICE · Vonage",
  },
  {
    n: "02",
    title: "AI processes in seconds",
    description:
      "Transcription, scoring, red flag detection, and sentiment analysis run simultaneously. Done in under 60 seconds per call.",
    detail: "~45s avg. · 99.4% accuracy",
  },
  {
    n: "03",
    title: "Act on full evidence",
    description:
      "Review dashboards, surface coaching clips, export to BI tools, or trigger alerts — everything tied back to the exact moment in the call.",
    detail: "Dashboards · Exports · Webhooks",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative z-10">
      {/* Full-width dark band */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(10,25,49,0.4) 30%, rgba(10,25,49,0.4) 70%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeInSection className="mb-16">
          <p className="text-xs font-black uppercase tracking-[0.2em] mb-4" style={{ color: "#2C8FFF" }}>
            How it works
          </p>
          <h2
            className="font-black tracking-[-0.03em]"
            style={{ color: "#EEF4FF", fontSize: "clamp(32px,4.5vw,52px)", lineHeight: "1.05" }}
          >
            From call to insight<br />in three steps.
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-0 relative">
          {/* Horizontal connector — desktop only */}
          <div
            className="absolute top-[2.2rem] left-[16.5%] right-[16.5%] h-px hidden lg:block"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(44,143,255,0.3) 20%, rgba(44,143,255,0.3) 80%, transparent)",
            }}
          />

          {steps.map((step, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="relative p-8 lg:p-10">
                {/* Step number as large background text */}
                <div
                  className="absolute top-4 right-6 text-[80px] font-black leading-none select-none pointer-events-none"
                  style={{ color: "rgba(44,143,255,0.04)", fontVariantNumeric: "tabular-nums" }}
                >
                  {step.n}
                </div>

                {/* Step indicator dot */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black"
                    style={{
                      background: "rgba(44,143,255,0.12)",
                      border: "1px solid rgba(44,143,255,0.35)",
                      color: "#2C8FFF",
                    }}
                  >
                    {i + 1}
                  </div>
                  {i < 2 && (
                    <div
                      className="hidden lg:block flex-1 h-px"
                      style={{ background: "transparent" }}
                    />
                  )}
                </div>

                <h3
                  className="text-xl font-black mb-3 relative z-10"
                  style={{ color: "#EEF4FF" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4 relative z-10"
                  style={{ color: "#B3CFE5" }}
                >
                  {step.description}
                </p>
                <p
                  className="text-xs font-medium relative z-10"
                  style={{ color: "rgba(44,143,255,0.7)" }}
                >
                  {step.detail}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
