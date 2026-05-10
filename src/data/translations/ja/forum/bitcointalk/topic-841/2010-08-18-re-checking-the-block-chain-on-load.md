---
title: "Re: ロード時のブロックチェーン検証"
date: 2010-08-18T18:28:28.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=841.msg10082#msg10082"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「ロード時のブロックチェーン検証」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/399/"
translationStatus: complete
---

次の SVN リビジョンでは、ブロック 74000 の最後のチェックポイントまでしか遡らないようにする。将来問題を修正する必要がある場合は、少なくとも問題のある箇所まで遡るようにいつでもできる。また、ブロックインデックスを検証するコードも追加しており、これによりプルーフ・オブ・ワークチェーンが検証される。

それでも、システムは blk*.dat ファイルに対して完全に安全というわけではない。誰かの blk ファイルのコピーを使う場合、その人を信頼していることになる。
