---
title: "Re: 28日間生成なし、4200khash/sあるのに"
date: 2010-08-22T23:01:02.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=862.msg10717#msg10717"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「28日間生成なし、4200khash/sあるのに」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/407/"
threadId: "bt-28-days-without-generation-i-have-4200khash-s"
threadTitle: "28 days without generation, i have 4200khash/s"
threadPosition: 2
translationStatus: complete
---

debug.logで「proof-of-work found」を検索してください。見つかった場合は、その直後にエラーがないか確認してください。

[Quote from: davidonpda on August 19, 2010, 07:43:01 PM](https://bitcointalk.org/index.php?topic=862.msg10291#msg10291)正しく動作するために、時刻にどれくらいの誤差が許容されますか？
許容範囲は2時間です。

これはSVN rev 141と次のリリース（0.3.11以降）で解決されるはずです。時計が1時間以上ずれている場合、警告のメッセージボックスをポップアップ表示します。
