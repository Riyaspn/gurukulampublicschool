'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ==========================================
// CONFIGURATION FOR VLC 90-FRAME SEQUENCE
// ==========================================
// CONFIGURATION FOR HERO 3D SCROLL ANIMATION
// ==========================================
// Set IS_30FPS to true once all 270 frames are extracted into public/images/hero/
const IS_30FPS = true;
const FRAME_COUNT = IS_30FPS ? 195 : 90;
const FRAME_STEP = IS_30FPS ? 1 : 3;
const FRAME_PREFIX = '/images/hero/frame_';
const FRAME_EXTENSION = '.jpg';
// ==========================================

const chapters = [
  {
    id: 1,
    label: 'CHAPTER I • THE GATEWAY OF WISDOM (1992)',
    title: 'THE AIR OF',
    titleAccent: 'ENLIGHTENMENT',
    description: 'Founded in 1992 by 15 visionaries of Sree Narayana Educational Charitable Trust. From a humble seed of 6 children to a premier CBSE institution.',
    accentClass: 'crimson-gradient-text',
  },
  {
    id: 2,
    label: 'CHAPTER II • SREE NARAYANA TRUST LEGACY',
    title: 'NURTURING',
    titleAccent: 'CHARACTER & VALUES',
    description: 'Built on the timeless philosophy of Sree Narayana Guru — education to achieve freedom, integrity, and social harmony for every child.',
    accentClass: 'gold-gradient-text',
  },
  {
    id: 3,
    label: 'CHAPTER III • INNOVATION AIRFLOW',
    title: 'FIRST ATL',
    titleAccent: 'TINKERING LAB',
    description: 'Sanctioned by NITI Aayog, Government of India. Providing cutting-edge robotics, 3D printing, AI, and STEM engineering tools for young creators.',
    accentClass: 'crimson-gradient-text',
  },
  {
    id: 4,
    label: 'CHAPTER IV • ACADEMIC COSMOS',
    title: 'SCIENCE &',
    titleAccent: 'PSYCHOLOGY LABS',
    description: 'Separate modern laboratories for Physics, Chemistry, Biology, Mathematics, and Clinical Psychology guided by Post-Graduate Psychologists.',
    accentClass: 'teal-gradient-text',
  },
  {
    id: 5,
    label: 'CHAPTER V • PRESENT DAY CLIMAX',
    title: 'WELCOME TO',
    titleAccent: 'GURUKULAM',
    description: '100% CBSE Board Pass Record with 70% Distinction • Serene Venginissery Nature Campus • 1st ATL Lab in Thrissur District.',
    accentClass: 'gold-gradient-text',
  },
];

export default function OtsukaAirflowCanvas3D() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    // --- 1. Set Canvas Size ---
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // --- 2. Progressive Preloader Architecture ---
    const images: HTMLImageElement[] = [];
    const airframes = { frame: 0 };
    let loadedCount = 0;

    // Helper to format frame numbers (10fps: 1, 4, 7... | 30fps: 1, 2, 3, 4...)
    const getFrameUrl = (index: number) => {
      const frameNumber = (index * FRAME_STEP) + 1;
      const frameNum = frameNumber.toString().padStart(5, '0');
      return `${FRAME_PREFIX}${frameNum}${FRAME_EXTENSION}`;
    };

    // Load a specific batch of images
    const loadImagesInBatch = (startIndex: number, batchSize: number) => {
      for (let i = startIndex; i < Math.min(startIndex + batchSize, FRAME_COUNT); i++) {
        const img = new Image();
        img.src = getFrameUrl(i);
        img.onload = () => {
          loadedCount++;
          // If we just loaded the very first image, render it immediately
          if (i === 0) render();

          // Trigger next batch only when current batch finishes
          if (loadedCount === startIndex + batchSize && startIndex + batchSize < FRAME_COUNT) {
            loadImagesInBatch(startIndex + batchSize, batchSize);
          }
        };
        images[i] = img;
      }
    };

    // START PRELOADING:
    // 1. Immediately request the first 5 frames for instant visual feedback.
    loadImagesInBatch(0, 5);

    // --- 3. Render Logic (object-fit: cover equivalent) ---
    const render = () => {
      // Ensure we don't try to draw an undefined or unloaded image
      const img = images[airframes.frame];
      if (!img || !img.complete || img.naturalWidth === 0) {
        // Fallback: draw dark background if scrolling faster than preload
        context.fillStyle = '#070A0F';
        context.fillRect(0, 0, canvas.width, canvas.height);
        return;
      }

      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;

      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > canvasRatio) {
        drawHeight = canvas.height;
        drawWidth = img.width * (canvas.height / img.height);
        offsetX = (canvas.width - drawWidth) / 2;
      } else {
        drawWidth = canvas.width;
        drawHeight = img.height * (canvas.width / img.width);
        offsetY = (canvas.height - drawHeight) / 2;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // --- 4. GSAP ScrollTrigger ---
    const isMobile = window.innerWidth < 768;
    const scrollDistance = isMobile ? 3000 : 5000;

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${scrollDistance}`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          // Precise frame-to-scene mapping matching actual video frame cuts
          const currentFrame = Math.round(self.progress * (FRAME_COUNT - 1));
          let newChapter = 0;
          if (currentFrame >= 150) {
            newChapter = 4; // School Building / Campus
          } else if (currentFrame >= 108) {
            newChapter = 3; // Science & Psychology Labs
          } else if (currentFrame >= 68) {
            newChapter = 2; // First ATL Tinkering Lab
          } else if (currentFrame >= 29) {
            newChapter = 1; // Lamp & Sree Narayana Values
          } else {
            newChapter = 0; // Heritage Banyan Tree
          }
          setActiveChapter(newChapter);
        },
      },
    });

    scrollTl.to(airframes, {
      frame: FRAME_COUNT - 1,
      snap: 'frame',
      ease: 'none',
      onUpdate: render,
    });

    const handleResize = () => {
      setCanvasSize();
      render();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const ch = chapters[activeChapter];

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-[#070A0F]">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0B0E14]/80 via-transparent to-[#0B0E14]/40 pointer-events-none" />

      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between py-4 sm:py-6 lg:py-10 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto left-0 right-0">


        <div className="my-auto max-w-2xl pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={ch.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="space-y-3 sm:space-y-5"
            >
              <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
                {ch.title} <br />
                <span className={ch.accentClass}>{ch.titleAccent}</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-xl text-slate-300 leading-relaxed font-light max-w-xl font-sans">
                {ch.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between text-[10px] sm:text-xs text-slate-500 font-semibold pointer-events-auto font-sans">
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {chapters.map((chap, i) => (
              <div key={chap.id} className="relative group flex items-center justify-center py-2">
                {/* Chapter Hover Tooltip */}
                <div className="absolute bottom-full mb-2 left-0 -translate-x-2 px-3 py-1.5 rounded-lg bg-[#0B0E14]/90 border border-white/20 text-white text-[10px] sm:text-xs font-mono font-bold tracking-wide whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 shadow-2xl backdrop-blur-md z-30">
                  {chap.label}
                </div>

                <div
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full cursor-pointer transition-all duration-300 ${i === activeChapter
                      ? 'bg-[#C41E2A] scale-125 shadow-lg shadow-[#C41E2A]/60 ring-2 ring-[#C41E2A]/30'
                      : 'bg-white/40 hover:bg-white/90 hover:scale-110'
                    }`}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="hidden sm:inline">Scroll to fly inward</span>
            <span className="sm:hidden">Scroll</span>
            <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C41E2A] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
