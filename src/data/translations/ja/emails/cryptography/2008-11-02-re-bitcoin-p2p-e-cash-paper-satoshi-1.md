---
title: "返信: ビットコイン P2P 電子キャッシュ論文"
date: 2008-11-03T01:37:00Z
source: cryptography-mailing-list
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014815.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "James A. Donald"
    slug: "james-donald"
description: "SatoshiがJames Donaldのスケーラビリティに関する懸念に返信し、簡易支払い検証によるシステムの機能と、ノードがすべてのトランザクションを知る必要がないことを説明した。"
threadId: "bitcoin-p2p-e-cash-paper"
threadTitle: "Bitcoin P2P e-cash paper"
threadPosition: 3
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
---

James A. Donaldの投稿：
> 我々はそのようなシステムを非常に、非常に必要としているが、私があなたの
> 提案を理解する限り、必要な規模にスケールするようには見えない。

ネットワークがそこまで大きくなるずっと前に、ユーザーは簡易支払い検証（セクション8）を使用して二重支払いをチェックすることが安全であり、これにはブロックヘッダーのチェーンのみ、つまり1日あたり約12KBしか必要としない。新しいコインを作成しようとする人だけがネットワークノードを実行する必要がある。当初はほとんどのユーザーがネットワークノードを実行するが、ネットワークがある程度以上に成長すると、専用ハードウェアのサーバーファームを持つ専門家にますます委ねられることになる。サーバーファームはネットワーク上に1つのノードを持つだけでよく、LANの残りはそのノードに接続する。

帯域幅はあなたが思うほど禁止的ではないかもしれない。典型的なトランザクションは約400バイトである（ECCはうまくコンパクトである）。各トランザクションは2回ブロードキャストされる必要があるので、1トランザクションあたり1KBとしよう。Visaは2008会計年度に370億件のトランザクションを処理した。これは1日平均1億件のトランザクションである。それだけのトランザクションには100GBの帯域幅、つまりDVD12枚分かHD画質の映画2本分、現在の価格で約18ドル相当の帯域幅が必要となる。

ネットワークがそこまで大きくなるには数年かかるだろうし、その頃にはインターネットでHD映画2本分を送ることは大したことではないだろう。

Satoshi Nakamoto
