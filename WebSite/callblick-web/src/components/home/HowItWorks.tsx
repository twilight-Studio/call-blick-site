import FadeInSection from "@/components/FadeInSection";
import { Upload, Cpu, LineChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload or connect",
    description:
      "Connect your call platform via API or upload recordings directly. Supports all major telephony providers.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI analyzes in seconds",
    description:
      "Our AI transcribes, scores, detects red flags, and maps sentiment — fully automated in under 60 seconds per call.",
  },
  {
    number: "03",
    icon: LineChart,
    title: "Act on insights",
    description:
      "Review dashboards, export reports, trigger alerts, and coach agents — all backed by full call evidence.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
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
              How It Works
            </span>
          </div>
          <h2
            className="text-[clamp(36px,5vw,52px)] font-black tracking-[-0.03em] mb-4"
            style={{ color: "#EEF4FF" }}
          >
            Up and running in minutes.
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#B3CFE5" }}>
            Three simple steps from raw call recordings to actionable
            intelligence.
          </p>
        </FadeInSection>

        <div className="relative">
          {/* Connector line */}
          <div
            className="absolute top-[56px] left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px hidden lg:block"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(44,143,255,0.4), transparent)",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <FadeInSection key={i} delay={i * 100}>
                  <div
                    className="flex flex-col items-center text-center p-8 rounded-3xl"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div className="relative mb-6">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{
                          background: "rgba(44,143,255,0.12)",
                          border: "1px solid rgba(44,143,255,0.25)",
                        }}
                      >
                        <Icon size={28} color="#2C8FFF" />
                      </div>
                      <div
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ background: "#2C8FFF" }}
                      >
                        <span className="text-[9px] font-black text-white">
                          {i + 1}
                        </span>
                      </div>
                    </div>

                    <div
                      className="text-xs font-black uppercase tracking-[0.14em] mb-3"
                      style={{ color: "#2C8FFF" }}
                    >
                      {step.number}
                    </div>
                    <h3
                      className="text-xl font-black mb-3"
                      style={{ color: "#EEF4FF" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#B3CFE5" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
