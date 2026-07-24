import SpatialCard from '@/components/ui/SpatialCard';
import LineDraw from '@/components/ui/LineDraw';
import { schoolInfo, principalMessage } from '@/data/schoolData';

export default function PrincipalPage() {
  return (
    <div className="page-container">
      <div className="page-inner">
        
        <div className="page-hero">
          <span className="page-hero-tag bg-[#0E7C6B]/10 border border-[#0E7C6B]/20 text-[#0E7C6B]">
            Academic Leadership
          </span>
          <h1>Principal's Message</h1>
          <p>{schoolInfo.principal}</p>
          <LineDraw className="mt-4 max-w-lg mx-auto" />
        </div>

        <div className="section-gap">
          <SpatialCard glowColor="teal">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded bg-[#0E7C6B]/10 text-[#0E7C6B] text-xs font-bold uppercase">
                Academic Desk
              </span>
              <h2 className="text-3xl font-extrabold text-[#1A1A1A]">Welcome to Gurukulam</h2>
              <p className="text-[#3B3B3B] text-base leading-relaxed">{principalMessage}</p>
            </div>
          </SpatialCard>
        </div>

      </div>
    </div>
  );
}
