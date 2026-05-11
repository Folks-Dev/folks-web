import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ProcessSection } from "@/components/sections/process-section";
import { TeamSection } from "@/components/sections/team-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div id="inicio" className="sr-only" />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <TeamSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
