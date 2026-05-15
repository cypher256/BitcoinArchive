---
title: "Re: BSD 検出"
date: 2010-08-12T00:02:06.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=790.msg8814#msg8814"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトが__BSD__の使用を廃止し、sys/param.h を使用するよう変更。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/346/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "dkaparis"
    personSlug: "dkaparis"
    date: "2010-08-11T14:00:16.000Z"
    sourceEntryId: "forum/bitcointalk/topic-790/2010-08-11-bsd-detection"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> headers.h に以下のコードがある：
<!-- /tone-skip -->

そのコードはそもそもよくないアイデアだったので、削除する。Mac 用のコードは__WXMAC_OSX__のみを使用すべきで、__WXMAC__や__WXOSX__は使わず、__BSD__の使用もやめるべきだ。

```
#if (defined(__unix__) || defined(unix)) && !defined(USG)
#include <sys/param.h>
#endif
```

これで Mac で BSD が確実に定義されるだろうか？
