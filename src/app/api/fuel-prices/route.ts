import { NextResponse } from 'next/server';
import { fetchLiveFuelRates } from '@/lib/scraper';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const force = searchParams.get('force') === 'true' || searchParams.get('refresh') === '1';

    const data = await fetchLiveFuelRates(force);

    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': force ? 'no-cache, no-store' : 'public, s-maxage=604800, stale-while-revalidate=86400',
        'X-Fuel-Authority': 'BERC-Bangladesh',
        'X-Scrape-Status': data.status
      }
    });
  } catch (error) {
    console.error('API Error in /api/fuel-prices:', error);
    return NextResponse.json(
      {
        error: 'Failed to retrieve fuel prices',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
