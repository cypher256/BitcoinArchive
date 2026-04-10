---
title: "Re: 「時間」制限付きトランザクションを可能にするためにOP_BLOCKNUMBERが必要"
date: 2010-11-15T18:37:44.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1786.msg22119#msg22119"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「時間制限付きトランザクションを可能にするためにOP_BLOCKNUMBERが必要」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/504/"
translationStatus: complete
---

OP_BLOCKNUMBERを安全に実装することはできない。セグメンテーション後のブロックチェーン再編成の場合、トランザクションは後のブロックに入れるようにする必要がある。OP_BLOCKNUMBERトランザクションとそのすべての依存トランザクションが無効になる。時間制限付きトランザクションに関与していなかった後のコイン所有者にとって不公平だ。

nTimeLockは逆のことをする。これは期限まで新しいバージョンで置き換えることができるオープントランザクションだ。ロックされるまで記録できない。期限が来た時点で最も高いバージョンが記録される。例えば、取り消されない限り期限後に自動的に永久にロックされて実行されるエスクロートランザクションを作成するために使用できる。この機能はまだ有効化も使用もされていないが、サポートは組み込まれているので後で実装できる。
