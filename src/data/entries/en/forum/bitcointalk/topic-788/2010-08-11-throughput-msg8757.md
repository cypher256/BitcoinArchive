---
title: "Where is the separate discussion devoted to possible Bitcoin weaknesses."
date: 2010-08-11T15:45:42.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=788.msg8757#msg8757"
author: "throughput"
participants:
  - name: "throughput"
    slug: "throughput"
description: "Thread starter by throughput in BitcoinTalk topic 788."
isSatoshi: false
tags: []
---

Just to be able to ask "What if ...?" and have all ideas collected in one place.

For example.

It seems, that a generating node does not need to receive all that transactions at all.
The only data it needs is the previous block hash.
Right?

Next.
It is possible to connect to almost every publicly accessible node, right?
We can collect their addresses and establish connections to almost all of them.
And send them all the data we want.
Like fake (or not so) transactions in huge volumes.
What if it is possible to throttle their generating capability by forcing them to receive and verify
very large amounts of (possibly invalid) transactions (or perhaps another trash)?

If that is true, then we can lower the difficulty, right?
Just do this for a long period of time.
When it lowers to an acceptable for our supercomputer (botnet) value,
we may connect it to the network, but not directly.
Connect it via special node, that does forward messages in a special way, to filter the trash data we are still flooding.
So, the supercomputer will receive the blocks and will participate in generation, the others will be flooded and will get
only a small portion of generated BTCs.

Then, if we are not interested in generated BTCs, we may start generating a blockchain fork.
Immediately after the difficulty drops, we start to generate alternative version of blockchain in a isolated environment.
Since difficulty does not change immediately, we can try to outperform the rest of the network, while they are chewing our
trash data. Fast enough we present everybody with the longest chain, but then the difficulty raises back.
By doing this  it is possible to wipe our previous spend transactions, if they are made after the blockchain fork.
So, is it possible that we recover them and get back unspent transactions? And spend them again?
How will previous transactions incorporate into the new blockchain if they were "respent" in that manner?

And then it can be repeated.
If I'm wrong, just say: "you are wrong".
But you may also give me a hint why.
