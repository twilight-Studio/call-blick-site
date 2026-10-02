"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const API_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/query-requests`;

type Status = "idle" | "loading" | "success" | "error";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path
        d="M20.5 11.8a8.45 8.45 0 0 1-12.58 7.37L4 20.25l1.08-3.82A8.45 8.45 0 1 1 20.5 11.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.74 8.7c.18-.4.37-.41.54-.42h.46c.15 0 .4-.06.62.47.23.54.77 1.86.84 2 .07.13.12.29.02.47-.1.19-.15.29-.3.45-.15.17-.32.37-.46.49-.15.15-.3.31-.13.6.17.28.75 1.23 1.6 1.99 1.1.98 2.02 1.28 2.31 1.43.28.14.45.12.61-.07.18-.2.71-.82.9-1.1.18-.29.37-.24.62-.15.25.1 1.62.76 1.9.9.27.13.46.2.52.31.07.12.07.68-.16 1.34-.23.65-1.35 1.25-1.88 1.29-.48.03-1.08.04-1.74-.11-.4-.09-.92-.3-1.58-.58-2.78-1.2-4.6-3.99-4.74-4.17-.14-.19-1.13-1.5-1.13-2.87 0-1.36.72-2.03.98-2.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name") as string,
      work_email: formData.get("work_email") as string,
      company: formData.get("company") as string,
      expected_monthly_call_hours: Number(formData.get("expected_monthly_call_hours")) || 0,
      use_case: formData.get("use_case") as string,
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
      setError("Something went wrong. Please try again or email us at info@callblick.com.");
    }
  }

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
              and 60 free points.
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#B3CFE5" }}>
              Tell us about your call analysis use case, privacy requirements, and expected volume. We will review whether demo access with 60 free points/credits for 60 call minutes is a fit.
            </p>
            <div className="space-y-3">
              <p className="text-xs font-black uppercase tracking-[0.16em]" style={{ color: "#2C8FFF" }}>
                Quick connect
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  className="inline-flex items-center gap-3 rounded-2xl px-5 py-4 text-sm font-bold"
                  href="mailto:info@callblick.com"
                  style={{ background: "rgba(10,25,49,0.68)", border: "1px solid rgba(44,143,255,0.16)", color: "#EEF4FF" }}
                >
                  <Mail size={18} style={{ color: "#2C8FFF" }} />
                  info@callblick.com
                </a>
                <a
                  className="inline-flex items-center gap-3 rounded-2xl px-5 py-4 text-sm font-bold"
                  href="https://wa.me/491631281632"
                  target="_blank"
                  rel="noreferrer"
                  style={{ background: "rgba(10,25,49,0.68)", border: "1px solid rgba(44,143,255,0.24)", color: "#EEF4FF" }}
                >
                  <WhatsAppIcon className="text-[#2C8FFF]" />
                  +49 1523 1357432
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl p-7 space-y-5" style={{ background: "rgba(10,25,49,0.68)", border: "1px solid rgba(44,143,255,0.16)" }}>
            {[
              { label: "Name", name: "name", type: "text", placeholder: "Your name", required: true },
              { label: "Work email", name: "work_email", type: "email", placeholder: "name@company.com", required: true },
              { label: "Company", name: "company", type: "text", placeholder: "Company name", required: true },
              { label: "Expected monthly call hours", name: "expected_monthly_call_hours", type: "number", placeholder: "Example: 100", required: true },
            ].map((field) => (
              <label key={field.name} className="block space-y-2">
                <span className="text-xs font-black uppercase tracking-[0.16em]" style={{ color: "#B3CFE5" }}>{field.label}</span>
                <input
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full h-12 rounded-xl px-4 text-sm font-semibold outline-none"
                  style={{ background: "rgba(2,9,18,0.5)", border: "1px solid rgba(255,255,255,0.09)", color: "#EEF4FF" }}
                />
              </label>
            ))}
            <label className="block space-y-2">
              <span className="text-xs font-black uppercase tracking-[0.16em]" style={{ color: "#B3CFE5" }}>Use case</span>
              <textarea
                name="use_case"
                rows={5}
                placeholder="Tell us about GDPR needs, team size, and call analysis goals."
                required
                className="w-full rounded-xl px-4 py-3 text-sm font-semibold outline-none resize-none"
                style={{ background: "rgba(2,9,18,0.5)", border: "1px solid rgba(255,255,255,0.09)", color: "#EEF4FF" }}
              />
            </label>

            {status === "success" && (
              <div className="rounded-xl px-4 py-3 text-sm font-bold" style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.35)", color: "#22c55e" }}>
                Thanks! Your request has been received. We will get back to you shortly.
              </div>
            )}
            {status === "error" && (
              <div className="rounded-xl px-4 py-3 text-sm font-bold" style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.35)", color: "#ef4444" }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-xl px-6 py-4 text-sm font-bold"
              style={{ background: "#2C8FFF", color: "#fff", opacity: status === "loading" ? 0.6 : 1 }}
            >
              {status === "loading" ? "Submitting..." : "Submit request"}
            </button>
            <p className="text-xs leading-relaxed" style={{ color: "#B3CFE5" }}>
              Prefer email? Reach us directly at info@callblick.com.
            </p>
          </form>
        </FadeInSection>
      </div>
    </div>
  );
}
