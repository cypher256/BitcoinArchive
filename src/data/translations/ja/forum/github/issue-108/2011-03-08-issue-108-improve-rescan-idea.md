---
title: "-rescan 改善のアイデア"
date: 2011-03-08T14:47:03.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/issues/108"
author: "gavinandresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "gavinandresen が bitcoin/bitcoin Issue #108 でスレッドを開始。"
isSatoshi: false
tags:
  - "github"
  - "issue"
translationStatus: complete
---

-rescan 機能を改善・自動化するためのサトシからのアイデア：

新しいブロックが受理されるたびに、blkindex.dat の最良ブロックポインタが更新される。これを wallet.dat にも（CBlockLocator として）記録しておけば、起動時にウォレットの最終確認済み最良ブロックが blkindex.dat のものより古い場合、そこから再スキャンを開始すべきである。
