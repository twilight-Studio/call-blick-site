import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = { title: "Status", description: "CallBlick service-status information." };
export default function StatusPage() { return <><PageIntro title="Service status"><p>A live public uptime monitor is not connected to this page yet. We will not label services “operational” without a monitoring source behind that statement.</p></PageIntro><section className="section-rule"><div className="page-shell py-16 lg:py-24"><div className="max-w-3xl border border-[var(--rule-strong)] bg-[var(--surface)] p-6"><h2 className="text-lg font-bold">Need current status information?</h2><p className="body-copy mt-2 text-sm">Contact support and include the service or workflow you are checking.</p><a href="mailto:info@callblick.com" className="text-link mt-4">info@callblick.com</a></div></div></section></>; }
