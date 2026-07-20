---
title: "Why Satoshi etched a bank-bailout headline into Bitcoin's first block"
date: 2009-01-03T18:15:05Z
type: "article"
source: "sourceforge"
sourceUrl: "https://sourceforge.net/projects/bitcoin/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Bitcoin's first block contains a Times bank-bailout headline — Satoshi's only personal voice inside the design, etched in the system's most permanent place. A reading of why he chose it."
isSatoshi: true
tags:
  - "sourceforge"
  - "genesis-block"
  - "historic"
  - "blockchain"
secondarySources:
  - name: "Block 0 on mempool.space"
    url: "https://mempool.space/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"
  - name: "Block 0 on Blockstream Explorer"
    url: "https://blockstream.info/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"
relatedEntries:
  - aftermath/2008-10-31-satoshi-nakamoto-biography
  - analysis/2009-01-03-genesis-block-hardcode-analysis
  - analysis/2008-10-31-satoshi-anonymity-architecture
  - aftermath/2024-10-01-bitcoin-magazine-genesis-block-5-day-mystery
  - aftermath/2022-10-06-serhack-alternative-genesis-block
  - aftermath/2020-11-23-chain-bulletin-satoshi-london-hypothesis
  - aftermath/2011-04-26-satoshi-final-known-email
  - analysis/2026-05-23-how-bitcoin-works-visual-glossary
  - design/2009-01-03-bitcoin-system-design-overview
  - aftermath/2008-11-02-james-donald-biography
quotes:
  - id: "q1"
    person: "The Times"
    date: "2009-01-03"
---

![A glowing cyan block labeled "Block 0 / Genesis" fused with a torn newspaper front page reading "Bailout for banks," a padlocked coin marked "50 BTC unspendable" below it, fading erased-identity icons on the left, and two smaller blocks with coin icons trailing off to the right.](/BitcoinArchive/images/analysis/2009-01-03-genesis-block-hero.png)

On January 3, 2009, Satoshi Nakamoto hardcoded the first block of the Bitcoin blockchain into the v0.1 source. What he etched into the coinbase transaction of that block was not a software version string, not his own name, not "Hello World" — it was the front-page headline of that day's *Times* newspaper, copied verbatim:

<!-- quote: q1 -->
> The Times 03/Jan/2009 Chancellor on brink of second bailout for banks

This is the single piece of personal voice Satoshi placed inside Bitcoin's design. Everywhere else, he scrupulously removed identifying signal — Tor traffic, address-rotating email accounts, mixed British/American spellings, typing-pattern caution, voluntary withdrawal (the full layered account is in the [anonymity-architecture analysis](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-anonymity-architecture/)). At one specific point in the design, he stopped removing signal and instead inserted one. The location he chose for that one insertion was Bitcoin's first block — the most permanent surface the system has.

The permanence runs along two axes. The block itself can never be removed; every node assembles its own byte-identical copy from constants. The 50 BTC coinbase reward attached to that block cannot be moved; the v0.1 source path that constructs Block 0 from constants never writes its coinbase output to the UTXO set, so the reward exists on the chain but is unspendable by design (the mechanism is detailed in [the genesis-block hardcode analysis](/BitcoinArchive/entries/analysis/2009-01-03-genesis-block-hardcode-analysis/) §5–§6). The message and the unmovable 50 BTC sit together — neither can be edited, retracted, or quietly drained.

The headline Satoshi chose was not a neutral timestamp pick. *Chancellor on brink of second bailout for banks* named the exact moment a government was about to underwrite, for the second time, a financial system whose failures had needed underwriting in the first place. The [Bitcoin whitepaper](/BitcoinArchive/entries/emails/cryptography/2008-10-31-bitcoin-whitepaper-final/), published two months earlier, proposed a payment system that would not require a trusted financial intermediary. The genesis coinbase pinned that proposal to a real-world instance of what *requiring* such an intermediary keeps producing. The pairing is the editorial choice.

Satoshi rarely let conviction show in writing. The closest registered moment is his [November 6, 2008 cryptography mailing-list reply to James A. Donald](/BitcoinArchive/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-06-sni4-bitcoin-p2p-e-cash-paper/) — *"we can win a major battle in the arms race and gain a new territory of freedom for several years"* — said once, in passing, and not repeated. [Donald](/BitcoinArchive/participants/james-donald/)'s scalability skepticism is what drew that reply out of Satoshi in the first place. His later messages, especially the [April 2011 farewells to Mike Hearn and Gavin Andresen](/BitcoinArchive/entries/aftermath/2011-04-26-satoshi-final-known-email/), are deliberately flat: *"I've moved on to other things."* Between those two registers — flat operational prose on one side, vanished personal voice on the other — the *Times* headline in Block 0 is the one place the conviction was committed to a permanent record rather than spoken in passing. It is the only declaration Satoshi made in a form that cannot be taken back.

The block hash:

```
000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f
```

For the structural reading — why the genesis is hardcoded, why the coinbase is unspendable, why the next block (Block 1) appears five days later despite the 10-minute target — see the [genesis-block hardcode analysis](/BitcoinArchive/entries/analysis/2009-01-03-genesis-block-hardcode-analysis/), surveyed alongside the [2024 Bitcoin Magazine treatment of the same gap](/BitcoinArchive/entries/aftermath/2024-10-01-bitcoin-magazine-genesis-block-5-day-mystery/).

*[Context: The Times headline embedded in the genesis-block coinbase is treated, in the novel [*Genesis: The Disappearance of the Founder and the Promise*](/BitcoinArchive/novel/), as the protagonist's single recorded emotional gesture — the one exception in his otherwise consistent public silence.]*
