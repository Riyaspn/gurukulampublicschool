'use client';

import OtsukaAirflowCanvas3D from '@/components/3d/OtsukaAirflowCanvas3D';
import StickyVisionStory from '@/components/ui/StickyVisionStory';
import StatsSection from '@/components/ui/StatsSection';
import ProjectsGrid from '@/components/ui/ProjectsGrid';
import MarqueeTicker from '@/components/ui/MarqueeTicker';
import SpatialCard from '@/components/ui/SpatialCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import CubeButton from '@/components/ui/CubeButton';
import TextReveal from '@/components/ui/TextReveal';
import LineDraw from '@/components/ui/LineDraw';
import { schoolInfo, managerMessage, principalMessage } from '@/data/schoolData';
import { Trophy, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full bg-[#FAFAF8]">

      {/* 1. otsuka-air.jp Inspired 3D Airflow Scroll Hero (5 Chapters) */}
      <OtsukaAirflowCanvas3D />

      {/* 2. Announcements & Results Marquee Ticker */}
      <MarqueeTicker />

      {/* 3. otsuka-air.jp Style Sticky Image Storytelling */}
      <StickyVisionStory />

      {/* 4. Counter Stats Section */}
      <StatsSection />

      {/* 5. Campus Facilities Showcase */}
      <ProjectsGrid />

      {/* 6. CBSE 100% Result Showcase in Spatial Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 space-y-8 sm:space-y-12">
        <ScrollReveal>
          <div className="text-center space-y-2 sm:space-y-3">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#C41E2A]/8 border border-[#C41E2A]/15 text-[#C41E2A] font-extrabold text-[10px] sm:text-xs tracking-widest uppercase backdrop-blur-sm">
              Board Examination Results 2026
            </span>
            <TextReveal
              text="100% CBSE Pass Record"
              as="h2"
              className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A]"
              stagger={80}
            />
            <LineDraw className="max-w-md mx-auto pt-2" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <ScrollReveal delay={100}>
            <SpatialCard glowColor="teal">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2 sm:px-3 py-1 rounded bg-[#0E7C6B]/10 text-[#0E7C6B] text-[10px] sm:text-xs font-bold uppercase">
                    CBSE Class X Results
                  </span>
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-[#C9982E]" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1A1A1A]">
                  100% VICTORY PASS RATE
                </h3>
                <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 pt-1 sm:pt-2 text-center">
                  <div className="p-2 sm:p-3 lg:p-4 bg-[#F2F1ED] rounded-lg sm:rounded-xl border border-[#0E7C6B]/15">
                    <AnimatedCounter value={70} suffix="%" duration={2000} delay={200} className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0E7C6B] block" />
                    <div className="text-[9px] sm:text-xs text-[#7A7A7A] font-bold uppercase mt-0.5 sm:mt-1">Distinction</div>
                  </div>
                  <div className="p-2 sm:p-3 lg:p-4 bg-[#F2F1ED] rounded-lg sm:rounded-xl border border-[#C9982E]/15">
                    <AnimatedCounter value={27} suffix="%" duration={2000} delay={400} className="text-xl sm:text-2xl lg:text-3xl font-black text-[#C9982E] block" />
                    <div className="text-[9px] sm:text-xs text-[#7A7A7A] font-bold uppercase mt-0.5 sm:mt-1">First Class</div>
                  </div>
                  <div className="p-2 sm:p-3 lg:p-4 bg-[#F2F1ED] rounded-lg sm:rounded-xl border border-[#E5E3DE]">
                    <AnimatedCounter value={3} suffix="%" duration={1500} delay={600} className="text-xl sm:text-2xl lg:text-3xl font-black text-[#3B3B3B] block" />
                    <div className="text-[9px] sm:text-xs text-[#7A7A7A] font-bold uppercase mt-0.5 sm:mt-1">Second Class</div>
                  </div>
                </div>
              </div>
            </SpatialCard>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <SpatialCard glowColor="gold">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2 sm:px-3 py-1 rounded bg-[#C9982E]/10 text-[#C9982E] text-[10px] sm:text-xs font-bold uppercase">
                    CBSE Class XII Results
                  </span>
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-[#C9982E]" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1A1A1A]">
                  100% ACADEMIC EXCELLENCE
                </h3>
                <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 pt-1 sm:pt-2 text-center">
                  <div className="p-2 sm:p-3 lg:p-4 bg-[#F2F1ED] rounded-lg sm:rounded-xl border border-[#0E7C6B]/15">
                    <AnimatedCounter value={25} suffix="%" duration={2000} delay={200} className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0E7C6B] block" />
                    <div className="text-[9px] sm:text-xs text-[#7A7A7A] font-bold uppercase mt-0.5 sm:mt-1">Distinction</div>
                  </div>
                  <div className="p-2 sm:p-3 lg:p-4 bg-[#F2F1ED] rounded-lg sm:rounded-xl border border-[#C9982E]/15">
                    <AnimatedCounter value={56} suffix="%" duration={2000} delay={400} className="text-xl sm:text-2xl lg:text-3xl font-black text-[#C9982E] block" />
                    <div className="text-[9px] sm:text-xs text-[#7A7A7A] font-bold uppercase mt-0.5 sm:mt-1">First Class</div>
                  </div>
                  <div className="p-2 sm:p-3 lg:p-4 bg-[#F2F1ED] rounded-lg sm:rounded-xl border border-[#E5E3DE]">
                    <AnimatedCounter value={19} suffix="%" duration={2000} delay={600} className="text-xl sm:text-2xl lg:text-3xl font-black text-[#3B3B3B] block" />
                    <div className="text-[9px] sm:text-xs text-[#7A7A7A] font-bold uppercase mt-0.5 sm:mt-1">Second Class</div>
                  </div>
                </div>
              </div>
            </SpatialCard>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Leadership Messages in Spatial Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16 lg:pb-20 space-y-8 sm:space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <ScrollReveal delay={0} direction="left">
            <SpatialCard glowColor="gold">
              <div className="space-y-3 sm:space-y-4">
                <span className="px-2 sm:px-3 py-1 rounded bg-[#C9982E]/10 text-[#C9982E] text-[10px] sm:text-xs font-extrabold uppercase">
                  Manager&apos;s Desk
                </span>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1A1A1A]">
                  Message from Manager
                </h3>
                <p className="text-[#3B3B3B] text-xs sm:text-sm leading-relaxed line-clamp-4 sm:line-clamp-6">
                  {managerMessage}
                </p>
                <Link
                  href="/management"
                  className="inline-flex items-center gap-2 text-[#C9982E] hover:text-[#A07A20] text-xs sm:text-sm font-extrabold pt-1 sm:pt-2 transition"
                >
                  Read Full Message <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </SpatialCard>
          </ScrollReveal>

          <ScrollReveal delay={150} direction="right">
            <SpatialCard glowColor="teal">
              <div className="space-y-3 sm:space-y-4">
                <span className="px-2 sm:px-3 py-1 rounded bg-[#0E7C6B]/10 text-[#0E7C6B] text-[10px] sm:text-xs font-bold uppercase">
                  Principal&apos;s Desk
                </span>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1A1A1A]">
                  Welcome to Gurukulam
                </h3>
                <p className="text-[#3B3B3B] text-xs sm:text-sm leading-relaxed line-clamp-4 sm:line-clamp-6">
                  {principalMessage}
                </p>
                <Link
                  href="/principal"
                  className="inline-flex items-center gap-2 text-[#0E7C6B] hover:text-[#0A5E52] text-xs sm:text-sm font-bold pt-1 sm:pt-2 transition"
                >
                  Read Principal Desk <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </SpatialCard>
          </ScrollReveal>
        </div>

        {/* 8. Online Admission CTA Banner */}
        <ScrollReveal delay={100} distance="60px">
          <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-[#C41E2A] via-[#E8343F] to-[#C41E2A] p-5 sm:p-8 md:p-10 lg:p-12 text-white shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 lg:gap-8">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/20 text-white font-extrabold text-[10px] sm:text-xs uppercase backdrop-blur-sm">
                Academic Year 2026-27
              </span>
              <TextReveal
                text="Admissions Now Open (KG to Class XI)"
                as="h3"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black"
                stagger={50}
                delay={200}
              />
              <p className="text-white/80 font-medium text-xs sm:text-sm lg:text-base">
                Fill out the official online application form to secure your child&apos;s seat.
              </p>
            </div>
            <CubeButton href={schoolInfo.admissionFormLink} color="white" className="shrink-0">
              Apply Online Form <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline" />
            </CubeButton>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
