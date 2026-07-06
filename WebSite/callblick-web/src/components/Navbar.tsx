"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={{
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid transparent",
        background: scrolled ? "rgba(2,9,18,0.85)" : "transparent",
        height: scrolled ? "60px" : "72px",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background: "#2C8FFF" }}
          >
            <Phone size={16} color="#fff" strokeWidth={2.5} />
          </div>
          <span
            className="text-lg font-black tracking-tight"
            style={{ color: "#EEF4FF" }}
          >
            CallBlick
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-150"
              style={{ color: "#B3CFE5" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#EEF4FF")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#B3CFE5")
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#"
            className="px-5 py-2 rounded-2xl text-sm font-bold transition-all duration-150"
            style={{
              color: "#EEF4FF",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            Sign In
          </Link>
          <Link
            href="#"
            className="px-5 py-2 rounded-2xl text-sm font-bold transition-all duration-150"
            style={{
              background: "#2C8FFF",
              color: "#fff",
              boxShadow: "0 0 24px rgba(44,143,255,0.35)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 40px rgba(44,143,255,0.55)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 24px rgba(44,143,255,0.35)")
            }
          >
            Get Started Free
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-xl"
          style={{ color: "#EEF4FF" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-2"
          style={{
            background: "rgba(2,9,18,0.97)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(24px)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 rounded-xl text-sm font-medium"
              style={{ color: "#B3CFE5" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-2 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <Link
              href="#"
              className="px-5 py-3 rounded-2xl text-sm font-bold text-center"
              style={{ color: "#EEF4FF", border: "1px solid rgba(255,255,255,0.12)" }}
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="#"
              className="px-5 py-3 rounded-2xl text-sm font-bold text-center"
              style={{ background: "#2C8FFF", color: "#fff" }}
              onClick={() => setMenuOpen(false)}
            >
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
