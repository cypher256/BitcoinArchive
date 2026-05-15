---
title: "Re: コマンドラインと JSON-RPC"
date: 2010-02-25T22:54:17.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=63.msg539#msg539"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「コマンドラインと JSON-RPC」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/80/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "sirius-m"
    personSlug: "martti-malmi"
    date: "2010-02-25T07:32:17.000Z"
    sourceEntryId: "forum/bitcointalk/topic-63/2010-02-25-sirius-msg538"
---

OK、wxBase のみをリンクし GTK をリンクしないビルドターゲット bitcoind を作成した。SVN 上のバージョン 0.2.7 だ。

ui.cpp から初期化とシャットダウンの処理を init.cpp に分離したので、ui.cpp は純粋な UI のみになった。ui.h は wxUSE_GUI=0 の場合にインラインスタブを提供する。ノードから UI へのインターフェース関数は 4 つだけだ。bitcoind ビルドでは、ui.o や uibase.o はリンクしない。

<!-- quote: q1 -->
<!-- tone-skip -->
> すぐに増加し始めました。valgrindで調べてみます。
<!-- /tone-skip -->
何か UI の処理が失敗したか、正しく初期化されなかったために、wxWidgets 内で無限にリトライしているような感じがする。初期化失敗を無視して実行を続けるハックは、未知の領域に入ることを意味する。このモードでは wx をほとんど使用しないという事実に頼っている。wxGetTranslation や wxMutex など、いくつかは引き続き使用している。

別のデバッグ方法として、gdb で実行し、すべてが静かになりすべてのスレッドがアイドルになるのを待ち、ブレークして、どのスレッドが忙しく何かをしているか、何をしているかを確認する方法がある。

bitcoind はおそらく問題なく動作すると思うが、問題のデバッグをしてもらえると助かる。
