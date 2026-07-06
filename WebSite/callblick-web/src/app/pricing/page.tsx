"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Minus, ChevronDown } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const tiers = [
  {
    name: "Starter",
    monthlyPrice: 49, annualPrice: 39,
    calls: "500 calls / mo", users: "1 user",
    popular: false, cta: "Start free trial",
    description: "For teams just getting started with AI-powered QA.",
    features: {
      "Transcription": true, "Sentiment Analysis": true, "Export Reports": true,
      "QA Scoring": "Basic", "Red Flag Detection": false, "Campaign Analytics": false,
      "API Access": false, "SSO / SAML": false, "Dedicated CSM": false, "SLA Guarantee": false,
    },
  },
  {
    name: "Professional",
    monthlyPrice: 149, annualPrice: 119,
    calls: "2,500 calls / mo", users: "10 users",
    popular: true, cta: "Start free trial",
    description: "For growing teams that need full QA automation and compliance.",
    features: {
      "Transcription": true, "Sentiment Analysis": true, "Export Reports": true,
      "QA Scoring": "Full", "Red Flag Detection": true, "Campaign Analytics": true,
      "API Access": true, "SSO / SAML": false, "Dedicated CSM": false, "SLA Guarantee": false,
    },
  },
  {
    name: "Enterprise",
    monthlyPrice: null, annualPrice: null,
    calls: "Unlimited calls", users: "Unlimited users",
    popular: false, cta: "Contact sales",
    description: "Custom contracts, dedicated support, and SLA guarantees.",
    features: {
      "Transcription": true, "Sentiment Analysis": true, "Export Reports": true,
      "QA Scoring": "Full", "Red Flag Detection": true, "Campaign Analytics": true,
      "API Access": true, "SSO / SAML": true, "Dedicated CSM": true, "SLA Guarantee": true,
    },
  },
];

const faqs = [
  { q: "Can I switch plans at any time?", a: "Yes. Upgrades take effect immediately; downgrades take effect at end of billing cycle." },
  { q: "What counts as a call?", a: "Any audio file or live session processed through CallBlick, regardless of duration." },
  { q: "Is there a free trial?", a: "Yes — every paid plan includes a 14-day free trial. No credit card required." },
  { q: "What happens if I exceed my monthly call limit?", a: "We notify you before you hit the limit. Overages bill at a per-call rate, or upgrade to the next tier." },
  { q: "Do you offer annual discounts?", a: "Annual billing saves 20% vs monthly." },
  { q: "Is my call data secure?", a: "All data is AES-256 encrypted at rest and in transit. We are SOC 2 Type II certified and GDPR compliant." },
];

/* Small SVG for pricing visual interest */
function PricingOrb({ tier }: { tier: typeof tiers[0] }) {
  const color = tier.popular ? "#2C8FFF" : tier.name === "Enterprise" ? "#EEF4FF" : "#B3CFE5";
  return (
    <svg viewBox="0 0 80 40" className="w-20 h-10 mb-4" style={{ opacity: 0.6 }}>
      {Array.from({ length: 12 }).map((_, i) => {
        const x = (i / 11) * 76 + 2;
        const h = Math.round(4 + Math.sin(i * 0.9 + (tier.popular ? 0 : 1)) * 10 + 10);
        return <rect key={i} x={x - 1.5} y={20 - h / 2} width="3" height={h} rx="1.5"
          fill={color} opacity={tier.popular ? 0.85 : 0.4} />;
      })}
    </svg>
  );
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-28 pb-32 relative">
      {/* Background glow — offset right */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 50% 60% at 75% 20%, rgba(44,143,255,0.08) 0%, transparent 60%)"
      }} />

      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <FadeInSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] mb-5" style={{ color: "#2C8FFF" }}>
              Pricing
            </p>
            <h1
              className="font-black tracking-[-0.04em] leading-[0.95]"
              style={{ color: "#EEF4FF", fontSize: "clamp(44px,6vw,72px)" }}
            >
              Transparent
              <br />
              <span style={{
                background: "linear-gradient(135deg, #2C8FFF, #7AB8FF)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
              }}>pricing.</span>
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lg leading-relaxed" style={{ color: "#B3CFE5" }}>
              Start free. Scale as you grow. No hidden fees, no lock-in.
            </p>
            {/* Monthly / Annual toggle */}
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={() => setAnnual(false)}
                className="text-sm font-semibold transition-colors duration-150"
                style={{ color: !annual ? "#EEF4FF" : "#B3CFE5" }}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(!annual)}
                className="relative w-12 h-6 rounded-full transition-all duration-300 flex-shrink-0"
                style={{ background: annual ? "#2C8FFF" : "rgba(255,255,255,0.1)" }}
              >
                <div className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300"
                  style={{ left: annual ? "26px" : "4px" }} />
              </button>
              <button
                onClick={() => setAnnual(true)}
                className="text-sm font-semibold transition-colors duration-150"
                style={{ color: annual ? "#EEF4FF" : "#B3CFE5" }}
              >
                Annual
                <span className="ml-2 text-xs font-black" style={{ color: "#22c55e" }}>−20%</span>
              </button>
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* ── Tier cards ── */}
      <div className="max-w-7xl mx-auto px-6 mb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((tier, i) => (
            <FadeInSection key={tier.name} delay={i * 80}>
              <div
                className="relative rounded-2xl p-8 flex flex-col h-full transition-all duration-300"
                style={{
                  background: tier.popular ? "rgba(44,143,255,0.07)" : "rgba(10,25,49,0.6)",
                  border: tier.popular ? "1px solid rgba(44,143,255,0.35)" : "1px solid rgba(255,255,255,0.07)",
                  boxShadow: tier.popular ? "0 0 60px rgba(44,143,255,0.1)" : "none",
                }}
              >
                {/* Popular indicator — top border accent not a pill */}
                {tier.popular && (
                  <div className="absolute top-0 left-8 right-8 h-0.5 rounded-full"
                    style={{ background: "linear-gradient(90deg, transparent, #2C8FFF, transparent)" }} />
                )}

                {/* Mini waveform graphic */}
                <PricingOrb tier={tier} />

                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-xl font-black" style={{ color: "#EEF4FF" }}>{tier.name}</h3>
                  {tier.popular && (
                    <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1"
                      style={{ color: "#2C8FFF", border: "1px solid rgba(44,143,255,0.35)", borderRadius: 6 }}>
                      Most popular
                    </span>
                  )}
                </div>

                <p className="text-xs mb-6" style={{ color: "#B3CFE5" }}>{tier.description}</p>

                {/* Price */}
                <div className="mb-2">
                  {tier.monthlyPrice ? (
                    <div className="flex items-end gap-1">
                      <span className="font-black tracking-tight" style={{ color: "#EEF4FF", fontSize: 48, lineHeight: 1 }}>
                        ${annual ? tier.annualPrice : tier.monthlyPrice}
                      </span>
                      <span className="text-sm mb-1.5" style={{ color: "#B3CFE5" }}>/mo</span>
                    </div>
                  ) : (
                    <span className="font-black" style={{ color: "#EEF4FF", fontSize: 40, lineHeight: 1 }}>Custom</span>
                  )}
                </div>

                <div className="flex gap-4 text-xs mb-8 pb-6" style={{ color: "#B3CFE5", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <span>{tier.calls}</span>
                  <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
                  <span>{tier.users}</span>
                </div>

                <ul className="flex flex-col gap-2.5 flex-1 mb-8">
                  {Object.entries(tier.features).map(([feat, val]) => (
                    <li key={feat} className="flex items-center gap-2.5">
                      {val === false
                        ? <Minus size={14} style={{ color: "rgba(255,255,255,0.15)", flexShrink: 0 }} />
                        : <Check size={14} style={{ color: "#22c55e", flexShrink: 0 }} />
                      }
                      <span className="text-sm" style={{ color: val === false ? "rgba(179,207,229,0.3)" : "#B3CFE5" }}>
                        {feat}
                        {typeof val === "string" && val !== "true" && val !== "false" && (
                          <span className="ml-1 text-xs" style={{ color: "#2C8FFF" }}>({val})</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href="#"
                  className="block text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
                  style={tier.popular
                    ? { background: "#2C8FFF", color: "#fff", boxShadow: "0 6px 20px rgba(44,143,255,0.35)" }
                    : { border: "1px solid rgba(255,255,255,0.1)", color: "#EEF4FF" }
                  }
                >
                  {tier.cta}
                </Link>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection className="mt-6 text-center">
          <p className="text-sm" style={{ color: "#B3CFE5" }}>
            All plans include a 14-day free trial · No credit card required · Cancel anytime
          </p>
        </FadeInSection>
      </div>

      {/* ── FAQ ── */}
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-12">
          <div className="lg:col-span-2">
            <p className="text-xs font-black uppercase tracking-[0.2em] mb-4" style={{ color: "#2C8FFF" }}>FAQ</p>
            <h2 className="font-black tracking-[-0.03em] leading-[1.0]"
              style={{ color: "#EEF4FF", fontSize: "clamp(28px,3.5vw,44px)" }}>
              Common
              <br />questions.
            </h2>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <FadeInSection key={i} delay={i * 40}>
                <div className="rounded-xl overflow-hidden transition-all duration-200"
                  style={{ background: "rgba(10,25,49,0.6)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-sm" style={{ color: "#EEF4FF" }}>{faq.q}</span>
                    <ChevronDown size={16} style={{
                      color: "#2C8FFF", flexShrink: 0,
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 200ms ease",
                    }} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4 text-sm leading-relaxed" style={{ color: "#B3CFE5" }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </div>

      {/* ── Enterprise strip ── */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <FadeInSection>
          <div className="rounded-2xl px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{ background: "rgba(10,25,49,0.7)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] mb-2" style={{ color: "#2C8FFF" }}>Enterprise</p>
              <h3 className="text-xl font-black mb-1" style={{ color: "#EEF4FF" }}>Need more than 2,500 calls a month?</h3>
              <p className="text-sm" style={{ color: "#B3CFE5" }}>Custom pricing, dedicated CSM, SLA guarantees, and SSO.</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link href="#" className="px-6 py-3 rounded-xl text-sm font-semibold"
                style={{ background: "#2C8FFF", color: "#fff", boxShadow: "0 6px 20px rgba(44,143,255,0.3)" }}>
                Contact sales
              </Link>
              <Link href="#" className="px-6 py-3 rounded-xl text-sm font-semibold"
                style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#EEF4FF" }}>
                Book a demo
              </Link>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
