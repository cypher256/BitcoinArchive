---
title: "Satoshi Nakamoto's Source Code Analysis — Coding Style, Commit Patterns, and Code Evolution (v0.1.0–v0.3.19)"
date: 2009-01-09T00:00:00Z
type: "analysis"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin"
author: "Bitcoin Institute"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Statistical analysis of Satoshi Nakamoto's Bitcoin source code (v0.1.0–v0.3.19): coding style fingerprint, commit time patterns suggesting EST/CST timezone, code evolution from 19,901 to 31,909 lines over 14 months, and the characteristics of Satoshi's final commits before disappearing."
isSatoshi: true
featured: true
tags:
  - "satoshi-nakamoto"
  - "source-code"
  - "analysis"
  - "coding-style"
  - "timeline"
  - "historic"
secondarySources:
  - name: "Original Bitcoin v0.1.0 Source (trottier/original-bitcoin)"
    url: "https://github.com/trottier/original-bitcoin"
  - name: "Satoshi Nakamoto Institute — Code"
    url: "https://satoshi.nakamotoinstitute.org/code/"
relatedEntries:
  - "aftermath/2008-10-31-satoshi-nakamoto-biography"
  - "aftermath/2008-08-22-wei-dai-biography"
  - "aftermath/2024-08-06-forensicxs-bitcoin-v01-code-walkthrough"
  - "forum/github/pr-4641/2014-08-06-pr-4641-doc-remove-satoshi-s-variable-naming-style"
---

This analysis examines Satoshi Nakamoto's Bitcoin source code from v0.1.0 (January 2009) through v0.3.19 (December 2010). It combines two distinct data sets: **static source code analysis** of the v0.1.0 release (distributed without version control in January 2009), and **commit history analysis** from the SourceForge SVN repository, which was introduced in October 2009 with help from Martti Malmi. The period between v0.1.0 (January 2009) and the start of SVN (October 2009) has no preserved commit history.

**Data sources:**
- **Source code:** Original Bitcoin v0.1.0 source and tagged releases through v0.3.19
- **Commit history:** 160 unique SVN commits by `s_nakamoto` (primary — preserves original timestamps) + 34 git commits by `Satoshi Nakamoto <satoshin@gmx.com>`

**Key findings:**
- **Timezone:** The near-total absence of commits between 06:00–12:00 UTC strongly suggests residence in EST (UTC-5) or CST (UTC-6)
- **Commit activity period (SVN):** 420 days (October 2009 – December 2010), with commits on 109 unique days
- **Coding style:** Consistent use of Hungarian notation variants, quad-slash (`////`) TODO markers, custom macros (`loop`, `foreach`, `CRITICAL_BLOCK`), and Windows-first development patterns
- **Code growth:** 19,901 → 31,909 lines (+60%) over 14 months
- **Final activity:** Security hardening, DoS mitigation, removal of centralized safe mode — work characteristic of someone preparing to hand off a project

The interactive visualizations below present the statistical data from this analysis.
