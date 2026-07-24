import SpatialCard from '@/components/ui/SpatialCard';
import LineDraw from '@/components/ui/LineDraw';
import { schoolInfo } from '@/data/schoolData';
import { ExternalLink, CheckCircle } from 'lucide-react';
import CubeButton from '@/components/ui/CubeButton';

export default function ProcedurePage() {
  return (
    <div className="page-container">
      <div className="page-inner">
        
        <div className="page-hero">
          <span className="page-hero-tag bg-[#C41E2A]/8 border border-[#C41E2A]/15 text-[#C41E2A]">
            Academic Year 2026-27
          </span>
          <h1>Admission Procedure</h1>
          <p>Simple 3-step online application process for Pre-KG to Class XI.</p>
          <LineDraw className="mt-4 max-w-lg mx-auto" />
        </div>

        <div className="section-gap">
          <SpatialCard glowColor="crimson">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1A1A1A] flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-[#C41E2A]" /> Step 1: Fill Online Application Form
              </h3>
              <p className="text-[#3B3B3B] text-sm leading-relaxed">
                Parents can fill out the official digital registration form directly on the e-school portal.
              </p>
              <div className="pt-2">
                <CubeButton href={schoolInfo.admissionFormLink} color="crimson">
                  Open Online Application Form <ExternalLink className="w-4 h-4" />
                </CubeButton>
              </div>
            </div>
          </SpatialCard>
        </div>

      </div>
    </div>
  );
}
