'use client';

import { ReactNode } from 'react';

interface SpatialCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'crimson' | 'gold' | 'teal';
}

export default function SpatialCard({
  children,
  className = '',
  glowColor = 'crimson',
}: SpatialCardProps) {
  const glowBorders = {
    crimson: 'border-[#C41E2A]/15 hover:border-[#C41E2A]/40 hover:shadow-[#C41E2A]/8',
    gold: 'border-[#C9982E]/15 hover:border-[#C9982E]/40 hover:shadow-[#C9982E]/8',
    teal: 'border-[#0E7C6B]/15 hover:border-[#0E7C6B]/40 hover:shadow-[#0E7C6B]/8',
  };

  return (
    <div
      className={`spatial-glass-card p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl transition-all duration-500 ${glowBorders[glowColor]} ${className}`}
    >
      {children}
    </div>
  );
}
