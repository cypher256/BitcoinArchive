---
title: "返信: bitcoin自動renice"
date: 2010-07-14T17:38:31.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=72.msg2886#msg2886"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「bitcoin自動renice」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/182/"
threadId: "bt-bitcoin-auto-renice-ing"
threadTitle: "bitcoin auto-renice-ing"
threadPosition: 2
translationStatus: complete
---

Laszloがこれを修正しましたが、残念ながら0.3.0に間に合いませんでした。ただ、おそらく近いうちに0.3.1が出るでしょう。

問題は、PRIO_MINを使用していたことです。最低優先度にはPRIO_MAXを使うべきでした。OSは優先度を上げさせないようになっているので、PRIO_MINは優先度0のまま残すはずです。
