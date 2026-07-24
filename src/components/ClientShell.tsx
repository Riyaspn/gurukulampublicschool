'use client';

import { useState, useEffect, ReactNode } from 'react';
import SmoothScroll from '@/components/smooth-scroll';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Preloader from '@/components/ui/Preloader';
import MagicCursor from '@/components/ui/MagicCursor';
import AudioToggle from '@/components/ui/AudioToggle';
import ScrollProgressBar from '@/components/ui/ScrollProgressBar';

export default function ClientShell({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Preloader />
      <MagicCursor />
      <AudioToggle />
      <ScrollProgressBar />
      <SmoothScroll>
        <Navbar />
        <main className="flex-1 relative z-10 bg-[#FAFAF8] shadow-2xl">{children}</main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
