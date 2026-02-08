---
title: "Re: BSD detection"
date: 2010-08-12T21:14:20.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=790.msg8919#msg8919"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"BSD detection\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/348/"
threadId: "bt-bsd-detection"
threadTitle: "BSD detection"
threadPosition: 2
---

This is in SVN rev 130.  Check that it compiles right.

Code:#if (defined(__unix__) || defined(unix)) && !defined(USG)
#include <sys/param.h>  // to get BSD define
#endif
#ifdef __WXMAC_OSX__
#ifndef BSD
#define BSD 1
#endif
#endif
