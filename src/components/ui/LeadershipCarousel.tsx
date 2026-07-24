'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface LeaderItem {
  id: string;
  name: string;
  role: string;
  badge: string;
  quote: string;
  imageUrl: string;
  accentColor: 'crimson' | 'gold' | 'teal';
}

const leadersData: LeaderItem[] = [
  {
    id: '1',
    name: 'Smt. K.K. Leelavathy',
    role: 'Founding Patron & Educationist',
    badge: 'Pioneer (1992)',
    quote: 'Education is the light that transforms young minds into visionary leaders for society.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    accentColor: 'gold',
  },
  {
    id: '2',
    name: 'Sri. K. V. Mohanan',
    role: 'Managing Trustee, Sree Narayana Trust',
    badge: 'Trustee Leadership',
    quote: 'Guiding Gurukulam with Sree Narayana Guru’s principle: Gain Freedom Through Education.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    accentColor: 'crimson',
  },
  {
    id: '3',
    name: 'Smt. Radhika N.',
    role: 'Principal & Senior Educator',
    badge: 'Academic Desk',
    quote: 'Fostering 100% CBSE academic success with personal mentorship and emotional psychological care.',
    imageUrl: 'https://images.unsplash.com/photo-1580894732413-80642a8b3d68?auto=format&fit=crop&w=800&q=80',
    accentColor: 'teal',
  },
  {
    id: '4',
    name: 'Dr. P. S. Sudhakaran',
    role: 'Director of Science & Innovation',
    badge: 'ATL Tinkering Lead',
    quote: 'Bringing 3D printing, AI, and robotics into the daily hands of everyday school learners.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    accentColor: 'crimson',
  },
];

export default function LeadershipCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 320;
    const scrollAmount = direction === 'left' ? -cardWidth - 24 : cardWidth + 24;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const badgeColors = {
    crimson: 'bg-[#C41E2A]/10 text-[#C41E2A] border-[#C41E2A]/20',
    gold: 'bg-[#C9982E]/10 text-[#C9982E] border-[#C9982E]/20',
    teal: 'bg-[#0E7C6B]/10 text-[#0E7C6B] border-[#0E7C6B]/20',
  };

  const cardBorderColors = {
    crimson: 'hover:border-[#C41E2A]/40',
    gold: 'hover:border-[#C9982E]/40',
    teal: 'hover:border-[#0E7C6B]/40',
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#FAFAF8] overflow-hidden border-t border-[#E5E3DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">

        {/* Section Header with Controls */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 border-b border-[#E5E3DE] pb-6 sm:pb-8">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#C41E2A]/8 border border-[#C41E2A]/15 text-[#C41E2A] font-extrabold text-[10px] sm:text-xs tracking-widest uppercase">
                Otsuka-Style Voices Showcase
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A]">
                Leadership & Visionaries
              </h2>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleScroll('left')}
                className="p-3 rounded-full bg-white border border-[#E5E3DE] text-[#1A1A1A] hover:bg-[#C41E2A] hover:text-white hover:border-[#C41E2A] transition shadow-sm"
                aria-label="Previous Leader"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="p-3 rounded-full bg-white border border-[#E5E3DE] text-[#1A1A1A] hover:bg-[#C41E2A] hover:text-white hover:border-[#C41E2A] transition shadow-sm"
                aria-label="Next Leader"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        >
          {leadersData.map((item, idx) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[290px] sm:w-[360px] md:w-[420px] group"
            >
              <div
                className={`h-full rounded-2xl sm:rounded-3xl bg-white/70 backdrop-blur-xl border border-[#E5E3DE] p-5 sm:p-7 shadow-lg transition-all duration-300 ${cardBorderColors[item.accentColor]} flex flex-col justify-between space-y-6`}
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider border ${badgeColors[item.accentColor]}`}
                  >
                    {item.badge}
                  </span>
                  <Quote className="w-6 h-6 text-[#C9982E]/40" />
                </div>

                {/* Portrait Photo */}
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] border border-[#E5E3DE]">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider opacity-80 block">
                      {item.role}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black">{item.name}</h3>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-[#3B3B3B] text-xs sm:text-sm leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
