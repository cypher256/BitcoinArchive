---
title: "Re: JSON-RPCパスワード"
date: 2010-07-22T01:51:40.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4918#msg4918"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック461におけるギャビン・アンドレセンの文脈投稿。msg5337の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

すべてのコマンドラインオプションをbitcoin.confファイルでも指定できるように実装した。

コマンドラインで指定されたオプションはconfファイルのオプションを上書きする。ただし、特に"addnode"のような「複数引数」オプションについてはもっとテストが必要だ。
