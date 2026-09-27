'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Leaf, Car, Shield, Sparkles } from 'lucide-react';
import { FuelPrice } from '@/types/fuel';

interface SavingsCalculatorProps {
  prices: FuelPrice[];
  initialFuelId?: string;
  onOpenBooking: () => void;
}

export default function SavingsCalculator({
  prices,
  initialFuelId = 'octane',
  onOpenBooking,
}: SavingsCalculatorProps) {
  // Autogas price (default 73.09)
  const autogasPrice = prices.find((p) => p.id === 'autogas')?.currentPrice || 73.09;
  
  // States
  const [selectedBaseline, setSelectedBaseline] = useState<string>(initialFuelId);
  const [monthlyKm, setMonthlyKm] = useState<number>(1800);
  const [mileage, setMileage] = useState<number>(9.5); // km/L
  const [vehiclePreset, setVehiclePreset] = useState<string>('sedan');

  // Baseline fuel details
  const baselineFuel = prices.find((p) => p.id === selectedBaseline) || prices.find((p) => p.id === 'octane') || {
    id: 'octane',
    name: 'Octane 95',
    currentPrice: 165.0,
  };

  // Preset handlers
  const applyPreset = (preset: string) => {
    setVehiclePreset(preset);
    if (preset === 'sedan') {
      setMonthlyKm(1200);
      setMileage(10.0);
    } else if (preset === 'commuter') {
      setMonthlyKm(2500);
      setMileage(10.5);
    } else if (preset === 'microbus') {
      setMonthlyKm(3800);
      setMileage(7.5);
    } else if (preset === 'suv') {
      setMonthlyKm(2200);
      setMileage(8.0);
    }
  };

  // Calculations
  // Gasoline/Octane litres
  const litresNeeded = monthlyKm / (mileage || 1);
  const monthlyBaselineCost = litresNeeded * baselineFuel.currentPrice;

  // Autogas consumption: Autogas has slight lower volumetric energy density (~92% mileage of gasoline)
  const autogasLitresNeeded = litresNeeded / 0.92;
  const monthlyAutogasCost = autogasLitresNeeded * autogasPrice;

  const monthlySavings = Math.max(0, monthlyBaselineCost - monthlyAutogasCost);
  const yearlySavings = monthlySavings * 12;
  const savingsPercent = Math.round((monthlySavings / (monthlyBaselineCost || 1)) * 100);

  // Conversion kit payback estimation (~65,000 BDT for Italian Tomasetto/BRC sequential kit)
  const kitCost = 65000;
  const paybackMonths = monthlySavings > 0 ? (kitCost / monthlySavings).toFixed(1) : 'N/A';

  // CO2 reduction (Autogas emits ~21% less CO2 than petrol/diesel per km)
  const co2ReductionKg = Math.round(litresNeeded * 2.31 * 0.21);

  return (
    <section id="calculator" className="py-20 lg:py-28 relative bg-[#06090e] border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>FINANCIAL ROI ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How Much Will You Save With Auto Gas?
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Switching your vehicle or fleet from Octane/Petrol to BERC-regulated Auto Gas (LPG) reduces your fuel budget by over 40% every single month.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 space-y-7">
            
            {/* Presets */}
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                1. Select Vehicle Profile Preset:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'sedan', label: 'Private Car', sub: '1,200 km/mo' },
                  { id: 'commuter', label: 'Ride-Share / Uber', sub: '2,500 km/mo' },
                  { id: 'microbus', label: 'HiAce / Micro', sub: '3,800 km/mo' },
                  { id: 'suv', label: 'SUV / Pickup', sub: '2,200 km/mo' },
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => applyPreset(p.id)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      vehiclePreset === p.id
                        ? 'bg-emerald-500/20 border-emerald-500/50 text-white shadow-[0_0_15px_rgba(0,240,144,0.2)]'
                        : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:border-white/10'
                    }`}
                  >
                    <div className="text-xs font-semibold">{p.label}</div>
                    <div className="text-[10px] text-slate-500 font-mono mt-0.5">{p.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Baseline Fuel comparison */}
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                2. Comparing Against Current Fuel:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'octane', name: 'Octane 95', price: prices.find(p => p.id === 'octane')?.currentPrice || 165.0 },
                  { id: 'petrol', name: 'Petrol', price: prices.find(p => p.id === 'petrol')?.currentPrice || 160.0 },
                  { id: 'diesel', name: 'Diesel', price: prices.find(p => p.id === 'diesel')?.currentPrice || 135.0 },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedBaseline(f.id)}
                    className={`p-3 rounded-xl text-center border font-mono transition-all ${
                      selectedBaseline === f.id
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-white shadow-[0_0_15px_rgba(0,210,255,0.2)]'
                        : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:border-white/10'
                    }`}
                  >
                    <div className="text-xs font-bold">{f.name}</div>
                    <div className="text-emerald-400 text-xs font-digital mt-1">Tk {f.price.toFixed(2)}/L</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Monthly Distance */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400">Monthly Driving Distance:</span>
                <span className="text-emerald-400 font-bold text-sm font-digital">{monthlyKm.toLocaleString()} km / month</span>
              </div>
              <input
                type="range"
                min="500"
                max="6000"
                step="100"
                value={monthlyKm}
                onChange={(e) => {
                  setMonthlyKm(Number(e.target.value));
                  setVehiclePreset('custom');
                }}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>500 km</span>
                <span>2,500 km</span>
                <span>4,000 km</span>
                <span>6,000 km</span>
              </div>
            </div>

            {/* Slider 2: Vehicle Mileage */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400">Current Vehicle Fuel Economy:</span>
                <span className="text-cyan-400 font-bold text-sm font-digital">{mileage.toFixed(1)} km / Litre</span>
              </div>
              <input
                type="range"
                min="6"
                max="18"
                step="0.5"
                value={mileage}
                onChange={(e) => {
                  setMileage(Number(e.target.value));
                  setVehiclePreset('custom');
                }}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>6 km/L (Heavy SUV)</span>
                <span>10 km/L (Sedan)</span>
                <span>14 km/L (Hybrid)</span>
                <span>18 km/L</span>
              </div>
            </div>

            {/* Thermodynamic parity note */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-[11px] text-slate-400 font-mono flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Calculation incorporates <strong>92% volumetric energy equivalence</strong> of Autogas, certified BERC rate of <strong>Tk {autogasPrice.toFixed(2)}/L</strong>, and current {baselineFuel.name} rate of <strong>Tk {baselineFuel.currentPrice.toFixed(2)}/L</strong>.
              </span>
            </div>

          </div>

          {/* Savings Results Card */}
          <div className="lg:col-span-5 glass-panel-glow-emerald p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">PROJECTED SAVINGS</span>
                  <h3 className="text-xl font-bold text-white">Your Autogas Dividend</h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500 text-black font-mono font-bold text-xs shadow-[0_0_15px_rgba(0,240,144,0.4)]">
                  Save {savingsPercent}%
                </div>
              </div>

              {/* Huge Savings readout */}
              <div className="p-6 rounded-2xl bg-black/60 border border-emerald-500/30 text-center mb-6 shadow-inner">
                <span className="text-xs text-slate-400 font-mono uppercase tracking-wider block mb-1">
                  ESTIMATED MONTHLY NET SAVINGS
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400 font-digital tracking-tight my-1">
                  Tk {Math.round(monthlySavings).toLocaleString()}
                </div>
                <div className="text-xs text-cyan-300 font-mono mt-2">
                  That&apos;s <strong>Tk {Math.round(yearlySavings).toLocaleString()}</strong> saved every year!
                </div>
              </div>

              {/* Side-by-side cost breakdown */}
              <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-slate-400 block mb-1">{baselineFuel.name} Cost:</span>
                  <span className="text-white font-bold text-base font-digital">
                    Tk {Math.round(monthlyBaselineCost).toLocaleString()}
                  </span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">per month</span>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                  <span className="text-emerald-400 block mb-1">Auto Gas Cost:</span>
                  <span className="text-emerald-300 font-bold text-base font-digital">
                    Tk {Math.round(monthlyAutogasCost).toLocaleString()}
                  </span>
                  <span className="text-[10px] text-emerald-500 block mt-0.5">per month</span>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2.5 text-xs font-mono text-slate-300 mb-6">
                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-cyan-400" /> Kit Payback Time:
                  </span>
                  <span className="text-white font-semibold">~{paybackMonths} Months</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Leaf className="w-3.5 h-3.5 text-emerald-400" /> CO₂ Emission Reduced:
                  </span>
                  <span className="text-emerald-400 font-semibold">{co2ReductionKg} kg / month</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-amber-400" /> Engine Life Impact:
                  </span>
                  <span className="text-cyan-300 font-semibold">Zero Carbon Deposit</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 rounded-xl font-semibold text-xs font-sans tracking-wider text-black bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,144,0.3)] active:scale-95 uppercase"
            >
              <span>Book Autogas Refill or Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
