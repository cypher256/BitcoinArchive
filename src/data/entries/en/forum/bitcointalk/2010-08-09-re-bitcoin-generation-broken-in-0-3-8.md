---
title: "Re: bitcoin generation broken in 0.3.8?"
date: 2010-08-09T18:50:41.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=753.msg8388#msg8388"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"bitcoin generation broken in 0.3.8?\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/331/"
---

I found that SSE2 only added a slight 2% speedup, which didn't seem worth the incompatibility.  I was trying to take the safer option.

It doesn't look to me like Crypto++ could be deciding whether to use SSE2 at runtime.  There's one place where it detects SSE2 for deciding some block count parameter, but the SSE2 stuff is all #ifdef at compile time and I can't see how that would switch at runtime.  Maybe I'm not looking in the right place.

Should we enable SSE2 in all the makefiles?  It seems like we must in case someone compiles with 64-bit.

I will recompile the 64-bit part of the Linux 0.3.8 release.
