---
title: "Bitcoin P2P e-cash paper"
date: 2008-11-09T04:55:23Z
type: "mailing-list"
source: "cryptography-mailing-list"
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014834.html"
sourceNote: "Posted Sat Nov 8, 2008 at 23:55:23 EST (Nov 9, 04:55:23 UTC) by James A. Donald (jamesd at echeque.com) to the metzdowd cryptography mailing list."
author: "James A. Donald"
participants:
  - name: "James A. Donald"
    slug: "james-donald"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Replying to Satoshi on bandwidth, James A. Donald argues a new currency must serve markets Visa ignores, and proposes 'binks' — bitcoin banks settling in bitcoin beneath a layer of account money."
inReplyTo: "emails/cryptography/2008-11-02-re-bitcoin-p2p-e-cash-paper-satoshi-1"
isSatoshi: false
tags:
  - "scalability"
  - "micropayments"
  - "bandwidth"
  - "bitcoin-bank"
secondarySources:
  - name: "Satoshi Nakamoto Institute (thread view)"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/threads/1/"
quotes:
  - id: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2008-11-03T01:37:00Z"
    sourceEntryId: "emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-02-re-bitcoin-p2p-e-cash-paper-satoshi-1"
---

<!-- quote: q1 -->
<!-- speaker: Satoshi Nakamoto -->
> The bandwidth might not be as prohibitive as you think. A typical
> transaction would be about 400 bytes (ECC is nicely compact). Each
> transaction has to be broadcast twice, so lets say 1KB per transaction.
> Visa processed 37 billion transactions in FY2008, or an average of 100
> million transactions per day. That many transactions would take 100GB of
> bandwidth, or the size of 12 DVD or 2 HD quality movies, or about $18
> worth of bandwidth at current prices.

<!-- speaker: James A. Donald -->
The trouble is, you are comparing with the Bankcard network.

But a new currency cannot compete directly with an old, because network effects favor the old.

You have to go where Bankcard does not go.

At present, file sharing works by barter for bits. This, however requires the double coincidence of wants. People only upload files they are downloading, and once the download is complete, stop seeding. So only active files, files that quite a lot of people want at the same time, are available.

File sharing requires extremely cheap transactions, several transactions per second per client, day in and day out, with monthly transaction costs being very small per client, so to support file sharing on bitcoins, we will need a layer of account money on top of the bitcoins, supporting transactions of a hundred thousandth the size of the smallest coin, and to support anonymity, chaumian money on top of the account money.

Let us call a bitcoin bank a bink. The bitcoins stand in the same relation to account money as gold stood in the days of the gold standard. The binks, not trusting each other to be liquid when liquidity is most needed, settle out any net discrepancies with each other by moving bit coins around once every hundred thousand seconds or so, so bitcoins do not change owners that often, Most transactions cancel out at the account level. The binks demand bitcoins of each other only because they don't want to hold account money for too long. So a relatively small amount of bitcoins infrequently transacted can support a somewhat larger amount of account money frequently transacted.
