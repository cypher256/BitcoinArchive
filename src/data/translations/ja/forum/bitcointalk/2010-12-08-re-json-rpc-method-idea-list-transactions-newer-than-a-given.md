---
title: "Re: JSON-RPCメソッドのアイデア：指定されたtxidより新しいトランザクションをリストする"
date: 2010-12-08T20:21:49.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=2151.msg28228#msg28228"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「JSON-RPCメソッドのアイデア：指定されたtxidより新しいトランザクションをリストする」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/524/"
threadId: "bt-json-rpc-method-idea-list-transactions-newer-than-"
threadTitle: "JSON-RPC method idea: list transactions newer than a given txid"
threadPosition: 1
translationStatus: complete
---

この方法でlisttransactionsを使うのは安全ではありません。

listtransactionsに消極的だったことで批判されてきたのは知っています。その消極的な理由を説明させてください。

トランザクションは動的です。過去のトランザクションが未承認になったり、消えて戻ってきたり、無効になって消えたり、別の二重支払いに置き換えられたりする可能性があります。日付が変わったり、順序が変わったりすることもあります。

プログラマーは自然にlisttransactionsをこう使いたがります：前回聞いた時以降の新しいトランザクションを教えてくれれば、自分で集計や静的な記録を保持する。これは通常の使用ではすべてうまく動作するように見えますが、金額を何かに使用する場合、非常に悪用可能です：
1) 過去のトランザクションが無効になって消えたことをどうやって知りますか？
2) ブロックチェーンの再編成があった場合、トランザクションが再度承認された時に二重カウントするのは容易です。
3) トランザクションは異なるtxidの二重支払いに置き換えられる可能性があります。両方の支払いをカウントしてしまうでしょう。

以前のトランザクションは既に見たから新しいトランザクションだけ見ればよいというモデルは正しくありません。古いトランザクションはいつでも変わり得ます。

受け取った支払い金額に基づいてアクションを起こす時は、常にbitcoinに戻って現在の残高合計を問い合わせる（またはmoveやsendfromを使用する）必要があり、残高が減る可能性に備えなければなりません。

正しい方法で行うことを容易にするアカウント機能ができた今、listtransactionsを持つ準備がより整いました。
