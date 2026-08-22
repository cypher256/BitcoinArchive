---
title: "Nick Szabo: 'Bitcoin, what took ye so long?' — why digital cash took decades"
date: 2011-05-28T00:00:00Z
type: "article"
source: "unenumerated"
sourceUrl: "https://unenumerated.blogspot.com/2011/05/bitcoin-what-took-ye-so-long.html"
author: "Bitcoin Institute"
participants:
  - name: "Nick Szabo"
    slug: "nick-szabo"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Wei Dai"
    slug: "wei-dai"
  - name: "Hal Finney"
    slug: "hal-finney"
description: "Nick Szabo's May 2011 blog post on why digital cash took thirteen years between bit gold (1998) and Bitcoin (2009). Names libtech as the private list where bit gold and b-money developed in parallel."
isSatoshi: false
tags:
  - "nick-szabo"
  - "bit-gold"
  - "origins"
  - "proof-of-work"
  - "deflation"
secondarySources:
  - name: "Gwern Mirror"
    url: "https://gwern.net/doc/www/unenumerated.blogspot.com/3ecbb48879787f383ef10206358e0a14adf2f5dd.html"
relatedEntries:
  - aftermath/2013-12-05-techcrunch-skye-grey-szabo-stylometric
  - aftermath/2015-05-15-popper-nyt-szabo-satoshi-investigation
  - analysis/2013-12-05-szabo-satoshi-identity-hypothesis
  - "aftermath/2005-12-29-nick-szabo-biography"
  - "aftermath/2008-04-27-nick-szabo-bit-gold-implementation-request"
inlineLinkKeywords:
  - "libtech"
quotes:
  - id: "q1"
    person: "Nick Szabo"
    personSlug: "nick-szabo"
    date: "2011-05-28T00:00:00Z"
  - id: "q2"
    person: "Nick Szabo"
    personSlug: "nick-szabo"
    date: "2011-05-28T00:00:00Z"
  - id: "q3"
    person: "Nick Szabo"
    personSlug: "nick-szabo"
    date: "2011-05-28T00:00:00Z"
---

![Dark navy infographic showing a wavy timeline from a 1998 dot through a diamond waypoint to a small connected-node cluster guarded by a gate icon and a balance icon near a 2009 dot, with two curving lines converging into a padlocked envelope and a row of dated dots leading to a document icon.](/BitcoinArchive/images/analysis/2011-05-28-nick-szabo-bitcoin-what-took-ye-so-long-hero.png)

Published on Szabo's Unenumerated blog on May 28, 2011, this is the first long-form public statement Szabo wrote about Bitcoin after its launch. The timing is significant — it appeared roughly a month after [Satoshi's final private email to Gavin Andresen](/BitcoinArchive/entries/aftermath/2011-04-26-satoshi-to-andresen-alert-key/) and during the year Bitcoin first reached parity with the US dollar. The post operates on two levels: a retrospective on why the digital-cash idea took thirteen years to ship between [bit gold](/BitcoinArchive/entries/aftermath/2008-04-27-nick-szabo-bit-gold-implementation-request/) (1998) and Bitcoin (2009), and an architectural comparison between bit gold and Bitcoin written by the closest known living designer of a precursor system.

**The "why so long" argument.** Szabo's first claim is that the difficulty was sociological, not technical:

<!-- quote: q1 -->
> While the security technology is very far from trivial, the "why" was by far the biggest stumbling block — nearly everybody who heard the general idea thought it was a very bad idea.

He attributes the resistance to economic intuition: most people believed money required either commodity backing (the metallic tradition) or sovereign issuance (the chartalist tradition), and a third option — a scarce digital token without either — was widely dismissed. Szabo connects this to a misreading of Menger and Mises that he had encountered repeatedly when discussing bit gold in the late 1990s.

**The libtech mailing list disclosure.** The post contains the first public confirmation that the late-1990s digital-cash work happened on a specific private channel:

<!-- quote: q2 -->
> Only a few people had read of the bit gold ideas, which although I came up with them in 1998 (at the same time and on the same private mailing list where Dai was coming up with b-money — it's a long story) were mostly not described in public until 2005, although various pieces of it I described earlier, for example the crucial Byzantine-replicated chain-of-signed-transactions part of it which I generalized into what I call secure property titles.

This identifies "libtech" as the venue where [Wei Dai](/BitcoinArchive/participants/wei-dai/)'s [b-money](/BitcoinArchive/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/) and Szabo's bit gold were developed in parallel during 1998. The parallel development on a closed list — rather than independent inventions in isolation — is a structural fact that recurs in later identification analyses (the [Wei-Dai-Satoshi hypothesis](/BitcoinArchive/entries/analysis/2008-08-22-wei-dai-satoshi-identity-hypothesis/) and the [Szabo-Satoshi hypothesis](/BitcoinArchive/entries/analysis/2013-12-05-szabo-satoshi-identity-hypothesis/) both build on it).

**The bit gold vs. Bitcoin comparison.** The architectural section identifies two specific improvements Bitcoin made over bit gold:

<!-- quote: q3 -->
> Nakamoto improved a significant security shortcoming that my design had, namely by requiring a proof-of-work to be a node in the Byzantine-resilient peer-to-peer system to lessen the threat of an untrustworthy party controlling the majority of nodes and thus corrupting a number of important security features.
>
> Instead of my automated market to account for the fact that the difficulty of puzzles can often radically change based on hardware improvements and cryptographic breakthroughs (i.e. discovering algorithms that can solve proofs-of-work faster), and the unpredictability of demand, Nakamoto designed a Byzantine-agreed algorithm adjusting the difficulty of puzzles. I can't decide whether this aspect of Bitcoin is more feature or more bug, but it does make it simpler.

The first improvement — using proof-of-work as the gate to network participation rather than as a separate coin-generation function — is the structural innovation that makes Bitcoin's security model work. The second — the difficulty-adjustment algorithm replacing an automated market — Szabo frames as a trade-off rather than an unambiguous improvement: the algorithm makes the system simpler at the cost of removing market-based price discovery for proof-of-work costs.

**Tone and identification debate.** The post is written in Szabo's characteristic register — historical-economic prose interleaved with the engineering points, dismissive asides about "common arguments coming ironically from libertarians" — and reads as the work of someone with substantial intellectual investment in the design space. This register is part of why the [stylometric analyses](/BitcoinArchive/entries/aftermath/2013-12-05-techcrunch-skye-grey-szabo-stylometric/) of 2013 and the [Popper NYT investigation](/BitcoinArchive/entries/aftermath/2015-05-15-popper-nyt-szabo-satoshi-investigation/) of 2015 returned Szabo as a leading identification candidate. Szabo has denied being Satoshi; the post stops short of confirming or denying anything beyond his role as the original bit gold designer.

**Position in the origins corpus.** Alongside [Wei Dai's b-money announcement](/BitcoinArchive/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/), [Adam Back's hashcash announcement](/BitcoinArchive/entries/aftermath/1997-03-28-adam-back-hashcash-announcement/), and [Hal Finney's RPOW announcement](/BitcoinArchive/entries/aftermath/2019-08-21-hal-finney-rpow-recognition/), this 2011 retrospective fills in the design genealogy from the inside — written by the precursor designer who is also a candidate for the identity of the system that actually shipped. Together these four documents map the design genealogy behind Bitcoin — though only Hashcash and b-money are cited in the whitepaper; bit gold and RPOW sit just outside its references.
