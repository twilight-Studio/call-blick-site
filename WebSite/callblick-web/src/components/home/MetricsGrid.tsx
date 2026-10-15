const principles = [
  ["Evidence stays close", "Open a finding beside the words that triggered it instead of treating a score as the final answer."],
  ["Rules fit the team", "Configure the questions, disclosures, and QA checks that matter to your own review process."],
  ["People keep control", "Reviewers can confirm, correct, and add context before a finding becomes an operational decision."],
] as const;

export default function MetricsGrid() {
  return <section className="section-rule bg-[var(--paper-warm)]" data-reveal><div className="page-shell py-16 lg:py-20"><h2 className="display max-w-3xl text-4xl md:text-5xl">Trust comes from inspectable work.</h2><div className="mt-10 grid gap-px overflow-hidden border border-[var(--rule)] bg-[var(--rule)] md:grid-cols-3">{principles.map(([title, copy]) => <article key={title} className="bg-[var(--paper-warm)] p-6 md:p-8"><h3 className="text-lg font-bold">{title}</h3><p className="body-copy mt-3 text-sm">{copy}</p></article>)}</div></div></section>;
}
