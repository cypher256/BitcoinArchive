---
title: "Re: BSD detection"
date: 2010-08-12T00:02:06.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=790.msg8814#msg8814"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"BSD detection\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/346/"
quotes:
  - id: "q1"
    person: "dkaparis"
    personSlug: "dkaparis"
    date: "2010-08-11T14:00:16.000Z"
---

<!-- quote: q1 -->
> There is this piece of code in headers.h:
>
> ```
> #ifdef __WXMAC_OSX__
> #define __WXMAC__ 1
> #define __WXOSX__ 1
> #define __BSD__ 1
> #endif
> #endif
> ```

That code was a bad idea anyway, I'm deleting it.  Any Mac code should only use __WXMAC_OSX__, not __WXMAC__ or __WXOSX__, and we should stop using __BSD__.

```
#if (defined(__unix__) || defined(unix)) && !defined(USG)
#include <sys/param.h>
#endif
```

Will that definitely cause BSD to be defined on Mac?
