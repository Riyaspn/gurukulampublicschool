import SpatialCard from '@/components/ui/SpatialCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LineDraw from '@/components/ui/LineDraw';
import { Users, GraduationCap, Brain, Cpu, Trophy, BookOpen } from 'lucide-react';

const facultyList = [
  {
    name: 'Smt. Radhika N.',
    role: 'Principal & Senior Academic Officer',
    qualification: 'M.Sc, M.Ed (30+ Yrs Exp)',
    dept: 'Academic Leadership',
    icon: GraduationCap,
    color: 'crimson',
    image: 'https://images.unsplash.com/photo-1580894732413-80642a8b3d68?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Clinical Guidance Cell',
    role: 'Full-Time Clinical Psychologist',
    qualification: 'M.Sc Clinical Psychology',
    dept: 'Student Well-being',
    icon: Brain,
    color: 'teal',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'ATL & Innovation Team',
    role: 'ATL Tinkering & Robotics Lead',
    qualification: 'B.Tech Robotics / AI Trainer',
    dept: 'STEM & Atal Lab',
    icon: Cpu,
    color: 'gold',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Senior Science & Math Wing',
    role: 'PG Teaching Specialists',
    qualification: 'M.Sc, B.Ed (Physics, Chem, Bio, Math)',
    dept: 'Senior Secondary',
    icon: BookOpen,
    color: 'crimson',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Language & Humanities Dept',
    role: 'English, Malayalam & Hindi Faculty',
    qualification: 'M.A, B.Ed Language Experts',
    dept: 'Humanities',
    icon: Users,
    color: 'teal',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Sports & Co-Curricular Coaches',
    role: 'Physical Education & Karate Masters',
    qualification: 'B.P.Ed & Black Belt Certified',
    dept: 'Sports & Fitness',
    icon: Trophy,
    color: 'gold',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80',
  },
];

export default function StaffPage() {
  return (
    <div className="page-container">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Page Hero */}
        <ScrollReveal>
          <div className="page-hero">
            <span className="page-hero-tag bg-[#C41E2A]/8 border border-[#C41E2A]/15 text-[#C41E2A]">
              Educators & Caregivers
            </span>
            <h1>Faculty & Staff</h1>
            <p>Dedicated post-graduate educators, STEM mentors, and clinical psychologists.</p>
            <LineDraw className="mt-4 max-w-lg mx-auto" />
          </div>
        </ScrollReveal>

        {/* Overview Banner */}
        <ScrollReveal delay={100}>
          <SpatialCard glowColor="crimson" className="p-6 sm:p-8">
            <div className="space-y-3">
              <span className="px-3 py-1 rounded bg-[#C41E2A]/10 text-[#C41E2A] text-xs font-extrabold uppercase">
                CBSE Certified Educators
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A]">Highly Qualified Teaching & Mentoring Team</h2>
              <p className="text-[#3B3B3B] text-base leading-relaxed">
                Our faculty comprises post-graduate subject specialists, M.Sc, M.A, B.Ed certified teachers, certified ATL robotics trainers, and full-time clinical psychologists committed to every child&apos;s academic success and emotional well-being.
              </p>
            </div>
          </SpatialCard>
        </ScrollReveal>

        {/* Faculty & Staff Departmental Showcase Grid */}
        <div className="space-y-6 sm:space-y-8">
          <ScrollReveal>
            <div className="border-b border-[#E5E3DE] pb-4">
              <span className="text-[#0E7C6B] font-extrabold text-xs tracking-widest uppercase">
                Departmental Divisions
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] mt-1">
                Our Academic & Mentoring Wings
              </h3>
              <LineDraw className="mt-3" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyList.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <SpatialCard glowColor={item.color as 'crimson' | 'gold' | 'teal'} className="p-5 h-full flex flex-col justify-between group">
                    <div className="space-y-4">
                      <div className="relative overflow-hidden rounded-xl aspect-[16/10] border border-[#E5E3DE]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <IconComp className="w-4 h-4 text-[#C41E2A]" />
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#C41E2A]">
                            {item.dept}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-[#1A1A1A]">{item.name}</h4>
                        <p className="text-xs text-[#0E7C6B] font-semibold">{item.role}</p>
                        <p className="text-xs text-[#7A7A7A] mt-1">{item.qualification}</p>
                      </div>
                    </div>
                  </SpatialCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
