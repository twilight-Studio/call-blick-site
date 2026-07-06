"use client";

import { useState } from "react";
import Link from "next/link";
import { Shield, DollarSign, HeadphonesIcon, Check } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const useCases = [
  {
    icon: Shield,
    label: "Insurance Sales",
    headline: "Stay compliant. Close with confidence.",
    description:
      "Insurance sales calls carry strict regulatory requirements. CallBlick ensures every agent stays on script, delivers required disclosures, and never leaves your organization exposed.",
    painPoints: [
      {
        title: "Compliance disclosure verification",
        desc: "Automatically verify that required disclosures were delivered in every call, timestamped and logged.",
      },
      {
        title: "Script adherence scoring",
        desc: "Score agents on how closely they follow approved sales scripts and flag material deviations.",
      },
      {
        title: "Objection handling detection",
        desc: "Identify when customers raise objections and evaluate how agents respond — with coaching clips.",
      },
    ],
    redFlag: "Missing required disclosures",
    quote: {
      text: "CallBlick flagged a missing disclosure issue across 12% of our calls in week one. We fixed the script, retrained the team, and haven't had a compliance incident since.",
      name: "Rachel Kim",
      role: "Head of Compliance, SunBridge Insurance",
    },
  },
  {
    icon: DollarSign,
    label: "Financial Services",
    headline: "Full audit trails. Zero regulatory risk.",
    description:
      "Financial services firms face scrutiny from regulators on every customer interaction. CallBlick provides the automated QA infrastructure to prove compliance at scale.",
    painPoints: [
      {
        title: "Regulatory QA automation",
        desc: "Apply jurisdiction-specific QA questionnaires to every call automatically — no manual review required.",
      },
      {
        title: "PCI / sensitive data detection",
        desc: "Automatically detect and flag when agents or customers speak sensitive data like card numbers or SSNs.",
      },
      {
        title: "Agent performance benchmarking",
        desc: "Benchmark individual agents against team standards with objective, auditable scores.",
      },
    ],
    redFlag: "PCI / sensitive data spoken on call",
    quote: {
      text: "Our regulators requested a sample of QA records during an audit. We pulled 500 fully documented call reviews in minutes. It was a game-changer.",
      name: "Daniel Osei",
      role: "VP Compliance, Meridian Capital",
    },
  },
  {
    icon: HeadphonesIcon,
    label: "Customer Support",
    headline: "Coach smarter. Escalate earlier.",
    description:
      "Customer support teams live and die by call quality. CallBlick gives supervisors real-time visibility into every agent's performance — with evidence-backed coaching.",
    painPoints: [
      {
        title: "CSAT correlation with call quality",
        desc: "Link QA scores directly to CSAT survey outcomes to understand which behaviors drive customer satisfaction.",
      },
      {
        title: "Agent coaching with evidence clips",
        desc: "Generate coaching moments with exact audio clips — show agents precisely where they can improve.",
      },
      {
        title: "Escalation pattern detection",
        desc: "Identify calls trending toward escalation before they reach a supervisor, enabling proactive intervention.",
      },
    ],
    redFlag: "SLA breach risk flagging",
    quote: {
      text: "We were flying blind on agent coaching. CallBlick gave us the evidence to have data-driven conversations with every rep on the team. CSAT is up 22%.",
      name: "Tasha Williams",
      role: "Customer Success Director, NovaCare",
    },
  },
];

export default function UseCasesPage() {
  const [active, setActive] = useState(0);
  const uc = useCases[active];
  const Icon = uc.icon;

  return (
    <div className="min-h-screen pt-24 pb-32">
      {/* Hero */}
      <FadeInSection className="text-center max-w-3xl mx-auto px-6 mb-20">
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
            Use Cases
          </span>
        </div>
        <h1
          className="text-[clamp(40px,6vw,64px)] font-black tracking-[-0.04em] mb-4"
          style={{ color: "#EEF4FF" }}
        >
          Built for your industry.
        </h1>
        <p className="text-lg" style={{ color: "#B3CFE5" }}>
          CallBlick adapts to the compliance requirements, risk profiles, and
          workflows of your specific industry.
        </p>
      </FadeInSection>

      <div className="max-w-7xl mx-auto px-6">
        {/* Tab nav */}
        <div className="flex flex-col sm:flex-row gap-3 mb-12 justify-center">
          {useCases.map((uc, i) => {
            const TabIcon = uc.icon;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="flex items-center gap-2.5 px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-200"
                style={
                  active === i
                    ? {
                        background: "rgba(44,143,255,0.15)",
                        border: "1px solid rgba(44,143,255,0.4)",
                        color: "#EEF4FF",
                        boxShadow: "0 0 20px rgba(44,143,255,0.15)",
                      }
                    : {
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        color: "#B3CFE5",
                      }
                }
              >
                <TabIcon size={16} />
                {uc.label}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Copy */}
          <div>
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
              style={{
                background: "rgba(44,143,255,0.12)",
                border: "1px solid rgba(44,143,255,0.25)",
              }}
            >
              <Icon size={26} color="#2C8FFF" />
            </div>

            <h2
              className="text-[clamp(28px,4vw,40px)] font-black tracking-[-0.03em] mb-4"
              style={{ color: "#EEF4FF" }}
            >
              {uc.headline}
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#B3CFE5" }}
            >
              {uc.description}
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {uc.painPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <Check
                    size={18}
                    style={{ color: "#22c55e", flexShrink: 0, marginTop: 2 }}
                  />
                  <div>
                    <div
                      className="font-bold mb-1"
                      style={{ color: "#EEF4FF" }}
                    >
                      {point.title}
                    </div>
                    <div className="text-sm" style={{ color: "#B3CFE5" }}>
                      {point.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Red flag badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: "rgba(239,68,68,0.1)",
                border: "1px solid rgba(239,68,68,0.3)",
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: "#ef4444" }}
              />
              <span className="text-sm font-medium" style={{ color: "#ef4444" }}>
                Red flag: {uc.redFlag}
              </span>
            </div>

            <Link
              href="/pricing"
              className="inline-block px-8 py-4 rounded-2xl font-bold"
              style={{
                background: "#2C8FFF",
                color: "#fff",
                boxShadow: "0 0 24px rgba(44,143,255,0.35)",
              }}
            >
              Get Started →
            </Link>
          </div>

          {/* Quote card */}
          <div
            className="rounded-3xl p-8"
            style={{
              background: "rgba(44,143,255,0.06)",
              border: "1px solid rgba(44,143,255,0.2)",
            }}
          >
            <div className="flex gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: "#eab308" }}>★</span>
              ))}
            </div>
            <blockquote
              className="text-lg font-medium leading-relaxed mb-6"
              style={{ color: "#EEF4FF" }}
            >
              &ldquo;{uc.quote.text}&rdquo;
            </blockquote>
            <div>
              <div className="font-black" style={{ color: "#EEF4FF" }}>
                {uc.quote.name}
              </div>
              <div className="text-sm" style={{ color: "#B3CFE5" }}>
                {uc.quote.role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
