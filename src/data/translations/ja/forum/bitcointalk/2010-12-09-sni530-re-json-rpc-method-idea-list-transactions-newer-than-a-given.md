---
title: "Re: JSON-RPCメソッドのアイデア：指定されたtxidより新しいトランザクションをリストする"
date: 2010-12-09T18:08:08.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=2151.msg28640#msg28640"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「JSON-RPCメソッドのアイデア：指定されたtxidより新しいトランザクションをリストする」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/530/"
threadId: "bt-json-rpc-method-idea-list-transactions-newer-than-"
threadPosition: 5
translationStatus: complete
---

[Quote from: jgarzik on December 09, 2010, 12:58:05 AM](https://bitcointalk.org/index.php?topic=2151.msg28330#msg28330)「<txid>以降のtx」については、あなたとsatoshiに同意します。私のlisttransactions（現在はxlisttransactions）パッチにはその機能は意図的になく、一度もありませんでした。
ユーザーに最近のN件のトランザクション履歴を表示するようなものに設計されている限り、問題ない。アカウント機能により正しい方法で支払い検出を行うことが容易になった今はなおさらだ。

Gavin、listtransactionsにすべてのアカウントのトランザクションをリストするオプションを付けられるか？

インターフェースがどうあるべきかわからない。もしかすると：
listtransactions <JSON null type> [count]

ただしコマンドラインからは難しいだろう。

インターフェースの良い解決策が思いつかないのが問題だ。""のような特殊ケースとして"*"かもしれない。ユーザーがアカウント名"*"を作成できないようにする必要があるだろう。

[Quote from: jgarzik on December 09, 2010, 04:13:50 PM](https://bitcointalk.org/index.php?topic=2151.msg28572#msg28572)もちろん、それはトランザクションで追跡するのは十分簡単です。
トランザクションで「簡単に」追跡できるというのがどういうことかわからない。
