---
title: "Re: [p2p-research] ビットコイン：P2P通貨のオープンソース実装"
date: 2009-02-13T02:38:20.000Z
type: "mailing-list"
source: "p2p-research-list"
sourceUrl: "https://satoshi.nakamotoinstitute.org/emails/p2p-research/37/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martien van Steenbergen"
    slug: "martien-van-steenbergen"
description: "ビットコインをプログラム可能なP2Pソーシャル通貨の基盤と位置づけ、Pekunioとの類似点やリップルについて議論し、ビットコインの信頼不要な設計を説明。"
isSatoshi: true
tags:
  - "programmable-currency"
  - "ripple"
  - "reputation"
  - "trust"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/p2p-research/threads/17/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Martien van Steenbergen"
    personSlug: "martien-van-steenbergen"
---

<!-- speaker: Martien van Steenbergen -->
<!-- quote: q1 -->
<!-- tone-skip -->
> 通貨の供給と管理が不要なサポートも見てみたい。維持がより簡単で安価になり、
> いつでもどこでも十分な通貨量が得られる。希少性も過剰もなく、
> 常に適切な量が自己組織化される。
<!-- /tone-skip -->

<!-- speaker: Satoshi Nakamoto -->
それは実現可能だ。あらゆるルールセットに従うようにプログラムできる。

私はビットコインを、Marcのアイデアやここで議論されているようなプログラム可能なP2Pソーシャル通貨を実装したい場合の基盤であり第一歩と見ている。まず通常の基本的なP2P通貨を動作させる必要がある。それが確立され実証されれば、動的なスマートマネーは簡単な次のステップだ。

仮想的な、地理に縛られないコミュニティが新しい経済パラダイムを実験するというアイデアが大好きだ。

<!-- speaker: Martien van Steenbergen -->
> _これを思い出した：_
> _* AardRock >> Wizard Rabbit Treasurer および_
> _* AardRock >> Pekunio_

<!-- speaker: Satoshi Nakamoto -->
確かに、ネットワーク上の多数のピアにすべての取引の冗長コピーを散布するというコンセプトはPekunioに非常に似ているが、実装はWizard Rabbit Treasurerのようなレピュテーションネットワークではない。実際、ビットコインはレピュテーションをまったく使用しない。ネットワークを単なる大きな群衆と見なし、誰と話すか、誰が何かを教えてくれるかをあまり気にしない。ネットワーク上でブロードキャストされている情報を少なくとも一人が中継してくれる限り問題ない。嘘をつく方法がないので気にしないのだ。暗号学的証明を伝えるか、無視されるかのどちらかだ。

<!-- speaker: Martien van Steenbergen -->
> _リップルを知っているか？_

<!-- speaker: Satoshi Nakamoto -->
信頼システムとしては、リップルは信頼を集中させるのではなく分散させるという点でユニークだ。

<!-- speaker: Martien van Steenbergen -->
> _ビットコインはプロトコル仕様としても利用可能か（異なる言語バインディングと実装を容易にする — 仕様で統一し、実装で競争する）。_

<!-- speaker: Satoshi Nakamoto -->
C++のソースコードを参照するのが最善だろう。ソフトウェアを使って任意の言語から取引を送受信するためのインターフェースを実装する予定だ。これにより、サーバーサイドのコードがウェブベースのeコマースサイトで簡単に使用できるようになる。

Satoshi
