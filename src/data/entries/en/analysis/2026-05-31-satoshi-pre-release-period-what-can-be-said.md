---
title: "Satoshi's pre-release period — what we can and cannot say"
date: 2026-05-31T00:00:00Z
type: "analysis"
source: "bitcoin-institute"
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014863.html"
author: "Bitcoin Institute"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Three tiers of pre-release period claims: what Satoshi himself said (direct), what is inferred from those statements (mid-2007 start, January 2009 end), what stays open. Canonical source."
isSatoshi: false
tags:
  - "satoshi-identity"
  - "pre-release-period"
  - "self-statements"
  - "evidence-tiering"
  - "analysis"
secondarySources:
  - name: "Satoshi Nakamoto Institute — cryptography mailing list (2008-11-17)"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/15/"
  - name: "Satoshi Nakamoto Institute — Satoshi to Hal Finney (2008-11-10)"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/14/"
  - name: "Martti Malmi's published email archive"
    url: "https://mmalmi.github.io/satoshi/"
relatedEntries:
  - analysis/2008-08-20-satoshi-self-statements
  - analysis/2008-10-31-cypherpunk-independent-arrival
  - analysis/2008-10-31-bitcoin-design-lineage
  - analysis/2008-10-31-satoshi-identity-hypotheses-overview
  - analysis/2008-10-31-satoshi-anonymity-architecture
  - analysis/2009-01-09-satoshi-windows-development-environment
  - analysis/2009-01-09-satoshi-code-analysis
  - analysis/2009-01-09-satoshi-distribution-and-tooling-anomalies
  - analysis/2009-01-03-genesis-block-hardcode-analysis
  - emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-10-re-bitcoin-p2p-e-cash-paper-satoshi-finney
  - emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-17-bitcoin-p2p-e-cash-paper
  - correspondence/martti-malmi/2009-07-21-bitcoin-024
  - correspondence/adam-back/2008-08-20-satoshi-to-adam-back-hashcash-citation
  - correspondence/adam-back/2008-08-21-satoshi-to-adam-back-b-money
  - correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai
  - aftermath/2020-07-20-whale-alert-satoshi-fortune
inlineLinkKeywords:
  - "pre-release period"
  - "what we can and cannot say"
translationStatus: complete
---

Across the Bitcoin Archive, dozens of analysis, biography, and forum entries reach back to the same eighteen-month stretch — from roughly mid-2007 through the v0.1 release on January 9, 2009 — during which Satoshi designed and built Bitcoin in private. The references compound: identity-hypothesis pages cite "the pre-release period" to score candidates, design-lineage analyses cite it to bound what Satoshi could have known, forensic environment analyses cite it to anchor Windows-only tooling claims. But the claims that have piled up around this window are not all of the same kind. Some come straight from Satoshi's own mouth. Some are reasonable inferences from what he said. Some are reinforced by independent forensic evidence. And some have been quietly extrapolated past what any of those sources actually establish.

This entry separates those tiers. It is the canonical reference for how the Archive talks about Satoshi's pre-release period: what is *direct* (Satoshi's own words), what is *inferred* (reasonably derivable, but a derivation — not a fact), what is *forensically corroborated* (independent evidence reinforcing inferred claims), and what is *open* (under-determined by the public record, and therefore not to be written as fact anywhere in the Archive).

The companion [Satoshi self-statements inventory](/BitcoinArchive/entries/analysis/2008-08-20-satoshi-self-statements/) collects every Satoshi self-reference; the [cypherpunk-independent-arrival analysis](/BitcoinArchive/entries/analysis/2008-10-31-cypherpunk-independent-arrival/) reads the pre-release period against the cypherpunk technical lineage; the [Bitcoin design lineage analysis](/BitcoinArchive/entries/analysis/2008-10-31-bitcoin-design-lineage/) bounds what the system actually inherited from prior art. This entry sits one layer above those: it polices the evidence-tier that any pre-release period claim made anywhere in the Archive should declare.

## 1. Why this entry is necessary

The Archive's pre-release period mentions accumulated across many entries, written at different times by different hands. A 2026-05 audit of every mention surfaced five distinct editorial drift patterns:

- **Period labels with wrong arithmetic**: "18-month development period (mid-2007 to August 2008)" appeared in multiple pages. The 18 months actually runs to v0.1 release in January 2009 — mid-2007 to August 2008 is roughly fourteen months.
- **Quote paraphrasing in `<!-- speaker: -->` blockquotes**: Satoshi's verbatim "worked through all those little details over the last year and a half" appeared as "worked through every detail in the last year and a half."
- **Recipient misattribution**: the "year and a half while coding it" quote (from the November 17, 2008 cryptography mailing list reply to James A. Donald) was attributed to "an August 2008 email to Adam Back"; the "break from it after 18 months" quote (from the July 21, 2009 email to Martti Malmi) was attributed to a Mike Hearn email.
- **Terminology overload**: the term "development period" was used both for the broad 18-month span and for the narrower "implementation phase" (mid-2007 to August 2008, when Satoshi first emailed Adam Back) without disambiguation.
- **Editorial-inference labelled as direct fact**: phrasings like "Satoshi started in early 2007" appeared in contexts that imply primary-source backing, but the underlying statement only supports "around mid-2007" through backward-counting from a 2008-11-17 self-reference.

All five had a common root: the Archive lacked a single place that drew an explicit line between *what Satoshi said* and *what we infer from what Satoshi said*. This entry draws that line.

## 2. Tier 1 — Direct (what Satoshi himself stated)

Five primary-source statements bound the pre-release period. Each is quoted verbatim with its source. Anything not on this list is not a Tier 1 claim and must not be written as a direct fact about Satoshi's pre-release period anywhere in the Archive.

| # | Date | Recipient / venue | Verbatim quote | What it directly establishes |
|---|---|---|---|---|
| D1 | 2008-08-20 | → [Adam Back](/BitcoinArchive/entries/correspondence/adam-back/2008-08-20-satoshi-to-adam-back-hashcash-citation/) | "I'm getting ready to release a paper that expands on your ideas into a complete working system" | Implementation substantially complete by Aug 2008; paper preparation underway; draft (`ecash.pdf`) attached |
| D2 | 2008-08-21 | → [Adam Back](/BitcoinArchive/entries/correspondence/adam-back/2008-08-21-satoshi-to-adam-back-b-money/) | "Thanks, I wasn't aware of the b-money page, but my ideas start from exactly that point" | Knew Hashcash (D1), did not know b-money until referred (Aug 21, 2008) |
| D3 | 2008-11-10 | → [Hal Finney](/BitcoinArchive/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-10-re-bitcoin-p2p-e-cash-paper-satoshi-finney/) | "I actually did this kind of backwards. I had to write all the code before I could convince myself that I could solve every problem, then I wrote the paper." | Work order: code first, paper second |
| D4 | 2008-11-17 | [cryptography mailing list](/BitcoinArchive/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-17-bitcoin-p2p-e-cash-paper/) (reply to James A. Donald) | "I believe I've worked through all those little details over the last year and a half while coding it, and there were a lot of them." | Cumulative coding time as of Nov 17, 2008: "a year and a half" |
| D5 | 2009-07-21 | → [Martti Malmi](/BitcoinArchive/entries/correspondence/martti-malmi/2009-07-21-bitcoin-024/) | "need a break from it after 18 months development" | Cumulative development time as of Jul 21, 2009: "18 months" |

What Tier 1 does *not* contain: a calendar start date, a calendar end date, a motivation, a team-vs-solo claim, a geographic location, a prior-reading inventory. Anything along those lines is Tier 2 (inferred), Tier 3 (corroborated), or Tier 4 (open).

## 3. Tier 2 — Inferred (reasonably derivable from Tier 1, but inference)

Inferred claims follow from Tier 1 by a derivation that the Archive considers conservative. They are not "facts about Satoshi" — they are "consequences of what Satoshi said, under conservative reading."

| # | Inferred claim | Derivation | Limit |
|---|---|---|---|
| I1 | Coding started around mid-2007 | D4 stated Nov 17, 2008 minus "a year and a half" ≈ May 2007; "mid-2007" is the conservative rounding | The phrase "year and a half" is itself rounded — the true start may be in any month of 2007. "Mid-2007" is the canonical rounding the Archive uses |
| I2 | The 18-month coding span ends around the v0.1 release (January 9, 2009) | D4 (1.5 years as of Nov 2008) and D5 (18 months as of Jul 2009) are consistent if both refer to the *same* 18-month coding period whose endpoint is v0.1 release; the alternative reading (each statement counts back from its own utterance date) yields incompatible start dates 8 months apart | An alternative reading exists: D5 might mean "18 months of development *up to now*" rather than "the 18-month coding period ended around release." The Archive prefers the consistent-interval reading because it reconciles both statements |
| I3 | Implementation work was substantially complete by August 2008 | D1 announced paper preparation and attached the draft; D2 added b-money citation only after this point | "Substantially complete" excludes the ongoing refinement Satoshi continued through Nov 2008 (cryptography ML thread) and into v0.1.x patches after release |
| I4 | The order "code first, paper second" reflects a deliberate methodology, not an accident | D3 frames it as "I actually did this kind of backwards" — Satoshi's own framing as a choice, not a circumstance | The *motivation* Satoshi gave is only "I had to write all the code before I could convince myself that I could solve every problem." Any further motivation is Tier 4 (open) |
| I5 | Satoshi was not visibly active in the cypherpunk technical community before mid-2007 | D2 (b-money unawareness) combined with Wei Dai's 2014 identifiability argument | Argues against *visible* participation; says nothing about passive readership (see [cypherpunk-independent-arrival §4 Tier 3](/BitcoinArchive/entries/analysis/2008-10-31-cypherpunk-independent-arrival/)) |

When writing pre-release period claims in any Archive entry, Tier 2 claims must be hedged. Write "Satoshi's coding started around mid-2007 (inferred from his own 'year and a half' statement)" — not "Satoshi started coding in May 2007."

## 4. Tier 3 — Forensically corroborated (independent evidence reinforcing inferred claims)

Tier 3 is not stronger than Tier 1 — it is independent evidence that Tier 2 inferences are consistent with the forensic record. Tier 3 cannot override Tier 1; it can only corroborate or weaken Tier 2.

| # | Corroborating evidence | Reinforces | Source |
|---|---|---|---|
| F1 | Windows-only development environment across the entire 2007–2009 window (no Linux trace in Phase 1) | I1, I2 (single-developer, single-environment 18-month span) | [satoshi-windows-development-environment](/BitcoinArchive/entries/analysis/2009-01-09-satoshi-windows-development-environment/) |
| F2 | v0.1 codebase = ~19,901 lines of C++ implementing an integrated novel system | D3 ("write all the code") + I3 (substantially complete by August 2008) | [satoshi-code-analysis](/BitcoinArchive/entries/analysis/2009-01-09-satoshi-code-analysis/) |
| F3 | Genesis block hardcoded January 3, 2009; block 1 mined January 9 (5-day gap) | I2 (release-time period endpoint), I3 (Aug 2008 substantially complete, Jan 2009 release-ready) | [genesis-block-hardcode-analysis](/BitcoinArchive/entries/analysis/2009-01-03-genesis-block-hardcode-analysis/) |
| F4 | Patoshi mining pattern shows steady defensive hashrate (~60% of network) from January 2009 onward, intentionally throttling as others joined | D3 + I4 (deliberate methodology extended to operational phase, network-protection over personal gain) | [whale-alert-satoshi-fortune](/BitcoinArchive/entries/aftermath/2020-07-20-whale-alert-satoshi-fortune/) |
| F5 | Distribution conventions (`.rar` archive, no installer, Windows-consumer-familiar packaging) and tooling anomalies (Hungarian notation, Visual C++ 6.0, MinGW PGP footer) | I1 (single developer working in a consistent environment) | [satoshi-distribution-and-tooling-anomalies](/BitcoinArchive/entries/analysis/2009-01-09-satoshi-distribution-and-tooling-anomalies/) |

These corroborations make the canonical timeline ("mid-2007 to v0.1 release in January 2009, implementation work substantially complete by August 2008") the most parsimonious reading. They do not make it a Tier 1 fact.

## 5. Tier 4 — Open (under-determined by the public record)

Tier 4 items must never be written as Archive facts. They may be discussed as open questions, hypothesis territory, or speculation explicitly labelled as such.

| Open item | What is unknown |
|---|---|
| Specific start date | "Mid-2007" is a conservative rounding; the exact month is not in the public record |
| Length of any pre-coding design / ideation period | Satoshi's "year and a half while coding it" bounds the coding period; whether design work began earlier (and how much earlier) is not stated |
| Single developer vs collaborative effort | First-person pronouns in correspondence are consistent with single authorship but do not establish it; co-authoring or background help cannot be ruled out from primary sources alone |
| Geographic location | British-English-leaning prose and timezone analysis weigh against the Japan claim on the P2P Foundation profile, but no positive country identification is supported |
| Native language | Commonwealth English style suggests non-native-Japanese; no positive native-language identification is supported |
| Personal motivation beyond anti-trust framing | The whitepaper's "instead of trust" framing is the most explicit motivation in the public record; any narrower motivation (libertarian, Austrian-economics, anti-bailout, etc.) is interpretation |
| Whether Satoshi read cypherpunk material passively | D2 (b-money unawareness) bounds *visible* participation; passive readership of manifestos, mailing-list archives, or related literature is neither established nor refuted |
| Identity | The Archive's identity-hypothesis entries treat this in detail; this entry takes no position |

## 6. Canonical wording for Archive entries

Any Archive entry referring to Satoshi's pre-release period must use these conventions. Future audits will check against this section.

| Claim | Canonical wording | Anti-pattern to avoid |
|---|---|---|
| 18-month span | "18 months (mid-2007 to the v0.1 release in January 2009)" | "18 months (mid-2007 to August 2008)" — that span is ~14 months |
| Implementation phase | "implementation work (mid-2007 to August 2008)" with explicit "implementation" qualifier | "development period (mid-2007 to August 2008)" — clashes with the 18-month span sense |
| Start anchor | "around mid-2007" / "mid-2007 onward" | "in early 2007" / "in May 2007" — precision beyond Tier 1 |
| Work order | "coded first, then wrote the paper" (echoing D3) | "wrote both in parallel" — incompatible with D3 |
| Implementation complete | "design substantially complete by August 2008" or "implementation work substantially complete by August 2008" | "Bitcoin was complete by August 2008" — operational refinement continued to v0.1 release |
| Satoshi quotes | Verbatim, e.g., "all those little details over the last year and a half" | "every detail in the last year and a half" — paraphrase |
| Source attribution for D4 | "November 17, 2008 cryptography mailing list" (reply to James A. Donald) | "August 2008 email to Adam Back" — wrong recipient and wrong venue |
| Source attribution for D5 | "July 21, 2009 email to Martti Malmi" | "Mike Hearn email" — wrong recipient |
| 18-month period in identity-hypothesis pages | "the 18-month intensive development window from mid-2007 through the v0.1 release in January 2009 (implementation work substantially complete by August 2008)" | "from mid-2007 through August 2008" with "18-month" label |

When an entry needs to talk about the pre-disclosure period only (mid-2007 to August 2008), the explicit qualifier "implementation phase" or "pre-disclosure implementation phase" disambiguates it from the broader 18-month span.

## 7. Limits and the position of this entry

- This entry reflects the 2026-05 audit of the Archive's pre-release period mentions. New primary sources (a newly disclosed Satoshi email, a forensic finding from re-analysis of v0.1.x source) could move items between tiers and would require updating §2–§4.
- The §6 canonical-wording table is an internal Archive consistency rule. It does not constrain how external articles, books, or other media phrase the same period — and it does not claim the Archive's reading is the only defensible reading. It claims only that the Archive will use one wording for one claim, so that readers can rely on the same anchors across entries.
- This entry does not narrow Satoshi's identity. The identity question is the scope of the [identity-hypotheses overview](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/) and individual candidate entries. What this entry establishes is the *evidence tier* for any claim about *what happened* in the pre-release period — not *who* did it.
- The four-tier structure is not the only way to organize the evidence. A different reader might consolidate Tiers 2 and 3, or split Tier 2 into "arithmetic" and "interpretive" inferences. The four tiers used here were chosen because they correspond cleanly to four different verification paths the Archive can run.

## 8. Summary

- Satoshi made five direct self-statements about the pre-release period (D1–D5 in §2). Each is verbatim, dated, and tied to a specific recipient or venue. These are the only Tier 1 facts.
- Five conservative inferences (I1–I5 in §3) follow from Tier 1 — mid-2007 start, January 2009 endpoint of the 18-month span, August 2008 substantial-completion of implementation work, deliberate "code first" methodology, no visible cypherpunk-community participation pre-2008. Each must be hedged when written, not stated as fact.
- Five independent forensic corroborations (F1–F5 in §4) reinforce the Tier 2 inferences without elevating them. The forensic record is consistent with the canonical timeline; it does not prove it.
- Eight categories of claim (§5) are *open* in the public record — start date precision, pre-coding ideation length, solo-vs-team, location, native language, narrow motivation, passive readership, identity. These must not be written as Archive facts anywhere.
- The §6 canonical-wording table gives Archive authors specific phrasings to use and specific anti-patterns to avoid. This entry serves as the source of truth for future entries that reach back to the pre-release period.
