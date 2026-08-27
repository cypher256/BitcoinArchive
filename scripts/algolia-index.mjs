#!/usr/bin/env node
/**
 * Push all entries to Algolia for full-text search.
 * Indexes both EN and JA entries into separate indices.
 *
 * Usage:
 *   node scripts/algolia-index.mjs
 *
 * Environment variables (or hardcoded below):
 *   ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY
 */

import { readdirSync, readFileSync } from 'fs';
import { join, basename } from 'path';
import { algoliasearch } from 'algoliasearch';

// -----------------------------------------------------------------------
// Cross-script proper-noun synonyms for the JA index.
//
// JA entry title/description use the katakana form of a proper noun
// (e.g. "ソラナ") almost exclusively; the Latin spelling ("Solana") a
// visitor is likely to type barely appears. Algolia's kuromoji tokenizer
// does not bridge scripts on its own, so a JA-mode search for "solana"
// finds zero results even though a full JA article on Solana exists.
// True cross-lingual semantic matching (Algolia NeuralSearch) requires
// the Elevate enterprise plan; this project is on the free tier, so we
// use plain Algolia synonyms instead, sourced only from EN/JA name pairs
// that a human has already written elsewhere in this repo (participant
// names, currency entry titles) -- never a mechanical transliteration.
// -----------------------------------------------------------------------

const PARTICIPANTS_FILE = 'src/i18n/participants.ts';
const participantsTs = readFileSync(PARTICIPANTS_FILE, 'utf8');

// `properNameTranslationsJa`: already-paired "Full EN Name" -> "JA katakana"
// (see scripts/check-ja-names.mjs, which parses the same file the same way).
function parseNameValueObject(source, exportName) {
  const re = new RegExp(`${exportName}\\s*:\\s*Record<[^>]+>\\s*=\\s*\\{([\\s\\S]*?)\\n\\};`);
  const m = source.match(re);
  if (!m) throw new Error(`Failed to parse ${exportName} from ${PARTICIPANTS_FILE}`);
  const map = new Map();
  for (const entry of m[1].matchAll(/'([^']+)'\s*:\s*'([^']+)'/g)) {
    map.set(entry[1], entry[2]);
  }
  return map;
}

const properNameTranslationsJa = parseNameValueObject(participantsTs, 'properNameTranslationsJa');
const participantDisplayNamesJaBySlug = parseNameValueObject(participantsTs, 'participantDisplayNamesJaBySlug');

// Currency entries have no per-currency i18n table (unlike people); their
// canonical EN/JA name pair only exists in the entry titles themselves.
// Verified directly against src/data/entries/en/currency/*.md and
// src/data/translations/ja/currency/*.md (2026-08-26). Currencies whose
// JA prose already uses the Latin spelling (Bitcoin SV, USDC, XRP) are
// intentionally omitted -- there is no script mismatch to bridge.
const CURRENCY_NAME_JA = new Map([
  ['Bitcoin Cash', 'ビットコインキャッシュ'],
  ['Cardano', 'カルダノ'],
  ['Dogecoin', 'ドージコイン'],
  ['Ethereum', 'イーサリアム'],
  ['Litecoin', 'ライトコイン'],
  ['Monero', 'モネロ'],
  ['Polkadot', 'ポルカドット'],
  ['Solana', 'ソラナ'],
  ['Tether', 'テザー'],
]);

// Builds the synonym set once all EN entries have been read (so
// `slugToEnName`, collected from each entry's `participants:` frontmatter,
// is complete). Returns Algolia SynonymHit objects for saveSynonyms().
function buildJaSynonyms(slugToEnName) {
  const seen = new Set(); // dedupe by EN name, in case both sources name someone
  const synonyms = [];

  function add(id, enName, jaName) {
    if (!enName || !jaName || enName === jaName || seen.has(enName)) return;
    seen.add(enName);
    synonyms.push({ objectID: id, type: 'synonym', synonyms: [enName, jaName] });
  }

  for (const [enName, jaName] of properNameTranslationsJa) {
    add(`name:${enName}`, enName, jaName);
  }
  for (const [slug, jaName] of participantDisplayNamesJaBySlug) {
    add(`slug:${slug}`, slugToEnName.get(slug), jaName);
  }
  for (const [enName, jaName] of CURRENCY_NAME_JA) {
    add(`currency:${enName}`, enName, jaName);
  }

  return synonyms;
}

// NOTE: URLs in the Algolia index are stored WITHOUT the deployment base
// prefix (e.g. "/ja/entries/..." not "/BitcoinArchive/ja/entries/..."),
// because the same index is shared between deployments with different
// base paths. The search page prepends the runtime base at hit time.

const APP_ID = process.env.ALGOLIA_APP_ID;
const ADMIN_KEY = process.env.ALGOLIA_ADMIN_KEY;

if (!APP_ID || !ADMIN_KEY) {
  console.log('Algolia index skipped (ALGOLIA_APP_ID / ALGOLIA_ADMIN_KEY not set)');
  process.exit(0);
}

const client = algoliasearch(APP_ID, ADMIN_KEY);

const EN_DIR = 'src/data/entries/en';
const JA_DIR = 'src/data/translations/ja';

// Per-entry git dates (createdAt / updatedAt), produced by
// generate-git-dates.mjs earlier in the build, keyed by entry id (dots
// PRESERVED — unlike the URL slug, which strips them) then by language.
// They let a full-text result card render the same three date values as the
// browse EntryCard / EntryDates component: event, registered, and updated.
const GIT_DATES = (() => {
  try {
    return JSON.parse(readFileSync('src/data/git-dates.json', 'utf8'));
  } catch {
    return {};
  }
})();

// Parse the `participants:` YAML block into [{ name, slug }]. The index needs
// these so a full-text result card can render the same byline as the browse
// EntryCard (author resolved to a participant, co-participants after "↔",
// katakana-resolved client-side). Handles both inline `- name: "X"` and the
// `slug:` continuation line; tolerates name/slug in either order.
function parseParticipants(fm) {
  const lines = fm.split('\n');
  let i = lines.findIndex((l) => /^participants:\s*$/.test(l));
  if (i < 0) return [];
  const out = [];
  let cur = null;
  const grabName = (s) => { const m = s.match(/name:\s*"?([^"\n]*?)"?\s*$/); if (m) cur.name = m[1].trim(); };
  const grabSlug = (s) => { const m = s.match(/slug:\s*"?([^"\n]*?)"?\s*$/); if (m) cur.slug = m[1].trim(); };
  for (i++; i < lines.length; i++) {
    const line = lines[i];
    if (/^\S/.test(line)) break; // dedent to the next top-level key ends the block
    const item = line.match(/^\s*-\s*(.*)$/);
    if (item) {
      if (cur && cur.slug) out.push(cur);
      cur = { name: '', slug: '' };
      grabName(item[1]);
      grabSlug(item[1]);
      continue;
    }
    if (!cur) continue;
    grabName(line);
    grabSlug(line);
  }
  if (cur && cur.slug) out.push(cur);
  return out;
}

function readEntries(baseDir, lang) {
  const entries = [];

  function walk(dir, relPath = '') {
    for (const item of readdirSync(dir, { withFileTypes: true })) {
      if (item.isDirectory()) {
        walk(join(dir, item.name), relPath ? `${relPath}/${item.name}` : item.name);
      } else if (item.name.endsWith('.md')) {
        const filePath = join(dir, item.name);
        const content = readFileSync(filePath, 'utf8');
        const fmMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
        if (!fmMatch) continue;

        const fm = fmMatch[1];
        const body = fmMatch[2].trim();

        // Parse frontmatter. Grabs the whole rest of the line rather than
        // stopping at the first `"`, then strips/unescapes a surrounding
        // quoted string -- the previous `"?([^"\n]*)"?` form stopped at the
        // first quote character it saw, silently truncating any title or
        // description containing an escaped internal quote (e.g. a quoted
        // phrase: `title: "X says \"Y\""` came back as just `X says \`).
        const get = (key) => {
          const m = fm.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'));
          if (!m) return '';
          let v = m[1].trim();
          if (v.length >= 2 && v.startsWith('"') && v.endsWith('"')) {
            v = v.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
          }
          return v;
        };

        const title = get('title');
        const date = get('date');
        const author = get('author');
        const type = get('type');
        const source = get('source');
        const description = get('description');
        const isSatoshi = get('isSatoshi') === 'true';
        const participants = parseParticipants(fm);

        // Entry id keeps dots (matches git-dates.json keys); the URL slug
        // strips them (matches Astro's slug generation).
        const entryId = relPath + '/' + item.name.replace(/\.md$/, '');
        const slug = entryId.replaceAll('.', '');
        const langPrefix = lang === 'ja' ? '/ja' : '';
        const gd = (GIT_DATES[entryId] && GIT_DATES[entryId][lang]) || {};

        // Biographies link to participant page instead of entry page
        const participantSlug = type === 'biography'
          ? fm.match(/^\s+slug:\s*"?([^"\n]*)"?/m)?.[1]?.trim()
          : null;
        const url = participantSlug
          ? `${langPrefix}/participants/${participantSlug}/`
          : `${langPrefix}/entries/${slug}/`;

        // Clean body for indexing (remove markdown syntax)
        const cleanBody = body
          .replace(/^---$/gm, '')
          .replace(/^#+\s/gm, '')
          .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
          .replace(/<!--[\s\S]*?-->/g, '')
          .replace(/^>\s?/gm, '')
          .replace(/```[\s\S]*?```/g, '')
          .replace(/`[^`]+`/g, '')
          .replace(/\*\*([^*]+)\*\*/g, '$1')
          .replace(/\*([^*]+)\*/g, '$1')
          .trim();

        // Truncate body for Algolia (10KB limit per record)
        // Japanese UTF-8 = ~3 bytes/char, so 2000 chars ≈ 6KB
        const maxBody = 2000;
        const truncatedBody = cleanBody.length > maxBody
          ? cleanBody.slice(0, maxBody) + '...'
          : cleanBody;

        entries.push({
          objectID: `${lang}:${slug}`,
          title,
          date,
          author,
          type,
          source,
          description,
          body: truncatedBody,
          isSatoshi,
          participants,
          createdTs: gd.createdAt || '',
          updatedTs: gd.updatedAt || '',
          url,
          lang,
        });
      }
    }
  }

  walk(baseDir);
  return entries;
}

async function main() {
  console.log('Reading entries...');
  const enEntries = readEntries(EN_DIR, 'en');
  const jaEntries = readEntries(JA_DIR, 'ja');

  console.log(`EN: ${enEntries.length}, JA: ${jaEntries.length}`);

  // Index EN
  console.log('Indexing EN...');
  const enIndex = 'bitcoin_archive_en';
  await client.replaceAllObjects({
    indexName: enIndex,
    objects: enEntries,
  });

  // Configure EN index
  await client.setSettings({
    indexName: enIndex,
    indexSettings: {
      searchableAttributes: ['title', 'description', 'body', 'author'],
      attributesForFaceting: ['author', 'type', 'source', 'isSatoshi'],
      attributesToRetrieve: ['title', 'date', 'author', 'url', 'description', 'type', 'isSatoshi', 'participants', 'createdTs', 'updatedTs'],
      attributesToHighlight: ['title', 'body', 'description'],
      attributesToSnippet: ['body:40'],
      ranking: ['typo', 'geo', 'words', 'filters', 'proximity', 'attribute', 'exact', 'custom'],
      customRanking: ['desc(isSatoshi)'],
    },
  });
  console.log(`EN indexed: ${enEntries.length} records`);

  // Index JA
  console.log('Indexing JA...');
  const jaIndex = 'bitcoin_archive_ja';
  await client.replaceAllObjects({
    indexName: jaIndex,
    objects: jaEntries,
  });

  // Configure JA index with Japanese settings
  await client.setSettings({
    indexName: jaIndex,
    indexSettings: {
      searchableAttributes: ['title', 'description', 'body', 'author'],
      attributesForFaceting: ['author', 'type', 'source', 'isSatoshi'],
      attributesToRetrieve: ['title', 'date', 'author', 'url', 'description', 'type', 'isSatoshi', 'participants', 'createdTs', 'updatedTs'],
      attributesToHighlight: ['title', 'body', 'description'],
      attributesToSnippet: ['body:40'],
      ranking: ['typo', 'geo', 'words', 'filters', 'proximity', 'attribute', 'exact', 'custom'],
      customRanking: ['desc(isSatoshi)'],
      // Japanese-specific: use kuromoji tokenizer
      indexLanguages: ['ja'],
      queryLanguages: ['ja'],
    },
  });
  console.log(`JA indexed: ${jaEntries.length} records`);

  // Cross-script proper-noun synonyms (see the top of this file for why).
  // slugToEnName is collected from EN entries' `participants:` frontmatter
  // -- the actual name a human wrote there, never derived from the slug.
  console.log('Building JA synonyms...');
  const slugToEnName = new Map();
  for (const entry of enEntries) {
    for (const p of entry.participants) {
      if (p.slug && p.name && !slugToEnName.has(p.slug)) slugToEnName.set(p.slug, p.name);
    }
  }
  const jaSynonyms = buildJaSynonyms(slugToEnName);
  await client.saveSynonyms({
    indexName: jaIndex,
    synonymHit: jaSynonyms,
    replaceExistingSynonyms: true,
  });
  console.log(`JA synonyms: ${jaSynonyms.length} pairs`);

  console.log('Done!');
}

main().catch(e => { console.error(e); process.exit(1); });
