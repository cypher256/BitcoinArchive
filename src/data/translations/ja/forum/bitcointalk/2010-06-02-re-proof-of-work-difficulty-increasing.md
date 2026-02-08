---
title: "返信: Proof-of-work難易度の上昇"
date: 2010-06-02T18:45:38.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=43.msg1323#msg1323"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「Proof-of-work難易度の上昇」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/115/"
threadId: "bt-proof-of-work-difficulty-increasing"
threadTitle: "Proof-of-work difficulty increasing"
threadPosition: 8
translationStatus: complete
---

それは良いアイデアです。どこに正確に組み込むかはまだわかりませんが、ブロック生成間の予想平均時間を計算することは確かにでき、そうすれば皆が何を期待すべきか分かるでしょう。

すべてのノードと各プロセッサはブロック内に異なる公開鍵を持っているので、異なる領域をスキャンしていることが保証されています。

32ビットのnonceが1から再開するたびに、bnExtraNonceがインクリメントされます。これは任意精度整数です。
