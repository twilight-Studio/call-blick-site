import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollMotion from "@/components/ScrollMotion";

const newsreader = localFont({
  src: "../../public/fonts/Newsreader-Variable.ttf",
  variable: "--font-newsreader",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.callblick.com"),
  title: { default: "CallBlick — Recorded call review", template: "%s — CallBlick" },
  description: "Turn uploaded recorded calls into transcripts, QA answers, compliance findings, summaries, and a clear human-review workflow.",
  icons: { icon: "/CallBlick-Logo.png", apple: "/CallBlick-Logo.png" },
  openGraph: { title: "CallBlick — Recorded call review", description: "Make recorded calls easier to understand, review, and act on.", type: "website", url: "https://www.callblick.com" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={newsreader.variable} data-scroll-behavior="smooth"><body className="min-h-screen flex flex-col"><ScrollMotion /><Navbar /><main className="flex-1">{children}</main><Footer /></body></html>;
}
