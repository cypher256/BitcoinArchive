---
title: "BSD検出"
date: 2010-08-11T14:00:16.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=790.msg8807#msg8807"
author: "dkaparis"
participants:
  - name: "dkaparis"
    slug: "dkaparis"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "dkaparisがスレッドを開始: BSD検出"
isSatoshi: false
threadId: "bt-bsd-detection"
threadPosition: 1
tags: []
translationStatus: complete
---

headers.hに以下のコードがある：

#ifdef __WXMAC_OSX__
#define __WXMAC__ 1
#define __WXOSX__ 1
#define __BSD__ 1
#endif
#endif

私のテストでは、FreeBSD 8.1で検出されなかった。

以下のように変更することを提案する：

#if (defined(__unix__) || defined(unix)) && !defined(USG)
#include <sys/param.h>
#endif

そしてBSDの検出は以下のようにすべきである：
#ifdef BSD
これは[FreeBSD Porter's Handbook](http://www.freebsd.org/doc/en/books/porters-handbook/porting-versions.html)で推奨されているBSD検出方法である。

この変更は既に私のCMakeツリーで実施済みである。
