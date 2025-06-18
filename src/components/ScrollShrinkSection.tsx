'use client';

import { useEffect, useState, ReactNode } from 'react';

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
  shrinkDistance = 150,
  className = ""
}: ScrollShrinkSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(1024);

  useEffect(() => {
    const updateWindowHeight = () => {
      setWindowHeight(window.innerHeight);
    };
    
    updateWindowHeight();
    window.addEventListener('resize', updateWindowHeight);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateWindowHeight);
    };
  }, []);

  // Calculate shrink progress (0 to 1)
  const shrinkProgress = Math.min(Math.max(scrollY / shrinkDistance, 0), 1);
  
  // Calculate shrinking from all sides
  const borderSize = 32;
  const margin = shrinkProgress * borderSize;
  const borderRadius = shrinkProgress * 24;
  
  // Calculate the current height of the background
  const backgroundHeight = windowHeight - (windowHeight - headerHeight) * shrinkProgress;

  return (
    <div className="relative">
      {/* Fixed background that shrinks from all sides */}
      <div 
        className="fixed top-0 left-0 right-0 z-20 overflow-hidden"
        style={{ 
          height: `${backgroundHeight}px`,
          margin: `${margin}px`,
          width: `calc(100% - ${margin * 2}px)`,
          borderRadius: `${borderRadius}px`
        }}
      >
        {background}
      </div>

      {/* Main content section */}
      <div 
        className={`relative w-full ${className}`}
        style={{ height: `${windowHeight}px` }}
      >
        {/* Content overlay - higher z-index than background */}
        <div className="relative z-30 w-full h-full flex items-end">
          {children}
        </div>
      </div>
    </div>
  );
} 