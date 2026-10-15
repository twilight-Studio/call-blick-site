import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ActionBand from "@/components/ActionBand";

export const metadata: Metadata = { title: "Product", description: "Explore CallBlick's transcript, QA, compliance, reporting, and human-review workflow." };

const sections = [
  { title: "Transcript and context", intro: "Build a readable record before making a judgement.", items: [["Speaker separation", "Follow who said what across the uploaded call."], ["Searchable transcript", "Move from a finding to the relevant passage."], ["Summary", "Get an orientation to the call before opening the detail."]] },
  { title: "QA and compliance", intro: "Check the questions that matter to your process.", items: [["Configurable questions", "Shape the review around your scripts, policies, and quality rubric."], ["Evidence-linked findings", "Keep an excerpt beside the answer so a reviewer can verify it."], ["Human override", "Correct the result and preserve the reviewer’s context."]] },
  { title: "Reporting", intro: "Move from an individual call to patterns worth investigating.", items: [["Campaign views", "Group results around the campaigns and queues your team recognises."], ["Sentiment signals", "Use changes in tone as a prompt to inspect—not as a final judgement."], ["Team analysis", "Compare recurring questions and review outcomes across calls."]] },
] as const;

export default function FeaturesPage() { return <><PageIntro title="A review system, not a magic score."><p>CallBlick organises uploaded calls into a traceable record: the conversation, the checks applied to it, and the reviewer’s final judgement.</p></PageIntro><div className="section-rule"><div className="page-shell py-8 lg:py-16">{sections.map((section) => <section key={section.title} className="grid gap-8 border-b border-[var(--rule)] py-12 lg:grid-cols-[0.7fr_1.3fr]"><div><h2 className="display text-3xl md:text-4xl">{section.title}</h2><p className="body-copy mt-4">{section.intro}</p></div><div className="border-t border-[var(--rule-strong)]">{section.items.map(([title, copy]) => <article key={title} className="grid gap-2 border-b border-[var(--rule)] py-5 sm:grid-cols-[0.65fr_1fr]"><h3 className="font-bold">{title}</h3><p className="body-copy text-sm">{copy}</p></article>)}</div></section>)}</div></div><ActionBand /></>; }
