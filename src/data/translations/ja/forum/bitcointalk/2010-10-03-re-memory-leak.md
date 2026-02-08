---
title: "Re: メモリリーク"
date: 2010-10-03T22:07:00.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1023.msg15150#msg15150"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「メモリリーク」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/481/"
threadId: "bt-memory-leak"
threadTitle: "Memory leak"
threadPosition: 2
translationStatus: complete
---

自分自身に接続しています。21回の接続試行すべてがバージョン31300（0.3.13）のノードに対するものでした。まだ全員が0.3.13にしているわけではありません。

IRCは機能しているようです。他に試すべきノードがあるはずです。

切断後すぐに自分自身への接続を再試行しないようにする必要があるかもしれません。ただ、なぜそうなっているのかわかりません。nLastTryをリセットしてキューの後ろに回すはずなのですが、ログには表示されていません。

addr.datを別の場所に移動してみてください。その中に何か問題があるかもしれません。

-addnodeを使用していますか？
