'use client';

import { Trophy, Sparkles } from 'lucide-react';

export default function MarqueeTicker() {
  const tickerItems = [
    '100% PASS RATE IN CBSE CLASS X & XII BOARD EXAMINATIONS',
    '70% DISTINCTION IN CLASS X BOARD EXAMS',
    'FIRST ATAL TINKERING LAB (ATL LAB) IN THRISSUR DISTRICT SANCTIONED BY NITI AAYOG',
    'ONLINE ADMISSION OPEN FOR ACADEMIC YEAR 2026-27 (KG TO CLASS XI)',
    'ESTABLISHED IN 1992 UNDER SREE NARAYANA EDUCATIONAL CHARITABLE TRUST',
  ];

  return (
    <div className="w-full bg-gradient-to-r from-[#C41E2A] via-[#E8343F] to-[#C41E2A] py-2 sm:py-3 overflow-hidden shadow-lg border-y border-[#9B1722]">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 sm:gap-3 mx-4 sm:mx-8 text-white font-black text-[10px] sm:text-xs lg:text-sm tracking-widest uppercase"
          >
            <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-white shrink-0" />
            <span>{item}</span>
            <Sparkles className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-white/80 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
