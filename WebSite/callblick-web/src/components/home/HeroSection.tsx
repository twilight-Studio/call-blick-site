import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return <section className="relative min-h-[82vh] overflow-hidden">
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Image src="/CallBlick-Logo-Final.png" alt="" fill sizes="100vw" className="hero-background-logo scale-110 object-contain object-center" priority />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,9,18,0.9)_0%,rgba(2,9,18,0.48)_52%,rgba(2,9,18,0.78)_100%)] backdrop-blur-[2px]" />
    </div>
    <div className="page-shell relative z-10 flex min-h-[82vh] items-center justify-center py-32 lg:py-36">
      <div className="hero-enter w-full text-center">
        <h1 className="display w-full text-center text-[clamp(3.8rem,7.4vw,7.25rem)]">Make every recorded call reviewable.</h1>
        <div className="mt-8 flex flex-col items-center gap-7">
        <p className="body-copy mx-auto text-lg md:text-xl">Turn uploaded conversations into a transcript, QA answers, compliance findings, and a clear path for human review.</p>
        <div className="flex flex-wrap items-center justify-center gap-4"><Link href="/contact" className="button-primary">Request a demo</Link><Link href="#product-demo" className="text-link">Watch the product demo <ArrowRight size={17} /></Link></div>
        </div>
      </div>
    </div>
  </section>;
}
