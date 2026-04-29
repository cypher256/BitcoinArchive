---
title: "The Peter Todd = Satoshi identity hypothesis"
date: 2024-10-08T00:00:00Z
type: "analysis"
source: "hbo"
sourceUrl: "https://www.hbo.com/movies/money-electric-the-bitcoin-mystery"
author: "Bitcoin Institute"
participants:
  - name: "Peter Todd"
    slug: "peter-todd"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Documentation of the Peter Todd = Satoshi Nakamoto identity hypothesis, articulated in HBO's 2024 documentary 'Money Electric: The Bitcoin Mystery' (Cullen Hoback, October 8, 2024). The hypothesis rests on a December 2010 BitcoinTalk thread where Todd's reply appeared to complete a partially-edited Satoshi post, the connection between that exchange and Todd's later RBF / BIP 125 work, a notable shift in Todd's writing style across three periods, and a gap in Todd's documented development activity overlapping with Satoshi's active period. The counter-evidence — Todd's age (22 in mid-2007), OCAD University fine arts degree program at the time of Bitcoin's design, no documented cypherpunk-mailing-list presence pre-2012, public self-denial, and broad technical-community critique of the documentary's evidence as circumstantial — is set out at the same level of detail."
isSatoshi: false
tags:
  - "satoshi-identity"
  - "peter-todd"
  - "analysis"
  - "disputed"
secondarySources:
  - name: "Wikipedia — Money Electric: The Bitcoin Mystery"
    url: "https://en.wikipedia.org/wiki/Money_Electric:_The_Bitcoin_Mystery"
  - name: "CoinDesk — Peter Todd Denies He's Satoshi Hours Before HBO Documentary Airs"
    url: "https://www.coindesk.com/business/2024/10/08/former-bitcoin-dev-peter-todd-denies-hes-satoshi-hours-before-hbo-documentary-airs"
  - name: "Bitcoin Magazine — Money Electric Is An Insult To Bitcoin"
    url: "https://bitcoinmagazine.com/culture/money-electric-insult-bitcoin-cynical-stupid-dangerous"
  - name: "Cointelegraph — Everything HBO's Bitcoin doc got wrong about Peter Todd and Satoshi"
    url: "https://cointelegraph.com/news/hbo-documentary-peter-todd-satoshi-nakamoto"
relatedEntries:
  - aftermath/2024-10-08-hbo-money-electric-peter-todd
  - aftermath/2010-12-07-peter-todd-biography
  - aftermath/2010-12-07-retep-diaspora-invite-first-post
  - aftermath/2015-12-04-peter-todd-bip-125-replace-by-fee
  - analysis/2008-10-31-satoshi-identity-hypotheses-overview
  - analysis/2011-07-03-sassaman-satoshi-identity-hypothesis
  - analysis/2013-07-06-kaneko-isamu-satoshi-identity-hypothesis
inlineLinkKeywords:
  - "Todd hypothesis"
  - "Todd = Satoshi"
  - "Todd = Satoshi hypothesis"
  - "Peter Todd hypothesis"
---

This entry documents the [Peter Todd](/BitcoinArchive/participants/peter-todd/) = Satoshi Nakamoto identity hypothesis, articulated in HBO's 2024 documentary [*Money Electric: The Bitcoin Mystery*](/BitcoinArchive/entries/aftermath/2024-10-08-hbo-money-electric-peter-todd/) (directed by Cullen Hoback, released October 8, 2024). The claim is laid out, the supporting arguments are described as the documentary made them, and the counter-evidence is set out at the same level of detail. The reader is left to weigh.

## 1. What the hypothesis claims

The hypothesis is that Todd authored Bitcoin under the Satoshi Nakamoto pseudonym, that his publicly-stated start of Bitcoin work in 2014 misrepresents an earlier involvement, and that the December 2010 BitcoinTalk thread cited by the documentary captures a moment of accidental same-author scaffolding.

The earliest public articulation of the hypothesis identified in this archive's research is the HBO documentary itself (October 8, 2024). The documentary attracted broad press coverage and was rejected by both the Bitcoin technical community and mainstream reviewers within days of release.

## 2. The arguments the hypothesis rests on

### 2.1 The December 2010 BitcoinTalk thread

The documentary's central piece of evidence is a December 2010 exchange on [BitcoinTalk](/BitcoinArchive/entries/forum/bitcointalk/topic-2181/2010-12-10-retep-re-fees-in-bitdns-confusion/). Satoshi described a transaction-replacement mechanism — what would later be formalized as Replace-by-Fee. Approximately 1.5 hours later, Todd (under the username "retep," his name spelled backwards) replied with a technical correction:

> "Of course, to be specific, the inputs and outputs can't match *exactly* if the second transaction has a transaction fee."

This was Todd's second post on BitcoinTalk, made three days after registering. Hoback argued that Todd had accidentally posted from his own account instead of Satoshi's — that the reply was a continuation of Satoshi's thought rather than a response to it. Both accounts fell silent in the days that followed: [Satoshi's last public post](/BitcoinArchive/entries/forum/bitcointalk/topic-2228/2010-12-12-satoshi-final-post/) came two days later, on December 12, 2010, and Todd did not return to BitcoinTalk for sixteen months.

The objection that Bitcoin Institute would raise to itself: a 1.5-hour-after-Satoshi reply is not implausible same-author behavior, but neither is it implausible that an attentive reader noticed the same edge case Satoshi had been articulating. The "Of course, to be specific" register — a calm, technically-precise correction with a hint of casual authority — is suggestive but does not on its own carry the weight of authorship.

### 2.2 The RBF / BIP 125 connection

The documentary draws a line from the December 2010 exchange to Todd's later formalization of Replace-by-Fee in [BIP 125](/BitcoinArchive/entries/bip/2015-11-03-bip-0125/) (2015), arguing that Todd completed what Satoshi had started — because they were the same person. Hoback also noted Todd's prior use of an alternate persona to submit an RBF patch, suggesting a pattern of operating under different identities.

The objection: many Bitcoin Core contributors have built on partial mechanisms that Satoshi sketched but did not complete. Picking up such a mechanism years later is a generic Core-developer pattern, not specifically a same-author signal.

### 2.3 Writing style across three periods

Todd's public writing appears to shift noticeably across three periods:

1. **First post (December 7, 2010):** His BitcoinTalk debut — "Will buy 1 invite for $2, msg privately." — is maximally terse. No subject pronoun, no full words where abbreviations suffice, no personality. The text reads like a classified ad, stylistically indistinguishable from any anonymous user. Neither Todd's later voice nor Satoshi's restrained precision is evident.
2. **Second post (December 10, 2010):** His reply to Satoshi — "Of course, to be specific, the inputs and outputs can't match *exactly* if the second transaction has a transaction fee." — is calm, technically precise, and measured. The opening "Of course" carries a tone of casual authority, but the overall register is neutral. It does not yet display the profanity, self-deprecation, or combative sarcasm that would later define Todd's public persona.
3. **2012 onward:** Todd's writing develops a highly distinctive and consistent voice: frequent profanity, self-deprecating humor, rhetorical aggression, heavy use of asterisk emphasis, and a confrontational style. This voice remained remarkably stable across blog posts, mailing list exchanges, and social media for over a decade.

The progression — from no personality, to neutral precision, to an unmistakably idiosyncratic style — is the documentary-supporting reading: most writers, the argument runs, show more personality early and develop restraint over time, not the reverse.

The objection: a single classified-ad-style first post followed by a single technical-correction second post is too small a sample to establish a writer's range at age 21–25. A person's mature public-writing voice typically forms over their early adulthood, and the absence of Todd's later confrontational register in two short BitcoinTalk posts at age 25 is consistent with that voice not yet being formed, rather than with that voice being deliberately suppressed.

### 2.4 Development-activity timeline

Todd registered his GitHub account on April 13, 2008. Satoshi Nakamoto developed Bitcoin on [SourceForge (SVN)](/BitcoinArchive/entries/aftermath/2009-08-30-bitcoin-svn-repository-committers/). Their public activity records:

| Period | Todd's public record (GitHub) | Satoshi's activity (SourceForge / BitcoinTalk) |
|--------|----------------------|---------------------------|
| Apr–Dec 2008 | Active, 15 repos — all hardware/electronics (clocks, entropy oscillators, counters, firmware, PCB). Two projects have "Shipped" commits. Last commit: Dec 9 | Oct 2008: Whitepaper published |
| 2009 | Zero commits, zero new repos | Jan: Genesis block. Active development on SourceForge, forum participation on BitcoinTalk |
| 2010 | Nearly dormant — 1 small repo (Feb), no sustained activity. BitcoinTalk: registration (Dec 7), reply to Satoshi (Dec 10) | Active on SourceForge / BitcoinTalk until Dec 12 (last public post) |
| 2011 | Zero new repos. OCAD University graduation (Integrated Media) | Departure. Final known private emails |
| May 2012 | First Bitcoin repo — `hardware-bitcoin-wallet` | — |
| Sep 2012 | Forks Bitcoin Core. Rapid Bitcoin development begins | — |

The gap in Todd's public GitHub activity — roughly December 2008 through early 2012 — overlaps with Satoshi's active period.

Todd's GitHub repositories created between 2008 and 2011:

| Repository | Created | Language | OS clues | Description |
|-----------|---------|----------|----------|-------------|
| vimfiles | 2008-04-15 | VimL | `~/.vim` (Unix) | Shared vim configuration (from work) |
| alternate-pace | 2008-05-24 | — | | A clock with an alternate pace |
| alternate-pace.elec | 2008-05-28 | Shell | `#!/bin/sh`, Unix pipelines | Alternate Pace — Electronics |
| alternate-pace.firm | 2008-05-28 | C | `/usr/share/sdcc/`, `/usr/share/gputils/` (Linux FHS) | Alternate Pace — Firmware |
| entropy-oscillator | 2008-05-25 | — | | An entropy oscillator |
| entropy-oscillator.elec | 2008-08-28 | Python | | Entropy Oscillator — Electronics |
| entropy-oscillator.firm | 2008-08-28 | — | | Entropy Oscillator — Firmware |
| meter-clock | 2008-06-07 | — | | Meter Clock |
| meter-clock.schem | 2008-06-07 | Shell | | Meter Clock — Schematics |
| meter-clock.hard | 2008-06-07 | — | | Meter Clock — PCB layout and hardware design |
| meter-clock.firm | 2008-11-09 | — | | Meter Clock — Firmware |
| 64-bit-counter | 2008-06-09 | — | | A 64-bit non-volatile counter fed by a 64MHz source |
| 64-bit-counter.elec | 2008-06-09 | KiCad | | 64-bit Counter — Electronics |
| 64-bit-counter.firm | 2008-06-09 | C | | 64-bit Counter — Firmware |
| metesky | 2008-08-20 | Python | | Bill of materials tools |
| *(2009 — no repositories)* | | | | |
| congestion | 2010-02-24 | Python | `#!/usr/bin/python`, PyGTK (GNOME/Linux), vim modelines | Traffic congestion simulation (Python/Cython, Cairo). ~30 commits over Feb–Apr 2010, then inactive. Possibly an OCAD coursework project |
| *(2011 — no repositories)* | | | | |

All OS indicators in those repositories point to Linux — hardcoded Linux FHS paths (`/usr/share/`), Unix shebangs, PyGTK (a GNOME/Linux-native GUI toolkit). No Windows-related files, paths, or tools appear in any repository.

The objection: an undergraduate's nearly-empty public GitHub commit graph during 2009–2011 is not unusual. The gap is consistent with focusing on coursework, not with running a parallel pseudonymous Bitcoin development effort under separate infrastructure.

## 3. The counter-evidence

### 3.1 Age and OCAD timeline

Todd was born in 1985. In mid-2007, when Satoshi's [documented 18-month Bitcoin design window](/BitcoinArchive/entries/analysis/2008-10-31-cypherpunk-independent-arrival/) starts, Todd was 22 years old, an undergraduate at OCAD University pursuing an Integrated Media (fine arts) degree. He graduated in 2011. The hypothesis requires this person to have, in parallel with the OCAD program, designed a novel consensus mechanism, written the whitepaper, shipped the v0.1 codebase, run the network, and corresponded as Satoshi for two and a half years — while leaving no documented cryptographic or distributed-systems coursework, mailing-list activity, or other technical-protocol work in his pre-2012 public record. Possible, but not without cost.

### 3.2 No documented cypherpunk presence pre-2012

Wei Dai's 2014 identifiability argument (in his LessWrong AALWA thread) suggests Satoshi was *not* visibly active in the cypherpunks mailing list, metzdowd Cryptography List, or related fora during 2007–2008. This argument neither rules in nor rules out Todd specifically — Todd's lack of documented cypherpunk-mailing-list presence pre-2012 fits the "structurally outside" reading. However, the argument also requires Satoshi to have nonetheless absorbed the technical and conceptual depth that Bitcoin v0.1 demonstrates. The hypothesis requires Todd to have done this reading and synthesis somewhere unrecorded — possible, but the burden of explanation falls on the hypothesis to specify where.

### 3.3 Self-denial

Todd publicly denied the claim before and after the documentary's release. His responses ranged from sarcasm ("Oh, no, I am Satoshi. I'm Satoshi Nakamoto." — "Of course I'm Satoshi, and I'm Craig Wright.") to anger, calling the documentary "irresponsible" and noting that identifying someone as the holder of an estimated $70 billion in Bitcoin could put their personal safety at risk. Todd characterized the film's methodology as "coincidence-based conspiracy thinking" and stated he did not begin working on Bitcoin until 2014.

A self-denial is not by itself dispositive — Wright self-claimed and the COPA court ruled against him; Dorian Nakamoto self-denied and was acknowledged by external evidence (Newsweek retraction, Satoshi's p2pfoundation post) as not Satoshi. Todd's self-denial is information that the hypothesis must address.

### 3.4 Bitcoin community technical critique

The documentary was widely criticized by the Bitcoin technical community within days of release. [Bitcoin Magazine](https://bitcoinmagazine.com/culture/money-electric-insult-bitcoin-cynical-stupid-dangerous) called it "An Insult to Bitcoin — Cynical, Stupid, and Dangerous." [Cointelegraph](https://cointelegraph.com/news/hbo-documentary-peter-todd-satoshi-nakamoto) catalogued specific factual errors. Critics noted that the film relied entirely on circumstantial evidence and coincidence-based reasoning, with no cryptographic proof, no formal stylometric analysis, and no explanation for how an undergraduate fine-arts student could have designed a novel consensus mechanism.

The technical-community rejection of the documentary's evidence does not by itself rule out the underlying hypothesis — community sentiment is not evidence. But it does mean that the documentary's specific evidentiary case has not survived expert review.

## 4. Within the broader documentary record

The strongest claim the public record supports about Satoshi himself is that he was [structurally outside the visible cypherpunk community during the Bitcoin design period](/BitcoinArchive/entries/analysis/2008-10-31-cypherpunk-independent-arrival/) — Wei Dai's 2014 identifiability argument, plus Satoshi's own admission of not having known b-money during design, support a "not a visibly active cypherpunk during 2007–2008" reading.

That reading does not rule out Todd, but it does not select him either. The capability profile Bitcoin v0.1 demonstrates (cryptographic protocol design, distributed-systems engineering, monetary mechanism design, Bitcoin-source-level shipping in C++, near-native English) is what one would expect of someone with deep cypherpunk-cryptographic experience, not someone whose documented record consists of hardware-electronics projects and an OCAD fine-arts program.

For comparison with other named-candidate Satoshi-identity hypotheses (Sassaman, Kaneko, Finney, Szabo, Back, Dai, Dorian, Wright, Le Roux), see the [Satoshi-identity hypotheses overview](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/), which provides a single candidate profile comparison and external-status notes for each candidate.

## 5. Limits of this entry

- This entry does not present new evidence. It compiles publicly available material and frames the case at the same level of detail on both sides.
- This entry sets out the hypothesis fairly and the counter-evidence fairly, leaving the reader to weigh.
- This entry does not name "the most likely Satoshi candidate."
- If new evidence surfaces — direct documentary links, technical fingerprints in the v0.1 code matching Todd's other published code, comments by Todd or other witnesses that contradict the public record — this entry should be updated.

*[Editor: the framing is deliberately conservative: the hypothesis is laid out, supporting arguments are described as the documentary made them, and counter-evidence is set out at equal detail. The entry does not draw an editorial conclusion about whether the hypothesis is more likely true or false; readers who want a direct verdict will not find one.]*
