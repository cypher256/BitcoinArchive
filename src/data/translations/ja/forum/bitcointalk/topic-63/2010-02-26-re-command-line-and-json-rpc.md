---
title: "Re: コマンドラインと JSON-RPC"
date: 2010-02-26T16:29:21.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=63.msg555#msg555"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「コマンドラインと JSON-RPC」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/82/"
translationStatus: complete
---

wx/clipbrd.h は使用されていないので、#if wxUSE_GUI の中に移動してほしい。

SVN の headers.h を更新した。

すまない、wxbase にリンクしたが、コンピューターにはフルの wxWidgets があった。

db.h:140 のクラス Db にメンバー「exisits」がないというのは変だ。pdb->get、pdb->put、pdb->del はその前にコンパイルできていた。Berkeley DB のバージョン 4.7.25 を使っているか？

Db::exists()
[http://www.oracle.com/technology/documentation/berkeley-db/db/api_reference/CXX/frame_main.html](http://www.oracle.com/technology/documentation/berkeley-db/db/api_reference/CXX/frame_main.html)
[http://www.oracle.com/technology/documentation/berkeley-db/db/api_reference/CXX/dbexists.html](http://www.oracle.com/technology/documentation/berkeley-db/db/api_reference/CXX/dbexists.html)

おそらく最近 exists が追加されたのかもしれない。それ以前は get を使用していたのだろう。
