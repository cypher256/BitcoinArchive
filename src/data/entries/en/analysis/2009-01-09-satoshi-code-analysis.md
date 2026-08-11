---
title: "What Satoshi's code reveals — coding style, commit patterns, and evolution from v0.1.0 to v0.3.19"
date: 2009-01-09T00:00:00Z
type: "analysis"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Statistical analysis of Satoshi's Bitcoin source (v0.1.0–v0.3.19): coding-style fingerprint, commit times suggesting EST/CST, growth from 19,901 to 31,909 lines over 23 months, final-commit traits."
isSatoshi: true
tags:
  - "satoshi-nakamoto"
  - "source-code"
  - "analysis"
  - "coding-style"
  - "timeline"
  - "historic"
secondarySources:
  - name: "Original Bitcoin v0.1.0 source — pinned commit 4184ab2"
    url: "https://github.com/trottier/original-bitcoin/tree/4184ab26345d19e87045ce7d9291e60e7d36e096"
  - name: "Bitcoin v0.3.19 source — tagged release commit fc73ad6"
    url: "https://github.com/bitcoin/bitcoin/tree/fc73ad644f0b87b91f49b7f6f6b2348f78bdbbf4"
  - name: "Satoshi Nakamoto Institute — Code"
    url: "https://satoshi.nakamotoinstitute.org/code/"
relatedEntries:
  - analysis/2009-01-09-satoshi-windows-development-environment
  - "analysis/2008-10-31-bitcoin-design-lineage"
  - "analysis/2008-10-31-satoshi-anonymity-architecture"
  - "analysis/2008-10-31-satoshi-identification-asymmetry"
  - "aftermath/2008-10-31-satoshi-nakamoto-biography"
  - "aftermath/2008-08-22-wei-dai-biography"
  - "aftermath/2024-08-06-forensicxs-bitcoin-v01-code-walkthrough"
  - "analysis/2009-01-03-genesis-block-hardcode-analysis"
  - "forum/github/pr-4641/2014-08-06-pr-4641-doc-remove-satoshi-s-variable-naming-style"
  - "correspondence/martti-malmi/2010-05-14-status-update-191"
  - "correspondence/martti-malmi/2010-05-16-status-update-192"
  - "analysis/2009-01-09-satoshi-distribution-and-tooling-anomalies"
  - "analysis/2008-08-20-satoshi-activity-timeline"
  - "aftermath/2009-05-01-martti-malmi-biography"
  - "aftermath/2009-08-30-bitcoin-svn-repository-committers"
  - "aftermath/2010-06-11-gavin-andresen-biography"
  - "aftermath/2013-04-17-sergio-lerner-patoshi-analysis"
  - "aftermath/2020-11-23-chain-bulletin-satoshi-london-hypothesis"
  - "design/2009-01-03-bitcoin-system-design-overview"
  - analysis/2009-01-09-bitcoin-v01-serialization-boundaries
  - "design/2009-01-03-bitcoin-architecture-evolution"
  - "analysis/2009-01-09-bitcoin-time-warp-attack"
  - "aftermath/2010-12-15-bitcoin-v0319-released"
inlineLinkKeywords:
  - "Satoshi's coding style"
  - "coding style fingerprint"
  - "commit time pattern"
  - "code evolution"
---

![Dark-themed graphic pairing a code-editor window of C++ snippets with a clock diagram marking a silent UTC hour range, a rising line chart of codebase growth, and a commit timeline with a gap labeled "75-day silence."](/BitcoinArchive/images/analysis/2009-01-09-satoshi-code-analysis-hero.png)

194 commits, two years, one identifiable coding style. This analysis examines Satoshi Nakamoto's Bitcoin source code from v0.1.0 (January 2009) through v0.3.19 (December 2010) — 160 SVN commits by `s_nakamoto` (with preserved timestamps) plus 34 git commits — and reads the static source plus the temporal pattern as one coherent body of evidence. The period between v0.1.0 (January 2009) and the start of SVN (October 2009) has no preserved commit history; the SVN repository was introduced in October 2009 with help from Martti Malmi.

## 1. Data sources

- **Source code:** Original Bitcoin v0.1.0 source and tagged releases through v0.3.19
- **Commit history:** 160 unique SVN commits by `s_nakamoto` (primary — preserves original timestamps) + 34 git commits by `Satoshi Nakamoto <satoshin@gmx.com>`

## 2. Key findings

- **Timezone:** The near-total absence of commits between 06:00–12:00 UTC strongly suggests residence in EST (UTC-5) or CST (UTC-6)
- **Commit activity period (SVN):** 420 days (October 2009 – December 2010), with commits on 109 unique days
- **Coding style:** Consistent use of Hungarian notation variants, quad-slash (`////`) TODO markers, custom macros (`loop`, `foreach`, `CRITICAL_BLOCK`), and Windows-first development patterns (the chronological development-environment record is in [Satoshi's Windows-only development environment](/BitcoinArchive/entries/analysis/2009-01-09-satoshi-windows-development-environment/); the distribution and tooling-absence reading is in [the Bitcoin v0.1 distribution and tooling-anomalies analysis](/BitcoinArchive/entries/analysis/2009-01-09-satoshi-distribution-and-tooling-anomalies/))
- **Code growth:** 19,901 → 31,909 lines (+60%) over 23 months
- **Final activity:** Security hardening, DoS mitigation, removal of centralized safe mode — work characteristic of someone preparing to hand off a project, the same pairing of changes shipped together in [the v0.3.19 SourceForge release](/BitcoinArchive/entries/aftermath/2010-12-15-bitcoin-v0319-released/), Satoshi's final release

## 3. The 75-day gap (March–May 2010)

The monthly commit chart below shows a conspicuous gap from early March to mid-May 2010 during which no SVN commits were made by `s_nakamoto`. Satoshi himself acknowledged and explained this absence in a May 16, 2010 email: after [Martti Malmi checked in on him](/BitcoinArchive/entries/correspondence/martti-malmi/2010-05-14-status-update-191/) ("How are you doing? Haven't seen you around in a while."), Satoshi [replied](/BitcoinArchive/entries/correspondence/martti-malmi/2010-05-16-status-update-192/): *"I've also been busy with other things for the last month and a half. I just now downloaded my e-mail since the beginning of April. I mostly have things sorted and should be back to Bitcoin shortly."*

This is the only first-person account of the gap in the public record. Satoshi does not specify what the "other things" were.

## 4. Where these findings connect

The code-level findings here feed several adjacent analyses: the [Satoshi biography](/BitcoinArchive/participants/satoshi-nakamoto/) and the [Bitcoin SVN repository committers record](/BitcoinArchive/entries/aftermath/2009-08-30-bitcoin-svn-repository-committers/) for participant tracking; the [Satoshi activity timeline](/BitcoinArchive/entries/analysis/2008-08-20-satoshi-activity-timeline/) for date-by-date public activity; the [bitcoin-design-lineage](/BitcoinArchive/entries/analysis/2008-10-31-bitcoin-design-lineage/) for the precursor-vs-novel synthesis breakdown; the [Satoshi anonymity architecture](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-anonymity-architecture/) for what the code says (and does not say) about its author; the [identification-asymmetry analysis](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-identification-asymmetry/) for why these code-level traces under-determine identity; the [v0.1 serialization-boundary analysis](/BitcoinArchive/entries/analysis/2009-01-09-bitcoin-v01-serialization-boundaries/) for the byte-level hash and transport map; and the [Bitcoin architecture-evolution design entry](/BitcoinArchive/entries/design/2009-01-03-bitcoin-architecture-evolution/) for how the v0.1 architectural decisions reshape across later versions.

## 5. Visualizations
