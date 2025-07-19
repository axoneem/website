
import { HeroSection } from "@/sections/HeroSection";
import ProjectsSection from "@/sections/ProjectsSection";
import CtaSection from "@/sections/CtaSection";
import TenetSection from "@/sections/TenetSection";

export default function Home() {
  return (
    <main className="w-full">
      {/* <Header /> */}
      
      <HeroSection />
      <TenetSection />
      <ProjectsSection />
      <CtaSection />

    </main>    
  );
}
