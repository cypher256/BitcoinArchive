---
title: "Githubのコミットログにおける著者の誤帰属"
date: 2016-02-11T08:32:24.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/issues/7512"
author: "awemany"
participants:
  - name: "awemany"
    slug: "awemany"
description: "awemanyがbitcoin/bitcoin Issue #7512でスレッドを開始。"
isSatoshi: false
tags:
  - "github"
  - "issue"
translationStatus: complete
---

こちら（ビットコインの最も古いコミットの現在のページ）を見ると、

https://github.com/bitcoin/bitcoin/commits/master?page=289

sirius-mによるコミットがGreg Maxwellに帰属されていることがわかる。

これはSVNからのインポートの問題ではないようである。'git log'ではコミッターは正しく表示されている。これは古いSVN（まだsourceforgeで利用可能）の情報とも一致する。

むしろ、これはGitHub上の問題または設定ミスのようである。

他にも同様の問題があるかどうかは確認していない。
