---
title: "Re: Bitcoin v0.1 released"
date: 2009-01-24T16:48:03Z
source: cryptography-mailing-list
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2009-January/015036.html"
author: "Hal Finney"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Hal Finney"
    slug: "hal-finney"
  - name: "Jonathan Thornburg"
    slug: "jonathan-thornburg"
description: "Hal Finney responds to Thornburg's regulatory concerns, arguing that Bitcoin has no single point of failure — 'no mint, no company with officers that can be subpoenaed and arrested and shut down.' He identifies the 'decentralized, global, irreversible transaction database' as Bitcoin's core innovation, presciently predicting the broader blockchain movement."
threadId: "bitcoin-v0-1-released"
threadTitle: "Bitcoin v0.1 released"
threadPosition: 5
inReplyTo: "emails/cryptography/2009-01-17-re-bitcoin-v0-1-released-thornburg"
isSatoshi: false
tags:
  - "regulation"
  - "decentralization"
  - "resilience"
  - "blockchain"
secondarySources:
  - name: "Satoshi Nakamoto Institute (thread view)"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/threads/2/"
---

[In response to Jonathan Thornburg's concerns about government regulation and botnet exploitation]

Bitcoin has no single point of failure. There is no "mint", no company with officers that can be subpoenaed and arrested and shut down. It is more like a P2P network, and as we have seen, despite degrees of at least governmental distaste, those are still around.

It could conceivably operate in a less anonymous mode, with transfers being linked to individuals, rather than single-use keys. Even so, it would still be useful to have a large scale, decentralized electronic payment system.

It also might be possible to refactor and restructure Bitcoin to separate out the key new idea, a decentralized, global, irreversible transaction database. Such a functionality might be useful for other purposes. Once it exists, using it to record monetary transfers would be a sort of side effect and might be harder to shut down.

[On proof-of-work and coin generation]

The proof-of-work aspect is primarily oriented around ensuring the soundness of the transaction ledger. Coin creation via proof-of-work was seen as a temporary expedient that phases out over several years.

[On botnets and security incentives]

If POW tokens do become useful, and especially if they become money, machines will no longer sit idle. Users will expect their computers to be earning them money (assuming the reward is greater than the cost to operate). A computer whose earnings are being stolen by a botnet will be more noticeable to its owner than is the case today, hence we might expect that in that world, users will work harder to maintain their computers and clean them of botnet infestations.

Hal
