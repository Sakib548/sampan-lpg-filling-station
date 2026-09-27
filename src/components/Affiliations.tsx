'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, ShieldCheck } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

/* ── Data (Kept outside component to prevent re-renders) ── */
const affiliations = [
  { num: '01', name: 'Real Estate & Housing Association of Bangladesh (REHAB)', logo: '/images/affiliation/rehab.webp' },
  { num: '02', name: 'Federation of Bangladesh Chambers of Commerce & Industry (FBCCI)', logo: '/images/affiliation/fbcci.webp' },
  { num: '03', name: 'Bangladesh Reconditioned Vehicles Importers & Dealers Assoc. (BARVIDA)', logo: '/images/affiliation/barvia.webp' },
  { num: '04', name: "Bangladesh Arm's Dealer and Importer Association", logo: '/images/affiliation/bad.webp' },
  { num: '05', name: 'Bangladesh PABX Association', logo: '/images/affiliation/pabx.webp' },
  { num: '06', name: "Bangladesh LPG Autogas Station Owner's Association", logo: '/images/affiliation/lpg.webp' },
  { num: '07', name: 'Bangladesh Volleyball Federation (AD-Hoc Community)', logo: '/images/affiliation/bvf.webp' },
  { num: '08', name: 'Barisal Bulls', logo: '/images/affiliation/barishalbulls.webp' },
  { num: '09', name: 'Barisal Club (1864)', logo: '/images/affiliation/lis.webp' },
  { num: '10', name: 'Bangladesh Premier League (BPL)', logo: '/images/affiliation/bpl.webp' },
  { num: '11', name: 'Mercedes-Benz', logo: '/images/affiliation/mercedes.webp' },
  { num: '12', name: 'Chartered Institute of Procurement & Supply UK (CIPS)', logo: '/images/affiliation/cips.webp' },
  { num: '13', name: 'Directorate General Defence Purchase (DGDP)', logo: '/images/affiliation/dgdp.webp' },
  { num: '14', name: "Shooter's Shooting Club", logo: '/images/affiliation/shoot.webp' },
  { num: '15', name: 'Express Highway Club And Lounge', logo: '/images/affiliation/EHCl.webp' },
  { num: '16', name: 'Bangladesh Archery Federation', logo: '/images/affiliation/Archery.webp' },
  { num: '17', name: 'Sampan Golf Academy', logo: '/images/affiliation/Sampan Golf Academy.webp' },
];

export default function Affiliations() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const q = gsap.utils.selector(containerRef);

      if (prefersReducedMotion) {
        gsap.set(q('.affil-header-anim, .affil-card'), { opacity: 1, y: 0 });
        return;
      }

      /* Header Animation */
      gsap.from(q('.affil-header-anim'), {
        opacity: 0,
        y: 35,
        duration: 1.1,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: q('.affil-header')[0],
          start: 'top 85%',
        },
      });

      /* Grid Items Reveal */
      gsap.fromTo(
        q('.affil-card'),
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.04,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: q('.affil-grid')[0],
            start: 'top 85%',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="affiliations"
      ref={containerRef}
      className="relative w-full bg-[#F7F6F2] py-24 md:py-32 border-t border-stone-200 overflow-hidden"
    >
      {/* Soft Ambient Warm Glow */}
      <div
        className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-60"
        style={{ background: 'radial-gradient(circle, rgba(197,165,114,0.08) 0%, transparent 70%)' }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* ─── Section Header (Light Mode) ─── */}
        <div className="affil-header flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <span className="affil-header-anim inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-amber-800 font-mono font-bold mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              <span>Governance &amp; Trust</span>
            </span>
            <h2 className="affil-header-anim text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0c0b0b] tracking-tight leading-[1.12]">
              Affiliations &amp;{' '}
              <span className="italic text-amber-700">
                Accreditations.
              </span>
            </h2>
          </div>
          <div className="max-w-md md:text-right">
            <div className="hidden md:block w-16 h-px bg-amber-600/40 mb-4 ml-auto" />
            <p className="affil-header-anim text-xs sm:text-sm font-light text-[#0c0b0b]/60 leading-relaxed">
              Recognized and accredited by leading national regulatory bodies, international institutes, and prestigious chambers across Bangladesh and the UK.
            </p>
          </div>
        </div>

        {/* ─── Architectural Seamless Grid (Light Aesthetic) ─── */}
        <div className="affil-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-px bg-[#0c0b0b]/10 border border-[#0c0b0b]/10 rounded-2xl overflow-hidden shadow-sm">
          {affiliations.map((item, i) => (
            <div
              key={`${item.num}-${i}`}
              className="affil-card group relative bg-[#F7F6F2] hover:bg-white transition-colors duration-300 min-h-[175px] sm:min-h-[195px] flex flex-col items-center justify-between p-5 sm:p-6"
            >
              {/* Ghost Architectural Index */}
              <div className="w-full flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#0c0b0b]/25 transition-colors duration-300 group-hover:text-amber-700">
                  {item.num}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-700/20 group-hover:bg-amber-700 transition-colors duration-300" />
              </div>

              {/* Logo Wrapper */}
              <div className="relative w-full h-14 sm:h-16 flex items-center justify-center my-auto p-1">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={110}
                  height={55}
                  loading="lazy"
                  unoptimized
                  className="max-h-12 sm:max-h-14 max-w-[110px] w-auto h-auto object-contain relative z-10 transition-transform duration-300 ease-out group-hover:scale-105 filter drop-shadow-xs"
                />
              </div>

              {/* Name & Animated Accent Line */}
              <div className="w-full text-center mt-auto pt-2">
                <p className="text-[11px] leading-snug font-medium text-[#0c0b0b]/75 group-hover:text-[#0c0b0b] transition-colors duration-200 line-clamp-2">
                  {item.name}
                </p>
                {/* Animated Bottom Line Indicator */}
                <div className="h-[1.5px] w-6 bg-amber-600/30 mt-2.5 mx-auto transition-all duration-300 ease-out group-hover:w-12 group-hover:bg-amber-700" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Tag */}
        <div className="affil-header-anim mt-10 text-center flex items-center justify-center gap-2 text-xs font-mono text-slate-600">
          <Award className="w-4 h-4 text-amber-700" />
          <span>Proudly affiliated with 17 national and international organizations</span>
        </div>

      </div>
    </section>
  );
}
