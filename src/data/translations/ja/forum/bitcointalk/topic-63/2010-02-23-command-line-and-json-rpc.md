---
title: "コマンドラインと JSON-RPC"
date: 2010-02-23T22:15:41.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=63.msg452#msg452"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿：「コマンドラインと JSON-RPC」。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/71/"
translationStatus: complete
---

SVN 上のバージョン 0.2.6 はデーモンとして実行でき、コマンドラインまたは JSON-RPC で制御できるようになった。

Linux では libgtk2.0-0 がインストールされている必要があるが、GUI が実行されている必要はない。うまくいけば、ウィンドウシステムがインストールされていなくても GTK をインストールできるだろう。

デーモンとして起動するコマンド：
bitcoin -daemon [スイッチ...]

または、通常通り UI を実行しつつコマンドラインや JSON-RPC からも制御可能にするには、「-server」スイッチを使用する。
bitcoin -server [スイッチ...]

どちらのスイッチでも、127.0.0.1:8332 でローカルソケット接続を受け付ける HTTP JSON-RPC サーバーが実行される。ポートはループバックにバインドされ、ローカルマシンからのみアクセスできるが、実行中のユーザーだけでなくどのアカウントからでもアクセスできる。

コマンドラインから制御するには、インターフェースはスイッチなしのコマンド名の後にパラメーター（ある場合）を続ける。
bitcoin <コマンド> [パラメーター...]

例：
bitcoin getinfo<br>
bitcoin getdifficulty<br>
bitcoin setgenerate true<br>
bitcoin stop

これはシンプルな JSON-RPC クライアントで、JSON の結果を表示する。コマンドのリストは rpc.cpp を参照してほしい。

Web アプリや自動化されたものは通常、コマンドラインではなく JSON-RPC を直接使用する。すべての主要言語に JSON-RPC ライブラリがある。PHP や Python のようなスクリプト言語では、構文はローカル関数を呼び出すのと同じくらい自然だ。
