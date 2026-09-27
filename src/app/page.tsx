'use client';

import React, { useState, useEffect } from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FuelQuickStrip from '@/components/FuelQuickStrip';
import FuelPriceBoard from '@/components/FuelPriceBoard';
import FuelServicesSection from '@/components/FuelServicesSection';
import HighwayInnBenefits from '@/components/HighwayInnBenefits';
import FacilitiesSection from '@/components/FacilitiesSection';
import GallerySection from '@/components/GallerySection';
import StationLocationCard from '@/components/StationLocationCard';
import Affiliations from '@/components/Affiliations';
import EndorsementBar from '@/components/EndorsementBar';
import RoadCtaBanner from '@/components/RoadCtaBanner';
import Footer from '@/components/Footer';
import { FuelScrapeResponse } from '@/types/fuel';

export default function Home() {
  const [data, setData] = useState<FuelScrapeResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isScraping, setIsScraping] = useState<boolean>(false);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'info' } | null>(null);

  // Fetch initial fuel rates
  const loadRates = async (force = false) => {
    if (force) setIsScraping(true);
    else setIsLoading(true);

    try {
      const url = force ? '/api/fuel-prices?force=true' : '/api/fuel-prices';
      const res = await fetch(url);
      if (res.ok) {
        const json: FuelScrapeResponse = await res.json();

        // Check if user saved custom overrides in localStorage
        const savedOverrides = localStorage.getItem('sampan_fuel_prices');
        if (savedOverrides) {
          try {
            const parsed = JSON.parse(savedOverrides);
            json.prices = json.prices.map((p) => {
              if (parsed[p.id] !== undefined) {
                return {
                  ...p,
                  currentPrice: parsed[p.id],
                  change: +(parsed[p.id] - p.previousPrice).toFixed(2),
                  changeType: parsed[p.id] > p.previousPrice ? 'up' : parsed[p.id] < p.previousPrice ? 'down' : 'unchanged'
                };
              }
              return p;
            });
          } catch (e) {
            console.error('Error applying local overrides', e);
          }
        }

        setData(json);

        if (force) {
          showNotification(
            `Live scrape complete! Synced ${json.articles.length} gazette sources in ${json.fetchDurationMs}ms.`,
            'success'
          );
        }
      }
    } catch (err) {
      console.error('Failed to load live fuel rates:', err);
      showNotification('Using latest verified BERC gazette benchmark rates.', 'info');
    } finally {
      setIsLoading(false);
      setIsScraping(false);
    }
  };

  useEffect(() => {
    loadRates(false);
  }, []);

  const showNotification = (message: string, type: 'success' | 'info') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 4500);
  };

  const handleUpdatePrice = (fuelId: string, newPrice: number) => {
    if (!data) return;

    const savedOverrides = localStorage.getItem('sampan_fuel_prices');
    const existing = savedOverrides ? JSON.parse(savedOverrides) : {};
    existing[fuelId] = newPrice;
    localStorage.setItem('sampan_fuel_prices', JSON.stringify(existing));

    const updatedPrices = data.prices.map((p) => {
      if (p.id === fuelId) {
        const diff = +(newPrice - p.previousPrice).toFixed(2);
        return {
          ...p,
          currentPrice: newPrice,
          change: diff,
          changeType: diff > 0 ? ('up' as const) : diff < 0 ? ('down' as const) : ('unchanged' as const)
        };
      }
      return p;
    });

    setData({
      ...data,
      prices: updatedPrices
    });

    showNotification(`Updated ${fuelId} pump rate to Tk ${newPrice.toFixed(2)}`, 'success');
  };

  const prices = data?.prices || [];

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#080808] text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-black">
        
        {/* Floating Notification Toast */}
        {notification && (
          <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom duration-300">
            <div
              className={`px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-xl border font-mono text-xs flex items-center gap-3 ${
                notification.type === 'success'
                  ? 'bg-amber-950/90 border-amber-500/50 text-amber-300 shadow-[0_0_30px_rgba(251,191,36,0.3)]'
                  : 'bg-cyan-950/90 border-cyan-500/50 text-cyan-300'
              }`}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              <span>{notification.message}</span>
            </div>
          </div>
        )}

        {/* 1. Navigation Bar with Sampan Logo & Wireframe Links */}
        <Navbar
          prices={prices}
          isScraping={isScraping}
          onTriggerScrape={() => loadRates(true)}
        />

        <main className="flex-1">
          {/* 2. Hero Section: "One Stop. Every Mile. Every Fuel." */}
          <Hero />

          {/* Quick Fuel & Energy Strip immediately after Hero */}
          <FuelQuickStrip />

          {/* 3. Live Fuel Price Board */}
          <FuelPriceBoard
            data={data}
            isLoading={isScraping || isLoading}
            onTriggerScrape={() => loadRates(true)}
            onSelectFuelForCalc={() => {
              const el = document.getElementById('location');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenBookingForFuel={() => {
              const el = document.getElementById('location');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onUpdatePrice={handleUpdatePrice}
          />

          {/* 4. Filling Station / LPG Gas Station / EV Charging (3 Alternating Blocks) */}
          <FuelServicesSection />

          {/* 5. "More Than a Fuel Stop" (Sampan Highway Inn Benefits: Dining, Sweets, Mart, Motel, Towing, Auto) */}
          <HighwayInnBenefits />

          {/* 6. Facilities: Built for the Road (Restrooms, Air/Water, Seating, Forecourt, Auto-Check) */}
          <FacilitiesSection />

          {/* 7. Forecourt & Station Gallery */}
          <GallerySection />

          {/* 8. Location: Find Us on the Highway (Pure Map & Specs, No Photos) */}
          <StationLocationCard />

          {/* 9. Affiliations & Accreditations */}
          <Affiliations />

          {/* 10. Sampan Group Concerns (Endorsement Bar with GSAP ScrollTrigger) */}
          <EndorsementBar />

          {/* 9. Road CTA Banner: "On the Road? We've Got You Covered." */}
          <RoadCtaBanner />
        </main>

        {/* 10. Footer */}
        <Footer />

      </div>
    </SmoothScroll>
  );
}
