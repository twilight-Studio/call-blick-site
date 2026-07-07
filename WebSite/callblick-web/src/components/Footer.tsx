"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Changelog", href: "#" },
    { label: "Roadmap", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Integrations", href: "#" },
    { label: "Status", href: "#" },
    { label: "Support", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "GDPR", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="relative z-10"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/CallBlick-Logo.png"
                alt="CallBlick"
                width={160}
                height={46}
                className="block animate-logo-heartbeat"
                style={{ objectFit: "contain" }}
              />
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "#B3CFE5" }}>
              Advanced intelligence for conversation analysis. Turn every call
              into actionable insight.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-xs font-black uppercase tracking-widest mb-4"
                style={{ color: "#EEF4FF" }}
              >
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-150"
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
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-sm" style={{ color: "#B3CFE5" }}>
            © 2025 CallBlick. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Status"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm transition-colors duration-150"
                style={{ color: "#B3CFE5" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#EEF4FF")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#B3CFE5")
                }
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
