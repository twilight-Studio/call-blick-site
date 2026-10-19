"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Product", href: "/features" },
  { label: "Use cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "Data handling", href: "/data-privacy" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    let lastPosition = window.scrollY;
    let ticking = false;

    const updateNavigation = () => {
      const position = window.scrollY;
      const delta = position - lastPosition;

      setCompact(position > 24);
      if (open || position < 24 || delta < -4) setHidden(false);
      else if (delta > 4 && position > 112) setHidden(true);

      if (Math.abs(delta) > 4) lastPosition = position;
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateNavigation);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateNavigation();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-[var(--rule)] bg-[rgba(2,9,18,0.94)] backdrop-blur-md" data-hidden={hidden && !open} data-compact={compact}>
    <nav className="site-nav page-shell flex items-center justify-between" aria-label="Primary navigation">
      <Link href="/" className="site-brand inline-flex h-full flex-col items-center justify-center" onClick={() => setOpen(false)} aria-label="CallBlick home">
        <Image src="/CallBlick-Logo.png" alt="" width={52} height={46} className="site-logo w-auto object-contain" priority />
        <span className="site-wordmark" aria-hidden="true">Call<span>Blick</span></span>
      </Link>
      <div className="hidden items-center gap-1 md:flex">{navLinks.map((link) => <Link key={link.href} href={link.href} className="min-h-11 px-3.5 inline-flex items-center text-sm font-semibold text-[var(--ink-soft)] hover:text-[var(--ink)]">{link.label}</Link>)}</div>
      <div className="hidden items-center gap-4 md:flex"><Link href="https://app.callblick.com/sign-in" className="text-sm font-semibold hover:underline">Sign in</Link><Link href="/contact" className="button-primary text-sm">Request a demo</Link></div>
      <button type="button" className="min-h-11 min-w-11 inline-flex items-center justify-center md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X size={22} /> : <Menu size={22} />}</button>
    </nav>
    {open && <div id="mobile-navigation" className="border-t border-[var(--rule)] bg-[var(--paper)] md:hidden"><div className="page-shell flex flex-col py-3">{navLinks.map((link) => <Link key={link.href} href={link.href} className="min-h-12 flex items-center border-b border-[var(--rule)] font-semibold" onClick={() => setOpen(false)}>{link.label}</Link>)}<Link href="https://app.callblick.com/sign-in" className="min-h-12 flex items-center font-semibold" onClick={() => setOpen(false)}>Sign in</Link><Link href="/contact" className="button-primary my-2" onClick={() => setOpen(false)}>Request a demo</Link></div></div>}
  </header>;
}
