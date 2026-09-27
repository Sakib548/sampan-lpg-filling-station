'use client';

import React from 'react';
import { Navigation, ArrowRight, MapPin } from 'lucide-react';

export default function RoadCtaBanner() {
  return (
    <section className="py-20 lg:py-28 relative bg-gradient-to-b from-[#080808] to-[#040404] border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-primary/[0.08] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        
        <span className="text-[10px] uppercase tracking-[0.35em] text-primary font-mono mb-4 block">
          Dhaka-Khulna Highway &bull; Kashiani
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
          On the Road? We&apos;ve Got You Covered.
        </h2>

        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Whether you need certified Auto Gas (LPG), calibrated Octane/Diesel, 24/7 towing recovery, or a warm meal and rest at Sampan Highway Inn — pull in anytime.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://maps.app.goo.gl/hkaLqFGVGgrPBcqa8"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 shadow-[0_0_25px_rgba(197,165,114,0.35)] transition-all flex items-center gap-2 active:scale-95"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions</span>
          </a>

          <a
            href="#highway-benefits"
            className="px-6 py-3.5 rounded-xl font-medium text-xs tracking-wider uppercase text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/40 transition-all flex items-center gap-2 active:scale-95"
          >
            <span>Explore Highway Inn</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </a>
        </div>

      </div>
    </section>
  );
}
