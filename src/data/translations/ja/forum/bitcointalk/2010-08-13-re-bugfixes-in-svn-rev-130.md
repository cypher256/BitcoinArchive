---
title: "Re: SVN rev 130のバグ修正"
date: 2010-08-13T03:15:23.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=795.msg8960#msg8960"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトが-paytxfeeスイッチの用途を説明し、必要な場合にトランザクション確認の優先度を上げるためのものであると解説。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/353/"
translationStatus: complete
---

いいえ、そういうことではない。

-paytxfeeはトランザクションにトランザクション手数料を含めることを可能にする。トランザクションの確認が遅くなった場合、「-paytxfee=0.01」を使用して優先度を上げることができる。送信するすべてのトランザクションに0.01が追加でかかる。0.01以上を使う理由はない。

必要な場合に備えてあるだけだ。おそらく必要にはならないだろうし、必要になった場合はもっと詳しく説明できる。
