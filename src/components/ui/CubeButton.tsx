'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import Magnetic from '@/components/ui/Magnetic';

interface CubeButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  color?: 'crimson' | 'gold' | 'teal' | 'white';
}

export default function CubeButton({
  href,
  onClick,
  children,
  className = '',
  color = 'crimson',
}: CubeButtonProps) {
  const bgStyles = {
    crimson: 'bg-[#C41E2A] text-white shadow-lg shadow-[#C41E2A]/25',
    gold: 'bg-[#C9982E] text-white shadow-lg shadow-[#C9982E]/25',
    teal: 'bg-[#0E7C6B] text-white shadow-lg shadow-[#0E7C6B]/25',
    white: 'bg-white text-[#C41E2A] shadow-lg border border-[#E5E3DE]',
  };

  const hoverStyles = {
    crimson: 'bg-[#9E141F] text-white',
    gold: 'bg-[#A3781F] text-white',
    teal: 'bg-[#095C4F] text-white',
    white: 'bg-[#F2F1ED] text-[#C41E2A]',
  };

  const outerClasses = `group relative inline-flex items-center justify-center max-w-full rounded-xl sm:rounded-2xl [perspective:1000px] select-none ${className}`;

  const inner = (
    <div className="relative inline-flex items-center justify-center w-full max-w-full transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)] group-active:[transform:rotateX(90deg)] active:[transform:rotateX(90deg)]">
      {/* Front Face */}
      <span
        className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl font-extrabold text-[11px] sm:text-xs md:text-sm tracking-wider uppercase whitespace-nowrap text-center max-w-full ${bgStyles[color]} [backface-visibility:hidden]`}
      >
        {children}
      </span>

      {/* Bottom Face */}
      <span
        className={`absolute inset-0 inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl font-extrabold text-[11px] sm:text-xs md:text-sm tracking-wider uppercase whitespace-nowrap text-center max-w-full ${hoverStyles[color]} [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(18px)] sm:[transform:rotateX(-90deg)_translateZ(22px)]`}
      >
        {children}
      </span>
    </div>
  );

  if (href) {
    if (href.startsWith('http')) {
      return (
        <Magnetic>
          <a href={href} target="_blank" rel="noopener noreferrer" className={outerClasses}>
            {inner}
          </a>
        </Magnetic>
      );
    }
    return (
      <Magnetic>
        <Link href={href} className={outerClasses}>
          {inner}
        </Link>
      </Magnetic>
    );
  }

  return (
    <Magnetic>
      <button onClick={onClick} type="button" className={outerClasses}>
        {inner}
      </button>
    </Magnetic>
  );
}
