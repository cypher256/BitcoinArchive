---
title: "返信: SHA-256衝突への対処"
date: 2010-06-14T20:39:00Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=191.msg1585#msg1585"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシがSHA-256衝突がビットコインにとって現実的な懸念ではない理由を説明し、関わる膨大な計算の困難さについて述べる。"
isSatoshi: true
tags:
  - "sha-256"
  - "security"
  - "cryptography"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/103/"
threadId: "bt-dealing-with-sha-256-collisions"
threadTitle: "Dealing with SHA-256 Collisions"
threadPosition: 1
translationStatus: complete
---

SHA-256は非常に強力です。MD5からSHA1への段階的な進歩とは違います。大規模なブレークスルーがない限り、数十年は持つでしょう。

もしSHA-256が完全に破られた場合、問題が始まる前の正直なブロックチェーンが何であったかについて合意に達し、それを固定して新しいハッシュ関数で継続できると思います。

ハッシュの崩壊が徐々に起きた場合は、秩序立った方法で新しいハッシュに移行できるでしょう。ソフトウェアは特定のブロック番号以降に新しいハッシュを使い始めるようにプログラムされます。その時までに全員がアップグレードする必要があります。ソフトウェアは古いブロックの新しいハッシュを保存して、同じ古いハッシュを持つ別のブロックが使用されないようにすることができます。
