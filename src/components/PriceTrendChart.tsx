'use client';

import React, { useState } from 'react';
import { TrendingUp, Calendar, Info, BarChart2 } from 'lucide-react';
import { HistoricalPricePoint } from '@/types/fuel';

interface PriceTrendChartProps {
  history: HistoricalPricePoint[];
}

export default function PriceTrendChart({ history }: PriceTrendChartProps) {
  const [selectedSeries, setSelectedSeries] = useState<'autogas' | 'cylinder12kg' | 'octane'>('autogas');
  const [hoveredPoint, setHoveredPoint] = useState<HistoricalPricePoint | null>(null);

  if (!history || history.length === 0) return null;

  // Chart dimension constants
  const chartWidth = 700;
  const chartHeight = 240;
  const paddingX = 40;
  const paddingY = 30;

  // Values based on selected series
  const values = history.map((h) => h[selectedSeries]);
  const minVal = Math.min(...values) * 0.98;
  const maxVal = Math.max(...values) * 1.02;

  // Generate SVG points
  const points = history.map((h, i) => {
    const x = paddingX + (i / (history.length - 1)) * (chartWidth - paddingX * 2);
    const y =
      chartHeight -
      paddingY -
      ((h[selectedSeries] - minVal) / (maxVal - minVal || 1)) * (chartHeight - paddingY * 2);
    return { x, y, data: h };
  });

  const pathD = points.reduce((acc, curr, idx, arr) => {
    if (idx === 0) return `M ${curr.x} ${curr.y}`;
    // Simple smooth curve using bezier control points
    const prev = arr[idx - 1];
    const cp1x = prev.x + (curr.x - prev.x) / 2;
    const cp1y = prev.y;
    const cp2x = prev.x + (curr.x - prev.x) / 2;
    const cp2y = curr.y;
    return `${acc} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
  }, '');

  // Fill area path
  const firstPoint = points[0];
  const lastPoint = points[points.length - 1];
  const areaD = `${pathD} L ${lastPoint.x} ${chartHeight - paddingY} L ${firstPoint.x} ${chartHeight - paddingY} Z`;

  const getSeriesColor = () => {
    if (selectedSeries === 'autogas') return { stroke: '#00f090', fill: 'url(#gradient-emerald)' };
    if (selectedSeries === 'cylinder12kg') return { stroke: '#00d2ff', fill: 'url(#gradient-cyan)' };
    return { stroke: '#ffb020', fill: 'url(#gradient-amber)' };
  };

  const currentColor = getSeriesColor();

  return (
    <section className="py-20 bg-[#080d16] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <BarChart2 className="w-3.5 h-3.5" />
              <span>BERC 6-MONTH PRICE TRAJECTORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Historical Price Fluctuations
            </h2>
            <p className="text-slate-400 mt-2 text-sm max-w-xl">
              Tracking monthly adjustments influenced by the Saudi Aramco CP Contract Price, shipping freight, and forex adjustments in Bangladesh.
            </p>
          </div>

          {/* Series selector buttons */}
          <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-xl border border-white/10 font-mono text-xs">
            <button
              onClick={() => setSelectedSeries('autogas')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                selectedSeries === 'autogas'
                  ? 'bg-emerald-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,144,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Auto Gas (Tk/L)
            </button>
            <button
              onClick={() => setSelectedSeries('cylinder12kg')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                selectedSeries === 'cylinder12kg'
                  ? 'bg-cyan-400 text-black font-bold shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              12kg Cylinder (Tk)
            </button>
            <button
              onClick={() => setSelectedSeries('octane')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                selectedSeries === 'octane'
                  ? 'bg-amber-400 text-black font-bold shadow-[0_0_15px_rgba(255,176,32,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Octane 95 (Tk/L)
            </button>
          </div>
        </div>

        {/* Chart Container */}
        <div className="glass-panel p-6 sm:p-8 relative">
          
          {/* Active hover info badge */}
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10 font-mono text-xs">
            <div className="text-slate-400 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>
                {hoveredPoint ? hoveredPoint.month : 'Hover any data point to inspect month & Saudi CP details'}
              </span>
            </div>

            <div className="text-right">
              {hoveredPoint ? (
                <div className="flex items-center gap-3">
                  <span className="text-slate-400">Rate:</span>
                  <span className="text-white font-bold text-sm font-digital">
                    Tk {hoveredPoint[selectedSeries].toFixed(2)}
                  </span>
                  <span className="text-slate-500">|</span>
                  <span className="text-cyan-400">Saudi CP: ${hoveredPoint.saudiCp}/MT</span>
                </div>
              ) : (
                <div className="text-emerald-400 font-semibold">
                  Latest: Tk {history[history.length - 1][selectedSeries].toFixed(2)}
                </div>
              )}
            </div>
          </div>

          {/* SVG Chart Graphic */}
          <div className="w-full overflow-x-auto">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="w-full h-56 sm:h-72 select-none"
            >
              <defs>
                <linearGradient id="gradient-emerald" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00f090" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#00f090" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="gradient-cyan" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#00d2ff" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="gradient-amber" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffb020" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#ffb020" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Horizontal Grid lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((pct, idx) => {
                const y = paddingY + pct * (chartHeight - paddingY * 2);
                const val = maxVal - pct * (maxVal - minVal);
                return (
                  <g key={idx}>
                    <line
                      x1={paddingX}
                      y1={y}
                      x2={chartWidth - paddingX}
                      y2={y}
                      stroke="rgba(255,255,255,0.06)"
                      strokeDasharray="4 4"
                    />
                    <text
                      x={paddingX - 8}
                      y={y + 3}
                      fill="#64748b"
                      fontSize="9"
                      fontFamily="monospace"
                      textAnchor="end"
                    >
                      {val.toFixed(0)}
                    </text>
                  </g>
                );
              })}

              {/* Area */}
              <path d={areaD} fill={currentColor.fill} />

              {/* Line */}
              <path
                d={pathD}
                fill="none"
                stroke={currentColor.stroke}
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Data points */}
              {points.map((pt, idx) => {
                const isHovered = hoveredPoint?.month === pt.data.month;
                return (
                  <g
                    key={idx}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredPoint(pt.data)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  >
                    {/* Invisible larger hover zone */}
                    <circle cx={pt.x} cy={pt.y} r="16" fill="transparent" />

                    {/* Visible outer circle */}
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={isHovered ? 7 : 4}
                      fill="#070a0f"
                      stroke={currentColor.stroke}
                      strokeWidth={isHovered ? 3 : 2}
                      className="transition-all duration-200"
                    />

                    {/* Month label along bottom */}
                    <text
                      x={pt.x}
                      y={chartHeight - 8}
                      fill={isHovered ? '#ffffff' : '#94a3b8'}
                      fontSize="10"
                      fontFamily="monospace"
                      textAnchor="middle"
                      fontWeight={isHovered ? 'bold' : 'normal'}
                    >
                      {pt.data.monthShort}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Regulatory Insight note */}
          <div className="mt-4 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-400 font-mono gap-2">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-cyan-400" />
              <span>
                Saudi Aramco CP benchmark for September 2026 settled at <strong>$562/MT</strong>, resulting in a <strong>Tk 0.58/L drop</strong> in Autogas.
              </span>
            </div>
            <div className="text-slate-500">
              Source: BERC Gazette Public Circulars
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
