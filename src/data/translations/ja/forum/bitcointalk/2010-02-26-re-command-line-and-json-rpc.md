---
title: "Re: コマンドラインとJSON-RPC"
date: 2010-02-26T16:29:21.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=63.msg555#msg555"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「コマンドラインとJSON-RPC」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/82/"
threadId: "bt-command-line-and-json-rpc"
translationStatus: complete
---

wx/clipbrd.hは使用されていないので、#if wxUSE_GUIの中に移動してほしい。

SVNのheaders.hを更新した。

すまない、wxbaseにリンクしたが、コンピュータにはフルのwxWidgetsがあった。

db.h:140のクラスDbにメンバー「exisits」がないというのは変だ。pdb->get、pdb->put、pdb->delはその前にコンパイルできていた。Berkeley DBのバージョン4.7.25を使っているか？

Db::exists()
[http://www.oracle.com/technology/documentation/berkeley-db/db/api_reference/CXX/frame_main.html](http://www.oracle.com/technology/documentation/berkeley-db/db/api_reference/CXX/frame_main.html)
[http://www.oracle.com/technology/documentation/berkeley-db/db/api_reference/CXX/dbexists.html](http://www.oracle.com/technology/documentation/berkeley-db/db/api_reference/CXX/dbexists.html)

おそらく最近existsが追加されたのかもしれない。それ以前はgetを使用していたのだろう。
