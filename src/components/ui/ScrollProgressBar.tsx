'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress((currentScroll / scrollHeight) * 100);
      }
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none bg-black/5">
      <div
        className="h-full bg-[#C41E2A] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(196,30,42,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
