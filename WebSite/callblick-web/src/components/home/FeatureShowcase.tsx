const groups = [
  { title: "Understand the conversation", copy: "Start with speaker-separated transcription, summaries, and the relevant parts of a long call—not a black-box verdict.", items: ["Speaker-separated transcript", "Call summary", "Sentiment signals"] },
  { title: "Review what matters", copy: "Apply your own QA questions and compliance rules, then open each finding in context.", items: ["Configurable QA answers", "Compliance checks", "Transcript-linked findings"] },
  { title: "Improve the process", copy: "Compare themes across calls and campaigns while keeping individual examples available for coaching and follow-up.", items: ["Campaign views", "Team reporting", "Human corrections"] },
] as const;

export default function FeatureShowcase() {
  return <section className="section-rule" data-reveal><div className="page-shell py-20 lg:py-28"><div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><div><h2 className="display text-4xl md:text-5xl">From conversation to a reviewable record.</h2><p className="body-copy mt-5">The product is organised around the work reviewers already do: understand the call, check the requirements, and decide what follows.</p></div><div className="border-t border-[var(--rule-strong)]">{groups.map((group) => <article key={group.title} className="grid gap-5 border-b border-[var(--rule)] py-8 md:grid-cols-[1fr_0.9fr]"><div><h3 className="text-xl font-bold">{group.title}</h3><p className="body-copy mt-3 text-sm">{group.copy}</p></div><ul className="space-y-2 text-sm text-[var(--ink-soft)]">{group.items.map((item) => <li key={item} className="border-b border-[var(--rule)] pb-2 last:border-0">{item}</li>)}</ul></article>)}</div></div></div></section>;
}
