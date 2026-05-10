---
title: "Re: ブロックの読み書きと FLATDATA"
date: 2010-07-24T04:04:20.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=555.msg5450#msg5450"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「ブロックの読み書きと FLATDATA」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/265/"
translationStatus: complete
---

FLATDATA は固定フィールド長の配列をシリアライズするための回避策だった。配列を直接シリアライズする方法を理解させる、よりクリーンな方法があったが、MSVC6 ではそれができず、当時は MSVC6 との互換性を維持したかったのだ。Boost の中で MSVC6 がサポートしていないものを使用しているため、もう MSVC6 はサポートしていない。0.2.0 の後にサポートを失った。いつか、FLATDATA で包むことなく固定長配列をシリアライズする方法を知っているクリーンな方法に切り替えるかもしれない。
