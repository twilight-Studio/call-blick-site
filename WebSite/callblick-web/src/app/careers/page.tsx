import Link from "next/link";
import { MapPin } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const jobs = [
  {
    title: "Frontend Engineer",
    location: "Germany",
    type: "Full-time",
    description:
      "Build polished analytics experiences for call intelligence workflows, dashboards, and enterprise-facing product surfaces.",
  },
  {
    title: "Customer Success Manager",
    location: "Germany",
    type: "Full-time",
    description:
      "Help regulated and high-volume teams adopt CallBlick, configure workflows, and turn call analysis into operational improvements.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection className="max-w-3xl mb-14">
          <p className="text-xs font-black uppercase tracking-[0.2em] mb-5" style={{ color: "#2C8FFF" }}>
            Careers
          </p>
          <h1 className="font-black tracking-[-0.04em] leading-[0.95] mb-6" style={{ color: "#EEF4FF", fontSize: "clamp(44px,6vw,72px)" }}>
            Join CallBlick.
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#B3CFE5" }}>
            We will add more company information later. For now, here are example openings for Germany.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {jobs.map((job, index) => (
            <FadeInSection key={job.title} delay={index * 80}>
              <div className="rounded-3xl p-7" style={{ background: "rgba(10,25,49,0.68)", border: "1px solid rgba(44,143,255,0.16)" }}>
                <h2 className="text-2xl font-black mb-3" style={{ color: "#EEF4FF" }}>{job.title}</h2>
                <div className="flex flex-wrap gap-3 mb-5">
                  <span className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: "#B3CFE5" }}>
                    <MapPin size={16} style={{ color: "#2C8FFF" }} />
                    {job.location}
                  </span>
                  <span className="text-sm font-bold" style={{ color: "#7AB8FF" }}>{job.type}</span>
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#B3CFE5" }}>{job.description}</p>
                <Link href="/contact" className="inline-flex rounded-xl px-5 py-3 text-sm font-bold" style={{ color: "#EEF4FF", border: "1px solid rgba(255,255,255,0.12)" }}>
                  Contact us
                </Link>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
}
