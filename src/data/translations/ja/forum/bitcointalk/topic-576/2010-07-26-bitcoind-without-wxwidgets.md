---
title: "wxWidgets なしの bitcoind"
date: 2010-07-26T17:23:33.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=576.msg5904#msg5904"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿: \"wxWidgets なしの bitcoind\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/278/"
translationStatus: complete
---

bitcoind の残りわずかな wxBase 依存を置き換えた。

bitcoind は SVN リビジョン 112 で wxWidgets や wxBase なしでコンパイルできるようになった。

main(int argc, char* argv[])が init.cpp に追加された。CMyApp とスタートアップフォルダー関連のコードは ui.cpp に移動された。ui.cpp と uibase.cpp は bitcoind ではリンクされない。

Makefile では GUI の使用を制御するために-DGUI を使用している。

MinGW、VC、Ubuntu でテストコンパイルした。Mac OS X のビルドを壊していないかわからないので、誰かが確認する必要がある。
