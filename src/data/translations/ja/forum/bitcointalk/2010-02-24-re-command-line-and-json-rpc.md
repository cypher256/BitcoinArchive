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
threadId: "bt-command-line-and-json-rpc"
translationStatus: complete
---

[theymosの2010年2月24日 03:07:37 AMの投稿より引用](https://bitcointalk.org/index.php?topic=63.msg467#msg467)[satoshiの2010年2月23日 10:15:41 PMの投稿より引用](https://bitcointalk.org/index.php?topic=63.msg452#msg452)LinuxではGTK2.0-0がインストールされている必要があります。
この要件はいつか解消されますか？GTKを扱いたくないのですが。
GTKを「扱う」のに実際どれくらいの手間がかかるのだろうか？「sudo apt-get install libgtk2.0-0」をして、いくつかの余分なライブラリが置いてあるだけの問題ではないか？GTKは何もする必要はなく、ただそこにあればBitcoinが起動時にリンクでき、GUIがないためgtk-init-checkの呼び出しが失敗して、それで終わりだ。

GTKのリンクを避けるためだけにwxBaseを使用するために、すべてをifdefで台無しにして、別のコンパイルとバイナリを用意するよりマシだ。
