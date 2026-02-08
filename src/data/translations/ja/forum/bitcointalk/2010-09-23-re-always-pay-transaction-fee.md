---
title: "Re: 常に取引手数料を支払う？"
date: 2010-09-23T16:08:35.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=994.msg13829#msg13829"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「常に取引手数料を支払う？」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/457/"
threadId: "bt-always-pay-transaction-fee"
threadTitle: "Always pay transaction fee?"
threadPosition: 3
translationStatus: complete
---

[Quote from: satoshi on September 08, 2010, 05:30:14 PM](https://bitcointalk.org/index.php?topic=994.msg12237#msg12237)現在の閾値は1ブロックあたり200KB、つまり1ブロックあたり約1,000トランザクションです。これを1ブロックあたり50KBに引き下げるべきだと思います。それでも1ブロックあたりの平均トランザクション数の100倍以上になります。
この変更をSVN rev 157で実装しました。

以前これを高く設定していた理由は、取引手数料に引っかからずに非常に大きなトランザクションを可能にするためでした。50 BTCの生成コインで構成されるトランザクションの場合、閾値は約26,000 BTCでした。当時は生成が100倍容易だったにもかかわらず、そのレベルで手数料に遭遇した人はほんの数人でした。新しい閾値では、生成コインの送金で約11,000 BTCになります。これに達するのはほとんどの場合、生成されたビットコインだけでしょう。ビットコインを購入した場合、より大きなトランザクション単位になるため、数百件の別々のトランザクションで購入しない限り、手数料の上限に近づくことはありません。たとえ手数料レベルに達したとしても、小さなトランザクションをまとめるために一度だけ支払えばよいのです。
