---
title: "Re: wallet.dat の自動バックアップ"
date: 2010-08-27T02:54:07.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=921.msg11350#msg11350"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「wallet.dat の自動バックアップ」におけるサトシ・ナカモトの返信。"
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
    sourceEntryId: "forum/bitcointalk/topic-921/2010-08-27-nelisky-msg11346"
---

Windows に mmap(2)があるとは思えない。自作のものを作ってテストするよりも、既存のファイルコピー関数を呼び出す方が良い。

<!-- quote: q1 -->
<!-- tone-skip -->
> しかし boost::filesystem の機能を既に使っているなら、そこから copy_file を使える。他に何かのために既に必要でなければ、少々大げさだと思うだけだ。
<!-- /tone-skip -->

ありがとう。どこかにあるだろうと思っていた。

すでに十数箇所で boost::filesystem を使っている。新たに追加される依存関係ではない。そうでなければ各 OS ごとに#ifdef を用意してあらゆる場所でテストしなければならないような、多くのポータブルなものを提供してくれる。
