---
title: "Assertion Failure - Ubuntu Lucid"
date: 2010-07-15T19:30:15.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=400.msg3384#msg3384"
author: "singpolyma"
participants:
  - name: "singpolyma"
    slug: "singpolyma"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "singpolyma starts a discussion: Assertion Failure - Ubuntu Lucid."
isSatoshi: false
threadId: "bt-assertion-failure-ubuntu-lucid"
threadPosition: 1
tags: []
---

I'm running Ubuntu Lucid (32 bit), all packages up to date.  I had run bitcoin 0.2 previously, and just downloaded 0.3.  I ran bitcoind and I got:

bitcoin: main.cpp:823: unsigned int GetNextWorkRequired(const CBlockIndex*): Assertion `pindexFirst' failed.
Aborted

So I ran the bitcoin GUI, and it came up and showed my existing coins, but quickly gave me the same error and died.  Then I went back and ran the 0.2 GUI again and I get:

bitcoin: main.cpp:743: unsigned int GetNextWorkRequired(const CBlockIndex*): Assertion `pindexFirst' failed.
Aborted

Has my db got corrupted?  Do I have a broken dependancy?

I tried to build 0.3 from source but got many errors, probably missing some *-dev packages.  Will look at that more later.
