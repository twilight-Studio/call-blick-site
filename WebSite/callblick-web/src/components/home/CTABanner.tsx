import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";

export default function CTABanner() {
  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div
            className="relative rounded-3xl overflow-hidden px-8 py-20 text-center"
            style={{
              background:
                "linear-gradient(135deg, #0A1931 0%, #0D2A4A 50%, #020912 100%)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* Radial glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(44,143,255,0.12) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2
                className="text-[clamp(36px,5vw,56px)] font-black tracking-[-0.03em] mb-4"
                style={{ color: "#EEF4FF" }}
              >
                Start analyzing your calls today.
              </h2>
              <p
                className="text-lg mb-10"
                style={{ color: "#B3CFE5" }}
              >
                No setup fees. No long-term contracts. Cancel anytime.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/pricing"
                  className="px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300"
                  style={{
                    background: "#2C8FFF",
                    color: "#fff",
                    boxShadow: "0 0 32px rgba(44,143,255,0.35)",
                  }}
                >
                  Start Free Trial
                </Link>
                <Link
                  href="#"
                  className="px-8 py-4 rounded-2xl font-bold text-base transition-all duration-150"
                  style={{
                    color: "#EEF4FF",
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "transparent",
                  }}
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
