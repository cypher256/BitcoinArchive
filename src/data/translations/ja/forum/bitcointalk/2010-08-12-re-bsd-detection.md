---
title: "Re: BSD detection"
date: 2010-08-12T00:02:06.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=790.msg8814#msg8814"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッドにおけるサトシ・ナカモトの返信 \"BSD detection\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/346/"
threadId: "bt-bsd-detection"
threadTitle: "BSD detection"
threadPosition: 1
translationStatus: pending
---

[Quote from: dkaparis on August 11, 2010, 11:00:16 PM](https://bitcointalk.org/index.php?topic=790.msg8807#msg8807)There is this piece of code in headers.h:

#ifdef __WXMAC_OSX__
#define __WXMAC__ 1
#define __WXOSX__ 1
#define __BSD__ 1
#endif
#endif

That code was a bad idea anyway, I'm deleting it.  Any Mac code should only use __WXMAC_OSX__, not __WXMAC__ or __WXOSX__, and we should stop using __BSD__.

Quote
#if (defined(__unix__) || defined(unix)) && !defined(USG)
#include <sys/param.h>
#endif

Will that definitely cause BSD to be defined on Mac?
