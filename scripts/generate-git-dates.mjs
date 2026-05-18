#!/usr/bin/env node
/**
 * Generate git-dates.json from git history.
 * For each entry, track createdAt and updatedAt **separately for EN and JA**:
 *   - en.createdAt / en.updatedAt: from src/data/entries/en/<id>.md history
 *   - ja.createdAt / ja.updatedAt: from src/data/translations/ja/<id>.md history
 *
 * EN and JA are usually edited together, so the two updatedAt values are typically
 * identical, but they diverge legitimately when only one side is touched (e.g. a
 * JA-only translation pass, or an EN-only fact correction). Each language page
 * shows its own updatedAt so the displayed date reflects what was actually edited
 * in that language.
 *
 * **updatedAt counts BODY changes only.** Frontmatter-only edits (tags,
 * secondarySources, relatedEntries, title, description, participants, type,
 * source, isSatoshi, translationStatus, etc.) do NOT bump updatedAt. The
 * intent: when a new analysis entry adds a back-link in 5-10 existing related
 * entries, those existing entries should NOT appear "recently updated" in
 * chronological listings, because their content has not changed.
 *
 * Detection method: for each commit-file pair, fetch the blob via
 * `git cat-file --batch`, strip the YAML frontmatter, and compute a SHA-256
 * over the remaining body. Two consecutive commits whose body hashes are
 * identical have made only frontmatter changes between them, so the newer
 * commit does NOT count as a body update. updatedAt is the newest commit
 * whose body hash differs from its immediate predecessor; createdAt is the
 * earliest commit touching the file.
 *
 * See STYLE_GUIDE.md "updatedAt policy" for the editor-facing rules.
 */
import { spawn, execSync } from 'child_process';
import { createHash } from 'crypto';
import { writeFileSync } from 'fs';
import { join } from 'path';

const ROOT = join(import.meta.dirname, '..');
const OUTPUT = join(ROOT, 'src', 'data', 'git-dates.json');

// Paths relative to repo root
const EN_PREFIX = 'src/data/entries/en/';
const JA_PREFIX = 'src/data/translations/ja/';

/**
 * Return the body portion of an entry markdown file — everything AFTER the
 * second `---` (the closing YAML frontmatter delimiter). If the file has no
 * frontmatter, the entire content is the body.
 *
 * @param {string} content
 * @returns {string}
 */
function stripFrontmatter(content) {
  if (!content.startsWith('---\n') && !content.startsWith('---\r\n')) return content;
  // Find the closing `\n---\n` (or `\n---\r\n`, or trailing `\n---`).
  // Start search after the opening `---\n` to avoid matching it.
  const m = content.slice(4).match(/\n---\r?\n|\n---$/);
  if (!m) return content; // malformed — treat as all body
  const endIdx = 4 + m.index + m[0].length;
  return content.slice(endIdx);
}

/**
 * Stream a list of git revs to `git cat-file --batch` and collect their blob
 * contents. Returns a Map<rev, Buffer | null>. `null` means missing/deleted.
 *
 * @param {string[]} revs
 * @returns {Promise<Map<string, Buffer | null>>}
 */
function batchCatFile(revs) {
  return new Promise((resolve, reject) => {
    const proc = spawn('git', ['cat-file', '--batch'], { cwd: ROOT });
    const results = new Map();
    let buf = Buffer.alloc(0);
    let revIndex = 0;
    let pendingContent = null; // { size: number, rev: string } or null

    proc.stdout.on('data', (chunk) => {
      buf = Buffer.concat([buf, chunk]);
      while (true) {
        if (pendingContent === null) {
          // Read a header line: "<sha> blob <size>\n" or "<rev> missing\n"
          const nlIdx = buf.indexOf(0x0a);
          if (nlIdx === -1) return; // need more data
          const header = buf.slice(0, nlIdx).toString('utf-8');
          buf = buf.slice(nlIdx + 1);

          const rev = revs[revIndex++];
          if (header.endsWith(' missing')) {
            results.set(rev, null);
            continue;
          }
          const m = header.match(/^[0-9a-f]+ blob (\d+)$/);
          if (!m) {
            // Unexpected header — record null and continue
            results.set(rev, null);
            continue;
          }
          pendingContent = { size: parseInt(m[1], 10), rev };
        } else {
          // Read pendingContent.size bytes + 1 trailing newline
          if (buf.length < pendingContent.size + 1) return; // need more data
          const content = buf.slice(0, pendingContent.size);
          buf = buf.slice(pendingContent.size + 1);
          results.set(pendingContent.rev, content);
          pendingContent = null;
        }
      }
    });

    let stderrBuf = '';
    proc.stderr.on('data', (chunk) => { stderrBuf += chunk.toString('utf-8'); });
    proc.on('exit', (code) => {
      // Fail loudly on any of:
      //   - non-zero exit code from `git cat-file`
      //   - mismatch between revs sent and results collected (parser desync)
      // Silent fallthrough would let updatedAt regress to createdAt for any
      // entry whose history blob couldn't be read.
      if (code !== 0) {
        reject(new Error(`git cat-file --batch exited with code ${code}: ${stderrBuf.trim()}`));
        return;
      }
      if (results.size !== revs.length) {
        reject(new Error(
          `git cat-file --batch returned ${results.size} results for ${revs.length} revs ` +
          `(parser desync or missing blobs). stderr: ${stderrBuf.trim()}`
        ));
        return;
      }
      resolve(results);
    });
    proc.on('error', reject);

    // Send all revs. Use cork/uncork pattern would be ideal but write+end is
    // sufficient because git cat-file --batch buffers input.
    for (const rev of revs) {
      proc.stdin.write(rev + '\n');
    }
    proc.stdin.end();
  });
}

async function run() {
  // Ensure full git history is available (Cloudflare Pages uses shallow clone)
  try {
    const isShallow = execSync('git rev-parse --is-shallow-repository', { cwd: ROOT, encoding: 'utf-8' }).trim();
    if (isShallow === 'true') {
      console.log('Shallow clone detected — fetching full history for accurate git dates...');
      execSync('git fetch --unshallow', { cwd: ROOT, encoding: 'utf-8' });
    }
  } catch {
    // Ignore — not a git repo or fetch failed; proceed with available history
  }

  // Step 1: For each entry file, collect commit history (date + hash), newest first.
  const raw = execSync(
    'git log --all --format="COMMIT %aI %H" --name-only --diff-filter=ACMR',
    { cwd: ROOT, encoding: 'utf-8', maxBuffer: 200 * 1024 * 1024 }
  );

  /** @type {Map<string, Array<{ date: string, hash: string }>>} */
  const perFileHistory = new Map();
  let currentDate = '';
  let currentHash = '';

  for (const line of raw.split('\n')) {
    if (line.startsWith('COMMIT ')) {
      const m = line.match(/^COMMIT (\S+) (\S+)$/);
      if (m) { currentDate = m[1]; currentHash = m[2]; }
      continue;
    }
    const trimmed = line.trim();
    if (!trimmed || !currentDate) continue;
    if (!trimmed.endsWith('.md')) continue;
    if (!trimmed.startsWith(EN_PREFIX) && !trimmed.startsWith(JA_PREFIX)) continue;

    if (!perFileHistory.has(trimmed)) perFileHistory.set(trimmed, []);
    perFileHistory.get(trimmed).push({ date: currentDate, hash: currentHash });
  }

  // Step 2: Build all <commit_hash>:<path> revs.
  /** @type {string[]} */
  const revs = [];
  for (const [path, history] of perFileHistory) {
    for (const { hash } of history) {
      revs.push(`${hash}:${path}`);
    }
  }
  console.log(`Fetching ${revs.length} blob versions across ${perFileHistory.size} files…`);

  // Step 3: Stream all revs to `git cat-file --batch` and collect blob bodies.
  const blobs = await batchCatFile(revs);

  // Step 4: For each rev, compute the body SHA-256 (frontmatter stripped).
  /** @type {Map<string, string>} */
  const bodyHashes = new Map();
  for (const [rev, content] of blobs) {
    if (content === null) { bodyHashes.set(rev, ''); continue; }
    const body = stripFrontmatter(content.toString('utf-8'));
    bodyHashes.set(rev, createHash('sha256').update(body).digest('hex'));
  }

  // Step 5: For each file, compute createdAt + updatedAt.
  /** @type {Map<string, { createdAt: string, updatedAt: string }>} */
  const fileMap = new Map();
  for (const [path, history] of perFileHistory) {
    if (history.length === 0) continue;
    // history[0] = newest, history[length-1] = oldest.
    const oldest = history[history.length - 1];
    let updatedAt = oldest.date;
    // Walk oldest → newest. The "predecessor" of a commit is unambiguous in
    // this direction (= the commit immediately older in time). Each time the
    // body hash differs from its predecessor, update `updatedAt`. The last
    // overwrite is the newest body-change commit. If no body change is ever
    // found (e.g. the file has only its creation commit, or every later
    // commit was frontmatter-only), `updatedAt` stays at the creation date.
    for (let i = history.length - 2; i >= 0; i--) {
      const newerRev = `${history[i].hash}:${path}`;
      const olderRev = `${history[i + 1].hash}:${path}`;
      const newerHash = bodyHashes.get(newerRev);
      const olderHash = bodyHashes.get(olderRev);
      if (newerHash !== undefined && olderHash !== undefined && newerHash !== olderHash) {
        updatedAt = history[i].date;
      }
    }
    fileMap.set(path, { createdAt: oldest.date, updatedAt });
  }

  // Step 6: Build per-entry-id, per-language output.
  /** @type {Record<string, { en?: { createdAt: string, updatedAt: string }, ja?: { createdAt: string, updatedAt: string } }>} */
  const result = {};
  for (const [filePath, dates] of fileMap) {
    let entryId = '';
    let lang = '';
    if (filePath.startsWith(EN_PREFIX)) {
      entryId = filePath.slice(EN_PREFIX.length).replace(/\.md$/, '');
      lang = 'en';
    } else if (filePath.startsWith(JA_PREFIX)) {
      entryId = filePath.slice(JA_PREFIX.length).replace(/\.md$/, '');
      lang = 'ja';
    }
    if (!entryId || !lang) continue;
    if (!result[entryId]) result[entryId] = {};
    result[entryId][lang] = { createdAt: dates.createdAt, updatedAt: dates.updatedAt };
  }

  const sorted = Object.fromEntries(
    Object.entries(result).sort(([a], [b]) => a.localeCompare(b))
  );

  writeFileSync(OUTPUT, JSON.stringify(sorted, null, 2) + '\n', 'utf-8');
  console.log(`Generated ${OUTPUT} (${Object.keys(sorted).length} entries)`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
