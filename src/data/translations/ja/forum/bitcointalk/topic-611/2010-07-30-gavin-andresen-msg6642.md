---
title: "Re: [PATCH] 'xlisttransactions'の実装"
date: 2010-07-30T13:18:06.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=611.msg6642#msg6642"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalk トピック 611 におけるギャビン・アンドレセンの文脈投稿。msg6706 の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

いくつか簡単な提案：

キー名に"class"を使うと、少なくとも JavaScript、おそらく他の言語でも"class"が予約語であるため問題が生じる。"type"や"variety"など他の同義語の方が後の問題が少ない。

あるいは、そのフィールドを削除して、クレジットを正の数、デビットを負の数で報告する方が良いかもしれない。そして別の"generated"フィールド（ブール値の true または false）を追加する。

各エントリはトランザクションを参照するので、"tx_id"として SHA256 の 16 進エンコードされたトランザクション ID を追加することを提案する。そうすれば listtransactions が refundtransaction JSON-RPC 拡張（および将来の gettransactiondetails でトランザクションの親、トランザクションが含まれるブロックなどを取得できるもの）とうまく連携する。

コードは以下のようになる：

```cpp
            uint256 tx_hash = transaction.GetHash();
            string tx_id = tx_hash.GetHex();
            mapJSONResponse.push_back(Pair("tx_id", tx_id));
```
