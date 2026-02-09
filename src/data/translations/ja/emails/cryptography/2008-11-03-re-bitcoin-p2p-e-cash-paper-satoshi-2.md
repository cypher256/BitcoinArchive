---
title: "返信: ビットコイン P2P 電子キャッシュ論文"
date: 2008-11-13T22:56:55Z
source: cryptography-mailing-list
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014849.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "James A. Donald"
    slug: "james-donald"
description: "Satoshiがプルーフ・オブ・ワークチェーンについて説明し、正直なノードがCPUパワーの過半数を支配している限り、ノード同士が信頼し合う必要がないことを述べた。"
threadId: "bitcoin-p2p-e-cash-paper"
threadTitle: "Bitcoin P2P e-cash paper"
threadPosition: 22
isSatoshi: true
tags:
  - "proof-of-work"
  - "consensus"
  - "trust"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/11/"
translationStatus: complete
---

James A. Donaldの投稿：
> 全員がXを知っているだけでは十分ではない。全員が
> 全員がXを知っていることを知り、さらに
> 全員が全員が全員がXを知っていることを知っていることを
> 知っている必要もある
> ——これはビザンチン将軍問題と同様に、
> 分散データ処理の古典的な難問である。

プルーフ・オブ・ワークチェーンはビザンチン将軍問題の解決策である。その文脈で言い換えてみよう。

何人かのビザンチン将軍がそれぞれコンピューターを持ち、王のWi-Fiのパスワードをブルートフォースで突破して攻撃したいと考えている。パスワードは一定の文字数であることがわかっている。ネットワークに十分な刺激を与えた後、ボットネットのノード数を素早く数え、全員が同じ数を持ち、他の全員もそうであることを確信できなければならない。プルーフ・オブ・ワークチェーンがこれを達成する方法である。

各将軍は最初に受信した攻撃ブロックを、取り組んでいるチェーンに追加し、次のブロックの解決を開始する。最初にブロックを解いた将軍がそれをブロードキャストし、他の全員がそれを自分のチェーンに追加する。チェーンが成長し、数ブロック後には、将軍は攻撃データが他の将軍が持っているものと同じであると確信できる。チェーン内の計算量が、全員が協力して作業しなければ生み出せないものであることがわかる。

プルーフ・オブ・ワークチェーンが、あなたが質問したすべての同期化、分散データベース、グローバルビューの問題を解決する方法である。
