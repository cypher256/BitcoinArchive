---
title: "Re: 警告: ウェブブラウジングするマシンで-server や bitcoind を使用しないでください（v0.3.2 以前）"
date: 2010-07-21T16:10:32.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=479.msg4759#msg4759"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalk トピック 479 におけるギャビン・アンドレセンの文脈投稿。msg5432 の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

chroot：保護されない。

別の VM として実行：保護されると思う。ただし、ブラウザーがウェブから取得したページから localhost への XMLHTTPRequests を許可しないと思っていたので、テストすることを勧める。Bitcoin 以外の VM から同じマシン上の Bitcoin デーモンと通信できるか、"bitcoind getinfo"や"bitcoin getinfo"を実行して確認してみてほしい。
