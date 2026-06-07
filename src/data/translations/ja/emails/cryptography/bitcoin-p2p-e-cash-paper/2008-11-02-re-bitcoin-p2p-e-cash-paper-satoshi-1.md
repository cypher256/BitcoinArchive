---
title: "Re: ビットコイン P2P 電子キャッシュ論文"
date: 2008-11-03T01:37:00Z
type: "mailing-list"
source: "cryptography-mailing-list"
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014815.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "James A. Donald"
    slug: "james-donald"
description: "サトシがジェームズ・ドナルドのスケーラビリティに関する懸念に返信し、簡易支払い検証によるシステムの機能と、ノードがすべてのトランザクションを知る必要がないことを説明した。"
inReplyTo: "emails/cryptography/2008-11-01-re-bitcoin-p2p-e-cash-paper-donald"
isSatoshi: true
tags:
  - "scalability"
  - "spv"
  - "bandwidth"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/2/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "James A. Donald"
    personSlug: "james-donald"
    date: "2008-11-02T23:46:23Z"
    sourceEntryId: "emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-01-re-bitcoin-p2p-e-cash-paper-donald"
---

<!-- speaker: James A. Donald -->
<!-- quote: q1 -->
<!-- tone-skip -->
> こういうシステムは切実に必要だ。だが、この方式では必要な規模にスケールしないんじゃないか？
>
> 譲渡可能なプルーフ・オブ・ワークトークンに価値を持たせるには、貨幣的価値がなければならないのではないか。貨幣的価値を持つには、非常に大きなネットワーク内で——例えば bittorrent に類似したファイル交換ネットワークのように——移転されなければならないだろう。
>
> 二重支払いイベントをタイムリーに検出し拒否するためには、トランザクション内のコインの過去のトランザクションの大部分を持っていなければならないが、素朴に実装すると、各ピアが過去のトランザクションの大部分、あるいは最近発生した過去のトランザクションの大部分を持つ必要があるのではないか。何億人もの人々がトランザクションを行っている場合、それは膨大な帯域幅となる——すべてのノードがすべて、またはその大部分を知らなければならないだろう。
<!-- /tone-skip -->

<!-- speaker: Satoshi Nakamoto -->
ネットワークがそこまで大きくなるずっと前に、ユーザーは簡易支払い検証（セクション 8）を使用して二重支払いをチェックすることが安全であり、これにはブロックヘッダーのチェーンのみ、つまり 1日あたり約 12KB しか必要としない。新しいコインを作成しようとする人だけがネットワークノードを実行する必要がある。当初はほとんどのユーザーがネットワークノードを実行するが、ネットワークがある程度以上に成長すると、専用ハードウェアのサーバーファームを持つ専門家にますます委ねられることになる。サーバーファームはネットワーク上に 1 つのノードを持つだけでよく、LAN の残りはそのノードに接続する。

帯域幅はあなたが思うほど禁止的ではないかもしれない。典型的なトランザクションは約 400 バイトだ（ECC はうまくコンパクトだ）。各トランザクションは 2回ブロードキャストされる必要があるので、1 トランザクションあたり 1KB としよう。Visa は 2008 会計年度に 370 億件のトランザクションを処理した。これは 1日平均 1 億件のトランザクションだ。それだけのトランザクションには 100GB の帯域幅、つまり DVD12枚分か HD 画質の映画 2 本分、現在の価格で約 18 ドル相当の帯域幅が必要となる。

ネットワークがそこまで大きくなるには数年かかるだろうし、その頃にはインターネットで HD 映画 2 本分を送ることは大したことではないだろう。

Satoshi Nakamoto
