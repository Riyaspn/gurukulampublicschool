import SpatialCard from '@/components/ui/SpatialCard';
import LineDraw from '@/components/ui/LineDraw';
import { Video } from 'lucide-react';

export default function VideoGalleryPage() {
  return (
    <div className="page-container">
      <div className="page-inner">
        
        <div className="page-hero">
          <span className="page-hero-tag bg-[#C9982E]/10 border border-[#C9982E]/20 text-[#C9982E]">
            Video Showcase
          </span>
          <h1>Video Gallery</h1>
          <p>Campus tours, ATL Tinkering Lab demonstrations, and event performances.</p>
          <LineDraw className="mt-4 max-w-lg mx-auto" />
        </div>

        <div className="section-gap">
          <SpatialCard glowColor="gold">
            <div className="space-y-4 text-center py-8">
              <Video className="w-12 h-12 text-[#C9982E] mx-auto" />
              <h3 className="text-2xl font-bold text-[#1A1A1A]">Gurukulam Video Archive</h3>
              <p className="text-[#3B3B3B] text-sm max-w-md mx-auto">
                Video highlights of annual day functions, ATL robotics competitions, and sports day meets.
              </p>
            </div>
          </SpatialCard>
        </div>

      </div>
    </div>
  );
}
