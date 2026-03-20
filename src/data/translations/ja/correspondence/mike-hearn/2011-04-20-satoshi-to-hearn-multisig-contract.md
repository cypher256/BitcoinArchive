---
title: "タイムロック預金のためのマルチシグコントラクトパターン"
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
description: "サトシがステートフルなスクリプトオペコードがチェーンフォーク攻撃を可能にする理由を説明し、信頼なしに安全なタイムロック預金のためのnLockTimeを使用した詳細なステップバイステップのマルチシグコントラクトパターンを提示する。"
isSatoshi: true
threadId: "satoshi-mike-hearn-holding-coins"
threadPosition: 2
tags:
  - "correspondence"
  - "contracts"
  - "multisig"
  - "nlocktime"
  - "time-lock"
  - "escrow"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
translationStatus: complete
---

スクリプト言語がステートレスでない場合、つまり変化する外部情報やノード間で異なる情報にアクセスできる場合、攻撃者はそれを使ってチェーンをフォークできる。唯一の例外は、ある時点より前は常にfalseで、その後は永久にtrueとなる場合であり、これはnLockTimeで実装されている。

Googleは信頼されているので、ユーザーがGoogleにトークン預金を支払い、アカウントを閉鎖する際にGoogleが返金するということはできないのだろうか？

ただし、質問に答えると、信頼を使わずに実現することも可能だ：

ユーザーからのTx 1は、GoogleとUserの両方の署名を必要とするスクリプトに支払う。

Tx 2（コントラクト）はTx 1を使用し、Userに支払う。nLockTimeは資金をリリースする時間だ。

手順：
1) GoogleがTx 1の作成に使用する公開鍵をUserに渡す。
2) UserがTx 1をプライベートに作成するが、まだブロードキャストしない。
3) UserがTx 1のハッシュをGoogleに渡す。
4) GoogleがnLockTimeを設定してTx 2の自分のパートに署名し、Userに渡す。
5) UserがTx 1をブロードキャストする。
6) UserがTx 2の自分の半分に署名してブロードキャストする。

これらの手順により、ユーザーはTx 1をブロードキャストする前にGoogleが署名したTx 2の半分を手元に持っているため、どのような取引に資金を署名するか確信を持てる。

これはコントラクトを安全に署名するための一般的なパターンだ。Tx 2が最初に準備されるため、当事者は何に支払うか分かっている。Tx 1がブロードキャストされて資金をロックし、Tx 2に割り当てる。言い換えれば、すべての当事者が資金をグループの全員一致の合意によって管理されるプールに割り当てるが、グループは事前に資金に対するデフォルトアクションの合意に署名済みか、当事者が最後の署名を追加することで完了できる部分的に署名された複数の選択肢を用意している。

相互合意により、当事者はいつでもTx 2の別のバージョンを作成して、資金を即座にリリースすることができる。
