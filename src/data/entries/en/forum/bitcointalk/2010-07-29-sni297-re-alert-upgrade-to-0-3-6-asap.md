---
title: "Re: *** ALERT *** Upgrade to 0.3.6 ASAP!"
date: 2010-07-29T23:12:12.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=626.msg6542#msg6542"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"*** ALERT *** Upgrade to 0.3.6 ASAP!\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/297/"
---

[Quote from: lachesis on July 29, 2010, 10:14:36 PM](https://bitcointalk.org/index.php?topic=626.msg6515#msg6515)On Debian testing 32-bit, I get a few build errors, all resembling:
Code:script.cpp:114: error: OP_NOP1 was not declared in this scopeI got these when attempting to "make bitcoind" without "make clean" or "make" first. It looks like the bitcoind build instructions don't compile the headers first, but they also don't delete the headers.h.gch, so the old headers are used if present.

If anyone else gets this error, the simplest solution is to "make clean" and retry the build.
We don't really need pre-compiled header.  It only makes it compile slightly faster.  I think I'll just get rid of it.  Even still, you'd still need to remember to "make -f makefile.unix clean" or delete headers.h.gch one more time to get rid of the leftover file.

Damn that GLIBC_2.11.  I thought I'd been careful not to accept any of the updates.
