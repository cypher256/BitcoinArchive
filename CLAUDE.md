# Project Rules

## ⛔ Read-the-Guide Gate (highest-priority, enforced before any other action)

**Before doing any of the following — proposing, planning, editing,
adding entries, choosing tools, picking visualizations, writing
commit messages — Claude MUST have read these three files in full,
top to bottom, in this session:**

- `STYLE_GUIDE.md` (~1300 lines)
- `STYLE_GUIDE_JA.md` (~700 lines)
- `STYLE_GUIDE_JA_OPS.md` (~240 lines)

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
and rework. The cost of reading ~2,300 lines once per session is
trivial compared to the cost of producing a non-conforming change
and having to redo it.

If a session has been long-running and the guides have already been
read fully, this gate is satisfied; do not re-read on every prompt.
But on the first edit of a session, the gate fires unconditionally.

## Commit Messages

Write in English. (public repository)

## Build

**NEVER run `npm run build`. Use `npm run check` instead.**

`npm run build` is slow (it generates the whole static site — thousands of
pages). Use `npm run check` for validation; it runs in seconds. Full
builds run only in CI (GitHub Actions).

## Editorial Rules

All editorial rules: see STYLE_GUIDE.md and STYLE_GUIDE_JA.md
(plus STYLE_GUIDE_JA_OPS.md for the operational rules of scripts that
modify JA content). The Read-the-Guide Gate above requires a full,
top-to-bottom read of all three before any editorial action.
