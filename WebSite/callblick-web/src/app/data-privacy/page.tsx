import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Data handling",
  description:
    "How CallBlick handles EU processing, sensitive information, access, retention, deletion, and data-protection terms.",
};

const questions = [
  {
    question: "Where will transcription and model processing happen for this plan?",
    answer:
      "CallBlick processes transcription and AI analysis on infrastructure located in the European Union. The workflow is automated, and only your authorised agents work with the call content and its results. The CallBlick team does not listen to or manually handle customer recordings.",
  },
  {
    question: "How long are uploaded audio, transcripts, and outputs retained?",
    answer:
      "Uploaded audio is handled under a zero-data-retention workflow and is removed after processing. Transcripts and analysis results are kept only for the retention period agreed for your workspace, and an authorised administrator can request earlier deletion at any time.",
  },
  {
    question: "Is customer information shared with subprocessors or external model providers?",
    answer:
      "Customer recordings, transcripts, analysis results, and sensitive information are not shared with third parties. Processing remains within CallBlick's EU-hosted environment and customer content is not provided to external model providers or used to train third-party models.",
  },
  {
    question: "How are deletion requests and access controls handled?",
    answer:
      "Workspace access is limited to your authorised agents and administrators. Your team decides who can work with recordings and results, and an authorised administrator can request deletion at any time. Customer content is accessible only to authorised users in your organisation.",
  },
  {
    question: "Which contractual terms apply to the intended data and jurisdiction?",
    answer:
      "For EU personal data, CallBlick acts as a processor under a Data Processing Agreement aligned with the GDPR, while the customer remains the controller. The agreement records EU-based processing, confidentiality, access controls, retention, deletion or return of data, and the commitment not to disclose customer information to third parties.",
  },
] as const;

const safeguards = [
  [
    "Protected EU processing",
    "Recordings and analysis are processed inside CallBlick's EU-hosted environment and are not sent to external model providers or other third parties.",
  ],
  [
    "Access controlled by design",
    "Customer content is available only to authorised users in your workspace. CallBlick staff do not listen to or manually handle your recordings.",
  ],
  [
    "Automatic data lifecycle",
    "Uploaded audio is removed after processing. Transcripts and results follow your agreed retention period and can be deleted earlier by an authorised administrator.",
  ],
] as const;

export default function DataPrivacyPage() {
  return (
    <>
      <PageIntro title="Confirm data handling before you upload.">
        <p>
          Personal and sensitive information can remain in the recordings your
          authorised agents upload. CallBlick keeps processing in the EU, limits
          access to your team, and does not share customer information with third
          parties.
        </p>
      </PageIntro>

      <section className="section-rule">
        <div className="page-shell grid gap-12 py-16 lg:grid-cols-[0.75fr_1.25fr] lg:py-24">
          <div>
            <h2 className="display text-4xl">Questions answered clearly.</h2>
            <p className="body-copy mt-4">
              These are our standard data-handling commitments. We confirm the
              exact retention period, access controls, and contractual terms for
              your selected plan in writing.
            </p>
          </div>
          <ol className="border-t border-[var(--rule-strong)]">
            {questions.map(({ question, answer }, index) => (
              <li
                key={question}
                className="grid grid-cols-[42px_1fr] gap-3 border-b border-[var(--rule)] py-6"
              >
                <span className="tabular-nums text-sm text-[var(--blue-dark)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold">{question}</h3>
                  <p className="body-copy mt-3 text-sm leading-6">{answer}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-rule">
        <div className="page-shell py-16 lg:py-24">
          <h2 className="display max-w-3xl text-4xl md:text-5xl">
            Protection is built into the system.
          </h2>
          <div className="mt-9 grid gap-px overflow-hidden border border-[var(--rule)] bg-[var(--rule)] md:grid-cols-3">
            {safeguards.map(([title, copy]) => (
              <article key={title} className="bg-[var(--paper)] p-6 md:p-8">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="body-copy mt-3 text-sm">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-rule bg-[var(--paper-warm)]">
        <div className="page-shell py-16">
          <h2 className="display max-w-3xl text-4xl">
            Keep your data completely secure.
          </h2>
          <p className="body-copy mt-4 max-w-3xl">
            CallBlick protects your recordings, transcripts, and analysis
            throughout processing. If your organisation has specific security,
            retention, or data-handling requirements, our team is available to
            discuss them with you.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link href="/contact" className="button-primary">
              Discuss your requirements
            </Link>
            <Link href="/privacy-policy" className="button-secondary">
              Review privacy &amp; security
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
