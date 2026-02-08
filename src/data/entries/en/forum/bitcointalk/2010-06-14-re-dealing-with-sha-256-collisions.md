---
title: "Re: Dealing with SHA-256 Collisions"
date: 2010-06-14T20:39:50.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=191.msg1585#msg1585"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Dealing with SHA-256 Collisions\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/119/"
threadId: "bt-dealing-with-sha-256-collisions"
threadTitle: "Dealing with SHA-256 Collisions"
threadPosition: 2
---

SHA-256 is very strong.  It's not like the incremental step from MD5 to SHA1.  It can last several decades unless there's some massive breakthrough attack.

If SHA-256 became completely broken, I think we could come to some agreement about what the honest block chain was before the trouble started, lock that in and continue from there with a new hash function.

If the hash breakdown came gradually, we could transition to a new hash in an orderly way.  The software would be programmed to start using a new hash after a certain block number.  Everyone would have to upgrade by that time.  The software could save the new hash of all the old blocks to make sure a different block with the same old hash can't be used.
