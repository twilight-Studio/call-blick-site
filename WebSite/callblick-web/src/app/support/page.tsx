import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = { title: "Support", description: "Contact CallBlick support." };

const issueTypes = [
  ["Upload or processing", "Describe the file type, approximate size, and where the workflow stopped. Use a non-sensitive reference ID when available."],
  ["Review configuration", "Name the QA question, rule, campaign, or output that does not behave as expected."],
  ["Access or billing", "Include your organisation and plan name, but never send passwords, payment-card details, or sign-in codes."],
] as const;

export default function SupportPage() { return <><PageIntro title="Support, handled by a person."><p>Email the team with your organisation, plan, and a concise description of the problem. Do not attach recordings or personal call data to the first email.</p></PageIntro><section className="section-rule"><div className="page-shell grid gap-10 py-16 lg:grid-cols-[0.7fr_1.3fr] lg:py-24"><div><h2 className="display text-4xl">Help us route the issue.</h2><p className="body-copy mt-4">A small amount of non-sensitive context makes the first response more useful.</p><a href="mailto:info@callblick.com?subject=CallBlick%20support%20request" className="button-primary mt-7">Email support</a></div><div className="border-t border-[var(--rule-strong)]">{issueTypes.map(([title, copy], index) => <article key={title} className="grid gap-3 border-b border-[var(--rule)] py-6 sm:grid-cols-[52px_0.65fr_1fr]"><span className="text-sm tabular-nums text-[var(--blue-dark)]">0{index + 1}</span><h3 className="font-bold">{title}</h3><p className="body-copy text-sm">{copy}</p></article>)}</div></div></section><section className="section-rule bg-[var(--paper-warm)]"><div className="page-shell py-16"><h2 className="display text-3xl">Before sending anything sensitive</h2><p className="body-copy mt-4 max-w-3xl">Start with a description and a non-sensitive identifier. Wait for the team to provide an approved transfer method before sharing recordings, transcripts, credentials, or personal data.</p></div></section></>; }
