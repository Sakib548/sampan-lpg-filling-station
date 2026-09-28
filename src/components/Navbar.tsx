'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { RefreshCw, MapPin, Navigation, Activity, Camera } from 'lucide-react';
import { FuelPrice } from '@/types/fuel';

interface NavbarProps {
  prices: FuelPrice[];
  isScraping: boolean;
  onTriggerScrape: () => void;
}

export default function Navbar({
  prices,
  isScraping,
  onTriggerScrape,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const autogas = prices.find((p) => p.id === 'autogas');
  const petrol = prices.find((p) => p.id === 'petrol');
  const octane = prices.find((p) => p.id === 'octane');
  const diesel = prices.find((p) => p.id === 'diesel');

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Real-time Rates Ticker */}
      <div className="bg-[#090e17]/95 border-b border-white/5 py-1.5 px-4 text-xs font-mono overflow-hidden backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary shrink-0 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="hidden sm:inline">BERC GAZETTE:</span>
            <span className="text-white font-semibold">SEPTEMBER 2026</span>
          </div>

          {/* Marquee ticker */}
          <div className="flex-1 overflow-hidden mx-4 relative">
            <div className="animate-marquee whitespace-nowrap flex gap-8 items-center text-slate-300">
              <div className="flex items-center gap-1.5">
                <span className="text-primary font-bold">AUTOGAS (LPG):</span>
                <span className="text-white font-mono font-semibold">Tk {autogas?.currentPrice.toFixed(2) || '73.09'}/L</span>
                <span className="text-emerald-400 text-[10px] bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">▼ Tk 0.58</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-amber-400 font-bold">OCTANE 95:</span>
                <span className="text-white font-mono font-semibold">Tk {octane?.currentPrice.toFixed(2) || '165.00'}/L</span>
                <span className="text-rose-400 text-[10px] bg-rose-950/60 px-1.5 py-0.5 rounded border border-rose-800/40">Hiked +Tk 20</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">PETROL:</span>
                <span className="text-white font-mono font-semibold">Tk {petrol?.currentPrice.toFixed(2) || '160.00'}/L</span>
                <span className="text-rose-400 text-[10px] bg-rose-950/60 px-1.5 py-0.5 rounded border border-rose-800/40">Hiked +Tk 20</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-blue-400 font-bold">DIESEL:</span>
                <span className="text-white font-mono font-semibold">Tk {diesel?.currentPrice.toFixed(2) || '135.00'}/L</span>
                <span className="text-rose-400 text-[10px] bg-rose-950/60 px-1.5 py-0.5 rounded border border-rose-800/40">Hiked +Tk 20</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3 h-3 text-red-400" />
                <span>Beside Sampan Highway Inn, Kashiani</span>
              </div>
              {/* Duplicate for smooth marquee */}
              <div className="flex items-center gap-1.5">
                <span className="text-primary font-bold">AUTOGAS (LPG):</span>
                <span className="text-white font-mono font-semibold">Tk {autogas?.currentPrice.toFixed(2) || '73.09'}/L</span>
                <span className="text-emerald-400 text-[10px] bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">▼ Tk 0.58</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-amber-400 font-bold">OCTANE 95:</span>
                <span className="text-white font-mono font-semibold">Tk {octane?.currentPrice.toFixed(2) || '165.00'}/L</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3 text-slate-400 text-[11px] shrink-0">
            <span className="flex items-center gap-1 text-emerald-400">
              <Activity className="w-3 h-3" /> Forecourt Open 24/7
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`px-4 lg:px-8 transition-all duration-300 ${scrolled
          ? 'py-2.5 bg-[#080808]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'py-3.5 bg-[#080808]/80 backdrop-blur-md border-b border-white/5'
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo with official 2-in-1 images */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="flex items-center -space-x-2 shrink-0">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-amber-400/90 shadow-md group-hover:scale-105 transition-transform bg-black z-10 p-0.5">
                <Image
                  src="/logo/sampanfillingstation.png"
                  alt="Sampan Filling Station Logo"
                  fill
                  className="object-contain p-0.5"
                  priority
                />
              </div>
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-cyan-400/90 shadow-md group-hover:scale-105 transition-transform bg-black p-0.5">
                <Image
                  src="/logo/lpg.png"
                  alt="Sampan LPG Station Logo"
                  fill
                  className="object-contain p-0.5"
                  priority
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-sm sm:text-base font-black tracking-wide text-white font-sans uppercase">
                  Sampan Filling & LPG Station
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[9px] font-mono bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  2-in-1
                </span>
              </div>
              <p className="text-[10px] hidden sm:block text-primary font-sans flex items-center gap-1">
                <MapPin className="w-3 h-3 text-red-400 shrink-0" />
                <span>Dhaka-Khulna Highway &bull; Beside Sampan Highway Inn</span>
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links (matching draft wireframe) */}
          <div className="hidden xl:flex items-center gap-5 text-xs font-mono text-slate-300">
            <a href="#fuel-services" className="hover:text-primary transition-colors">
              Filling Station
            </a>
            <a href="#lpg-station" className="hover:text-primary transition-colors">
              LPG
            </a>
            <a href="#ev-charging" className="hover:text-cyan-400 transition-colors">
              EV Charging
            </a>
            <a href="#live-prices" className="hover:text-primary transition-colors">
              Live Rates
            </a>
            <a href="#highway-benefits" className="hover:text-primary transition-colors">
              Highway Inn
            </a>
            <a href="#facilities" className="hover:text-primary transition-colors">
              Facilities
            </a>
            <a href="#gallery" className="hover:text-amber-400 transition-colors flex items-center gap-1 text-slate-200">
              <Camera className="w-3.5 h-3.5 text-amber-400" /> Gallery
            </a>
            <a href="#location" className="hover:text-primary transition-colors flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-red-400" /> Location
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Sync Rates button commented out for customer-facing UI
            <button
              onClick={onTriggerScrape}
              disabled={isScraping}
              title="Scrape and sync latest BERC rates"
              className="px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/40 transition-all flex items-center gap-2 active:scale-95 disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-primary ${isScraping ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">{isScraping ? 'Syncing...' : 'Sync Rates'}</span>
            </button>
            */}

            <a
              href="https://maps.app.goo.gl/hkaLqFGVGgrPBcqa8"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 hidden sm:block rounded-xl text-xs font-bold text-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 shadow-[0_0_20px_rgba(197,165,114,0.35)] transition-all flex items-center gap-1.5 active:scale-95 font-sans"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span >Get Directions</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-white/10 pb-3 flex flex-col gap-2 font-mono text-xs text-slate-300">
            <a
              href="#fuel-services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-primary"
            >
              Filling Station (Petrol, Diesel, Octane)
            </a>
            <a
              href="#lpg-station"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-primary"
            >
              LPG Auto Gas Bay
            </a>
            <a
              href="#ev-charging"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-cyan-400"
            >
              EV Charging (Coming Soon)
            </a>
            <a
              href="#live-prices"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-primary"
            >
              Current Fuel Rates
            </a>
            <a
              href="#highway-benefits"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-primary"
            >
              Highway Inn Benefits
            </a>
            <a
              href="#facilities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-primary"
            >
              Facilities
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-amber-400 flex items-center gap-2 text-amber-300 font-semibold"
            >
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              <span>Forecourt Gallery</span>
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-primary"
            >
              Location & Map
            </a>
          </div>
        )}
      </nav>
    </header >
  );
}
