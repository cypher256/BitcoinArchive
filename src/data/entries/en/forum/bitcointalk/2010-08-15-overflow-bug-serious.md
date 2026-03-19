---
title: "overflow bug SERIOUS"
date: 2010-08-15T10:04:11.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9494#msg9494"
author: "lfm"
participants:
  - name: "lfm"
    slug: "lfm"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "lfm starts a discussion: overflow bug SERIOUS."
isSatoshi: false
threadId: "bt-overflow-bug-serious"
threadPosition: 1
tags: []
---

seems a block at height 74638 has expoited a bug in the net. It uses an integer overflow to make a negative total transaction. The two transaction outputs are: 

 out Value:92233720368.54(7ffffffffff85ee0) out Value:92233720368.54(7ff
ffffffff85ee0)

We need a fix asap

Edit: 
(satoshi)
0.3.10 patch download links here:
[http://bitcointalk.org/index.php?topic=827.0](http://bitcointalk.org/index.php?topic=827.0)
