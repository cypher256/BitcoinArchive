---
title: "Re: Command Line and JSON-RPC"
date: 2010-03-05T01:46:25.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=63.msg633#msg633"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Command Line and JSON-RPC\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/89/"
quotes:
  - id: "q1"
    person: "sirius-m"
    date: "2010-02-24T09:17:35.000Z"
---

<!-- quote: q1 -->
> This is strange... When I start Bitcoin as a daemon on my 64 bit Linux server, it eats up all the 250MB of remaining RAM, 700MB of swap and eventually crashes. On my 32 bit Ubuntu desktop, it works fine and stays at 15MB of memory usage. The server is running a 64 bit build of Bitcoin. Maybe there's something wrong with the build or something.

sirius-m debugged this, it was 64-bit related.  

The fix is now available on SVN, file util.cpp.
