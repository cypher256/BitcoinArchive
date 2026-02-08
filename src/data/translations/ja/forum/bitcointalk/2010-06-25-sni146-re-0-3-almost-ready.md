---
title: "返信: 0.3ほぼ完成"
date: 2010-06-25T14:10:06.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=199.msg1769#msg1769"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「0.3ほぼ完成」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/146/"
threadId: "bt-0-3-almost-ready"
threadTitle: "0.3 almost ready"
threadPosition: 8
translationStatus: complete
---

virtualcoinさん、ありがとうございます。完璧な比較です。

32ビットWindows（2310k）から32ビットLinux（2500k）への8%の速度向上は、おそらくLinux上の新しいバージョンのGCC（4.4.3 vs 3.4.5）によるものです。

32ビットから64ビットLinuxへの15%の速度向上はもっと謎です。コードは完全に32ビットです。

うーん、x86-64で追加された8つの追加レジスタが効いているのだと思います。16の状態変数のほとんどをレジスタに保持できれば、SHAにとって大きな違いになるでしょう。
