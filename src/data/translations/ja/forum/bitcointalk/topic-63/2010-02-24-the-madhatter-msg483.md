---
title: "Re: コマンドラインとJSON-RPC"
date: 2010-02-24T06:38:37.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=63.msg483#msg483"
author: "The Madhatter"
participants:
  - name: "The Madhatter"
    slug: "the-madhatter"
description: "BitcoinTalkトピック63におけるThe Madhatterの文脈投稿。after msg482, サトシを引用."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-02-24T06:17:23.000Z"
    sourceEntryId: "forum/bitcointalk/topic-63/2010-02-24-re-command-line-and-json-rpc"
  - id: "q2"
    person: "theymos"
    personSlug: "theymos"
    date: "2010-02-24T03:07:37.000Z"
    sourceEntryId: "forum/bitcointalk/topic-63/2010-02-24-theymos-msg467"
  - id: "q3"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-02-23T22:15:41.000Z"
    sourceEntryId: "forum/bitcointalk/topic-63/2010-02-23-command-line-and-json-rpc"
translationStatus: complete
---

*NIX系の人々はある種の「ピューリスト」だ。本来必要のないライブラリでOSのインストールを汚されたくないのだ。

何百万ものifdefも答えではない。うーん…これにはもう少し考察が必要かもしれない。

<!-- quote: q1 -->
>
> <!-- quote: q2 -->
> > <!-- quote: q3 -->
> > >
> > > > Linuxではlibgtk2.0-0のインストールが必要だ
> >
> > この要件はいずれ取り除かれますか？ GTKを相手にしたくないので。
>
> GTKを「相手にする」のに、実際どれだけ手間がかかるのか？ 「sudo apt-get install libgtk2.0-0」を実行して、ライブラリがいくつか余分に置かれるだけではないのか？ GTKは何かをする必要はない、bitcoinが起動時にリンクするためにそこに在りさえすればいい。GUIがないのでgtk-init-check呼び出しが失敗する、それで終わりだ。
>
> こうすれば、GTKのリンクを避けるためだけにifdefだらけにし、wxBaseを使う別個のコンパイルとバイナリを用意する、という形で全体を切り刻まずに済む。
