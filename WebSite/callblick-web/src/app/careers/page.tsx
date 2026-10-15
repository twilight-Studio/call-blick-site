import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = { title: "Careers", description: "Careers information for CallBlick." };
export default function CareersPage() { return <><PageIntro title="Work with CallBlick"><p>There are no verified public openings listed at the moment. If a role is published here later, it will include a real scope, location, and application process.</p></PageIntro><section className="section-rule"><div className="page-shell py-16 lg:py-24"><h2 className="display text-3xl">General enquiries</h2><p className="body-copy mt-4">You may introduce yourself by email, but please do not send sensitive identity documents or confidential work samples.</p><a href="mailto:info@callblick.com" className="text-link mt-5">info@callblick.com</a></div></section></>; }
