import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const tags = ["All", "Product Update", "Tutorial", "Industry", "AI Research"];

const posts = [
  {
    title: "How AI Transcription Accuracy Reaches 99.4% in Real Call Center Conditions",
    excerpt:
      "Achieving near-perfect transcription in noisy, accented, multi-speaker environments requires more than a good model. Here's how we did it.",
    date: "June 28, 2025",
    readTime: "8 min read",
    tag: "AI Research",
    featured: true,
  },
  {
    title: "QA Scoring Best Practices: Building Questionnaires That Actually Work",
    excerpt:
      "The quality of your QA output is only as good as your questionnaire design. We analyzed thousands of QA rubrics to find what separates great from good.",
    date: "June 18, 2025",
    readTime: "6 min read",
    tag: "Tutorial",
    featured: false,
  },
  {
    title: "New: Campaign Analytics Dashboard — Measure What Matters",
    excerpt:
      "Today we're launching our redesigned Campaign Analytics dashboard with batch comparison, agent leaderboards, and BI export.",
    date: "June 10, 2025",
    readTime: "3 min read",
    tag: "Product Update",
    featured: false,
  },
  {
    title: "The True Cost of Manual Call Center QA (And How to Fix It)",
    excerpt:
      "Manual QA covers 5–10% of calls at enormous cost. We break down the math and show what 100% automated coverage actually looks like.",
    date: "May 30, 2025",
    readTime: "7 min read",
    tag: "Industry",
    featured: false,
  },
  {
    title: "CFPB Compliance in 2025: What Financial Services Call Centers Need to Know",
    excerpt:
      "Regulatory requirements for financial services call centers are tightening. Here's what changed and how automated QA helps you stay compliant.",
    date: "May 20, 2025",
    readTime: "9 min read",
    tag: "Industry",
    featured: false,
  },
  {
    title: "Sentiment Analysis vs. QA Scoring: Understanding the Difference",
    excerpt:
      "Sentiment and QA measure different things. Learn when to use each, how they complement each other, and what the data actually tells you.",
    date: "May 12, 2025",
    readTime: "5 min read",
    tag: "AI Research",
    featured: false,
  },
  {
    title: "How to Set Up Red Flag Detection for Insurance Sales Compliance",
    excerpt:
      "A step-by-step guide to configuring CallBlick's red flag detection for insurance disclosure compliance — including example keyword libraries.",
    date: "May 5, 2025",
    readTime: "10 min read",
    tag: "Tutorial",
    featured: false,
  },
];

const tagColors: Record<string, { bg: string; text: string; border: string }> = {
  "Product Update": {
    bg: "rgba(44,143,255,0.1)",
    text: "#2C8FFF",
    border: "rgba(44,143,255,0.3)",
  },
  Tutorial: {
    bg: "rgba(34,197,94,0.1)",
    text: "#22c55e",
    border: "rgba(34,197,94,0.3)",
  },
  Industry: {
    bg: "rgba(234,179,8,0.1)",
    text: "#eab308",
    border: "rgba(234,179,8,0.3)",
  },
  "AI Research": {
    bg: "rgba(139,92,246,0.1)",
    text: "#8b5cf6",
    border: "rgba(139,92,246,0.3)",
  },
};

function TagPill({ tag }: { tag: string }) {
  const c = tagColors[tag] || { bg: "rgba(255,255,255,0.05)", text: "#B3CFE5", border: "rgba(255,255,255,0.1)" };
  return (
    <span
      className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"
      style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
    >
      {tag}
    </span>
  );
}

export default function BlogPage() {
  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen pt-24 pb-32">
      {/* Hero */}
      <FadeInSection className="text-center max-w-3xl mx-auto px-6 mb-16">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{
            background: "rgba(44,143,255,0.1)",
            border: "1px solid rgba(44,143,255,0.25)",
          }}
        >
          <span
            className="text-[10px] font-black uppercase tracking-[0.14em]"
            style={{ color: "#2C8FFF" }}
          >
            Blog
          </span>
        </div>
        <h1
          className="text-[clamp(40px,6vw,64px)] font-black tracking-[-0.04em] mb-4"
          style={{ color: "#EEF4FF" }}
        >
          Insights, guides, and updates.
        </h1>
        <p className="text-lg" style={{ color: "#B3CFE5" }}>
          Deep dives on AI, call center QA, compliance, and product news.
        </p>
      </FadeInSection>

      <div className="max-w-7xl mx-auto px-6">
        {/* Tag filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              className="px-4 py-2 rounded-2xl text-sm font-bold transition-all duration-150"
              style={
                tag === "All"
                  ? {
                      background: "#2C8FFF",
                      color: "#fff",
                    }
                  : {
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      color: "#B3CFE5",
                    }
              }
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Featured post */}
        <FadeInSection className="mb-12">
          <Link
            href="#"
            className="block rounded-3xl overflow-hidden transition-all duration-300 glow-hover"
            style={{
              background: "rgba(44,143,255,0.06)",
              border: "1px solid rgba(44,143,255,0.2)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image placeholder */}
              <div
                className="h-64 lg:h-auto flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(44,143,255,0.15) 0%, rgba(10,25,49,0.9) 100%)",
                  minHeight: 280,
                }}
              >
                <div className="text-center">
                  <div
                    className="w-20 h-20 rounded-3xl mx-auto mb-4 flex items-center justify-center"
                    style={{ background: "rgba(44,143,255,0.2)" }}
                  >
                    <span className="text-3xl">🎙️</span>
                  </div>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#B3CFE5" }}
                  >
                    Featured Article
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <TagPill tag={featured.tag} />
                  <span
                    className="text-xs font-medium flex items-center gap-1"
                    style={{ color: "#B3CFE5" }}
                  >
                    <Clock size={12} />
                    {featured.readTime}
                  </span>
                </div>
                <h2
                  className="text-2xl font-black mb-3 leading-tight"
                  style={{ color: "#EEF4FF" }}
                >
                  {featured.title}
                </h2>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#B3CFE5" }}>
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "#B3CFE5" }}>
                    {featured.date}
                  </span>
                  <span
                    className="text-sm font-bold flex items-center gap-1"
                    style={{ color: "#2C8FFF" }}
                  >
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </FadeInSection>

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, i) => (
            <FadeInSection key={i} delay={i * 60}>
              <Link
                href="#"
                className="flex flex-col rounded-3xl overflow-hidden h-full transition-all duration-300 glow-hover"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Image placeholder */}
                <div
                  className="h-40 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(44,143,255,0.08) 0%, rgba(10,25,49,0.6) 100%)",
                  }}
                >
                  <span className="text-4xl">
                    {["📊", "🚀", "⚖️", "💡", "🤖", "🔧"][i % 6]}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <TagPill tag={post.tag} />
                    <span
                      className="text-xs flex items-center gap-1"
                      style={{ color: "#B3CFE5" }}
                    >
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3
                    className="text-base font-black mb-2 leading-snug flex-1"
                    style={{ color: "#EEF4FF" }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "#B3CFE5" }}
                  >
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs" style={{ color: "#B3CFE5" }}>
                      {post.date}
                    </span>
                    <span
                      className="text-sm font-bold flex items-center gap-1"
                      style={{ color: "#2C8FFF" }}
                    >
                      Read <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeInSection>
          ))}
        </div>

        {/* Newsletter */}
        <FadeInSection className="mt-20">
          <div
            className="rounded-3xl p-12 text-center"
            style={{
              background: "rgba(44,143,255,0.06)",
              border: "1px solid rgba(44,143,255,0.2)",
            }}
          >
            <h3
              className="text-2xl font-black mb-3"
              style={{ color: "#EEF4FF" }}
            >
              Stay in the loop.
            </h3>
            <p className="mb-6" style={{ color: "#B3CFE5" }}>
              Get weekly insights on AI, call center QA, and compliance — straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 px-5 py-3 rounded-2xl text-sm outline-none"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#EEF4FF",
                }}
              />
              <button
                className="px-6 py-3 rounded-2xl font-bold text-sm"
                style={{ background: "#2C8FFF", color: "#fff" }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
