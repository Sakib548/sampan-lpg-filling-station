export interface FuelPrice {
  id: string;
  name: string;
  nameBn: string;
  category: 'autogas' | 'cylinder' | 'liquid' | 'ev';
  unit: string;
  unitBn: string;
  currentPrice: number;
  previousPrice: number;
  change: number;
  changeType: 'up' | 'down' | 'unchanged';
  lastUpdated: string;
  authority: string;
  badge?: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export interface HistoricalPricePoint {
  month: string;
  monthShort: string;
  autogas: number;
  cylinder12kg: number;
  octane: number;
  diesel: number;
  saudiCp: number; // Saudi CP in USD/MT
}

export interface ScrapedArticle {
  title: string;
  source: string;
  pubDate: string;
  link: string;
  snippet?: string;
  matchedRate?: string;
}

export interface FuelScrapeResponse {
  timestamp: string;
  status: 'live' | 'cached';
  sourceName: string;
  sourceUrl: string;
  fetchDurationMs: number;
  bercCircularMonth: string;
  effectiveDate: string;
  prices: FuelPrice[];
  history: HistoricalPricePoint[];
  articles: ScrapedArticle[];
  pricingBreakdown: {
    saudiCP: string;
    propaneButaneRatio: string;
    dollarExchangeRate: string;
    retailerMargin: string;
    vatStatus: string;
  };
}
