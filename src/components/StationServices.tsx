'use client';

import React from 'react';
import {
  Gauge,
  Flame,
  Zap,
  Fuel,
  Wind,
  Coffee,
  CheckCircle2,
  ShieldCheck,
  Clock,
  ArrowRight
} from 'lucide-react';

interface StationServicesProps {
  onOpenBooking: () => void;
}

export default function StationServices({ onOpenBooking }: StationServicesProps) {
  const services = [
    {
      id: 'autogas-dispensers',
      title: 'Digital High-Speed Autogas Dispensers',
      titleBn: 'ডিজিটাল হাই-স্পিড অটোগ্যাস ডিসপেনসার',
      icon: <Gauge className="w-6 h-6 text-emerald-400" />,
      tag: '8 Active Nozzles',
      badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/40',
      description:
        'Equipped with Italian Coriolis mass-flow meters calibrated to the millilitre. Enjoy rapid dispensing at 10-12 bar pressure with automated pneumatic vapor recovery and zero leakage.',
      features: [
        'Average fill time under 2.8 minutes',
        'Automatic temperature & density compensation',
        'BERC and BSTI tamper-proof sealing'
      ]
    },
    {
      id: 'cylinder-swap',
      title: 'Certified Cylinder Swap & Delivery',
      titleBn: 'নিরাপদ এলপিজি সিলিন্ডার সোয়াপ ও ডেলিভারি',
      icon: <Flame className="w-6 h-6 text-cyan-400" />,
      tag: '12kg / 35kg / 45kg',
      badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/40',
      description:
        'Genuine safety-sealed household (12kg) and commercial (35kg/45kg) cylinders. Every cylinder is hydrostatically pressure tested and sealed with barcode verification.',
      features: [
        'Guaranteed 12.0kg net weight accuracy',
        'Free safety valve inspection with every swap',
        'Same-day door-to-door express delivery in Dhaka'
      ]
    },
    {
      id: 'multi-fuel',
      title: 'Multi-Fuel High-Flow Canopy',
      titleBn: 'মাল্টি-ফুয়েল হাই-ফ্লো ক্যানোপি',
      icon: <Fuel className="w-6 h-6 text-amber-400" />,
      tag: 'Octane 95 & Euro 4 Diesel',
      badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-950/40',
      description:
        'Premium 95 RON Octane with detergent cleaning additives and Euro-4 ultra-low sulphur diesel filtered through multi-stage 5-micron filters.',
      features: [
        'High-flow commercial truck nozzles (80 L/min)',
        'Zero water contamination micro-filtering',
        'Digital computerized invoice with every fill'
      ]
    },
    {
      id: 'ev-charging',
      title: '120kW DC Fast EV Supercharger',
      titleBn: '১২০ কিলোওয়াট ডিসি ফাস্ট ইভি চার্জার',
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      tag: 'CCS2 & GBT Dual Gun',
      badgeColor: 'border-purple-500/40 text-purple-400 bg-purple-950/40',
      description:
        'High-power DC charging for modern electric cars and SUVs. Recharge your EV battery from 20% to 80% in approximately 25 minutes while enjoying our lounge.',
      features: [
        'Dual-gun simultaneous fast charging',
        'Integrated bKash and smart RFID tap-to-pay',
        '24/7 dedicated charging bay'
      ]
    },
    {
      id: 'nitrogen-tyre',
      title: 'Automated Tyre Nitrogen & Care',
      titleBn: 'স্বয়ংক্রিয় নাইট্রোজেন টায়ার ও কেয়ার',
      icon: <Wind className="w-6 h-6 text-teal-400" />,
      tag: '99.5% Pure Nitrogen',
      badgeColor: 'border-teal-500/40 text-teal-400 bg-teal-950/40',
      description:
        'Pure dry nitrogen gas maintains consistent tyre pressure, prevents highway blowouts in hot weather, and improves vehicle fuel efficiency by up to 4%.',
      features: [
        'Digital computerized PSI calibration',
        'Touchless windshield cleaning service',
        'Complimentary safety fluids check'
      ]
    },
    {
      id: 'express-mart',
      title: '24/7 Orion Mart & Coffee Lounge',
      titleBn: '২৪/৭ ওরিয়ন মার্ট ও কফি লাউঞ্জ',
      icon: <Coffee className="w-6 h-6 text-rose-400" />,
      tag: 'Open 24/7',
      badgeColor: 'border-rose-500/40 text-rose-400 bg-rose-950/40',
      description:
        'A clean, modern rest stop featuring freshly brewed coffee, snacks, automotive fluids (coolants, lubricants, engine oils), clean restrooms, and prayer space.',
      features: [
        'Air-conditioned drivers waiting lounge',
        'Genuine branded synthetic motor oils',
        'High-speed guest Wi-Fi and mobile charging'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 relative bg-[#070a0f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>PREMIUM STATION INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered for Speed, Accuracy & Safety
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            From calibrated Autogas dispensing to quick cylinder swaps and fast EV charging, our station delivers the highest standard of fueling experience in Bangladesh.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-7 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
                    {item.icon}
                  </div>
                  <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs text-slate-400 font-sans block mb-3">
                  {item.titleBn}
                </span>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-light">
                  {item.description}
                </p>

                <div className="space-y-2 mb-6">
                  {item.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-xl font-mono text-xs text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-1.5 group-hover:text-white"
              >
                <span>Inquire or Book Service</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
