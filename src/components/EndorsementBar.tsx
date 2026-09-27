'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

interface Concern {
  name: string;
  tagline: string;
  link: string;
  logo: string;
  hoverAccent: string;
}

const SISTER_CONCERNS: Concern[] = [
  {
    name: 'Sampan Development Ltd',
    tagline: 'Land sale, share & condominiums',
    link: 'https://sampangroup.com.bd',
    logo: '/images/logo/development.png',
    hoverAccent: 'from-blue-500 to-cyan-400',
  },
  {
    name: 'Sampan Highway Inn',
    tagline: 'Flagship highway dining & rest stop',
    link: 'https://sampangroup.com.bd',
    logo: '/images/logo/sampanhighwayinn.png',
    hoverAccent: 'from-amber-400 to-yellow-300',
  },
  {
    name: 'LSHS',
    tagline: 'London School of Higher Studies (CIPS/UK)',
    link: 'https://cips.lshs.co.uk/',
    logo: '/images/logo/lshs.png',
    hoverAccent: 'from-emerald-400 to-teal-300',
  },
  {
    name: 'Sampan Auto',
    tagline: 'Vehicle sales, parts & emergency support',
    link: 'https://sampangroup.com.bd',
    logo: '/images/logo/sampanauto.png',
    hoverAccent: 'from-rose-500 to-amber-500',
  },
];

export default function EndorsementBar() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.endorsement-anim', {
        opacity: 0,
        y: 35,
        duration: 1.1,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#080808] py-20 md:py-28 border-y border-white/[0.06] overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] bg-primary/[0.05] blur-[140px] rounded-full" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* ─── Brand Statement ─── */}
        <div className="flex flex-col items-center text-center mb-14 md:mb-16">
          <span className="endorsement-anim text-[10px] uppercase tracking-[0.35em] text-primary font-mono font-medium mb-3 block">
            The Sampan Group Legacy &bull; Sister Concerns
          </span>
          <h2 className="endorsement-anim text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
            Different industries. One connected vision.
          </h2>
          <p className="endorsement-anim text-sm sm:text-base font-light text-slate-400 max-w-2xl leading-relaxed">
            Delivering excellence in hospitality, higher education, real estate, and automotive services across Bangladesh.
          </p>
        </div>

        {/* ─── Spacious Architectural Logo Grid ─── */}
        <div className="endorsement-anim border border-white/[0.08] rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08] bg-white/[0.015] backdrop-blur-sm overflow-hidden shadow-2xl">
          {SISTER_CONCERNS.map((concern) => (
            <a
              key={concern.name}
              href={concern.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-between p-8 sm:p-10 transition-all duration-300 hover:bg-white/[0.03]"
            >
              {/* Top Accent Line on Hover */}
              <span
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${concern.hoverAccent} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left`}
              />

              {/* Logo Area (Properly sized & isolated to prevent text overlap) */}
              <div className="relative w-full h-16 flex items-center justify-center mb-5 shrink-0">
                {/* Subtle Radial Glow on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(197,165,114,0.12), transparent 70%)' }}
                />

                <Image
                  src={concern.logo}
                  alt={concern.name}
                  width={120}
                  height={55}
                  className="max-h-11 sm:max-h-12 max-w-[125px] w-auto h-auto object-contain relative z-10 transition-transform duration-300 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                />
              </div>

              {/* Title & Tagline (Separate container with fixed breathing room) */}
              <div className="text-center w-full mb-5 flex-1 flex flex-col justify-center">
                <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors duration-200 mb-1 leading-snug">
                  {concern.name}
                </h4>
                <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                  {concern.tagline}
                </p>
              </div>

              {/* Visit Link Prompt */}
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400 group-hover:text-primary transition-colors duration-200 flex items-center gap-1.5 pt-2">
                <span>Visit Concern</span>
                <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 text-primary" />
              </span>
            </a>
          ))}
        </div>

        {/* ─── Learn More CTA ─── */}
        <div className="endorsement-anim flex justify-center mt-12 md:mt-14">
          <a
            href="https://sampangroup.com.bd"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400 hover:text-primary transition-colors duration-200 font-mono"
          >
            <span>Explore the whole ecosystem</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
