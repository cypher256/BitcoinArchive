---
title: "Re: コマンドラインと JSON-RPC"
date: 2010-02-24T06:17:23.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=63.msg482#msg482"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「コマンドラインと JSON-RPC」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/74/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "theymos"
    personSlug: "michael-marquardt"
    date: "2010-02-23T18:07:37.000Z"
    sourceEntryId: "forum/bitcointalk/topic-63/2010-02-24-theymos-msg467"
  - id: "q2"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-02-23T13:15:41.000Z"
    sourceEntryId: "forum/bitcointalk/topic-63/2010-02-23-command-line-and-json-rpc"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> <!-- quote: q2 -->
> <!-- tone-skip -->
> > SVN上のバージョン0.2.6はデーモンとして実行でき、コマンドラインまたはJSON-RPCで制御できるようになった。
> <!-- /tone-skip -->
> 
> この要件はいつか解消されますか？GTKを扱いたくないのですが。
<!-- /tone-skip -->

GTK を「扱う」のに実際どれくらいの手間がかかるのだろうか？「sudo apt-get install libgtk2.0-0」をして、いくつかの余分なライブラリが置いてあるだけの問題ではないか？GTK は何もする必要はなく、ただそこにあれば Bitcoin が起動時にリンクでき、GUI がないため gtk-init-check の呼び出しが失敗して、それで終わりだ。

GTK のリンクを避けるためだけに wxBase を使用するために、すべてを ifdef で台無しにして、別のコンパイルとバイナリを用意するよりマシだ。
