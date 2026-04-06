---
title: "Re: JSON-RPCパスワード"
date: 2010-07-23T18:51:34.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg5357#msg5357"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック461におけるギャビン・アンドレセンの文脈投稿。msg5383の前。"
isSatoshi: false
tags: []
translationStatus: complete
quotes:
  - id: "q1"
    person: "lachesis"
    date: "2010-07-23T09:22:08.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> パスワードは絶対に必須にすべきではない。また、新しいコードは"rpcpassword="で動作しなくなる。設定ファイルがない場合、設定ファイルにrpcpassword行がない場合、または"rpcpassword="が含まれている場合は、パスワードを無効にすべきだ。
<!-- /tone-skip -->

強く反対する。ソフトウェアはデフォルトで安全であるべきであり、パスワードなしでbitcoindを実行する（またはbitcoin -server）のは明らかに安全ではない。

「設定ファイルにパスワードを追加しないとデーモンとして実行できないからBitcoinはダメだ」と言う人はまずいないだろう。「うっかり-serverスイッチを付けて実行したら誰かに全額盗まれたからBitcoinはダメだ」と言う人は**大いに**あり得る。
