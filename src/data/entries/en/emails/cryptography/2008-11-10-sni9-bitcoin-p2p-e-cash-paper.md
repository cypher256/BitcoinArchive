---
title: "Bitcoin P2P e-cash paper"
date: 2008-11-10T02:14:30Z
source: cryptography-mailing-list
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014842.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "James A. Donald"
    slug: "james-donald"
description: "Satoshi proposes transaction fees as an alternative to seigniorage, suggesting that output values be slightly less than input values to fund network incentives without inflation."
threadId: "bitcoin-p2p-e-cash-paper"
threadTitle: "Bitcoin P2P e-cash paper"
threadPosition: 18
isSatoshi: true
tags:
  - "transaction-fees"
  - "inflation"
  - "incentives"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/9/"
---

James A. Donald wrote:
> Furthermore, it cannot be made to work, as in the proposed system the
> work of tracking who owns what coins is paid for by seigniorage, which
> requires inflation.

If you're having trouble with the inflation issue, it's easy to tweak it for transaction fees instead.  It's as simple as this: let the output value from any transaction be 1 cent less than the input value.  Either the client software automatically writes transactions for 1 cent more than the intended payment value, or it could come out of the payee's side.  The incentive value when a node finds a proof-of-work for a block could be the total of the fees in the block.

Satoshi Nakamoto

---------------------------------------------------------------------
The Cryptography Mailing List
Unsubscribe by sending "unsubscribe cryptography" to majordomo at metzdowd.com
