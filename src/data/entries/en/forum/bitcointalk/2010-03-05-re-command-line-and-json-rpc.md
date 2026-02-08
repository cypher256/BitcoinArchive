---
title: "Re: Command Line and JSON-RPC"
date: 2010-03-05T01:46:25.000Z
source: bitcointalk
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
threadId: "bt-command-line-and-json-rpc"
threadTitle: "Command Line and JSON-RPC"
threadPosition: 7
---

[Quote from: sirius-m on February 24, 2010, 06:17:35 PM](https://bitcointalk.org/index.php?topic=63.msg502#msg502)This is strange... When I start Bitcoin as a daemon on my 64 bit Linux server, it eats up all the 250MB of remaining RAM, 700MB of swap and eventually crashes. On my 32 bit Ubuntu desktop, it works fine and stays at 15MB of memory usage. The server is running a 64 bit build of Bitcoin. Maybe there's something wrong with the build or something.
sirius-m debugged this, it was 64-bit related.  

The fix is now available on SVN, file util.cpp.
