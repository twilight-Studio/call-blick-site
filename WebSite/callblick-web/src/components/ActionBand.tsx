import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ActionBand({ title = "See whether CallBlick fits your review process.", body = "Tell us how your calls are recorded, what needs to be checked, and which data-handling constraints matter." }: { title?: string; body?: string }) {
  return <section className="section-rule bg-[var(--paper-warm)]" data-reveal><div className="page-shell grid gap-7 py-16 md:grid-cols-[1fr_auto] md:items-end lg:py-20"><div><h2 className="display max-w-3xl text-4xl md:text-5xl">{title}</h2><p className="body-copy mt-4">{body}</p></div><Link href="/contact" className="button-primary">Request a demo <ArrowRight size={18} /></Link></div></section>;
}
