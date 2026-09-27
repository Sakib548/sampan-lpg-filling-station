'use client';

import React, { useState } from 'react';
import {
  Flame,
  Fuel,
  RefreshCw,
  TrendingDown,
  TrendingUp,
  Minus,
  ExternalLink,
  Code2,
  FileText,
  Clock,
  Sparkles,
  Zap,
  Info,
  CheckCircle,
  AlertCircle,
  SlidersHorizontal,
  Check,
  X
} from 'lucide-react';
import { FuelPrice, FuelScrapeResponse } from '@/types/fuel';

interface FuelPriceBoardProps {
  data: FuelScrapeResponse | null;
  isLoading: boolean;
  onTriggerScrape: () => void;
  onSelectFuelForCalc: (fuelId: string) => void;
  onOpenBookingForFuel: (fuelName: string) => void;
  onUpdatePrice?: (fuelId: string, newPrice: number) => void;
}

export default function FuelPriceBoard({
  data,
  isLoading,
  onTriggerScrape,
  onSelectFuelForCalc,
  onOpenBookingForFuel,
  onUpdatePrice,
}: FuelPriceBoardProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'autogas' | 'liquid'>('all');
  const [showScraperDetails, setShowScraperDetails] = useState(false);
  const [showApiPreview, setShowApiPreview] = useState(false);
  const [showPriceEditor, setShowPriceEditor] = useState(false);
  const [editingPrices, setEditingPrices] = useState<Record<string, number>>({});

  const ALLOWED_FUEL_IDS = ['autogas', 'octane', 'petrol', 'diesel'];
  const prices = (data?.prices || []).filter((p) => ALLOWED_FUEL_IDS.includes(p.id));
  const articles = data?.articles || [];
  const filteredPrices =
    activeTab === 'all'
      ? prices
      : prices.filter((p) => p.category === activeTab);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'autogas':
        return <Flame className="w-5 h-5 text-amber-600" />;
      case 'liquid':
      default:
        return <Fuel className="w-5 h-5 text-amber-600" />;
    }
  };

  const handleOpenEditor = () => {
    const initial: Record<string, number> = {};
    prices.forEach((p) => {
      initial[p.id] = p.currentPrice;
    });
    setEditingPrices(initial);
    setShowPriceEditor(true);
  };

  const handleSavePrices = () => {
    if (onUpdatePrice) {
      Object.entries(editingPrices).forEach(([id, val]) => {
        if (!isNaN(val) && val > 0) {
          onUpdatePrice(id, val);
        }
      });
    }
    setShowPriceEditor(false);
  };

  return (
    <section id="live-prices" className="py-20 lg:py-28 relative bg-[#f8f7f4] text-slate-900 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-mono mb-3">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              <span>LIVE SCRAPED BENCHMARK RATES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Current Fuel Rates Board
            </h2>
            <p className="text-slate-600 mt-2 max-w-xl text-sm sm:text-base font-light">
              Updated reflecting recent government fuel hikes and official BERC gazette notifications.
            </p>
          </div>

          {/* Regulatory Benchmark Status Pill */}
          <div className="flex items-center gap-2.5 bg-white px-4 py-2.5 rounded-2xl border border-slate-200 shadow-sm font-mono text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <span className="text-slate-500 text-[10px] block leading-none">REGULATORY BENCHMARK:</span>
              <span className="text-slate-900 font-bold font-sans">
                Official BERC Gazette Rates &bull; September 2026
              </span>
            </div>
          </div>

          {/* Action buttons commented out for clean customer-facing UI
          <div className="flex flex-wrap items-center gap-2.5 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-xs font-mono pr-3 border-r border-slate-200 hidden sm:block">
              <div className="text-slate-500">LAST SYNCED:</div>
              <div className="text-slate-900 font-semibold">
                {data?.timestamp ? new Date(data.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Live'}
              </div>
            </div>

            <button
              onClick={onTriggerScrape}
              disabled={isLoading}
              className="px-3.5 py-2 rounded-xl font-mono text-xs font-semibold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95 disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
              <span>{isLoading ? 'Syncing...' : 'Sync Rates'}</span>
            </button>

            <button
              onClick={handleOpenEditor}
              className="px-3 py-2 rounded-xl font-mono text-xs font-medium text-amber-900 hover:bg-amber-100 bg-amber-50 border border-amber-300 transition-all flex items-center gap-1.5"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-amber-700" />
              <span>Adjust Pump Rates</span>
            </button>

            <button
              onClick={() => setShowScraperDetails(!showScraperDetails)}
              className="px-3 py-2 rounded-xl font-mono text-xs text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-600" />
              <span>{showScraperDetails ? 'Hide Details' : 'Sources'}</span>
            </button>
          </div>
          */}
        </div>

        {/* Modal: Adjust Station Pump Rates */}
        {showPriceEditor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-2xl text-slate-900">
              <button
                onClick={() => setShowPriceEditor(false)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <SlidersHorizontal className="w-5 h-5 text-amber-600" />
                <h3 className="text-lg font-bold text-slate-900">Adjust Station Pump Rates</h3>
              </div>
              <p className="text-xs text-slate-500 mb-5">
                Set the exact dispenser prices active right now at Sampan LPG Filling Station. Changes will immediately update live across the entire website and calculator.
              </p>

              <div className="space-y-3.5 max-h-80 overflow-y-auto pr-1">
                {prices.map((fuel) => (
                  <div key={fuel.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">{fuel.name}</span>
                      <span className="text-[10px] text-slate-500 font-mono">per {fuel.unit}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono">
                      <span className="text-xs text-amber-700 font-bold">Tk</span>
                      <input
                        type="number"
                        step="0.01"
                        value={editingPrices[fuel.id] ?? fuel.currentPrice}
                        onChange={(e) => {
                          const val = parseFloat(e.target.value);
                          setEditingPrices((prev) => ({
                            ...prev,
                            [fuel.id]: isNaN(val) ? 0 : val
                          }));
                        }}
                        className="w-24 px-2 py-1 rounded-lg bg-white border border-slate-300 text-slate-900 font-mono text-sm focus:outline-none focus:border-amber-500 text-right shadow-inner"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
                <button
                  onClick={() => setShowPriceEditor(false)}
                  className="px-4 py-2 rounded-xl text-xs font-mono text-slate-600 hover:text-slate-900 bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePrices}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 flex items-center gap-1.5 shadow-sm"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Apply New Pump Prices</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Scraper Diagnostics Expandable Panel */}
        {showScraperDetails && (
          <div className="mb-10 p-6 rounded-2xl bg-white border border-slate-200 shadow-md transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-4 border-b border-slate-200 gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-cyan-600 animate-pulse" />
                <h4 className="text-base font-bold text-slate-900 font-mono">
                  Automated Web Scraper Pipeline Status
                </h4>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                  {data?.status === 'live' ? 'Fresh Live Scrape' : 'Memory Cached'}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-600">
                <span>Latency: <strong className="text-emerald-700">{data?.fetchDurationMs || 180}ms</strong></span>
                <span>Target: <strong className="text-cyan-700">BERC Gazette & BD Media</strong></span>
                <button
                  onClick={() => setShowApiPreview(!showApiPreview)}
                  className="text-cyan-700 hover:underline flex items-center gap-1"
                >
                  <Code2 className="w-3 h-3" />
                  <span>{showApiPreview ? 'Hide JSON' : 'View API'}</span>
                </button>
              </div>
            </div>

            {/* Articles Scraped */}
            <div className="text-xs text-slate-500 font-mono mb-3">
              PARSED SOURCES & HEADLINES:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
              {articles.map((art, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-400 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-1.5">
                      <span className="text-cyan-700 font-semibold">{art.source}</span>
                      <span>{art.pubDate ? new Date(art.pubDate).toLocaleDateString([], { month: 'short', day: 'numeric' }) : 'Sep 2026'}</span>
                    </div>
                    <p className="text-slate-800 text-xs line-clamp-2 leading-snug">
                      {art.title}
                    </p>
                  </div>

                  {art.matchedRate && (
                    <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-[11px]">
                      <span className="text-emerald-700 font-mono font-medium">
                        {art.matchedRate}
                      </span>
                      <a
                        href={art.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-slate-700"
                        title="Open Source Article"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Raw JSON API preview */}
            {showApiPreview && (
              <div className="mt-4 p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-[11px] text-emerald-400 overflow-x-auto max-h-64">
                <div className="text-slate-400 mb-1">// GET /api/fuel-prices response</div>
                <pre>{JSON.stringify(data, null, 2)}</pre>
              </div>
            )}
          </div>
        )}

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-200 pb-4 font-mono text-xs">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white font-semibold shadow-sm'
                : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200 shadow-sm'
            }`}
          >
            All Station Fuels ({prices.length})
          </button>

          <button
            onClick={() => setActiveTab('autogas')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'autogas'
                ? 'bg-amber-500 text-black font-semibold shadow-sm'
                : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200 shadow-sm'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Auto Gas (LPG)</span>
          </button>

          <button
            onClick={() => setActiveTab('liquid')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'liquid'
                ? 'bg-slate-900 text-white font-semibold shadow-sm'
                : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200 shadow-sm'
            }`}
          >
            <Fuel className="w-3.5 h-3.5 text-amber-600" />
            <span>Liquid Fuels (Octane / Petrol / Diesel)</span>
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPrices.map((fuel) => {
            const isAutogas = fuel.id === 'autogas';
            const isNegative = fuel.change < 0;
            const isPositive = fuel.change > 0;

            return (
              <div
                key={fuel.id}
                className={`flex flex-col justify-between p-6 rounded-2xl transition-all duration-300 group ${
                  isAutogas
                    ? 'bg-gradient-to-b from-amber-50/60 to-white border-2 border-amber-400 shadow-[0_8px_30px_rgba(251,191,36,0.18)] relative'
                    : 'bg-white border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:border-slate-300'
                }`}
              >
                {/* Featured tag for autogas */}
                {isAutogas && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-amber-400 text-black font-mono text-[10px] font-bold tracking-wider uppercase shadow-sm">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-slate-100 border border-slate-200 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
                        {getCategoryIcon(fuel.category)}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-base leading-tight">
                          {fuel.name}
                        </h3>
                        <span className="text-xs text-slate-500 font-sans">
                          {fuel.nameBn}
                        </span>
                      </div>
                    </div>

                    {/* Change Pill */}
                    <div
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-medium ${
                        isPositive
                          ? 'bg-rose-100 text-rose-800 border border-rose-200'
                          : isNegative
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {isPositive ? (
                        <>
                          <TrendingUp className="w-3 h-3" />
                          <span>+{fuel.change}</span>
                        </>
                      ) : isNegative ? (
                        <>
                          <TrendingDown className="w-3 h-3" />
                          <span>{fuel.change}</span>
                        </>
                      ) : (
                        <>
                          <Minus className="w-3 h-3" />
                          <span>Same</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Main Price Tag */}
                  <div className="my-5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-digital tracking-tight">
                          Tk {fuel.currentPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                        <span className="text-xs font-mono text-slate-500">
                          / {fuel.unit}
                        </span>
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono mt-1 flex items-center justify-between">
                      <span>Prev: Tk {fuel.previousPrice.toFixed(2)}</span>
                      <span>{fuel.authority.split('(')[0].trim()}</span>
                    </div>
                  </div>

                  {/* Specs List */}
                  <div className="space-y-1.5 mb-6 text-xs font-mono">
                    {fuel.specs.slice(0, 3).map((spec, i) => (
                      <div key={i} className="flex justify-between py-1 border-b border-slate-100 text-[11px]">
                        <span className="text-slate-500">{spec.label}:</span>
                        <span className="text-slate-800 font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="pt-2">
                  <a
                    href="#location"
                    className="w-full py-2.5 rounded-xl font-medium text-xs text-slate-900 bg-slate-100 hover:bg-amber-400 hover:text-black border border-slate-200 transition-all flex items-center justify-center gap-1.5 active:scale-95 shadow-sm"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 group-hover:text-black" />
                    <span>Get at This Rate</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
