---
title: "checkpointing the block chain"
date: 2010-08-16T00:40:23.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=834.msg9712#msg9712"
author: "mkrogh"
participants:
  - name: "mkrogh"
    slug: "mkrogh"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "mkrogh starts a discussion: checkpointing the block chain."
isSatoshi: false
tags: []
---

Hi

I think it is a problem that you can never really trust that the chain will not be massively invalidated, and replaced by a longer one.

This is an issue for all but the largest instances of bitcoin. A global widespread bitcoin system wouldn't have this issue, but anyone else would.

If a small country, say Luxembourg, started a bitcoin instance for  themselves, they would never know if the German or French government would be hiding a longer chain, 
just in case.

If a large bank wanted to disturb the current bitcoin system, they could just spend more CPU power than the current system, start from scratch and generate a completely new chain. They could intervene at any point including the beginning. All work so far would be invalidated.  

If a village wanted a small local payment system, they would constantly be in danger of attacks. The mafia could execute a lot of double spending, and then suddenly arrive with a long chain that invalidated all their payments, even though the merchants thought they had acquired the coins.

Anyone, bar the largest most high powered instances of bitcoin, will have this constant threat hanging over them. 

The issue appears with network splits as well. After rejoining, one part completely ruins the other part, especially for coins that were present on both sides of the split to start with.

I think, there should be some guarantee that the chain will not be invalidated further back in time than a day, a month, or 100 blocks or whatever. 

This problem is related to the problem of how many blocks you want to see before accept a payment (double spending problem). Satoshi has a calculation of this in the 
pdf file. However, you need to know the CPU power of the visible honest part relative to the other part (p and q). The problem is that you never know how large the dishonest, or invisible, part is, because it can be hidden as long it wants to. Or it can be formed in the future. You never know.

What about this proposal? A node checkpoints blocks that are older than some threshold. The threshold could be a difficulty weighted block count, say a 100 blocks of 8 zero 
bits. If a node receives a block chain that requires changing something that is older than its checkpoint, it refuses the chain. Each node would have its own checkpoint. But the honest nodes would be close. Their deviation would be small compared to the size of the threshold (100 blocks). 

What would happen when two nodes disagree further back in time than the threshold of one of them. They should be considered forked currencies. One currency became two. 
So the village, or Luxembourg, could ignore a hidden outside world, except for the very last part of the block chain.

The small village could use a very low threshold. The latency within the village is milliseconds. The could have block generation every 10 seconds. They could have a threshold of 5 blocks for instance. There is no valid reason, for a node, to stay hidden for that long in the village. If a computer loses its connection, it will just download the chain when it get online again; if it will tries to push a long block chain down the throat of the rest of the village, it has effectively created a new currency for itself.
