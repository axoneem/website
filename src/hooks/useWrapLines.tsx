"use client";

import { useEffect, useRef } from "react";

export const useLineWrap = (text: string) => {
  const elementRef = useRef<HTMLElement>(null);

  const wrapLines = () => {
    if (!elementRef.current) {
      console.log('no element');
      return;
    } else if (!text) {
      console.log('no text');
      return;
    }

    const element = elementRef.current;

    // Clear existing content and set original text
    element.innerHTML = text;

    // Get computed styles to maintain consistent styling
    const computedStyle = window.getComputedStyle(element);

    // Split text into words
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    // Create a temporary element to measure text width
    const measurer = document.createElement('span');
    measurer.style.visibility = 'hidden';
    measurer.style.position = 'absolute';
    measurer.style.whiteSpace = 'nowrap';
    measurer.style.font = computedStyle.font;
    document.body.appendChild(measurer);

    const containerWidth = element.offsetWidth;

    words.forEach((word, index) => {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      measurer.textContent = testLine;

      if (measurer.offsetWidth > containerWidth && currentLine) {
        // Current line is full, start a new line
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }

      // If it's the last word, add the remaining line
      if (index === words.length - 1) {
        lines.push(currentLine);
      }
    });

    // Clean up measurer
    document.body.removeChild(measurer);

    // Directly manipulate DOM - set innerHTML with wrapped lines
    element.innerHTML = lines
      .map(line => `<span><span>${line}</span></span>`)
      .join('');
  }

  useEffect(() => {
    // Initial wrap
    const timer = setTimeout(wrapLines, 0);

    // Handle window resize
    const handleResize = () => {
      wrapLines();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [text]);

  return { elementRef };
};