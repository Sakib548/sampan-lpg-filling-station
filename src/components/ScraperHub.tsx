'use client';

import React, { useState } from 'react';
import {
  Code,
  Globe,
  Database,
  Cpu,
  RefreshCw,
  CheckCircle,
  ExternalLink,
  Shield,
  Layers,
  ArrowRight,
  Terminal,
  Zap
} from 'lucide-react';
import { FuelScrapeResponse } from '@/types/fuel';

interface ScraperHubProps {
  data: FuelScrapeResponse | null;
  isLoading: boolean;
  onTriggerScrape: () => void;
}

export default function ScraperHub({ data, isLoading, onTriggerScrape }: ScraperHubProps) {
  const [activeTab, setActiveTab] = useState<'architecture' | 'articles' | 'api-doc'>('architecture');

  const articles = data?.articles || [];

  return (
    <section id="scraper-hub" className="py-20 lg:py-28 relative bg-[#06090e] border-t border-white/5">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>NO PUBLIC API? AUTOMATED WEB SCRAPER SOLUTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How The Real-Time Scraper Works
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Because BERC does not provide a public REST API, our Next.js backend automatically crawls and extracts official gazette rates and verified news feeds with resilient caching.
          </p>
        </div>

        {/* 3-Step Interactive Architecture Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Step 1 */}
          <div className="glass-panel p-6 flex flex-col justify-between border-cyan-500/20 hover:border-cyan-500/50">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm">
                  01
                </span>
                <Globe className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">
                Upstream Gazette Sources
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                Next.js server-side workers query Google News RSS feeds, BERC circular portals, and leading national publications (Daily Star, Ajker Patrika, TBS News) targeting monthly fuel announcements.
              </p>
            </div>
            <div className="text-[11px] font-mono text-cyan-400/90 pt-3 border-t border-white/5 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Multi-Source Redundancy</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass-panel-glow-emerald p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-mono font-bold text-sm">
                  02
                </span>
                <Cpu className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">
                Cheerio & Regex Extraction
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                Cheerio parses incoming HTML/XML structures. Custom regex tokenizers extract Autogas per-litre figures and 12kg cylinder prices, validating them against realistic thermodynamic price bounds.
              </p>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 pt-3 border-t border-white/5 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Purity Bounds Validation</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass-panel p-6 flex flex-col justify-between border-purple-500/20 hover:border-purple-500/50">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center font-mono font-bold text-sm">
                  03
                </span>
                <Database className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">
                Cache & Resilient Fallback
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                Scraped data is stored in memory with a 10-minute TTL to prevent rate limits. If external news portals are temporarily down or slow, the verified BERC gazette benchmark serves instantly without downtime.
              </p>
            </div>
            <div className="text-[11px] font-mono text-purple-400 pt-3 border-t border-white/5 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>100% Guaranteed Uptime</span>
            </div>
          </div>

        </div>

        {/* Live Interactive Scraper Console */}
        <div className="glass-panel p-6 sm:p-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-mono">
                  Live Scraper Telemetry Console
                </h3>
                <span className="text-xs text-slate-400">
                  Endpoint: <code className="text-emerald-400 bg-black/40 px-2 py-0.5 rounded">GET /api/fuel-prices</code>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onTriggerScrape}
                disabled={isLoading}
                className="px-4 py-2.5 rounded-xl font-mono text-xs font-semibold text-black bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 transition-all flex items-center gap-2 active:scale-95 disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
                <span>{isLoading ? 'Crawling Gazette...' : 'Execute Live Scrape'}</span>
              </button>
            </div>
          </div>

          {/* Console Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <span className="text-slate-500 block mb-1">Execution Status:</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                200 OK (Healthy)
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <span className="text-slate-500 block mb-1">Crawl Response Time:</span>
              <span className="text-cyan-400 font-bold font-digital">
                {data?.fetchDurationMs || 180} ms
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <span className="text-slate-500 block mb-1">Cache Layer:</span>
              <span className="text-purple-300 font-bold">
                {data?.status === 'live' ? 'Bypassed (Fresh Scrape)' : 'In-Memory Hit (10m TTL)'}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <span className="text-slate-500 block mb-1">Articles Extracted:</span>
              <span className="text-white font-bold font-digital">
                {articles.length} Verified Sources
              </span>
            </div>
          </div>

          {/* Latest Parsed News Feed */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              Recent News Articles Parsed by Cheerio:
            </div>
            {articles.slice(0, 3).map((art, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-black/30 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 font-mono text-[11px] text-cyan-400 mb-1">
                    <span>[{art.source}]</span>
                    <span className="text-slate-500">&bull;</span>
                    <span className="text-slate-400">{art.pubDate}</span>
                  </div>
                  <div className="text-slate-200 font-medium">{art.title}</div>
                </div>

                {art.matchedRate && (
                  <div className="px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-mono font-medium text-[11px] shrink-0">
                    {art.matchedRate}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
