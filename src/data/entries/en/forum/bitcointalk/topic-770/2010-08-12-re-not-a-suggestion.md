---
title: "Re: Not a suggestion"
date: 2010-08-12T02:46:56.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=770.msg8836#msg8836"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Not a suggestion\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/347/"
quotes:
  - id: "q1"
    person: "Red"
    personSlug: "red"
    date: "2010-08-11T16:10:19.000Z"
  - id: "q2"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-08-11T12:07:59.000Z"
---

<!-- quote: q1 -->
> <!-- quote: q2 -->
> > I believe the clients would have to keep the entire history back to the original generated coins.  The fact that clients have to keep the entire history reduces the privacy benefit.  
> 
> I thought this too at first. But then I convinced myself otherwise.
> Are you back to talking about the existing Bitcoin system here?

I was talking about in the hypothetical system I was describing, if the network doesn't know the values and lineage of the transactions, then it can't verify them and vouch for them, so the clients would have to keep the history all the way back.

If a client wasn't present until recently, the two ways to convince it that a transaction has a valid past is:
1) Show it the entire history back to the original generated coin.
2) Show it a history back to a thoroughly deep block, then trust that if so many nodes all said the history up to then was correct then it must be true.

But if the network didn't know all the values and lineage of the transactions, it couldn't do 2), I don't think.
