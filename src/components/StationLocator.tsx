'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Check, Activity, Zap, Flame, Fuel } from 'lucide-react';

export default function StationLocator() {
  const [selectedCity, setSelectedCity] = useState<'all' | 'dhaka' | 'highway' | 'ctg'>('all');

  const stations = [
    {
      id: 'dhaka-tejgaon',
      name: 'Orion Flagship Hub - Tejgaon Link Road',
      nameBn: 'ওরিয়ন ফ্ল্যাগশিপ হাব - তেজগাঁও লিংক রোড',
      city: 'dhaka',
      address: 'Plot 48/B, Bir Uttam Mir Shawkat Sarak, Tejgaon Industrial Area, Dhaka 1208',
      phone: '+880 1711-889922',
      status: 'Open 24/7',
      activeNozzles: '8 Autogas + 4 Liquid',
      waitTime: '2 mins',
      facilities: ['Autogas (LPG)', 'Cylinder Swap', 'Octane 95', 'Euro 4 Diesel', '120kW EV DC Fast', 'Orion Cafe'],
      mapUrl: 'https://maps.google.com/?q=Tejgaon+Dhaka'
    },
    {
      id: 'dhaka-mirpur',
      name: 'Mirpur-10 Multi-Fuel & Auto Gas Station',
      nameBn: 'মিরপুর-১০ মাল্টি-ফুয়েল ও অটোগ্যাস স্টেশন',
      city: 'dhaka',
      address: 'Near Mirpur-10 Roundabout & Metro Pillar 240, Mirpur, Dhaka 1216',
      phone: '+880 1711-889933',
      status: 'Open 24/7',
      activeNozzles: '6 Autogas + 2 Liquid',
      waitTime: '3 mins',
      facilities: ['Autogas (LPG)', '12kg Cylinder Swap', 'Octane 95', 'Tyre Nitrogen', '24/7 Mart'],
      mapUrl: 'https://maps.google.com/?q=Mirpur+10+Dhaka'
    },
    {
      id: 'highway-gazipur',
      name: 'Gazipur Highway Mega Hub (Dhaka-Mymensingh Hwy)',
      nameBn: 'গাজীপুর হাইওয়ে মেগা হাব (ঢাকা-ময়মনসিংহ মহাসড়ক)',
      city: 'highway',
      address: 'Chandana Chowrasta Bypass, Gazipur Highway, Gazipur 1702',
      phone: '+880 1711-889944',
      status: 'Open 24/7',
      activeNozzles: '12 Autogas + Commercial Trucks',
      waitTime: '1 min',
      facilities: ['Autogas (LPG)', '35kg/45kg Commercial Cylinders', 'Diesel High Flow', 'Restroom & Prayer Room'],
      mapUrl: 'https://maps.google.com/?q=Gazipur+Chowrasta'
    },
    {
      id: 'ctg-port',
      name: 'Chittagong Port Expressway Station',
      nameBn: 'চট্টগ্রাম পোর্ট এক্সপ্রেসওয়ে স্টেশন',
      city: 'ctg',
      address: 'Toll Plaza Approach, Port Connecting Road, Halishahar, Chittagong 4216',
      phone: '+880 1711-889955',
      status: 'Open 24/7',
      activeNozzles: '8 Autogas + EV Supercharger',
      waitTime: '2 mins',
      facilities: ['Autogas (LPG)', 'Cylinder Swap', 'Octane 95', '120kW EV Fast Charge'],
      mapUrl: 'https://maps.google.com/?q=Chittagong+Halishahar'
    }
  ];

  const filteredStations =
    selectedCity === 'all'
      ? stations
      : stations.filter((s) => s.city === selectedCity);

  return (
    <section id="locations" className="py-20 lg:py-28 relative bg-[#070a0f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>STATION NETWORK DIRECTORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Find Your Nearest Station
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-xl">
              All stations are equipped with 24/7 calibrated dispensers, genuine BERC cylinder swap inventory, and digital billing.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-xl border border-white/10 font-mono text-xs">
            <button
              onClick={() => setSelectedCity('all')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                selectedCity === 'all'
                  ? 'bg-emerald-500 text-black font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Hubs
            </button>
            <button
              onClick={() => setSelectedCity('dhaka')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                selectedCity === 'dhaka'
                  ? 'bg-emerald-500 text-black font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Dhaka Metro
            </button>
            <button
              onClick={() => setSelectedCity('highway')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                selectedCity === 'highway'
                  ? 'bg-emerald-500 text-black font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Highway Mega Hub
            </button>
            <button
              onClick={() => setSelectedCity('ctg')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                selectedCity === 'ctg'
                  ? 'bg-emerald-500 text-black font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Chittagong
            </button>
          </div>
        </div>

        {/* Stations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredStations.map((station) => (
            <div
              key={station.id}
              className="glass-panel p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-500/40 transition-all group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {station.name}
                    </h3>
                    <span className="text-xs text-slate-400 font-sans">
                      {station.nameBn}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-xs font-mono shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{station.status}</span>
                  </span>
                </div>

                <div className="space-y-2 mb-4 text-xs font-mono text-slate-400">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{station.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <a href={`tel:${station.phone}`} className="text-slate-300 hover:text-white">
                      {station.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Active: <strong className="text-white">{station.activeNozzles}</strong> &bull; Wait: <strong className="text-emerald-400">{station.waitTime}</strong></span>
                  </div>
                </div>

                {/* Facilities Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {station.facilities.map((fac, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300"
                    >
                      {fac}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <a
                  href={station.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl font-mono text-xs font-semibold text-black bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 transition-all flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Live Directions</span>
                </a>

                <a
                  href={`tel:${station.phone}`}
                  className="px-4 py-2.5 rounded-xl font-mono text-xs text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call Station</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
