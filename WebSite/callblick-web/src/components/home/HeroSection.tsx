import Link from "next/link";
import Image from "next/image";
import { ArrowRight, DatabaseX, FileCheck2, ShieldCheck } from "lucide-react";

const trustBadges = [
  { label: "GDPR-aligned options", Icon: ShieldCheck },
  { label: "Zero data retention", Icon: DatabaseX },
  { label: "Traceable analysis", Icon: FileCheck2 },
];

export default function HeroSection() {
  return <section className="hero-section relative overflow-hidden">
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Image src="/CallBlick-Logo-Final.png" alt="" fill sizes="100vw" className="hero-background-logo scale-110 object-contain object-center" priority />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,9,18,0.9)_0%,rgba(2,9,18,0.48)_52%,rgba(2,9,18,0.78)_100%)] backdrop-blur-[2px]" />
    </div>
    <div className="hero-shell page-shell relative z-10 flex items-center justify-center">
      <div className="hero-enter w-full text-center">
        <h1 className="hero-title display w-full text-center">Make every recorded call reviewable.</h1>
        <div className="hero-copy-stack flex flex-col items-center">
          <p className="hero-description body-copy mx-auto">Turn uploaded conversations into a transcript, QA answers, compliance findings, and a clear path for human review.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2"><Link href="/contact" className="button-primary">Request a demo</Link><Link href="#product-demo" className="text-link">Watch the product demo <ArrowRight size={17} /></Link></div>
          <ul
            aria-label="Data handling and review features"
            className="hero-trust-grid grid w-full max-w-[760px] overflow-hidden border border-[var(--rule)] bg-[rgba(7,20,38,0.72)]"
          >
            {trustBadges.map(({ label, Icon }) => (
              <li
                key={label}
                className="hero-trust-badge flex items-center justify-center gap-2 font-semibold text-[var(--ink)]"
              >
                <Icon aria-hidden="true" className="hero-trust-icon shrink-0 text-[var(--blue-dark)]" size={16} strokeWidth={1.8} />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>;
}
