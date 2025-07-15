'use client';

import { Container } from "@/components/Container";
import { Splash } from "@/components/Splash";
import heroSectionStyles from "@/styles/sections/HeroSection.module.scss";
import { useEffect, useRef, useState } from "react";

interface BoundingBox {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

export function HeroSection() {
  const heroSectionTextRef = useRef<HTMLDivElement>(null);
  const [heroSectionTextBoundingBox, setHeroSectionTextBoundingBox] = useState<BoundingBox>({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  })

  useEffect(() => {
    if (heroSectionTextRef.current) {
      const boundingBox = heroSectionTextRef.current.getBoundingClientRect();
      setHeroSectionTextBoundingBox((prev) => ({
        ...prev,
        top: boundingBox.top,
        right: boundingBox.right,
        bottom: boundingBox.bottom,
        left: boundingBox.left,
      }));
    }
  }, [heroSectionTextRef]);

  return (
    <section className={heroSectionStyles.root}>
      <div
        className={heroSectionStyles.splashContainer}
        style={{
          "--dynamic-card-animation-top": `${heroSectionTextBoundingBox.top}px`,
          "--dynamic-card-animation-right": `${heroSectionTextBoundingBox.right}px`,
          "--dynamic-card-animation-bottom": `${heroSectionTextBoundingBox.bottom}px`,
          "--dynamic-card-animation-left": `${heroSectionTextBoundingBox.left}px`,
        }}
      >
        <Splash />
      </div>
      <Container className={heroSectionStyles.card} disableGutters ref={heroSectionTextRef}>
        <div className={heroSectionStyles.textContainer}>
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
