---
title: "Bitcoin Magazine examines the 5-day gap between Genesis Block and Block 1"
date: 2024-10-01T00:00:00Z
source: aftermath
sourceUrl: "https://bitcoinmagazine.com/technical/satoshi-nakamoto-2009-bitcoin-mining-missing-blocks-mystery"
author: "Pete Rizzo"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Pete Rizzo"
    slug: "pete-rizzo"
description: "Pete Rizzo investigates the unexplained ~5-day, 8-hour gap between the Genesis Block (January 3, 2009) and Block 1 (January 9, 2009), framing it as one of Bitcoin's enduring unsolved mysteries."
isSatoshi: false
aftermathType: "article"
tags:
  - "genesis-block"
  - "mining"
  - "timestamp"
  - "mystery"
  - "bitcoin-launch"
secondarySources:
  - name: "CCN — Bitcoin Genesis Block 5-Day Mystery"
    url: "https://www.ccn.com/news/crypto/bitcoin-genesis-block-5-day-mystery-trillion-dollar-asset/"
  - name: "Bitslog — A New Mystery in Patoshi Timestamps (June 2020)"
    url: "https://bitslog.com/2020/06/22/a-new-mystery-in-patoshi-timestamps/"
  - name: "Bitcoin Wiki — Genesis Block"
    url: "https://en.bitcoin.it/wiki/Genesis_block"
translationStatus: complete
---

On October 1, 2024, Bitcoin Magazine's Pete Rizzo published an investigation into one of Bitcoin's most enduring technical mysteries: the approximately 5 days and 8 hours that elapsed between the Genesis Block (Block 0, January 3, 2009 at 18:15:05 UTC) and Block 1 (January 9, 2009 at 02:54:25 UTC).

**The mystery:**

Under normal mining conditions with Satoshi as the sole miner, the expected time between blocks would have been approximately 10 minutes. Yet the gap between Block 0 and Block 1 is roughly 750 times longer than expected. No blocks from this interval exist on the blockchain.

**Prevailing theories:**

1. **Deliberate reset** — Satoshi mined the Genesis Block, tested the system, then reset and restarted the network fresh on January 9. The Genesis Block's timestamp may reflect when it was hardcoded into the source code rather than when mining actually began.

2. **The Times headline theory** — The Genesis Block's embedded message ("The Times 03/Jan/2009 Chancellor on brink of second bailout for banks") proves it could not have been created before January 3. Satoshi may have waited for a symbolically significant headline before finalizing the block.

3. **Technical debugging** — Satoshi may have spent the intervening days fixing bugs discovered during initial testing, particularly in the peer-to-peer connection code that he later acknowledged had issues.

4. **v0.1 preparation** — The gap aligns with the time needed to prepare the Bitcoin v0.1 software release (announced January 9 on the Cryptography Mailing List), suggesting Satoshi was packaging the software for public distribution.

The article notes that because the Genesis Block is hardcoded into Bitcoin's source code (unlike all subsequent blocks which are mined through proof-of-work), its timestamp may not represent the actual moment of creation. This technical distinction makes the true timeline of Bitcoin's birth fundamentally unknowable.
