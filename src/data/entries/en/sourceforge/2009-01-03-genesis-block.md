---
title: "Satoshi defines Bitcoin's Genesis Block parameters (2009-01-03)"
date: 2009-01-03T18:15:05Z
type: "forum-post"
source: "sourceforge"
sourceUrl: "https://sourceforge.net/projects/bitcoin/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto hardcoded the Genesis Block (Block 0) parameters of the Bitcoin blockchain, embedding the now-famous headline from The Times: 'Chancellor on brink of second bailout for banks.'"
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
  - aftermath/2024-10-01-bitcoin-magazine-genesis-block-5-day-mystery
  - aftermath/2022-10-06-serhack-alternative-genesis-block
  - aftermath/2020-11-23-chain-bulletin-satoshi-london-hypothesis
---

On January 3, 2009, Satoshi Nakamoto defined the parameters of the first block of the Bitcoin blockchain — known as the Genesis Block or Block 0 — by hardcoding them as constants in the v0.1 source. Block 0 is therefore not propagated over the P2P layer; every node reconstructs it locally from those constants. See the [genesis-block hardcode analysis](/BitcoinArchive/entries/analysis/2009-01-03-genesis-block-hardcode-analysis/) for the mechanism. The block's coinbase transaction contained the following embedded text:

"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"

This message, a headline from the front page of The Times newspaper published on that date, serves dual purposes. It acts as a timestamp proving Block 0's parameters could not have been chosen before January 3, 2009, and it provides a pointed commentary on the instability of the traditional banking system -- the very problem Bitcoin was designed to address. The headline's origin (a British newspaper) has also been [treated as geographic evidence](/BitcoinArchive/entries/aftermath/2020-11-23-chain-bulletin-satoshi-london-hypothesis/) in later analyses of Satoshi's likely location.

The Genesis Block is [hardcoded into the Bitcoin software](/BitcoinArchive/entries/analysis/2009-01-03-genesis-block-hardcode-analysis/) and is the foundation upon which the entire blockchain is built. Unlike all subsequent blocks, the 50 BTC reward from the Genesis Block's coinbase transaction is unspendable due to the bootstrap-initialization structure of the original code.

The block hash is:

000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f

The Genesis Block's hardcoded timestamp is six days before the next block (Block 1), which was mined on January 9, 2009 — the same day Bitcoin v0.1 was released to the public. Block 1 was the first block actually mined and broadcast on the live network. The cause of this 6-day gap is examined as a [hardcode timestamp artifact](/BitcoinArchive/entries/analysis/2009-01-03-genesis-block-hardcode-analysis/) in the genesis analysis, and surveyed among several popular hypotheses in [Pete Rizzo's 2024 Bitcoin Magazine article](/BitcoinArchive/entries/aftermath/2024-10-01-bitcoin-magazine-genesis-block-5-day-mystery/).
