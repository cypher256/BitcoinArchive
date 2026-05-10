---
title: "サトシからマイク・ハーンへ：タイムロック預金のためのマルチシグコントラクトパターン（2011-04-20）"
date: 2011-04-20T11:39:00Z
type: "correspondence"
source: "plan99"
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread5.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "サトシがステートフルなスクリプトオペコードがチェーンフォーク攻撃を可能にする理由を説明し、信頼なしに安全なタイムロック預金のため nLockTime を使うマルチシグコントラクトを段階的に提示。"
isSatoshi: true
tags:
  - "correspondence"
  - "contracts"
  - "multisig"
  - "nlocktime"
  - "time-lock"
  - "escrow"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://web.archive.org/web/20240809162549/https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
translationStatus: complete
---

<!-- speaker: Satoshi Nakamoto -->
スクリプト言語がステートレスでない場合、つまり変化する外部情報やノード間で異なる情報にアクセスできる場合、攻撃者はそれを使ってチェーンをフォークできる。唯一の例外は、ある時点より前は常に false で、その後は永久に true となる場合であり、これは nLockTime で実装されている。

Google は信頼されているので、ユーザーが Google にトークン預金を支払い、アカウントを閉鎖する際に Google が返金するということはできないのだろうか？

ただし、質問に答えると、信頼を使わずに実現することも可能だ：

ユーザーからの Tx 1 は、Google と User の両方の署名を必要とするスクリプトに支払う。

Tx 2（コントラクト）は Tx 1 を使用し、User に支払う。nLockTime は資金をリリースする時間だ。

手順：
1) Google が Tx 1 の作成に使用する公開鍵を User に渡す。
2) User が Tx 1 をプライベートに作成するが、まだブロードキャストしない。
3) User が Tx 1 のハッシュを Google に渡す。
4) Google が nLockTime を設定して Tx 2 の自分のパートに署名し、User に渡す。
5) User が Tx 1 をブロードキャストする。
6) User が Tx 2 の自分の半分に署名してブロードキャストする。

これらの手順により、ユーザーは Tx 1 をブロードキャストする前に Google が署名した Tx 2 の半分を手元に持っているため、どのような取引に資金を署名するか確信を持てる。

これはコントラクトを安全に署名するための一般的なパターンだ。Tx 2 が最初に準備されるため、当事者は何に支払うか分かっている。Tx 1 がブロードキャストされて資金をロックし、Tx 2 に割り当てる。言い換えれば、すべての当事者が資金をグループの全員一致の合意によって管理されるプールに割り当てるが、グループは事前に資金に対するデフォルトアクションの合意に署名済みか、当事者が最後の署名を追加することで完了できる部分的に署名された複数の選択肢を用意している。

相互合意により、当事者はいつでも Tx 2 の別のバージョンを作成して、資金を即座にリリースすることができる。
