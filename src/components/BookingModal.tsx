'use client';

import React, { useState } from 'react';
import { X, Flame, CheckCircle, Phone, MapPin, Calendar, Clock, Sparkles } from 'lucide-react';
import { FuelPrice } from '@/types/fuel';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prices: FuelPrice[];
  defaultFuelName?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  prices,
  defaultFuelName = '12 kg LPG Cylinder',
}: BookingModalProps) {
  const [selectedProduct, setSelectedProduct] = useState(defaultFuelName);
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryType, setDeliveryType] = useState<'station-pickup' | 'home-delivery'>('station-pickup');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  // Selected item price calculation
  const foundPrice = prices.find((p) => p.name === selectedProduct);
  const unitPrice = foundPrice ? foundPrice.currentPrice : 1585.0;
  const deliveryFee = deliveryType === 'home-delivery' ? 120 : 0;
  const totalPrice = unitPrice * quantity + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0b101c] border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Reservation Confirmed!</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6">
              Thank you, <strong className="text-emerald-400">{name || 'Customer'}</strong>. Your request for{' '}
              <strong className="text-cyan-400">{quantity}x {selectedProduct}</strong> has been logged. Our station team will contact you shortly at{' '}
              <strong className="text-white">{phone}</strong>.
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-left mb-6 space-y-1 text-slate-300">
              <div>Reference ID: <span className="text-emerald-400 font-bold">#ORN-{Math.floor(100000 + Math.random() * 900000)}</span></div>
              <div>Estimated Total: <span className="text-white font-bold font-digital">Tk {totalPrice.toFixed(2)}</span></div>
              <div>Fulfillment: <span className="text-cyan-400">{deliveryType === 'home-delivery' ? 'Express Home Delivery' : 'Fast Station Counter Pickup'}</span></div>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl font-semibold text-xs text-black bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 transition-all font-sans uppercase tracking-wider"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Flame className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Fast Service Order</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              LPG Cylinder Swap & Refill
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Product Selection */}
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                  Select Product:
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm focus:outline-none focus:border-emerald-500/60"
                >
                  <option value="12 kg LPG Cylinder" className="bg-[#0b101c]">12 kg LPG Cylinder (Household standard - Tk 1,585)</option>
                  <option value="35 kg Commercial Cylinder" className="bg-[#0b101c]">35 kg Commercial Cylinder (Restaurants - Tk 4,623)</option>
                  <option value="45 kg Industrial Cylinder" className="bg-[#0b101c]">45 kg Industrial Cylinder (Heavy Duty - Tk 5,944)</option>
                  <option value="Auto Gas (LPG)" className="bg-[#0b101c]">Auto Gas Refill Slot (Vehicles - Tk 73.09/L)</option>
                </select>
              </div>

              {/* Quantity & Delivery Type */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-sm focus:outline-none focus:border-emerald-500/60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                    Fulfillment:
                  </label>
                  <select
                    value={deliveryType}
                    onChange={(e) => setDeliveryType(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/60"
                  >
                    <option value="station-pickup" className="bg-[#0b101c]">Station Pickup (Free)</option>
                    <option value="home-delivery" className="bg-[#0b101c]">Home Delivery (+Tk 120)</option>
                  </select>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tanvir Ahmed"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="017xxxxxxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/60 font-mono"
                  />
                </div>
              </div>

              {/* Address if delivery */}
              {deliveryType === 'home-delivery' && (
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                    Delivery Address (Dhaka Metro):
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="House, Road, Area (e.g. House 12, Road 4, Banani)"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/60"
                  />
                </div>
              )}

              {/* Cost Summary */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="text-slate-400">Total Estimated Cost:</span>
                  <div className="text-white font-bold text-base font-digital">
                    Tk {totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </div>
                </div>
                <div className="text-right text-[11px] text-emerald-400">
                  <span>BERC Gazette Compliant</span>
                  <div className="text-slate-500 text-[10px]">No Extra Surcharge</div>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 transition-all shadow-[0_0_20px_rgba(0,240,144,0.3)] active:scale-95 mt-2"
              >
                Confirm Cylinder Swap / Booking
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
