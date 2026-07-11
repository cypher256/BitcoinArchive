---
title: "Chain Bulletin presents evidence that Satoshi Nakamoto lived in London"
date: 2020-11-23T00:00:00Z
type: "article"
source: "chain-bulletin"
sourceUrl: "https://chainbulletin.com/satoshi-nakamoto-lived-in-london-while-working-on-bitcoin-heres-how-we-know"
author: "Doncho Karaivanov"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Doncho Karaivanov"
    slug: "doncho-karaivanov"
description: "Doncho Karaivanov analyzes 742 activity instances across Satoshi's posts, commits, and emails, plus The Times headline and British spelling, to argue Satoshi was based in London."
isSatoshi: false
tags:
  - "satoshi-identity"
  - "timestamp"
  - "genesis-block"
  - "the-times"
  - "london"
  - "linguistic-analysis"
secondarySources:
  - name: "Bitcoin Wiki — Genesis Block"
    url: "https://en.bitcoin.it/wiki/Genesis_block"
  - name: "The Times January 3, 2009 — Archived front page"
    url: "https://www.thetimes03jan2009.com/"
relatedEntries:
  - aftermath/2009-01-03-genesis-block
  - analysis/2009-01-03-genesis-block-hardcode-analysis
  - analysis/2008-10-31-satoshi-anonymity-architecture
  - analysis/2009-01-09-satoshi-code-analysis
  - aftermath/2020-11-26-coindesk-unpublished-satoshi-finney-emails
  - aftermath/2011-11-23-wired-rise-and-fall-of-bitcoin
  - aftermath/2021-02-22-evan-hatch-sassaman-satoshi-cypherpunk-history
  - analysis/2008-08-18-anonymousspeech-bitcoin-org-intermediary
translationStatus: complete
---

On November 23, 2020, Doncho Karaivanov published a detailed analysis on Chain Bulletin arguing that [Satoshi Nakamoto](/BitcoinArchive/participants/satoshi-nakamoto/) was based in London while developing Bitcoin. The article combines multiple lines of evidence.

## The Times headline evidence

The [Genesis Block](/BitcoinArchive/entries/aftermath/2009-01-03-genesis-block/) contains the message: "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks." Karaivanov demonstrates that this exact headline appeared only in the UK print edition of The Times of London — not in US distributions, which carried substantially different content and layout. In 2008, 770,000 of The Times' 1.8 million print readers (43%) were London-based, making the capital statistically the most likely access point for the physical newspaper.

## Timestamp analysis

The study analyzed **742 activity instances**:
- 539 BitcoinTalk posts (November 2009 – December 2010)
- 169 SourceForge commits (October 2009 – December 2010)
- 34 mailing list emails (October 2008 – December 2010)

All timestamps were converted from UTC to three candidate time zones: GMT (London), US Eastern, and US Pacific. The combined analysis revealed patterns consistent with a GMT-based schedule, though the night-owl behavior observed made timezone attribution somewhat ambiguous when viewed in isolation. A similar GMT-referenced gap in Satoshi's posting timestamps had already been reported nearly a decade earlier — see [Wired's 2011 feature on Bitcoin's rise and fall](/BitcoinArchive/entries/aftermath/2011-11-23-wired-rise-and-fall-of-bitcoin/) for Stefan Thomas's original graph showing a lull in forum activity between 5 am and 11 am Greenwich Mean Time. Karaivanov later applied the same timezone-forensics approach to a separate puzzle — see [the CoinDesk report on previously unpublished Satoshi-Finney emails](/BitcoinArchive/entries/aftermath/2020-11-26-coindesk-unpublished-satoshi-finney-emails/), where he attributed a UTC+8 header found on one of Satoshi's emails to the sending mail server rather than to Satoshi's own location.

## Linguistic markers

The article identifies British English conventions in Satoshi's writing:
- British spellings: "organise," "colour," "neighbour"
- British colloquialisms: use of "bloody"
- These patterns suggest British authorship or extended residency in the UK

The same "bloody" usage is also read as linguistic evidence for a different candidate in [Evan Hatch's Sassaman = Satoshi hypothesis](/BitcoinArchive/entries/aftermath/2021-02-22-evan-hatch-sassaman-satoshi-cypherpunk-history/), which cites the identical British colloquialism as evidence for Len Sassaman's residence in Belgium during Bitcoin's development.

## Conclusion

While no single piece of evidence is conclusive, the convergence of The Times physical newspaper access, GMT-consistent activity patterns, and British linguistic markers builds a circumstantial case for London as Satoshi's base of operations during Bitcoin's development.

This Chain Bulletin London hypothesis is read in parallel with [the genesis-block hardcode analysis](/BitcoinArchive/entries/analysis/2009-01-03-genesis-block-hardcode-analysis/), which uses The Times headline as evidence of authorial intent and explicitly references this Chain Bulletin reading as the same surviving signal read for geographic attribution rather than for intent.
