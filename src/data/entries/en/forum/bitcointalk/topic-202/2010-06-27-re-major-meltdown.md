---
title: "Re: Major Meltdown"
date: 2010-06-27T19:06:09.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=202.msg1838#msg1838"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Major Meltdown\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/160/"
quotes:
  - id: "q1"
    person: "satoshi"
    date: "2010-06-14T11:39:50.000Z"
    sourceEntryId: "forum/bitcointalk/topic-191/2010-06-17-re-bitcoin-generation"
---

Here's an answer to a similar question about how to recover from a major meltdown.
[https://www.bitcoin.org/smf/index.php?topic=191.msg1585#msg1585](https://www.bitcoin.org/smf/index.php?topic=191.msg1585#msg1585)

<!-- quote: q1 -->
> If SHA-256 became completely broken, I think we could come to some agreement about what the honest block chain was before the trouble started, lock that in and continue from there with a new hash function.

If the hash breakdown came gradually, we could transition to a new hash in an orderly way.  The software would be programmed to start using a new hash after a certain block number.  Everyone would have to upgrade by that time.  The software could save the new hash of all the old blocks to make sure a different block with the same old hash can't be used.
