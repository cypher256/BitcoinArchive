#!/usr/bin/env node
/**
 * Create Japanese translation stub files for all English entries.
 * Copies directory structure and translates frontmatter fields.
 * Body content is preserved as-is for manual/agent translation.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, existsSync } from 'fs';
import { join, relative, dirname } from 'path';

const EN_DIR = join(import.meta.dirname, '..', 'src', 'data', 'entries', 'en');
const JA_DIR = join(import.meta.dirname, '..', 'src', 'data', 'translations', 'ja');

// Common title translation patterns
const TITLE_TRANSLATIONS = {
  'Welcome to the new Bitcoin forum!': '新しいビットコインフォーラムへようこそ！',
  'Bitcoin P2P e-cash paper': 'ビットコイン P2P 電子キャッシュ論文',
  'Bitcoin v0.1 released': 'ビットコイン v0.1 リリース',
  'Bitcoin open source implementation of P2P currency': 'ビットコイン：P2P通貨のオープンソース実装',
  'Genesis Block': 'ジェネシスブロック',
};

function translateTitle(title) {
  // Check exact matches first
  const baseTitle = title.replace(/^Re:\s*/i, '').replace(/^\[bitcoin-list\]\s*/i, '').replace(/^Repost:\s*/i, '');

  if (TITLE_TRANSLATIONS[title]) return TITLE_TRANSLATIONS[title];
  if (TITLE_TRANSLATIONS[baseTitle]) {
    const prefix = title.startsWith('Re: ') ? '返信: ' : '';
    return prefix + TITLE_TRANSLATIONS[baseTitle];
  }

  // Keep original for untranslated titles
  return title;
}

function translateDescription(desc) {
  // Basic pattern translations for descriptions
  return desc
    .replace(/Satoshi Nakamoto's reply in the thread/g, 'スレッドにおけるサトシ・ナカモトの返信')
    .replace(/Satoshi Nakamoto's post:/g, 'サトシ・ナカモトの投稿:')
    .replace(/Satoshi Nakamoto/g, 'サトシ・ナカモト')
    .replace(/\bBitcoin\b/g, 'ビットコイン')
    .replace(/\bbitcoin\b/g, 'ビットコイン');
}

function processDirectory(enPath, jaPath) {
  if (!existsSync(jaPath)) {
    mkdirSync(jaPath, { recursive: true });
  }

  const items = readdirSync(enPath);
  let created = 0;
  let skipped = 0;

  for (const item of items) {
    const enItemPath = join(enPath, item);
    const jaItemPath = join(jaPath, item);
    const stat = statSync(enItemPath);

    if (stat.isDirectory()) {
      const result = processDirectory(enItemPath, jaItemPath);
      created += result.created;
      skipped += result.skipped;
    } else if (item.endsWith('.md')) {
      if (existsSync(jaItemPath)) {
        skipped++;
        continue;
      }

      const content = readFileSync(enItemPath, 'utf8');
      const fmMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
      if (!fmMatch) {
        console.warn(`  No frontmatter: ${item}`);
        continue;
      }

      let fm = fmMatch[1];
      let body = fmMatch[2];

      // Translate title in frontmatter
      const titleMatch = fm.match(/^title:\s*"(.+?)"\s*$/m);
      if (titleMatch) {
        const jaTitle = translateTitle(titleMatch[1]);
        fm = fm.replace(titleMatch[0], `title: "${jaTitle}"`);
      }

      // Translate description in frontmatter
      const descMatch = fm.match(/^description:\s*"(.+?)"\s*$/m);
      if (descMatch) {
        const jaDesc = translateDescription(descMatch[1]);
        fm = fm.replace(descMatch[0], `description: "${jaDesc}"`);
      }

      // Add translationStatus
      if (!fm.includes('translationStatus:')) {
        fm += '\ntranslationStatus: pending';
      }

      const jaContent = `---\n${fm}\n---\n${body}`;
      writeFileSync(jaItemPath, jaContent, 'utf8');
      created++;
    }
  }

  return { created, skipped };
}

console.log('Creating Japanese translation stubs...');
const result = processDirectory(EN_DIR, JA_DIR);
console.log(`Done: ${result.created} created, ${result.skipped} skipped`);
