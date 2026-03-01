---
title: "返信: スケーラビリティ"
date: 2010-06-18T20:43:00Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=286.msg2947#msg2947"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシがビットコインのスケーラビリティについて議論し、Visaとの潜在的なトランザクション量を比較し、技術の進歩に伴いシステムがどのようにスケールできるかを説明。"
isSatoshi: true
tags:
  - "scalability"
  - "visa"
  - "block-size"
  - "technology-progress"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/114/"
threadId: "bt-scalability"
threadTitle: "Scalability"
threadPosition: 1
translationStatus: complete
---

すべてのユーザーがネットワークノードである現在のシステムは、大規模向けの意図された構成ではありません。それはすべてのUsenetユーザーが自分のNNTPサーバーを運用するようなものです。この設計はユーザーを単なるユーザーのままにすることをサポートしています。ノードの運用負担が大きくなるほど、ノード数は少なくなります。少数のノードは大規模なサーバーファームになるでしょう。残りはトランザクションのみを行い生成を行わないクライアントノードになります。

トランザクションのないブロックヘッダーは約80バイトです。ブロックが10分ごとに生成されると仮定すると、80バイト × 6 × 24 × 365 = 年間4.2MBです。2008年時点でコンピュータシステムが通常2GBのRAMで販売されており、ムーアの法則が年間1.2GBの成長を予測していることから、ブロックヘッダーをメモリに保持する必要があっても、ストレージは問題にならないはずです。
