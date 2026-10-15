import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = { title: "Reading", description: "A clearly labelled selection of external reading about call QA, speech recognition, and conversation review." };

const reading = [
  { source: "Deepgram", title: "A guide to speech recognition accuracy", href: "https://deepgram.com/learn/what-is-word-error-rate", note: "Background on word error rate and why a single accuracy number needs context." },
  { source: "CallMiner", title: "Quality assurance in contact centres", href: "https://callminer.com/blog/quality-assurance-call-centers", note: "An external overview of QA workflows and common review practices." },
  { source: "Sprinklr", title: "Conversation analytics explained", href: "https://www.sprinklr.com/cxm/conversational-analytics/", note: "A broader industry explanation of conversation analytics concepts." },
] as const;

export default function BlogPage() { return <><PageIntro title="Useful reading, clearly sourced."><p>These links are external references selected by CallBlick. They are not articles written by our team, and inclusion does not imply a partnership or endorsement.</p></PageIntro><section className="section-rule"><div className="page-shell py-16 lg:py-24"><div className="border-t border-[var(--rule-strong)]">{reading.map((item) => <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="group grid gap-4 border-b border-[var(--rule)] py-7 md:grid-cols-[0.3fr_0.75fr_1fr_auto]"><span className="text-sm font-bold text-[var(--blue-dark)]">{item.source}</span><h2 className="text-lg font-bold group-hover:underline">{item.title}</h2><p className="body-copy text-sm">{item.note}</p><ArrowUpRight className="text-[var(--ink-soft)]" size={20} /></a>)}</div></div></section></>; }
