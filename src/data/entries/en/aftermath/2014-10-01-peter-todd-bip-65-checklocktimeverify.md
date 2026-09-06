---
title: "Peter Todd proposes BIP 65: OP_CHECKLOCKTIMEVERIFY"
date: 2014-10-01T00:00:00Z
type: "article"
source: "github"
sourceUrl: "https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki"
author: "Peter Todd"
participants:
  - name: "Peter Todd"
    slug: "peter-todd"
description: "Peter Todd proposed BIP 65, introducing OP_CHECKLOCKTIMEVERIFY — an opcode locking transaction outputs until a future time. Deployed as a soft fork, enabling escrow and payment channels."
isSatoshi: false
tags:
  - "bip"
  - "time-lock"
  - "bitcoin-core"
  - "soft-fork"
secondarySources:
  - name: "Bitcoin Wiki — BIP 0065"
    url: "https://en.bitcoin.it/wiki/BIP_0065"
  - name: "Cointelegraph — Peter Todd and the Expansion of Bitcoin"
    url: "https://web.archive.org/web/20260217210457/https://cointelegraph.com/news/peter-todd-and-the-expansion-of-bitcoin"
  - name: "Bitcoin-dev mailing list — BIP 65 discussion"
    url: "https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2014-November/006948.html"
relatedEntries:
  - aftermath/2010-12-07-peter-todd-biography
  - aftermath/2010-12-07-retep-diaspora-invite-first-post
  - aftermath/2015-12-04-peter-todd-bip-125-replace-by-fee
  - aftermath/2016-09-15-peter-todd-opentimestamps-announcement
  - aftermath/2016-10-22-peter-todd-zcash-trusted-setup
  - aftermath/2024-10-08-hbo-money-electric-peter-todd
  - design/2009-01-03-bitcoin-ecosystem-design
inlineLinkKeywords:
  - "OP_CHECKLOCKTIMEVERIFY"
---

![A dark technical diagram of a time-locked Bitcoin transaction script, showing a padlock icon transitioning from locked to unlockable beside a clock face, a stack-and-condition box, and two silhouetted figures joined by an escrow-and-refund flow.](/BitcoinArchive/images/analysis/2014-10-01-peter-todd-bip-65-checklocktimeverify-hero.png)

On October 1, 2014, Peter Todd proposed BIP 65, introducing a new opcode called OP_CHECKLOCKTIMEVERIFY to Bitcoin's scripting system. The proposal redefined the existing NOP2 opcode to enable time-locked transaction outputs — outputs that cannot be spent until a specified block height or timestamp.

## How it works

The opcode compares a value on the script stack against the transaction's nLockTime field. If the nLockTime hasn't been reached, the script fails and the transaction is rejected. This allows scripts to enforce that funds remain locked until a future point in time.

## Use cases

- **Escrow with delayed access:** A lawyer in a three-party escrow arrangement can only access funds after a timeout, preventing immediate theft
- **Two-factor wallets:** Services holding coins in 2-of-2 multisig can implement automatic refunds if the service disappears
- **Payment channels:** Non-interactive refund mechanisms that don't rely on transaction malleability workarounds
- **Fund freezing:** Users can provably lock bitcoins until a specified time, reducing duress or confiscation risks

## Significance

BIP 65 was deployed as a consensus-level soft fork. Its time-locked outputs became a building block for non-interactive payment channels — the mechanism the Lightning Network would later be built on. The Lightning Network's full channel architecture, alongside the sidechains and mining-pool infrastructure built atop Bitcoin's base layer, is covered in [Bitcoin's ecosystem design](/BitcoinArchive/entries/design/2009-01-03-bitcoin-ecosystem-design/).
