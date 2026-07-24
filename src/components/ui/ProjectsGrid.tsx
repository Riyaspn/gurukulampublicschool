'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import CubeButton from '@/components/ui/CubeButton';
import TextReveal from '@/components/ui/TextReveal';
import LineDraw from '@/components/ui/LineDraw';

const facilitiesList = [
  {
    title: 'Atal Tinkering Laboratory (ATL Lab)',
    category: 'STEM & Robotics • NITI Aayog Sanctioned',
    imageUrl:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    link: '/facilities',
  },
  {
    title: 'Science & Clinical Psychology Labs',
    category: 'Physics, Chem, Bio & Psych Labs',
    imageUrl:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80',
    link: '/campus',
  },
  {
    title: 'Gurukulam Nursery School Campus',
    category: 'Dedicated Pre-KG, LKG & UKG Wing',
    imageUrl:
      'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1000&q=80',
    link: '/campus',
  },
  {
    title: 'Sports, Martial Arts & Karate',
    category: 'Volleyball, Basketball, Yoga, Karate',
    imageUrl:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80',
    link: '/activities',
  },
];

export default function ProjectsGrid() {
  return (
    <section className="projects-grid-section py-12 sm:py-16 lg:py-20 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">

        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 border-b border-[#E5E3DE] pb-6 sm:pb-8">
            <div>
              <span className="text-[#C41E2A] font-extrabold text-[10px] sm:text-xs tracking-widest uppercase">
                Campus Facilities Showcase
              </span>
              <TextReveal
                text="World-Class Infrastructure"
                as="h2"
                className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] mt-1"
                stagger={80}
              />
            </div>
            <CubeButton href="/facilities" color="crimson" className="shrink-0 self-start sm:self-auto">
              View All Facilities <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline" />
            </CubeButton>
          </div>
          <LineDraw className="mt-4" />
        </ScrollReveal>

        {/* Grid — 1 col on mobile, 2 on md+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {facilitiesList.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <Link href={item.link} className="project-card group block">
                <div className="project-image-wrapper rounded-xl sm:rounded-2xl overflow-hidden border border-[#E5E3DE] mb-3 sm:mb-4 shadow-sm">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="project-image w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] sm:text-xs font-bold text-[#C41E2A] tracking-wider uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1A1A1A] group-hover:text-[#C41E2A] transition">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
