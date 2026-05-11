import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Footer />
    </main>
  );
}