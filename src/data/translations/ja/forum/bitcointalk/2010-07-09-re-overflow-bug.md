---
title: "返信: 奇妙なブロック74638"
date: 2010-08-15T20:02:00Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=822.msg9547#msg9547"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシがビットコインの重大な値オーバーフローインシデントに対応。ビットコインの初期の歴史で最も深刻なバグの1つ。彼は迅速に修正をデプロイした。"
isSatoshi: true
tags:
  - "bug"
  - "overflow"
  - "incident-response"
  - "soft-fork"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/222/"
translationStatus: complete
---

バグは、値のオーバーフローチェックが出力の合計ではなく個々の出力に対して行われていたことでした。

修正はバージョン0.3.10ですでに利用可能です。アップグレードしてください。

正しいチェーンが不正なチェーンを追い越しました。ネットワークは今後、2,100万コインを超える出力値を持つブロックを拒否します。
