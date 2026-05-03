---
title: "Satoshi Nakamoto Stylometric Analysis: 'Where is Satoshi?' — Bas van Dorst's 75,000-Author Open-Source Comparison Dataset (April 13, 2024)"
date: 2024-04-13T00:00:00Z
type: "article"
source: "github"
sourceUrl: "https://github.com/basvandorst/where-is-satoshi"
author: "Bas van Dorst"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "On April 13, 2024, Bas van Dorst published 'Where is Satoshi?', a large-scale open-source stylometric comparison of Satoshi Nakamoto's writing against more than 75,000 cryptography mailing-list authors and over 70,000 Reddit /r/Bitcoin commenters. The repository is the largest publicly-released numerical-data corpus of Satoshi-vs-candidates stylometric comparison: 500,000+ mailing-list posts (10+ lists, 1992–2000), 7,500,000+ Reddit comments (2005–2019), and 81,500 words of known Satoshi writing (whitepaper, emails, BitcoinTalk posts, code comments). Metrics computed across the full corpus include n-gram analysis (1/2/3-grams), Burrows' Delta, Jaccard similarity, five readability indices (Flesch, Gunning Fog, Dale-Chall, Coleman, SMOG), punctuation patterns, word-length frequency distributions, personal-pronoun usage, hyphenation patterns, and British vs. American spelling variants. The complete numerical results are released as downloadable XLSX (40 MB) and CSV (240 MB) files. The author deliberately refrains from naming a candidate ('Yes, I have a short-list of suspects. No, I'm not going to drop names here because I'm not 100% sure'), prioritizing methodology and data transparency over identification claims. The project is methodologically the most rigorous numerical multi-candidate stylometric resource on Satoshi authorship in the public record."
isSatoshi: false
tags:
  - "satoshi-identity"
  - "stylometric-analysis"
  - "methodology"
  - "dataset"
  - "open-source"
  - "investigation"
secondarySources:
  - name: "Michael Chon — 'Stylometric Analysis: Satoshi Nakamoto' (Towards Data Science / Medium)"
    url: "https://medium.com/data-science/stylometric-analysis-satoshi-nakamoto-294926cdf995"
    note: "Earlier and smaller-scale stylometric analysis using similar methodology, useful as a methodological reference."
  - name: "blockchainreporter.net — 'Can We Uncover The Identity Of Satoshi Through Stylometry Analysis?'"
    url: "https://blockchainreporter.net/can-we-uncover-the-identity-of-satoshi-through-stylometry-analysis/"
    note: "Survey-style overview of stylometric Satoshi-identification work, including discussion of the limitations the van Dorst project explicitly catalogs."
relatedEntries:
  - aftermath/2014-04-16-aston-university-szabo-stylometric-study
  - aftermath/2013-12-05-techcrunch-skye-grey-szabo-stylometric
  - aftermath/2015-05-15-popper-nyt-szabo-satoshi-investigation
  - aftermath/2026-04-08-nyt-carreyrou-adam-back-satoshi-investigation
  - analysis/2013-12-05-szabo-satoshi-identity-hypothesis
  - analysis/2026-04-08-adam-back-satoshi-identity-hypothesis
  - analysis/2008-10-31-satoshi-identity-hypotheses-overview
  - analysis/2008-10-31-satoshi-identification-asymmetry
  - analysis/2008-10-31-satoshi-anonymity-architecture
---

On April 13, 2024, **Bas van Dorst** released ["Where is Satoshi?"](https://github.com/basvandorst/where-is-satoshi) — a large-scale, open-source stylometric comparison of [Satoshi Nakamoto](/BitcoinArchive/participants/satoshi-nakamoto/)'s writing corpus against more than 75,000 cryptography mailing-list authors and over 70,000 Reddit /r/Bitcoin commenters. The project is, by corpus size and by data-release transparency, the most rigorous numerical multi-candidate stylometric resource on Satoshi authorship in the public record.

**Corpus:**

- **Mailing-list corpus:** 500,000+ posts across 10+ cryptography-related mailing lists, covering 75,000+ authors writing between 1992 and 2000.
- **Reddit corpus:** 7,500,000+ comments from /r/Bitcoin, covering 70,000+ authors between 2005 and 2019.
- **Satoshi corpus:** 81,500 words across the [Bitcoin whitepaper](/BitcoinArchive/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-10-31-bitcoin-p2p-e-cash-paper/), the [BitcoinTalk forum posts](/BitcoinArchive/participants/satoshi-nakamoto/), [private email correspondence](/BitcoinArchive/entries/correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai/), and code comments from the [v0.1 source release](/BitcoinArchive/entries/emails/cryptography/bitcoin-v0-1-released/2009-01-08-bitcoin-v0-1-released/).

**Stylometric metrics:**

For every (author, time-window) pair the project computes:

- **N-gram analysis** at the 1/2/3-gram level (vocabulary, phrase patterns).
- **Burrows' Delta** — the standard stylometric distance metric in computational stylometry.
- **Jaccard similarity** — set-overlap measure across vocabulary.
- **Five readability indices**: Flesch, Gunning Fog, Dale-Chall, Coleman, SMOG.
- **Punctuation patterns**, including hyphenation conventions and double-spacing-after-period (one of the markers later highlighted in the [Carreyrou NYT investigation](/BitcoinArchive/entries/aftermath/2026-04-08-nyt-carreyrou-adam-back-satoshi-investigation/)).
- **Word-length frequency distributions**.
- **Personal pronoun usage** (first-person singular vs. plural, presence/absence patterns).
- **British vs. American spelling variants** — including the British-spelling tells in Satoshi's writing that have driven multiple identification hypotheses.

**Data release:**

The complete numerical output is released as downloadable spreadsheets:

- `XLSX` aggregate: 40 MB.
- `CSV` raw per-chunk: 240 MB.

This is the largest publicly-released numerical dataset of Satoshi-vs-candidates stylometric comparison. It is the only resource in the field that allows independent re-analysis: a researcher with a different distance metric or a different candidate-pruning strategy can run their own ranking against the same underlying numbers.

**Author's framing:**

Van Dorst explicitly refrains from naming a leading candidate:

> Yes, I have a short-list of suspects. No, I'm not going to drop names here because I'm not 100% sure.

He is also transparent about personal interest:

> There is no personal interest in Satoshi's real identity. I sold my stake in 2012, way before the hype started.

The combination — large dataset, full numerical release, no identification push — is methodologically more rigorous than the narrative-driven stylometric pieces that have named specific candidates ([Skye Grey 2013 for Szabo](/BitcoinArchive/entries/aftermath/2013-12-05-techcrunch-skye-grey-szabo-stylometric/), the [Aston University 2014 study for Szabo](/BitcoinArchive/entries/aftermath/2014-04-16-aston-university-szabo-stylometric-study/), Cafiero's analysis in [Carreyrou's 2026 NYT investigation for Adam Back](/BitcoinArchive/entries/aftermath/2026-04-08-nyt-carreyrou-adam-back-satoshi-investigation/)).

**Methodological caveats stated by the author:**

- "High correlation only shows similar language patterns → high correlation does not imply causation." Two authors writing about the same technical subject in the same era will share vocabulary and sentence structures regardless of whether they are the same person.
- N-gram analysis is complicated by terminology emerging only after Bitcoin's 2009 release. Comparisons to post-2010 writing on cryptocurrency topics can be confounded by Bitcoin-specific vocabulary that any informed writer will have adopted.
- Email-thread reply extraction may inadvertently include quoted text from earlier replies, misattributing language to the wrong author.
- The last data chunk in any time-windowed analysis is often incomplete, potentially skewing aggregated results.

These caveats are the same structural limitations that constrain all stylometric Satoshi-identification work; the project's value is in stating them explicitly and providing the raw numerical data that lets a critic test them.

**Position in the stylometric record:**

Cross-referencing this corpus against the named-candidate stylometric tradition:

| Study | Year | Candidate scope | Top match | Numerical data public |
|---|---|---|---|---|
| [Skye Grey](/BitcoinArchive/entries/aftermath/2013-12-05-techcrunch-skye-grey-szabo-stylometric/) | 2013 | Szabo (single-hypothesis) | Szabo | No (narrative phrase list) |
| [Aston University](/BitcoinArchive/entries/aftermath/2014-04-16-aston-university-szabo-stylometric-study/) | 2014 | 11 candidates | Szabo | No (results in press releases only) |
| Cafiero / [Carreyrou NYT](/BitcoinArchive/entries/aftermath/2026-04-08-nyt-carreyrou-adam-back-satoshi-investigation/) | 2026 | 12 candidates (focus); 620 (broader) | Adam Back (Hal Finney near tie) | No (results summarized in NYT article) |
| **van Dorst** | **2024** | **75,000+** | **Not named** | **Yes — 280 MB CSV/XLSX** |

The fact that van Dorst declines to name a candidate while the narrative-driven studies do — and the fact that the named-candidate studies disagree on the leading candidate (Szabo vs. Adam Back) — is itself a methodological observation: stylometric Satoshi identification is sensitive to corpus selection, distance metric, and candidate pre-selection in ways that change the answer.

For the analytical treatment of stylometric methods in Satoshi identification, see the relevant identity-hypothesis entries: [Nick Szabo](/BitcoinArchive/entries/analysis/2013-12-05-szabo-satoshi-identity-hypothesis/), [Adam Back](/BitcoinArchive/entries/analysis/2026-04-08-adam-back-satoshi-identity-hypothesis/), and the [identity-hypotheses overview](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/).
