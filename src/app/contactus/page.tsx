import SpatialCard from '@/components/ui/SpatialCard';
import LineDraw from '@/components/ui/LineDraw';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { schoolInfo } from '@/data/schoolData';
import CubeButton from '@/components/ui/CubeButton';

export default function ContactUsPage() {
  return (
    <div className="page-container">
      <div className="max-w-6xl mx-auto">
        
        <div className="page-hero">
          <span className="page-hero-tag bg-[#C41E2A]/8 border border-[#C41E2A]/15 text-[#C41E2A]">
            Get In Touch
          </span>
          <h1>Contact Gurukulam</h1>
          <p>We welcome your inquiries, campus visit requests, and admission questions.</p>
          <LineDraw className="mt-4 max-w-lg mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <SpatialCard glowColor="crimson">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#1A1A1A]">School Office Details</h3>
              <div className="space-y-4 text-sm text-[#3B3B3B]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C41E2A] shrink-0 mt-1" />
                  <span>{schoolInfo.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#0E7C6B] shrink-0" />
                  <span>{schoolInfo.phone} / {schoolInfo.phoneSecondary}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#C9982E] shrink-0" />
                  <span>{schoolInfo.email}</span>
                </div>
              </div>
            </div>
          </SpatialCard>

          <SpatialCard glowColor="gold">
            <form className="space-y-5">
              <h3 className="text-2xl font-bold text-[#1A1A1A]">Send Us a Message</h3>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-[#C9982E]/20 text-[#1A1A1A] placeholder-[#7A7A7A] text-sm outline-none focus:border-[#C9982E] focus:shadow-sm transition"
              />
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-[#C9982E]/20 text-[#1A1A1A] placeholder-[#7A7A7A] text-sm outline-none focus:border-[#C9982E] focus:shadow-sm transition"
              />
              <textarea
                rows={4}
                placeholder="Your Message..."
                className="w-full p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-[#C9982E]/20 text-[#1A1A1A] placeholder-[#7A7A7A] text-sm outline-none focus:border-[#C9982E] focus:shadow-sm transition"
              />
              <div className="pt-2">
                <CubeButton color="gold">
                  Send Message <Send className="w-4 h-4" />
                </CubeButton>
              </div>
            </form>
          </SpatialCard>
        </div>

      </div>
    </div>
  );
}
