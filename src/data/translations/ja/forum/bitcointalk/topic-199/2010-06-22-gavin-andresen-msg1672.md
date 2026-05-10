---
title: "Re: 0.3 ほぼ完成 — Mac バージョンをテストしてください！"
date: 2010-06-22T17:58:56.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=199.msg1672#msg1672"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalk トピック 199 におけるギャビン・アンドレセンの文脈投稿。msg1675 の前。"
isSatoshi: false
tags: []
translationStatus: complete
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-06-21T19:01:53.000Z"
    sourceEntryId: "forum/bitcointalk/topic-199/2010-06-22-0-3-almost-ready-please-test-the-mac-version"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> バージョン0.3でやるべきことリストの全項目を完了した。SVN上のコードはリリースの準備がほぼ整っている。
> この時点でのテストは非常にありがたい。
<!-- /tone-skip -->

クリーンな Amazon EC2 の Debian 5.0 マシンイメージを作成し、bitcoind のコンパイルに必要なものをすべてインストールし終えた。コンパイルは完了し（ラスロの makefile.unix の改変版を使用）、問題なく動作している（ブロックチェーンのダウンロードが完了したところだ）。不具合があれば報告する。

gtk 版のコンパイルには苦労したが、wxWidgets のコンパイルで何か間違ったんだと思う。グラフィックスなんていらないし（wxWidgets の専門家でもないし）、そちらの修正に手を出すつもりはない。
