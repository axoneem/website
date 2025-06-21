'use client';

import { ScrollShrinkSection } from "@/components/ScrollShrinkSection";
import { ThreeDemo } from "@/components/ThreeDemo";
import { Container } from "@/components/Container";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const h1Ref = useRef(null);
  const h3Ref = useRef(null);
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);

  const h1InView = useInView(h1Ref, { amount: 0.3, margin: "-300px 0px 0px 0px" });
  const h3InView = useInView(h3Ref, { amount: 0.3, margin: "-300px 0px 0px 0px" });
  const p1InView = useInView(p1Ref, { amount: 0.3, margin: "-300px 0px 0px 0px" });
  const p2InView = useInView(p2Ref, { amount: 0.3, margin: "-300px 0px 0px 0px" });

  return (
    // <ScrollShrinkSection
    //   className=""
    //   background={<ThreeDemo />}
    // >
    <section className='py-24 min-h-[100dvh] pt-[var(--header-height)] flex items-end'>
      <Container className="hero-text-container relative z-50 pointer-events-none">
        <motion.h1 
          ref={h1Ref}
          className="text-5xl md:text-7xl text-white mb-8 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={h1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
            delay: h1InView ? 0.1 : 0
          }}
        >
          We Are Axoneme
        </motion.h1>

        <motion.h3 
          ref={h3Ref}
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={h3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
            delay: h3InView ? 0.3 : 0
          }}
        >
          An open-source developer collective building software that puts users first.
        </motion.h3>
        
        <div className="max-w-lg text-lg md:text-xl text-white/80 space-y-6">
          <motion.p
            ref={p1Ref}
            initial={{ opacity: 0, y: 40 }}
            animate={p1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
            transition={{ 
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
              delay: p1InView ? 0.5 : 0
            }}
          >
            We emerged from a simple belief: the best tools are the ones you can trust. 
            Software should be transparent, reliable, and built to last. We create applications 
            that respect your choices and give you meaningful control.
          </motion.p>
          
          <motion.p 
            ref={p2Ref}
            className="text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={p2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
            transition={{ 
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
              delay: p2InView ? 0.7 : 0
            }}
          >
            We build for the long term, not the next funding round.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;