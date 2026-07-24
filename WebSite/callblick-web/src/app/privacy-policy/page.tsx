import FadeInSection from "@/components/FadeInSection";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-28 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInSection>
          <p className="text-xs font-black uppercase tracking-[0.2em] mb-5" style={{ color: "#2C8FFF" }}>
            Legal
          </p>
          <h1 className="font-black tracking-[-0.04em] leading-[0.95] mb-6" style={{ color: "#EEF4FF", fontSize: "clamp(44px,6vw,72px)" }}>
            Privacy Policy
          </h1>
          <div className="rounded-3xl p-8 space-y-5" style={{ background: "rgba(10,25,49,0.68)", border: "1px solid rgba(44,143,255,0.16)" }}>
            <p className="text-base leading-relaxed" style={{ color: "#B3CFE5" }}>
              This legal page is a placeholder. The final legal policy will be added later.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#B3CFE5" }}>
              Current product positioning: CallBlick offers privacy controls based on the selected plan, including GDPR-aligned EU-only processing options and zero data retention options.
            </p>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
