---
title: "返信: ビットコイン P2P 電子キャッシュ論文"
date: 2008-11-08T22:54:00Z
source: cryptography-mailing-list
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014822.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Ray Dillinger"
    slug: "ray-dillinger"
description: "Satoshiが51%攻撃に関する懸念に返信し、攻撃者がシステムを破壊することを不合理にする経済的インセンティブについて説明した。"
threadId: "bitcoin-p2p-e-cash-paper"
threadTitle: "Bitcoin P2P e-cash paper"
threadPosition: 7
isSatoshi: true
tags:
  - "51-percent-attack"
  - "incentives"
  - "security"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/9/"
translationStatus: complete
---

Ray Dillingerの投稿：
> 「通貨」は、誰かがコインを生成し続ける意思がある限り
> 約35%のインフレ率となる…

むしろ逆に近い。ノード数が増えると、新しいコインの生成はより困難になる。これはプルーフ・オブ・ワークの難易度が1時間あたりの一定のブロック数を目標に調整されるためである。ノードが増えると、難易度はそれに比例して上昇する。

新しいコインの生成は、金の採掘者が資源を費やして金を流通に追加することに類似している。我々の場合、費やされるのはCPU時間と電力である。

インセンティブはトランザクション手数料でも賄うことができる。トランザクションのアウトプットの値がインプットの値より小さい場合、その差額はトランザクションを含むブロックのインセンティブ値に加算されるトランザクション手数料となる。所定の数のコインが流通に入ると、インセンティブは完全にトランザクション手数料に移行でき、完全にインフレーションフリーとなる。
