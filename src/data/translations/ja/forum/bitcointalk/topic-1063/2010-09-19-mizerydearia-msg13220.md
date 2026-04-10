---
title: "Re: バグ？ /usr/bin/bitcoind &quot;&quot;"
date: 2010-09-19T22:39:49.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1063.msg13220#msg13220"
author: "mizerydearia"
participants:
  - name: "mizerydearia"
    slug: "mizerydearia"
description: "BitcoinTalkトピック1063におけるmizerydeariaの文脈投稿。msg13211の後。"
isSatoshi: false
tags: []
translationStatus: complete
---

trac や mantisbt のようなものを使うことに同意する。この2つのうちどちらかを試して、状況の改善に役立つなら使い続けることを提案する。そうでないなら、フォーラムは依然としてあるので、失うものは何もない。

また、`bitcoind ""` がバグでない以上、自分のgentoo linux ebuild初期化スクリプトがそれとして実行する（/etc/conf.d/bitcoin に BITCOIN_OPTS="" を含めていることに依存する）のがバグなので、それを修正する。
修正した！
