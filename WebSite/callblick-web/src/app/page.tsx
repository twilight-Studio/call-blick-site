import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import MetricsGrid from "@/components/home/MetricsGrid";
import ProductVideo from "@/components/home/ProductVideo";
import FeatureShowcase from "@/components/home/FeatureShowcase";
import HowItWorks from "@/components/home/HowItWorks";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = { title: "Recorded call review", description: "Turn uploaded calls into traceable transcripts, QA answers, compliance findings, and a human-review workflow." };
export default function Home() { return <><HeroSection /><ProductVideo /><MetricsGrid /><FeatureShowcase /><HowItWorks /><CTABanner /></>; }
