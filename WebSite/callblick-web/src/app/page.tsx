import HeroSection from "@/components/home/HeroSection";
import SocialProofBar from "@/components/home/SocialProofBar";
import FeatureShowcase from "@/components/home/FeatureShowcase";
import HowItWorks from "@/components/home/HowItWorks";
import MetricsGrid from "@/components/home/MetricsGrid";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <FeatureShowcase />
      <HowItWorks />
      <MetricsGrid />
      <CTABanner />
    </>
  );
}
