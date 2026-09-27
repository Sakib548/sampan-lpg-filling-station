'use client';

import React from 'react';
import Image from 'next/image';
import { Check, Fuel, Flame, Zap, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

export default function FuelServicesSection() {
  return (
    <section className="py-20 lg:py-28 relative bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
        
        {/* ─── Block 1: Filling Station ─── */}
        <div id="fuel-services" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-primary uppercase">
              <Fuel className="w-4 h-4 text-amber-400" />
              <span>Filling Station</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Reliable Fuel, Every Time
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Octane, petrol, and diesel dispensed with calibrated pumps and quick turnaround — built for highway traffic and daily commuters alike along the Dhaka-Khulna corridor.
            </p>

            <ul className="space-y-3 font-mono text-xs text-slate-300 pt-2">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Multiple pump bays for fast turnaround</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Trained forecourt staff</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Digital & cash payment supported</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Open long hours for highway travelers</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-slate-900 shadow-2xl group">
              <Image
                src="/images/gallery/Filling-Station-2.jpg"
                alt="Sampan Filling Station Calibrated Dispenser Bays"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs font-mono text-amber-300">
                  Calibrated High-Accuracy Fueling Nozzles
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ─── Block 2: LPG Gas Station (Reversed) ─── */}
        <div id="lpg-station" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-slate-900 shadow-2xl group">
              <Image
                src="/images/gallery/WhatsApp-Image-2024-05-29-at-3.16.53-AM-1.jpeg"
                alt="Sampan LPG Station Certified High-Pressure Gas System"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs font-mono text-amber-300">
                  Dedicated High-Pressure LPG Forecourt
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-primary uppercase">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>LPG Gas Station</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Safe, Certified LPG Refueling
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              A dedicated LPG bay built to safety standards, serving both private vehicles and CNG/LPG-converted transport passing the highway corridor.
            </p>

            <ul className="space-y-3 font-mono text-xs text-slate-300 pt-2">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Certified safety systems & automatic shut-off</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Fast-fill bay, separate from fuel pumps</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Regularly inspected equipment (BERC & Explosives Dept)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ─── Block 3: EV Charging (Coming Soon) ─── */}
        <div id="ev-charging" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Coming Soon</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Powering What&apos;s Next
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Sampan is bringing EV charging to the highway. As Bangladesh&apos;s electric fleet grows, our station will grow with it.
            </p>

            <ul className="space-y-3 font-mono text-xs text-slate-300 pt-2">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Fast-charging bays (planned DC ultra-fast)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Integrated with the Highway Inn rest stop</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Launch updates via Sampan Group channels</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 p-8 sm:p-12 bg-gradient-to-br from-[#0c1824] via-[#080f18] to-[#060a10] shadow-[0_0_40px_rgba(0,210,255,0.08)] flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 shadow-[0_0_30px_rgba(0,210,255,0.2)]">
                <Zap className="w-10 h-10 animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-sans">
                Highway EV Fast Charging Hub
              </h3>
              <p className="text-xs text-slate-400 max-w-sm mb-6 font-light">
                High-voltage DC fast-charging infrastructure currently under deployment. Relax at Sampan Highway Inn while your vehicle recharges.
              </p>
              <div className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
                In Development &bull; Launching Soon
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
