import SpatialCard from '@/components/ui/SpatialCard';
import LineDraw from '@/components/ui/LineDraw';
import { GraduationCap, Send } from 'lucide-react';
import CubeButton from '@/components/ui/CubeButton';

export default function AlumniRegistrationPage() {
  return (
    <div className="page-container">
      <div className="page-inner">
        
        <div className="page-hero">
          <span className="page-hero-tag bg-[#0E7C6B]/10 border border-[#0E7C6B]/20 text-[#0E7C6B]">
            Alumni Network
          </span>
          <h1>Alumni Registration</h1>
          <p>Reconnect with your Alma Mater and fellow Gurukulam graduates.</p>
          <LineDraw className="mt-4 max-w-lg mx-auto" />
        </div>

        <div className="section-gap">
          <SpatialCard glowColor="teal">
            <form className="space-y-5">
              <h3 className="text-2xl font-bold text-[#1A1A1A] flex items-center gap-2 mb-2">
                <GraduationCap className="w-6 h-6 text-[#0E7C6B]" /> Alumni Information
              </h3>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-[#0E7C6B]/20 text-[#1A1A1A] placeholder-[#7A7A7A] text-sm outline-none focus:border-[#0E7C6B] focus:shadow-sm transition"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Passout Year (e.g. 2018)"
                  className="w-full p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-[#0E7C6B]/20 text-[#1A1A1A] placeholder-[#7A7A7A] text-sm outline-none focus:border-[#0E7C6B] focus:shadow-sm transition"
                />
                <input
                  type="text"
                  placeholder="Class X / XII Batch"
                  className="w-full p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-[#0E7C6B]/20 text-[#1A1A1A] placeholder-[#7A7A7A] text-sm outline-none focus:border-[#0E7C6B] focus:shadow-sm transition"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-[#0E7C6B]/20 text-[#1A1A1A] placeholder-[#7A7A7A] text-sm outline-none focus:border-[#0E7C6B] focus:shadow-sm transition"
              />
              <input
                type="tel"
                placeholder="Mobile Phone Number"
                className="w-full p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-[#0E7C6B]/20 text-[#1A1A1A] placeholder-[#7A7A7A] text-sm outline-none focus:border-[#0E7C6B] focus:shadow-sm transition"
              />
              <div className="pt-2">
                <CubeButton color="teal">
                  Submit Registration <Send className="w-4 h-4" />
                </CubeButton>
              </div>
            </form>
          </SpatialCard>
        </div>

      </div>
    </div>
  );
}
