---
title: "Re: SVN rev 130のバグ修正"
date: 2010-08-13T03:15:23.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=795.msg8960#msg8960"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoが-paytxfeeスイッチの用途を説明し、必要な場合にトランザクション確認の優先度を上げるためのものであると解説。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/353/"
threadId: "bt-bugfixes-in-svn-rev-130"
threadTitle: "Bugfixes in SVN rev 130"
threadPosition: 2
translationStatus: complete
---

いいえ、そういうことではありません。

-paytxfeeはトランザクションにトランザクション手数料を含めることを可能にします。トランザクションの確認が遅くなった場合、「-paytxfee=0.01」を使用して優先度を上げることができます。送信するすべてのトランザクションに0.01が追加でかかります。0.01以上を使う理由はありません。

必要な場合に備えてあるだけです。おそらく必要にはならないでしょうし、必要になった場合はもっと詳しく説明できます。
