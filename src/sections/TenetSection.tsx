"use client";

import Section from '@/components/Section';
import Container from '@/components/Container';
import Typography from '@/components/Typography';
import tenetSectionStyles from '@/styles/sections/TenetSection.module.scss';
// import { Splash } from '@/components/Splash';
import { useLineWrap } from '@/hooks/useWrapLines';
import { animate, scroll } from "motion";
import { useEffect } from 'react';


export default function TenetSection() {
    const longText = "We emerged from a simple belief: the best tools are the ones you can trust. Software should be transparent, reliable, and built to last. We create applications that respect your choices and give you a degree of control that means something.";
    const { elementRef } = useLineWrap(longText);
    
    useEffect(() => {
        // Wait for DOM to be ready with line wrapping
        const timer = setTimeout(() => {
            // Get all span elements that contain text
            const spans = document.querySelectorAll(`.${tenetSectionStyles.bodyText} span > span`);
            
            spans.forEach((span) => {
                // Create scroll animation for each span's pseudo element
                scroll(
                    animate(
                        span,
                        { "--pseudo-translate": ["0%", "100%"] },
                        { duration: 1, ease: "linear" }
                    ),
                    {
                        target: span as Element,
                        offset: ["start end", "start center"]
                    }
                );
            });
        }, 100);

        return () => clearTimeout(timer);
    }, []);
    
    return (
        <Section className={tenetSectionStyles.root}>
            <Container>
                <Typography variant="h1" component="p" className={tenetSectionStyles.bodyText} ref={elementRef}>
                    {/* Content will be set by useLineWrap hook via DOM manipulation */}
                </Typography>
            </Container>
        </Section>
    )
}
