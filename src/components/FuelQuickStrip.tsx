'use client';

import React from 'react';
import { Flame, Fuel, Zap, Clock, ShieldCheck } from 'lucide-react';

export default function FuelQuickStrip() {
  const quickItems = [
    {
      id: 'lpg',
      icon: <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />,
      title: 'LPG Auto Gas',
      subtitle: 'High Pressure • 105+ RON',
      href: '#lpg-station',
    },
    {
      id: 'petrol',
      icon: <Fuel className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />,
      title: 'Octane 95 & Petrol',
      subtitle: 'Calibrated Pure Fuel',
      href: '#fuel-services',
    },
    {
      id: 'diesel',
      icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />,
      title: 'Euro 4 Diesel',
      subtitle: 'Low-Sulphur Commercial',
      href: '#fuel-services',
    },
    {
      id: 'ev',
      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />,
      title: 'EV Supercharging',
      subtitle: '120 kW Fast Corridor',
      href: '#ev-charging',
    },
    {
      id: 'hours',
      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />,
      title: '24/7 Forecourt',
      subtitle: 'Always Open on Highway',
      href: '#location',
    },
  ];

  return (
    <div className="relative w-full rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-2 sm:p-2.5 shadow-[0_0_35px_rgba(0,0,0,0.4)]">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-2.5 items-center">
        {quickItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-amber-400/40 transition-all duration-200 group"
          >
            <div className="p-2 rounded-lg bg-black/50 border border-white/10 shrink-0 group-hover:scale-105 transition-transform">
              {item.icon}
            </div>
            <div className="min-w-0">
              <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors block truncate">
                {item.title}
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 block truncate">
                {item.subtitle}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
