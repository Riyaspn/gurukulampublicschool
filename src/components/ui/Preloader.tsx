'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [displayNone, setDisplayNone] = useState(false);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1200; // 1.2 seconds count up

    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const currentProgress = Math.min(Math.floor((elapsed / duration) * 100), 100);

      setProgress(currentProgress);

      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setProgress(100);
        setTimeout(() => {
          setHidden(true);
          setTimeout(() => {
            setDisplayNone(true);
          }, 1000);
        }, 300);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (displayNone) return null;

  return (
    <div
      id="preloader"
      style={{
        transform: hidden ? 'translateY(-100%)' : 'translateY(0%)',
        transition: 'transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)',
      }}
      className="fixed inset-0 z-[10000] bg-[#FAFAF8] flex flex-col items-center justify-center text-[#1A1A1A] border-b border-[#E5E3DE]"
    >
      <div className="text-center space-y-4 px-4">
        <div className="relative flex items-center justify-center mx-auto mb-2">
          <img
            src="/images/logo.png"
            alt="Gurukulam Public School Logo"
            className="h-16 sm:h-24 lg:h-28 w-auto object-contain drop-shadow-md animate-pulse"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
              const fallback = (e.target as HTMLElement).nextElementSibling;
              if (fallback) (fallback as HTMLElement).style.display = 'block';
            }}
          />
          <div className="hidden text-center space-y-2">
            <div className="font-black tracking-widest text-3xl sm:text-5xl text-[#1A1A1A]">
              GURUKULAM
            </div>
            <div className="text-[10px] sm:text-xs font-extrabold text-[#C41E2A] tracking-[0.3em] uppercase">
              PUBLIC SCHOOL, THRISSUR • ESTD 1992
            </div>
          </div>
        </div>

        {/* Otsuka-Style Light Mode Percentage Counter */}
        <div className="pt-6 font-mono text-4xl sm:text-6xl font-black text-[#1A1A1A] tabular-nums flex items-center justify-center gap-1">
          <span>{progress.toString().padStart(2, '0')}</span>
          <span className="text-[#C41E2A] text-2xl sm:text-4xl">%</span>
        </div>

        {/* Light Mode Progress Bar Line */}
        <div className="w-48 sm:w-64 h-[3px] bg-[#E5E3DE] mx-auto rounded-full overflow-hidden mt-4 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#C41E2A] via-[#C9982E] to-[#C41E2A] transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
