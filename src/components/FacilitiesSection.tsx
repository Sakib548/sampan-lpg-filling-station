'use client';

import React from 'react';
import { Check, Sparkles, Wind, Eye, Armchair, Wrench } from 'lucide-react';

export default function FacilitiesSection() {
  const facilities = [
    {
      title: 'Clean Restrooms',
      desc: 'Hygienic, well-maintained washrooms with separate facilities for traveling families and commercial drivers.',
      icon: <Sparkles className="w-5 h-5 text-amber-700" />,
    },
    {
      title: 'Air & Water Top-Up',
      desc: 'Free calibrated high-pressure tire air gauges and radiator water top-up stations at the forecourt.',
      icon: <Wind className="w-5 h-5 text-amber-700" />,
    },
    {
      title: 'Well-Lit 24/7 Forecourt',
      desc: 'High-intensity LED canopy floodlighting and continuous CCTV coverage ensuring safety at all hours.',
      icon: <Eye className="w-5 h-5 text-amber-700" />,
    },
    {
      title: 'Passenger Waiting & Seating',
      desc: 'Dedicated shaded rest areas and seating for passengers while vehicles are refueling or inspected.',
      icon: <Armchair className="w-5 h-5 text-amber-700" />,
    },
    {
      title: 'Complimentary Auto-Check',
      desc: 'Free engine oil level, windshield fluid, tire pressure, and battery health checks by trained attendants.',
      icon: <Wrench className="w-5 h-5 text-amber-700" />,
    },
  ];

  return (
    <section id="facilities" className="py-20 lg:py-28 relative bg-[#ffffff] text-slate-900 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-800 font-mono font-bold mb-3 block">
            Station Amenities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Built for the Road
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            Everything you need for a comfortable, uninterrupted journey along the Dhaka-Khulna Highway.
          </p>
        </div>

        {/* 2-Column Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.map((fac, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#fbfbf9] border border-slate-200 hover:border-amber-400 hover:bg-white hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 shrink-0 group-hover:scale-110 transition-transform">
                {fac.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-4 h-4 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                    {fac.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  {fac.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
