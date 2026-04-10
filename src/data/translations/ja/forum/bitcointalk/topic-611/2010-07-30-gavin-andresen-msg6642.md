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
description: "BitcoinTalkトピック611におけるギャビン・アンドレセンの文脈投稿。msg6706の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

いくつか簡単な提案：

キー名に"class"を使うと、少なくともJavaScript、おそらく他の言語でも"class"が予約語であるため問題が生じる。"type"や"variety"など他の同義語の方が後の問題が少ない。

あるいは、そのフィールドを削除して、クレジットを正の数、デビットを負の数で報告する方が良いかもしれない。そして別の"generated"フィールド（ブール値のtrueまたはfalse）を追加する。

各エントリはトランザクションを参照するので、"tx_id"としてSHA256の16進エンコードされたトランザクションIDを追加することを提案する。そうすればlisttransactionsがrefundtransaction JSON-RPC拡張（および将来のgettransactiondetailsでトランザクションの親、トランザクションが含まれるブロックなどを取得できるもの）とうまく連携する。

コードは以下のようになる：
Code:            uint256 tx_hash = transaction.GetHash();
            string tx_id = tx_hash.GetHex();
            mapJSONResponse.push_back(Pair("tx_id", tx_id));
