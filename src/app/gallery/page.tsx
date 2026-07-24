'use client';

import SpatialCard from '@/components/ui/SpatialCard';
import LineDraw from '@/components/ui/LineDraw';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function GalleryPage() {
  const images = [
    {
      title: 'Atal Tinkering Lab (ATL)',
      category: 'Robotics & STEM',
      aspect: 'aspect-[4/3]',
      url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      color: 'crimson',
    },
    {
      title: 'Advanced Chemistry & Physics Labs',
      category: 'Science Facilities',
      aspect: 'aspect-[3/4]',
      url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
      color: 'teal',
    },
    {
      title: 'Annual Day Cultural Performances',
      category: 'School Events',
      aspect: 'aspect-[16/10]',
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
      color: 'gold',
    },
    {
      title: 'Annual Sports Meet & Karate Coaching',
      category: 'Sports & Fitness',
      aspect: 'aspect-[4/3]',
      url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
      color: 'crimson',
    },
    {
      title: 'Venginissery Green Campus Grounds',
      category: 'Nature Habitat',
      aspect: 'aspect-[3/4]',
      url: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80',
      color: 'teal',
    },
    {
      title: 'Digital Smart Classrooms',
      category: 'E-Learning',
      aspect: 'aspect-[16/10]',
      url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
      color: 'gold',
    },
  ];

  return (
    <div className="page-container">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Page Hero */}
        <ScrollReveal>
          <div className="page-hero">
            <span className="page-hero-tag bg-[#C41E2A]/8 border border-[#C41E2A]/15 text-[#C41E2A]">
              Campus Life Gallery
            </span>
            <h1>Photo & Campus Gallery</h1>
            <p>Visual highlights of our state-of-the-art laboratories, sports, and cultural milestones.</p>
            <LineDraw className="mt-4 max-w-lg mx-auto" />
          </div>
        </ScrollReveal>

        {/* Staggered Masonry Photo Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <ScrollReveal key={idx} delay={idx * 120} className="break-inside-avoid">
              <SpatialCard
                glowColor={img.color as 'crimson' | 'gold' | 'teal'}
                className="p-4 group cursor-pointer"
              >
                <div className="space-y-3">
                  <div className={`overflow-hidden rounded-xl border border-[#E5E3DE] ${img.aspect}`}>
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C41E2A]">
                      {img.category}
                    </span>
                    <h4 className="text-lg font-extrabold text-[#1A1A1A] group-hover:text-[#C41E2A] transition mt-0.5">
                      {img.title}
                    </h4>
                  </div>
                </div>
              </SpatialCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  );
}
