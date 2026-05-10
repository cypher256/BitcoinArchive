---
title: "Re: コマンドラインと JSON-RPC"
date: 2010-02-26T23:48:44.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=63.msg562#msg562"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「コマンドラインと JSON-RPC」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/84/"
translationStatus: complete
---

wxWidgets 2.9.0 を使用しているか？2.9.0 以外の使用は推奨しない。

wx ヘッダー（arrstr.h）に wxBase 外の何かへの参照があるようだ。

Bitcoin の makefile から D__WXDEBUG__を削除すれば、おそらく解決するだろう。

それでも動作せず、とにかく動かしたい場合は、wxWidgets の include/wx/arrstr.h、167 行目を編集して wxASSERT_MSG をコメントアウトすることができる。
