import Link from "next/link";
import { Check, ShieldCheck, Zap } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const pointRules = [
  "100 points = 1 hour of call analysis",
  "1,000 points = 10 hours",
  "10,000 points = 100 hours",
  "1 call minute plus analysis as low as $0.065",
];

const plans = [
  {
    name: "GDPR-Compliant Points",
    subtitle: "For regulated industries that require strict EU-only processing.",
    Icon: ShieldCheck,
    packages: [
      { price: "$39", points: "1,000 Points", note: "Perfect for small teams needing GDPR-aligned call analysis." },
      { price: "$349", points: "10,000 Points", note: "Best value for sensitive customer conversations at scale." },
    ],
    features: [
      "EU-only inference",
      "Zero data retention",
      "No training on customer data",
      "GDPR-aligned processing",
      "Uses EU-hosted models",
      "Suitable for healthcare, finance, legal, HR, and government",
    ],
  },
  {
    name: "Non-GDPR Points",
    subtitle: "For high-volume teams that want maximum performance at the lowest cost.",
    Icon: Zap,
    packages: [
      { price: "$29", points: "1,000 Points", note: "Affordable entry tier for general call analytics." },
      { price: "$249", points: "10,000 Points", note: "High-volume discount for sales, support, and operations." },
    ],
    features: [
      "Zero data retention",
      "Non-EU inference allowed",
      "Uses high-performance global models",
      "Internal call processing",
      "Ideal for sales, support, operations, and non-regulated industries",
    ],
  },
];

const enterpriseFeatures = [
  "Custom SLAs",
  "Dedicated EU or global inference",
  "Private model hosting",
  "Custom context windows",
  "Custom compliance requirements",
  "Priority support",
];

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-28 pb-32 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 75% 20%, rgba(44,143,255,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 mb-16">
        <FadeInSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] mb-5" style={{ color: "#2C8FFF" }}>
              Pricing
            </p>
            <h1
              className="font-black tracking-[-0.04em] leading-[0.95]"
              style={{ color: "#EEF4FF", fontSize: "clamp(44px,6vw,72px)" }}
            >
              Point-based
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #2C8FFF, #7AB8FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                usage.
              </span>
            </h1>
          </div>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed" style={{ color: "#B3CFE5" }}>
              Choose GDPR-compliant EU processing or high-performance global processing. Demo access and free points are available by application.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pointRules.map((rule) => (
                <div
                  key={rule}
                  className="rounded-2xl px-4 py-3 text-sm font-bold"
                  style={{ background: "rgba(10,25,49,0.68)", border: "1px solid rgba(255,255,255,0.07)", color: "#EEF4FF" }}
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {plans.map(({ name, subtitle, Icon, packages, features }, index) => (
            <FadeInSection key={name} delay={index * 80}>
              <div
                className="h-full rounded-3xl p-8"
                style={{
                  background: "rgba(10,25,49,0.68)",
                  border: "1px solid rgba(44,143,255,0.18)",
                }}
              >
                <Icon size={28} style={{ color: "#2C8FFF" }} />
                <h2 className="text-2xl font-black mt-5 mb-3" style={{ color: "#EEF4FF" }}>
                  {name}
                </h2>
                <p className="text-sm leading-relaxed mb-7" style={{ color: "#B3CFE5" }}>
                  {subtitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.points}
                      className="rounded-2xl p-5"
                      style={{ background: "rgba(2,9,18,0.5)", border: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      <p className="text-4xl font-black mb-1" style={{ color: "#EEF4FF" }}>
                        {pkg.price}
                      </p>
                      <p className="text-base font-black mb-3" style={{ color: "#2C8FFF" }}>
                        {pkg.points}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "#B3CFE5" }}>
                        {pkg.note}
                      </p>
                    </div>
                  ))}
                </div>

                <h3 className="text-sm font-black uppercase tracking-[0.16em] mb-4" style={{ color: "#EEF4FF" }}>
                  What&apos;s included
                </h3>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#B3CFE5" }}>
                      <Check size={16} style={{ color: "#22c55e", flexShrink: 0, marginTop: 2 }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-sm font-bold"
                  style={{ background: "#2C8FFF", color: "#fff", boxShadow: "0 8px 28px rgba(44,143,255,0.28)" }}
                >
                  Apply for demo and free points
                </Link>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div
            className="rounded-3xl p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_auto] gap-8 items-start"
            style={{ background: "rgba(10,25,49,0.7)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] mb-3" style={{ color: "#2C8FFF" }}>
                Enterprise Solution
              </p>
              <h2 className="text-3xl font-black mb-3" style={{ color: "#EEF4FF" }}>
                Custom
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#B3CFE5" }}>
                Price on request for organizations with custom security, compliance, or model hosting requirements.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {enterpriseFeatures.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm" style={{ color: "#B3CFE5" }}>
                  <Check size={16} style={{ color: "#22c55e", flexShrink: 0 }} />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-6 py-4 text-sm font-bold"
              style={{ border: "1px solid rgba(255,255,255,0.12)", color: "#EEF4FF" }}
            >
              Contact sales
            </Link>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
