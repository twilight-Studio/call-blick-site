import { CheckCircle2, DatabaseZap, Globe2, ShieldCheck } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const plans = [
  {
    title: "GDPR-Compliant Points",
    description:
      "For regulated teams that require strict EU-only processing and GDPR-aligned workflows.",
    features: [
      "EU-only inference for eligible workloads",
      "Zero data retention",
      "No training on customer data",
      "Traceable analysis outputs",
      "Designed for healthcare, finance, legal, HR, and government use cases",
    ],
    Icon: ShieldCheck,
  },
  {
    title: "Non-GDPR Points",
    description:
      "For high-volume teams that need global model performance at a lower cost while keeping zero-retention processing.",
    features: [
      "Zero data retention",
      "Non-EU inference allowed",
      "High-performance global models",
      "Internal call processing workflows",
      "Designed for sales, support, operations, and non-regulated industries",
    ],
    Icon: Globe2,
  },
  {
    title: "Enterprise Solution",
    description:
      "For organizations with custom requirements, private model hosting, dedicated inference, or bespoke compliance controls.",
    features: [
      "Dedicated EU or global inference",
      "Private model hosting options",
      "Custom context windows",
      "Custom compliance requirements",
      "Priority support and custom SLAs",
    ],
    Icon: DatabaseZap,
  },
];

export default function DataPrivacyPage() {
  return (
    <div className="min-h-screen pt-28 pb-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection className="max-w-3xl mb-14">
          <p className="text-xs font-black uppercase tracking-[0.2em] mb-5" style={{ color: "#2C8FFF" }}>
            Data privacy
          </p>
          <h1
            className="font-black tracking-[-0.04em] leading-[0.95] mb-6"
            style={{ color: "#EEF4FF", fontSize: "clamp(44px,6vw,72px)" }}
          >
            Privacy depends
            <br />
            <span style={{ color: "#2C8FFF" }}>on your plan.</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#B3CFE5" }}>
            CallBlick supports different privacy modes based on the selected plan and the sensitivity of the use case. Across plans, customer data is not used to train models.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {plans.map(({ title, description, features, Icon }, index) => (
            <FadeInSection key={title} delay={index * 80}>
              <div
                className="h-full rounded-3xl p-7"
                style={{ background: "rgba(10,25,49,0.68)", border: "1px solid rgba(44,143,255,0.16)" }}
              >
                <Icon size={28} style={{ color: "#2C8FFF" }} />
                <h2 className="text-2xl font-black mt-5 mb-3" style={{ color: "#EEF4FF" }}>
                  {title}
                </h2>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#B3CFE5" }}>
                  {description}
                </p>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#B3CFE5" }}>
                      <CheckCircle2 size={16} style={{ color: "#22c55e", flexShrink: 0, marginTop: 2 }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
}
