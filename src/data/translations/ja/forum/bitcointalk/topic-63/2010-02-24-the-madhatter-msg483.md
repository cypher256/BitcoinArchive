---
title: "Re: コマンドラインと JSON-RPC"
date: 2010-02-24T06:38:37.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=63.msg483#msg483"
author: "The Madhatter"
participants:
  - name: "The Madhatter"
    slug: "the-madhatter"
description: "BitcoinTalk トピック 63 における The Madhatter の文脈投稿。after msg482, サトシを引用."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-02-24T06:17:23.000Z"
    sourceEntryId: "forum/bitcointalk/topic-63/2010-02-24-re-command-line-and-json-rpc"
  - id: "q2"
    parent: "q1"
    person: "theymos"
    personSlug: "michael-marquardt"
    date: "2010-02-24T03:07:37.000Z"
    sourceEntryId: "forum/bitcointalk/topic-63/2010-02-24-theymos-msg467"
  - id: "q3"
    parent: "q2"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-02-23T22:15:41.000Z"
    sourceEntryId: "forum/bitcointalk/topic-63/2010-02-23-command-line-and-json-rpc"
translationStatus: complete
---

*NIX 系の人々はある種の「ピューリスト」だ。本来必要のないライブラリで OS のインストールを汚されたくないのだ。

何百万もの ifdef も答えではない。うーん…これにはもう少し考察が必要かもしれない。

<!-- quote: q1 -->
>
> <!-- quote: q2 -->
> > <!-- quote: q3 -->
> > >
> > > > Linuxではlibgtk2.0-0のインストールが必要だ
> >
> > この要件はいずれ取り除かれますか？ GTKを相手にしたくないので。
>
> GTK を「扱う」のに実際どれくらいの手間がかかるのだろうか？「sudo apt-get install libgtk2.0-0」をして、いくつかの余分なライブラリが置いてあるだけの問題ではないか？GTK は何もする必要はなく、ただそこにあれば Bitcoin が起動時にリンクでき、GUI がないため gtk-init-check の呼び出しが失敗して、それで終わりだ。
>
> GTK のリンクを避けるためだけに wxBase を使用するために、すべてを ifdef で台無しにして、別のコンパイルとバイナリを用意するよりマシだ。
