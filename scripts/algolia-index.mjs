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

const APP_ID = process.env.ALGOLIA_APP_ID || 'FI2GZVF3TY';
const ADMIN_KEY = process.env.ALGOLIA_ADMIN_KEY || '6da6bb0fbaa3bb11e0036aad909c7e33';

const client = algoliasearch(APP_ID, ADMIN_KEY);

const EN_DIR = 'src/data/entries/en';
const JA_DIR = 'src/data/translations/ja';
const BASE_URL = '/BitcoinArchive';

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

        // Parse frontmatter
        const get = (key) => {
          const m = fm.match(new RegExp(`^${key}:\\s*"?([^"\\n]*)"?`, 'm'));
          return m ? m[1].trim() : '';
        };

        const title = get('title');
        const date = get('date');
        const author = get('author');
        const type = get('type');
        const source = get('source');
        const description = get('description');
        const isSatoshi = get('isSatoshi') === 'true';
        const threadId = get('threadId');

        // Build URL path
        const slug = relPath + '/' + item.name.replace('.md', '');
        const langPrefix = lang === 'ja' ? '/ja' : '';
        const url = `${BASE_URL}${langPrefix}/entries/${slug}/`;

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
          threadId,
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
      attributesToRetrieve: ['title', 'date', 'author', 'url', 'description', 'type', 'isSatoshi'],
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
      attributesToRetrieve: ['title', 'date', 'author', 'url', 'description', 'type', 'isSatoshi'],
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

  console.log('Done!');
}

main().catch(e => { console.error(e); process.exit(1); });
