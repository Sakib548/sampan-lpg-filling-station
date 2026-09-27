'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#040404] border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center -space-x-2 shrink-0">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-amber-400/80 bg-black z-10 p-0.5 shadow-sm">
                  <Image
                    src="/logo/sampanfillingstation.png"
                    alt="Sampan Filling Station"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-cyan-400/80 bg-black p-0.5 shadow-sm">
                  <Image
                    src="/logo/lpg.png"
                    alt="Sampan LPG Station"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-wide font-sans block">
                  SAMPAN FILLING & LPG STATION
                </span>
                <span className="text-[10px] text-primary">2-IN-1 FORECOURT &bull; PART OF SAMPAN GROUP</span>
              </div>
            </div>

            <p className="text-slate-400 font-sans text-xs leading-relaxed font-light">
              Conventional fuels (Octane, Petrol, Diesel), clean Autogas LPG, EV charging, 24/7 dining & rest — all at one highway complex.
            </p>

            <div className="text-[11px] text-slate-300 font-mono flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
              <span>Dhaka-Khulna Highway, Kashiani</span>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#highway-benefits" className="hover:text-primary transition-colors">
                  Restaurant & Party Centre
                </a>
              </li>
              <li>
                <a href="#highway-benefits" className="hover:text-primary transition-colors">
                  Stay & Motel
                </a>
              </li>
              <li>
                <a href="#highway-benefits" className="hover:text-primary transition-colors">
                  Sweet Box
                </a>
              </li>
              <li>
                <a href="#highway-benefits" className="hover:text-primary transition-colors">
                  Retail & Mart
                </a>
              </li>
              <li>
                <a href="#fuel-services" className="hover:text-primary transition-colors">
                  Fuel & LPG Auto Gas
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors text-amber-300/90">
                  Forecourt & Facility Gallery
                </a>
              </li>
              <li>
                <a href="#highway-benefits" className="hover:text-primary transition-colors">
                  Towing & 24/7 Breakdown Auto
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-primary transition-colors">
                  Location & Map
                </a>
              </li>
              <li>
                <a href="#affiliations" className="hover:text-primary transition-colors">
                  Affiliations & Accreditations
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Concerns */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Our Concerns
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="https://sampangroup.com.bd" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                  <span>Sampan Group</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a href="https://sampangroup.com.bd" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                  <span>Sampan Development Ltd</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a href="https://cips.lshs.co.uk/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                  <span>London School of Higher Studies (LSHS)</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <span className="text-slate-300">Express Highway Inn</span>
              </li>
              <li>
                <span className="text-slate-300">Sampan Auto & Japanese Parts</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Hotline */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Highway Directions
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
              Beside Sampan Highway Inn Restaurant & Party Centre, Dhaka-Khulna Highway, Kashiani.
            </p>
            <a
              href="https://maps.app.goo.gl/hkaLqFGVGgrPBcqa8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-400 text-black font-bold text-xs hover:bg-amber-300 transition-all font-mono"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>
            &copy; 2026 Sampan Highway Inn, part of Sampan Group &bull; Dhaka-Khulna Highway, Kashiani.
          </p>

          <div className="flex items-center gap-4">
            <a href="#live-prices" className="hover:text-primary transition-colors">
              BERC Gazette Prices
            </a>
            <span>&bull;</span>
            <span className="hover:text-slate-400">Privacy Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
