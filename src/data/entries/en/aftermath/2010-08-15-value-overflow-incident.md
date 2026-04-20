---
title: "Value overflow incident — 184 billion BTC created in Block 74638"
date: 2010-08-15T18:08:00Z
type: "article"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=822.0"
author: "Jeff Garzik"
participants:
  - name: "Jeff Garzik"
    slug: "jeff-garzik"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "An integer overflow bug (CVE-2010-5139) was exploited to create 184,467,440,737.09551616 BTC in a single transaction in Block 74638. Satoshi Nakamoto published a fix within 5 hours, and the corrected chain overtook the invalid chain within 15 hours — the most serious crisis in Bitcoin's history."
isSatoshi: false
tags:
  - "overflow-bug"
  - "block-74638"
  - "CVE-2010-5139"
  - "security"
  - "soft-fork"
  - "historic"
secondarySources:
  - name: "Bitcoin Wiki — Value overflow incident"
    url: "https://en.bitcoin.it/wiki/Value_overflow_incident"
  - name: "Blockchain Explorer — Block 74638"
    url: "https://www.blockchain.com/explorer/blocks/btc/74638"
  - name: "Decrypt — The Day Someone Created 184 Billion Bitcoin"
    url: "https://decrypt.co/39750/184-billion-bitcoin-anonymous-creator"
relatedEntries:
  - forum/bitcointalk/topic-823/2010-08-15-overflow-bug-serious
  - aftermath/2010-07-12-knightmb-biography
  - sourceforge/2010-08-15-bitcoin-v0310-overflow-bug-fix
  - aftermath/2010-06-11-gavin-andresen-biography
  - aftermath/2014-02-28-mt-gox-bankruptcy
  - aftermath/2010-07-11-slashdot-bitcoin-article
  - aftermath/2010-07-15-jeff-garzik-biography
---

On August 15, 2010, at approximately 18:08 UTC, Bitcoin developer [Jeff Garzik](/BitcoinArchive/participants/jeff-garzik/) noticed an anomaly in Block 74638 and posted on the BitcoinTalk [discussion thread (topic 823)](/BitcoinArchive/entries/threads/forum/bitcointalk/topic-823/):

> "Strange block 74638 — 92233720368.54277039 BTC? Is that UINT64_MAX, I wonder?"

A single transaction in Block 74638 had created **184,467,440,737.09551616 BTC** — two outputs of 92,233,720,368.54277039 BTC each — approximately 9,000 times Bitcoin's total intended supply of 21 million BTC.

**The bug:** The transaction validation code checked that individual outputs were non-negative, but did not check for integer overflow when summing outputs. Two outputs near the maximum value of a 64-bit signed integer (INT64_MAX ≈ 9.2 × 10¹⁸) would overflow to a negative value when added together, passing the validation check: 0.5 BTC input ≥ -0.01 BTC output (after overflow).

**The response:** Within approximately five hours of discovery, [Satoshi](/BitcoinArchive/participants/satoshi-nakamoto/) published [Bitcoin version 0.3.10](/BitcoinArchive/entries/sourceforge/2010-08-15-bitcoin-v0310-overflow-bug-fix/) containing a soft fork that added two new checks to `CheckTransaction()`:

1. Each individual output must not exceed MAX_MONEY (21,000,000 BTC)
2. The sum of all outputs must not exceed MAX_MONEY

Satoshi posted on IRC: "URGENT: Critical overflow bug fixed. Everyone please upgrade immediately to 0.3.10."

**The resolution:** The corrected chain overtook the invalid chain at Block 74691, approximately 15 hours after the incident. The 184 billion BTC were effectively erased from the blockchain's accepted history.

**Incident or exploit?** A natural question: did this happen by accident, or was it a deliberate exploit? Analysis of the v0.3 source and the transaction structure gives a firm answer on one point and leaves another open.

**Accidental occurrence is ruled out by the transaction's structure.** Triggering the overflow requires two outputs whose sum exceeds INT64_MAX (approximately 9.2 × 10¹⁸ satoshis), each near 92.2 billion BTC. Such values cannot arise from ordinary wallet activity — in 2010, no individual held or could plausibly access anywhere near 92 billion BTC; realistic balances peaked in the low thousands. Standard Bitcoin wallet interfaces validated output amounts against available balance and against MAX_MONEY. The specific value 92,233,720,368.54277039 BTC is not a plausible typo or rounding error; it is the largest representable int64 divided by 10⁸, and must be specifically targeted to land near overflow. Producing the Block 74638 transaction required constructing raw transaction bytes by hand or with a custom tool, setting output values to overflow int64 summation, and signing and broadcasting — each step a deliberate, technically informed action.

**The actor and motivation are not determinable from the public record.** The blockchain records the transaction and the two receiving addresses, but the creator's identity is not recoverable on-chain. Whether the action was malicious, a proof of concept, or a stress test cannot be inferred from the code or transaction data alone. The miner of Block 74638 may or may not have been aware — under the buggy validation logic, any honestly operating node would have accepted the transaction as valid; inclusion does not require complicity.

**Bug and exploit, both distinct and both applicable.** The overflow flaw in `CheckTransaction()` is a bug (CVE-2010-5139). The construction and broadcast of a transaction that triggered it is a deliberate exploit, confirmed by the structural requirements of producing such a transaction. Whether the exploit was malicious is not determinable from the public record alone. In security terminology, a deliberate action that triggers a vulnerability is an "attack" regardless of the actor's stated intent — the term does not, on its own, imply malice. The event is therefore accurately described as both a bug (the underlying flaw) and an attack (the exploitation).

The incident exposed a fundamental paradox: a decentralized system had been saved by centralized decision-making. In the emergency, the community adopted the patched client without independent verification, trusting Satoshi's judgment. The contradiction between the system's decentralized design and its dependence on a single authority for crisis response became visible for the first time.
