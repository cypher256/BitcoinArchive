---
title: "Re: 警告：システムを確認してください（助けてください）"
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
translationStatus: complete
quotes:
  - id: "q1"
    person: "Cdecker"
    personSlug: "cdecker"
    date: "2010-09-19T11:14:08.000Z"
---

理解できないのだが、このプログラムがシステム時計を設定するという認識をお持ちなのだろうか？そのようなことはしない。

<!-- quote: q1 -->
<!-- tone-skip -->
> システム時刻を設定するのはダメだということには全員が同意していると思うが、内部的にオフセットを使って問題全体を回避することはできないのだろうか？ クライアントを（おおよそ）同期させる方法はすでにあるのだから、それを活用すればいいのではないか？
<!-- /tone-skip -->

他のノードの時刻の中央値に基づく内部オフセットを使用しているが、セキュリティ上の理由から、1時間以上のオフセットは許可していない。1時間以上ずれていることが示された場合は、ユーザーに時計を修正するよう警告する。
