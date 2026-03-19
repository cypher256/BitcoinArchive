---
title: "半自動エスクローメカニズムの提案"
date: 2010-07-30T10:29:08.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=645.msg6704#msg6704"
author: "Olipro"
participants:
  - name: "Olipro"
    slug: "olipro"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Oliproがスレッドを開始: 半自動エスクローメカニズムの提案"
isSatoshi: false
threadId: "bt-a-proposal-for-a-semi-automated-escrow-mechanism"
threadPosition: 1
tags: []
translationStatus: complete
---

基本的なエスクローの仕組みは、二者が第三者を介して（通常は金銭を）何らかの商品やサービスと交換するというものである。

双方が誠実なトランザクションにおいては、買い手が商品を受け取り資金の解放を承認するため、エスクロー業務は本質的に自動化が可能である。人的介入が必要となるのは紛争が発生した場合のみである。そこで、以下のシステムを提案する：

1) 金額に対するエスクロートランザクションを作成する。これは自身の鍵で認証され、受取人の鍵やデータ等を含む。このブロックは、買い手が承認する後続ブロックが発行されるまで請求できず、また売り手が返金を承認しない限り買い手が取り戻すことも不可能である。

2) これがネットワークに入り、検証され、売り手が商品を発送する。買い手が商品を受け取ったら、解放トランザクションを作成し、売り手がビットコインを受け取る。

3) 紛争が発生し、双方が一方向への資金解放を拒否している場合、明らかに第三者による仲裁が必要となる。この状況では、買い手と売り手の双方が第三者を認証する署名が必要となり、その第三者に元のエスクロートランザクションの所有権が付与され、問題の仲裁を行うことができる。
