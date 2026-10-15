const steps = [
  ["Upload recorded calls", "Bring in the conversations your team is allowed to review. CallBlick is not presented as a live-call listener."],
  ["Choose the review rules", "Define the QA questions, disclosures, and signals that should be checked."],
  ["Inspect findings in context", "Read the transcript, open the supporting excerpt, and decide whether the finding is useful."],
  ["Act with human judgement", "Correct the record, add reviewer context, and use the result for follow-up or coaching."],
] as const;

export default function HowItWorks() {
  return <section id="workflow" className="section-rule" data-reveal><div className="page-shell py-20 lg:py-28"><h2 className="display max-w-3xl text-4xl md:text-5xl">A simple path from upload to judgement.</h2><ol className="mt-10 border-t border-[var(--rule-strong)]">{steps.map(([title, copy], index) => <li key={title} className="grid gap-3 border-b border-[var(--rule)] py-7 md:grid-cols-[70px_0.7fr_1fr]"><span className="text-sm tabular-nums text-[var(--blue-dark)]">{String(index + 1).padStart(2, "0")}</span><h3 className="text-lg font-bold">{title}</h3><p className="body-copy text-sm">{copy}</p></li>)}</ol></div></section>;
}
