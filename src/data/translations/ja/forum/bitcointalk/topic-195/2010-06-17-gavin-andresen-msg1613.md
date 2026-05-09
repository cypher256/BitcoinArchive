---
title: "Re: トランザクションとスクリプト：DUP HASH160 ... EQUALVERIFY CHECKSIG"
date: 2010-06-17T19:58:14.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=195.msg1613#msg1613"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック191におけるギャビン・アンドレセンの文脈投稿。msg1614の前。"
isSatoshi: false
tags: []
translationStatus: complete
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-06-17T09:46:08.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> Bitcoinの第二の互換実装は決して良いアイデアにはならないと思う。設計の多くが、すべてのノードがロックステップで完全に同一の結果を得ることに依存しているため、第二の実装はネットワークにとって脅威となる。MITライセンスは他のすべてのライセンスや商用利用と互換性があるので、ライセンスの観点から書き直す必要はない。
<!-- /tone-skip -->

良いアイデアかどうかにかかわらず、いずれ誰かがネットワークを攪乱しようとする (あるいは自分の用途のために乗っ取ろうとする) 。既存コードを改変するか、自前の版を書くかのどちらかで、いずれにしてもネットワークの脅威となる。

トランザクション内スクリプトという仕組みの柔軟性には感服するが、自分の中の意地悪な部分が、すぐにそれを悪用する方法を考え始めてしまう。TxOut スクリプトには様々な興味深い情報を仕込めるし、改変されていないクライアントがそうしたトランザクションを検証して無視するだけなら、隠れた一斉配信の通信路として使える。

これは、流行るまでは便利な機能だ。だが、誰かが「最新のレディー・ガガのビデオを友人全員に配ろう」 と思いつき、何百万ものトランザクションで決済ネットワークを溢れさせ始めたらどうなるか…