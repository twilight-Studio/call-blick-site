import Link from "next/link";
import Image from "next/image";

const groups = [
  { name: "Product", links: [["Features", "/features"], ["Pricing", "/pricing"], ["Use cases", "/use-cases"], ["Data handling", "/data-privacy"]] },
  { name: "Company", links: [["Contact", "/contact"], ["Careers", "/careers"], ["Reading", "/blog"]] },
  { name: "Help", links: [["Support", "/support"], ["Status", "/status"], ["Privacy notice", "/privacy-policy"]] },
] as const;

export default function Footer() {
  return <footer className="section-rule bg-[var(--paper-warm)]"><div className="page-shell py-16 lg:py-20">
    <div className="grid gap-12 md:grid-cols-[1.4fr_2fr]"><div><Link href="/" className="inline-flex" aria-label="CallBlick home"><Image src="/CallBlick-Logo-Final.png" alt="CallBlick" width={150} height={108} className="h-auto w-[150px] object-contain" /></Link><p className="body-copy mt-4 max-w-md text-sm">A review workspace for recorded customer calls, built around traceable findings and human judgement.</p><a href="mailto:info@callblick.com" className="text-link mt-5 text-sm">info@callblick.com</a></div>
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">{groups.map((group) => <div key={group.name}><h2 className="mb-3 text-sm font-bold">{group.name}</h2><ul className="space-y-2">{group.links.map(([label, href]) => <li key={href}><Link href={href} className="text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] hover:underline">{label}</Link></li>)}</ul></div>)}</div></div>
    <div className="mt-14 flex flex-col gap-4 border-t border-[var(--rule)] pt-6 text-sm text-[var(--ink-soft)] sm:flex-row sm:items-end sm:justify-between"><p>© 2026 CallBlick. A product of DesignsX.</p><address className="not-italic sm:text-right">Kneippweg 4, 88214 Ravensburg, Germany<br />298a Bath Road, Hounslow, TW4 7DN</address></div>
  </div></footer>;
}
