---
title: "Re: リソースの大量消費"
date: 2010-07-14T16:29:39.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=327.msg2871#msg2871"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「リソースの大量消費」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/179/"
threadId: "bt-resource-hog"
threadPosition: 1
translationStatus: complete
---

Windowsでは、タスクマネージャーでプロセスを選択し、右クリックして「優先度の設定」を選ぶ。「通常以下」または「低」に設定してほしい。ただし、それで違いは出ないはずだ。

コインの生成をオフにすると、CPU使用率は平坦になるか？そうであれば、消費しているCPU時間はすべて生成によるものであることが確認でき、生成はすでにアイドル優先度になっている。

同時に実行しているものが多すぎてメモリが不足しているために遅いだけかもしれない。あるものから別のものに切り替える時、ディスクからページインする必要がある。
