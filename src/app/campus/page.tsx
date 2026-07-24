import SpatialCard from '@/components/ui/SpatialCard';
import LineDraw from '@/components/ui/LineDraw';
import { Building } from 'lucide-react';

export default function CampusPage() {
  return (
    <div className="page-container">
      <div className="page-inner">
        
        <div className="page-hero">
          <span className="page-hero-tag bg-[#0E7C6B]/10 border border-[#0E7C6B]/20 text-[#0E7C6B]">
            Serene Environment
          </span>
          <h1>In Campus Experience</h1>
          <p>Lush green acres in Venginissery away from city noise and pollution.</p>
          <LineDraw className="mt-4 max-w-lg mx-auto" />
        </div>

        <div className="section-gap">
          <SpatialCard glowColor="teal">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1A1A1A] flex items-center gap-2">
                <Building className="w-6 h-6 text-[#0E7C6B]" /> Venginissery Main Academic Wing
              </h3>
              <p className="text-[#3B3B3B] text-base leading-relaxed">
                Equipped with smart classrooms, digital audio-visual learning aids, science laboratories, computer labs, library, and dedicated spaces for arts and yoga.
              </p>
            </div>
          </SpatialCard>
        </div>

      </div>
    </div>
  );
}
