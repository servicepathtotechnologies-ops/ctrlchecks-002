import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { AutonomySection } from "@/components/landing/AutonomySection";
import { TransparencySection } from "@/components/landing/TransparencySection";
import { SecuritySection } from "@/components/landing/SecuritySection";
import { BusinessValueSection } from "@/components/landing/BusinessValueSection";
import { OpenCoreSection } from "@/components/landing/OpenCoreSection";
import { PluginsApiSection } from "@/components/landing/PluginsApiSection";
import { MarketPositionSection } from "@/components/landing/MarketPositionSection";
import { CompetitiveAdvantageSection } from "@/components/landing/CompetitiveAdvantageSection";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <AutonomySection />
        <TransparencySection />
        <SecuritySection />
        <BusinessValueSection />
        <OpenCoreSection />
        <PluginsApiSection />
        <MarketPositionSection />
        <CompetitiveAdvantageSection />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
