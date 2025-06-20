'use client';

import { useEffect, useRef, ReactNode, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollShrinkSectionProps {
  children: ReactNode;
  background: ReactNode;
  headerHeight?: number;
  shrinkDistance?: number;
  className?: string;
}

export function ScrollShrinkSection({ 
  children, 
  background, 
  headerHeight = 80, 
  shrinkDistance = 1500,
  className = ""
}: ScrollShrinkSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const decorativeRef = useRef<HTMLDivElement>(null);
  const [windowHeight, setWindowHeight] = useState(1024);

  useEffect(() => {
    if (!containerRef.current || !backgroundRef.current) return;

    // Set window height safely
    const currentWindowHeight = window.innerHeight;
    setWindowHeight(currentWindowHeight);
    
    const borderSize = 32;
    const initialPadding = 128;

    // Create timeline for all animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${shrinkDistance}`,
        scrub: 1 // Smooth scrubbing
      }
    });

    // Background shrinking animation
    tl.to(backgroundRef.current, {
      duration: 1,
      ease: "power2.inOut",
      height: headerHeight,
      marginTop: borderSize,
      marginLeft: borderSize,
      marginRight: borderSize,
      width: `calc(100% - ${borderSize * 2}px)`,
      borderRadius: 24,
      zIndex: 40 // Move above hero text at the end
    })
    
    // Decorative element animation (starts at 30% progress)
    .to(decorativeRef.current, {
      duration: 0.7,
      ease: "back.out(1.7)",
      width: 140,
      height: 140,
      opacity: 1,
      scale: 1
    }, 0.3); // Start at 30% of timeline

    // Set initial states
    gsap.set(backgroundRef.current, {
      height: currentWindowHeight + initialPadding,
      borderRadius: 0
    });

    gsap.set(decorativeRef.current, {
      width: 0,
      height: 0,
      opacity: 0,
      scale: 0.8
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [headerHeight, shrinkDistance]);

  return (
    <div className="relative">
      {/* Fixed background that shrinks from all sides */}
      <div 
        ref={backgroundRef}
        className="fixed top-0 left-0 right-0 z-20 overflow-hidden"
        style={{
          height: `${windowHeight + 128}px`,
          width: '100%',
          borderRadius: '0px'
        }}
      >
        {background}
      </div>

      {/* Main content section - tall enough for sticky behavior */}
      <div 
        ref={containerRef}
        className={`relative w-full ${className}`}
        style={{ height: `${windowHeight + shrinkDistance}px` }}
      >
        {/* Sticky content overlay - stays in place while background shrinks */}
        <div 
          className="sticky left-0 right-0 z-30 flex items-end"
          style={{ 
            height: `${windowHeight}px`,
            top: `0px`
          }}
        >
          <div className="relative w-full flex items-end">
            {children}
            
            {/* Decorative square that appears as background shrinks */}
            <div 
              ref={decorativeRef}
              className="absolute right-8 bottom-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 