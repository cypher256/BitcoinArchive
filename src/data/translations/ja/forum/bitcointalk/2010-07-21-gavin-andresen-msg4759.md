---
title: "Re: 警告：Web閲覧するマシンで-serverやbitcoindを使うな（v0.3.2以下）"
date: 2010-07-21T16:10:32.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=479.msg4759#msg4759"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック479におけるギャビン・アンドレセンの文脈投稿。msg5432の前。"
isSatoshi: false
threadId: "bt-warning-dont-use-server-or-bitcoind"
tags: []
translationStatus: complete
---

chroot：保護にはならない。

別のVMとして実行：保護されると思う。ただ、ブラウザはWebから取得したWebページから「localhost」へのXMLHTTPRequestを許可しないはずだと思っていたので、テストすることを勧める。Bitcoin以外のVMから同じマシン上のBitcoinデーモンと通信できるか、「bitcoind getinfo」または「bitcoin getinfo」をBitcoinでないVM上で実行して確認してみてほしい。
