---
title: "Re: いくつかの考え... — 攻撃の分類と IP 送金のセキュリティ"
date: 2009-01-15T13:46:35Z
type: "article"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "2013 年 11 月にダスティン・トランメルにより公開"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "サトシがトランメルの中間者攻撃分析に応答。攻撃を 2 タイプ（通信経路上、インターネット上の任意の者）に分類、IP 送金の脆弱性を認め、IP とアドレス併用案を提示、ウォレット暗号化に言及。"
isSatoshi: true
tags:
  - "correspondence"
  - "security"
  - "send-to-ip"
  - "man-in-the-middle"
  - "wallet-encryption"
  - "attack-classification"
secondarySources:
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
relatedEntries:
  - correspondence/dustin-trammell/2009-01-15-satoshi-to-trammell-attack-types
  - aftermath/2009-01-11-dustin-trammell-biography
  - aftermath/2009-05-03-malmi-agrees-to-help
  - aftermath/2009-05-01-martti-malmi-biography
quotes:
  - id: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2009-01-15T13:46:35Z"
    sourceEntryId: "correspondence/dustin-trammell/2009-01-15-satoshi-to-trammell-attack-types"
translationStatus: complete
---

![暗い背景に置かれた対照的な 2 つのパネルの図。左側には 2 つの小さなノードアイコンを結ぶ短いループ状の接続、右側には多数の小さな円が 1 点に向かって収束する広がりが描かれている。下部では IP アドレスの札とビットコインアドレスの札が矢印でつながって 1 つの南京錠アイコンへ合流し、隅には離れて小さな南京錠のアイコンが添えられている。](/BitcoinArchive/images/analysis/2009-01-15-satoshi-to-trammell-attack-types-hero.png)

<!-- speaker: narrator -->
トランメルの詳細な中間者攻撃分析に応答して、サトシは自身が用いる攻撃の分類を示した。

<!-- quote: q1 -->
<!-- speaker: Satoshi Nakamoto -->
> 私は攻撃を 2 つの種類に分けている：
> 1) 通信経路上に実際にいる者にしかできない攻撃
> 2) インターネット上のどこからでも、誰にでもできる攻撃

<!-- speaker: narrator -->
サトシは、タイプ 1 の攻撃は同じ LAN または ISP 経路上の人々に影響するのに対し、タイプ 2 は数十億の潜在的攻撃者にユーザーを晒し、規模の経済を実現できると説明した。IP 送金の脆弱性について認めた。

<!-- speaker: Satoshi Nakamoto -->
> IP 送金は新しい公開鍵を要求するため、確かにタイプ 1 の中間者攻撃に対して脆弱である。それが懸念される場合、ビットコインアドレスへの送金にはその脆弱性はないが、若干のプライバシー上のトレードオフがある。

<!-- speaker: narrator -->
サトシは現実的に、ほとんどの人が SSL 非対応のウェブサイトや未署名のメールからビットコインアドレスを取得しており、それらは DNS ポイズニングによって既に両方のタイプの攻撃に対して脆弱であると指摘した。

サトシは将来に向けた複合的なアプローチを提案した。

<!-- speaker: Satoshi Nakamoto -->
> 一つの解決策は、送金時に IP とビットコインアドレスの両方を使用すること（例えば 1.2.3.4-1Kn8iojk...）で、受信者がビットコインアドレスの公開鍵を使って新しい公開鍵に署名し、送金先が意図した相手であることを証明する方法である。

<!-- speaker: narrator -->
また、ビットコインアドレスへの送金は受信者が発見できるようにトランザクションをブロックチェーンに記録する仕組みであることを確認し、ウォレット暗号化を将来の機能として言及した。この案は後に、[マルッティ・マルミ](/BitcoinArchive/ja/participants/martti-malmi/)が [4 か月後に独立に提案した際](/BitcoinArchive/ja/entries/aftermath/2009-05-03-malmi-agrees-to-help/)にサトシが「絶対に不可欠」として支持することになる。
