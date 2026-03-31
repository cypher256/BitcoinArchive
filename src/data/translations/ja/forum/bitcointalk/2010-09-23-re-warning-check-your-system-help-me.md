---
title: "Re: 警告: システムを確認してください（助けてください）"
date: 2010-09-23T16:28:25.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=960.msg13833#msg13833"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「警告: システムを確認してください（助けてください）」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/459/"
threadId: "bt-warning-check-your-system-help-me"
threadPosition: 4
translationStatus: complete
---

理解できないのだが、このプログラムがシステム時計を設定するという認識をお持ちなのだろうか？そのようなことはしない。

> [Quote from: Cdecker on September 19, 2010, 08:14:08 PM](https://bitcointalk.org/index.php?topic=960.msg13212#msg13212)
> クライアントを（おおよそ）同期する方法はすでにあるのだから、それを活用しないのはなぜですか？

他のノードの時刻の中央値に基づく内部オフセットを使用しているが、セキュリティ上の理由から、1時間以上のオフセットは許可していない。1時間以上ずれていることが示された場合は、ユーザーに時計を修正するよう警告する。
