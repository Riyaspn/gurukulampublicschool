'use client';

import { useEffect, useRef } from 'react';

interface LineDrawProps {
  className?: string;
  color?: string; // CSS color string or gradient, default crimson
  delay?: number; // delay in ms
  duration?: number; // duration in ms
}

export default function LineDraw({
  className = '',
  color = 'bg-gradient-to-r from-[#C41E2A] via-[#C9982E] to-[#0E7C6B]',
  delay = 0,
  duration = 800,
}: LineDrawProps) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;

    el.style.transform = 'scaleX(0)';
    el.style.transformOrigin = 'left center';
    el.style.transition = `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transform = 'scaleX(1)';
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, duration]);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div ref={lineRef} className={`h-[2px] w-full ${color}`} />
    </div>
  );
}
