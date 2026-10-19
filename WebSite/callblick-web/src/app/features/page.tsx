import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ActionBand from "@/components/ActionBand";

export const metadata: Metadata = { title: "Product", description: "Explore CallBlick's transcript, QA, compliance, reporting, and human-review workflow." };

const sections = [
  { title: "Transcript and context", intro: "Build a readable record before making a judgement.", items: [["Speaker separation", "Follow who said what across the uploaded call."], ["Searchable transcript", "Move from a finding to the relevant passage."], ["Summary", "Get an orientation to the call before opening the detail."]] },
  { title: "QA and compliance", intro: "Check the questions that matter to your process.", items: [["Configurable questions", "Shape the review around your scripts, policies, and quality rubric."], ["Evidence-linked findings", "Keep an excerpt beside the answer so a reviewer can verify it."], ["Human override", "Correct the result and preserve the reviewer’s context."]] },
  { title: "Reporting", intro: "Move from an individual call to patterns worth investigating.", items: [["Campaign views", "Group results around the campaigns and queues your team recognises."], ["Sentiment signals", "Use changes in tone as a prompt to inspect—not as a final judgement."], ["Team analysis", "Compare recurring questions and review outcomes across calls."]] },
] as const;

const exampleRows = [
  ["Transcript", "The adviser confirms the customer’s identity, then moves to the required disclosure."],
  ["Automated finding", "The configured disclosure check needs review at 03:14."],
  ["Reviewer action", "Open the passage, confirm or correct the finding, and add context to the record."],
] as const;

export default function FeaturesPage() { return <><PageIntro title="A review system, not a magic score."><p>CallBlick organises uploaded calls into a traceable record: the conversation, the checks applied to it, and the reviewer’s final judgement.</p></PageIntro><div className="section-rule"><div className="page-shell py-8 lg:py-16">{sections.map((section) => <section key={section.title} className="grid gap-8 border-b border-[var(--rule)] py-12 lg:grid-cols-[0.7fr_1.3fr]"><div><h2 className="display text-3xl md:text-4xl">{section.title}</h2><p className="body-copy mt-4">{section.intro}</p></div><div className="border-t border-[var(--rule-strong)]">{section.items.map(([title, copy]) => <article key={title} className="grid gap-2 border-b border-[var(--rule)] py-5 sm:grid-cols-[0.65fr_1fr]"><h3 className="font-bold">{title}</h3><p className="body-copy text-sm">{copy}</p></article>)}</div></section>)}</div></div><section className="section-rule bg-[var(--paper-warm)]"><div className="page-shell grid gap-10 py-16 lg:grid-cols-[0.7fr_1.3fr] lg:py-24"><div><p className="text-sm font-bold text-[var(--blue-dark)]">Illustrative review record</p><h2 className="display mt-4 text-4xl">Keep the evidence, finding, and decision together.</h2><p className="body-copy mt-4">This simplified example shows the relationship between product outputs. It is not a real customer call or a product accuracy claim.</p></div><div className="border border-[var(--rule-strong)] bg-[var(--surface)]">{exampleRows.map(([label, copy], index) => <div key={label} className="grid gap-2 border-b border-[var(--rule)] p-5 last:border-0 sm:grid-cols-[150px_1fr]"><span className="text-sm font-bold"><span className="mr-3 text-[var(--blue-dark)]">0{index + 1}</span>{label}</span><p className="body-copy text-sm">{copy}</p></div>)}</div></div></section><ActionBand /></>; }
