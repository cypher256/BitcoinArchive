---
title: "Re: RFC: リリース tarball にブロックチェーン 1-74000 を同梱する？"
date: 2010-11-25T17:51:39.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1931.msg24438#msg24438"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「RFC: リリース tarball にブロックチェーン 1-74000 を同梱する？」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/511/"
translationStatus: complete
---

時間がかかるのはダウンロードではなく、検証とインデックス作成だ。

帯域幅の点では、アーカイブをダウンロードするよりも効率的だ。Bitcoin は blk0001.dat のデータのみをダウンロードし、現在 55MB で、blkindex.dat（47MB）は自分で構築する。blkindex.dat の構築がすべてのディスクアクティビティの原因だ。

ブロックのダウンロード中は、500 ブロックごとにのみデータベースをディスクにフラッシュする。ブロック数が??499 や??999 で一時停止するのが見えるかもしれない。それがフラッシュしている時だ。

自分で検証とインデックス作成を行うことが、インデックスデータの安全性を確保する唯一の方法だ。信頼できないソースから blk0001.dat と blkindex.dat をコピーした場合、その中身すべてを信頼できるかどうか知る方法はない。

Berkeley DB の設定を調整して、キャッシュメモリーを有効化または増加できるかもしれない。
