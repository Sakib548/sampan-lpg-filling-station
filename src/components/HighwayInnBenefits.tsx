'use client';

import React from 'react';
import Image from 'next/image';
import { Utensils, Cake, ShoppingBag, BedDouble, Truck, Wrench } from 'lucide-react';

interface BenefitItem {
  title: string;
  tagline: string;
  desc: string;
  image?: string;
  customBadgeLogo?: string;
  isLogo?: boolean;
  icon?: React.ReactNode;
  dual?: {
    left: {
      title: string;
      image: string;
      logo: string;
    };
    right: {
      title: string;
      image: string;
      logo: string;
    };
  };
}

export default function HighwayInnBenefits() {
  const benefits: BenefitItem[] = [
    {
      title: 'Restaurant & Party Centre',
      tagline: 'Dine-in while you wait',
      desc: 'Full-service air-conditioned dining offering fresh local dishes, highway platters, snacks, and event facilities.',
      image: '/images/nearby/heromain.jpeg',
      customBadgeLogo: '/images/logo/sampanhighwayinn.png',
      icon: <Utensils className="w-5 h-5 text-amber-600" />,
    },
    {
      title: 'Sweet Box',
      tagline: 'Traditional sweets for the road',
      desc: 'Famous authentic regional sweets, fresh yogurt (doi), rasgulla, and gift boxes for family visits.',
      image: '/images/nearby/sweet-shop.jpg',
      customBadgeLogo: '/images/logo/sweetbox.png',
      icon: <Cake className="w-5 h-5 text-amber-600" />,
    },
    {
      title: 'Mini Sampan & Sampan Mart',
      tagline: 'Convenience shopping, snacks, essentials',
      desc: '24/7 convenience store stocking beverages, chips, automotive essentials, toiletries, and travel items.',
      image: '/images/nearby/Sampan-Mart.jpg',
      icon: <ShoppingBag className="w-5 h-5 text-amber-600" />,
      dual: {
        left: {
          title: 'Mini Sampan',
          image: '/images/nearby/mini-sampan.jpg',
          logo: '/images/logo/happyshopping.png',
        },
        right: {
          title: 'Sampan Mart',
          image: '/images/nearby/Sampan-Mart.jpg',
          logo: '/images/logo/sampanmart.png',
        },
      },
    },
    {
      title: 'Sampan White House Hotel & Motel',
      tagline: 'Rest overnight along the corridor',
      desc: 'Secure, clean, comfortable rooms and executive suites for weary long-distance drivers and traveling families.',
      image: '/images/nearby/highway-motel.png',
      customBadgeLogo: '/images/logo/whitehouse.webp',
      icon: <BedDouble className="w-5 h-5 text-amber-600" />,
    },
    {
      title: 'Towing & Roadside Assistance',
      tagline: '24/7 nearby highway support for breakdowns',
      desc: 'Rapid-response vehicle towing, tire recovery, and jump-start support active on the highway corridor.',
      image: '/images/nearby/car-recovery-vehicle-transporting-yellow-car.jpg',
      customBadgeLogo: '/images/logo/towing.webp',
      icon: <Truck className="w-5 h-5 text-amber-600" />,
    },
    {
      title: 'Sampan Auto & Japanese Parts',
      tagline: 'Car sales, imports & diagnostic support',
      desc: 'Authorized automobile sales, genuine Japanese spare parts, engine diagnostic check-ups, and automotive fluids.',
      image: '/images/nearby/sampan-auto.jpg',
      isLogo: true,
      customBadgeLogo: '/images/logo/sampanauto.png',
      icon: <Wrench className="w-5 h-5 text-amber-600" />,
    },
  ];

  return (
    <section id="highway-benefits" className="py-24 lg:py-32 relative bg-[#f7f6f2] text-slate-900 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-mono mb-4 shadow-sm backdrop-blur-sm">
            <Image
              src="/images/logo/sampanhighwayinn.png"
              alt="Sampan Highway Inn Logo"
              width={32}
              height={32}
              className="h-5 w-auto object-contain"
            />
            <span className="tracking-[0.25em] uppercase text-[11px] font-bold">
              Integrated Highway Inn Rest Stop
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            More Than a Fuel Stop
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
            As part of the Sampan Highway Inn family, every visit connects you to a full range of travel comforts just steps from the pump.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 shadow-[0_4px_25px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col justify-between hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:border-amber-400 transition-all duration-300 group"
            >
              <div>
                {/* Visual Thumbnail Area */}
                {item.dual ? (
                  <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden grid grid-cols-2 divide-x divide-white/20">
                    {/* Left: Mini Sampan */}
                    <div className="relative h-full w-full overflow-hidden">
                      <Image
                        src={item.dual.left.image}
                        alt={item.dual.left.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Left Logo Badge */}
                      <div className="absolute top-3 left-3 p-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md flex items-center justify-center">
                        <Image
                          src={item.dual.left.logo}
                          alt={`${item.dual.left.title} logo`}
                          width={48}
                          height={20}
                          className="h-5 w-auto object-contain"
                        />
                      </div>

                      {/* Left Name Tag */}
                      <div className="absolute bottom-2 left-2.5">
                        <span className="text-[10px] font-mono font-bold text-white bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-md border border-white/10">
                          {item.dual.left.title}
                        </span>
                      </div>
                    </div>

                    {/* Right: Sampan Mart */}
                    <div className="relative h-full w-full overflow-hidden">
                      <Image
                        src={item.dual.right.image}
                        alt={item.dual.right.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Right Logo Badge */}
                      <div className="absolute top-3 right-3 p-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md flex items-center justify-center">
                        <Image
                          src={item.dual.right.logo}
                          alt={`${item.dual.right.title} logo`}
                          width={48}
                          height={20}
                          className="h-5 w-auto object-contain"
                        />
                      </div>

                      {/* Right Name Tag */}
                      <div className="absolute bottom-2 right-2.5">
                        <span className="text-[10px] font-mono font-bold text-amber-300 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-md border border-white/10">
                          {item.dual.right.title}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={item.image!}
                      alt={item.title}
                      fill
                      className={`${item.isLogo ? 'object-contain p-8' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                    {/* Floating Logo / Icon at top left */}
                    <div className="absolute top-4 left-4 p-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm text-slate-900 flex items-center justify-center">
                      {item.customBadgeLogo ? (
                        <Image
                          src={item.customBadgeLogo}
                          alt={`${item.title} logo`}
                          width={68}
                          height={24}
                          className="h-6 w-auto object-contain"
                        />
                      ) : (
                        item.icon
                      )}
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-1">
                    {item.title}
                  </h3>
                  <span className="text-xs text-amber-700 font-mono block mb-3 font-semibold">
                    {item.tagline}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom status */}
              <div className="px-6 pb-5 pt-3 flex items-center justify-between border-t border-slate-100 text-[11px] font-mono text-slate-500">
                <span>Directly at the Rest Stop</span>
                <span className="text-amber-800 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Steps away &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
