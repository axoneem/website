'use client';

import { ScrollShrinkSection } from "@/components/ScrollShrinkSection";
import { Container } from "@/components/Container";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <>
      <style jsx>{`
        @supports (animation-timeline: scroll()) {
          .hero-text-fade {
            animation: fade-out-text cubic-bezier(0.19, 1, 0.22, 1) forwards;
            animation-timeline: scroll(root);
            animation-range: 25dvh 50dvh;
          }
        }
        
        @keyframes fade-out-text {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        
        /* Fallback for browsers without scroll-driven animation support */
        @supports not (animation-timeline: scroll()) {
          .hero-text-fade {
            opacity: 1;
          }
        }
      `}</style>

      <section className='py-24 min-h-[100dvh] pt-[var(--header-height)] flex items-end'>
        <Container className="hero-text-container relative z-50 pointer-events-none">
          <h1 
            className="hero-text-fade text-5xl md:text-7xl text-white mb-8 leading-tight"
            // initial={{ opacity: 0, y: 40 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ 
            //   duration: 0.8,
            //   ease: [0.25, 0.1, 0.25, 1],
            //   delay: 0.1
            // }}
          >
            We Are Axoneme
          </h1>

          <h3 
            className="hero-text-fade text-xl md:text-2xl text-white/90 mb-12 max-w-3xl leading-relaxed"
            // initial={{ opacity: 0, y: 40 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ 
            //   duration: 0.8,
            //   ease: [0.25, 0.1, 0.25, 1],
            //   delay: 0.3
            // }}
          >
            An open-source developer collective building software that puts users first.
          </h3>
          
          <div className="max-w-lg text-lg md:text-xl text-white/80 space-y-6">
            <p
              className="hero-text-fade"
              // initial={{ opacity: 0, y: 40 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ 
              //   duration: 0.8,
              //   ease: [0.25, 0.1, 0.25, 1],
              //   delay: 0.5
              // }}
            >
              We emerged from a simple belief: the best tools are the ones you can trust. 
              Software should be transparent, reliable, and built to last. We create applications 
              that respect your choices and give you meaningful control.
            </p>
            
            <p 
              className="hero-text-fade text-white"
              // initial={{ opacity: 0, y: 40 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ 
              //   duration: 0.8,
              //   ease: [0.25, 0.1, 0.25, 1],
              //   delay: 0.7
              // }}
            >
              We build for the long term, not the next funding round.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default HeroSection;