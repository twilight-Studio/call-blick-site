import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ActionBand from "@/components/ActionBand";

export const metadata: Metadata = { title: "Use cases", description: "Ways QA, compliance, sales, and support teams can use CallBlick." };

const uses = [
  { title: "Quality assurance", who: "For teams replacing small manual samples with a more consistent first review.", work: ["Apply the same QA questions to uploaded calls", "Open the transcript behind an answer", "Use confirmed examples in coaching"] },
  { title: "Compliance review", who: "For reviewers who need to check required language without treating automation as legal judgement.", work: ["Look for disclosures and restricted wording", "Inspect the exact call passage", "Confirm, correct, and document the result"] },
  { title: "Customer operations", who: "For sales and support leaders trying to understand recurring conversation patterns.", work: ["Compare themes across calls", "Review objections and escalation moments", "Bring specific examples into process improvement"] },
] as const;

const demoInputs = [
  ["A representative call type", "Describe the conversations, channels, languages, and recording conditions involved."],
  ["Your review rubric", "Bring the QA questions, disclosures, or phrases reviewers already check."],
  ["The decision after review", "Explain what should happen when a reviewer confirms, corrects, or escalates a finding."],
] as const;

export default function UseCasesPage() { return <><PageIntro title="Built around real review work."><p>Different teams ask different questions of a call. CallBlick provides one review workflow without pretending those decisions can be reduced to a universal score.</p></PageIntro><section className="section-rule"><div className="page-shell py-16 lg:py-24"><div className="space-y-14">{uses.map((use) => <article key={use.title} className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr]"><div><h2 className="display text-4xl">{use.title}</h2><p className="body-copy mt-4">{use.who}</p></div><ul className="border-t border-[var(--rule-strong)]">{use.work.map((item) => <li key={item} className="border-b border-[var(--rule)] py-4 text-sm text-[var(--ink-soft)]">{item}</li>)}</ul></article>)}</div></div></section><section className="section-rule bg-[var(--paper-warm)]"><div className="page-shell py-16 lg:py-24"><h2 className="display max-w-3xl text-4xl md:text-5xl">What makes a useful evaluation.</h2><div className="mt-9 grid gap-px overflow-hidden border border-[var(--rule)] bg-[var(--rule)] md:grid-cols-3">{demoInputs.map(([title, copy], index) => <article key={title} className="bg-[var(--paper-warm)] p-6 md:p-8"><span className="text-sm tabular-nums text-[var(--blue-dark)]">0{index + 1}</span><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="body-copy mt-3 text-sm">{copy}</p></article>)}</div></div></section><ActionBand title="Bring your own review questions." body="A useful demo starts with your call type, your rubric, and the decisions reviewers are expected to make." /></>; }
