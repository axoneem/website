import { Container } from "@/components/Container";
import { Animation } from "@/components/Animation";

export function HeroSection() {
  return (
    <section className='relative flex items-end'>
      <Container className="hero-text-container relative z-50 py-24">
        <h1 
          className="hero-text-fade text-5xl md:text-7xl text-white mb-8 leading-tight"
        >
          We Are <span className="text-primary">Axoneme</span>
        </h1>

        <h3 
          className="hero-text-fade text-xl md:text-2xl text-white/90 mb-12 max-w-3xl leading-relaxed"
        >
          An open-source developer collective building software that puts users first.
        </h3>
        
        <div className="max-w-lg text-lg md:text-xl text-white/80 space-y-6">
          <p
            className="hero-text-fade"
          >
            We emerged from a simple belief: the best tools are the ones you can trust. 
            Software should be transparent, reliable, and built to last. We create applications 
            that respect your choices and give you meaningful control.
          </p>
          
          <p 
            className="hero-text-fade text-white"
          >
            We build for the long term, not the next funding round.
          </p>
        </div>
      </Container>
      <div className="scroll-driven-background absolute overflow-hidden z-10 brightness-50">
        <Animation />
      </div>
    </section>
  );
}

export default HeroSection;
