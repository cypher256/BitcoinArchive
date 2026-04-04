---
title: "Re: 複数のウォレット、1台のコンピュータ"
date: 2010-10-25T16:53:53.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=665.msg18508#msg18508"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「複数のウォレット、1台のコンピュータ」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/498/"
translationStatus: complete
---

アカウントベースのコマンドの使い方の擬似コードだ。ウェブサイト統合がとても簡単になる。

```
print "send to " + getaccountaddress(username) + " to fund your account"
print "balance: " + getbalance(username, 0)
print "available balance: " + getbalance(username, 6)
```

```
// 販売したら、そのアカウントからお金を移動する
move(username, "", amount, 6)
```

// 出金
sendfrom(username, bitcoinaddress, amount, 6)
