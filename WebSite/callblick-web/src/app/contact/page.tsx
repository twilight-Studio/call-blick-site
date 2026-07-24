import { Mail } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] mb-5" style={{ color: "#2C8FFF" }}>
              Contact
            </p>
            <h1 className="font-black tracking-[-0.04em] leading-[0.95] mb-6" style={{ color: "#EEF4FF", fontSize: "clamp(44px,6vw,72px)" }}>
              Request a demo
              <br />
              and free points.
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#B3CFE5" }}>
              Tell us about your call analysis use case, privacy requirements, and expected volume. We will review whether demo access and free points are a fit.
            </p>
            <div className="inline-flex items-center gap-3 rounded-2xl px-5 py-4" style={{ background: "rgba(10,25,49,0.68)", border: "1px solid rgba(44,143,255,0.16)" }}>
              <Mail size={18} style={{ color: "#2C8FFF" }} />
              <a className="text-sm font-bold" href="mailto:info@callblick.com" style={{ color: "#EEF4FF" }}>
                info@callblick.com
              </a>
            </div>
          </div>

          <form className="rounded-3xl p-7 space-y-5" style={{ background: "rgba(10,25,49,0.68)", border: "1px solid rgba(44,143,255,0.16)" }}>
            {[
              { label: "Name", type: "text", placeholder: "Your name" },
              { label: "Work email", type: "email", placeholder: "name@company.com" },
              { label: "Company", type: "text", placeholder: "Company name" },
              { label: "Expected monthly call hours", type: "text", placeholder: "Example: 100 hours" },
            ].map((field) => (
              <label key={field.label} className="block space-y-2">
                <span className="text-xs font-black uppercase tracking-[0.16em]" style={{ color: "#B3CFE5" }}>{field.label}</span>
                <input type={field.type} placeholder={field.placeholder} className="w-full h-12 rounded-xl px-4 text-sm font-semibold outline-none" style={{ background: "rgba(2,9,18,0.5)", border: "1px solid rgba(255,255,255,0.09)", color: "#EEF4FF" }} />
              </label>
            ))}
            <label className="block space-y-2">
              <span className="text-xs font-black uppercase tracking-[0.16em]" style={{ color: "#B3CFE5" }}>Use case</span>
              <textarea rows={5} placeholder="Tell us about GDPR needs, team size, and call analysis goals." className="w-full rounded-xl px-4 py-3 text-sm font-semibold outline-none resize-none" style={{ background: "rgba(2,9,18,0.5)", border: "1px solid rgba(255,255,255,0.09)", color: "#EEF4FF" }} />
            </label>
            <button type="button" className="w-full rounded-xl px-6 py-4 text-sm font-bold" style={{ background: "#2C8FFF", color: "#fff" }}>
              Submit request
            </button>
            <p className="text-xs leading-relaxed" style={{ color: "#B3CFE5" }}>
              Form submission will be connected later. For now, email us directly at info@callblick.com.
            </p>
          </form>
        </FadeInSection>
      </div>
    </div>
  );
}
