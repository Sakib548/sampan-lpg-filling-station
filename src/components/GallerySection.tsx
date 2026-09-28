'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, Tag, ShieldCheck, Sparkles } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'forecourt' | 'lpg' | 'highway';
  categoryLabel: string;
  src: string;
  description: string;
  features: string[];
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'forecourt-canopy',
    title: 'Main Station Canopy & Multi-Lane Forecourt',
    subtitle: 'Sampan Filling Station',
    category: 'forecourt',
    categoryLabel: 'Conventional Forecourt',
    src: '/images/gallery/Filling-Station-1.jpg',
    description: 'Expansive daytime aerial perspective of the multi-lane fueling forecourt, high-clearance illuminated canopy, paved apron, and station administration center.',
    features: ['High-Clearance Heavy Truck Canopy', 'Multi-Vehicle Turning Radius', 'High-Flow Dispenser Pumps']
  },
  {
    id: 'forecourt-architectural-bay',
    title: 'Architectural Forecourt & Dedicated Pump Bays',
    subtitle: 'Sampan Filling Station',
    category: 'forecourt',
    categoryLabel: 'Forecourt Architecture',
    src: '/images/gallery/new1.jpg',
    description: 'Elevated perspective showcasing the station forecourt, distinctive tensile canopy structures over dedicated dispenser islands, and administrative complex.',
    features: ['Tensile Canopy Architecture', 'Wide Turning Apron', 'Dual Dispensing Islands']
  },
  {
    id: 'dispenser-islands',
    title: 'High-Precision Digital Dispensing Islands',
    subtitle: 'Petrol, Octane 95 & High-Speed Diesel',
    category: 'forecourt',
    categoryLabel: 'Dispensing Islands',
    src: '/images/gallery/Filling-Station-2.jpg',
    description: 'State-of-the-art calibrated digital fuel dispensers with automated auto-cut nozzles, emergency shutoffs, and wide multi-bay approach lanes.',
    features: ['BERC Calibrated Metering', 'Zero-Spill Nozzles', 'Quad-Vehicle Simultaneous Service']
  },
  {
    id: 'octane-bay-complex',
    title: 'Dedicated Octane Bay & Modern Station Complex',
    subtitle: 'Sampan Fueling & Admin Complex',
    category: 'forecourt',
    categoryLabel: 'Refueling Bay & Fleet',
    src: '/images/gallery/new2.jpg',
    description: 'Ground-level view of the heavy-duty canopy truss, dedicated Octane dispensing unit, station road supply tanker, and contemporary brick-and-glass administrative building.',
    features: ['High-Octane Dedicated Island', 'Sampan Supply Tanker', 'Administrative Building']
  },
  {
    id: 'lpg-bulk-storage',
    title: 'Certified High-Pressure LPG Autogas Unit',
    subtitle: 'Sampan LPG Filling Station',
    category: 'lpg',
    categoryLabel: 'LPG Autogas System',
    src: '/images/gallery/WhatsApp-Image-2024-05-29-at-3.16.53-AM-1.jpeg',
    description: 'Heavy-duty certified pressurized LPG bulk tank installation with cryogenic valving, vapor recovery compressors, and dual digital Autogas dispensers.',
    features: ['Explosion-Proof Valving', 'High Pressure Gas Compressing', 'Zero Vapor Leakage Tech']
  },
  {
    id: 'night-forecourt',
    title: '24/7 Illuminated Night-Time Operation',
    subtitle: 'Safe, High-Visibility Highway Refueling',
    category: 'forecourt',
    categoryLabel: 'Night Operations',
    src: '/images/gallery/hero (1).jpeg',
    description: 'Floodlit canopy lighting and clear highway signage ensuring safety and rapid refueling for long-haul trucks, night intercity buses, and family cars 24 hours a day.',
    features: ['Continuous LED Floodlighting', 'High-Visibility Pylon Sign', '24/7 Security & CCTV']
  },
  {
    id: 'highway-complex',
    title: 'Integrated Highway Rest Stop & Dining Complex',
    subtitle: 'Beside Sampan Highway Inn Restaurant',
    category: 'highway',
    categoryLabel: 'Integrated Amenities',
    src: '/images/gallery/hero.jpeg',
    description: 'Direct adjoining access to Sampan Highway Inn Restaurant, Sweet Shop, Convenience Mart, and spacious traveler parking directly beside the fuel pumps.',
    features: ['Direct Restaurant Forecourt Walk', 'Family Dining & Sweets', 'Ample Long-Haul Parking']
  }
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<'all' | 'forecourt' | 'lpg' | 'highway'>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems = activeTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev! + 1) % filteredItems.length);
      }
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
      }
    },
    [selectedImageIndex, filteredItems.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 relative bg-[#090b10] border-t border-white/5 overflow-hidden">
      {/* Background ambience */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-primary/[0.04] blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-cyan-500/[0.03] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>STATION VISUAL TOUR & GALLERY</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Forecourt & Facility{' '}
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            Take a visual tour of our unified 2-in-1 fueling complex on the Dhaka-Khulna Highway.
            From high-clearance liquid fuel canopies to certified Autogas LPG storage and welcoming highway rest facilities.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'All Photos', count: GALLERY_ITEMS.length },
            { id: 'forecourt', label: 'Filling Station Forecourt', count: GALLERY_ITEMS.filter(i => i.category === 'forecourt').length },
            { id: 'lpg', label: 'LPG Gas Station', count: GALLERY_ITEMS.filter(i => i.category === 'lpg').length },
            { id: 'highway', label: 'Highway Inn & Rest Stop', count: GALLERY_ITEMS.filter(i => i.category === 'highway').length },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-amber-400 text-black font-bold shadow-[0_0_20px_rgba(251,191,36,0.25)]'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                activeTab === tab.id ? 'bg-black/20 text-black' : 'bg-white/10 text-slate-400'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 hover:border-amber-400/50 shadow-lg hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-black/20 to-black/30 group-hover:via-transparent transition-colors duration-300" />

                {/* Floating category badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-amber-300 flex items-center gap-1.5 shadow-md">
                  <Tag className="w-3 h-3 text-amber-400" />
                  <span>{item.categoryLabel}</span>
                </div>

                {/* Hover Maximize Prompt */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-amber-300" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#0e121a] to-[#090b10]">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Highlight badges */}
                <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {item.features.map((feat, fIdx) => (
                    <span
                      key={fIdx}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-[10px] font-mono text-slate-300 flex items-center gap-1"
                    >
                      <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                      <span>{feat}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Forecourt Status Note */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Dual Station Verification & Safety Compliance
              </p>
              <p className="text-xs text-slate-400">
                Both Sampan Filling Station and Sampan LPG Station operate under strict BERC and Department of Explosives safety certifications.
              </p>
            </div>
          </div>
          <a
            href="#location"
            className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-mono font-bold text-xs uppercase tracking-wider shrink-0 transition-colors shadow-sm"
          >
            Locate On Highway
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Top Controls */}
          <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-20">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <span className="px-2.5 py-1 rounded bg-amber-400 text-black font-bold">
                {selectedImageIndex + 1} / {filteredItems.length}
              </span>
              <span className="text-slate-400 hidden sm:inline">
                {filteredItems[selectedImageIndex].categoryLabel}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all active:scale-95"
              aria-label="Close image lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Previous Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-20 active:scale-95"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-20 active:scale-95"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Modal Image Area */}
          <div
            className="relative max-w-5xl w-full max-h-[75vh] h-[65vh] sm:h-[72vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredItems[selectedImageIndex].src}
              alt={filteredItems[selectedImageIndex].title}
              fill
              className="object-contain rounded-xl"
              priority
            />
          </div>

          {/* Modal Bottom Caption */}
          <div
            className="mt-4 text-center max-w-2xl px-4 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold block mb-1">
              {filteredItems[selectedImageIndex].subtitle}
            </span>
            <h4 className="text-lg font-bold text-white mb-1">
              {filteredItems[selectedImageIndex].title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              {filteredItems[selectedImageIndex].description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
