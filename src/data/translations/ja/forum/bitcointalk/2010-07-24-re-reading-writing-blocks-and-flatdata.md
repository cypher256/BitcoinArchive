---
title: "Re: ブロックの読み書きとFLATDATA"
date: 2010-07-24T04:04:20.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=555.msg5450#msg5450"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「ブロックの読み書きとFLATDATA」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/265/"
translationStatus: complete
---

FLATDATAは固定フィールド長の配列をシリアライズするための回避策でした。配列を直接シリアライズする方法を理解させる、よりクリーンな方法がありましたが、MSVC6ではそれができず、当時はMSVC6との互換性を維持したかったのです。Boostの中でMSVC6がサポートしていないものを使用しているため、もうMSVC6はサポートしていません。0.2.0の後にサポートを失いました。いつか、FLATDATAで包むことなく固定長配列をシリアライズする方法を知っているクリーンな方法に切り替えるかもしれません。
