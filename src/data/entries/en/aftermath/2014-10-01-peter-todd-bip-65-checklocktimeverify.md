---
title: "Peter Todd proposes BIP 65: OP_CHECKLOCKTIMEVERIFY"
date: 2014-10-01T00:00:00Z
type: "bip"
source: "github"
sourceUrl: "https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki"
author: "Peter Todd"
participants:
  - name: "Peter Todd"
    slug: "peter-todd"
description: "Peter Todd proposed BIP 65, introducing the OP_CHECKLOCKTIMEVERIFY opcode that allows Bitcoin transaction outputs to remain unspendable until a specified future time. The proposal redefined the existing NOP2 opcode and was deployed as a soft fork, enabling use cases including escrow with delayed access, two-factor wallets, and payment channels."
isSatoshi: false
tags:
  - "peter-todd"
  - "bip"
  - "timelocks"
  - "bitcoin-core"
  - "soft-fork"
secondarySources:
  - name: "Bitcoin Wiki — BIP 0065"
    url: "https://en.bitcoin.it/wiki/BIP_0065"
  - name: "Cointelegraph — Peter Todd and the Expansion of Bitcoin"
    url: "https://cointelegraph.com/news/peter-todd-and-the-expansion-of-bitcoin"
  - name: "Bitcoin-dev mailing list — BIP 65 discussion"
    url: "https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2014-November/006948.html"
---

On October 1, 2014, Peter Todd proposed BIP 65, introducing a new opcode called OP_CHECKLOCKTIMEVERIFY to Bitcoin's scripting system. The proposal redefined the existing NOP2 opcode to enable time-locked transaction outputs — outputs that cannot be spent until a specified block height or timestamp.

**How it works:**

The opcode compares a value on the script stack against the transaction's nLockTime field. If the nLockTime hasn't been reached, the script fails and the transaction is rejected. This allows scripts to enforce that funds remain locked until a future point in time.

**Use cases:**

- **Escrow with delayed access:** A lawyer in a three-party escrow arrangement can only access funds after a timeout, preventing immediate theft
- **Two-factor wallets:** Services holding coins in 2-of-2 multisig can implement automatic refunds if the service disappears
- **Payment channels:** Non-interactive refund mechanisms that don't rely on transaction malleability workarounds
- **Fund freezing:** Users can provably lock bitcoins until a specified time, reducing duress or confiscation risks

**Significance:**

BIP 65 was deployed as a consensus-level soft fork. It was one of the building blocks that enabled more sophisticated Bitcoin smart contracts, including the payment channels that would later underpin the Lightning Network. Along with BIP 125 (Replace-by-Fee), it represents Peter Todd's most impactful contribution to the Bitcoin protocol.
