---
title: "内部バージョン番号"
date: 2010-09-23T16:19:08.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1269.msg13831#msg13831"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿: \"内部バージョン番号\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/458/"
threadId: "bt-internal-version-number"
translationStatus: complete
---

次のリリース（0.3.13）では、内部バージョン番号の整数フォーマットを313から31300に変更する予定だ。例えば31305 = 0.3.13.5となる。最後の数字はリリース間のSVN上の変更を表しており、バージョン番号に適切に反映されるべきだ。そうしないと、サブバージョンのいずれかにミスなどがあって回避策が必要になった場合に面倒なことになる。
