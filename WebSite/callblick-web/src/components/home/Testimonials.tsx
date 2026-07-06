"use client";

import { useState, useEffect } from "react";
import FadeInSection from "@/components/FadeInSection";

const testimonials = [
  {
    quote:
      "CallBlick transformed our QA process. We went from reviewing 5% of calls manually to getting AI insights on 100% of calls in real time. The red flag detection alone has saved us from multiple compliance issues.",
    name: "Sarah Chen",
    role: "VP of Quality Assurance",
    company: "PremierLife Insurance",
    initials: "SC",
  },
  {
    quote:
      "The sentiment timeline feature is incredible. We can now correlate call quality scores with customer satisfaction metrics and identify exactly where agents need coaching. Our CSAT improved 18% in 60 days.",
    name: "Marcus Rivera",
    role: "Head of Customer Operations",
    company: "Velocity Financial",
    initials: "MR",
  },
  {
    quote:
      "We evaluated five platforms before choosing CallBlick. The transcription accuracy is best-in-class and the campaign analytics give our managers visibility they've never had before. Deployment was seamless.",
    name: "Priya Nair",
    role: "Director of Call Center Technology",
    company: "ClearPath Solutions",
    initials: "PN",
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

  const t = testimonials[active];

  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection className="text-center mb-16">
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
              Testimonials
            </span>
          </div>
          <h2
            className="text-[clamp(36px,5vw,52px)] font-black tracking-[-0.03em]"
            style={{ color: "#EEF4FF" }}
          >
            Loved by QA teams everywhere.
          </h2>
        </FadeInSection>

        {/* Active testimonial */}
        <div className="max-w-3xl mx-auto mb-8">
          <div
            className="rounded-3xl p-10 transition-all duration-400"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(44,143,255,0.3)",
              boxShadow: "0 0 40px rgba(44,143,255,0.1)",
            }}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="text-base" style={{ color: "#eab308" }}>
                  ★
                </div>
              ))}
            </div>

            <blockquote
              className="text-lg font-medium leading-relaxed mb-8"
              style={{ color: "#EEF4FF" }}
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(44,143,255,0.2)" }}
              >
                <span
                  className="text-sm font-black"
                  style={{ color: "#2C8FFF" }}
                >
                  {t.initials}
                </span>
              </div>
              <div>
                <div className="font-black" style={{ color: "#EEF4FF" }}>
                  {t.name}
                </div>
                <div className="text-sm" style={{ color: "#B3CFE5" }}>
                  {t.role} · {t.company}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots + mini cards */}
        <div className="flex items-center justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === active ? "24px" : "8px",
                height: "8px",
                background:
                  i === active ? "#2C8FFF" : "rgba(255,255,255,0.2)",
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
