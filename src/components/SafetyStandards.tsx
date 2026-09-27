'use client';

import React from 'react';
import { ShieldCheck, AlertOctagon, Flame, Activity, CheckCircle, FileCheck2 } from 'lucide-react';

export default function SafetyStandards() {
  const complianceItems = [
    {
      title: 'Explosives Department Certified',
      subtitle: 'বিস্ফোরক পরিদপ্তর কর্তৃক অনুমোদিত',
      desc: 'Full regulatory compliance with the Department of Explosives, Bangladesh Gas Cylinder Rules, and Static & Mobile Pressure Vessels (SMPV) standards.',
      certNo: 'LIC-EXP-BD/2026/892'
    },
    {
      title: 'Automated Emergency Shut-off (ESD)',
      subtitle: 'স্বয়ংক্রিয় জরুরি শাট-অফ ভালভ',
      desc: 'Pneumatically activated Emergency Shut Down (ESD) buttons situated at every dispensing bay and cashier counter that instantly cut gas flow in under 1.2 seconds.',
      certNo: 'Pneumatic Fail-Safe'
    },
    {
      title: 'Optical Flame & Hydrocarbon Gas Detectors',
      subtitle: 'গ্যাস লিক ও ফ্লেম ডিটেক্টর',
      desc: 'Continuous multi-zone sensors detect flammable gas concentrations down to 10% LEL (Lower Explosive Limit), triggering alarms and auto sprinkler deluge.',
      certNo: 'Continuous 24/7 Monitoring'
    },
    {
      title: 'Anti-Static Grounding & Bonding',
      subtitle: 'অ্যান্টি-স্ট্যাটিক গ্রাউন্ডিং প্রোটেকশন',
      desc: 'Every vehicle bay features copper grounding clamps that discharge electrostatic voltage before the autogas nozzle connects to your vehicle tank.',
      certNo: 'Zero Spark Standard'
    }
  ];

  return (
    <section id="safety" className="py-20 lg:py-28 relative bg-[#06090e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ZERO COMPROMISE PROTOCOL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
              Certified Safety Standards & BERC Compliance
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
              LPG auto gas is one of the safest automotive fuels when dispensed through certified, pressure-tested equipment. Our station is designed with redundant failsafes, double-walled mounded storage vessels, and trained certified technicians.
            </p>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 mb-8">
              <div className="flex items-center gap-3 text-emerald-400 font-mono text-xs font-bold mb-1">
                <FileCheck2 className="w-4 h-4" />
                <span>BERC License: BERC/GAS/2026-0448</span>
              </div>
              <p className="text-slate-400 text-xs">
                Audited and validated under the Bangladesh Energy Regulatory Commission Act. Dispensers undergo monthly BSTI calibration tests.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-slate-400 block mb-1">Vessel Test Pressure:</span>
                <span className="text-white font-bold text-sm">30 Bar Hydrostatic</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-slate-400 block mb-1">Vapor Recovery:</span>
                <span className="text-emerald-400 font-bold text-sm">100% Sealed Loop</span>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-6 space-y-4">
            {complianceItems.map((item, i) => (
              <div
                key={i}
                className="glass-panel p-5 flex items-start gap-4 hover:border-emerald-500/30 transition-all"
              >
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-sm font-bold text-white">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-cyan-300 border border-white/10 shrink-0">
                      {item.certNo}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-sans block mb-1.5">
                    {item.subtitle}
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
