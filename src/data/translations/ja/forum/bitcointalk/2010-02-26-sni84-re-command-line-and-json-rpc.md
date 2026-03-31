---
title: "Re: コマンドラインとJSON-RPC"
date: 2010-02-26T23:48:44.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=63.msg562#msg562"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「コマンドラインとJSON-RPC」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/84/"
threadId: "bt-command-line-and-json-rpc"
translationStatus: complete
---

wxWidgets 2.9.0を使用しているか？2.9.0以外の使用は推奨しない。

wxヘッダー（arrstr.h）にwxBase外の何かへの参照があるようだ。

BitcoinのmakefileからD__WXDEBUG__を削除すれば、おそらく解決するだろう。

それでも動作せず、とにかく動かしたい場合は、wxWidgetsのinclude/wx/arrstr.h、167行目を編集してwxASSERT_MSGをコメントアウトすることができる。
