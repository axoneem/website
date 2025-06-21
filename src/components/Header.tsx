'use client';

import { useEffect, useState } from 'react';
import { Container } from "./Container";
import Logo from "./logo";
import { ThreeDemo } from "./ThreeDemo";

export default function Header() {
  const [isShrunk, setisShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroContainer = document.querySelector('.hero-text-container');
      if (heroContainer) {
        const heroRect = heroContainer.getBoundingClientRect();
        const headerHeight = 100; // Approximate header height in pixels
        
        // Header should shrink when the hero container is moving up towards the header area
        // This happens when the top of the hero container is getting close to the header
        const shouldShrink = heroRect.top <= headerHeight;
        setisShrunk(shouldShrink);
      }
    };

    // Check on mount and on scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 text-white px-6 lg:px-8 py-8 h-[var(--header-height)] ${isShrunk ? 'z-100' : 'z-10'}`}
      >
        <Container component='nav' maxWidth={false} className="relative z-20 h-full flex items-center justify-between">
          <div className="w-8 h-8">
            <Logo />
          </div>
          
          <ul className="flex items-center">
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </Container>

        {/* ThreeDemo background that transitions between expanded and shrunk states */}
        <div
          className={`
            absolute overflow-hidden
            transition-all duration-500
            ${!isShrunk 
              ? 'inset-0 h-[calc(100dvh+8rem)] w-full m-0 rounded-none z-10' 
              : 'inset-6 lg:inset-8 h-[calc(var(--header-height)-3rem)] lg:h-[calc(var(--header-height)-4rem)] rounded-3xl z-10'
            }
          `}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)'
          }}
        >
          <ThreeDemo />
        </div>
      </header>
    </>
  )
}
