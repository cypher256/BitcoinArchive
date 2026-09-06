---
title: "Was Satoshi Nakamoto Actually Japanese? The Profile, the Language, and the Clock"
date: 2008-10-31T00:00:00Z
type: "analysis"
source: "p2pfoundation"
sourceUrl: "https://web.archive.org/web/20151225125440/http://p2pfoundation.ning.com/profile/SatoshiNakamoto"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Isamu Kaneko"
    slug: "isamu-kaneko"
  - name: "Dorian Nakamoto"
    slug: "dorian-nakamoto"
description: "The only place Satoshi claimed a nationality was one unverifiable profile. Language, timestamps, and the one Japanese-named candidate all read against that claim — and against each other."
isSatoshi: false
tags:
  - "satoshi-identity"
  - "satoshi-nationality"
  - "timestamp"
  - "linguistic-analysis"
secondarySources:
  - name: "Chain Bulletin — Satoshi Nakamoto lived in London (November 23, 2020)"
    url: "https://chainbulletin.com/satoshi-nakamoto-lived-in-london-while-working-on-bitcoin-heres-how-we-know"
  - name: "Winny opening announcement — 2channel thread archive (Mr. 47)"
    url: "https://winny.info/2ch/47.html"
  - name: "Newsweek — The Face Behind Bitcoin (March 6, 2014)"
    url: "https://www.newsweek.com/2014/03/14/face-behind-bitcoin-247957.html"
  - name: "Decrypt — Finding Satoshi documentary coverage (April 22, 2026)"
    url: "https://decrypt.co/365075"
relatedEntries:
  - analysis/2026-08-29-satoshi-bitcoin-reading-guide
  - analysis/2008-10-31-satoshi-name-techno-orientalism
  - aftermath/2008-10-31-satoshi-nakamoto-biography
  - analysis/2008-08-20-satoshi-self-statements
  - analysis/2008-10-31-satoshi-identity-hypotheses-overview
  - aftermath/2020-11-23-chain-bulletin-satoshi-london-hypothesis
  - analysis/2009-01-09-satoshi-code-analysis
  - analysis/2013-07-06-kaneko-isamu-satoshi-identity-hypothesis
  - analysis/2014-03-06-dorian-nakamoto-satoshi-identity-hypothesis
  - aftermath/2026-04-22-finding-satoshi-finney-sassaman-documentary
inlineLinkKeywords:
  - "Satoshi's actual nationality"
  - "was Satoshi Japanese"
---

![A dark navy illustration of a torn profile card reading "Japanese, Japan, 1975" beside three clock faces set to different hours, each ringed in a different color, with a faint silhouette map showing no fixed location.](/BitcoinArchive/images/analysis/2008-10-31-satoshi-nationality-question-hero.png)

*New to the identity question? Start with [who Satoshi might be](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/), then come back here for the narrower question of nationality alone.*

One line in one unverifiable profile is the entire documentary basis for calling Satoshi Nakamoto Japanese. Everything else in the record — the language, the clock, the one candidate who actually is Japanese — has to be checked against that single claim, and the three checks do not agree with each other either.

## 1. The only self-claim

The P2P Foundation profile lists three identity fields: "Japanese," "Japan," and a birth date of April 5, 1975. No other document in thirty-two months of correspondence, forum posts, and code repeats any of the three. The [self-references inventory](/BitcoinArchive/entries/analysis/2008-08-20-satoshi-self-statements/) catalogues every place Satoshi was the subject of his own sentence and finds the same result: these fields are "stated identity material," sourced from the profile alone, and are separately listed among what Satoshi's own statements do *not* establish. The [biography](/BitcoinArchive/participants/satoshi-nakamoto/) records the same profile as "unverified and widely considered fictitious."

Fictitious does not mean meaningless. The profile is still the only place Satoshi ever put a number on his own age or a name on his own country. Every other reading in this entry exists because that one claim invites checking.

## 2. Four separate questions, not one

"Was Satoshi Japanese" collapses four different questions that the record answers separately:

- **Nationality** — what passport, if any, the profile's claim would correspond to. Unrecoverable; there is no independent document that could confirm or deny it.
- **Native language** — what language Satoshi thought in. Approachable through the English prose itself.
- **Activity region** — where Satoshi was physically posting and committing from, hour by hour. Approachable through timestamp analysis.
- **Candidate fit** — whether any specific named, actually-Japanese person matches the rest of the record. Approachable through the one candidate who qualifies.

None of the four is the same evidence. A record that argues against one does not automatically argue against the others, and the sections below keep them apart on purpose.

## 3. The language

Satoshi's English is not what a Japanese-educated writer's English typically reads like. The [biography](/BitcoinArchive/participants/satoshi-nakamoto/) records "fluent English with conventions consistent with British or Commonwealth usage." [Chain Bulletin's 2020 analysis](/BitcoinArchive/entries/aftermath/2020-11-23-chain-bulletin-satoshi-london-hypothesis/) is more specific: British spellings ("organise," "colour," "neighbour") and the British colloquialism "bloody," read alongside 742 activity instances, as evidence for London.

This settles the native-language question in one direction only: nothing in the documented prose carries a Japanese-substrate trace — the word-order slips, article and preposition patterns, and translated-concept phrasing that mark English written by a Japanese-L1 writer working in a second language. Thirty-two months of forum posts, mailing-list arguments, private correspondence, and release notes never show it once, across registers that range from academic to casual to terse. That is a large, consistent absence, not a single data point.

## 4. The clock — and its own disagreement

Two archive analyses independently timestamp Satoshi's own activity, and they do not land in the same place.

[Chain Bulletin](/BitcoinArchive/entries/aftermath/2020-11-23-chain-bulletin-satoshi-london-hypothesis/) converted 742 BitcoinTalk posts, SourceForge commits, and mailing-list emails into three candidate zones and found a pattern consistent with GMT — London.

[This archive's own code analysis](/BitcoinArchive/entries/analysis/2009-01-09-satoshi-code-analysis/), working from 160 SVN commits between October 2009 and December 2010, found a near-total absence of commits between 06:00 and 12:00 UTC — a gap the analysis reads as consistent with EST or CST, five to six hours west of London.

Both studies read the same kind of evidence — Satoshi's own posting and commit timestamps — and reach zones that do not overlap. Neither analysis adjudicates the other; both are recorded here as they stand. A third, differently-shaped study exists: [Alyssa Blackburn's activity-window analysis](/BitcoinArchive/entries/aftermath/2026-04-22-finding-satoshi-finney-sassaman-documentary/), cited in the *Finding Satoshi* documentary, reportedly found a 6am–10pm PST window — but that window was fitted to the *combined* activity of two candidates (Hal Finney and Len Sassaman together), not to Satoshi's timestamps read on their own, and the self-statements inventory's own general finding (hours falling outside a Japan timezone) is explicitly not adjudicated against it either. It is a different kind of measurement, not a third vote in the same count.

| Study | Data analyzed | Zone found | What it actually measures |
|---|---|---|---|
| [Chain Bulletin (Karaivanov, 2020)](/BitcoinArchive/entries/aftermath/2020-11-23-chain-bulletin-satoshi-london-hypothesis/) | 742 BitcoinTalk posts, SourceForge commits, mailing-list emails | GMT | Satoshi's own timestamps |
| [This archive's code analysis](/BitcoinArchive/entries/analysis/2009-01-09-satoshi-code-analysis/) | 160 SVN commits, Oct 2009 – Dec 2010 | EST / CST | Satoshi's own timestamps |
| [Blackburn (Finding Satoshi, 2026)](/BitcoinArchive/entries/aftermath/2026-04-22-finding-satoshi-finney-sassaman-documentary/) | Combined online activity of two candidates | PST | Finney + Sassaman's *joint* activity, not Satoshi's alone |

Only the first two rows measure the same thing Satoshi's own record can answer, and they disagree. The third measures a different question entirely.

What the two directly comparable studies agree on is narrower than either headline: neither GMT nor EST/CST is a Japan-consistent zone. What they do not agree on is where, specifically, the record points instead.

## 5. The one candidate who is actually Japanese

Twelve named candidates have a dedicated entry in [the identity-hypotheses overview](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/). Exactly one, [Isamu Kaneko](/BitcoinArchive/entries/analysis/2013-07-06-kaneko-isamu-satoshi-identity-hypothesis/), is actually Japanese — a University of Tokyo researcher who built the peer-to-peer file-sharing system Winny under the handle "Mr. 47." If the profile's claim pointed anywhere, this is the one candidate it would have to survive.

It does not survive the language test. Kaneko's Winny opening announcement is preserved verbatim: a self-deprecating "暇なんで" ("I'm a bit bored…") opener, the 2channel-subculture term "2ch ネラー," and recurring sentence-final particles ("わ," "なー") — a register with deep first-language Japanese markers, sustained across his other posts. Bitcoin's v0.1 source code, by contrast, contains no Japanese in a single identifier, comment, or commit message anywhere in its history. A bilingual author could in principle write English-only code and still be a Japanese-L1 speaker; what the record actually shows is the reverse pairing from what the profile would predict — deep L1 Japanese in the one text Kaneko wrote in his own voice, and zero trace of it anywhere Satoshi wrote in his.

The timing fits Kaneko's candidacy poorly on its own terms, independent of the language question: he was a convicted defendant on appeal for the entire span of Bitcoin's development and busiest period, and re-engaged with public commercial software work after Satoshi's silence rather than withdrawing into it. The full case against the hypothesis is in [the Kaneko entry](/BitcoinArchive/entries/analysis/2013-07-06-kaneko-isamu-satoshi-identity-hypothesis/).

One other candidate carries the Japanese-sounding name by coincidence rather than heritage: [Dorian Nakamoto](/BitcoinArchive/entries/analysis/2014-03-06-dorian-nakamoto-satoshi-identity-hypothesis/), a Japanese-American engineer whose birth name was, literally, Satoshi Nakamoto. His case is the cleanest illustration that a name match answers nothing about authorship on its own: no coding record at Bitcoin's scale, no cypherpunk trace, no monetary-design history, and a firm, repeated, never-retracted denial. The name fit is exact; every other fit is absent.

## 6. What the three checks add up to

A one-line verdict here would read either "not Japanese" or "Japanese after all." The record supports neither: the profile is uncorroborated by every independent line that could have corroborated it, and the lines that argue against it do not agree with each other about what the alternative is. English register argues against a Japanese-L1 writer. Two direct timestamp studies argue for two different non-Japan zones. The one actually-Japanese candidate fails on the language test that would have had to hold for him to fit. None of this proves a specific alternative nationality — the record does not converge on London, or on the US East Coast, or on anywhere else with the same confidence it fails to converge on Japan.

That gap between "not corroborated" and "disproven" is where the record actually stands: enough independent lines fail to confirm the one claim Satoshi ever made about himself that the claim carries no more weight than the sentence it was written in, and not enough agreement among the lines that fail it to replace that sentence with a different one.

The pseudonym's Japanese *form* — why "Satoshi Nakamoto" was chosen as a name at all, independent of who was typing — is a separate question, addressed in [the techno-orientalist reading of the name](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-name-techno-orientalism/). That entry treats the symbolism on purpose without touching the nationality question; this entry treats the nationality question on purpose without touching the symbolism. Neither substitutes for the other.

<!-- entry-closing -->

The profile said Japanese once, in a field no one could check. Everything checkable since has come back either silent or pointing somewhere else — and the somewhere-elses do not point to the same somewhere.
