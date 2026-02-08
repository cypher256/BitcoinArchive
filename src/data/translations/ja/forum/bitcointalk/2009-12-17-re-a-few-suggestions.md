---
title: "Re: いくつかの提案"
date: 2009-12-17T18:38:06.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg77#msg77"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「いくつかの提案」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/26/"
threadId: "bt-a-few-suggestions"
threadTitle: "A few suggestions"
threadPosition: 8
translationStatus: complete
---

良いですね、FreeBSDで正常に動作していますか？

headers.hへの変更をコミットしました。一貫性のため、__BSD__を使用しました。定義の完全なリストは[http://docs.wxwidgets.org/stable/wx_cppconst.html](http://docs.wxwidgets.org/stable/wx_cppconst.html)にあります。
#ifdef __BSD__
#include <netinet/in.h>
#endif

malloc.hはWindowsでのみ必要なので、これ以上問題を起こさないように__WXMSW__セクションに移動します。
