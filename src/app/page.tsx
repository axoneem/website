import Logo from "@/components/logo";
import { ThreeDemo } from "@/components/ThreeDemo";
import { ScrollShrinkSection } from "@/components/ScrollShrinkSection";

export default function Home() {
  return (
    <div className="w-full">
      {/* Topbar - sticky header */}
      <header className="sticky top-0 z-50 p-8 text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center">
            <div className="w-8 h-8">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Scroll Shrink Effect */}
      <ScrollShrinkSection
        headerHeight={80}
        shrinkDistance={150}
        className=""
        background={<ThreeDemo />}
      >
        <div className="max-w-4xl p-32">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            We Are Axoneme
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            An open-source developer collective building software that puts users first.
          </p>
          
          <div className="max-w-lg text-lg md:text-xl text-white/80 space-y-6">
            <p>
              We emerged from a simple belief: the best tools are the ones you can trust. 
              Software should be transparent, reliable, and built to last. We create applications 
              that respect your choices and give you meaningful control.
            </p>
            
            <p className="text-white">
              We build for the long term, not the next funding round.
            </p>
          </div>
        </div>
      </ScrollShrinkSection>

      {/* Active Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
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
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
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
        </div>
      </section>

      <footer className="py-20 bg-gray-50" style={{ height: "100vh" }}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Contact Us
          </h2>
          
          
        </div>
      </footer>
    </div>    
  );
}
