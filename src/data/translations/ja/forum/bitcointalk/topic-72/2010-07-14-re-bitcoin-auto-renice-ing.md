---
title: "Re: bitcoin自動renice"
date: 2010-07-14T17:38:31.000Z
type: "forum-post"
source: "bitcointalk"
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
translationStatus: complete
---

Laszloがこれを修正したが、残念ながら0.3.0に間に合わなかった。ただ、おそらく近いうちに0.3.1が出るだろう。

問題は、PRIO_MINを使用していたことだ。最低優先度にはPRIO_MAXを使うべきだった。OSは優先度を上げさせないようになっているので、PRIO_MINは優先度0のまま残すはずだ。
