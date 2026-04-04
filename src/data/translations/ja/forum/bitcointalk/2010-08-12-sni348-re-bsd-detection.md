---
title: "Re: BSD検出"
date: 2010-08-12T21:14:20.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=790.msg8919#msg8919"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがSVN rev 130でBSD検出コードを更新し、コンパイル確認を依頼。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/348/"
translationStatus: complete
---

SVN rev 130に入っている。正しくコンパイルされるか確認してほしい。

Code:#if (defined(__unix__) || defined(unix)) && !defined(USG)
#include <sys/param.h>  // BSD定義を取得するため
#endif
#ifdef __WXMAC_OSX__
#ifndef BSD
#define BSD 1
#endif
#endif
