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
translationStatus: complete
quotes:
  - id: "q1"
    person: "nelisky"
    personSlug: "nelisky"
    date: "2010-08-26T16:21:09.000Z"
---

Windowsにmmap(2)があるとは思えない。自作のものを作ってテストするよりも、既存のファイルコピー関数を呼び出す方が良い。

<!-- quote: q1 -->
<!-- tone-skip -->
> しかしboost::filesystemの機能を既に使っているなら、そこからcopy_fileを使える。他に何かのために既に必要でなければ、少々大げさだと思うだけだ。
<!-- /tone-skip -->

ありがとう。どこかにあるだろうと思っていた。

すでに十数箇所でboost::filesystemを使っている。新たに追加される依存関係ではない。そうでなければ各OSごとに#ifdefを用意してあらゆる場所でテストしなければならないような、多くのポータブルなものを提供してくれる。
