---
title: "Re: Need OP_BLOCKNUMBER to allow 'time' limited transactions"
date: 2010-11-15T18:37:44.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1786.msg22119#msg22119"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Need OP_BLOCKNUMBER to allow 'time' limited transactions\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/504/"
---

We can't safely do OP_BLOCKNUMBER.  In the event of a block chain reorg after a segmentation, transactions need to be able to get into the chain in a later block.  The OP_BLOCKNUMBER transaction and all its dependants would become invalid.  This wouldn't be fair to later owners of the coins who weren't involved in the time limited transaction.

nTimeLock does the reverse.  It's an open transaction that can be replaced with new versions until the deadline.  It can't be recorded until it locks.  The highest version when the deadline hits gets recorded.  It could be used, for example, to write an escrow transaction that will automatically permanently lock and go through unless it is revoked before the deadline.  The feature isn't enabled or used yet, but the support is there so it could be implemented later.
