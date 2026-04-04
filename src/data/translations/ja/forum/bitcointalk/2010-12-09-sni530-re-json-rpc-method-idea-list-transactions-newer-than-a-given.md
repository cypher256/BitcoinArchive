---
title: "Re: JSON-RPCメソッドのアイデア：指定されたtxidより新しいトランザクションをリストする"
date: 2010-12-09T18:08:08.000Z
type: "forum-post"
source: "bitcointalk"
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
translationStatus: complete
---

[Quote from: jgarzik on December 09, 2010, 12:58:05 AM](#msg28330)
> [Quote from: gavinandresen on December 09, 2010, 12:41:44 AM](#msg28324)
> > 「<txid>以降に発生した取引をリストする」を持たないもう一つの理由を追加する：
>
> あなたとサトシの「txid以降のtx」についての意見に同意する。自分のlisttransactions（現在はxlisttransactions）パッチは、意図的にその機能を持っておらず、これまでも持ったことがない。

ユーザーに最近のN件のトランザクション履歴を表示するようなものに設計されている限り、問題ない。アカウント機能により正しい方法で支払い検出を行うことが容易になった今はなおさらだ。

Gavin、listtransactionsにすべてのアカウントのトランザクションをリストするオプションを付けられるか？

インターフェースがどうあるべきかわからない。もしかすると：
listtransactions <JSON null type> [count]

ただしコマンドラインからは難しいだろう。

インターフェースの良い解決策が思いつかないのが問題だ。""のような特殊ケースとして"*"かもしれない。ユーザーがアカウント名"*"を作成できないようにする必要があるだろう。

[Quote from: jgarzik on December 09, 2010, 04:13:50 PM](#msg28572)
> [Quote from: ribuck on December 09, 2010, 11:48:56 AM](#msg28491)
> [Quote from: jgarzik on December 08, 2010, 11:07:22 PM](#msg28301)
> > > 過去の取引が無効になり消えた場合、ウェブサイトは潜在的な損失を避けられない。ユーザーはすでにPayPal-USDやLR-USDやPecunix GAUを受け取って消えているからだ。
> > 
> > 
> > それが常に当てはまるわけではない。顧客がウェブサイトに残高を持っている場合もある。ウェブサイトの運営者は、過去の取引が無効になり消えた場合、確実に知りたいだろう。
>
> 確かに、それは取引で十分簡単に追跡できる。

トランザクションで「簡単に」追跡できるというのがどういうことかわからない。
