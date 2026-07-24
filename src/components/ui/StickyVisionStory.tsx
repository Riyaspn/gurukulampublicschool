'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Cpu, Microscope, Trophy } from 'lucide-react';
import CubeButton from '@/components/ui/CubeButton';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const storyActs = [
  {
    id: 1,
    actNumber: 'ACT I • 1992 HERITAGE',
    num: '01',
    title: 'Where Ancient Gurukulam Wisdom Begins',
    description:
      'Founded in 1992 by 15 visionaries of Sree Narayana Educational Charitable Trust. From a humble seed of 6 children on M.G. Road to a premier CBSE educational benchmark in Thrissur.',
    imageUrl:
      'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    caption: '1992 Origin • Sree Narayana Educational Charitable Trust',
    tagColor: 'text-[#C9982E]',
    accentColor: '#C9982E',
    icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#C9982E]" />,
  },
  {
    id: 2,
    actNumber: 'ACT II • ACADEMIC EXCELLENCE',
    num: '02',
    title: 'Advanced Science & Clinical Psychology Labs',
    description:
      'Empowering students with hands-on experimentation in Physics, Chemistry, Biology, Mathematics, and Psychology laboratories guided by dedicated Post-Graduate Clinical Psychologists.',
    imageUrl:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    caption: 'Science & Psych Labs • Holistic Student Well-Being',
    tagColor: 'text-[#0E7C6B]',
    accentColor: '#0E7C6B',
    icon: <Microscope className="w-5 h-5 sm:w-6 sm:h-6 text-[#0E7C6B]" />,
  },
  {
    id: 3,
    actNumber: 'ACT III • STEM INNOVATION',
    num: '03',
    title: 'First Atal Tinkering Lab in District',
    description:
      'Sanctioned with the 1st ATL Lab in Thrissur District by NITI Aayog, Government of India. Providing cutting-edge robotics, 3D printing, AI, and engineering tools for young creators.',
    imageUrl:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    caption: '1st ATL Lab in Thrissur District • Sanctioned by NITI Aayog',
    tagColor: 'text-[#C41E2A]',
    accentColor: '#C41E2A',
    icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-[#C41E2A]" />,
  },
  {
    id: 4,
    actNumber: 'ACT IV • GRAND CLIMAX',
    num: '04',
    title: '100% CBSE Pass Results & Serene Campus',
    description:
      'Consistently achieving 100% pass records in CBSE Class X & XII board examinations (70% distinction rate). Situated in a lush green natural environment in Venginissery.',
    imageUrl:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    caption: 'Present Day • Venginissery Nature Campus & 100% CBSE Pass Record',
    tagColor: 'text-[#C9982E]',
    accentColor: '#C9982E',
    icon: <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-[#C9982E]" />,
  },
];

export default function StickyVisionStory() {
  const [activeActIndex, setActiveActIndex] = useState(0);
  const [halfWidth, setHalfWidth] = useState(200);

  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const prismRef = useRef<HTMLDivElement>(null);

  // Dynamically calculate half width of 3D stage so translateZ forms an exact square cube
  useEffect(() => {
    const updateSize = () => {
      if (stageRef.current) {
        setHalfWidth(stageRef.current.offsetWidth / 2);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // GSAP ScrollTrigger for smooth flat-plane Y-axis rotation pinned scroll
  useEffect(() => {
    const section = sectionRef.current;
    const prism = prismRef.current;
    if (!section || !prism) return;

    const isMobile = window.innerWidth < 768;
    const totalActs = storyActs.length;
    const scrollDistance = isMobile ? 2200 : 3000;

    // Lock initial 3D rotation strictly on a flat, upright horizontal plane (rotateX: 0, rotateZ: 0)
    gsap.set(prism, { rotateY: 0, rotateX: 0, rotateZ: 0 });

    const st = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: `+=${scrollDistance}`,
      pin: true,
      scrub: 0.6,
      onUpdate: (self) => {
        // Calculate current active index cleanly (0, 1, 2, 3)
        const rawProgress = self.progress * (totalActs - 1);
        const currentIndex = Math.min(Math.round(rawProgress), totalActs - 1);

        setActiveActIndex(currentIndex);

        // Rotation from 0deg to -270deg (90deg step per act) on a flat plane
        const targetRotationY = self.progress * -270;
        gsap.set(prism, {
          rotateY: targetRotationY,
          rotateX: 0,
          rotateZ: 0,
        });
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  const activeAct = storyActs[activeActIndex];

  return (
    <section
      ref={sectionRef}
      className="vision-section w-full h-screen relative bg-[#FAFAF8] border-t border-b border-[#E5E3DE] overflow-hidden flex items-center justify-center z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-between py-3 sm:py-10">

        {/* Section Header */}
        <div className="text-center space-y-1 sm:space-y-2 z-30">
          <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#C41E2A]/8 border border-[#C41E2A]/15 text-[#C41E2A] font-extrabold text-[9px] sm:text-xs tracking-widest uppercase">
            Interactive Storytelling Journey
          </span>
          <h2 className="text-lg sm:text-3xl lg:text-4xl font-black text-[#1A1A1A]">
            The Gurukulam Legacy (1992 – Present)
          </h2>
        </div>

        {/* Main Content Stage: 3D Flat-Plane Cube (Left) + Clean Non-Overlapping Text Stack (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-8 lg:gap-16 items-center my-auto w-full z-20">

          {/* Otsuka 3D Flat-Plane Revolving Cube Stage */}
          <div
            ref={stageRef}
            className="relative w-full max-w-md lg:max-w-lg mx-auto aspect-[5/4] sm:aspect-[16/11] [perspective:2400px]"
          >
            {/* 3D Prism Revolving Box — Perfectly Upright Flat Plane */}
            <div
              ref={prismRef}
              className="w-full h-full relative [transform-style:preserve-3d]"
              style={{ transform: 'rotateY(0deg) rotateX(0deg) rotateZ(0deg)' }}
            >
              {storyActs.map((act, idx) => {
                const rotation = idx * 90;
                return (
                  <div
                    key={act.id}
                    className="absolute inset-0 w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 bg-white shadow-2xl [backface-visibility:hidden]"
                    style={{
                      transform: `rotateY(${rotation}deg) translateZ(${halfWidth}px)`,
                      borderColor: `${act.accentColor}50`,
                    }}
                  >
                    <img
                      src={act.imageUrl}
                      alt={act.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    {/* Otsuka Corner Act Number */}
                    <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 z-20 flex items-baseline gap-2">
                      <span
                        className="font-mono font-black text-2xl sm:text-4xl text-white tracking-tight"
                        style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}
                      >
                        {act.num}
                      </span>
                      <span className="text-[10px] sm:text-xs font-mono font-bold text-white/60">
                        / 04
                      </span>
                    </div>

                    {/* Caption Tag */}
                    <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20">
                      <span
                        className="px-2.5 py-1 rounded-lg text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-white backdrop-blur-md shadow-md"
                        style={{ backgroundColor: `${act.accentColor}EE` }}
                      >
                        {act.actNumber.split('•')[0]}
                      </span>
                    </div>

                    {/* Caption Text on Image */}
                    <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 max-w-[65%] text-right z-20">
                      <p className="text-[10px] sm:text-xs font-semibold text-white/90 drop-shadow">
                        {act.caption}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 3D Dynamic Ambient Shadow */}
            <div
              className="absolute -bottom-5 inset-x-8 h-8 rounded-full blur-xl pointer-events-none transition-colors duration-500 z-0"
              style={{ backgroundColor: `${activeAct.accentColor}35` }}
            />
          </div>

          {/* Clean Absolute Text Panel Stack — Prevents Overlay Collisions Completely */}
          <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[340px]">
            {storyActs.map((act, idx) => {
              const isActive = idx === activeActIndex;
              return (
                <div
                  key={act.id}
                  className={`absolute inset-0 w-full h-full flex flex-col justify-center space-y-4 sm:space-y-5 transition-all duration-500 ease-out ${
                    isActive
                      ? 'opacity-100 translate-y-0 pointer-events-auto z-10'
                      : 'opacity-0 translate-y-6 pointer-events-none z-0'
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-[#E5E3DE] shadow-sm">
                      {act.icon}
                    </div>
                    <span className={`text-[10px] sm:text-xs font-black tracking-widest uppercase ${act.tagColor}`}>
                      {act.actNumber}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#1A1A1A] leading-[1.15]">
                    {act.title}
                  </h3>

                  <p className="text-xs sm:text-base text-[#3B3B3B] leading-relaxed font-normal max-w-xl">
                    {act.description}
                  </p>

                  <div className="pt-1 sm:pt-2">
                    <CubeButton href="/campus" color="crimson">
                      Explore Campus →
                    </CubeButton>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Footer Navigation Dots + Progress */}
        <div className="flex items-center justify-between border-t border-[#E5E3DE] pt-3 sm:pt-4 z-30 font-mono text-xs text-[#7A7A7A]">
          <div className="flex items-center gap-2">
            {storyActs.map((act, i) => (
              <div
                key={act.id}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === activeActIndex
                    ? 'w-8 bg-[#C41E2A]'
                    : 'w-2 bg-black/15'
                }`}
              />
            ))}
          </div>
          <span className="font-bold text-[#1A1A1A]">
            ACT 0{activeActIndex + 1} / 04
          </span>
        </div>

      </div>
    </section>
  );
}
