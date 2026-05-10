---
title: "Github のコミットログにおける著者の誤帰属"
date: 2016-02-11T08:32:24.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/issues/7512"
author: "awemany"
participants:
  - name: "awemany"
    slug: "awemany"
description: "awemany が bitcoin/bitcoin Issue #7512 でスレッドを開始。"
isSatoshi: false
tags:
  - "github"
  - "issue"
translationStatus: complete
---

こちら（ビットコインの最も古いコミットの現在のページ）を見ると、

https://github.com/bitcoin/bitcoin/commits/master?page=289

sirius-m によるコミットが Greg Maxwell に帰属されていることがわかる。

これは SVN からのインポートの問題ではないようである。'git log'ではコミッターは正しく表示されている。これは古い SVN（まだ sourceforge で利用可能）の情報とも一致する。

むしろ、これは GitHub 上の問題または設定ミスのようである。

他にも同様の問題があるかどうかは確認していない。
