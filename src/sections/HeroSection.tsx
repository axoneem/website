'use client';

import Container from "@/components/Container";
import Header from "@/components/Header";
import Section from "@/components/Section";
import { Splash } from "@/components/Splash";
import Typography from "@/components/Typography";
import heroSectionStyles from "@/styles/sections/HeroSection.module.scss";
import splashStyles from "@/styles/components/Splash.module.scss";
import { useEffect, useState, useRef } from "react";
import clsx from "clsx";

export function HeroSection() {
  const [isAtTop, setIsAtTop] = useState(true);
  const heroSectionTextRef = useRef<HTMLDivElement>(null);
  const [heroSectionTextBoundingBox, setHeroSectionTextBoundingBox] = useState({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      // Consider "at top" when scroll position is less than 100px
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      // console.log('scrollTop:', scrollTop);
      setIsAtTop(scrollTop < 100);
    };

    // Check initial position
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateBoundingBox = () => {
      if (heroSectionTextRef.current) {
        const boundingBox = heroSectionTextRef.current.getBoundingClientRect();
        setHeroSectionTextBoundingBox({
          top: boundingBox.top,
          right: boundingBox.right,
          bottom: boundingBox.bottom,
          left: boundingBox.left,
        });
      }
    };

    // Update on mount
    updateBoundingBox();

    // Add resize listener
    window.addEventListener('resize', updateBoundingBox);

    return () => {
      window.removeEventListener('resize', updateBoundingBox);
    };
  }, [heroSectionTextRef]);

  return (
    <>
      <Section className={heroSectionStyles.root}>
        <div 
          className={clsx(
            splashStyles.container, 
            isAtTop ? splashStyles.expanded : splashStyles.shrunken
          )}
          style={{
            "--dynamic-card-animation-top": `${heroSectionTextBoundingBox.top}px`,
            "--dynamic-card-animation-right": `${heroSectionTextBoundingBox.right}px`,
            "--dynamic-card-animation-bottom": `${heroSectionTextBoundingBox.bottom}px`,
            "--dynamic-card-animation-left": `${heroSectionTextBoundingBox.left}px`,
          } as React.CSSProperties}
        >
          <Header />
          <Splash className={heroSectionStyles.splash}/>
        </div>
        {/* <Header /> */}
        {/* <div>Temp</div> */}
        <Container className={heroSectionStyles.cardContainer} disableGutters>
          <div className={heroSectionStyles.card} ref={heroSectionTextRef}>
            <div className={heroSectionStyles.textContainer}>
              <Typography component="h1" variant="h1">
                This is <span className={heroSectionStyles.highlight}>Axoneme</span> <span className={heroSectionStyles.dash}>&ndash;</span>
              </Typography>
              <Typography variant="h4" component="p">
                An open-source developer collective building software that puts users first.
              </Typography>
              <Typography variant="body1" className={heroSectionStyles.bodyText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu eros vel massa eleifend lobortis ac a lectus. Pellentesque ultrices dictum leo, eget semper purus placerat at. Suspendisse auctor leo eros, vel varius nulla elementum vel. Aliquam erat volutpat. Nulla.
              </Typography>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default HeroSection;
