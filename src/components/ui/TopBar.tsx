'use client';

import Link from 'next/link';
import { Phone, GraduationCap } from 'lucide-react';
import { schoolInfo } from '@/data/schoolData';

export default function TopBar() {
  return (
    <div className="w-full bg-[#111111] border-b border-white/10 text-white/90 z-50">
      {/* Mobile: single centered row */}
      <div className="flex items-center justify-end px-3 sm:px-6 lg:px-8 py-1.5 sm:py-2 gap-2 max-w-[1920px] mx-auto">
        {/* Right — Quick Links */}
        <div className="hidden xs:flex items-center gap-2 sm:gap-4 shrink-0">
          <a
            href={schoolInfo.admissionFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block bg-[#C41E2A]/20 hover:bg-[#C41E2A]/30 text-[#E8343F] border border-[#C41E2A]/40 px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold transition whitespace-nowrap"
          >
            Online Fee Payment
          </a>
          <Link
            href="/alumnireg"
            className="hover:text-[#E6B94D] transition flex items-center gap-1 text-[10px] sm:text-xs font-semibold whitespace-nowrap"
          >
            <GraduationCap className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> ALUMNI
          </Link>
          <Link
            href="/contactus"
            className="hover:text-[#E6B94D] transition flex items-center gap-1 text-[10px] sm:text-xs font-semibold whitespace-nowrap"
          >
            <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}
