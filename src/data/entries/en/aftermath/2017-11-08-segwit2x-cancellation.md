---
title: "SegWit2x cancelled three days before activation — Mike Belshe ends the New York Agreement (November 2017)"
date: 2017-11-08T17:00:00Z
type: "mailing-list"
source: "linuxfoundation"
sourceUrl: "https://lists.linuxfoundation.org/pipermail/bitcoin-segwit2x/2017-November/000685.html"
author: "Mike Belshe"
participants: []
description: "Mike Belshe suspended the SegWit2x hard fork on the mailing list, three days before the planned 2 MB activation at block 494784. The New York Agreement collapsed without a chain split."
isSatoshi: false
tags:
  - "segwit2x"
  - "block-size-war"
  - "new-york-agreement"
  - "scaling"
  - "fork"
  - "cancelled-fork"
secondarySources:
  - name: "Wikipedia — SegWit2x"
    url: "https://en.wikipedia.org/wiki/SegWit2x"
  - name: "Coindesk — SegWit2x Hard Fork Suspended for Lack of Consensus"
    url: "https://www.coindesk.com/markets/2017/11/08/segwit2x-hard-fork-suspended-for-lack-of-consensus/"
relatedEntries:
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
  - aftermath/2015-08-15-bitcoin-xt-launch
  - aftermath/2017-08-01-bitcoin-cash-fork
  - bip/2015-12-21-bip-0141
---

On November 8, 2017, [Mike Belshe](https://en.wikipedia.org/wiki/SegWit2x) announced on the `bitcoin-segwit2x@lists.linuxfoundation.org` mailing list that the SegWit2x hard fork — scheduled for block 494784, approximately three days later — was being suspended. The full message:

> "Our goal has always been a smooth upgrade for Bitcoin. Although we strongly believe in the need for a larger block size, there is something we believe is even more important: keeping the community together. Unfortunately, it is clear that we have not built sufficient consensus for a clean blocksize upgrade at this time. Continuing on the current path could divide the community and be a setback to Bitcoin's growth. This was never the goal of Segwit2x."

The post was co-signed by Belshe, Wences Casares, Jihan Wu, Jeff Garzik, Peter Smith, and Erik Voorhees — five of the original signatories of the New York Agreement.

SegWit2x had been the central commitment of the [New York Agreement](https://en.wikipedia.org/wiki/SegWit2x) (NYA), reached at the Consensus 2017 conference on May 23, 2017 by representatives of 58 major Bitcoin businesses and miners. The agreement bundled two protocol changes:

- **First half:** Activate Segregated Witness (BIP 141) on the main chain via the BIP 91 lock-in mechanism. This shipped on August 24, 2017.
- **Second half:** Hard-fork the Bitcoin protocol to a 2 MB block size limit, three months after SegWit activation. This was the half cancelled on November 8.

The cancellation was forced by a coalition of Bitcoin Core developers, full-node operators, and exchanges who refused to support a hard fork they considered insufficiently reviewed and contested. Without their participation, the hard fork would have produced a minority-hashrate chain split rather than a network-wide upgrade. Belshe's message acknowledged this rather than fight a losing activation.

The SegWit2x cancellation closed the main-chain side of the block-size war that had been running since [the Bitcoin XT launch](/BitcoinArchive/entries/aftermath/2015-08-15-bitcoin-xt-launch/) in August 2015. The larger-block faction had already split off into [Bitcoin Cash](/BitcoinArchive/entries/aftermath/2017-08-01-bitcoin-cash-fork/) on August 1, 2017; the cancellation of SegWit2x meant the main chain would not also undergo a contested hard fork. After November 8, no further main-chain hard-fork attempt has been organized; the protocol has evolved through soft forks (Taproot, 2021-11) instead.

Belshe's mailing-list post is the literal end of the New York Agreement. The signatures on the cancellation message are not all of the original NYA signers, but the absence of a contradicting signed message from any other signer functioned as a community-wide acceptance of the cancellation. The full sequence is recorded in [the Bitcoin family-tree analysis](/BitcoinArchive/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/).
