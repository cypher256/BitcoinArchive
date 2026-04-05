---
title: "Re: 常に取引手数料を支払う？"
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
---

[Quote from: satoshi on September 08, 2010, 05:30:14 PM](#msg12237)
> 現在、手数料の支払いは-paytxfeeスイッチで手動制御されている。最近のブロックのサイズを自動的にチェックして手数料を支払うべきか判断させるのは非常に簡単だ。閾値に到達するにはまだほど遠いので、まだ必要ない。いずれにせよ、まず手動制御で状況を見るのは良いアイデアだ。

この変更をSVN rev 157で実装した。

以前これを高く設定していた理由は、取引手数料に引っかからずに非常に大きなトランザクションを可能にするためだった。50 BTCの生成コインで構成されるトランザクションの場合、閾値は約26,000 BTCだった。当時は生成が100倍容易だったにもかかわらず、そのレベルで手数料に遭遇した人はほんの数人だった。新しい閾値では、生成コインの送金で約11,000 BTCになる。これに達するのはほとんどの場合、生成されたビットコインだけだろう。ビットコインを購入した場合、より大きなトランザクション単位になるため、数百件の別々のトランザクションで購入しない限り、手数料の上限に近づくことはない。たとえ手数料レベルに達したとしても、小さなトランザクションをまとめるために一度だけ支払えばよいのだ。
