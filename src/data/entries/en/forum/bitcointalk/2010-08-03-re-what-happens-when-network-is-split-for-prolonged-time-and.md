---
title: "Re: What happens when network is split for prolonged time and reconnected?"
date: 2010-08-03T22:45:07.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=661.msg7356#msg7356"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"What happens when network is split for prolonged time and reconnected?\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/312/"
---

creighto: I agree with that idea.  After a few hours, it should be possible for the client to notice if the flow of blocks has dropped off by more than would be likely just by chance.  It could tell if it's not hearing the hum of the world anymore.

[Quote from: knightmb on August 03, 2010, 07:02:13 PM](https://bitcointalk.org/index.php?topic=661.msg7303#msg7303)[Quote from: gavinandresen on August 03, 2010, 06:38:44 PM](https://bitcointalk.org/index.php?topic=661.msg7293#msg7293)Or if the split lasted long enough (more than 100 blocks), transactions that involve generated coins on the shorter chain would be invalid at the merge.
Interesting info, so other than some double-spending issues, as long as the block chain isn't separated for more than 100 or so blocks (or 16+ hours), 
In practice, splits are likely to be very asymmetrical.  It would be hard to split the world down the middle.  More likely it would be a single country vs the rest of the world, lets say a 1:10 split.  In that case, it would take the minority fork 10 times as long to generate 100 blocks, so about 7 days.  Also it would be super easy for the client to realize it's hearing way too few blocks and something must be wrong.

[Quote from: knightmb on August 03, 2010, 07:02:13 PM](https://bitcointalk.org/index.php?topic=661.msg7303#msg7303)If there a hard coded limit on split delay? Meaning if I had a small network split from the public network, spent some coin around, came back a few days later and got them sync up to the public network (other than coin generation if it happened) transactions should be fine?
There's no time limit.  Assuming you weren't spending coins generated in the minority fork, or spending someone's double-spends you received, your transactions can get into the other chain at any time later.
