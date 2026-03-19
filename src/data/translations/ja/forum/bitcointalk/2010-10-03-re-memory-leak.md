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
threadPosition: 3
translationStatus: complete
---

自分自身に接続している。21回の接続試行すべてがバージョン31300（0.3.13）のノードに対するものだった。まだ全員が0.3.13にしているわけではない。

IRCは機能しているようだ。他に試すべきノードがあるはずだ。

切断後すぐに自分自身への接続を再試行しないようにする必要があるかもしれない。ただ、なぜそうなっているのかわからない。nLastTryをリセットしてキューの後ろに回すはずだが、ログには表示されていない。

addr.datを別の場所に移動してみてくれ。その中に何か問題があるかもしれない。

-addnodeを使用しているか？
