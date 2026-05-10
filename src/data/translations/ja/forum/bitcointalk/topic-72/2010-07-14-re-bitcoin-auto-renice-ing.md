---
title: "Re: Bitcoin の自動 renice"
date: 2010-07-14T17:38:31.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=72.msg2886#msg2886"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「bitcoin 自動 renice」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/182/"
translationStatus: complete
---

Laszlo がこれを修正したが、残念ながら 0.3.0 に間に合わなかった。ただ、おそらく近いうちに 0.3.1 が出るだろう。

問題は、PRIO_MIN を使用していたことだ。最低優先度には PRIO_MAX を使うべきだった。OS は優先度を上げさせないようになっているので、PRIO_MIN は優先度0 のまま残すはずだ。
