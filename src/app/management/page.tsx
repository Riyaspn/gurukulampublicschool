'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LineDraw from '@/components/ui/LineDraw';
import { schoolInfo } from '@/data/schoolData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const leaders = [
  {
    id: 1,
    tag: 'Founder (1992)',
    name: 'Smt. K.K. Leelavathy',
    surname: 'Leelavathy',
    role: 'Founding Patron & Visionary',
    bio: 'Pioneered holistic value-based education in Thrissur since 1992. Established the school under Sree Narayana Educational Charitable Trust with a vision to nurture compassionate global citizens.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    accent: '#C9982E',
  },
  {
    id: 2,
    tag: 'Executive Council',
    name: schoolInfo.manager,
    surname: 'Shaji',
    role: 'School Manager',
    bio: 'Overseeing institutional development, infrastructure modernization, and trust governance. Driving the school toward CBSE academic excellence and 21st-century skill integration.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    accent: '#C41E2A',
  },
  {
    id: 3,
    tag: 'Sree Narayana Trust',
    name: 'Sri. K. V. Mohanan',
    surname: 'Mohanan',
    role: 'Managing Trustee',
    bio: 'Steering trust affairs according to the ideals of Sree Narayana Guru. Ensuring educational accessibility and moral foundation for every child in the institution.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    accent: '#0E7C6B',
  },
  {
    id: 4,
    tag: 'STEM Director',
    name: 'Dr. P. S. Sudhakaran',
    surname: 'Sudhakaran',
    role: 'Academic Advisory Chair',
    bio: 'Championing ATL Tinkering, AI curricula, robotics competitions, and scientific research facilities. Bringing cutting-edge STEM innovation to Thrissur\'s youth.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    accent: '#C9982E',
  },
];

export default function ManagementPage() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const slides = canvas.querySelectorAll<HTMLElement>('.leader-slide');
    const totalSlides = slides.length;
    const isMobile = window.innerWidth < 768;
    const scrollPerSlide = isMobile ? 700 : 1000;
    const totalScroll = scrollPerSlide * (totalSlides - 1);

    // Set all slides to initial "waiting" state (top-right, hidden)
    slides.forEach((slide, i) => {
      if (i === 0) {
        gsap.set(slide, { x: 0, y: 0, opacity: 1 });
      } else {
        gsap.set(slide, {
          x: isMobile ? '60vw' : '80vw',
          y: isMobile ? '-50vh' : '-60vh',
          opacity: 0,
        });
      }
    });

    const st = ScrollTrigger.create({
      trigger: canvas,
      start: 'top top',
      end: `+=${totalScroll}`,
      pin: true,
      scrub: 0.8,
      onUpdate: (self) => {
        const progress = self.progress * (totalSlides - 1);
        const currentSlide = Math.min(Math.floor(progress), totalSlides - 2);
        const slideProgress = progress - currentSlide;

        setActiveIndex(Math.min(Math.round(self.progress * (totalSlides - 1)), totalSlides - 1));

        slides.forEach((slide, i) => {
          if (i < currentSlide) {
            // Already passed: hidden at bottom-left
            gsap.set(slide, {
              x: isMobile ? '-70vw' : '-90vw',
              y: isMobile ? '40vh' : '50vh',
              opacity: 0,
            });
          } else if (i === currentSlide) {
            // Current slide: animate OUT to bottom-left as progress advances
            const exitX = slideProgress * (isMobile ? -70 : -90);
            const exitY = slideProgress * (isMobile ? 40 : 50);
            gsap.set(slide, {
              x: `${exitX}vw`,
              y: `${exitY}vh`,
              opacity: 1 - slideProgress * 0.85,
            });
          } else if (i === currentSlide + 1) {
            // Next slide: animate IN from top-right
            const enterX = (1 - slideProgress) * (isMobile ? 60 : 80);
            const enterY = (1 - slideProgress) * (isMobile ? -50 : -60);
            gsap.set(slide, {
              x: `${enterX}vw`,
              y: `${enterY}vh`,
              opacity: slideProgress,
            });
          } else {
            // Future slides: hidden at top-right
            gsap.set(slide, {
              x: isMobile ? '60vw' : '80vw',
              y: isMobile ? '-50vh' : '-60vh',
              opacity: 0,
            });
          }
        });
      },
    });

    return () => {
      st.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="page-container">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">

        {/* Page Hero */}
        <ScrollReveal>
          <div className="page-hero">
            <span className="page-hero-tag bg-[#C41E2A]/8 border border-[#C41E2A]/15 text-[#C41E2A]">
              Governing Council
            </span>
            <h1>School Management</h1>
            <p>Guided by the Sree Narayana Educational Charitable Trust.</p>
            <LineDraw className="mt-4 max-w-lg mx-auto" />
          </div>
        </ScrollReveal>
      </div>

      {/* ============================================
          DIAGONAL 3D LEADERSHIP CANVAS — LIGHT MODE
          ============================================ */}
      <div
        ref={canvasRef}
        className="relative w-full h-screen overflow-hidden bg-[#FAFAF8] border-y border-[#E5E3DE] mt-16 z-20"
      >
        {/* Subtle Light Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.4] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Scroll Progress Counter — fixed */}
        <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 z-30 flex items-center gap-2 sm:gap-3 font-mono text-xs sm:text-sm">
          <span className="text-[#1A1A1A] font-black text-base sm:text-xl">
            {(activeIndex + 1).toString().padStart(2, '0')}
          </span>
          <div className="w-10 sm:w-16 h-[2px] bg-black/10 relative overflow-hidden rounded-full">
            <div
              className="h-full bg-[#C41E2A] transition-all duration-500"
              style={{ width: `${((activeIndex + 1) / leaders.length) * 100}%` }}
            />
          </div>
          <span className="text-black/40">{leaders.length.toString().padStart(2, '0')}</span>
        </div>

        {/* Leader Slides */}
        {leaders.map((leader, idx) => (
          <div
            key={leader.id}
            className="leader-slide absolute inset-0 flex items-center justify-center px-5 sm:px-10 lg:px-16 overflow-hidden"
          >
            <div className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-10 lg:gap-16 max-w-5xl w-full">

              {/* Giant Background Surname */}
              <div className="absolute top-0 sm:top-4 left-0 sm:left-2 pointer-events-none select-none z-0 opacity-[0.06]">
                <div
                  className="font-black text-[45px] sm:text-[80px] md:text-[110px] lg:text-[140px] leading-none tracking-tighter whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-heading)', color: leader.accent }}
                >
                  / {leader.surname}
                </div>
              </div>

              {/* Portrait + 3D Cubic Accent Block */}
              <div className="relative z-10 flex-shrink-0 w-[210px] h-[270px] sm:w-[270px] sm:h-[350px] lg:w-[320px] lg:h-[420px]">
                {/* 3D Cubic Side Block (Otsuka-style 3D perspective box) */}
                <div
                  className="absolute -left-4 -bottom-4 sm:-left-6 sm:-bottom-6 w-full h-full rounded-2xl sm:rounded-3xl z-0 border border-black/5"
                  style={{
                    background: `linear-gradient(135deg, ${leader.accent} 0%, ${leader.accent}AA 100%)`,
                    transform: 'perspective(1000px) rotateY(12deg) rotateX(-5deg) scale(0.98)',
                    boxShadow: `-15px 20px 40px rgba(0,0,0,0.12)`,
                  }}
                />

                {/* Portrait Image Card */}
                <div
                  className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 z-10 shadow-xl transition-transform duration-500 bg-white"
                  style={{
                    borderColor: `${leader.accent}50`,
                    transform: 'perspective(1000px) rotateY(-4deg) rotateX(2deg)',
                  }}
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Tag Badge */}
                  <div
                    className="absolute top-3 left-3 px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg text-[8px] sm:text-[10px] font-extrabold uppercase tracking-widest text-white backdrop-blur-xl shadow-lg"
                    style={{ backgroundColor: `${leader.accent}EE` }}
                  >
                    {leader.tag}
                  </div>
                </div>
              </div>

              {/* Bio Panel */}
              <div className="relative z-10 flex-1 min-w-0 text-center sm:text-left space-y-3 sm:space-y-5">
                <div>
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] leading-tight">
                    {leader.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold mt-1" style={{ color: leader.accent }}>
                    {leader.role}
                  </p>
                </div>

                <div className="w-10 sm:w-14 h-[2px] rounded-full mx-auto sm:mx-0" style={{ backgroundColor: leader.accent }} />

                <p className="text-[#3B3B3B] text-xs sm:text-sm leading-relaxed max-w-md mx-auto sm:mx-0 font-medium">
                  {leader.bio}
                </p>

                {/* Volume indicator */}
                <div className="flex items-center gap-3 pt-1 text-black/35 text-[10px] sm:text-xs font-mono justify-center sm:justify-start">
                  <span className="w-6 sm:w-10 h-[1px] bg-black/20 inline-block" />
                  <span>Vol {(idx + 1).toString().padStart(2, '0')}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
