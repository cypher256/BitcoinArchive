---
title: "Re: 0.3 ほぼ完成 — Mac バージョンをテストしてください！"
date: 2010-06-25T14:10:06.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=199.msg1769#msg1769"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「0.3 ほぼ完成」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/146/"
translationStatus: complete
---

virtualcoin さん、ありがとう。完璧な比較だ。

32 ビット Windows（2310k）から 32 ビット Linux（2500k）への 8%の速度向上は、おそらく Linux 上の新しいバージョンの GCC（4.4.3 vs 3.4.5）によるものだ。

32 ビットから 64 ビット Linux への 15%の速度向上はもっと謎だ。コードは完全に 32 ビットだ。

うーん、x86-64 で追加された 8 つの追加レジスターが効いているのだと思う。16 の状態変数のほとんどをレジスターに保持できれば、SHA にとって大きな違いになるだろう。
