'use client';

import { useEffect, useRef } from 'react';

interface TextRevealProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  delay?: number;        // initial delay in ms
  stagger?: number;      // ms between each word
  duration?: number;     // animation duration per word in ms
  mode?: 'word' | 'char'; // split by word or character
}

export default function TextReveal({
  text,
  as: Tag = 'h1',
  className = '',
  delay = 0,
  stagger = 60,
  duration = 700,
  mode = 'word',
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const units = container.querySelectorAll<HTMLSpanElement>('.text-reveal-unit');
    
    // Set initial hidden state
    units.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(100%)';
      el.style.display = 'inline-block';
    });

    let hasTriggered = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          hasTriggered = true;
          units.forEach((el, idx) => {
            const unitDelay = delay + idx * stagger;
            el.style.transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${unitDelay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${unitDelay}ms`;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [delay, stagger, duration]);

  const units = mode === 'char' ? text.split('') : text.split(' ');

  return (
    <Tag ref={containerRef as any} className={className}>
      {units.map((unit, idx) => (
        <span
          key={idx}
          className="text-reveal-wrap inline-block overflow-hidden"
        >
          <span className="text-reveal-unit inline-block">
            {unit}
          </span>
          {mode === 'word' && idx < units.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </Tag>
  );
}
