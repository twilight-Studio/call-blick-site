"use client";
import { useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/+$/, "");
const API_URL = API_BASE_URL ? `${API_BASE_URL}/api/v1/query-requests` : null;
type Status = "idle" | "loading" | "success" | "error";

const nextSteps = [
  "We review the call type, evaluation goals, and data-handling constraints you provide.",
  "The team follows up by work email with the most useful next step.",
  "Any demo can focus on your own rubric without requiring sensitive recordings in the first conversation.",
] as const;

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("loading"); setError("");
    const form = event.currentTarget; const data = new FormData(form);
    const payload = { name: data.get("name"), work_email: data.get("work_email"), company: data.get("company"), expected_monthly_call_hours: Number(data.get("expected_monthly_call_hours")) || 0, use_case: data.get("use_case") };
    try {
      if (!API_URL) throw new Error("Contact API URL is not configured");
      const response = await fetch(API_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      setStatus("success"); form.reset();
    } catch (requestError) { console.error("Contact form submission failed:", requestError); setStatus("error"); setError("We could not submit the form. Please try again or email info@callblick.com."); }
  }

  return <div className="page-shell grid gap-14 pt-32 pb-20 lg:grid-cols-[0.75fr_1.25fr] lg:pt-40 lg:pb-28">
    <div><h1 className="display text-[clamp(3.7rem,7vw,6rem)]">Start with your review process.</h1><p className="body-copy mt-6 text-lg">Tell us what kinds of recorded calls you review, which checks matter, and what data-handling constraints apply. We will respond with the next useful step—not a generic sales script.</p><div className="mt-9 border-t border-[var(--rule-strong)]"><h2 className="py-4 text-sm font-bold">What happens next</h2><ol>{nextSteps.map((step, index) => <li key={step} className="grid grid-cols-[36px_1fr] gap-2 border-t border-[var(--rule)] py-4 text-sm"><span className="tabular-nums text-[var(--blue-dark)]">0{index + 1}</span><span className="body-copy">{step}</span></li>)}</ol></div><div className="mt-8 border-t border-[var(--rule)] pt-6"><p className="text-sm font-bold">Prefer email?</p><a className="text-link mt-2" href="mailto:info@callblick.com">info@callblick.com</a><p className="body-copy mt-5 text-sm">Please do not send recordings, credentials, or sensitive personal data through this form.</p></div></div>
    <form onSubmit={handleSubmit} className="border border-[var(--rule-strong)] bg-[var(--surface)] p-6 md:p-8">
      <h2 className="display text-3xl">Request a demo</h2>
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label><span className="field-label">Name</span><input className="field" name="name" autoComplete="name" required /></label>
        <label><span className="field-label">Work email</span><input className="field" name="work_email" type="email" autoComplete="email" required /></label>
        <label><span className="field-label">Company</span><input className="field" name="company" autoComplete="organization" required /></label>
        <label><span className="field-label">Approximate monthly call hours</span><input className="field" name="expected_monthly_call_hours" type="number" min="0" inputMode="numeric" /></label>
      </div>
      <label className="mt-5 block"><span className="field-label">What should the review help you do?</span><textarea className="field min-h-36 resize-y" name="use_case" placeholder="Call type, review questions, team, and data-handling requirements" required /></label>
      <div aria-live="polite">{status === "success" && <p className="mt-5 border border-[#a7d4c2] bg-[#edf8f3] p-3 text-sm text-[var(--success)]">Your request was received. The team will follow up by email.</p>}{status === "error" && <p className="mt-5 border border-[#edc4c0] bg-[var(--danger-soft)] p-3 text-sm text-[var(--danger)]">{error}</p>}</div>
      <button type="submit" disabled={status === "loading"} className="button-primary mt-6 w-full disabled:cursor-wait disabled:opacity-60">{status === "loading" ? "Submitting…" : "Submit request"}</button>
    </form>
  </div>;
}
