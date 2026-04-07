---
title: "Re: JSON-RPC method idea: list transactions newer than a given txid"
date: 2010-12-09T19:41:33.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=2151.msg28666#msg28666"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック2151におけるギャビン・アンドレセンの文脈投稿。after msg28640, サトシを引用."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-12-09T18:08:08.000Z"
    sourceEntryId: "forum/bitcointalk/topic-2151/2010-12-09-sni530-re-json-rpc-method-idea-list-transactions-newer-than-a-given"
translationStatus: complete
---

<!-- quote: q1 -->
> Gavin、listtransactionsに全アカウントのトランザクションを一覧表示するオプションを追加できないか？
> 
> どんなインターフェースにすべきかは分からないが、たとえば：
> listtransactions  [count]
> 
> ただ、コマンドラインからこれをやるのは難しいだろう。
> 
> インターフェースの良い解決策が思い浮かばない、そこが問題だ。""と同じように"*"を特殊ケースにするのもありかもしれない。ただし、ユーザーが"*"というアカウント名を作成できないようにする必要がある。

ああ、listtransactions "*" <count> という形は実現可能だ。他のアカウント関連ルーチンも、"*"を渡された場合は新しい「invalid account name」エラーを返すようにすればいい。

ただし、これには2つの懸念がある：

1. listtransactions "*" はウォレット内のすべてのトランザクションを走査する必要がある（トランザクションは時刻でインデックス化されていない）。大きなウォレットでは遅くなるし、時間とともにさらに遅くなっていく。listtransactions * を高速化するためだけにトランザクションをインデックス化するのは、「使わないオプション機能はコストを発生させるべきではない」という原則に反する。

2.「全アカウントを横断して直近N件のトランザクションを一覧表示する」のユースケースは何だ？私が思いつくのは、JSON-RPC経由でbitcoindと通信する代替GUIを開発するケースだけだ。ただ、それをサポートするには同時に他の機能もいくつか追加する必要がある（たとえば、listtransactionsが返すオブジェクトにアカウント情報やビットコインアドレス情報を追加する必要がある……）。
