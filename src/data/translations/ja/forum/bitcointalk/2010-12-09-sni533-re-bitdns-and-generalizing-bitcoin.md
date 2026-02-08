---
title: "Re: BitDNS and Generalizing Bitcoin"
date: 2010-12-09T22:46:50.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1790.msg28715#msg28715"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッドにおけるサトシ・ナカモトの返信 \"BitDNS and Generalizing ビットコイン\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/533/"
threadId: "bt-bitdns-and-generalizing-bitcoin"
threadTitle: "BitDNS and Generalizing Bitcoin"
threadPosition: 2
translationStatus: pending
---

[Quote from: nanotube on December 09, 2010, 09:20:40 PM](https://bitcointalk.org/index.php?topic=1790.msg28700#msg28700)seems that the miner would have to basically do "extra work". and if there's no reward from the bitdns mining from the extra work (which of course, slows down the main bitcoin work), what would be a miner's incentive to include bitdns (and whatever other side chains) ?
The incentive is to get the rewards from the extra side chains also for the same work.

While you are generating bitcoins, why not also get free domain names for the *same work*?

If you currently generate 50 BTC per week, now you could get 50 BTC and some domain names too.

You have one piece of work.  If you solve it, it will solve a block from both Bitcoin and BitDNS.  In concept, they're tied together by a Merkle Tree.  To hand it in to Bitcoin, you break off the BitDNS branch, and to hand it in to BitDNS, you break off the Bitcoin branch.

In practice, to retrofit it for Bitcoin, the BitDNS side would have to have maybe ~200 extra bytes, but that's not a big deal.  You've been talking about 50 domains per block, which would dwarf that little 200 bytes per block for backward compatibility.  We could potentially schedule a far in future block when Bitcoin would upgrade to a modernised arrangement with the Merkle Tree on top, if we care enough about saving a few bytes.

Note that the chains are below this new Merkle Tree.  That is, each of Bitcoin and BitDNS have their own chain links inside their blocks.  This is inverted from the common timestamp server arrangement, where the chain is on top and then the Merkle Tree, because that creates one common master chain.  This is two timestamp servers not sharing a chain.
