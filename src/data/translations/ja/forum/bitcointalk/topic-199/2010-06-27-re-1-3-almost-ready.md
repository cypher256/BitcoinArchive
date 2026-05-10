---
title: "Re: 0.3 ほぼ完成 — Mac バージョンをテストしてください！"
date: 2010-06-27T15:30:13.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=199.msg1834#msg1834"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「1.3 ほぼ完成」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/159/"
translationStatus: complete
---

MinGW にはまだ古くて安定した 3.4.5 しかない。更新する大きな理由はない。

3.4.5 でコンパイルされた SHA の逆アセンブリを見た時、改善の余地がまったく見当たらなかった。さらに 8%をどうやって絞り出せるのか想像がつかない。Windows の方が 8%多くオーバーヘッドがある可能性はあるか？システムコールなどは行わず、純粋にビジーな計算コードだけで、タスクスイッチングやその他のハウスキーピング処理がそれだけ奪うことはあるだろうか？
