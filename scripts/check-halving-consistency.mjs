#!/usr/bin/env node
/* check:halving-consistency — gate.
 *
 * The in-body supply-curve embed (src/components/ChartEmbedRuntime.astro) is a
 * module script that cannot import JSON server-side data at its own scope, so it keeps
 * a self-contained copy of the named halving schedule (date + reward) and feeds
 * it to the shared drawer (src/scripts/supply-curve.js). Everything else —
 * the /chart/ page (SupplyScheduleChart.astro) and the halving cards — reads
 * the canonical src/data/btc-chart/halvings.json.
 *
 * This gate keeps that self-contained copy honest: it fails the build if the
 * embed's hardcoded array drifts from halvings.json, so "update one, forget the
 * other" cannot silently ship. (Insurance ON TOP of the single shared drawer,
 * not a substitute for it.)
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const HALVINGS = join(root, 'src/data/btc-chart/halvings.json');
const EMBED = join(root, 'src/components/ChartEmbedRuntime.astro');

const canon = JSON.parse(readFileSync(HALVINGS, 'utf8')).map((h) => ({ date: h.date, reward: h.reward }));

const embedSrc = readFileSync(EMBED, 'utf8');
const block = embedSrc.match(/halvings:\s*\[([\s\S]*?)\]/);
if (!block) {
  console.error('check:halving-consistency: could not locate the embed `halvings: [...]` array in src/components/ChartEmbedRuntime.astro');
  process.exit(1);
}
const embed = [...block[1].matchAll(/date:\s*'([\d-]+)'\s*,\s*reward:\s*([\d.]+)/g)].map((m) => ({
  date: m[1],
  reward: Number(m[2]),
}));

const problems = [];
if (embed.length !== canon.length) {
  problems.push(`row count: embed has ${embed.length}, halvings.json has ${canon.length}`);
}
const n = Math.min(embed.length, canon.length);
for (let i = 0; i < n; i++) {
  if (embed[i].date !== canon[i].date || embed[i].reward !== canon[i].reward) {
    problems.push(
      `row ${i}: embed {${embed[i].date}, ${embed[i].reward}} ≠ halvings.json {${canon[i].date}, ${canon[i].reward}}`,
    );
  }
}

if (problems.length) {
  console.error('check:halving-consistency FAILED — the embed\'s self-contained halving schedule has drifted from halvings.json:');
  for (const p of problems) console.error('  - ' + p);
  console.error('Fix: edit the `halvings: [...]` array in src/components/ChartEmbedRuntime.astro to match src/data/btc-chart/halvings.json.');
  process.exit(1);
}

console.log(`check:halving-consistency OK — embed halving schedule matches halvings.json (${n} rows)`);
