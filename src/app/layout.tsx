import type { Metadata, Viewport } from 'next';
import { Outfit, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#070a0f',
};

export const metadata: Metadata = {
  title: 'Sampan Filling Station | One Stop. Every Mile. Every Fuel.',
  description: 'Sampan Filling Station — petrol, diesel & LPG today, EV charging tomorrow. Proudly part of the Sampan Highway Inn family on the Dhaka-Khulna Highway, Kashiani.',
  keywords: ['Sampan Filling Station', 'Sampan LPG', 'Sampan Highway Inn', 'Kashiani filling station', 'Dhaka Khulna highway fuel'],
  icons: {
    icon: '/images/logo/lpg.png',
    apple: '/images/logo/lpg.png',
  },
  openGraph: {
    title: 'Sampan Filling Station | One Stop. Every Mile. Every Fuel.',
    description: 'Petrol, diesel & LPG today, EV charging tomorrow. Beside Sampan Highway Inn, Kashiani.',
    type: 'website',
    images: ['/images/hero.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable} ${playfair.variable}`}>
      <body className="bg-[#080808] text-slate-100 antialiased selection:bg-amber-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}
