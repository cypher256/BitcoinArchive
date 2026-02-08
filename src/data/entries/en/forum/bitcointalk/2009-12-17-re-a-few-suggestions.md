---
title: "Re: A few suggestions"
date: 2009-12-17T18:38:06.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg77#msg77"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"A few suggestions\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/26/"
---

That's good, is it running fine on FreeBSD?

I committed the changes to headers.h.  For consistency, I used __BSD__.  The complete list of defines is at [http://docs.wxwidgets.org/stable/wx_cppconst.html](http://docs.wxwidgets.org/stable/wx_cppconst.html)
#ifdef __BSD__
#include <netinet/in.h>
#endif

malloc.h is only needed on windows, I'll move that into the __WXMSW__ section before it causes any more trouble.
