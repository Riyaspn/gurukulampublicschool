import SpatialCard from '@/components/ui/SpatialCard';
import LineDraw from '@/components/ui/LineDraw';
import { Award, Sparkles } from 'lucide-react';

export default function OurHistoryPage() {
  return (
    <div className="page-container">
      <div className="page-inner">
        
        <div className="page-hero">
          <span className="page-hero-tag bg-[#C9982E]/10 border border-[#C9982E]/20 text-[#C9982E]">
            Established 1992 • Sree Narayana Trust
          </span>
          <h1>Our Heritage & Legacy</h1>
          <p>
            Over 30 years of nurturing leaders, visionaries, and compassionate citizens in Thrissur.
          </p>
          <LineDraw className="mt-4 max-w-lg mx-auto" />
        </div>

        <div className="section-gap">
          <SpatialCard glowColor="gold">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1A1A1A] flex items-center gap-2">
                <Award className="w-6 h-6 text-[#C9982E]" /> Genesis in 1992
              </h3>
              <p className="text-[#3B3B3B] text-base leading-relaxed">
                Gurukulam Public School was established in 1992 under the auspices of 15 visionaries belonging to Sree Narayana Educational Charitable Trust. The institution commenced its journey on M.G. Road, Thrissur with just 6 students under the direct guidance of founding patron Smt. K.K. Leelavathy.
              </p>
            </div>
          </SpatialCard>

          <SpatialCard glowColor="crimson">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1A1A1A] flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-[#C41E2A]" /> Expansion to Venginissery Nature Campus
              </h3>
              <p className="text-[#3B3B3B] text-base leading-relaxed">
                Recognizing the need for a serene, pollution-free educational habitat, the management acquired lush green acres in Venginissery (Paralam Panchayat) in 1997. Today, the school boasts modern architectural wings, scientific laboratories, sports grounds, and the district's first Atal Tinkering Laboratory.
              </p>
            </div>
          </SpatialCard>
        </div>

      </div>
    </div>
  );
}
