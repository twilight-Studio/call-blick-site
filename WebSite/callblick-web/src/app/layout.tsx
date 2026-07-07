import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

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
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col relative">
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
