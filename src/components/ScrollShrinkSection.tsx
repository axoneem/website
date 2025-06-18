'use client';

import { useEffect, useState, useRef, ReactNode } from 'react';

interface ScrollShrinkSectionProps {
  children: ReactNode;
  background: ReactNode;
  borderSize?: number;
  shrinkDistance?: number;
  className?: string;
}

export function ScrollShrinkSection({ 
  children, 
  background, 
  borderSize = 32, 
  shrinkDistance = 200,
  className = ""
}: ScrollShrinkSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate shrink progress (0 to 1)
  const shrinkProgress = Math.min(scrollY / shrinkDistance, 1);
  
  // Calculate scale and border radius based on scroll progress
  const scale = 1 - (shrinkProgress * 0.1); // Shrink by 10% max
  const borderRadius = shrinkProgress * 24; // Max 24px border radius
  const margin = shrinkProgress * borderSize; // Create border effect
  
  // Calculate transform for the entire section after shrink is complete
  const translateY = scrollY > shrinkDistance ? -(scrollY - shrinkDistance) : 0;

  return (
    <div 
      ref={sectionRef}
      className={`relative w-full min-h-screen ${className}`}
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      {/* Background with shrink effect */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{
          transform: `scale(${scale})`,
          borderRadius: `${borderRadius}px`,
          margin: `${margin}px`,
          width: `calc(100% - ${margin * 2}px)`,
          height: `calc(100% - ${margin * 2}px)`,
          transition: scrollY === 0 ? 'all 0.3s ease-out' : 'none',
        }}
      >
        {background}
      </div>
      
      {/* Content overlay */}
      <div 
        className="relative z-10 h-full"
        style={{
          transform: `scale(${scale})`,
          margin: `${margin}px`,
          transition: scrollY === 0 ? 'all 0.3s ease-out' : 'none',
        }}
      >
        {children}
      </div>

      {/* Spacer to account for scroll distance */}
      <div 
        className="w-full" 
        style={{ height: `${shrinkDistance}px` }}
      />
    </div>
  );
} 