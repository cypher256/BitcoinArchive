---
title: "Re: Who's the Spanish jerk draining the Faucet?"
date: 2010-08-05T17:06:03.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=704.msg7703#msg7703"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Who's the Spanish jerk draining the Faucet?\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/321/"
quotes:
  - id: "q1"
    person: "gavinandresen"
    date: "2010-08-04T11:40:55.000Z"
    sourceEntryId: "forum/bitcointalk/topic-704/2010-08-04-gavin-andresen-msg7575"
  - id: "q2"
    person: "gavinandresen"
    date: "2010-08-04T11:40:55.000Z"
    sourceEntryId: "forum/bitcointalk/topic-704/2010-08-04-gavin-andresen-msg7575"
  - id: "q3"
    person: "gavinandresen"
    date: "2010-08-04T11:40:55.000Z"
    sourceEntryId: "forum/bitcointalk/topic-704/2010-08-04-gavin-andresen-msg7575"
---

Silently failing would look bad.

<!-- quote: q1 -->
> 1. Rate limit based on the first byte of the IP address (79. or 81. in this case).

Definitely needed.  What rate are you thinking of?  Ultimately, it's better to rate limit it than to let it all drain out.

<!-- quote: q2 -->
> 3. Rate limit based on last two domains of reverse DNS lookup of the IP address (rima-tde.net in this case).

That might work surprisingly well.  If it works, it keeps them from hitting the rate limit, but the rate limit is there as the last line of defence. 

<!-- quote: q3 -->
> 4. Make the standard amount given away 0.5 Bitcoins (Bitcoins have gone up 10 times in value since I started the Faucet).

Definitely time to lower it.
