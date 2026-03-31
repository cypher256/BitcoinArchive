---
title: "Re: いくつかの提案"
date: 2009-12-17T18:38:06.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg77#msg77"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「いくつかの提案」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/26/"
threadId: "bt-a-few-suggestions"
translationStatus: complete
---

良いな、FreeBSDで正常に動作しているか？

headers.hへの変更をコミットした。一貫性のため、__BSD__を使用した。定義の完全なリストは[http://docs.wxwidgets.org/stable/wx_cppconst.html](http://docs.wxwidgets.org/stable/wx_cppconst.html)にある。
#ifdef __BSD__
#include <netinet/in.h>
#endif

malloc.hはWindowsでのみ必要なので、これ以上問題を起こさないように__WXMSW__セクションに移動する。
