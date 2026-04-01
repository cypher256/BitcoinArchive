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
description: "BitcoinTalkトピック199におけるギャビン・アンドレセンのコンテキスト投稿。msg1675の前。"
isSatoshi: false
threadId: "bt-1-3-almost-ready"
tags: []
translationStatus: complete
---

[Quote from: satoshi on June 22, 2010, 04:01:53 AM](/BitcoinArchive/ja/entries/forum/bitcointalk/2010-06-22-0-3-almost-ready-please-test-the-mac-version/)
> バージョン0.3でやるべきことリストの全項目を完了した。SVN上のコードはリリースの準備がほぼ整っている。
> この時点でのテストは非常にありがたい。

クリーンなAmazon EC2のDebian 5.0マシンイメージを作成し、bitcoindのコンパイルに必要なものをすべてインストールし終えた。コンパイルは完了し（ラスロのmakefile.unixの改変版を使用）、問題なく動作している（ブロックチェーンのダウンロードが完了したところだ）。不具合があれば報告する。

gtk版のコンパイルには苦労したが、wxWidgetsのコンパイルで何か間違ったんだと思う。グラフィックスなんていらないし（wxWidgetsの専門家でもないし）、そちらの修正に手を出すつもりはない。
