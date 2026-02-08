---
title: "Re: Dealing with SHA-256 Collisions"
date: 2010-06-14T20:39:00Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=191.msg1585#msg1585"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi explains why SHA-256 collisions are not a practical concern for Bitcoin, describing the immense computational difficulty involved."
isSatoshi: true
tags:
  - "sha-256"
  - "security"
  - "cryptography"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/103/"
threadId: "bt-dealing-with-sha-256-collisions"
threadTitle: "Dealing with SHA-256 Collisions"
threadPosition: 1
---

SHA-256 is very strong. It's not like the incremental step from MD5 to SHA1. It can last several decades unless there's some massive breakthrough.

If SHA-256 became completely broken, I think we could come to some agreement about what the honest block chain was before the trouble started, lock that in and continue from there with a new hash function.

If the hash breakdown came gradually, we could transition to a new hash in an orderly way. The software would be programmed to start using a new hash after a certain block number. Everyone would have to upgrade by that time. The software could save the new hash of all old blocks to make sure a different block with the same old hash can't be used.
