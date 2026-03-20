---
title: "いくつかの考え... — IP送金に対する中間者攻撃"
date: 2009-01-15T00:05:15Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
author: "Dustin Trammell"
participants:
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "トランメルがビットコインのIP送金機能について詳細なセキュリティ分析を実施し、ARPポイズニングやISPレベルの傍受を含む中間者攻撃の脆弱性を特定。IPアドレスではなく常にビットコインアドレスを使用することを推奨している。"
isSatoshi: false
threadId: "satoshi-dustin-trammell"
threadPosition: 8
tags:
  - "correspondence"
  - "early-adopter"
  - "security"
  - "send-to-ip"
  - "man-in-the-middle"
  - "packet-analysis"
secondarySources:
  - name: "Bitcoin Wiki - Trammell/Nakamoto Emails"
    url: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
translationStatus: complete
---

<!-- speaker: narrator -->
新しいメールスレッドにおいて、プロのセキュリティ研究者であるトランメルは、ビットコインのネットワークプロトコルに対する詳細な分析結果を報告した。自分自身に送信したトランザクション中にパケットトレースをキャプチャ・分析し、プロトコルがトランザクション名やコメントを含む一部の情報を平文で送信していることを観察した。

続いてトランメルはIP送金機能に対する徹底的なセキュリティ分析を提示し、中間者攻撃に対する根本的な脆弱性を特定した。

<!-- speaker: Dustin Trammell -->
> IPトランザクションの場合、ビットコインクライアントは接続先のIPが本当にトランザクションの意図された受信者であると信頼しているようだ。中間者攻撃を仕掛けて受信トランザクションを盗むのはかなり容易である。

<!-- speaker: narrator -->
ローカルLAN上でのARPポイズニングを用いた具体的な攻撃シナリオを説明し、この脆弱性がISP管理者を含むネットワーク経路上のあらゆるホップに及ぶことを指摘した。

トランメルの推奨は明確であった。

<!-- speaker: Dustin Trammell -->
> 意図された受信者のアドレスとしてネットワークアドレスの使用を許可しないことを推奨する。常にビットコインアドレスを要求してトランザクションを行う方がより安全だと思う。

<!-- speaker: narrator -->
また、代替案として、ノードがビットコインアドレスに関連付けられたIPアドレスを検索できるネットワークベースの名前解決サービスを提案し、既存の鍵ペアを認証に使用することを提案した。

このメールは、ビットコインソフトウェアに対する最も初期のセキュリティ監査の一つとして重要である。IP送金機能はトランメルが提起したようなセキュリティ上の懸念も一因となり、最終的にビットコインから削除された。

*出典：2013年11月にダスティン・トランメルにより公開。完全な書簡はBitcoin Wiki（en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails）にアーカイブされている。*
