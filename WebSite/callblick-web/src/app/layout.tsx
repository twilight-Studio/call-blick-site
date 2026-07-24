import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "CallBlick — AI-Powered Call Intelligence",
  description:
    "Unlock deep insights from your calls with AI-powered transcription, QA scoring, and compliance monitoring.",
  icons: {
    icon: "/CallBlick-Logo.png",
    apple: "/CallBlick-Logo.png",
  },
  openGraph: {
    title: "CallBlick — AI-Powered Call Intelligence",
    description:
      "Unlock deep insights from your calls with AI-powered transcription, QA scoring, and compliance monitoring.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col relative">
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
