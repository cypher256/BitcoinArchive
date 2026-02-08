---
title: "Re: Win7 64bit 前回のパッチ火曜日以降クラッシュする"
date: 2010-10-25T17:27:47.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1540.msg18511#msg18511"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「Win7 64bit 前回のパッチ火曜日以降クラッシュする」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/499/"
threadId: "bt-win7-64bit-since-last-patch-tues-now-crashes"
threadTitle: "Win7 64bit since last patch Tues now crashes"
threadPosition: 2
translationStatus: complete
---

思いつくのは、他のバージョンのmingwm10.dllを入手できないか確認することだけです。mingwm10.dllはMinGWコンパイラに付属する小さなDLLで、マルチスレッド用にビルドする際に必要です。正確に何をしているかはわかりませんが、おそらく「はいWindows、あなたが要求した通りDLL内にいますよ」というようなことを言っているだけでしょう。

debug.logファイルの末尾に、クラッシュ前に最後に行っていたことが表示されているかもしれません。
