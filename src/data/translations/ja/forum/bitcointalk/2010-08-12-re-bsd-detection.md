---
title: "Re: BSD検出"
date: 2010-08-12T00:02:06.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=790.msg8814#msg8814"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトが__BSD__の使用を廃止し、sys/param.hを使用するよう変更。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/346/"
threadId: "bt-bsd-detection"
translationStatus: complete
---

> [Quote from: dkaparis on August 11, 2010, 11:00:16 PM](#msg8807)
> headers.hにこのコードがある：

#ifdef __WXMAC_OSX__
#define __WXMAC__ 1
#define __WXOSX__ 1
#define __BSD__ 1
#endif
#endif

そのコードはそもそもよくないアイデアだったので、削除する。Mac用のコードは__WXMAC_OSX__のみを使用すべきで、__WXMAC__や__WXOSX__は使わず、__BSD__の使用もやめるべきだ。

Quote
#if (defined(__unix__) || defined(unix)) && !defined(USG)
#include <sys/param.h>
#endif

これでMacでBSDが確実に定義されるだろうか？
