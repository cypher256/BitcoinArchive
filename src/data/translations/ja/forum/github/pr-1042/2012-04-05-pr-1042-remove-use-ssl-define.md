---
title: "USE_SSL #define の削除"
date: 2012-04-05T01:26:12.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/pull/1042"
author: "gavinandresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "gavinandresen が bitcoin/bitcoin PR #1042 でスレッドを開始。"
isSatoshi: false
translationStatus: complete
tags:
  - "github"
  - "pull-request"
---

これは USE_SSL プリプロセッサー#define の全使用箇所を削除するものである。

以前はこれが必要だった。サトシと私が OpenSSL の libssl を Windows 上で正しくコンパイルする方法を見つけられなかったからである（そのため libcrypto のみにリンクしていた）。その問題はとうの昔に解消されたので、コードを簡素化し USE_SSL を廃止しよう。
