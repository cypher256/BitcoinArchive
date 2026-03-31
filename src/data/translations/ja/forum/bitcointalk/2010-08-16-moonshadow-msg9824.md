---
title: "Re: checkpointing the block chain"
date: 2010-08-16T21:15:03.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=834.msg9824#msg9824"
author: "MoonShadow"
participants:
  - name: "MoonShadow"
    slug: "moonshadow"
description: "Context post by MoonShadow in BitcoinTalk topic 834. before msg9843."
isSatoshi: false
threadId: "bt-checkpointing-the-block-chain"
tags: []
translationStatus: pending
---

> [Quote from: mkrogh on August 16, 2010, 08:54:47 PM](https://bitcointalk.org/index.php?topic=834.msg9822#msg9822)
> The software could just declare that there is a checkpoint 1000 blocks back. This is an individual checkpoint for each node, and the checkpoints would move forward every time a new block arrives. The checkpoint could never move backwards.
> 
> If a longer chain, predating the checkpoint arrived, the node would reject it.

Rather than reject it, it could save a backup of the original and accept the new chain tentitively if it's moving back more than, say, two weeks.  So about 2000 blocks.  And it could also notify the user that it has a new blockchain that reports a reversal of fortune so far back, and give the user the chance to find out about it before accepting the new blockchain.  Odds are that if the user doesn't know what is happening, he soon will since every other user paying attention at the time will also know there is something to look into.  Bitcoin is a very well automated system, but absolute automation is not often wise.  Talented support needs to know that something is broken asap.  This is another example of a 'watchdog' process and/or function that could add security to the network.  I think that, even though this should have been submitted to the test network, the release of this mal-formed transaction has highlighted an issue fairly early in the lifespan of Bitcoin.  Which allowed the small community to respond to it quickly and effectively.  This would become much harder to do in the future, if many people start using it, since most of them will not be programmers, and many won't be paing the level of attention to the client as the beta system currently needs.
