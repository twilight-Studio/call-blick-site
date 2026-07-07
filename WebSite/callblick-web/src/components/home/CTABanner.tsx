import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";

export default function CTABanner() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0A1931 0%, #0D2A4A 50%, #020912 100%)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* Noise texture */}
            <div
              className="absolute inset-0 pointer-events-none rounded-3xl"
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                backgroundSize: "128px 128px",
                opacity: 0.04,
              }}
            />

            {/* Glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 60% 90% at 50% 50%, rgba(44,143,255,0.1) 0%, transparent 70%)",
              }}
            />

            {/* Large decorative SVG rings */}
            <svg
              className="absolute -right-20 -top-20 opacity-10 pointer-events-none"
              width="400" height="400" viewBox="0 0 400 400"
            >
              <circle cx="200" cy="200" r="180" fill="none" stroke="#2C8FFF" strokeWidth="0.8" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="#2C8FFF" strokeWidth="0.5" strokeDasharray="6 12" />
              <circle cx="200" cy="200" r="100" fill="none" stroke="#2C8FFF" strokeWidth="0.3" />
            </svg>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-10 py-16 lg:py-20">
              <div>
                <h2
                  className="font-black tracking-[-0.04em] mb-4"
                  style={{
                    color: "#EEF4FF",
                    fontSize: "clamp(36px,5vw,60px)",
                    lineHeight: "0.95",
                  }}
                >
                  Start analyzing
                  <br />
                  your calls
                  <br />
                  <span style={{ color: "#2C8FFF" }}>today.</span>
                </h2>
                <p className="text-base" style={{ color: "#B3CFE5" }}>
                  No setup fees. No long-term contracts.<br />Cancel anytime.
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:items-start">
                <Link
                  href="https://app.callblick.com/sign-up"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-sm w-full lg:w-auto"
                  style={{
                    background: "#2C8FFF",
                    color: "#fff",
                    boxShadow: "0 8px 32px rgba(44,143,255,0.35)",
                  }}
                >
                  Start Free Trial — no card needed
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-sm w-full lg:w-auto"
                  style={{
                    color: "#EEF4FF",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  Book a 20-min demo
                </Link>
                <p className="text-xs" style={{ color: "rgba(179,207,229,0.4)" }}>
                  14-day free trial · Onboarding included
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
