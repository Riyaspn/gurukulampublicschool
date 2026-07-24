import SpatialCard from '@/components/ui/SpatialCard';
import LineDraw from '@/components/ui/LineDraw';
import { ShieldCheck } from 'lucide-react';

export default function RulesPage() {
  return (
    <div className="page-container">
      <div className="page-inner">
        
        <div className="page-hero">
          <span className="page-hero-tag bg-[#C9982E]/10 border border-[#C9982E]/20 text-[#C9982E]">
            Discipline & Standards
          </span>
          <h1>Rules & Regulations</h1>
          <p>Maintaining discipline, punctuality, and mutual respect.</p>
          <LineDraw className="mt-4 max-w-lg mx-auto" />
        </div>

        <div className="section-gap">
          <SpatialCard glowColor="gold">
            <div className="space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#C9982E]" />
              <h3 className="text-2xl font-bold text-[#1A1A1A]">Code of Conduct</h3>
              <p className="text-[#3B3B3B] text-sm leading-relaxed">
                Students are expected to arrive punctually, wear prescribed neat uniform, maintain academic honesty, and participate actively in co-curricular programs.
              </p>
            </div>
          </SpatialCard>
        </div>

      </div>
    </div>
  );
}
