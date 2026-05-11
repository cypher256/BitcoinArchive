---
title: "Re: JSON-RPC メソッドのアイデア：指定された txid より新しいトランザクションをリストする"
date: 2010-12-09T18:08:08.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=2151.msg28640#msg28640"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「JSON-RPC メソッドのアイデア：指定された txid より新しいトランザクションをリストする」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/530/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Jeff Garzik"
    personSlug: "jeff-garzik"
    date: "2010-12-08T15:58:05.000Z"
  - id: "q2"
    person: "Jeff Garzik"
    personSlug: "jeff-garzik"
    date: "2010-12-09T07:13:50.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> あなたとサトシの「txid 以降の tx」についての意見に同意する。自分の listtransactions（現在は xlisttransactions）パッチは、意図的にその機能を持っておらず、これまでも持ったことがない。
<!-- /tone-skip -->

ユーザーに最近の N 件のトランザクション履歴を表示するようなものに設計されている限り、問題ない。アカウント機能により正しい方法で支払い検出を行うことが容易になった今はなおさらだ。

Gavin、listtransactions にすべてのアカウントのトランザクションをリストするオプションを付けられるか？

インターフェースがどうあるべきかわからない。もしかすると：
listtransactions <JSON null type> [count]

ただしコマンドラインからは難しいだろう。

インターフェースの良い解決策が思いつかないのが問題だ。""のような特殊ケースとして"*"かもしれない。ユーザーがアカウント名"*"を作成できないようにする必要があるだろう。

<!-- quote: q2 -->
<!-- tone-skip -->
> 確かに、それは取引で十分簡単に追跡できる。
<!-- /tone-skip -->

トランザクションで「簡単に」追跡できるというのがどういうことかわからない。
