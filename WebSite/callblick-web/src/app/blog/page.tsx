"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const tags = ["All", "Product Update", "Tutorial", "Industry", "AI Research"];

const posts = [
  {
    title: "What Is Automatic Speech Recognition and How Does It Work?",
    excerpt: "How ASR converts spoken audio into text — covering the four dominant architectural approaches, plus real-world limitations including bias, hallucination, and noise degradation.",
    date: "2026", readTime: "8 min", tag: "AI Research", featured: true,
    url: "https://deepgram.com/learn/what-is-asr",
  },
  {
    title: "What is Word Error Rate (WER)?",
    excerpt: "WER is the standard metric for evaluating speech recognition accuracy — but a lower WER doesn't always mean a more useful transcript. Here's what actually matters.",
    date: "2024", readTime: "5 min", tag: "Tutorial", featured: false,
    url: "https://deepgram.com/learn/what-is-word-error-rate",
  },
  {
    title: "The Ultimate Guide to Call Center Quality Assurance",
    excerpt: "Call center QA defined — three frameworks (operational, tactical, strategic) and the best practices for rolling them out at scale.",
    date: "Jul 17, 2023", readTime: "10 min", tag: "Industry", featured: false,
    url: "https://www.sprinklr.com/blog/call-center-quality-assurance/",
  },
  {
    title: "Financial Services Is 'All In' on AI, but Turning Insight into Action Is the Hard Part",
    excerpt: "Nearly two-thirds of financial services firms feel they're not fully leveraging CX data. The problem is fragmentation — insights stay siloed instead of influencing outcomes in real time.",
    date: "Mar 25, 2026", readTime: "6 min", tag: "Industry", featured: false,
    url: "https://callminer.com/blog/financial-services-is-all-in-on-ai-but-turning-insight-into-action-is-the-hard-part",
  },
  {
    title: "Conversational AI for Customer Service: From Reactive to Proactive CX",
    excerpt: "AI that understands intent and sentiment in real time can identify friction, reduce churn, and enable proactive coaching before problems escalate.",
    date: "Apr 16, 2026", readTime: "7 min", tag: "Industry", featured: false,
    url: "https://callminer.com/blog/conversational-ai-for-customer-service-from-reactive-to-proactive-cx",
  },
  {
    title: "Call Center Analytics: All That a Manager Should Know",
    excerpt: "Ten analytics types — including predictive, speech, and omnichannel — and how each drives better customer experiences through personalization and proactive issue resolution.",
    date: "Mar 24, 2024", readTime: "10 min", tag: "Industry", featured: false,
    url: "https://www.sprinklr.com/blog/call-center-analytics/",
  },
  {
    title: "Call Center Agent Training",
    excerpt: "Structured training covering communication skills, product knowledge, and problem-solving directly impacts outcomes. The business case: higher retention and satisfaction through measurable ROI.",
    date: "Apr 16, 2023", readTime: "8 min", tag: "Industry", featured: false,
    url: "https://www.sprinklr.com/blog/call-center-agent-training/",
  },
];

const tagMeta: Record<string, { color: string; bg: string }> = {
  "Product Update": { color: "#2C8FFF", bg: "rgba(44,143,255,0.1)" },
  "Tutorial":       { color: "#22c55e", bg: "rgba(34,197,94,0.1)" },
  "Industry":       { color: "#eab308", bg: "rgba(234,179,8,0.1)" },
  "AI Research":    { color: "#8b5cf6", bg: "rgba(139,92,246,0.1)" },
};

/* ── Per-article unique SVG thumbnails ── */

function ThumbASR() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(139,92,246,0.12) 0%, rgba(10,25,49,0.95) 80%)" }}>
      <svg viewBox="0 0 200 120" className="w-full h-full">
        {/* Mic shape */}
        <rect x="88" y="18" width="24" height="40" rx="12" fill="none" stroke="#8b5cf6" strokeWidth="2.5" />
        <path d="M72 52 Q72 78 100 78 Q128 78 128 52" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" />
        <line x1="100" y1="78" x2="100" y2="92" stroke="#8b5cf6" strokeWidth="2" />
        <line x1="84" y1="92" x2="116" y2="92" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" />
        {/* Sound waves */}
        {[1,2,3].map(i => (
          <g key={i}>
            <path d={`M${60 - i*12} ${50} Q${60 - i*12} ${38 - i*4} ${60 - i*12} ${26 + i*4}`}
              fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" opacity={0.8 - i * 0.2} />
            <path d={`M${140 + i*12} ${50} Q${140 + i*12} ${38 - i*4} ${140 + i*12} ${26 + i*4}`}
              fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" opacity={0.8 - i * 0.2} />
          </g>
        ))}
        {/* Waveform at bottom */}
        {[4,7,12,9,14,10,6,13,8,11,5,9,12,7,10].map((h, i) => (
          <rect key={i} x={28 + i * 11} y={108 - h} width="6" height={h} rx="3"
            fill="#8b5cf6" opacity="0.55" />
        ))}
        <text x="100" y="114" textAnchor="middle" fill="rgba(139,92,246,0.5)" fontSize="6" fontWeight="700" fontFamily="system-ui" letterSpacing="2">SPEECH RECOGNITION</text>
      </svg>
    </div>
  );
}

function ThumbWER() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(34,197,94,0.1) 0%, rgba(10,25,49,0.95) 80%)" }}>
      <svg viewBox="0 0 200 120" className="w-full h-full">
        {/* Formula block */}
        <rect x="30" y="20" width="140" height="55" rx="10" fill="rgba(34,197,94,0.07)" stroke="rgba(34,197,94,0.3)" strokeWidth="1" />
        <text x="100" y="38" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="700" fontFamily="monospace">WER = (S + D + I) / N</text>
        <line x1="46" y1="44" x2="154" y2="44" stroke="rgba(34,197,94,0.2)" strokeWidth="0.8" />
        {[["S", "Substitutions", "38"],["D", "Deletions", "82"],["I", "Insertions", "126"]].map(([k, label, x]) => (
          <g key={k}>
            <text x={Number(x)} y="57" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="700" fontFamily="monospace">{k}</text>
            <text x={Number(x)} y="67" textAnchor="middle" fill="rgba(34,197,94,0.5)" fontSize="5.5" fontFamily="system-ui">{label}</text>
          </g>
        ))}
        {/* Score gauge */}
        <rect x="30" y="85" width="140" height="14" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
        <rect x="30" y="85" width="32" height="14" rx="7" fill="#22c55e" opacity="0.8" />
        <text x="46" y="95" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700" fontFamily="system-ui">WER 4.2%</text>
        <text x="148" y="95" textAnchor="middle" fill="rgba(179,207,229,0.4)" fontSize="6.5" fontFamily="system-ui">100%</text>
        <text x="100" y="113" textAnchor="middle" fill="rgba(34,197,94,0.4)" fontSize="6" fontWeight="700" fontFamily="system-ui" letterSpacing="2">ACCURACY METRICS</text>
      </svg>
    </div>
  );
}

function ThumbQA() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(234,179,8,0.1) 0%, rgba(10,25,49,0.95) 80%)" }}>
      <svg viewBox="0 0 200 120" className="w-full h-full">
        {/* QA clipboard */}
        <rect x="55" y="12" width="90" height="90" rx="8" fill="rgba(10,25,49,0.8)" stroke="rgba(234,179,8,0.3)" strokeWidth="1" />
        <rect x="75" y="8" width="50" height="12" rx="4" fill="rgba(234,179,8,0.15)" stroke="rgba(234,179,8,0.4)" strokeWidth="0.8" />
        {/* Checklist rows */}
        {[
          ["Script adherence", true, 34],
          ["Required disclosures", true, 48],
          ["Objection handling", true, 62],
          ["Tone & empathy", false, 76],
          ["Call closing", true, 90],
        ].map(([label, checked, y]) => (
          <g key={String(y)}>
            <rect x="66" y={Number(y) - 7} width="8" height="8" rx="2"
              fill={checked ? "rgba(234,179,8,0.2)" : "rgba(255,255,255,0.04)"}
              stroke={checked ? "rgba(234,179,8,0.6)" : "rgba(255,255,255,0.12)"} strokeWidth="0.8" />
            {checked && <text x="70" y={Number(y) - 1} textAnchor="middle" fill="#eab308" fontSize="7" fontFamily="system-ui">✓</text>}
            <rect x="80" y={Number(y) - 5} width={checked ? 55 : 45} height="5" rx="2.5" fill="rgba(255,255,255,0.06)" />
          </g>
        ))}
        {/* Score badge */}
        <rect x="110" y="72" width="28" height="16" rx="6" fill="rgba(234,179,8,0.15)" stroke="rgba(234,179,8,0.4)" strokeWidth="0.8" />
        <text x="124" y="83" textAnchor="middle" fill="#eab308" fontSize="8" fontWeight="700" fontFamily="system-ui">92%</text>
        <text x="100" y="113" textAnchor="middle" fill="rgba(234,179,8,0.4)" fontSize="6" fontWeight="700" fontFamily="system-ui" letterSpacing="2">QUALITY ASSURANCE</text>
      </svg>
    </div>
  );
}

function ThumbFinance() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(234,179,8,0.1) 0%, rgba(10,25,49,0.95) 80%)" }}>
      <svg viewBox="0 0 200 120" className="w-full h-full">
        {/* Bar chart */}
        {[38, 55, 42, 68, 50, 72, 60].map((h, i) => (
          <rect key={i} x={22 + i * 22} y={88 - h} width="14" height={h} rx="3"
            fill={i === 5 ? "#eab308" : "rgba(234,179,8,0.3)"} />
        ))}
        {/* Trend line */}
        <polyline points="29,50 51,33 73,46 95,20 117,38 139,16 161,28"
          fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
        {[29,51,73,95,117,139,161].map((x, i) => {
          const ys = [50,33,46,20,38,16,28];
          return <circle key={i} cx={x} cy={ys[i]} r="3" fill="#eab308" opacity="0.9" />;
        })}
        {/* AI badge */}
        <rect x="60" y="5" width="80" height="18" rx="7" fill="rgba(234,179,8,0.1)" stroke="rgba(234,179,8,0.35)" strokeWidth="0.8" />
        <text x="100" y="17" textAnchor="middle" fill="#eab308" fontSize="7.5" fontWeight="700" fontFamily="system-ui">AI-Driven Insights</text>
        <line x1="22" y1="88" x2="175" y2="88" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
        <text x="100" y="113" textAnchor="middle" fill="rgba(234,179,8,0.4)" fontSize="6" fontWeight="700" fontFamily="system-ui" letterSpacing="2">FINANCIAL SERVICES AI</text>
      </svg>
    </div>
  );
}

function ThumbConvAI() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(234,179,8,0.1) 0%, rgba(10,25,49,0.95) 80%)" }}>
      <svg viewBox="0 0 200 120" className="w-full h-full">
        {/* Chat bubbles */}
        <rect x="20" y="18" width="100" height="28" rx="10" fill="rgba(234,179,8,0.12)" stroke="rgba(234,179,8,0.35)" strokeWidth="1" />
        <path d="M30 46 L24 54 L44 46" fill="rgba(234,179,8,0.12)" stroke="rgba(234,179,8,0.35)" strokeWidth="1" />
        <rect x="24" y="25" width="55" height="6" rx="3" fill="rgba(234,179,8,0.4)" />
        <rect x="24" y="34" width="40" height="4" rx="2" fill="rgba(234,179,8,0.2)" />
        {/* Agent reply bubble */}
        <rect x="80" y="60" width="100" height="28" rx="10" fill="rgba(44,143,255,0.1)" stroke="rgba(44,143,255,0.3)" strokeWidth="1" />
        <path d="M170 88 L176 96 L156 88" fill="rgba(44,143,255,0.1)" stroke="rgba(44,143,255,0.3)" strokeWidth="1" />
        <rect x="90" y="67" width="60" height="6" rx="3" fill="rgba(44,143,255,0.4)" />
        <rect x="90" y="76" width="44" height="4" rx="2" fill="rgba(44,143,255,0.2)" />
        {/* Sentiment meter */}
        <rect x="20" y="100" width="160" height="10" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
        <rect x="20" y="100" width="112" height="10" rx="5" fill="linear-gradient(90deg,#ef4444,#eab308,#22c55e)" />
        <rect x="20" y="100" width="112" height="10" rx="5" fill="#22c55e" opacity="0.6" />
        <circle cx="132" cy="105" r="5" fill="#fff" stroke="#22c55e" strokeWidth="1.5" />
        <text x="100" y="118" textAnchor="middle" fill="rgba(234,179,8,0.4)" fontSize="5.5" fontWeight="700" fontFamily="system-ui" letterSpacing="2">CONVERSATIONAL AI · SENTIMENT</text>
      </svg>
    </div>
  );
}

function ThumbAnalytics() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(234,179,8,0.1) 0%, rgba(10,25,49,0.95) 80%)" }}>
      <svg viewBox="0 0 200 120" className="w-full h-full">
        {/* Dashboard grid */}
        {[
          { x:16, y:12, w:78, h:46, color:"#2C8FFF" },
          { x:106, y:12, w:78, h:46, color:"#eab308" },
          { x:16, y:66, w:168, h:40, color:"#22c55e" },
        ].map((card, i) => (
          <g key={i}>
            <rect x={card.x} y={card.y} width={card.w} height={card.h} rx="7"
              fill="rgba(10,25,49,0.8)" stroke={`${card.color}30`} strokeWidth="0.8" />
            <rect x={card.x} y={card.y} width={card.w} height="3" rx="1.5" fill={card.color} opacity="0.6" />
          </g>
        ))}
        {/* Mini bar chart in card 1 */}
        {[18,26,20,32,24,30].map((h, i) => (
          <rect key={i} x={24 + i * 10} y={50 - h} width="6" height={h} rx="2"
            fill="#2C8FFF" opacity="0.6" />
        ))}
        {/* Mini donut in card 2 */}
        <circle cx="145" cy="35" r="14" fill="none" stroke="rgba(234,179,8,0.15)" strokeWidth="10" />
        <circle cx="145" cy="35" r="14" fill="none" stroke="#eab308" strokeWidth="10"
          strokeDasharray="57 31" strokeDashoffset="22" opacity="0.8" />
        <text x="145" y="39" textAnchor="middle" fill="#eab308" fontSize="8" fontWeight="700" fontFamily="system-ui">65%</text>
        {/* Sparkline in wide card */}
        <polyline points="24,96 44,88 64,92 84,80 104,85 124,76 144,82 164,72 176,78"
          fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
        <text x="100" y="116" textAnchor="middle" fill="rgba(234,179,8,0.4)" fontSize="6" fontWeight="700" fontFamily="system-ui" letterSpacing="2">CALL CENTER ANALYTICS</text>
      </svg>
    </div>
  );
}

function ThumbTraining() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(234,179,8,0.1) 0%, rgba(10,25,49,0.95) 80%)" }}>
      <svg viewBox="0 0 200 120" className="w-full h-full">
        {/* Agent avatar */}
        <circle cx="60" cy="38" r="18" fill="rgba(44,143,255,0.1)" stroke="rgba(44,143,255,0.3)" strokeWidth="1.2" />
        <circle cx="60" cy="33" r="8" fill="rgba(44,143,255,0.4)" />
        <path d="M44 54 Q44 46 60 46 Q76 46 76 54" fill="rgba(44,143,255,0.25)" />
        {/* Headset arc */}
        <path d="M46 32 Q46 18 60 18 Q74 18 74 32" fill="none" stroke="rgba(44,143,255,0.6)" strokeWidth="2" />
        <rect x="43" y="30" width="6" height="10" rx="3" fill="rgba(44,143,255,0.6)" />
        <rect x="71" y="30" width="6" height="10" rx="3" fill="rgba(44,143,255,0.6)" />
        {/* Skill bars */}
        {[
          ["Communication", 0.85, 70],
          ["Product Knowledge", 0.72, 82],
          ["Problem Solving", 0.91, 94],
          ["Empathy", 0.78, 106],
        ].map(([label, pct, y]) => (
          <g key={String(y)}>
            <text x="100" y={Number(y) - 2} fill="rgba(179,207,229,0.6)" fontSize="5.5" fontFamily="system-ui">{String(label)}</text>
            <rect x="100" y={Number(y) + 1} width="84" height="6" rx="3" fill="rgba(255,255,255,0.04)" />
            <rect x="100" y={Number(y) + 1} width={84 * Number(pct)} height="6" rx="3"
              fill="#eab308" opacity="0.75" />
          </g>
        ))}
        <text x="100" y="118" textAnchor="middle" fill="rgba(234,179,8,0.4)" fontSize="6" fontWeight="700" fontFamily="system-ui" letterSpacing="2">AGENT TRAINING</text>
      </svg>
    </div>
  );
}

const thumbnails = [ThumbASR, ThumbWER, ThumbQA, ThumbFinance, ThumbConvAI, ThumbAnalytics, ThumbTraining];

function ArticleCover({ idx }: { idx: number }) {
  const Thumb = thumbnails[idx % thumbnails.length];
  return <Thumb />;
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
            <Link href={featured.url} target="_blank" rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(10,25,49,0.6)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Cover */}
                <div className="lg:col-span-2 h-56 lg:h-auto overflow-hidden">
                  <ArticleCover idx={0} />
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
                <Link href={post.url} target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col rounded-2xl overflow-hidden h-full transition-all duration-300"
                  style={{ background: "rgba(10,25,49,0.6)", border: "1px solid rgba(255,255,255,0.07)" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(44,143,255,0.2)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"}
                >
                  {/* Cover */}
                  <div className="h-36 overflow-hidden flex-shrink-0">
                    <ArticleCover idx={i + 1} />
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
