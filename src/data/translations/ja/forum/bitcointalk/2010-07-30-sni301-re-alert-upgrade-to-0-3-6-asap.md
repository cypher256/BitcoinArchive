---
title: "Re: *** 警告 *** 至急0.3.6にアップグレード！"
date: 2010-07-30T21:44:04.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=626.msg6728#msg6728"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがBoostのバージョン互換性の問題について説明し、Mac OSX版のリリースを発表。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/301/"
threadId: "bt-alert-upgrade-to-0-3-6-asap"
translationStatus: complete
---

> [Quote from: knightmb on July 30, 2010, 08:04:19 PM](#msg6713)
> つまり、最後のコマンドは単純にこうすべきだ

**sudo apt-get install libboost1.37-dev**
にすればいい
ただし、それはboost 1.40以降（Ubuntu 10.04）では動作しない。その場合はlibboost-all-devを入手する必要がある。

最近Boostの仕様がいろいろ変わったようで、「-mt」などの問題もあり、大変だ。

ちなみに、Boost 1.34を試したが、boost.interprocessがなかった。

Mac OSX版が利用可能になった。bitcoin.orgまたはSourceForgeのリンクを見てくれ。
