---
title: "Re: Bitcoin P2P e-cash paper"
date: 2008-11-03T01:37:00Z
source: cryptography-mailing-list
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014815.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "James A. Donald"
    slug: "james-donald"
description: "Satoshi responds to James Donald's scalability concerns, explaining how the system can work with simplified payment verification and that nodes don't need to know all transactions."
threadId: "bitcoin-p2p-e-cash-paper"
threadTitle: "Bitcoin P2P e-cash paper"
threadPosition: 3
inReplyTo: "emails/cryptography/2008-11-01-re-bitcoin-p2p-e-cash-paper-donald"
isSatoshi: true
tags:
  - "scalability"
  - "spv"
  - "bandwidth"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/3/"
---

James A. Donald wrote:
> We very, very much need such a system, but the way I understand your
> proposal, it does not seem to scale to the required size.

Long before the network gets anywhere near as large as that, it would be
safe for users to use Simplified Payment Verification (section 8) to check
for double spending, which only requires having the chain of block headers,
or about 12KB per day. Only people trying to create new coins would need
to run network nodes. At first, most users would run network nodes, but as
the network grows beyond a certain point, it would be left more and more to
specialists with server farms of specialized hardware. A server farm would
only need to have one node on the network and the rest of the LAN connects
with that one node.

The bandwidth might not be as prohibitive as you think. A typical
transaction would be about 400 bytes (ECC is nicely compact). Each
transaction has to be broadcast twice, so lets say 1KB per transaction.
Visa processed 37 billion transactions in FY2008, or an average of 100
million transactions per day. That many transactions would take 100GB of
bandwidth, or the size of 12 DVD or 2 HD quality movies, or about $18
worth of bandwidth at current prices.

If the network were to get that big, it would take several years, and by
then, sending 2 HD movies over the Internet would probably not seem like a
big deal.

Satoshi Nakamoto
