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
function parseNameValueObject(source, exportName, filePath) {
  const re = new RegExp(`${exportName}\\s*:\\s*Record<[^>]+>\\s*=\\s*\\{([\\s\\S]*?)\\n\\};`);
  const m = source.match(re);
  if (!m) throw new Error(`Failed to parse ${exportName} from ${filePath}`);
  const map = new Map();
  for (const entry of m[1].matchAll(/'([^']+)'\s*:\s*'([^']+)'/g)) {
    map.set(entry[1], entry[2]);
  }
  return map;
}

const properNameTranslationsJa = parseNameValueObject(participantsTs, 'properNameTranslationsJa', PARTICIPANTS_FILE);
const participantDisplayNamesJaBySlug = parseNameValueObject(participantsTs, 'participantDisplayNamesJaBySlug', PARTICIPANTS_FILE);

// JA display labels for entry `tags:` (e.g. "beginner-guide" -> "初心者ガイド").
// Frontmatter `tags:` is always the canonical English slug in both EN and
// JA entries -- src/i18n/utils.ts's translateTag() does this same lookup
// client-side for rendering. Without also indexing the translated label,
// a JA search for the label text (what a JA reader actually sees and would
// type) never matches, even after tags are indexed at all.
const TAGS_FILE = 'src/i18n/tags.ts';
const tagsTs = readFileSync(TAGS_FILE, 'utf8');
const tagTranslations = parseNameValueObject(tagsTs, 'tagTranslations', TAGS_FILE);

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

// --dry-run builds records and prints a sample without touching Algolia at
// all -- no credentials required, no client created, no network calls.
// Lets a change to record-building or indexSettings be checked locally
// before a push (which, via deploy-cloudflare.yml, re-indexes production).
const DRY_RUN = process.argv.includes('--dry-run');

const APP_ID = process.env.ALGOLIA_APP_ID;
const ADMIN_KEY = process.env.ALGOLIA_ADMIN_KEY;

if (!DRY_RUN && (!APP_ID || !ADMIN_KEY)) {
  console.log('Algolia index skipped (ALGOLIA_APP_ID / ALGOLIA_ADMIN_KEY not set)');
  process.exit(0);
}

const client = DRY_RUN ? null : algoliasearch(APP_ID, ADMIN_KEY);

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

// Parses `tags:` in either of its two valid forms:
//   - inline: `tags: []` or `tags: ["a", "b"]` -- a JSON array literal
//   - block list: `tags:\n  - "a"\n  - "b"` (same dedent-terminated shape
//     as parseParticipants above)
// An inline form that isn't valid JSON throws rather than silently
// returning an empty array -- schema (`z.array(z.string())`) permits this
// form, so failing to parse it must not look like "no tags".
function parseTags(fm) {
  const lines = fm.split('\n');
  const idx = lines.findIndex((l) => /^tags:/.test(l));
  if (idx < 0) return [];
  const rest = lines[idx].match(/^tags:\s*(.*)$/)[1].trim();
  if (rest !== '') return JSON.parse(rest);
  const out = [];
  for (let i = idx + 1; i < lines.length; i++) {
    const line = lines[i];
    if (/^\S/.test(line)) break; // dedent to the next top-level key ends the block
    const item = line.match(/^\s*-\s*"?([^"\n]*?)"?\s*$/);
    if (item) out.push(item[1]);
  }
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

        const fmLines = fm.split('\n');

        // Parse frontmatter. Grabs the whole rest of the line rather than
        // stopping at the first `"`, then strips/unescapes a surrounding
        // quoted string -- the previous `"?([^"\n]*)"?` form stopped at the
        // first quote character it saw, silently truncating any title or
        // description containing an escaped internal quote (e.g. a quoted
        // phrase: `title: "X says \"Y\""` came back as just `X says \`).
        // Also handles YAML block scalars (`key: |` / `key: >`, with `-`/`+`
        // chomping suffixes): the block body is every following line up to
        // the next dedent (same terminator rule as parseParticipants/
        // parseTags), `|` keeping newlines and `>` folding them to spaces.
        // Exact chomping-indicator fidelity isn't attempted -- trailing
        // blank lines are simply dropped, which is enough for indexed
        // search text.
        const get = (key) => {
          const idx = fmLines.findIndex((l) => new RegExp(`^${key}:`).test(l));
          if (idx < 0) return '';
          const rest = fmLines[idx].match(new RegExp(`^${key}:\\s*(.*)$`))[1].trim();
          const block = rest.match(/^([|>])[+-]?$/);
          if (block) {
            const bodyLines = [];
            for (let i = idx + 1; i < fmLines.length; i++) {
              const line = fmLines[i];
              if (/^\S/.test(line)) break;
              bodyLines.push(line.replace(/^ {2}/, ''));
            }
            while (bodyLines.length && bodyLines[bodyLines.length - 1] === '') bodyLines.pop();
            if (block[1] === '|') return bodyLines.join('\n');
            // Folded (`>`): a single line break between two non-blank
            // lines folds to a space, but a blank line is a paragraph
            // break and must stay a newline -- joining every line with
            // a plain space would silently merge separate paragraphs.
            const paragraphs = [];
            let para = [];
            for (const line of bodyLines) {
              if (line === '') {
                if (para.length) paragraphs.push(para.join(' '));
                para = [];
              } else {
                para.push(line);
              }
            }
            if (para.length) paragraphs.push(para.join(' '));
            return paragraphs.join('\n');
          }
          let v = rest;
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
        const tags = parseTags(fm);
        const tagLabels = lang === 'ja'
          ? tags.map((tag) => participantDisplayNamesJaBySlug.get(tag) ?? tagTranslations.get(tag) ?? tag)
          : tags;
        const editorNote = get('editorNote');
        const xHandle = get('xHandle');

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
          tags,
          tagLabels,
          editorNote,
          xHandle,
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

  // editorNote (like body) is searchable but never retrieved verbatim in a
  // hit -- it's prose meant to improve match recall, not a compact field a
  // result card would display (same reasoning check-link-color-confusion.mjs
  // applies to CSS: a field can be a real, deliberate match signal without
  // also being surfaced as UI content).
  const EN_SETTINGS = {
    searchableAttributes: ['title', 'description', 'body', 'author', 'tagLabels', 'editorNote', 'xHandle'],
    attributesForFaceting: ['author', 'type', 'source', 'isSatoshi', 'tags'],
    attributesToRetrieve: ['title', 'date', 'author', 'url', 'description', 'type', 'isSatoshi', 'participants', 'tagLabels', 'xHandle', 'createdTs', 'updatedTs'],
    attributesToHighlight: ['title', 'body', 'description'],
    attributesToSnippet: ['body:40'],
    ranking: ['typo', 'geo', 'words', 'filters', 'proximity', 'attribute', 'exact', 'custom'],
    customRanking: ['desc(isSatoshi)'],
  };
  const JA_SETTINGS = {
    ...EN_SETTINGS,
    // Japanese-specific: use kuromoji tokenizer
    indexLanguages: ['ja'],
    queryLanguages: ['ja'],
  };

  if (DRY_RUN) {
    const sample = jaEntries.find((e) => e.tags.includes('beginner-guide')) || jaEntries[0];
    console.log('Dry run -- sample JA record:');
    console.log(JSON.stringify(sample, null, 2));
    console.log('Dry run -- EN indexSettings:', JSON.stringify(EN_SETTINGS, null, 2));
    console.log('Dry run -- JA indexSettings:', JSON.stringify(JA_SETTINGS, null, 2));
    console.log('Dry run complete, no Algolia calls made.');
    return;
  }

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
    indexSettings: EN_SETTINGS,
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
    indexSettings: JA_SETTINGS,
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
