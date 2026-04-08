---
title: "Re: What happens when network is split for prolonged time and reconnected?"
date: 2010-08-04T00:19:01.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=661.msg7376#msg7376"
author: "MoonShadow"
participants:
  - name: "MoonShadow"
    slug: "moonshadow"
description: "Context post by MoonShadow in BitcoinTalk topic 661. after msg7356."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "FreeMoney"
    personSlug: "freemoney"
    date: "2010-08-03T22:28:27.000Z"
    sourceEntryId: "forum/bitcointalk/topic-661/2010-08-03-freemoney-msg7351"
  - id: "q2"
    person: "creighto"
    date: "2010-08-03T20:01:22.000Z"
    sourceEntryId: "forum/bitcointalk/topic-661/2010-08-03-moonshadow-msg7314"
---

<!-- quote: q1 -->
>
> <!-- quote: q2 -->
> > So if one block takes twice as long as average, followed by a series of blocks that take 75% longer than average, then you can be fairly certain that you are no longer on the majority network.
>
>
> Really? It seems to me more likely that a bunch of people left/crashed than a whole new network half the size of the legit one has gotten to you.
>
> I'm probably misunderstanding.

Either you are misunderstanding or I am, both are possible.

From the perspective of the vendor's client, it doesn't matter *why* the average block time has doubled, only that it has.  The watchdog daemon simply notifiys the vendor that a problem could exist.  It's an alarm, but the vendor still would have to determine if it's a problem for him or not.  I think that he could still make valid transactions, if he was willing to risk the possibility that he could be left with invalid coins when the grid come back up.  The real cash economy has similar risks, as no one can really know with any degree of certainty that the 20's in his cash drawer are not counterfit.  I'm pretty sure that only the coins created since the break are at risk, since coins owned by people on the other side of the split are still theirs, and cannot be (honestly) traded on both sides, but honest trades on either side should still be reflected in the block chain once the grid comes back up.  At least that is the way I inderstand the functions of the system.  I could still be wrong.
