---
title: "ブロックヘッダーのみの高速起動クライアント"
date: 2010-12-20T13:53:07.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/issues/7"
author: "gavinandresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "gavinandresen がbitcoin/bitcoin Issue #7でスレッドを開始。"
isSatoshi: false
tags:
  - "github"
  - "issue"
translationStatus: complete
---

Bitcoinの新規ユーザーは、bitcoinが全トランザクションとブロックをダウンロードしてインデックスを作成する間、1時間から2時間（あるいはそれ以上）待たなければならない。

サトシはブロックヘッダーのみをダウンロードするコードをほぼ実装している。ブロックを生成しない限り、過去のトランザクションはすべて必要ではない。
