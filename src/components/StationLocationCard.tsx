'use client';

import React from 'react';
import { MapPin, Navigation, Clock, ExternalLink, ShieldCheck, Utensils, Fuel, Compass, Zap, Gauge, Building2 } from 'lucide-react';

export default function StationLocationCard() {
  return (
    <section id="location" className="py-20 lg:py-28 relative bg-[#f8f7f4] text-slate-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-mono mb-3 font-semibold">
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            <span>EXACT HIGHWAY LOCATION & LIVE MAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Visit Sampan Filling Station & LPG Station
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base font-light">
            Conveniently situated right beside <strong className="text-slate-900">Sampan Highway Inn Restaurant & Party Centre</strong>. A premier 2-in-1 highway stop for Octane, Petrol, Diesel, clean Auto Gas refueling, dining, and driver rest.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 flex items-center justify-center shrink-0">
                  <Fuel className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    Sampan Filling Station & LPG Station
                  </h3>
                  <span className="text-xs text-amber-800 font-mono font-semibold">
                    সাম্পান ফিলিং স্টেশন ও এলপিজি স্টেশন
                  </span>
                </div>
              </div>

              {/* Address Strip */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 mb-6 font-mono text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-[11px]">Primary Landmark:</span>
                    <strong className="text-slate-900 text-sm font-sans block">
                      Beside Sampan Highway Inn Restaurant & Party Centre
                    </strong>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Coordinates: 23.2605° N, 89.7660° E (Dhaka-Khulna Hwy, Kashiani)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-2 border-t border-slate-200">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div className="text-slate-700">
                    Operating Hours: <span className="text-emerald-700 font-bold">Open 24 Hours / 7 Days</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-2 border-t border-slate-200">
                  <ShieldCheck className="w-4 h-4 text-cyan-600 shrink-0" />
                  <div className="text-slate-700">
                    Regulatory: <span className="text-cyan-800 font-semibold">BERC Certified & Calibrated</span>
                  </div>
                </div>
              </div>

              {/* Station Amenities */}
              <div className="space-y-2 mb-6">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 font-semibold">
                  Available at this 2-in-1 Hub:
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-700">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2">
                    <Fuel className="w-3.5 h-3.5 text-amber-600" />
                    <span>Petrol, Octane, Diesel</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2">
                    <Gauge className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Autogas LPG Pumps</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2">
                    <Utensils className="w-3.5 h-3.5 text-amber-600" />
                    <span>Sampan Highway Inn</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-emerald-600" />
                    <span>EV Fast Charging Ready</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Google Maps CTA */}
            <div className="pt-2">
              <a
                href="https://maps.app.goo.gl/hkaLqFGVGgrPBcqa8"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps & Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Interactive Google Map */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Live Interactive Google Map Frame (Full Height, No Pictures) */}
            <div className="relative w-full h-[450px] lg:h-full min-h-[420px] rounded-2xl overflow-hidden border border-slate-300 shadow-xl bg-slate-100 group">
              <iframe
                title="Sampan Filling Station & LPG Station Google Map Location"
                src="https://maps.google.com/maps?q=23.2604651,89.7659791+(Sampan+Filling+Station+%26+LPG+Station+beside+Sampan+Highway+Inn)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Map Pin Badge */}
              <div className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-mono text-slate-900 flex items-center gap-2 shadow-md">
                <MapPin className="w-3.5 h-3.5 text-red-500 animate-bounce" />
                <span>Sampan Filling & LPG Station &bull; Beside Sampan Highway Inn</span>
              </div>

              {/* Quick Direction Button overlay */}
              <a
                href="https://maps.app.goo.gl/hkaLqFGVGgrPBcqa8"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-3 right-3 px-4 py-2 rounded-xl bg-amber-400 text-black font-mono font-bold text-xs shadow-md hover:bg-amber-300 transition-all flex items-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Navigate Here</span>
              </a>
            </div>

            {/* Highway Proximity Information Strip (Data only, no pictures) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
                <Compass className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <span className="text-[11px] font-mono text-slate-500 block">Corridor</span>
                  <strong className="text-xs text-slate-800 font-sans">Dhaka-Khulna Highway</strong>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
                <Building2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <div>
                  <span className="text-[11px] font-mono text-slate-500 block">Premises</span>
                  <strong className="text-xs text-slate-800 font-sans">Beside Highway Inn</strong>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
                <Clock className="w-5 h-5 text-cyan-500 shrink-0" />
                <div>
                  <span className="text-[11px] font-mono text-slate-500 block">Service</span>
                  <strong className="text-xs text-slate-800 font-sans">24/7 All-Fuel Pumps</strong>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
