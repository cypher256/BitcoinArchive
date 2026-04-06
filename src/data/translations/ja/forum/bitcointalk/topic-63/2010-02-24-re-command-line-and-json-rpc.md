---
title: "Re: コマンドラインとJSON-RPC"
date: 2010-02-24T06:17:23.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=63.msg482#msg482"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「コマンドラインとJSON-RPC」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/74/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "theymos"
    date: "2010-02-23T18:07:37.000Z"
  - id: "q2"
    person: "satoshi"
    date: "2010-02-23T13:15:41.000Z"
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

GTKを「扱う」のに実際どれくらいの手間がかかるのだろうか？「sudo apt-get install libgtk2.0-0」をして、いくつかの余分なライブラリが置いてあるだけの問題ではないか？GTKは何もする必要はなく、ただそこにあればBitcoinが起動時にリンクでき、GUIがないためgtk-init-checkの呼び出しが失敗して、それで終わりだ。

GTKのリンクを避けるためだけにwxBaseを使用するために、すべてをifdefで台無しにして、別のコンパイルとバイナリを用意するよりマシだ。
