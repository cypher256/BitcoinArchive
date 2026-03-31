---
title: "Re: ビットコイン P2P 電子キャッシュ論文"
date: 2008-11-02T23:46:23Z
type: "mailing-list"
source: "cryptography-mailing-list"
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014814.html"
author: "James A. Donald"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "James A. Donald"
    slug: "james-donald"
description: "ジェームズ・A・ドナルドがサトシのビットコイン発表に返信し、システムのスケーラビリティとノードが単一のトランザクション履歴にどのように合意するかについて疑問を提起した。"
threadId: "bitcoin-p2p-e-cash-paper"
inReplyTo: "emails/cryptography/2008-10-31-bitcoin-p2p-e-cash-paper"
isSatoshi: false
tags:
  - "scalability"
  - "consensus"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/2/"
translationStatus: complete
---

<!-- speaker: Satoshi Nakamoto -->
Satoshi Nakamotoの投稿：
> 新しい電子キャッシュシステムに取り組んできた。完全な
> ピアツーピア方式で、信頼できる第三者を必要としない。
>
> 論文はこちらで公開している：
> http://www.bitcoin.org/bitcoin.pdf

<!-- speaker: James A. Donald -->
こういうシステムは切実に必要だ。だが、この方式では必要な規模にスケールしないんじゃないか？

譲渡可能なプルーフ・オブ・ワークトークンに価値を持たせるには、貨幣的価値がなければならないのではないか。貨幣的価値を持つには、非常に大きなネットワーク内で——例えばbittorrentに類似したファイル交換ネットワークのように——移転されなければならないだろう。

二重支払いイベントをタイムリーに検出し拒否するためには、トランザクション内のコインの過去のトランザクションの大部分を持っていなければならないが、素朴に実装すると、各ピアが過去のトランザクションの大部分、あるいは最近発生した過去のトランザクションの大部分を持つ必要があるのではないか。何億人もの人々がトランザクションを行っている場合、それは膨大な帯域幅となる——すべてのノードがすべて、またはその大部分を知らなければならないだろう。
