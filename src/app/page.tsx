import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/home/Navbar";
import PortfolioSection from "@/components/home/PortfolioSection";
import ServicesSection from "@/components/home/ServicesSection";
import SkillsSection from "@/components/home/SkillsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ServicesSection />
      <PortfolioSection />

      <ContactSection />
    </div>
  );
}
