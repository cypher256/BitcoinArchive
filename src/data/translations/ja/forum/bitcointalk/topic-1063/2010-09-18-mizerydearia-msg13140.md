---
title: "バグ？ /usr/bin/bitcoind &quot;&quot;"
date: 2010-09-18T22:19:22.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1063.msg13140#msg13140"
author: "mizerydearia"
participants:
  - name: "mizerydearia"
    slug: "mizerydearia"
description: "BitcoinTalkトピック1063におけるmizerydearia の文脈投稿。"
isSatoshi: false
tags: []
translationStatus: complete
---

以下を実行すると

```bash
/usr/bin/bitcoindBitcoinデーモンが期待通りに起動する。
```

以下を実行すると

```bash
/usr/bin/bitcoind ""error: couldn't connect to server
```

なぜだ？これはバグか？

サトシ：**バグ追跡システムを用意してもらえないか？**（サトシに気づかれたため、もう目立つ必要がなくなりサイズを縮小。もともと少しユーモアのつもりだった。）

自分のGentoo Linux initスクリプトでの回避策：

```ini
BITCOIN_OPTS="-min"これにより `bitcoind "-min"` として実行される。
```
