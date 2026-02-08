---
title: "Re: ビッグエンディアンのコード問題"
date: 2010-08-29T22:14:36.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=816.msg11610#msg11610"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「ビッグエンディアンのコード問題」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/432/"
translationStatus: complete
---

コードは全体を通してリトルエンディアンを前提としており、ビッグエンディアンに移植しない意図で書かれました。ネットワーク経由で送信されるすべての整数はバイトスワップする必要があり、コード内の他の数十箇所に加えて対応が必要です。余分なソースコードの肥大化に見合いません。

いずれにせよ、ビッグエンディアンは廃れつつあります。
