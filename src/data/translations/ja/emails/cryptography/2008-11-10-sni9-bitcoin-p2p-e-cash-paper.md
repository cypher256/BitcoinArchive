---
title: "ビットコイン P2P 電子キャッシュ論文"
date: 2008-11-10T02:14:30Z
source: cryptography-mailing-list
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014842.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "James A. Donald"
    slug: "james-donald"
description: "Satoshiがシニョリッジの代替としてトランザクション手数料を提案し、インフレなしにネットワークのインセンティブを賄うためにアウトプット値をインプット値より若干低くすることを示唆した。"
threadId: "bitcoin-p2p-e-cash-paper"
threadTitle: "Bitcoin P2P e-cash paper"
threadPosition: 18
isSatoshi: true
tags:
  - "transaction-fees"
  - "inflation"
  - "incentives"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/9/"
translationStatus: complete
---

James A. Donaldの投稿：
> さらに、提案されたシステムでは、誰がどのコインを持っているかを
> 追跡する作業はシニョリッジによって賄われており、
> これはインフレを必要とするため、機能させることはできない。

インフレの問題で困っているなら、代わりにトランザクション手数料に調整するのは簡単だ。こう簡単なことだ：任意のトランザクションのアウトプット値をインプット値より1セント少なくする。クライアントソフトウェアが意図した支払い額より1セント多くトランザクションを自動的に書くか、受取人側から差し引くことができる。ノードがブロックのプルーフ・オブ・ワークを見つけた時のインセンティブ値は、ブロック内の手数料の合計になる。

Satoshi Nakamoto

---------------------------------------------------------------------
The Cryptography Mailing List
Unsubscribe by sending "unsubscribe cryptography" to majordomo at metzdowd.com
