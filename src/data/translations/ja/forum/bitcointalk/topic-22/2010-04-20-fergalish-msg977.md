---
title: "Re: TOR と I2P"
date: 2010-04-20T14:26:29.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=22.msg977#msg977"
author: "fergalish"
participants:
  - name: "fergalish"
    slug: "fergalish"
description: "BitcoinTalk トピック 22 における fergalish の文脈投稿。msg223 の後。"
isSatoshi: false
tags: []
translationStatus: complete
---

tor で隠しサービスをセットアップしようとしていて、torrc に以下を追加した：

HiddenServiceDir /some/directory
HiddenServicePort 8333 127.0.0.1:8333

ただ、bitcoin を 127.0.0.1:8333 だけにバインドしたいのだが、「netstat -lp」を見るとすべてのインターフェースでリッスンしているようだ。これをどう指定すればいいのか、簡単には見つからなかった。

何か提案はあるか？
