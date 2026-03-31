---
title: "Re: 1.3ほぼ完成"
date: 2010-06-27T15:30:13.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=199.msg1834#msg1834"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「1.3ほぼ完成」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/159/"
threadId: "bt-1-3-almost-ready"
translationStatus: complete
---

MinGWにはまだ古くて安定した3.4.5しかない。更新する大きな理由はない。

3.4.5でコンパイルされたSHAの逆アセンブリを見た時、改善の余地がまったく見当たらなかった。さらに8%をどうやって絞り出せるのか想像がつかない。Windowsの方が8%多くオーバーヘッドがある可能性はあるか？システムコールなどは行わず、純粋にビジーな計算コードだけで、タスクスイッチングやその他のハウスキーピング処理がそれだけ奪うことはあるだろうか？
