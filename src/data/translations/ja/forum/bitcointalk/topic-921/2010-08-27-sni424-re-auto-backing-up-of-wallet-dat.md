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
---

Windowsにmmap(2)があるとは思えない。自作のものを作ってテストするよりも、既存のファイルコピー関数を呼び出す方が良い。

[Quote from: nelisky on August 27, 2010, 01:21:09 AM](#msg11346)
> [Quote from: satoshi on August 27, 2010, 01:13:42 AM](#msg11345)
> > メモリに読み込んで書き出すと、メモリが逼迫している状況では失敗する可能性がある。
> >
> > copyfile(const char* from, const char* to) や copyfile(path from, path to) のようなものを探している。できればBoostにあるもの。見つけてくれれば、実装に取りかかる可能性が高くなる。
> >
> >
> [Quote from: nelisky on August 26, 2010, 01:21:57 AM](#msg11232)
> > > ファイルコピーについては、boost依存を増やす必要があるだろうか？私としては依存の少ないコアライブラリが欲しい。
> >
> > JSONやwxWidgetsの依存を置き換える十数個の機能のためにBoostは必須だ。Boostは良い、ポータブルなものだ。敬遠すべきではない。
>
> では、私が言及したスニペットのシンプルな標準fstreamの使用の何が問題なのか？シンプルが一番だと思う Smiley
>
> しかしboost::filesystemの機能を既に使っているなら、そこからcopy_fileを使える。他に何かのために既に必要でなければ、少々大げさだと思うだけだ。

ありがとう。どこかにあるだろうと思っていた。

すでに十数箇所でboost::filesystemを使っている。新たに追加される依存関係ではない。そうでなければ各OSごとに#ifdefを用意してあらゆる場所でテストしなければならないような、多くのポータブルなものを提供してくれる。
