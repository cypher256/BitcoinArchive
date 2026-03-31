---
title: "BSD detection"
date: 2010-08-11T14:00:16.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=790.msg8807#msg8807"
author: "dkaparis"
participants:
  - name: "dkaparis"
    slug: "dkaparis"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "dkaparis starts a discussion: BSD detection."
isSatoshi: false
threadId: "bt-bsd-detection"
tags: []
---

There is this piece of code in headers.h:

#ifdef __WXMAC_OSX__
#define __WXMAC__ 1
#define __WXOSX__ 1
#define __BSD__ 1
#endif
#endif

In my testing it's not caught on FreeBSD 8.1

I propose it be changed to:

#if (defined(__unix__) || defined(unix)) && !defined(USG)
#include <sys/param.h>
#endif

And then checks for BSD should be
#ifdef BSD
This is the recommended way of detecting BSD in the [FreeBSD Porter's Handbook](http://www.freebsd.org/doc/en/books/porters-handbook/porting-versions.html).

This change is already done in my CMake tree.
