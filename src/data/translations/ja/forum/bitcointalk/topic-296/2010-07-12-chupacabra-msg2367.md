---
title: "Fedora 13のlibcrypto"
date: 2010-07-12T19:27:30.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=296.msg2367#msg2367"
author: "chupacabra"
participants:
  - name: "chupacabra"
    slug: "chupacabra"
description: "chupacabraがスレッドを開始: BitcoinTalkトピック296。"
isSatoshi: false
tags: []
translationStatus: complete
---

Bitcoinを実行しようとすると以下のエラーが出る：

[michael@fed13 64]$ ./bitcoin
./bitcoin: error while loading shared libraries: libcrypto.so.0.9.8: cannot open shared object file: No such file or directory

Fedora 13ではこちらを使用している：

/lib64/libcrypto.so.1.0.0a

これを回避するにはどうすればよいか？

シンボリックリンクを試し、lddとldconfigも実行したが効果がなかった。

よろしく
