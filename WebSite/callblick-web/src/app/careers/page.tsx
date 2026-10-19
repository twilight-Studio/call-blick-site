import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = { title: "Careers", description: "Careers information for CallBlick." };

const principles = [
  ["Evidence over theatre", "We prefer inspectable product behavior and clear constraints over inflated AI claims."],
  ["Human judgement stays visible", "The product should help reviewers make decisions, not hide them behind an automated score."],
  ["Sensitive data deserves care", "Privacy, access, and processing choices belong in the product conversation from the beginning."],
] as const;

export default function CareersPage() { return <><PageIntro title="Build tools that keep judgement visible."><p>CallBlick works on recorded-call review for quality, compliance, and operations teams. There are no verified public openings at the moment, but this page explains the product values future roles will support.</p></PageIntro><section className="section-rule"><div className="page-shell py-16 lg:py-24"><h2 className="display max-w-3xl text-4xl md:text-5xl">How we approach the work.</h2><div className="mt-9 grid gap-px overflow-hidden border border-[var(--rule)] bg-[var(--rule)] md:grid-cols-3">{principles.map(([title, copy]) => <article key={title} className="bg-[var(--paper)] p-6 md:p-8"><h3 className="text-lg font-bold">{title}</h3><p className="body-copy mt-3 text-sm">{copy}</p></article>)}</div></div></section><section className="section-rule bg-[var(--paper-warm)]"><div className="page-shell grid gap-8 py-16 md:grid-cols-[1fr_auto] md:items-end"><div><h2 className="display text-4xl">General enquiries</h2><p className="body-copy mt-4 max-w-2xl">You may introduce yourself by email. Please do not send identity documents, confidential work samples, or other sensitive material unless the team requests it through an appropriate channel.</p></div><a href="mailto:info@callblick.com?subject=Careers%20enquiry" className="button-primary">Email the team</a></div></section></>; }
