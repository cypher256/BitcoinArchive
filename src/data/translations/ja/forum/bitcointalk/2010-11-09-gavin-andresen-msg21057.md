---
title: "Re: テストネットワークで行ったテストと結果"
date: 2010-11-09T19:36:38.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1668.msg21057#msg21057"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック1668におけるギャビン・アンドレセンの投稿。msg21959の前。"
isSatoshi: false
threadId: "bt-some-testing-that-i-did-on-the-testnetwork-my-find"
tags: []
translationStatus: complete
---

davidonpdaの協力のもと、今日サトシの最新のコード変更（トランザクションの経過時間、Bitcoin入力額、トランザクションの合計バイト数に基づく優先度設定 -- SVN rev 176）でテストを行った。

期待通りの動作で、より大きく古いトランザクションがネットワークに流し込まれる少額のものよりも先に処理されるため、誰かが嫌がらせでトランザクションを大量送信しても、「通常の」トランザクションは迅速に確認される。
