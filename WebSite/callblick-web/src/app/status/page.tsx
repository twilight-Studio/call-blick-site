import { Activity, CheckCircle2 } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const services = [
  "EU-hosted transcription processing",
  "EU-hosted LLM inference",
  "Global LLM inference",
  "Call upload pipeline",
  "Analysis reporting",
  "Dashboard access",
];

export default function StatusPage() {
  return (
    <div className="min-h-screen pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection className="max-w-3xl mb-14">
          <p className="text-xs font-black uppercase tracking-[0.2em] mb-5" style={{ color: "#2C8FFF" }}>
            Status
          </p>
          <h1 className="font-black tracking-[-0.04em] leading-[0.95] mb-6" style={{ color: "#EEF4FF", fontSize: "clamp(44px,6vw,72px)" }}>
            System and model
            <br />
            availability.
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#B3CFE5" }}>
            This page will mirror the uptime monitor for the LLM and call-processing services used by CallBlick.
          </p>
        </FadeInSection>

        <div className="rounded-3xl overflow-hidden" style={{ background: "rgba(10,25,49,0.68)", border: "1px solid rgba(44,143,255,0.16)" }}>
          <div className="p-6 flex items-center gap-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <Activity size={20} style={{ color: "#22c55e" }} />
            <h2 className="text-xl font-black" style={{ color: "#EEF4FF" }}>Current status</h2>
          </div>
          <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
            {services.map((service) => (
              <div key={service} className="p-5 flex items-center justify-between gap-4">
                <span className="text-sm font-bold" style={{ color: "#B3CFE5" }}>{service}</span>
                <span className="inline-flex items-center gap-2 text-sm font-black" style={{ color: "#22c55e" }}>
                  <CheckCircle2 size={16} />
                  Operational
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
