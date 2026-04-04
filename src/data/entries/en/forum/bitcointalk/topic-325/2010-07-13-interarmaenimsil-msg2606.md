---
title: "Hash/sec Throttling for Democracy"
date: 2010-07-13T18:23:55.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=325.msg2606#msg2606"
author: "InterArmaEnimSil"
participants:
  - name: "InterArmaEnimSil"
    slug: "interarmaenimsil"
description: "Thread starter by InterArmaEnimSil in BitcoinTalk topic 325."
isSatoshi: false
tags: []
---

I've seen a number of posts complaining that coin generation on old machines is impractical (actually, the posts say impossible, but that's not correct).  A number of others have espoused the general idea that flops*luck=coins, which seems to me to be about right.  One even advocated for OpenCL/CUDA support, which seems to me like it would give those with OpenCL capable cards an incredible advantage in the "flops" category of flops*luck.  

Now, some have said "If you have no luck, you don't get coins...." but come on here...we're dealing with computers - RNGs have nothing, really, to do with luck.  They operate upon statistical averages.  (If BTC is using a true RNG based upon machine atmospheric noise, I could be wrong here, but I don't know that such a generator would be practical in that it would be too slow).  

Therefore, why not cap the number of hashes per second?  If the operations were capped at say, 250khash/sec based upon system clock and not the available number of cycles, then anyone with the "minimum requirements" could participate in generation at no disadvantage to the guy with the TESLA cluster running CUDA (okay...so people aren't going to use TESLA clusters for this...but you see my point, I hope).  Of course, difficulty would need to be adjusted accordingly to keep block generation on pace, and checks for blocks generated clients violating the cap (and thus outpacing other clients by cheating) would be required, but these are matters solved with relative ease in the code.
