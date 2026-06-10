import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/home/Navbar";
import ServicesSection from "@/components/home/ServicesSection";
import SkillsSection from "@/components/home/SkillsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      {/* <PortfolioSection /> */}
      {/* <ContactSection /> */}
    </div>
  );
}
