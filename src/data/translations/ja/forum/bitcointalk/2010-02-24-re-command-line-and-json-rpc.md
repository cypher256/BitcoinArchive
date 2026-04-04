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
---

[Quote from: theymos on February 24, 2010, 03:07:37 AM](#msg467)
> [Quote from: satoshi on February 23, 2010, 10:15:41 PM](#msg452)
> > Linuxではlibgtk2.0-0のインストールが必要だ。
>
> この要件はいずれ撤廃されるのか？ GTKを扱うのは面倒だ。
[Quote from: satoshi on February 23, 2010, 10:15:41 PM](#msg452)
> SVN上のバージョン0.2.6はデーモンとして実行でき、コマンドラインまたはJSON-RPCで制御できるようになった。
>
> Linuxではlibgtk2.0-0がインストールされている必要があるが、GUIが実行されている必要はない。うまくいけば、ウィンドウシステムがインストールされていなくてもGTKをインストールできるだろう。
>
> デーモンとして起動するコマンド：
> bitcoin -daemon [スイッチ...]
>
> または、通常通りUIを実行しつつコマンドラインやJSON-RPCからも制御可能にするには、「-server」スイッチを使用する。
> bitcoin -server [スイッチ...]
>
> どちらのスイッチでも、127.0.0.1:8332でローカルソケット接続を受け付けるHTTP JSON-RPCサーバーが実行される。ポートはループバックにバインドされ、ローカルマシンからのみアクセスできるが、実行中のユーザーだけでなくどのアカウントからでもアクセスできる。
>
> コマンドラインから制御するには、インターフェースはスイッチなしのコマンド名の後にパラメータ（ある場合）を続ける。
> bitcoin <コマンド> [パラメータ...]
>
> 例：
> bitcoin getinfo<br>
> bitcoin getdifficulty<br>
> bitcoin setgenerate true<br>
> bitcoin stop
>
> これはシンプルなJSON-RPCクライアントで、JSONの結果を表示する。コマンドのリストはrpc.cppを参照してほしい。
>
> Webアプリや自動化されたものは通常、コマンドラインではなくJSON-RPCを直接使用する。すべての主要言語にJSON-RPCライブラリがある。PHPやPythonのようなスクリプト言語では、構文はローカル関数を呼び出すのと同じくらい自然だ。

この要件はいつか解消されますか？GTKを扱いたくないのですが。
GTKを「扱う」のに実際どれくらいの手間がかかるのだろうか？「sudo apt-get install libgtk2.0-0」をして、いくつかの余分なライブラリが置いてあるだけの問題ではないか？GTKは何もする必要はなく、ただそこにあればBitcoinが起動時にリンクでき、GUIがないためgtk-init-checkの呼び出しが失敗して、それで終わりだ。

GTKのリンクを避けるためだけにwxBaseを使用するために、すべてをifdefで台無しにして、別のコンパイルとバイナリを用意するよりマシだ。
