import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// check-message-author-resolves.mjs — every entry whose type renders
// through MessageBlock.astro (the 8 types below) shows its `author`
// field as a linked avatar + name, resolved via findAuthorParticipant
// (src/i18n/utils.ts): match participants[].name, then the
// authorHandleToSlug map, then participants[].slug, case-insensitively.
// When none of those match, MessageBlock now renders the raw author
// string as plain unlinked text instead of a broken link/avatar (see
// its comment) -- so a miss here is not a rendering crash, but it IS
// silently hiding a real person behind a name that should link to
// their participant page. This check catches that class of miss
// (a `theymos`/`sipa`/`gmaxwell`-style handle nobody added to
// authorHandleToSlug yet) before it ships.
//
// KNOWN_UNATTRIBUTABLE_AUTHORS below is the deliberate exception list:
// authors with no real identity to resolve to at all (a deleted forum
// account), where plain text is the correct, permanent rendering, not
// a gap to fill.
//
// This script keeps its own copies of MESSAGE_BLOCK_TYPES,
// authorHandleToSlug, and the findAuthorParticipant logic rather than
// importing src/i18n/utils.ts: check scripts run as plain Node, not
// through Vite/TS, and every other script in this registry is
// self-contained for the same reason. Keep this copy in sync with
// src/i18n/utils.ts and the MESSAGE_BLOCK_TYPES literal in
// src/pages/entries/[...slug].astro (and its JA mirror) by hand when
// either changes.
const MESSAGE_BLOCK_TYPES = ['correspondence', 'mailing-list', 'forum-post', 'bip', 'whitepaper', 'court-document', 'tweet', 'web-document'];

const authorHandleToSlug = {
  'jgarzik': 'jeff-garzik',
  'sirius': 'martti-malmi',
  'laszlo': 'laszlo-hanyecz',
  'hal': 'hal-finney',
  'laanwj': 'wladimir-van-der-laan',
  'slush': 'marek-palatinus',
  'harding': 'david-harding',
  'satoshi': 'satoshi-nakamoto',
  'theymos': 'michael-marquardt',
  'bytemaster': 'daniel-larimer',
  'gavinandresen': 'gavin-andresen',
  'sipa': 'pieter-wuille',
  'luke-jr': 'luke-dashjr',
  'jtimon': 'jorge-timon',
  'vbuterin': 'vitalik-buterin',
  'gmaxwell': 'gregory-maxwell',
  'maaku': 'mark-friedenbach',
};

const KNOWN_UNATTRIBUTABLE_AUTHORS = ['[deleted]'];

function findAuthorParticipant(author, participants) {
  const authorLower = author.toLowerCase();
  return participants.find((p) => p.name.toLowerCase() === authorLower)
    || participants.find((p) => p.slug === authorHandleToSlug[authorLower])
    || participants.find((p) => p.slug === authorLower)
    || undefined;
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const entriesDir = path.resolve(__dirname, '../src/data/entries/en');

function walkMarkdownFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      files.push(...walkMarkdownFiles(fullPath));
    } else if (fullPath.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  const typeMatch = match[1].match(/^type:\s*"?([^"\n]+)"?/m);
  if (typeMatch) fm.type = typeMatch[1].trim();
  const authorMatch = match[1].match(/^author:\s*"?([^"\n]+)"?/m);
  if (authorMatch) fm.author = authorMatch[1].replace(/"$/, '').trim();
  const participantsBlock = match[1].match(/^participants:\n((?:\s+-\s+name:.*\n\s+slug:.*\n?)+)/m);
  fm.participants = [];
  if (participantsBlock) {
    const pairRe = /-\s+name:\s*"([^"]+)"\s*\n\s+slug:\s*"([^"]+)"/g;
    let m;
    while ((m = pairRe.exec(participantsBlock[1]))) {
      fm.participants.push({ name: m[1], slug: m[2] });
    }
  }
  return fm;
}

const issues = [];
let checked = 0;

for (const file of walkMarkdownFiles(entriesDir)) {
  const fm = parseFrontmatter(readFileSync(file, 'utf8'));
  if (!MESSAGE_BLOCK_TYPES.includes(fm.type)) continue;
  checked += 1;
  const author = fm.author || '';
  if (!author || KNOWN_UNATTRIBUTABLE_AUTHORS.includes(author)) continue;
  if (!findAuthorParticipant(author, fm.participants)) {
    issues.push({ file: path.relative(entriesDir, file), author });
  }
}

if (issues.length > 0) {
  console.error(`check-message-author-resolves: ${issues.length} entr${issues.length === 1 ? 'y' : 'ies'} whose author does not resolve to a participant:`);
  for (const { file, author } of issues) {
    console.error(`  - ${file}  (author: "${author}")`);
  }
  console.error(
    '\nEach author above renders as plain unlinked text on its page instead of a ' +
    'real participant link. Fix by adding a handle -> slug mapping to authorHandleToSlug ' +
    '(src/i18n/utils.ts and this script), correcting participants[] on the entry, or, if the ' +
    'author genuinely has no resolvable identity, adding it to KNOWN_UNATTRIBUTABLE_AUTHORS here.',
  );
  process.exit(1);
}

console.log(`check-message-author-resolves: OK (${checked} message-block entries, all authors resolve)`);
