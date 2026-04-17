---
title: "USE_SSL #defineの削除"
date: 2012-04-05T01:26:12.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/pull/1042"
author: "gavinandresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "gavinandresenがbitcoin/bitcoin PR #1042でスレッドを開始。"
isSatoshi: false
translationStatus: complete
tags:
  - "github"
  - "pull-request"
---

これはUSE_SSLプリプロセッサー#defineの全使用箇所を削除するものである。

以前はこれが必要だった。サトシと私がOpenSSLのlibsslをWindows上で正しくコンパイルする方法を見つけられなかったからである（そのためlibcryptoのみにリンクしていた）。その問題はとうの昔に解消されたので、コードを簡素化しUSE_SSLを廃止しよう。
