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

**Bitcoin Institute reanalysis: per-candidate distance values from van Dorst's published data (May 2026):**

The author refuses to publish a ranking, but the underlying numerical data is downloadable as `output/comparison.xlsx` (43 MB, 76,407 rows × 76 columns of (author, source) statistics). The Bitcoin Institute extracted distance values for the five most-cited Satoshi-identity named candidates (Adam Back, Wei Dai, Hal Finney, Nick Szabo, Len Sassaman), aggregated per-author (chunk-weighted across all sources), and ranked the named candidates against the 12,739 authors in the corpus with at least 10 chunks of writing (the threshold at which Burrows' Delta becomes statistically meaningful per the README's own guidance).

| Candidate | Author file | Burrows Δ | Rank | Percentile | Chunks |
|---|---|---|---|---|---|
| **Nick Szabo** | szabo_netcom_com.txt | 0.14405 | 595 / 12,739 | top **4.67%** | 130 |
| **Hal Finney** | hfinney_shell_portal_com.txt | 0.14411 | 878 / 12,739 | top **6.89%** | 1,336 |
| **Adam Back** | adam_cypherspace_org.txt | 0.14414 | 1,003 / 12,739 | top **7.87%** | 676 |
| **Adam Back** (alt email) | aba_dcs_ex_ac_uk.txt | 0.14415 | 1,092 / 12,739 | top **8.57%** | 1,474 |
| **Wei Dai** | weidai_eskimo_com.txt | 0.14428 | 2,929 / 12,739 | top 22.99% | 161 |
| **Len Sassaman** | rabbi_quickie_net.txt | 0.14428 | 3,034 / 12,739 | top 23.82% | 65 |

(Burrows' Delta: lower = closer match. Corpus mean = 0.14456, stdev = 0.00027, range 0.14128–0.14617. All five named candidates are below the corpus mean — their writing is closer to Satoshi's reference profile than the average cypherpunk-era mailing-list author.)

**Why van Dorst declines to publish a top candidate (read from the data itself):**

The top of the corpus' Burrows' Delta ranking is occupied by what the data clearly shows is **noise rather than signal**. The 20 closest-matched authors include:

- Italian and Spanish e-commerce/utility account text (`verba_rol_it`, `info_giganetstore_com`, `apoio_giganetstore_com`, `gianluigi_euro_net`)
- Anonymous remailer outputs (`an250888_anon_penet_fi`, `cypherpunks_alqaeda_net`, `nobody_squirrel_owl_de`, `anonremailer_utopia_hacktic_nl`, `anonymous_freezone_remailer`)
- Disposable account text (`dxnew2001_yahoo_com`, `pro2rat_yahoo_com_au`, `ramonbitcoin`)
- Miscellaneous unknown writers (`skaplin_c2_org`, `p_txt_toad_com`, `199604290755_jaa15922_utopia_hacktic_nl`, `hahn_lds_loral_com`, `sion_cs_sunysb_edu`, `kevin_gaec_com`, `insightonthenews_broadbandpublisher_com`, `oa_acm_org`)

None of the top 20 — and none of the top several hundred — is a named identity-hypothesis candidate. The named candidates begin appearing only at rank 595 (Szabo).

The ranking is dominated by structural artifacts of the corpus: short-text accounts whose limited vocabulary happens to align with Satoshi's reference profile by chance, anonymous remailer relay text whose attribution is nominal rather than authorial, and language-mismatched commerce-site text whose distance metric drops because of low common-word overlap rather than genuine style match.

**This is the empirical content of van Dorst's "I'm not 100% sure" caveat.** The published note "I have a short-list of suspects. No, I'm not going to drop names here because I'm not 100% sure" can be read in four ways, all of which are corroborated by the data above:

1. **Metric noise sensitivity.** Burrows' Delta on its own ranks e-commerce and remailer accounts above all named candidates. Any "winner" produced by the metric on this corpus is unreliable until additional filtering (subject matter, era, author identification quality) is applied — exactly the filtering that produced the contested results in the smaller-pool studies (Skye Grey, Aston, Cafiero).
2. **Author-attribution accuracy.** The README itself flags "some authors were active under multiple names and/or mail addresses and/or used remailer services" and "no guarantee that texts fully belong to the author" (mail-thread reply extraction). Aggregation per author is therefore lossy — the same person may appear as multiple rows, and remailer rows commingle traffic from many people. Adam Back appearing under both `aba_dcs_ex_ac_uk.txt` (his Exeter PhD email, top 8.57%) and `adam_cypherspace_org.txt` (his cypherspace.org address, top 7.87%) is one visible case of the multi-alias problem; there are presumably many invisible ones in the corpus.
3. **Subject-matter overlap dominates individual style.** Candidates who wrote on cryptography topics in 1990s English are confounded with each other. The 5 named candidates clustering between 0.14405 and 0.14428 — within 0.74σ of each other — is the same finding Cafiero reached at the smaller-pool level (Adam Back and Hal Finney "near tie") and that Carreyrou's commissioned reviewer described as "inconclusive."
4. **All of the above, compounded.** The four problems multiply: a metric that surfaces noise, attribution that is partly aliased and partly anonymized, subject-matter that washes out individual style, and a corpus where the named candidates can't be cleanly separated from the noise tail. No one of these alone is fatal; together they make a confident leader-naming irresponsible.

**What the chunk-weighted ranking does and does not show:**

It *does* show that the named candidates are stylometrically meaningful: all five rank in the top quarter of 12,739 mailing-list-active authors, four of five in the top 10%, and Nick Szabo at top 4.67% leads the named group — consistent with Skye Grey 2013 and Aston 2014. It also shows that Adam Back is not a unique near-match (Hal Finney and Szabo are both closer in this aggregate), which is consistent with Cafiero's "inconclusive" qualifier on the NYT investigation result.

It *does not* show that any named candidate is the leading author of Satoshi's writing. The 594 unnamed authors closer than Szabo on this metric — even after the obvious noise-tail removal — represent the structural ceiling on what stylometric attribution can claim from this corpus. Van Dorst's silence on names is therefore the data-honest position: the underlying numerical comparisons separate the named candidates from random users, but they do not separate the named candidates from each other or from the noise floor cleanly enough to justify a single attribution.

For the analytical treatment of stylometric methods in Satoshi identification, see the relevant identity-hypothesis entries: [Nick Szabo](/BitcoinArchive/entries/analysis/2013-12-05-szabo-satoshi-identity-hypothesis/), [Adam Back](/BitcoinArchive/entries/analysis/2026-04-08-adam-back-satoshi-identity-hypothesis/), and the [identity-hypotheses overview](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/).
