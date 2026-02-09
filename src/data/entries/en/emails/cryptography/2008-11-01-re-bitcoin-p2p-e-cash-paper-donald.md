---
title: "Re: Bitcoin P2P e-cash paper"
date: 2008-11-02T23:46:23Z
source: cryptography-mailing-list
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014814.html"
author: "James A. Donald"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "James A. Donald"
    slug: "james-donald"
description: "James A. Donald responds to Satoshi's Bitcoin announcement, raising the question of how the system scales and how nodes agree on a single transaction history."
threadId: "bitcoin-p2p-e-cash-paper"
threadTitle: "Bitcoin P2P e-cash paper"
threadPosition: 2
inReplyTo: "emails/cryptography/2008-10-31-bitcoin-p2p-e-cash-paper"
isSatoshi: false
tags:
  - "scalability"
  - "consensus"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/2/"
---

Satoshi Nakamoto wrote:
> I've been working on a new electronic cash system that's fully
> peer-to-peer, with no trusted third party.
>
> The paper is available at:
> http://www.bitcoin.org/bitcoin.pdf

We very, very much need such a system, but the way I understand your
proposal, it does not seem to scale to the required size.

For transferable proof of work tokens to have value, they must have
monetary value. To have monetary value, they must be transferred within
a very large network - for example a file trading network akin to
bittorrent.

To detect and reject a double spending event in a timely manner, one
must have most past transactions of the coins in the transaction, which,
naively implemented, requires each peer to have most past transactions,
or most past transactions that occurred recently. If hundreds of
millions of people are doing transactions, that is a lot of bandwidth -
each must know all, or a substantial part thereof.
