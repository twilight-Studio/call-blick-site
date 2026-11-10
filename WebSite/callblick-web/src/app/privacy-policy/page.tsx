import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Privacy and data security",
  description:
    "How CallBlick keeps customer data secure through GDPR-aligned handling, EU infrastructure, controlled access, and plan-specific AI processing options.",
};

const protections = [
  {
    title: "GDPR-aligned handling",
    copy: "CallBlick handles personal and sensitive information in line with GDPR principles, with clear controls for access, retention, and deletion.",
  },
  {
    title: "EU-hosted infrastructure",
    copy: "Customer data and core processing remain on infrastructure located in the European Union.",
  },
  {
    title: "Controlled workspace access",
    copy: "Recordings, transcripts, and results are available only to authorised users in your organisation.",
  },
  {
    title: "No third-party sharing",
    copy: "CallBlick does not disclose customer recordings, transcripts, analysis, or sensitive information to third parties.",
  },
  {
    title: "Zero-retention AI options",
    copy: "Depending on your selected setup, AI models can process content without retaining it after the request is completed.",
  },
  {
    title: "EU-based AI options",
    copy: "Depending on your selected setup, AI model processing can remain within the European Union.",
  },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageIntro title="Your data stays secure.">
        <p>
          CallBlick protects personal and sensitive information throughout upload,
          processing, review, and deletion. Security is built into the service,
          with additional processing options available for different requirements.
        </p>
      </PageIntro>

      <section className="section-rule">
        <div className="page-shell py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="display text-4xl">How we protect your information.</h2>
              <p className="body-copy mt-4">
                These safeguards work in the background, so your team can keep its
                normal review workflow.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden border border-[var(--rule)] bg-[var(--rule)] md:grid-cols-2">
              {protections.map(({ title, copy }) => (
                <article key={title} className="bg-[var(--paper)] p-6 md:p-8">
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="body-copy mt-3 text-sm leading-6">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule bg-[var(--paper-warm)]">
        <div className="page-shell py-16 lg:py-20">
          <h2 className="display max-w-3xl text-4xl">
            Choose the right security setup.
          </h2>
          <p className="body-copy mt-4 max-w-3xl">
            Zero-retention and EU-based AI model options depend on the selected
            configuration. If your organisation has specific security, retention,
            or processing requirements, our team is available to discuss them.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link href="/contact" className="button-primary">
              Discuss your requirements
            </Link>
            <Link href="/data-privacy" className="button-secondary">
              Review data handling
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
