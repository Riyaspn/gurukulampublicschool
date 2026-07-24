import SpatialCard from '@/components/ui/SpatialCard';
import LineDraw from '@/components/ui/LineDraw';
import { BookOpen } from 'lucide-react';

export default function CurriculumPage() {
  return (
    <div className="page-container">
      <div className="page-inner">
        
        <div className="page-hero">
          <span className="page-hero-tag bg-[#C41E2A]/8 border border-[#C41E2A]/15 text-[#C41E2A]">
            Academic Structure
          </span>
          <h1>CBSE Curriculum & Remedial Coaching</h1>
          <p>NCERT Aligned Curriculum from Kindergarten to Senior Secondary Level.</p>
          <LineDraw className="mt-4 max-w-lg mx-auto" />
        </div>

        <div className="section-gap">
          <SpatialCard glowColor="crimson">
            <div className="space-y-3">
              <BookOpen className="w-8 h-8 text-[#C41E2A]" />
              <h3 className="text-2xl font-bold text-[#1A1A1A]">Comprehensive Learning Framework</h3>
              <p className="text-[#3B3B3B] text-sm leading-relaxed">
                Offers English, Malayalam, Hindi, Mathematics, Science, Social Science, Computer Science, and Artificial Intelligence, accompanied by individual remedial coaching for academic support.
              </p>
            </div>
          </SpatialCard>
        </div>

      </div>
    </div>
  );
}
