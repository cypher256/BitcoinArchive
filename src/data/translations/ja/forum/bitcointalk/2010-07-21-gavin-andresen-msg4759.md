---
title: "Re: 警告：ウェブ閲覧する環境で-serverやbitcoindを使わないこと（v0.3.2以下）"
date: 2010-07-21T16:10:32.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=479.msg4759#msg4759"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック479におけるGavin Andresenの文脈投稿。msg5432の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

chroot：保護されない。

別のVMとして実行：保護されると思う。ただし、ブラウザがウェブから取得したページからlocalhostへのXMLHTTPRequestsを許可しないと思っていたので、テストすることを勧める。Bitcoin以外のVMから同じマシン上のBitcoinデーモンと通信できるか、"bitcoind getinfo"や"bitcoin getinfo"を実行して確認してみてほしい。
