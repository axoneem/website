'use client';

import { useEffect, useRef, ReactNode, useState } from 'react';

interface ScrollShrinkSectionProps {
  children: ReactNode;
  background: ReactNode;
  headerHeight?: number;
  className?: string;
}

export function ScrollShrinkSection({ 
  children, 
  background, 
  headerHeight = 80,
  className = ""
}: ScrollShrinkSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsAtTop(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '0px'
      }
    );

    observer.observe(sentinelRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      className="relative"
      style={{ '--header-height': `${headerHeight}px` } as React.CSSProperties}
    >
      {/* Sentinel element to detect when we're at the very top */}
      <div 
        ref={sentinelRef}
        className="absolute top-0 left-0 w-full h-1 pointer-events-none -z-10"
      />

      {/* Fixed background that transitions between expanded and shrunk states */}
      <div 
        className={`
          fixed left-0 right-0 overflow-hidden
          transition-all duration-300
          ${isAtTop 
            ? 'top-0 h-[calc(100dvh+8rem)] w-full m-0 rounded-none z-20' 
            : 'top-8 h-[var(--header-height)] w-[calc(100%-4rem)] mx-8 rounded-3xl z-40'
          }
        `}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)'
        }}
      >
        {background}
      </div>

      {/* Main content section */}
      <div 
        ref={containerRef}
        className={`relative w-full h-[100dvh] ${className}`}
      >
        {/* Content overlay */}
        <div className="absolute inset-0 z-30 flex items-end">
          <div className="relative w-full flex items-end">
            {children}
            
            {/* Decorative square that appears when background is shrunk */}
            <div 
              className={`
                absolute right-8 bottom-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl
                transition-all duration-300
                ${isAtTop 
                  ? 'w-0 h-0 opacity-0 scale-75' 
                  : 'w-[140px] h-[140px] opacity-100 scale-100'
                }
              `}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)'
              }}
            />
          </div>
        </div>
      </div>

      {/* Additional content space to allow scrolling */}
      <div className="h-[200dvh]" />
    </div>
  );
} 