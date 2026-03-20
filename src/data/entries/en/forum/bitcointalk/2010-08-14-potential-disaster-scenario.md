---
title: "Potential disaster scenario"
date: 2010-08-14T03:43:54.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=813.msg9186#msg9186"
author: "gebler"
participants:
  - name: "gebler"
    slug: "gebler"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "gebler starts a discussion: Potential disaster scenario."
isSatoshi: false
threadId: "bt-potential-disaster-scenario"
threadPosition: 1
tags: []
---

The difficulty for generating bitcoins is periodically adjusted using a method
that has worked well this far.  However, I am afraid there are plausible
scenarios where the current method would misbehave quite spectacularly.

One scenario goes like this:

1) As bitcoins become more known, competition among minters continues to
    increase, with corresponding increases in difficulty.  The increased
    difficulty will eventually make bitcoin minting clearly unprofitable for
    those who do not have access to good energy prices and cheap access to an
    energy-efficient HW/SW combination.

2) Some bitcoin users may continue to mint bitcoins even though it is not
    profitable for them.  This could be due to ideology, the fun factor, or
    just ignorance.  But it is quite plausible that the vast majority of
    bitcoins will be minted by those who profit from it.  Let's say that 99% of
    all bitcoins are eventually minted by for-profit-minters.

3) The competition among for-profit-minters will drive profit margins down, to
    the point where it is profitable to continue minting, but barely so.  Let's
    say that the typical profit margin during one difficulty adjustment period
    (2016 blocks) is 10%.

4) Since bitcoin minting is a decentralized uncoordinated process, we can
    expect random fluctuations in bitcoin minting activity.  This does not
    affect the difficulty during a specific 2016-block period, so the minting
    activity can e.g. increase by 20% during a period without making minting
    unprofitable within that period.

Given the above assumptions, we now have a disaster at hand at the next
difficulty adjustment.  As bitcoin production was 20% more than target,
difficulty is adjusted upwards by 20%.  But the profit margin was only 10%, so
for-profit-minters would now lose money if they continued minting.  They will
therefore stop minting, and as they make up 99% of the minting capacity,
generating the next 2016 blocks will take 100 times longer than normal.
Everything that depends on block generation will slow to a crawl, and this
slowness will persist for a very long time, since the next 2016 blocks will
take 100 times longer to generate (almost 4 years rather than two weeks).

Now, if this was to happen, I guess a new client could be released that resets
the difficulty to some sensible number and started using a better algorithm
for difficulty adjustment.  But it would be much better to do it proactively
before it becomes a problem (perhaps with a predetermined "flag day"
activating the new algorithm at a certain time in the future, giving the new
client a chance to propagate).

A simple(?) modification of the algorithm would be to apply the adjustment
after a certain amount of time rather than at a certain block number.  The
switch could still be synced to take effect for the next block, so time
synchronization between clients would not need to be super exact to have the
vast majority of them agree on when the new difficulty is to be applied.

Also, the difficulty adjustment should probably take into account the
adjustments of the number of bitcoins minted per event (now 50, halved every 4
years).  Halving the number of bitcoins generated each time is equivalent to
doubling the difficulty as far as profitability is concerned, and such a
drastical drop in profitability is unnecessary if it can be avoided easily.
I'm not sure if the current adjustment algorithm already takes that into
account somehow, but I couldn't see any obvious adjustment for it in the
source code.
