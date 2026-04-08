---
title: "Re: Setting up multiple bitcoin machines behind NAT"
date: 2011-05-18T12:07:13.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=54.msg127146#msg127146"
author: "Dominic Sayers"
participants:
  - name: "Dominic Sayers"
    slug: "dominic-sayers"
description: "Context post by Dominic Sayers in BitcoinTalk topic 54. quotes Satoshi."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-02-16T01:34:56.000Z"
    sourceEntryId: "forum/bitcointalk/topic-54/2010-02-16-re-setting-up-multiple-bitcoin-machines-behind-nat"
---

<!-- quote: q1 -->
> You can only set up your NAT to port-forward to one of the computers.
>
>
>
> For redundancy in case the first computer goes down, you could have two that connect out and the rest connect to both of them.  The first two are run normally, the rest are run like:
> bitcoin -connect= -connect=

I agree with the first statement (you can only forward the port to one computer).

Therefore I do not understand the second statement. How does this achieve redundancy? Only one of the two will receive forwarded traffic. If that one goes down then you've lost the connection (AFAIK).

Am I being dumb?
