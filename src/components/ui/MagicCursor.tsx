'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MagicCursor() {
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable custom cursor on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      document.body.style.cursor = 'auto';
      return;
    }

    const ball = ballRef.current;
    if (!ball) return;

    gsap.set(ball, { xPercent: -50, yPercent: -50 });
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2;

    const xSet = gsap.quickSetter(ball, 'x', 'px');
    const ySet = gsap.quickSetter(ball, 'y', 'px');

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const tickerCallback = () => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    };

    gsap.ticker.add(tickerCallback);

    const handleMouseEnter = () => ball.classList.add('hover-state');
    const handleMouseLeave = () => ball.classList.remove('hover-state');

    const attachHoverEvents = () => {
      const hoverElements = document.querySelectorAll(
        'a, button, input, textarea, select, .interactive-hover'
      );
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    attachHoverEvents();
    const observer = new MutationObserver(attachHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      gsap.ticker.remove(tickerCallback);
      observer.disconnect();
    };
  }, []);

  return (
    <div id="magic-cursor" className="hidden md:block">
      <div id="ball" ref={ballRef} />
    </div>
  );
}
