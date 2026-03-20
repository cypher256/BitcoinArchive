---
title: "Re: コマンドラインとJSON-RPC"
date: 2010-02-25T22:54:17.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=63.msg539#msg539"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「コマンドラインとJSON-RPC」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/80/"
threadId: "bt-command-line-and-json-rpc"
threadPosition: 4
translationStatus: complete
---

OK、wxBaseのみをリンクしGTKをリンクしないビルドターゲットbitcoindを作成した。SVN上のバージョン0.2.7だ。

ui.cppから初期化とシャットダウンの処理をinit.cppに分離したので、ui.cppは純粋なUIのみになった。ui.hはwxUSE_GUI=0の場合にインラインスタブを提供する。ノードからUIへのインターフェース関数は4つだけだ。bitcoindビルドでは、ui.oやuibase.oはリンクしない。

[sirius-mの2010年2月25日 04:32:17 PMの投稿より引用](https://bitcointalk.org/index.php?topic=63.msg538#msg538)すぐに増加し始めました。valgrindが役立つか試してみます。
何かUIの処理が失敗したか、正しく初期化されなかったために、wxWidgets内で無限にリトライしているような感じがする。初期化失敗を無視して実行を続けるハックは、未知の領域に入ることを意味する。このモードではwxをほとんど使用しないという事実に頼っている。wxGetTranslationやwxMutexなど、いくつかは引き続き使用している。

別のデバッグ方法として、gdbで実行し、すべてが静かになりすべてのスレッドがアイドルになるのを待ち、ブレークして、どのスレッドが忙しく何かをしているか、何をしているかを確認する方法がある。

bitcoindはおそらく問題なく動作すると思うが、問題のデバッグをしてもらえると助かる。
