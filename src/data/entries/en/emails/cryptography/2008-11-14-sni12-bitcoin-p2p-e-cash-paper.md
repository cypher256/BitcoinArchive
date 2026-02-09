---
title: "Bitcoin P2P e-cash paper"
date: 2008-11-14T18:55:35Z
source: cryptography-mailing-list
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014853.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Hal Finney"
    slug: "hal-finney"
description: "Satoshi explains that only the current best branch's pending-transaction pool needs to be maintained, discusses TCP reliability for block propagation, and notes the system aligns with libertarian principles."
threadId: "bitcoin-p2p-e-cash-paper"
threadTitle: "Bitcoin P2P e-cash paper"
threadPosition: 25
isSatoshi: true
tags:
  - "pending-transactions"
  - "networking"
  - "tcp"
  - "libertarian"
  - "incentives"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/12/"
---

Hal Finney wrote:
> I think it is necessary that nodes keep a separate
> pending-transaction list associated with each candidate chain.
> ... One might also ask ... how many candidate chains must
> a given node keep track of at one time, on average?

Fortunately, it's only necessary to keep a pending-transaction pool for the current best branch.  When a new block arrives for the best branch, ConnectBlock removes the block's transactions from the pending-tx pool.  If a different branch becomes longer, it calls DisconnectBlock on the main branch down to the fork, returning the block transactions to the pending-tx pool, and calls ConnectBlock on the new branch, sopping back up any transactions that were in both branches.  It's expected that reorgs like this would be rare and shallow.

With this optimisation, candidate branches are not really any burden.  They just sit on the disk and don't require attention unless they ever become the main chain.

> Or as James raised earlier, if the network broadcast
> is reliable but depends on a potentially slow flooding
> algorithm, how does that impact performance?

Broadcasts will probably be almost completely reliable.  TCP transmissions are rarely ever dropped these days, and the broadcast protocol has a retry mechanism to get the data from other nodes after a while.  If broadcasts turn out to be slower in practice than expected, the target time between blocks may have to be increased to avoid wasting resources.  We want blocks to usually propagate in much less time than it takes to generate them, otherwise nodes would spend too much time working on obsolete blocks.

I'm planning to run an automated test with computers randomly sending payments to each other and randomly dropping packets.

> 3. The bitcoin system turns out to be socially useful and valuable, so
> that node operators feel that they are making a beneficial contribution
> to the world by their efforts (similar to the various "@Home" compute
> projects where people volunteer their compute resources for good causes).
>
> In this case it seems to me that simple altruism can suffice to keep the
> network running properly.

It's very attractive to the libertarian viewpoint if we can explain it properly.  I'm better with code than with words though.

Satoshi Nakamoto

---------------------------------------------------------------------
The Cryptography Mailing List
Unsubscribe by sending "unsubscribe cryptography" to majordomo at metzdowd.com
