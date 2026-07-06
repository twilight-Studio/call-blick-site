"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Minus, ChevronDown } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const tiers = [
  {
    name: "Starter",
    monthlyPrice: 49,
    annualPrice: 39,
    calls: "500",
    users: "1",
    popular: false,
    cta: "Start Free Trial",
    features: {
      "QA Scoring": "Basic",
      "Red Flag Detection": false,
      "Campaign Analytics": false,
      "API Access": false,
      "SSO / SAML": false,
      "Dedicated CSM": false,
      "SLA Guarantee": false,
      "Transcription": true,
      "Sentiment Analysis": true,
      "Export Reports": true,
    },
  },
  {
    name: "Professional",
    monthlyPrice: 149,
    annualPrice: 119,
    calls: "2,500",
    users: "10",
    popular: true,
    cta: "Start Free Trial",
    features: {
      "QA Scoring": "Full",
      "Red Flag Detection": true,
      "Campaign Analytics": true,
      "API Access": true,
      "SSO / SAML": false,
      "Dedicated CSM": false,
      "SLA Guarantee": false,
      "Transcription": true,
      "Sentiment Analysis": true,
      "Export Reports": true,
    },
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    annualPrice: null,
    calls: "Unlimited",
    users: "Unlimited",
    popular: false,
    cta: "Contact Sales",
    features: {
      "QA Scoring": "Full",
      "Red Flag Detection": true,
      "Campaign Analytics": true,
      "API Access": true,
      "SSO / SAML": true,
      "Dedicated CSM": true,
      "SLA Guarantee": true,
      "Transcription": true,
      "Sentiment Analysis": true,
      "Export Reports": true,
    },
  },
];

const faqs = [
  {
    q: "Can I switch plans at any time?",
    a: "Yes. You can upgrade or downgrade your plan at any time. Upgrades take effect immediately; downgrades take effect at the end of your billing cycle.",
  },
  {
    q: "What counts as a call?",
    a: "Any audio file or live call session processed through CallBlick counts as one call, regardless of duration.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — every paid plan includes a 14-day free trial with full feature access. No credit card required.",
  },
  {
    q: "What happens if I exceed my monthly call limit?",
    a: "We'll notify you before you hit your limit. Overages are billed at a per-call rate, or you can upgrade to the next tier.",
  },
  {
    q: "Do you offer discounts for annual billing?",
    a: "Yes — switching to annual billing saves 20% compared to monthly billing.",
  },
  {
    q: "Is my call data secure?",
    a: "All data is encrypted at rest and in transit using AES-256. We are SOC 2 Type II certified and GDPR compliant.",
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-32">
      {/* Hero */}
      <FadeInSection className="text-center max-w-3xl mx-auto px-6 mb-16">
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
            Pricing
          </span>
        </div>
        <h1
          className="text-[clamp(40px,6vw,64px)] font-black tracking-[-0.04em] mb-4"
          style={{ color: "#EEF4FF" }}
        >
          Simple, transparent pricing.
        </h1>
        <p className="text-lg" style={{ color: "#B3CFE5" }}>
          Start free. Scale as you grow. No hidden fees.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <span
            className="text-sm font-medium"
            style={{ color: annual ? "#B3CFE5" : "#EEF4FF" }}
          >
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className="relative w-12 h-6 rounded-full transition-all duration-300"
            style={{ background: annual ? "#2C8FFF" : "rgba(255,255,255,0.1)" }}
          >
            <div
              className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300"
              style={{ left: annual ? "26px" : "4px" }}
            />
          </button>
          <span
            className="text-sm font-medium"
            style={{ color: annual ? "#EEF4FF" : "#B3CFE5" }}
          >
            Annual
            <span
              className="ml-2 px-2 py-0.5 rounded-full text-[10px] font-black uppercase"
              style={{ background: "rgba(34,197,94,0.15)", color: "#22c55e" }}
            >
              Save 20%
            </span>
          </span>
        </div>
      </FadeInSection>

      {/* Pricing cards */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <FadeInSection key={tier.name} delay={i * 80}>
              <div
                className="rounded-3xl p-8 flex flex-col h-full transition-all duration-300"
                style={{
                  background: tier.popular
                    ? "rgba(44,143,255,0.08)"
                    : "rgba(255,255,255,0.03)",
                  border: tier.popular
                    ? "1px solid rgba(44,143,255,0.4)"
                    : "1px solid rgba(255,255,255,0.07)",
                  boxShadow: tier.popular
                    ? "0 0 48px rgba(44,143,255,0.12)"
                    : "none",
                }}
              >
                {tier.popular && (
                  <div className="mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"
                      style={{
                        background: "rgba(44,143,255,0.2)",
                        border: "1px solid rgba(44,143,255,0.4)",
                        color: "#2C8FFF",
                      }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}

                <h3
                  className="text-xl font-black mb-2"
                  style={{ color: "#EEF4FF" }}
                >
                  {tier.name}
                </h3>

                <div className="mb-6">
                  {tier.monthlyPrice ? (
                    <div className="flex items-end gap-2">
                      <span
                        className="text-5xl font-black tracking-tight"
                        style={{ color: "#EEF4FF" }}
                      >
                        ${annual ? tier.annualPrice : tier.monthlyPrice}
                      </span>
                      <span
                        className="text-base mb-2"
                        style={{ color: "#B3CFE5" }}
                      >
                        / mo
                      </span>
                    </div>
                  ) : (
                    <span
                      className="text-4xl font-black"
                      style={{ color: "#EEF4FF" }}
                    >
                      Custom
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2 mb-8 text-sm" style={{ color: "#B3CFE5" }}>
                  <div>{tier.calls} calls / month</div>
                  <div>{tier.users} {tier.users === "1" ? "user" : "users"}</div>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {Object.entries(tier.features).map(([feat, val]) => (
                    <li key={feat} className="flex items-center gap-3">
                      {val === false ? (
                        <Minus
                          size={16}
                          style={{ color: "rgba(255,255,255,0.2)", flexShrink: 0 }}
                        />
                      ) : (
                        <Check
                          size={16}
                          style={{ color: "#22c55e", flexShrink: 0 }}
                        />
                      )}
                      <span
                        className="text-sm"
                        style={{
                          color: val === false ? "rgba(179,207,229,0.4)" : "#B3CFE5",
                        }}
                      >
                        {feat}
                        {typeof val === "string" && val !== "true" && val !== "false" && (
                          <span
                            className="ml-1 text-xs"
                            style={{ color: "#2C8FFF" }}
                          >
                            ({val})
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#"
                  className="block text-center py-3.5 rounded-2xl font-bold text-base transition-all duration-200"
                  style={
                    tier.popular
                      ? {
                          background: "#2C8FFF",
                          color: "#fff",
                          boxShadow: "0 0 24px rgba(44,143,255,0.35)",
                        }
                      : {
                          border: "1px solid rgba(255,255,255,0.12)",
                          color: "#EEF4FF",
                        }
                  }
                >
                  {tier.cta}
                </Link>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-6">
        <FadeInSection className="text-center mb-12">
          <h2
            className="text-[clamp(28px,4vw,40px)] font-black tracking-[-0.03em]"
            style={{ color: "#EEF4FF" }}
          >
            Frequently asked questions
          </h2>
        </FadeInSection>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FadeInSection key={i} delay={i * 50}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  onClick={() =>
                    setOpenFaq(openFaq === i ? null : i)
                  }
                >
                  <span
                    className="font-bold text-base"
                    style={{ color: "#EEF4FF" }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      color: "#2C8FFF",
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 200ms ease",
                      flexShrink: 0,
                    }}
                  />
                </button>
                {openFaq === i && (
                  <div
                    className="px-6 pb-5 text-sm leading-relaxed"
                    style={{ color: "#B3CFE5" }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
}
