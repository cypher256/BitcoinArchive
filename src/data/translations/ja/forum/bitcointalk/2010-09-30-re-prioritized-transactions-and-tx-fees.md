---
title: "Re: 優先トランザクションと取引手数料"
date: 2010-09-30T18:11:56.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1314.msg14732#msg14732"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「優先トランザクションと取引手数料」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/468/"
threadId: "bt-prioritized-transactions-and-tx-fees"
threadTitle: "Prioritized transactions, and tx fees"
threadPosition: 1
translationStatus: complete
---

ブロックが埋まるにつれて手数料要件が段階的に上がります：

<50KB  無料
50KB   0.01
250KB  0.02
333KB  0.03
375KB  0.04
など

典型的な価格メカニズムです。最初の50KBが売り切れると、価格は0.01に引き上げられます。250KBが売れると、0.02に上がります。ある価格では、他の顧客より高い入札をする意思があれば、ほぼ確実にブロックに入ることができます。

最低限の0.01を含めるだけでもかなり効果があります。
