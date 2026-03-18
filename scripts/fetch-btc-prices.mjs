/**
 * Fetch historical BTC/USD price data from blockchain.info API (free, no key required).
 * Outputs daily prices to src/data/btc-chart/prices.json
 *
 * Usage: node scripts/fetch-btc-prices.mjs
 */

import { writeFileSync, mkdirSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = resolve(__dirname, '../src/data/btc-chart/prices.json');

const API_URL = 'https://api.blockchain.info/charts/market-price?timespan=all&format=json&rollingAverage=7days';

async function fetchPrices() {
  console.log('Fetching BTC price history from blockchain.info...');

  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  // data.values = [{ x: unix_timestamp, y: price_usd }, ...]
  const daily = [];
  let lastDate = '';

  for (const { x, y } of data.values) {
    const date = new Date(x * 1000).toISOString().slice(0, 10);
    if (date !== lastDate && y > 0) {
      daily.push({ date, price: Math.round(y * 100) / 100 });
      lastDate = date;
    }
  }

  console.log(`Got ${daily.length} daily price points (${daily[0].date} to ${daily[daily.length - 1].date})`);

  mkdirSync(dirname(OUTPUT), { recursive: true });
  writeFileSync(OUTPUT, JSON.stringify(daily));
  console.log(`Written to ${OUTPUT}`);
}

fetchPrices().catch((err) => {
  console.error('Failed to fetch prices:', err.message);
  process.exit(1);
});
