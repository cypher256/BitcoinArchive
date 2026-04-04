---
title: "sendtoaddress APIコールの変更提案"
date: 2010-08-13T19:28:23.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=807.msg9073#msg9073"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Gavin Andresenがスレッドを開始: BitcoinTalkトピック807。"
isSatoshi: false
tags: []
translationStatus: complete
---

BitcoinのJSON-RPC APIに一つ小さな変更を提案する：Bitcoinの送信が成功した際にトランザクションIDを返すようにする。

なぜか？アプリケーションのウォレットに出入りするすべてのコインの完全な監査証跡を保持したいからだ。アプリケーションが行うアクションに対応するBitcoinネットワーク上の特定のトランザクションを追跡したい。代替案はsendtoaddressを呼んでからlisttransactionsを呼ぶことだが、2つの類似したトランザクション（同じ金額を同じアドレスに）がほぼ同時に発生した場合、正しく動作しない。

そこで、最もシンプルなことを提案する：JSON-RPCのsendtoaddressコールを変更して、文字列'sent:'の後に256ビットの16進数トランザクションIDを返すようにする。

これは、正確に文字列'sent'を探しているアプリケーションを壊す可能性がある（現在のsendtoaddressの返り値がそれだ）。修正は文字列が'sent'で始まるかどうかを確認するようにアプリを変更するだけだ。

考えたが良くないと思う代替案：
 + 古いアプリを壊さないよう新しいAPIコールにする（sendtoaddress2？ダサい）
 + 送信成功時に'sent:...'の代わりにトランザクションIDのみを返す
 + より多くの情報を含む配列を返す（例えば [ "tx_id": "...", "fee" : 0.0 ]）

コメント/批判は？
