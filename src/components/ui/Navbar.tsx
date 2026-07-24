'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ExternalLink } from 'lucide-react';
import { navLinks, schoolInfo } from '@/data/schoolData';

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        // The 3D scroll hero section pins for 5000px on desktop (3000px on mobile).
        // Keep navbar 100% transparent until the hero pin unpins and reaches the Marquee Ticker.
        const isMobile = window.innerWidth < 768;
        const threshold = isMobile ? 2900 : 4900;
        setScrolled(window.scrollY > threshold);
      } else {
        // On sub-pages, show frosted glass after 40px scroll
        setScrolled(window.scrollY > 40);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return (
    <header
      className="sticky top-0 z-40 w-full transition-all duration-500 ease-out"
      style={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0)',
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(0px) saturate(100%)',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(0px) saturate(100%)',
        borderBottom: scrolled ? '1px solid rgba(229,227,222,1)' : '1px solid rgba(229,227,222,0)',
        boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.08), 0 4px 24px rgba(0,0,0,0.04)' : 'none',
      }}
    >
      <div className="max-w-[1920px] mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 lg:h-20 flex items-center justify-between">

        {/* School Logo & Title */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <div className="relative flex items-center justify-center">
            {/* Real Logo Image — Places at public/images/logo.png */}
            <img
              src="/images/logo.png"
              alt="Gurukulam Public School Logo"
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                // If logo.png is not found yet, show stylized badge fallback
                (e.target as HTMLElement).style.display = 'none';
                const fallback = (e.target as HTMLElement).nextElementSibling;
                if (fallback) (fallback as HTMLElement).style.display = 'flex';
              }}
            />
            {/* Fallback Badge (hidden when real logo.png exists) */}
            <div className="hidden w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full bg-gradient-to-br from-[#C41E2A] to-[#9B1722] items-center justify-center font-black text-white text-base sm:text-lg lg:text-xl shadow-lg border border-[#C41E2A]/30">
              G
            </div>
          </div>
        </Link>

        {/* Desktop Grouped Dropdown Navigation */}
        <nav className="hidden xl:flex items-center gap-1 2xl:gap-3">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 text-[11px] 2xl:text-xs font-bold text-[#3B3B3B] hover:text-[#C41E2A] transition py-2 px-2 2xl:px-3 uppercase tracking-wider whitespace-nowrap font-[var(--font-ui)]">
                    {link.name}
                    <ChevronDown className="w-3.5 h-3.5 text-[#C41E2A]" />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-56 2xl:w-60 py-3 bg-white/80 backdrop-blur-2xl border border-[#E5E3DE] rounded-2xl shadow-2xl z-50 space-y-1"
                      >
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2 text-xs font-semibold text-[#3B3B3B] hover:text-[#C41E2A] hover:bg-[#C41E2A]/5 transition rounded-lg mx-1"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            if (link.isExternal) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] 2xl:text-xs font-bold text-[#C41E2A] hover:text-[#9B1722] transition flex items-center gap-1 uppercase tracking-wider bg-[#C41E2A]/8 px-2 2xl:px-3 py-1.5 rounded-full border border-[#C41E2A]/20 whitespace-nowrap"
                >
                  {link.name} <ExternalLink className="w-3 h-3 2xl:w-3.5 2xl:h-3.5" />
                </a>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] 2xl:text-xs font-bold text-[#3B3B3B] hover:text-[#C41E2A] transition uppercase tracking-wider px-2 2xl:px-3 py-2 whitespace-nowrap"
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile/Tablet Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-xl bg-white/80 backdrop-blur-xl border border-[#E5E3DE] text-[#C41E2A] active:scale-95 transition shadow-sm"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>
      </div>

      {/* Mobile/Tablet Drawer Navigation — Glassmorphic overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-white/90 backdrop-blur-3xl border-b border-[#E5E3DE] px-4 sm:px-6 py-5 sm:py-6 max-h-[75vh] overflow-y-auto shadow-lg"
          >
            <div className="space-y-3 sm:space-y-4 max-w-lg mx-auto">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="space-y-2">
                      <button
                        onClick={() =>
                          setMobileAccordion(mobileAccordion === link.name ? null : link.name)
                        }
                        className="w-full flex items-center justify-between font-extrabold text-[#C41E2A] text-xs sm:text-sm uppercase tracking-widest py-2"
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            mobileAccordion === link.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileAccordion === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1.5 border-l-2 border-[#C41E2A]/20"
                          >
                            {link.dropdown.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-xs sm:text-sm font-semibold text-[#3B3B3B] hover:text-[#C41E2A] py-1.5 transition"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : link.isExternal ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#C41E2A] hover:text-[#9B1722] py-2 uppercase tracking-wider"
                    >
                      {link.name} <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs sm:text-sm font-bold text-[#3B3B3B] hover:text-[#C41E2A] py-2 uppercase tracking-wider transition"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-3 border-t border-[#E5E3DE]">
                <a
                  href={schoolInfo.admissionFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-otsuka w-full justify-center text-xs sm:text-sm"
                >
                  Apply Online <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
