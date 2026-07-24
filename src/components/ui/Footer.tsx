'use client';

import Link from 'next/link';
import { Award, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { schoolInfo } from '@/data/schoolData';

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] border-t border-white/10 text-white/60 py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 relative sm:sticky sm:bottom-0 z-0">
      <div className="max-w-7xl mx-auto">
        {/* Grid: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">

          {/* Brand Column */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src="/images/logo.png"
                alt="Gurukulam Public School Logo"
                className="h-10 sm:h-12 w-auto object-contain brightness-110"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                  const fallback = (e.target as HTMLElement).nextElementSibling;
                  if (fallback) (fallback as HTMLElement).style.display = 'flex';
                }}
              />
              <div className="hidden items-center gap-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#C41E2A] to-[#9B1722] flex items-center justify-center font-black text-white text-base sm:text-lg shadow-lg">
                  G
                </div>
                <div>
                  <div className="font-black text-white text-sm sm:text-base tracking-wider">
                    GURUKULAM
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-bold text-[#C41E2A] uppercase tracking-widest">
                    PUBLIC SCHOOL
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[11px] sm:text-xs text-white/50 leading-relaxed font-light max-w-xs">
              Founded in 1992 under Sree Narayana Educational Charitable Trust. CBSE Affiliation
              No. {schoolInfo.affiliationNo}. First ATL Lab in Thrissur District by NITI Aayog.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 sm:space-y-3">
            <h4 className="text-[10px] sm:text-xs font-black text-[#C41E2A] uppercase tracking-widest">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs font-semibold">
              <li>
                <Link href="/" className="hover:text-[#E6B94D] transition">Home</Link>
              </li>
              <li>
                <Link href="/ourhistory" className="hover:text-[#E6B94D] transition">Our History (1992)</Link>
              </li>
              <li>
                <Link href="/campus" className="hover:text-[#E6B94D] transition">In Campus</Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-[#E6B94D] transition">Facilities & ATL Lab</Link>
              </li>
              <li>
                <Link href="/mandatory_disclosure" className="hover:text-[#E6B94D] transition">Mandatory Disclosure</Link>
              </li>
            </ul>
          </div>

          {/* Academics & Admission */}
          <div className="space-y-2 sm:space-y-3">
            <h4 className="text-[10px] sm:text-xs font-black text-[#C9982E] uppercase tracking-widest">
              Academics & Admission
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs font-semibold">
              <li>
                <Link href="/curriculum" className="hover:text-[#C41E2A] transition">
                  Curriculum & Subjects
                </Link>
              </li>
              <li>
                <Link href="/procedure" className="hover:text-[#C41E2A] transition">
                  Admission Procedure
                </Link>
              </li>
              <li>
                <Link href="/feesstructure" className="hover:text-[#C41E2A] transition">
                  Fees Structure
                </Link>
              </li>
              <li>
                <a
                  href={schoolInfo.admissionFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C41E2A] transition flex items-center gap-1 text-[#C9982E]"
                >
                  Online Admission Form <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 sm:space-y-3">
            <h4 className="text-[10px] sm:text-xs font-black text-[#0E7C6B] uppercase tracking-widest">
              Contact Information
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-[11px] sm:text-xs text-white/60">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0E7C6B] shrink-0 mt-0.5" />
                <span>{schoolInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C41E2A] shrink-0" />
                <span className="break-all">{schoolInfo.phone} / {schoolInfo.phoneSecondary}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9982E] shrink-0" />
                <span className="break-all">{schoolInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 sm:pt-10 lg:pt-12 mt-8 sm:mt-10 lg:mt-12 border-t border-white/10 text-center text-[10px] sm:text-xs text-white/40 font-medium">
          © {new Date().getFullYear()} Gurukulam Public School, Thrissur. All Rights Reserved.
          CBSE Affiliation No. {schoolInfo.affiliationNo}.
        </div>
      </div>
    </footer>
  );
}
