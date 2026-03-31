---
title: "Re: Win7 64bit 前回のパッチ火曜日以降クラッシュする"
date: 2010-10-23T18:52:02.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1540.msg18246#msg18246"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「Win7 64bit 前回のパッチ火曜日以降クラッシュする」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/495/"
threadId: "bt-win7-64bit-since-last-patch-tues-now-crashes"
translationStatus: complete
---

> [Quote from: Odin on October 22, 2010, 09:24:38 PM](#msg18105)
>   Fault Module Name:   mingwm10.dll

これが重要な手がかりだ。そこでクラッシュしたということだと思う。他のバージョンを試してみることもできるかもしれない。mingwm10.dllはマルチスレッドアプリのコールバック要件を満たすための単純なプレースホルダーだ。

Windows 64ビットで問題なく動作している方は他にいるか？
