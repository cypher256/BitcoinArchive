# Japanese Content Operational Rules

Operational procedures for any script that creates or modifies entries
under `src/data/translations/ja/`. This document is the companion to
`STYLE_GUIDE_JA.md`: the style guide defines how Japanese content
should look; this document defines how scripts may safely modify
Japanese content.

> **Document language convention.** The same convention as
> `STYLE_GUIDE_JA.md` applies here: rule prose is written in English;
> Japanese text appears only as data (path examples, error messages
> being illustrated, file content being shown).

## Why this document exists

The most painful regressions in this project's history have all been
caused by scripts overwriting existing files that contained manual
fixes. To make regression structurally impossible, all data-modifying
scripts must follow the rules below.

Past regressions in this codebase include:

- `4c1fe988` re-scrape: overwrote 1,278 manually-translated JA files.
- Phase 2 quote migration: wrote broken `person: ">"` values from a
  regex bug; required manual fixes across 22 files.
- `personSlug` was forgotten in Phase 2 migration; 904 files needed
  backfill.

All of these would have been caught by the SHA-1 snapshot rule below
before they reached `main`.

## 1. Existing File Preservation Guarantee

### When scripts may modify data

| Operation | Allowed? | Notes |
|---|---|---|
| Create new files only | ✅ Yes | Use `safeWrite()` (see below) |
| Bulk frontmatter / metadata update on existing files | ⚠️ Conditional | Deterministic structural updates only (e.g. `personSlug` backfill); body must not change |
| Bulk body / prose rewrite on existing files | ❌ No | See § 2 Scripted Edits below |
| Edit a shipped script to fix a bug | ✅ Yes | As long as `existsSync()` still skips already-produced files |
| Edit a shipped script to change its output format | ❌ No | Create a new script instead |

### Mandatory rules for any script that creates or modifies entry files

1. **Bug fixes to existing scripts are fine. Format changes are not.**
   You may fix bugs in a fetch / migration script that has already
   shipped data, as long as `existsSync()` still skips already-produced
   files. You must NOT change the output format (frontmatter shape, body
   structure, etc.) of an existing script. Create a new script instead.
   Format changes invite re-runs and re-runs cause regressions — that is
   the #1 cause of past regressions in this codebase.

2. **New scripts must use a `safeWrite()` helper with three guards.**
   The example below is for a JA translation script that writes under
   `src/data/translations/ja/`. Adjust the path pattern to whatever
   directory the script writes to (e.g. `src/data/entries/en/forum/...`
   for an EN-side scraper that produces source content the JA workflow
   later translates).

   ```javascript
   function safeWrite(filePath, content) {
     // Guard 1: whitelist the write target by path pattern
     const ALLOWED = /^src\/data\/translations\/ja\/forum\/bitcointalk\/topic-\d+\/\d{4}-\d{2}-\d{2}-[a-z0-9_-]+-msg\d+\.md$/;
     const rel = path.relative(process.cwd(), filePath);
     if (!ALLOWED.test(rel)) {
       throw new Error(`REFUSED: write target outside allowed pattern: ${rel}`);
     }

     // Guard 2: refuse to overwrite any existing file
     if (existsSync(filePath)) {
       throw new Error(`REFUSED: existing file would be overwritten: ${rel}`);
     }

     writeFileSync(filePath, content, 'utf8');
   }
   ```

3. **`--apply` is opt-in. Default mode is dry-run.**
   Scripts must default to dry-run (no writes). Writing only happens
   with an explicit `--apply` flag.

4. **Batch size limits.**
   Scripts that create many files must enforce a `MAX_FILES_PER_RUN`
   limit (typically 100–200) so that any unexpected behavior is caught
   before it spreads across the whole dataset.

### Mandatory verification: SHA-1 snapshot before / after

Any data-modifying script run must be preceded by a **backup branch**
checkpoint and followed by a **SHA-1 verification** that no existing
file was modified.

#### Step 1 — Create the backup branch (before running the script)

The backup branch records the working tree state immediately before the
script runs. Name it after the script that will run, so that a future
reader can match the backup to the operation it protects:

```bash
git checkout -b backup/before-<script-name>
```

For example, before running `scripts/fetch-replies-to-satoshi.mjs`,
create `backup/before-fetch-replies-to-satoshi`.

The current branch you were on (typically `main` or a feature branch)
is **not** the backup. The new `backup/before-<script-name>` branch is
the only record of pre-script state.

#### Step 2 — Confirm the working tree is clean

```bash
git status                     # must report: "nothing to commit, working tree clean"
npm run check                  # must exit 0
```

If either reports any deviation, resolve it before continuing. Do not
run the script with uncommitted changes — the SHA-1 snapshot below
cannot distinguish your in-flight work from script output.

#### Step 3 — Snapshot existing files

For a JA translation script (the primary case for this document):

```bash
find src/data/translations/ja/forum/bitcointalk -name "*.md" \
  -exec sha1sum {} \; | sort > /tmp/before.sha1
```

For an EN-side scraping script that produces source content the JA
workflow later translates, snapshot the EN entries directory instead:

```bash
find src/data/entries/en/forum/bitcointalk -name "*.md" \
  -exec sha1sum {} \; | sort > /tmp/before.sha1
```

Always snapshot the same path the script writes under.

#### Step 4 — Run the script with `--apply`, then verify

```bash
node scripts/<script-name>.mjs --apply

bash scripts/verify-no-regression.sh /tmp/before.sha1
```

`verify-no-regression.sh` re-computes SHA-1 hashes for the same path
set and compares against the snapshot. It must report
`✓ No existing files modified` and exit 0.

If `verify-no-regression.sh` exits non-zero, the script has overwritten
or modified an existing file — this is the regression we are trying to
prevent. Stop here and roll back (Step 5).

#### Step 5 — Roll back if verification failed (only when it failed)

This step is **only** for the failure case in Step 4. If verification
passed, skip directly to Step 6.

Roll back by checking out the backup branch you created in Step 1, then
discarding the post-script working tree:

```bash
# Confirm you are on the post-script branch (the script was run on the branch you created the backup from)
git status

# Restore the working tree to the pre-script state recorded in backup/before-<script-name>
git reset --hard backup/before-<script-name>
```

`git reset --hard` discards uncommitted changes and post-script commits
on the current branch. Use it only when verification has confirmed a
regression. The branch name `backup/before-<script-name>` is the
specific reference being restored — do not run `git reset --hard` with
no arguments or with `HEAD~` syntax for this purpose, as those discard
work without targeting the backup checkpoint.

After rollback, investigate the root cause in the script (`safeWrite`
guard misconfiguration, `existsSync` bypass, etc.) before retrying.

#### Step 6 — Re-run all checks (verification passed case)

```bash
npm run check
```

If all checks pass, the script run is complete. Keep
`backup/before-<script-name>` until the change is reviewed and merged
to `main`; delete the branch only after verification has held in
production.

## 2. Scripted Edits (Japanese Content)

Japanese Markdown body text must not be bulk-rewritten by scripts as a
normal workflow.

In particular, do not use scripts to:

- Restore Japanese body text from older commits.
- Combine current frontmatter with body text copied from another
  revision.
- Rewrite quote blocks across many files at once.
- Mass-replace translated prose based only on filename matching.
- Repair tone or quote structure by blind global replacement.

This is especially dangerous for Japanese entries because one bulk edit
can silently damage:

- Translated quote structure.
- `tone-skip` boundaries.
- Speaker annotations.
- Line breaks and paragraph rhythm.
- Internal links added after the older revision.

Safe script usage for Japanese content is limited to:

- Validation and mismatch detection.
- Read-only analysis.
- Narrowly-scoped metadata updates.
- Deterministic path and frontmatter changes.

If a script flags a Japanese content issue, use the script to identify
the target files, then review and edit the content itself deliberately.
Treat the script as a detector, not as an auto-author of prose.

See also `STYLE_GUIDE.md § Scripted Edits Policy` for the cross-language
version of this principle.

## 3. BitcoinTalk Fetching: Thread Size Limits

When fetching BitcoinTalk threads (e.g. `fetch-replies-to-satoshi.mjs`),
limit the maximum pages per thread. Some threads grow into hundreds or
thousands of pages over the years.

### Known mega-threads (as of 2026)

| Topic | Pages | Note |
|---|---|---|
| topic-1976 | 1,154+ | Long-running discussion thread |
| topic-1334 | 56 | |
| topic-287 | 73 | |

### Required limits

1. **`MAX_PAGES_PER_THREAD = 50`** — caps fetch at ~1,000 posts per
   thread. This covers Satoshi's active period (2010–2011) for any
   thread he participated in.
2. **Date-based early termination** — if all posts on a fetched page
   are past `MAX_DATE` (2012-01-01), stop fetching subsequent pages.
   BitcoinTalk threads are time-ordered, so subsequent pages will also
   be past the date.

### Why this matters

Without these limits:

- topic-1976 alone takes ~38 minutes (1,154 pages × 2 second delay).
- Most pages are post-2012 garbage (filtered out anyway).
- A single mega-thread can stall the entire fetch pipeline.

## 4. Re-scrape / Re-generation Guard

When re-scraping or regenerating context posts (EN or JA):

1. **Before re-scrape**: create a backup branch of the current JA
   translations:

   ```bash
   git checkout -b backup/ja-pre-rescrape
   ```

   (Same backup-branch convention as § 1 Step 1; the name records what
   the branch is protecting.)

2. **After re-scrape**: run

   ```bash
   git diff backup/ja-pre-rescrape -- src/data/translations/ja/
   ```

   to identify any translation loss.

3. **After re-translation**: run all JA checks before committing:
   - `npm run check:ja-names` — person names must be katakana.
   - `npm run check:ja-titles` — context post titles must be Japanese.
   - `npm run check:ja-tone` — tone rules must pass.
   - `npm run check:ja-glossary` — terminology glossary must pass.

4. **Manual review**: verify quote blocks match EN structure (same
   paragraphs quoted).

Re-scrape commits that overwrite existing JA translations without
preserving katakana names, translated titles, quote structure, and tone
annotations are considered regressions.

---

# References

- `STYLE_GUIDE_JA.md` — editorial style rules for Japanese content.
- `STYLE_GUIDE.md § Scripted Edits Policy` — cross-language version of
  the scripted-edits principle.
