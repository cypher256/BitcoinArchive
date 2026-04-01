---
title: "Re: テストネットワークで行ったテストとその発見。"
date: 2010-11-09T19:36:38.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1668.msg21057#msg21057"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック1668におけるGavin Andresenの文脈投稿。msg21959の前。"
isSatoshi: false
threadId: "bt-some-testing-that-i-did-on-the-testnetwork-my-find"
tags: []
translationStatus: complete
---

davidonpdaの助けを借りて、今日サトシの最新のコード変更（取引の年齢、入力ビットコイン量、取引サイズ（バイト）に基づく優先度設定——SVN rev 176）を使って自分でテストを行った。

期待通りに動作し、ネットワークにフラッドされている少額の取引よりも大きく古い取引を優先させたため、誰かが嫌がらせで取引をフラッドしても「通常」の取引は迅速に承認される。
