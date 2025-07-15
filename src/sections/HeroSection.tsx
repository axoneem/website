'use client';

import { Container } from "@/components/Container";
import { Splash } from "@/components/Splash";
import heroSectionStyles from "@/styles/sections/HeroSection.module.scss";
import { useRef } from "react";

export function HeroSection() {
  const heroSectionTextRef = useRef<HTMLDivElement>(null);

  const heroSectionTextBoundingBox = heroSectionTextRef.current?.getBoundingClientRect() ?? {
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  };

  return (
    <section className={heroSectionStyles.root}>
      <div
        className={heroSectionStyles.splashContainer}
        style={{
          "--dynamic-card-animation-top": `${heroSectionTextBoundingBox.top}px`,
          "--dynamic-card-animation-right": `${heroSectionTextBoundingBox.left}px`,
          "--dynamic-card-animation-bottom": `${heroSectionTextBoundingBox.top + heroSectionTextBoundingBox.height}px`,
          "--dynamic-card-animation-left": `${heroSectionTextBoundingBox.left}px`,
        }}
      >
        <Splash />
      </div>
      <Container className={heroSectionStyles.card} disableGutters>
        <div className={heroSectionStyles.textContainer} ref={heroSectionTextRef}>
          <h1>
            We Are Axoneme
          </h1>
          <h3>
            An open-source developer collective building software that puts users first.
          </h3>
          <p>
            We emerged from a simple belief: the best tools are the ones you can trust. 
            Software should be transparent, reliable, and built to last. We create applications 
            that respect your choices and give you meaningful control.
          </p>
          <p>
            We build for the long term, not the next funding round.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
