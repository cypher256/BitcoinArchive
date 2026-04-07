---
title: "Re: 0.3ほぼ完成 -- Mac版をテストしてください！"
date: 2010-06-22T17:58:56.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=199.msg1672#msg1672"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック199におけるギャビン・アンドレセンの文脈投稿。msg1675の前。"
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

クリーンなAmazon EC2のDebian 5.0マシンイメージを作成し、bitcoindのコンパイルに必要なものをすべてインストールし終えた。コンパイルは完了し（ラスロのmakefile.unixの改変版を使用）、問題なく動作している（ブロックチェーンのダウンロードが完了したところだ）。不具合があれば報告する。

gtk版のコンパイルには苦労したが、wxWidgetsのコンパイルで何か間違ったんだと思う。グラフィックスなんていらないし（wxWidgetsの専門家でもないし）、そちらの修正に手を出すつもりはない。
