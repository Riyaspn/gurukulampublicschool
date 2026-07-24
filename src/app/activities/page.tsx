import SpatialCard from '@/components/ui/SpatialCard';
import LineDraw from '@/components/ui/LineDraw';
import { Dumbbell } from 'lucide-react';

export default function ActivitiesPage() {
  return (
    <div className="page-container">
      <div className="page-inner">
        
        <div className="page-hero">
          <span className="page-hero-tag bg-[#0E7C6B]/10 border border-[#0E7C6B]/20 text-[#0E7C6B]">
            Co-Curricular
          </span>
          <h1>Sports & Co-Curricular Activities</h1>
          <p>Yoga, Karate, Athletics, Abacus, Chess, Music, Violin & Guitar.</p>
          <LineDraw className="mt-4 max-w-lg mx-auto" />
        </div>

        <div className="section-gap">
          <SpatialCard glowColor="teal">
            <div className="space-y-3">
              <Dumbbell className="w-8 h-8 text-[#0E7C6B]" />
              <h3 className="text-2xl font-bold text-[#1A1A1A]">Sports & Performing Arts</h3>
              <p className="text-[#3B3B3B] text-sm leading-relaxed">
                Professional coaching in Karate self-defense, Skating, Chess tournaments, Abacus mental arithmetic, Classical Music, and Instrumental Music (Violin & Guitar).
              </p>
            </div>
          </SpatialCard>
        </div>

      </div>
    </div>
  );
}
