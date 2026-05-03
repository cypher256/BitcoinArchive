---
title: "Satoshi Nakamoto Stylometric Analysis: Per-Candidate Distance Values from van Dorst's 'Where is Satoshi?' Corpus — Bitcoin Institute Reanalysis of Adam Back, Wei Dai, Hal Finney, Nick Szabo, and Len Sassaman (May 2026)"
date: 2026-05-03T00:00:00Z
type: "analysis"
source: "github"
sourceUrl: "https://github.com/basvandorst/where-is-satoshi"
author: "Bitcoin Institute"
participants:
  - name: "Adam Back"
    slug: "adam-back"
  - name: "Wei Dai"
    slug: "wei-dai"
  - name: "Hal Finney"
    slug: "hal-finney"
  - name: "Nick Szabo"
    slug: "nick-szabo"
  - name: "Len Sassaman"
    slug: "len-sassaman"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
isSatoshi: false
description: "Original Bitcoin Institute reanalysis of the published numerical data in Bas van Dorst's April 2024 'Where is Satoshi?' open-source stylometric corpus. The author of that corpus declines to publish a candidate ranking, but the underlying data is downloadable as a 43 MB XLSX (76,407 author-source rows × 76 columns). This entry extracts Burrows' Delta and Jaccard similarity values for the five most-cited Satoshi-identity named candidates (Adam Back, Wei Dai, Hal Finney, Nick Szabo, Len Sassaman), aggregates per-author chunk-weighted across all sources, and ranks the named candidates against the 12,739 authors with at least 10 chunks of writing. Findings: all five rank in the top 25% of mailing-list-active authors, four in the top 10%, and Nick Szabo at top 4.67% leads the named-candidate group on Burrows' Delta — consistent with Skye Grey 2013 and Aston 2014. However, 594 unnamed authors rank closer than Szabo, and the corpus' top 20 closest-matched authors are dominated by Italian/Spanish e-commerce account text, anonymous remailer outputs, and disposable accounts — clearly noise rather than signal. The analysis reads van Dorst's 'I'm not 100% sure' caveat as four interacting problems (metric noise sensitivity, author-attribution accuracy, subject-matter overlap dominating individual style, all of the above compounded) and explains why the named-candidate stylometric studies (Skye Grey, Aston, Cafiero) reach different leading candidates while van Dorst's wider methodology-transparent comparison declines to name one at all."
tags:
  - "satoshi-identity"
  - "stylometric-analysis"
  - "methodology"
  - "dataset"
  - "analysis"
  - "investigation"
  - "nick-szabo"
  - "adam-back"
  - "hal-finney"
secondarySources:
  - name: "Bas van Dorst — 'Where is Satoshi?' GitHub repository (source data)"
    url: "https://github.com/basvandorst/where-is-satoshi"
    note: "Methodology, dataset, and 43 MB comparison.xlsx aggregate (76,407 author-source rows × 76 columns) used as input to this reanalysis."
relatedEntries:
  - aftermath/2024-04-13-van-dorst-where-is-satoshi-stylometric-corpus
  - aftermath/2013-12-05-techcrunch-skye-grey-szabo-stylometric
  - aftermath/2014-04-16-aston-university-szabo-stylometric-study
  - aftermath/2026-04-08-nyt-carreyrou-adam-back-satoshi-investigation
  - analysis/2013-12-05-szabo-satoshi-identity-hypothesis
  - analysis/2026-04-08-adam-back-satoshi-identity-hypothesis
  - analysis/2011-07-03-sassaman-satoshi-identity-hypothesis
  - analysis/2008-10-31-satoshi-identity-hypotheses-overview
  - analysis/2008-10-31-satoshi-identification-asymmetry
  - analysis/2008-10-31-satoshi-anonymity-architecture
inlineLinkKeywords:
  - "van Dorst per-candidate reanalysis"
  - "Bitcoin Institute reanalysis"
  - "75,000-author corpus reanalysis"
---

[Bas van Dorst's April 2024 'Where is Satoshi?' open-source stylometric corpus](/BitcoinArchive/entries/aftermath/2024-04-13-van-dorst-where-is-satoshi-stylometric-corpus/) is the largest publicly-released numerical-data resource on Satoshi-Nakamoto authorship to date — 75,000+ mailing-list authors, 70,000+ Reddit commenters, full per-author Burrows' Delta and Jaccard similarity values released as 280 MB of CSV/XLSX. The author declines to publish a candidate ranking, citing both methodological limits and personal uncertainty: *"I have a short-list of suspects. No, I'm not going to drop names here because I'm not 100% sure."*

The author's silence is editorially defensible, but it leaves an empirical question unanswered for archive readers: where do the most-cited identity-hypothesis named candidates actually fall in this 75,000-author corpus, and what does that placement imply for the named-candidate stylometric tradition (Skye Grey 2013, Aston 2014, Cafiero/Carreyrou 2026) that van Dorst is methodologically opposite to? This entry answers that question by extracting the relevant rows from van Dorst's published data and computing each named candidate's rank against the corpus.

This is an *analysis* entry, not a report on an external event. It is original Bitcoin Institute editorial work performed on van Dorst's published dataset.

## 1. Method

### 1.1 Source data

The aggregated XLSX file (`output/comparison.xlsx`, 43 MB) was downloaded from the project's GitHub repository. The file contains 76,407 rows × 76 columns. Each row is one (author, source) pair — for example, "weidai_eskimo_com.txt" appears separately for the cypherpunks-cpunks1 list, the cryptography list, the testlist-cpunks list, etc. Filename mangling: van Dorst stores email addresses as filenames with `@` and `.` replaced by `_`, so `weidai@eskimo.com` becomes `weidai_eskimo_com.txt`. The 76 columns include Burrows' Delta to Satoshi (column 10), Jaccard similarity to Satoshi (column 11), per-row chunk count (column 2), and a wide range of derived features (n-gram match counts, readability indices, punctuation patterns, pronoun frequencies, word-length distributions, hyphenation patterns, British/American spelling counts).

### 1.2 Candidate identification

Each named candidate's mailing-list email address was located by substring search against the `Rijlabels` (filename) column. The hits:

| Candidate | Author file(s) located in corpus |
|---|---|
| Adam Back | `aba_dcs_ex_ac_uk.txt` (Exeter PhD email), `adam_cypherspace_org.txt` |
| Wei Dai | `weidai_eskimo_com.txt` (well-known cypherpunk address) |
| Hal Finney | `hfinney_shell_portal_com.txt` (cypherpunk-list address) |
| Nick Szabo | `szabo_netcom_com.txt`, `szabo_techbook_com.txt` |
| Len Sassaman | `len_sassaman_esat_kuleuven_be.txt` (KU Leuven PhD), `rabbi_quickie_net.txt` (cypherpunk handle) |

Two of the five candidates appear under more than one email — a visible instance of the multi-alias problem van Dorst's README itself flags ("some authors were active under multiple names and/or mail addresses").

### 1.3 Aggregation and ranking

For each (candidate, email) combination, all matching rows were aggregated chunk-weighted across all source mailing lists to produce a single representative Burrows' Delta value per author. The corpus was filtered to authors with at least 10 chunks of total writing — the threshold below which Burrows' Delta becomes statistically noisy per the README's own guidance ("Outliers: use median/stddev instead of mean/average when aggregating"; "Last chunk: filter out the last chunk if you are going to aggregate totals"). The filtered corpus contains 12,739 authors. Each named candidate's chunk-weighted Burrows' Delta was then ranked against this 12,739-author distribution.

## 2. Per-candidate findings

### 2.1 The headline table

Burrows' Delta: lower = closer match to Satoshi's reference profile. Corpus mean = 0.14456, standard deviation = 0.00027, range = 0.14128 to 0.14617.

| Candidate | Author file | Burrows Δ | Rank | Percentile | Chunks |
|---|---|---|---|---|---|
| **Nick Szabo** | szabo_netcom_com.txt | 0.14405 | 595 / 12,739 | top **4.67%** | 130 |
| **Hal Finney** | hfinney_shell_portal_com.txt | 0.14411 | 878 / 12,739 | top **6.89%** | 1,336 |
| **Adam Back** | adam_cypherspace_org.txt | 0.14414 | 1,003 / 12,739 | top **7.87%** | 676 |
| **Adam Back** (alt email) | aba_dcs_ex_ac_uk.txt | 0.14415 | 1,092 / 12,739 | top **8.57%** | 1,474 |
| **Wei Dai** | weidai_eskimo_com.txt | 0.14428 | 2,929 / 12,739 | top 22.99% | 161 |
| **Len Sassaman** | rabbi_quickie_net.txt | 0.14428 | 3,034 / 12,739 | top 23.82% | 65 |

### 2.2 What the table establishes

All five named candidates rank in the top 25% of the 12,739-author corpus, four of five in the top 10%. The named-candidate population is therefore stylometrically meaningful: their writing is closer to Satoshi's reference profile than the average cypherpunk-era mailing-list author. The Burrows' Delta values for the five candidates lie between 0.14405 (Szabo) and 0.14428 (Wei Dai / Sassaman) — a spread of 0.00023, which is 0.85 standard deviations of the corpus distribution.

### 2.3 Relation to the named-candidate stylometric studies

[Nick Szabo](/BitcoinArchive/participants/nick-szabo/) leads the named group at top 4.67% — consistent with the conclusions of [Skye Grey's December 2013 LikeInAMirror investigation](/BitcoinArchive/entries/aftermath/2013-12-05-techcrunch-skye-grey-szabo-stylometric/) and the [April 2014 Aston University 'Project Bitcoin' study](/BitcoinArchive/entries/aftermath/2014-04-16-aston-university-szabo-stylometric-study/), both of which named Szabo as the closest match. [Hal Finney](/BitcoinArchive/participants/hal-finney/) (6.89%) and [Adam Back](/BitcoinArchive/participants/adam-back/) (7.87%) follow closely. The proximity of Hal Finney to Adam Back in this aggregate is consistent with Florian Cafiero's "near tie" qualifier on his commissioned 12-candidate review for the [2026 Carreyrou NYT investigation](/BitcoinArchive/entries/aftermath/2026-04-08-nyt-carreyrou-adam-back-satoshi-investigation/), which named Adam Back as the leading candidate but described the result as inconclusive.

The analysis confirms that the named-candidate studies are not finding noise: the same five candidates are stylometrically meaningful in the wider 75,000-author corpus too. But the analysis also confirms that the differences between the named candidates are small enough that the leading candidate is not robustly determined by the metric alone — which is why the four named-candidate studies disagree on who leads.

## 3. Top of the corpus: noise rather than signal

A finding that does not appear in any of the named-candidate stylometric studies, and that becomes visible only when the candidate pool is the whole 75,000-author corpus rather than a small pre-selected subset:

**The 20 authors closest to Satoshi by aggregate Burrows' Delta are not stylometric "matches" in any meaningful sense — they are corpus noise.**

The top 20 includes:

- **Italian and Spanish e-commerce / utility account text:** `verba_rol_it`, `info_giganetstore_com`, `apoio_giganetstore_com`, `gianluigi_euro_net`. The distance metric drops because these accounts have low common-word overlap with Satoshi's reference profile rather than genuine style match.
- **Anonymous remailer outputs:** `an250888_anon_penet_fi`, `cypherpunks_alqaeda_net`, `nobody_squirrel_owl_de`, `anonremailer_utopia_hacktic_nl`, `anonymous_freezone_remailer`. Authorship attribution to a single human is nominal at best — these rows commingle traffic from many people who routed through the same remailer.
- **Disposable account text:** `dxnew2001_yahoo_com`, `pro2rat_yahoo_com_au`, `ramonbitcoin`. Short-text accounts whose limited vocabulary happens to align with Satoshi's reference by chance.
- **Miscellaneous unknown writers:** `skaplin_c2_org`, `p_txt_toad_com`, `199604290755_jaa15922_utopia_hacktic_nl`, `hahn_lds_loral_com`, `sion_cs_sunysb_edu`, `kevin_gaec_com`, `insightonthenews_broadbandpublisher_com`, `oa_acm_org`. Writers with no documented presence in the Satoshi-attribution discourse and no plausible route to authorship of the Bitcoin whitepaper.

None of the top 20 — and none of the top several hundred — is a named identity-hypothesis candidate. The named candidates begin appearing only at rank 595 (Szabo).

The implication is methodologically important: **the Burrows' Delta metric, applied to this corpus without further filtering, produces an unreliable ranking at the very top.** The "winner" of an unfiltered comparison is dominated by structural artifacts of the corpus (short-text accounts, remailer relay text, language-mismatched commerce-site text) rather than genuine authorial similarity to Satoshi. The smaller-pool studies (Skye Grey, Aston, Cafiero) avoid this problem only by pre-filtering to a candidate set chosen on subject-matter grounds — which introduces the confounding-by-subject problem that David Gerard, Cafiero, and other critics have flagged.

## 4. Reading van Dorst's "I'm not 100% sure" caveat

Van Dorst's published explanation for declining to name a leader — *"I have a short-list of suspects. No, I'm not going to drop names here because I'm not 100% sure"* — admits at least four readings, each corroborated by the data above. They are not mutually exclusive; the evidence supports all four operating at once.

### 4.1 Metric noise sensitivity

Burrows' Delta on its own ranks e-commerce and remailer accounts above all named candidates. Any "winner" produced by the metric on this corpus is unreliable until additional filtering (subject matter, era, author identification quality) is applied. The named-candidate studies (Skye Grey, Aston, Cafiero) do exactly this filtering — and the filtering itself is what produces the contested results, since different filtering rules produce different winners.

### 4.2 Author-attribution accuracy

The README itself flags two structural problems with attribution:

1. *"Some authors were active under multiple names and/or mail addresses and/or used remailer services (to post anonymously)."* In our extraction Adam Back appears as both `aba_dcs_ex_ac_uk.txt` (top 8.57%) and `adam_cypherspace_org.txt` (top 7.87%). Two of his rows have been identified, presumably the same person. How many invisible aliasings exist for other authors, including potentially candidates not in our named-candidate list? Unknown.
2. *"No guarantee that texts fully belong to the author"* (mail-thread reply extraction). Quoted text from earlier replies is hard to strip cleanly. Some chunks attributed to author X may contain language that author Y wrote in a previous message X is replying to.

Both problems lossy-aggregate the per-author distance values, in directions the methodology cannot correct.

### 4.3 Subject-matter overlap dominates individual style

The named candidates cluster within 0.85 standard deviations of each other (0.14405 to 0.14428). This is the same finding Florian Cafiero reached at the smaller-pool level — Adam Back and Hal Finney "near tie" in his 12-candidate review — and that Carreyrou's commissioned reviewer described as "inconclusive." Authors who wrote on cryptography topics in 1990s English share enough vocabulary, sentence structures, and reference frames with each other that the metric cannot separate them robustly. The metric is measuring the cypherpunk-cryptography-1990s discourse community, not individual-author style.

### 4.4 All of the above, compounded

The four problems multiply rather than add:

- A metric that surfaces noise to the top of the unfiltered ranking.
- Attribution that is partly aliased and partly anonymized within the corpus.
- Subject-matter overlap that washes out individual style differences.
- A corpus where the named candidates cannot be cleanly separated from the noise tail (594 unnamed authors closer than Szabo) or from each other (0.85σ cluster).

No one of these problems alone is fatal to stylometric attribution, but together they make confident leader-naming irresponsible. Van Dorst's published refusal to name a candidate is therefore the data-honest position — not the failure of the analysis, but its empirical conclusion.

## 5. What the chunk-weighted ranking does and does not show

It *does* show:

- The named identity-hypothesis candidates are stylometrically meaningful: all five rank in the top quarter of 12,739 mailing-list-active authors, four in the top 10%.
- Nick Szabo leads the named-candidate group on Burrows' Delta in this larger corpus (top 4.67%), consistent with the conclusions of Skye Grey 2013 and Aston 2014.
- The relative ordering of named candidates (Szabo > Hal Finney > Adam Back > Wei Dai ≈ Sassaman) is small enough — 0.85 standard deviations from leader to laggard — that no single candidate is clearly separable from the others.
- The smaller-pool studies that did name leaders (Skye Grey for Szabo, Aston for Szabo, Cafiero/Carreyrou for Adam Back) are working within the upper tail of this larger distribution, not finding outliers; their disagreement is a function of how the upper tail is sub-selected.

It *does not* show:

- That any named candidate is the leading author of Satoshi's writing. The 594 unnamed authors closer than Szabo on Burrows' Delta — even after the obvious noise-tail removal — represent a structural ceiling on what stylometric attribution can claim from this corpus.
- That van Dorst's private short-list (which he declines to publish) consists of the named candidates rather than someone unknown. The data is consistent with both possibilities.
- That a different metric (e.g., Jaccard similarity, hyphenation pattern matching, double-spacing-after-period as Carreyrou highlighted) would not reorder the named candidates. Stylometric attribution is method-dependent in ways this aggregate Burrows' Delta ranking cannot resolve.

## 6. Limits of this reanalysis

- The reanalysis aggregates van Dorst's per-row data in one specific way (chunk-weighted mean across all sources, filtered to authors with at least 10 chunks). Other aggregation choices — median, source-stratified, weighted by chunk-quality — would produce slightly different rankings. The numerical findings are stable but not unique.
- Author identification by email-substring matching may miss writers who participated under handles that do not include their public-facing names. If, for example, Satoshi himself (or any candidate) participated in the cypherpunks list under an unrecorded pseudonym in 1992–2000, that activity is not captured here.
- The named-candidate list is the same five candidates that recur across the cited stylometric studies. Other widely-discussed identity-hypothesis candidates (Dorian Nakamoto, Craig Wright, Paul Le Roux, Peter Todd, Isamu Kaneko) are not analyzed here because they were not active in the 1992–2000 cryptography mailing-list community that van Dorst's mailing-list corpus covers.
- The Burrows' Delta values reported are aggregates across all sources where the author appeared. Source-stratified analysis (Adam Back's distance to Satoshi *only* on the cryptography list versus *only* on cypherpunks-cpunks1, for example) would expose additional structure that is averaged away here.

For the analytical treatment of stylometric methods in Satoshi identification, see the relevant identity-hypothesis entries: [Nick Szabo](/BitcoinArchive/entries/analysis/2013-12-05-szabo-satoshi-identity-hypothesis/), [Adam Back](/BitcoinArchive/entries/analysis/2026-04-08-adam-back-satoshi-identity-hypothesis/), [Len Sassaman](/BitcoinArchive/entries/analysis/2011-07-03-sassaman-satoshi-identity-hypothesis/), and the [identity-hypotheses overview](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/).
