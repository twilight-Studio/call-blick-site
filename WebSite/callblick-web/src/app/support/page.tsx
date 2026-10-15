import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = { title: "Support", description: "Contact CallBlick support." };
export default function SupportPage() { return <><PageIntro title="Support, handled by a person."><p>Email the team with your organisation, plan, and a concise description of the problem. Do not attach recordings or personal call data to the first email.</p></PageIntro><section className="section-rule"><div className="page-shell py-16 lg:py-24"><a href="mailto:info@callblick.com" className="button-primary">Email info@callblick.com</a><p className="body-copy mt-5 text-sm">For an upload or analysis issue, include a non-sensitive reference ID where available.</p></div></section></>; }
