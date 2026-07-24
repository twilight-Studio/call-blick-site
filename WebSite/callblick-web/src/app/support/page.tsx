import Link from "next/link";
import { Mail, ShieldQuestion } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

export default function SupportPage() {
  return (
    <div className="min-h-screen pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection className="max-w-3xl">
          <ShieldQuestion size={32} style={{ color: "#2C8FFF" }} />
          <p className="text-xs font-black uppercase tracking-[0.2em] mt-6 mb-5" style={{ color: "#2C8FFF" }}>
            Support
          </p>
          <h1 className="font-black tracking-[-0.04em] leading-[0.95] mb-6" style={{ color: "#EEF4FF", fontSize: "clamp(44px,6vw,72px)" }}>
            Need help with
            <br />
            CallBlick?
          </h1>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "#B3CFE5" }}>
            For now, support is handled directly by email. Include your use case, plan type, and any relevant upload or analysis details.
          </p>
          <Link href="mailto:info@callblick.com" className="inline-flex items-center gap-3 rounded-xl px-6 py-4 text-sm font-bold" style={{ background: "#2C8FFF", color: "#fff" }}>
            <Mail size={18} />
            info@callblick.com
          </Link>
        </FadeInSection>
      </div>
    </div>
  );
}
