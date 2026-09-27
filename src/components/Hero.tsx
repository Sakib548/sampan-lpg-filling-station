'use client';

import React from 'react';
import Image from 'next/image';
import { Navigation, ArrowRight, ChevronDown, Camera, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen min-h-[100dvh] w-full flex flex-col justify-center items-center pt-28 sm:pt-32 pb-16 overflow-hidden bg-[#080808]">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/[0.09] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[320px] h-[320px] bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Subtle background station imagery with overlay */}
      <div className="absolute inset-0 opacity-15 mix-blend-luminosity pointer-events-none">
        <Image
          src="/images/nearby/heromain.jpeg"
          alt="Sampan Filling Station and LPG Station Forecourt"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#080808]/85 to-[#080808]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center flex flex-col items-center my-auto">
        
        {/* Dual Brand 2-in-1 Header with 2 Logos */}
        <div className="mb-8 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-2.5 sm:px-6 sm:py-3 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          
          {/* Logo 1: Sampan Filling Station */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border-2 border-amber-400/80 shadow-[0_0_20px_rgba(251,191,36,0.3)] bg-black shrink-0 p-1">
              <Image
                src="/logo/sampanfillingstation.png"
                alt="Sampan Filling Station Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                Conventional Fuel Hub
              </span>
              <span className="text-sm sm:text-base font-black text-white font-sans tracking-wide">
                Sampan Filling Station
              </span>
            </div>
          </div>

          {/* Plus / 2-in-1 Badge Divider */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-mono text-[11px] font-bold tracking-wider">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>2-IN-1 STATION</span>
          </div>

          {/* Logo 2: Sampan LPG Filling Station */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border-2 border-cyan-400/80 shadow-[0_0_20px_rgba(34,211,238,0.3)] bg-black shrink-0 p-1">
              <Image
                src="/logo/lpg.png"
                alt="Sampan LPG Filling Station Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold block">
                Clean Autogas LPG
              </span>
              <span className="text-sm sm:text-base font-black text-white font-sans tracking-wide">
                LPG Filling Station
              </span>
            </div>
          </div>

        </div>

        {/* Location & Highway Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Dhaka-Khulna Highway &bull; Beside Sampan Highway Inn &bull; Open 24/7</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
          One Stop. Every Mile.{' '}
          <span className="bg-gradient-to-r from-primary via-amber-200 to-yellow-400 bg-clip-text text-transparent">
            Every Fuel.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mb-8">
          Welcome to the unified highway energy destination. Power your journey with certified Petrol, Octane, and Diesel at <strong className="text-white font-medium">Sampan Filling Station</strong>, or refill high-purity, pressurized Autogas at <strong className="text-amber-300 font-medium">Sampan LPG Filling Station</strong> — with 24/7 dining, rest, and express roadside service.
        </p>

        {/* Quick Highlights Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 mb-9">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Petrol & Octane 95</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>High-Speed Diesel</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>High-Pressure LPG Autogas</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
            <span>EV Fast Charging Ready</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#location"
            className="px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 shadow-[0_0_25px_rgba(197,165,114,0.3)] transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <Navigation className="w-4 h-4" />
            <span>Find Us on the Highway</span>
          </a>

          <a
            href="#gallery"
            className="px-6 py-3.5 rounded-xl font-medium text-xs tracking-wider uppercase text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/40 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <Camera className="w-4 h-4 text-amber-400" />
            <span>View Station Gallery</span>
          </a>

          <a
            href="#highway-benefits"
            className="px-6 py-3.5 rounded-xl font-medium text-xs tracking-wider uppercase text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <span>Highway Inn Amenities</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </a>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="relative z-10 mt-auto pt-6 text-slate-500 flex flex-col items-center gap-1.5 animate-bounce">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 text-primary" />
      </div>
    </section>
  );
}
