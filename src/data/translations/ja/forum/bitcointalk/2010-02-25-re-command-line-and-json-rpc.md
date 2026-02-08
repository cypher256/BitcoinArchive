---
title: "Re: コマンドラインとJSON-RPC"
date: 2010-02-25T22:54:17.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=63.msg539#msg539"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「コマンドラインとJSON-RPC」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/80/"
threadId: "bt-command-line-and-json-rpc"
threadTitle: "Command Line and JSON-RPC"
threadPosition: 4
translationStatus: complete
---

OK、wxBaseのみをリンクしGTKをリンクしないビルドターゲットbitcoindを作成しました。SVN上のバージョン0.2.7です。

ui.cppから初期化とシャットダウンの処理をinit.cppに分離したので、ui.cppは純粋なUIのみになりました。ui.hはwxUSE_GUI=0の場合にインラインスタブを提供します。ノードからUIへのインターフェース関数は4つだけです。bitcoindビルドでは、ui.oやuibase.oはリンクしません。

[sirius-mの2010年2月25日 04:32:17 PMの投稿より引用](https://bitcointalk.org/index.php?topic=63.msg538#msg538)すぐに増加し始めました。valgrindが役立つか試してみます。
何かUIの処理が失敗したか、正しく初期化されなかったために、wxWidgets内で無限にリトライしているような感じがします。初期化失敗を無視して実行を続けるハックは、未知の領域に入ることを意味します。このモードではwxをほとんど使用しないという事実に頼っています。wxGetTranslationやwxMutexなど、いくつかは引き続き使用しています。

別のデバッグ方法として、gdbで実行し、すべてが静かになりすべてのスレッドがアイドルになるのを待ち、ブレークして、どのスレッドが忙しく何かをしているか、何をしているかを確認する方法があります。

bitcoindはおそらく問題なく動作すると思いますが、問題のデバッグをしていただけると助かります。
