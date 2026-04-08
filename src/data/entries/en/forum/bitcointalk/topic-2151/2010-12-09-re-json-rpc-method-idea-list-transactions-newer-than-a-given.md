---
title: "Re: JSON-RPC method idea: list transactions newer than a given txid"
date: 2010-12-09T00:12:17.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=2151.msg28313#msg28313"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"JSON-RPC method idea: list transactions newer than a given txid\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/527/"
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-12-08T13:36:45.000Z"
  - id: "q2"
    person: "Jeff Garzik"
    personSlug: "jeff-garzik"
    date: "2010-12-08T14:07:22.000Z"
  - id: "q3"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-12-08T13:36:45.000Z"
---

I'm not talking about the normal risk for a given minconf level, I'm talking about additional pitfalls from listtransactions when used this way.

<!-- quote: q1 -->
> 2) When there's a block-chain reorg, it would be easy to double-count transactions when they get confirmed again.

The OP's example of listtransactions <account> [count=10] [txid] seems to imply and it would be very easy for programmers to assume that if they pass in the last txid of the previous call to listtransactions, they will never see the same transaction more than once, which is not the case.  It would be very easy to double-count payments if you don't maintain your own persistent map or dictionary to track which txid's you've already accepted.

It doesn't seem right to have a function that seems tailor made to be used a certain obvious way, and that way is a non-obvious trap.

<!-- quote: q2 -->
> <!-- quote: q3 -->
> > 3) A transaction can be replaced by a double-spend with a different txid.  You would count both spends.
>
>  listtransactions does not add anything to this problem, beyond that which is already vulnerable through listreceivedbyaddress.
Suppose both spends are to the same address.  getreceivedbyaddress would always count only one or the other spend at any given time, never both.

Using listtransactions, it would be very easy to count both.  You see the first spend, you count it.  You see the second spend, you count it.  Total is double counted.
