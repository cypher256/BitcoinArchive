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
threadTitle: "Command Line and JSON-RPC"
threadPosition: 1
translationStatus: complete
---

SVN上のバージョン0.2.6はデーモンとして実行でき、コマンドラインまたはJSON-RPCで制御できるようになりました。

Linuxではlibgtk2.0-0がインストールされている必要がありますが、GUIが実行されている必要はありません。うまくいけば、ウィンドウシステムがインストールされていなくてもGTKをインストールできるでしょう。

デーモンとして起動するコマンド：
bitcoin -daemon [スイッチ...]

または、通常通りUIを実行しつつコマンドラインやJSON-RPCからも制御可能にするには、「-server」スイッチを使用します。
bitcoin -server [スイッチ...]

どちらのスイッチでも、127.0.0.1:8332でローカルソケット接続を受け付けるHTTP JSON-RPCサーバーが実行されます。ポートはループバックにバインドされ、ローカルマシンからのみアクセスできますが、実行中のユーザーだけでなくどのアカウントからでもアクセスできます。

コマンドラインから制御するには、インターフェースはスイッチなしのコマンド名の後にパラメータ（ある場合）を続けます。
bitcoin <コマンド> [パラメータ...]

例：
bitcoin getinfo
bitcoin getdifficulty
bitcoin setgenerate true
bitcoin stop

これはシンプルなJSON-RPCクライアントで、JSONの結果を表示します。コマンドのリストはrpc.cppを参照してください。

Webアプリや自動化されたものは通常、コマンドラインではなくJSON-RPCを直接使用します。すべての主要言語にJSON-RPCライブラリがあります。PHPやPythonのようなスクリプト言語では、構文はローカル関数を呼び出すのと同じくらい自然です。
