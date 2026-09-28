'use client';

import React, { useEffect, useRef, useState } from 'react';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in seconds (e.g. 0.05)
  duration?: number; // Duration in seconds (e.g. 1.0)
  yOffset?: number; // Starting Y offset in px (e.g. 32)
  threshold?: number;
  rootMargin?: string;
  as?: React.ElementType;
  id?: string;
}

export default function SectionReveal({
  children,
  className = '',
  delay = 0,
  duration = 1.0,
  yOffset = 30,
  threshold = 0.05,
  rootMargin = '0px 0px -60px 0px',
  as: Component = 'div',
  id,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion, reveal immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    // Check if element is already within viewport on load
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return (
    <Component
      id={id}
      ref={ref}
      className={`${className} transition-[opacity,transform] will-change-[opacity,transform]`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed ? 'translate3d(0, 0, 0)' : `translate3d(0, ${yOffset}px, 0)`,
      }}
    >
      {children}
    </Component>
  );
}
