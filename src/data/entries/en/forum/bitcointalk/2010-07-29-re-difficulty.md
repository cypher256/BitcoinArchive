---
title: "Re: Difficulty"
date: 2010-07-29T01:16:23.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=587.msg6301#msg6301"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Difficulty\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/286/"
---

You were looking at the wrong code.  Here's the code that applies:

Code:bool CBlock::CheckBlock() const
{
...
    // Check timestamp
    if (nTime > GetAdjustedTime() + 2 * 60 * 60)
        return error("CheckBlock() : block timestamp too far in the future");
...

bool CBlock::AcceptBlock()
{
   ...
    // Check timestamp against prev
    if (nTime <= pindexPrev->GetMedianTimePast())
        return error("AcceptBlock() : block's timestamp is too early");

The timestamp is limited to up to 2 hours in the future.  It can be earlier than the previous block, but it must be greater than the median of the last 11 blocks.  The reason for doing it that way is so the time can get corrected in the next block if the previous block had the time too far in the future, like what happened.
