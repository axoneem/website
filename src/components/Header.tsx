'use client';

import { Container } from "./Container";
import Logo from "./logo";
import { ThreeDemo } from "./ThreeDemo";
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <style jsx>{`
        @supports (animation-timeline: scroll()) {
          .scroll-driven-background {
            animation: shrink-background cubic-bezier(0.8, 0, 0.14, 1) forwards;
            animation-timeline: scroll(root);
            animation-range: 0dvh 50dvh;
            /* Initial state */
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            height: calc(100dvh + 8rem);
            margin: 0;
            border-radius: 0;
          }
        }
        
        @keyframes shrink-background {
          0% {
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            height: calc(100dvh + 8rem);
            margin: 0;
            border-radius: 0;
          }
          100% {
            top: 1.5rem;
            right: 1.5rem;
            bottom: 1.5rem;
            left: 1.5rem;
            height: calc(var(--header-height) - 3rem);
            border-radius: 1.5rem;
          }
        }
        
        @media (min-width: 1024px) {
          @keyframes shrink-background {
            0% {
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              height: calc(100dvh + 8rem);
              margin: 0;
              border-radius: 0;
            }
            100% {
              top: 2rem;
              right: 2rem;
              bottom: 2rem;
              left: 2rem;
              height: calc(var(--header-height) - 4rem);
              border-radius: 1.5rem;
            }
          }
        }
        
        /* Fallback for browsers without scroll-driven animation support */
        @supports not (animation-timeline: scroll()) {
          .scroll-driven-background {
            transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
            /* Initial state for fallback */
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            height: calc(100dvh + 8rem);
            margin: 0;
            border-radius: 0;
          }
        }
      `}</style>
      
      <header className="fixed top-0 left-0 right-0 z-40 text-white px-6 lg:px-8 py-8 h-[var(--header-height)]">
        <Container component='nav' maxWidth={false} className="relative z-20 h-full flex items-center justify-between">
          <div className="w-8 h-8">
            <Logo />
          </div>
          
          <ul className="flex items-center">
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </Container>

        {/* ThreeDemo background with scroll-driven animation */}
        <div className="scroll-driven-background absolute overflow-hidden z-10">
          <ThreeDemo />
        </div>
      </header>
    </>
  )
}
