---
title: "Re: Source code documentation"
date: 2010-07-16T15:37:00.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=393.msg3510#msg3510"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Source code documentation\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/215/"
---

I like that in libraries for the external API's, but you can probably tell from the code that I'm not a fan of it for interior functions.  Big obligatory comment headers for each function space out the code and make you hesitate about creating a small little function where the comment header would be bigger than the function.  They're some trouble for maintenance, as changes to the function then require duplicate changes in the comment header.  I like to keep code compact so you can see more code on the screen at once.

To add them now at this point, what would be written would just be what's obvious from looking at the function.

The external API we have, in rpc.cpp, the usage documentation is in the help string.

Sorry to be a wet blanket.
