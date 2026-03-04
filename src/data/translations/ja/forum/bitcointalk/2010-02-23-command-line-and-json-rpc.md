---
title: "コマンドラインとJSON-RPC"
date: 2010-02-23T22:15:41.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=63.msg452#msg452"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoの投稿：「コマンドラインとJSON-RPC」。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/71/"
threadId: "bt-command-line-and-json-rpc"
threadPosition: 1
translationStatus: complete
---

SVN上のバージョン0.2.6はデーモンとして実行でき、コマンドラインまたはJSON-RPCで制御できるようになった。

Linuxではlibgtk2.0-0がインストールされている必要があるが、GUIが実行されている必要はない。うまくいけば、ウィンドウシステムがインストールされていなくてもGTKをインストールできるだろう。

デーモンとして起動するコマンド：
bitcoin -daemon [スイッチ...]

または、通常通りUIを実行しつつコマンドラインやJSON-RPCからも制御可能にするには、「-server」スイッチを使用する。
bitcoin -server [スイッチ...]

どちらのスイッチでも、127.0.0.1:8332でローカルソケット接続を受け付けるHTTP JSON-RPCサーバーが実行される。ポートはループバックにバインドされ、ローカルマシンからのみアクセスできるが、実行中のユーザーだけでなくどのアカウントからでもアクセスできる。

コマンドラインから制御するには、インターフェースはスイッチなしのコマンド名の後にパラメータ（ある場合）を続ける。
bitcoin <コマンド> [パラメータ...]

例：
bitcoin getinfo<br>
bitcoin getdifficulty<br>
bitcoin setgenerate true<br>
bitcoin stop

これはシンプルなJSON-RPCクライアントで、JSONの結果を表示する。コマンドのリストはrpc.cppを参照してほしい。

Webアプリや自動化されたものは通常、コマンドラインではなくJSON-RPCを直接使用する。すべての主要言語にJSON-RPCライブラリがある。PHPやPythonのようなスクリプト言語では、構文はローカル関数を呼び出すのと同じくらい自然だ。
