# Project Rules

## ⛔ Read-the-Guide Gate (highest-priority, enforced before any other action)

**`STYLE_GUIDE.md` was split into three files on 2026-08-25** to keep
the always-required read smaller (a single 3,369-line file was being
proxied through summaries instead of actually read). The three files:

- `STYLE_GUIDE_CORE.md` — always required, unconditionally.
- `STYLE_GUIDE_REFERENCE.md` — required in addition, whenever the task
  touches any of: an entry's `title` or `description` field, entry
  dates (`createdAt`/`updatedAt`), `relatedEntries`, participant slugs
  or avatars, biography linking, the `callout` field, `partOf`, a
  design-document series, `inlineLinkKeywords`, a scripted
  (multi-entry) edit, or duplicate-ID / technical-review check output.
- `STYLE_GUIDE_VISUAL.md` — required in addition, whenever the task
  touches any of: a Mermaid diagram, a d3 chart (a `<!-- chart: -->`
  marker, a file under `src/scripts/*.js` that draws a chart, or a
  `src/components/*.astro` component using d3), a markdown table in
  entry content, layout/CSS width tokens, or a CSS color declaration
  (`color`, `background`, `border-color`, `text-decoration-color`,
  etc.) added or changed on any component, page, or the shared
  stylesheet (`src/styles/global.css`) — the guide's "Link-color
  confusion rule" (non-link text must never use `--color-link` or an
  adjacent hue) is not obvious from width/layout intuition alone and
  has been violated by skipping this file (2026-08-31/09-01: 3 CSS
  rules re-introduced the exact link-color confusion the rule exists
  to prevent, 3 months after the rule was written for the same
  mistake).

These triggers are deliberately concrete (specific fields, file
patterns, marker syntax) rather than a vague "if this feels like
visual work" judgment call — a vague trigger is exactly as skippable
as no trigger at all. When in doubt whether a task touches
REFERENCE or VISUAL, read it; the cost of an unneeded read is far
lower than the cost of an unconfirmed skip.

**Before doing any of the following — proposing, planning, editing,
adding entries, choosing tools, picking visualizations, writing
commit messages — Claude MUST have read these files in full, top to
bottom, in this session:**

- `STYLE_GUIDE_CORE.md` (always)
- `STYLE_GUIDE_REFERENCE.md` (when triggered, see above)
- `STYLE_GUIDE_VISUAL.md` (when triggered, see above)
- `STYLE_GUIDE_JA.md`
- `STYLE_GUIDE_JA_OPS.md`
- `src/pages/about.astro` and `src/pages/ja/about.astro`

The about pages are the canonical source of the archive's mission and
content-preservation policy ("archived content persists permanently
even when the original source URL becomes unavailable"). Without
reading them, the operational rules in the style guides are
ungrounded — and editorial decisions like writing a placeholder
primary-source entry, or framing instead of preserving content, will
quietly violate the mission while passing the style-guide checks.

"In full" means line 1 to the last line via the `Read` tool, advancing
`offset` until end of file. **`grep` / search is not a substitute for
reading.** Grepping for keywords pattern-matches the rule but loses
the surrounding qualifications, exceptions, and cross-references —
which is where the actual editorial decisions live.

`grep` is allowed *only after* a full read, when you need to re-find
a specific line you already understood in context. Sampling with grep
to "save time" before the full read is forbidden.

**Why this gate exists.** The guides codify dozens of cross-cutting
decisions: when to reach for d3 vs Mermaid vs tables, how titles
should read, what the source-citation rules are, when JA pages may
include English original text, how scripted edits must be guarded,
and so on. Skipping the read leads to wrong tool choices, broken
cross-language conventions, regressions on previously-fixed issues,
and rework. The cost of reading the listed files once per session is
trivial compared to the cost of producing a non-conforming change and
having to redo it.

If a session has been long-running and the guides have already been
read fully, this gate is satisfied; do not re-read on every prompt.
But on the first edit of a session, the gate fires unconditionally.

## Page-history regression gate

Before changing any page or page data, inspect the target file's history
before deciding what to edit. Read the target and its EN/JA counterpart
in full, then use `git log --follow -p`, `git blame` for the affected
lines, and `git log -S` for text that was previously added, removed,
restored, or reverted. Check related pages and the existing checks before
an edit. If the requested change conflicts with an intentional historical
decision, stop before editing and resolve the conflict explicitly.

After editing, reread the target and counterpart in full, inspect the
complete diff, compare facts, sources, dates, links, and structure, and
run the applicable checks plus `git diff --check`. A passing check does
not replace the full reread. Do not mechanically propagate a page change
to similar pages without reviewing each page's history and content.

## Commit Messages

Write in English. (public repository)

### Length limit — keep under 1,500 bytes

The Cloudflare Pages deployments API rejects commit messages above
~2,000 bytes with `code: 8000111 "Invalid commit message"`. When that
happens the wrangler step uploads all files successfully but the
deployment registration fails — the site stays frozen on the previous
commit even though GitHub Pages (separate workflow) deploys cleanly,
so the failure is easy to miss.

- Keep commit messages **under 1,500 bytes** (safe margin)
- Put long explanations (full file lists, audit findings, design
  rationale) in the PR body, an Issue, or a STYLE_GUIDE section,
  not in the commit message
- Split large changes into multiple commits along logical boundaries
- If a commit is rejected, recover with an empty commit + short
  message: `git commit --allow-empty -m "Trigger CF redeploy"`
  then push. The earlier commit's files are already uploaded;
  the empty commit just gets the deployment registered.

Past incident (2026-05-17): commit `d16e508b` (Archive-wide JA
consistency, 25 files) ran 2,625 bytes and was rejected. Recovered
via empty commit `e488690c`.

## Build

**NEVER run `npm run build`. Use `npm run check` instead.**

`npm run build` is slow (it generates the whole static site — thousands of
pages). Use `npm run check` for validation; it runs in seconds. Full
builds run only in CI (GitHub Actions).

The verification scripts `check` / `build` run — their tier (`check-*`
gate vs `audit-*` manual), ports, and where each runs — are catalogued
in `scripts/CHECKS.md`, kept honest by `check-registry`.

## Editorial Rules

All editorial rules: see STYLE_GUIDE_CORE.md, STYLE_GUIDE_REFERENCE.md,
STYLE_GUIDE_VISUAL.md, and STYLE_GUIDE_JA.md (plus STYLE_GUIDE_JA_OPS.md
for the operational rules of scripts that modify JA content). The
Read-the-Guide Gate above defines which of these are required for a
given task.
