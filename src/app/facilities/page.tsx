import SpatialCard from '@/components/ui/SpatialCard';
import LineDraw from '@/components/ui/LineDraw';
import { Cpu, Microscope } from 'lucide-react';

export default function FacilitiesPage() {
  return (
    <div className="page-container">
      <div className="page-inner">
        
        <div className="page-hero">
          <span className="page-hero-tag bg-[#C41E2A]/8 border border-[#C41E2A]/15 text-[#C41E2A]">
            Infrastructure
          </span>
          <h1>Facilities & Laboratories</h1>
          <p>State-of-the-art facilities empowering academic and personal excellence.</p>
          <LineDraw className="mt-4 max-w-lg mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <SpatialCard glowColor="crimson">
            <div className="space-y-3">
              <Cpu className="w-8 h-8 text-[#C41E2A]" />
              <h3 className="text-2xl font-bold text-[#1A1A1A]">1st Atal Tinkering Lab (ATL)</h3>
              <p className="text-[#3B3B3B] text-sm leading-relaxed">
                Sanctioned by NITI Aayog, Government of India. Features 3D printers, robotics kits, IoT sensors, AI modules, and electronics workstations for student inventors.
              </p>
            </div>
          </SpatialCard>

          <SpatialCard glowColor="teal">
            <div className="space-y-3">
              <Microscope className="w-8 h-8 text-[#0E7C6B]" />
              <h3 className="text-2xl font-bold text-[#1A1A1A]">Science & Psychology Labs</h3>
              <p className="text-[#3B3B3B] text-sm leading-relaxed">
                Fully equipped separate laboratories for Physics, Chemistry, Biology, Mathematics, and Clinical Psychology with guided practical experimentation.
              </p>
            </div>
          </SpatialCard>
        </div>

      </div>
    </div>
  );
}
