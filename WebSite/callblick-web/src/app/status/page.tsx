import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = { title: "Status", description: "CallBlick service-status information." };

const serviceAreas = [
  ["Application access", "Sign-in and workspace availability"],
  ["Call processing", "Upload, transcription, and analysis workflows"],
  ["Review workspace", "Transcripts, findings, corrections, and reporting"],
] as const;

export default function StatusPage() { return <><PageIntro title="Service status"><p>A verified public uptime feed is not connected to this page yet. We will not label services “operational” without a monitoring source behind that statement.</p></PageIntro><section className="section-rule"><div className="page-shell grid gap-10 py-16 lg:grid-cols-[0.7fr_1.3fr] lg:py-24"><div><p className="text-sm font-bold text-[var(--blue-dark)]">Current public status source</p><h2 className="display mt-4 text-4xl">Not connected</h2><p className="body-copy mt-4">For a current check, contact support with the affected workflow and a non-sensitive reference ID.</p><a href="mailto:info@callblick.com?subject=CallBlick%20status%20check" className="button-primary mt-7">Request a status check</a></div><div className="border border-[var(--rule-strong)] bg-[var(--surface)]">{serviceAreas.map(([name, description]) => <div key={name} className="grid gap-2 border-b border-[var(--rule)] p-5 last:border-0 sm:grid-cols-[0.7fr_1fr_auto] sm:items-center"><h3 className="font-bold">{name}</h3><p className="body-copy text-sm">{description}</p><span className="text-sm font-semibold text-[var(--ink-soft)]">Contact support</span></div>)}</div></div></section><section className="section-rule bg-[var(--paper-warm)]"><div className="page-shell py-16"><h2 className="display text-3xl">Reporting an incident</h2><p className="body-copy mt-4 max-w-3xl">Include when the problem started, the workflow affected, and whether it is consistent or intermittent. Do not include recordings, transcript text, credentials, or personal information in the first message.</p></div></section></>; }
