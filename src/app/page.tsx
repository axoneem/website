import Logo from "@/components/logo";
import { Container } from "@/components/Container";
import { HeroSection } from "@/sections/HeroSection";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      
      <HeroSection />

      {/* Active Projects Section */}
      <section className="py-20 bg-white">
        <Container>
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            What we&apos;re building
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Papaya
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                The local-first, open-source personal finance app
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Privacy-first
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Works offline
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Multi-device sync
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  Self-hosted
                </span>
              </div>
              <p className="text-gray-600">
                Your financial data stays on your devices and syncs only with your chosen server. 
                Built with modern web technologies for people who believe their money is their business.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Our Approach
          </h2>
          
          <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-8">
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

      <footer className="py-20 bg-gray-50" style={{ height: "100vh" }}>
        <Container>
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Contact Us
          </h2>
          
          
        </Container>
      </footer>
    </main>    
  );
}
