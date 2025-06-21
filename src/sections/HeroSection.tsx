import { ScrollShrinkSection } from "@/components/ScrollShrinkSection";
import { ThreeDemo } from "@/components/ThreeDemo";
import { Container } from "@/components/Container";

export function HeroSection() {
  return (
    // <ScrollShrinkSection
    //   className=""
    //   background={<ThreeDemo />}
    // >
    <section className='py-24 min-h-[100dvh] pt-[var(--header-height)] flex items-end'>
      <Container className="hero-text-container relative z-50 animate-fade-up-200">
        <h1 className="text-5xl md:text-7xl text-white mb-8 leading-tight">
          We Are Axoneme
        </h1>

        <h2 className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl leading-relaxed">
          An open-source developer collective building software that puts users first.
        </h2>
        
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
      </Container>
    </section>
  );
}

export default HeroSection;