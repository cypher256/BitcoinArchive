---
title: "Re:（Gavin Andresenの文脈投稿）"
date: 2010-07-30T13:18:06.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=611.msg6642#msg6642"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック611におけるGavin Andresenの文脈投稿。msg6706の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

Couple of quick suggestions:

Using the key name "class" will cause problems for, at least, JavaScript, and probably other languages where "class" is a reserved word.  "type" or "variety" or some other synonym will cause fewer problems later.

Or, maybe better, get rid of that field and just report credits as positive numbers and debits as negative.  And add a separate "generated" field (boolean true or false).

Since each entry refers to a transaction, I'd suggest adding a "tx_id" SHA256 hex-encoded transaction id.  Then listtransactions would play nicely with the refundtransaction JSON-RPC extension (and maybe a future gettransactiondetails that let you get transaction parents, which block the transaction was in, and so on).

Code to get that would look something like:
Code:            uint256 tx_hash = transaction.GetHash();
            string tx_id = tx_hash.GetHex();
            mapJSONResponse.push_back(Pair("tx_id", tx_id));
