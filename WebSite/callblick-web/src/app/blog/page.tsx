"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const tags = ["All", "Product Update", "Tutorial", "Industry", "AI Research"];

const posts = [
  {
    title: "How AI Transcription Accuracy Reaches 99.4% in Real Call Center Conditions",
    excerpt: "Achieving near-perfect transcription in noisy, accented, multi-speaker environments requires more than a good model. Here's how we did it.",
    date: "Jun 28, 2025", readTime: "8 min", tag: "AI Research", featured: true,
  },
  {
    title: "QA Scoring Best Practices: Building Questionnaires That Actually Work",
    excerpt: "The quality of your QA output is only as good as your questionnaire design. We analyzed thousands of QA rubrics.",
    date: "Jun 18, 2025", readTime: "6 min", tag: "Tutorial", featured: false,
  },
  {
    title: "New: Campaign Analytics Dashboard — Measure What Matters",
    excerpt: "Redesigned Campaign Analytics with batch comparison, agent leaderboards, and BI export.",
    date: "Jun 10, 2025", readTime: "3 min", tag: "Product Update", featured: false,
  },
  {
    title: "The True Cost of Manual Call Center QA (And How to Fix It)",
    excerpt: "Manual QA covers 5–10% of calls at enormous cost. We break down the math.",
    date: "May 30, 2025", readTime: "7 min", tag: "Industry", featured: false,
  },
  {
    title: "CFPB Compliance in 2025: What Financial Services Call Centers Need to Know",
    excerpt: "Regulatory requirements for financial services call centers are tightening. Here's what changed.",
    date: "May 20, 2025", readTime: "9 min", tag: "Industry", featured: false,
  },
  {
    title: "Sentiment Analysis vs. QA Scoring: Understanding the Difference",
    excerpt: "Sentiment and QA measure different things. Learn when to use each and how they complement.",
    date: "May 12, 2025", readTime: "5 min", tag: "AI Research", featured: false,
  },
  {
    title: "How to Set Up Red Flag Detection for Insurance Sales Compliance",
    excerpt: "A step-by-step guide to configuring red flag detection — with example keyword libraries.",
    date: "May 5, 2025", readTime: "10 min", tag: "Tutorial", featured: false,
  },
];

const tagMeta: Record<string, { color: string; bg: string }> = {
  "Product Update": { color: "#2C8FFF", bg: "rgba(44,143,255,0.1)" },
  "Tutorial":       { color: "#22c55e", bg: "rgba(34,197,94,0.1)" },
  "Industry":       { color: "#eab308", bg: "rgba(234,179,8,0.1)" },
  "AI Research":    { color: "#8b5cf6", bg: "rgba(139,92,246,0.1)" },
};

/* Small abstract SVG cover per article */
function ArticleCover({ tag, idx }: { tag: string; idx: number }) {
  const meta = tagMeta[tag] || { color: "#B3CFE5", bg: "rgba(255,255,255,0.05)" };
  const seeds = [0.4, 0.7, 1.1, 0.3, 0.85, 0.55, 0.95];
  const seed = seeds[idx % seeds.length];

  return (
    <div className="w-full h-full" style={{ background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${meta.bg} 0%, rgba(10,25,49,0.9) 80%)` }}>
      <svg viewBox="0 0 160 100" className="w-full h-full" style={{ opacity: 0.6 }}>
        {/* Abstract lines pattern — different per article */}
        {Array.from({ length: 8 }).map((_, i) => {
          const y = 10 + i * 11;
          const w = 40 + Math.sin((i + idx) * seed * 2.1) * 60 + 40;
          return (
            <rect key={i} x={(160 - w) / 2} y={y} width={w} height="3" rx="1.5"
              fill={meta.color} opacity={0.15 + (i === 3 || i === 4 ? 0.3 : 0)} />
          );
        })}
        {/* Accent shape */}
        <circle cx={30 + idx * 15 % 100} cy={50 + Math.sin(idx * seed) * 20}
          r={8 + Math.sin(seed * 3) * 6}
          fill={meta.color} opacity="0.12" />
        <circle cx={80 + Math.sin(idx * 0.7) * 40} cy={40 + idx % 30}
          r="5" fill={meta.color} opacity="0.2" />
      </svg>
    </div>
  );
}

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("All");
  const featured = posts[0];
  const rest = posts.slice(1).filter(p => activeTag === "All" || p.tag === activeTag);

  return (
    <div className="min-h-screen pt-28 pb-32 relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 40% 40% at 85% 10%, rgba(44,143,255,0.06) 0%, transparent 60%)"
      }} />

      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <FadeInSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] mb-5" style={{ color: "#2C8FFF" }}>
              Blog
            </p>
            <h1
              className="font-black tracking-[-0.04em] leading-[0.95]"
              style={{ color: "#EEF4FF", fontSize: "clamp(44px,6vw,72px)" }}
            >
              Insights &
              <br />
              <span style={{
                background: "linear-gradient(135deg, #2C8FFF, #7AB8FF)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
              }}>deep dives.</span>
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed" style={{ color: "#B3CFE5" }}>
              AI, call center QA, compliance, and product — written by the team building CallBlick.
            </p>
            {/* Tag filter — inline, not centered */}
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => {
                const m = tagMeta[tag];
                const isActive = activeTag === tag;
                return (
                  <button key={tag} onClick={() => setActiveTag(tag)}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-150"
                    style={isActive ? {
                      background: m ? m.bg : "rgba(255,255,255,0.1)",
                      border: `1px solid ${m ? m.color + "50" : "rgba(255,255,255,0.2)"}`,
                      color: m ? m.color : "#EEF4FF",
                    } : {
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      color: "#B3CFE5",
                    }}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        </FadeInSection>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Featured post — editorial big card ── */}
        {(activeTag === "All" || activeTag === featured.tag) && (
          <FadeInSection className="mb-12">
            <Link href="#"
              className="group block rounded-2xl overflow-hidden transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(10,25,49,0.6)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Cover */}
                <div className="lg:col-span-2 h-56 lg:h-auto overflow-hidden">
                  <ArticleCover tag={featured.tag} idx={0} />
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[10px] font-black uppercase tracking-[0.16em] px-2.5 py-1 rounded"
                      style={{
                        background: tagMeta[featured.tag]?.bg,
                        color: tagMeta[featured.tag]?.color,
                      }}
                    >
                      {featured.tag}
                    </span>
                    <span className="text-xs" style={{ color: "#B3CFE5" }}>{featured.readTime} read</span>
                    <span className="text-xs" style={{ color: "#B3CFE5" }}>{featured.date}</span>
                  </div>

                  <h2
                    className="font-black tracking-[-0.02em] leading-tight mb-4"
                    style={{ color: "#EEF4FF", fontSize: "clamp(20px,2.5vw,28px)" }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-8" style={{ color: "#B3CFE5" }}>
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold transition-all duration-150 group-hover:gap-3"
                    style={{ color: "#2C8FFF" }}>
                    Read article <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            </Link>
          </FadeInSection>
        )}

        {/* ── Post grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((post, i) => {
            const m = tagMeta[post.tag];
            return (
              <FadeInSection key={i} delay={i * 50}>
                <Link href="#"
                  className="group flex flex-col rounded-2xl overflow-hidden h-full transition-all duration-300"
                  style={{ background: "rgba(10,25,49,0.6)", border: "1px solid rgba(255,255,255,0.07)" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(44,143,255,0.2)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"}
                >
                  {/* Cover */}
                  <div className="h-36 overflow-hidden flex-shrink-0">
                    <ArticleCover tag={post.tag} idx={i + 1} />
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[9px] font-black uppercase tracking-[0.16em] px-2 py-0.5 rounded"
                        style={{ background: m?.bg, color: m?.color }}>
                        {post.tag}
                      </span>
                      <span className="text-xs" style={{ color: "#B3CFE5" }}>{post.readTime}</span>
                    </div>

                    <h3 className="text-sm font-black leading-snug mb-2 flex-1"
                      style={{ color: "#EEF4FF" }}>
                      {post.title}
                    </h3>
                    <p className="text-xs leading-relaxed mb-4" style={{ color: "#B3CFE5" }}>
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs" style={{ color: "rgba(179,207,229,0.5)" }}>{post.date}</span>
                      <span className="text-xs font-semibold flex items-center gap-1 transition-all duration-150 group-hover:gap-2"
                        style={{ color: "#2C8FFF" }}>
                        Read <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeInSection>
            );
          })}
        </div>

        {/* ── Newsletter — left-aligned, not centered box ── */}
        <FadeInSection className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center rounded-2xl px-8 py-10"
            style={{ background: "rgba(10,25,49,0.6)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] mb-3" style={{ color: "#2C8FFF" }}>
                Newsletter
              </p>
              <h3 className="text-2xl font-black mb-2" style={{ color: "#EEF4FF" }}>Stay ahead of the curve.</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#B3CFE5" }}>
                Weekly insights on AI, QA, and compliance — read by 3,000+ call center professionals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="you@company.com"
                className="flex-1 px-4 py-3 rounded-xl text-sm outline-none"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#EEF4FF" }}
              />
              <button className="px-6 py-3 rounded-xl font-semibold text-sm flex-shrink-0"
                style={{ background: "#2C8FFF", color: "#fff" }}>
                Subscribe
              </button>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
