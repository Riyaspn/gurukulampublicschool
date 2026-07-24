'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function StatsSection() {
  return (
    <section className="stats-section py-12 sm:py-16 lg:py-20 bg-[#F2F1ED] border-b border-[#E5E3DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-8 text-center">

          <ScrollReveal delay={0}>
            <div className="stat-item space-y-1.5 sm:space-y-2 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/60 backdrop-blur-xl border border-[#C9982E]/15 shadow-sm h-full">
              <AnimatedCounter 
                value={1992} 
                duration={2500} 
                delay={100} 
                className="stat-number gold-gradient-text text-3xl sm:text-5xl lg:text-7xl font-black block" 
              />
              <div className="stat-label text-[10px] sm:text-xs lg:text-sm font-bold text-[#C9982E] tracking-widest uppercase">
                Founded Year
              </div>
              <p className="text-[10px] sm:text-xs text-[#7A7A7A] hidden sm:block">
                Sree Narayana Educational Trust
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="stat-item space-y-1.5 sm:space-y-2 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/60 backdrop-blur-xl border border-[#0E7C6B]/15 shadow-sm h-full">
              <AnimatedCounter 
                value={100} 
                suffix="%" 
                duration={2000} 
                delay={220} 
                className="stat-number teal-gradient-text text-3xl sm:text-5xl lg:text-7xl font-black block" 
              />
              <div className="stat-label text-[10px] sm:text-xs lg:text-sm font-bold text-[#0E7C6B] tracking-widest uppercase">
                CBSE Pass Rate
              </div>
              <p className="text-[10px] sm:text-xs text-[#7A7A7A] hidden sm:block">
                Class X & XII Board Records
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="stat-item space-y-1.5 sm:space-y-2 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/60 backdrop-blur-xl border border-[#C41E2A]/15 shadow-sm h-full">
              <AnimatedCounter 
                value={1} 
                suffix="st" 
                duration={1500} 
                delay={340} 
                className="stat-number crimson-gradient-text text-3xl sm:text-5xl lg:text-7xl font-black block" 
              />
              <div className="stat-label text-[10px] sm:text-xs lg:text-sm font-bold text-[#C41E2A] tracking-widest uppercase">
                ATL Lab in District
              </div>
              <p className="text-[10px] sm:text-xs text-[#7A7A7A] hidden sm:block">
                Sanctioned by NITI Aayog
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={360}>
            <div className="stat-item space-y-1.5 sm:space-y-2 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/60 backdrop-blur-xl border border-[#C9982E]/15 shadow-sm h-full">
              <AnimatedCounter 
                value={70} 
                suffix="%" 
                duration={2000} 
                delay={460} 
                className="stat-number gold-gradient-text text-3xl sm:text-5xl lg:text-7xl font-black block" 
              />
              <div className="stat-label text-[10px] sm:text-xs lg:text-sm font-bold text-[#C9982E] tracking-widest uppercase">
                Distinction Rate
              </div>
              <p className="text-[10px] sm:text-xs text-[#7A7A7A] hidden sm:block">
                Class X Board Excellence
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
