---
title: "Re: Cooperative mining"
date: 2010-11-28T16:03:30.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1976.msg25119#msg25119"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Cooperative mining\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/517/"
---

ribuck's description is spot on.

Pool operators can modify their getwork to take one additional parameter, the address to send your share to.

The easy way for the pool operator would be to wait until the next block is found and divy it up proportionally as:
user's near-hits/total near-hits from everyone

That would be easier and safer to start up.  It also has the advantage that multiple hits from the same user can be combined into one transaction.  A lot of your hits will usually be from the same people.

The instant gratification way would be to pay a fixed amount for each near-hit immediately, and the operator takes the risk from randomness of having more or less near-hits before a block is found. 

Either way, the user who submits the hit that solves the block should get an extra amount off the top, like 10 BTC.

New users wouldn't really even need the Bitcoin software.  They could download a miner, create an account on mtgox or mybitcoin, enter their deposit address into the miner and point it at anyone's pool server.  When the miner says it found something, a while later a few coins show up in their account.

Miner writers better make sure they never false-positive near-hits.  Users will depend on that to check if the pool operator is cheating them.  If the miner wrongly says it found something, users will look in their account, not find anything, and get mad at the pool operator.
