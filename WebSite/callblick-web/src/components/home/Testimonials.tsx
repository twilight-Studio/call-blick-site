"use client";

import { useState, useEffect } from "react";
import FadeInSection from "@/components/FadeInSection";

const testimonials = [
  {
    quote: "CallBlick transformed our QA process. We went from reviewing 5% of calls manually to getting AI insights on 100% of calls in real time. The red flag detection alone has saved us from multiple compliance issues.",
    name: "Sarah Chen",
    role: "VP of Quality Assurance",
    company: "PremierLife Insurance",
    initials: "SC",
    metric: "100%", metricLabel: "Call coverage",
    color: "#2C8FFF",
  },
  {
    quote: "The sentiment timeline is incredible. We can now correlate call quality scores with CSAT metrics and identify exactly where agents need coaching. Our CSAT improved 18% in just 60 days.",
    name: "Marcus Rivera",
    role: "Head of Customer Operations",
    company: "Velocity Financial",
    initials: "MR",
    metric: "+18%", metricLabel: "CSAT in 60 days",
    color: "#22c55e",
  },
  {
    quote: "We evaluated five platforms before choosing CallBlick. Transcription accuracy is best-in-class and the campaign analytics give our managers visibility they've never had. Deployment was seamless.",
    name: "Priya Nair",
    role: "Director of Call Center Technology",
    company: "ClearPath Solutions",
    initials: "PN",
    metric: "5×", metricLabel: "Faster QA reviews",
    color: "#8b5cf6",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((prev) => (prev + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <FadeInSection className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] mb-5" style={{ color: "#2C8FFF" }}>
                Testimonials
              </p>
              <h2
                className="font-black tracking-[-0.04em] leading-[0.95]"
                style={{ color: "#EEF4FF", fontSize: "clamp(36px,5vw,56px)" }}
              >
                Trusted by
                <br />
                <span style={{
                  background: "linear-gradient(135deg, #2C8FFF, #7AB8FF)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>QA teams everywhere.</span>
              </h2>
            </div>
            <p className="text-base leading-relaxed" style={{ color: "#B3CFE5" }}>
              From insurance compliance to financial services audits — teams across industries trust CallBlick to cover every call.
            </p>
          </div>
        </FadeInSection>

        {/* Vertical accordion */}
        <FadeInSection className="flex flex-col gap-3">
          {testimonials.map((t, i) => {
            const isOpen = i === active;
            return (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer"
                style={{
                  border: isOpen ? `1px solid ${t.color}40` : "1px solid rgba(255,255,255,0.06)",
                  background: isOpen ? "rgba(10,25,49,0.9)" : "rgba(10,25,49,0.4)",
                  boxShadow: isOpen ? `0 0 40px ${t.color}10` : "none",
                }}
                onClick={() => setActive(i)}
              >
                {/* Always-visible header row */}
                <div className="flex items-center gap-4 px-6 py-5">
                  {/* Accent bar */}
                  <div
                    className="w-1 self-stretch rounded-full flex-shrink-0 transition-all duration-300"
                    style={{ background: isOpen ? t.color : "rgba(255,255,255,0.1)", minHeight: 20 }}
                  />

                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black transition-all duration-300"
                    style={{
                      background: isOpen ? `${t.color}20` : "rgba(255,255,255,0.05)",
                      border: isOpen ? `1px solid ${t.color}50` : "1px solid rgba(255,255,255,0.08)",
                      color: isOpen ? t.color : "#B3CFE5",
                    }}
                  >
                    {t.initials}
                  </div>

                  {/* Name + role */}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-black" style={{ color: "#EEF4FF" }}>{t.name}</div>
                    <div className="text-xs truncate" style={{ color: "#B3CFE5" }}>
                      {t.role} · <span style={{ color: isOpen ? t.color : "rgba(179,207,229,0.5)" }}>{t.company}</span>
                    </div>
                  </div>

                  {/* Stars (desktop) */}
                  <div className="hidden sm:flex gap-0.5 flex-shrink-0">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <span key={si} style={{ color: isOpen ? "#eab308" : "rgba(234,179,8,0.3)", fontSize: 12 }}>★</span>
                    ))}
                  </div>

                  {/* Metric */}
                  <div className="text-right flex-shrink-0 hidden md:block">
                    <div className="text-lg font-black leading-none transition-colors duration-300"
                      style={{ color: isOpen ? t.color : "rgba(179,207,229,0.3)" }}>
                      {t.metric}
                    </div>
                    <div className="text-[10px] mt-0.5" style={{ color: "rgba(179,207,229,0.4)" }}>
                      {t.metricLabel}
                    </div>
                  </div>

                  {/* Chevron */}
                  <div
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 4.5L7 9.5L12 4.5" stroke={isOpen ? t.color : "#B3CFE5"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Expandable quote body */}
                <div
                  className="transition-all duration-500 overflow-hidden"
                  style={{ maxHeight: isOpen ? "300px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <div className="px-6 pb-7" style={{ paddingLeft: "calc(1.5rem + 1px + 1rem + 2.5rem + 1rem)" }}>
                    <div className="h-px mb-5" style={{ background: `${t.color}20` }} />
                    <div className="text-4xl font-black leading-none mb-2" style={{ color: `${t.color}30`, fontFamily: "Georgia, serif" }}>
                      &ldquo;
                    </div>
                    <blockquote className="text-sm leading-relaxed" style={{ color: "#EEF4FF" }}>
                      {t.quote}
                    </blockquote>
                  </div>
                </div>
              </div>
            );
          })}
        </FadeInSection>

        {/* Progress indicators */}
        <div className="flex items-center gap-2 mt-8 pl-6">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="h-0.5 rounded-full transition-all duration-500"
              style={{
                width: i === active ? "36px" : "14px",
                background: i === active ? t.color : "rgba(255,255,255,0.12)",
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
