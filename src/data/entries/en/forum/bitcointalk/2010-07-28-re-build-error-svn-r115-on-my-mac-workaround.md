---
title: "Re: Build error SVN r115 on my Mac: workaround"
date: 2010-07-28T21:23:23.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=604.msg6273#msg6273"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Build error SVN r115 on my Mac: workaround\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/285/"
---

Was that the only thing I broke in the OSX build?!  Does it actually work after just that one change?

I had to do that for makefile.vc also.  It compiled, but SHA-256 didn't work correctly; it returned the same incorrect hash each time.

We'll disable it now, and if anyone figures out how to fix it, we can re-enable it then.  It's still 1.7x faster from the midstate optimisation.

The Crypto++ ASM SHA-256 works with GCC on Linux and Windows (MinGW).

I uploaded this makefile.osx change to SVN.  (let me know if that compiles now)
