import { Container } from "@/components/Container";
import { HeroSection } from "@/sections/HeroSection";
import Header from "@/components/Header";
import ProjectsSection from "@/sections/ProjectsSection";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      
      <HeroSection />
      <ProjectsSection />
     
      {/* Our Approach Section */}
      <section className="py-20">
        <Container>
          <h2 className="text-4xl font-bold mb-16 text-center">
            Our Approach
          </h2>
          
          <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-8 text-gray-300">
            <p>
              We choose proven technologies over trending frameworks. We write tests, documentation, 
              and code that others can understand. We believe in craftsmanship over quick fixes.
            </p>
            
            <p>
              Open source means you can see exactly what our software does. User control means you 
              decide where your information lives and how it&apos;s used. Quality means we don&apos;t ship broken things.
            </p>
          </div>
        </Container>
      </section>

      <footer className="py-20" style={{ height: "100vh" }}>
        <Container>
          <h2 className="text-4xl font-bold mb-16 text-center">
            Contact Us
          </h2>
          
          
        </Container>
      </footer>
    </main>    
  );
}
