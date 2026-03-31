---
title: "Re: wallet.datの自動バックアップ"
date: 2010-08-27T02:54:07.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=921.msg11350#msg11350"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「wallet.datの自動バックアップ」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/424/"
threadId: "bt-auto-backing-up-of-wallet-dat"
translationStatus: complete
---

Windowsにmmap(2)があるとは思えない。自作のものを作ってテストするよりも、既存のファイルコピー関数を呼び出す方が良い。

> [Quote from: nelisky on August 27, 2010, 01:21:09 AM](#msg11346)
> JSONやwxWidgetsへの依存を置き換える多数のものにBoostが必要だ。Boostは良質でポータブルなものだから、避けるべきではない。
> 了解、では私が言及したスニペットの単純な標準fstreamの使い方の何が問題なのか？シンプルが最善だと思う Smiley
> しかし、boost::filesystemの機能をすでに使っているなら、そこからcopy_fileを使える。ただ、他のことで必要でなければ、少しやりすぎだと思うだけだ。

ありがとう。どこかにあるだろうと思っていた。

すでに十数箇所でboost::filesystemを使っている。新たに追加される依存関係ではない。そうでなければ各OSごとに#ifdefを用意してあらゆる場所でテストしなければならないような、多くのポータブルなものを提供してくれる。
