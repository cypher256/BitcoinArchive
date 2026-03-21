---
title: "Peter Todd announces OpenTimestamps"
date: 2016-09-15T00:00:00Z
type: "article"
source: "petertodd-org"
sourceUrl: "https://petertodd.org/2016/opentimestamps-announcement"
author: "Peter Todd"
participants:
  - name: "Peter Todd"
    slug: "peter-todd"
description: "Peter Todd announced OpenTimestamps, an open-source infrastructure for creating cryptographic timestamps using the Bitcoin blockchain. The system can timestamp an unlimited number of documents in a single Bitcoin transaction through Merkle tree aggregation, providing free, scalable, trust-minimized proof that data existed at a specific point in time."
isSatoshi: false
tags:
  - "peter-todd"
  - "opentimestamps"
  - "timestamping"
  - "merkle-tree"
  - "bitcoin-application"
secondarySources:
  - name: "OpenTimestamps — Official Site"
    url: "https://opentimestamps.org/"
  - name: "Peter Todd — Carbon Dating the Internet Archive with OpenTimestamps"
    url: "https://petertodd.org/2017/carbon-dating-the-internet-archive-with-opentimestamps"
  - name: "W3C — Open Timestamps discussion"
    url: "https://lists.w3.org/Archives/Public/public-blockchain/2016Sep/0078.html"
---

On September 15, 2016, Peter Todd announced OpenTimestamps, a system for creating cryptographic proofs that data existed at a specific point in time by anchoring timestamps to the Bitcoin blockchain.

**How it works:**

OpenTimestamps uses Merkle tree aggregation to combine an unlimited number of document hashes into a single Bitcoin transaction. Each individual timestamp is simply the path through the Merkle tree to the Bitcoin block header. Public calendar servers collect pending hashes and periodically merge them into trees, making timestamps free and nearly instant (under one second).

**Design principles:**

- **Trust-minimized:** No reliance on centralized authorities — Bitcoin's publicly auditable blockchain serves as the time attestation
- **Scalable:** An unlimited number of timestamps per transaction through aggregation
- **Convenient:** Timestamps can be created in about a second without waiting for block confirmation
- **Verifiable:** Anyone with a Bitcoin node can independently verify timestamps offline

**Use cases:**

- Verifying record integrity after security breaches
- Validating software signatures when developer keys are revoked
- Establishing when website snapshots were created
- Git commit timestamping for provable development history

**Funding and development:**

The project was funded by Verisart (art provenance) and BTCC (Bitcoin mining firm). Todd noted the project was a rewrite of his earlier 2012 timestamping work. In 2017, he demonstrated the system by "carbon dating" the Internet Archive, timestamping large portions of the Wayback Machine.

*[OpenTimestamps reflects a core insight that Satoshi built into Bitcoin itself: that a blockchain is fundamentally a timestamping system. The Bitcoin whitepaper's title refers to a "peer-to-peer electronic cash system," but Section 3 is titled "Timestamp Server." Todd's project extracts and generalizes this timestamping capability for arbitrary data.]*
