---
title: "アカウントのサンプルコード"
date: 2010-12-10T19:21:03.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=2202.msg28947#msg28947"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿: \"アカウントのサンプルコード\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/536/"
translationStatus: complete
---

0.3.18の新しいアカウントベースのコマンドを使用した疑似コードのサンプルです。

print "send to " + getaccountaddress(username) + " to fund your account"
print "balance: " + getbalance(username, 0)
print "available balance: " + getbalance(username, 6)

// 売上があった場合、相手のアカウントからあなたの""アカウントにお金を移動する
if (move(username, "", amount, 6, "purchased item"))
    SendTheGoods()

// 出金
sendfrom(username, bitcoinaddress, amount, 6, "withdrawal by user")

listtransactions(username)を使って、最近のトランザクションの一覧を表示できます。
