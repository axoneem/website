'use client';

import Container from "@/components/Container";
import Header from "@/components/Header";
import Section from "@/components/Section";
import { Splash } from "@/components/Splash";
import Typography from "@/components/Typography";
import heroSectionStyles from "@/styles/sections/HeroSection.module.scss";
import tenetSectionStyles from "@/styles/sections/TenetSection.module.scss";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const splashContainerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (heroSectionRef.current && splashContainerRef.current) {
  //       const rect = heroSectionRef.current.getBoundingClientRect();
  //       const scrollProgress = Math.max(0, -rect.top) / window.innerHeight;
  //       const clipPercentage = Math.min(100, scrollProgress * 100);
        
  //       splashContainerRef.current.style.setProperty('--scroll-clip', `${clipPercentage}%`);
  //     }
  //   };

  //   handleScroll(); // Initial calculation
  //   window.addEventListener('scroll', handleScroll, { passive: true });
    
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
      <Section className={heroSectionStyles.root} ref={heroSectionRef} disableBleed>
        <Header className={heroSectionStyles.header} />
        <div className={heroSectionStyles.splashContainer}>
          <Splash className={heroSectionStyles.splash}/>
        </div>

        <Container className={heroSectionStyles.contentContainer}>
          <Typography component="h1" variant="h1">
            Hi &ndash; we&apos;re<br />Axoneme
          </Typography>
          <Typography variant="h2" component="p">
            We&apos;re an open-source developer collective building software for the future &mdash; not the next funding round. Follow us on Bluesky or GitHub.
          </Typography>
          <Typography variant="body1" className={heroSectionStyles.bodyText}>
            We founded Axoneme in 2025 to build software that puts users first. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu eros vel massa eleifend lobortis ac a lectus. Pellentesque ultrices dictum leo, eget semper purus placerat at. Suspendisse auctor leo eros, vel varius nulla elementum vel. Aliquam erat volutpat. Nulla.
          </Typography>
        </Container>
      </Section>
    </>
  );
}

export default HeroSection;
