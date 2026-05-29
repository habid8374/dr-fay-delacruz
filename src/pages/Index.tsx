import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InscriptionSection from "@/components/InscriptionSection";
import TrustBadges from "@/components/TrustBadges";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ModulesSection from "@/components/ModulesSection";
import ImplementationTimeline from "@/components/ImplementationTimeline";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import AIChatbot from "@/components/AIChatbot";
import Certifications from "@/components/Certifications";
import VisitorCounter from "@/components/VisitorCounter";
import AdvertisingSection from "@/components/AdvertisingSection";
import AboutUs from "@/components/AboutUs";
import OfflineChat from "@/components/OfflineChat";
import StatsBar from "@/components/StatsBar";
import WaveDivider from "@/components/WaveDivider";

// Colors match CSS variable values at runtime
const MUTED_FILL = "hsl(var(--secondary) / 0.5)";
const BG_FILL    = "hsl(var(--background))";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead />
<Header />
      <main className="flex-1">
        <HeroSection />
        <StatsBar />
        <WaveDivider fill={MUTED_FILL} />
        <TrustBadges />
        <WaveDivider fill={BG_FILL} flip />
        <VisitorCounter />
        <InscriptionSection />
        <ProblemSolutionSection />
        <WaveDivider fill={MUTED_FILL} />
        <ModulesSection />
        <WaveDivider fill={BG_FILL} flip />
        <ImplementationTimeline />
        <WaveDivider fill={MUTED_FILL} />
        <TestimonialsSection />
        <WaveDivider fill={BG_FILL} flip />
        <Certifications />
        <BlogSection />
        <AdvertisingSection />
        <AboutUs />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <AIChatbot />
      <OfflineChat />
    </div>
  );
};

export default Index;
