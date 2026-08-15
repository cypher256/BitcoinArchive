---
title: "Re: 常にトランザクション手数料を支払う？"
date: 2010-09-23T16:08:35.000Z
type: "forum-post"
source: "bitcointalk"
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
translationStatus: complete
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-09-08T17:30:14.000Z"
    sourceEntryId: "forum/bitcointalk/topic-994/2010-09-08-re-always-pay-transaction-fee"
---

<!-- quote: q1 -->
<!-- tone-skip -->
<!-- audit:quote-skip -->
> 現在の閾値はブロックあたり 200KB、つまりブロックあたり約 1000 トランザクションだ。ブロックあたり 50KB に下げるべきだと思う。それでもブロックあたりの平均トランザクション数の 100倍以上だ。
<!-- /tone-skip -->

この変更を SVN rev 157 で実装した。

以前これを高く設定していた理由は、取引手数料に引っかからずに非常に大きなトランザクションを可能にするためだった。50 BTC の生成コインで構成されるトランザクションの場合、閾値は約 26,000 BTC だった。当時は生成が 100倍容易だったにもかかわらず、そのレベルで手数料に遭遇した人はほんの数人だった。新しい閾値では、生成コインの送金で約 11,000 BTC になる。これに達するのはほとんどの場合、生成されたビットコインだけだろう。ビットコインを購入した場合、より大きなトランザクション単位になるため、数百件の別々のトランザクションで購入しない限り、手数料の上限に近づくことはない。たとえ手数料レベルに達したとしても、小さなトランザクションをまとめるために一度だけ支払えばよいのだ。
