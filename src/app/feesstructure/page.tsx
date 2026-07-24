import SpatialCard from '@/components/ui/SpatialCard';
import LineDraw from '@/components/ui/LineDraw';
import { schoolInfo } from '@/data/schoolData';
import { CreditCard, ExternalLink } from 'lucide-react';
import CubeButton from '@/components/ui/CubeButton';

export default function FeesStructurePage() {
  return (
    <div className="page-container">
      <div className="page-inner">
        
        <div className="page-hero">
          <span className="page-hero-tag bg-[#C9982E]/10 border border-[#C9982E]/20 text-[#C9982E]">
            Transparent Fee Policy
          </span>
          <h1>Fees Structure</h1>
          <p>Affordable quality CBSE education governed by Trust norms.</p>
          <LineDraw className="mt-4 max-w-lg mx-auto" />
        </div>

        <div className="section-gap">
          <SpatialCard glowColor="gold">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1A1A1A] flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-[#C9982E]" /> Online Fee Payment Portal
              </h3>
              <p className="text-[#3B3B3B] text-sm leading-relaxed">
                Parents can conveniently view term fee breakdowns and complete online fee transactions through our e-school portal.
              </p>
              <div className="pt-2">
                <CubeButton href={schoolInfo.admissionFormLink} color="gold">
                  Pay School Fees Online <ExternalLink className="w-4 h-4" />
                </CubeButton>
              </div>
            </div>
          </SpatialCard>
        </div>

      </div>
    </div>
  );
}
