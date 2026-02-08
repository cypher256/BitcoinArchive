---
title: "Re: RFC: リリースtarballにブロックチェーン1-74000を同梱する？"
date: 2010-11-25T17:51:39.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1931.msg24438#msg24438"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「RFC: リリースtarballにブロックチェーン1-74000を同梱する？」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/511/"
threadId: "bt-rfc-ship-block-chain-1-74000-with-release-tarballs"
threadTitle: "RFC: ship block chain 1-74000 with release tarballs?"
threadPosition: 1
translationStatus: complete
---

時間がかかるのはダウンロードではなく、検証とインデックス作成です。

帯域幅の点では、アーカイブをダウンロードするよりも効率的です。Bitcoinはblk0001.datのデータのみをダウンロードし、現在55MBで、blkindex.dat（47MB）は自分で構築します。blkindex.datの構築がすべてのディスクアクティビティの原因です。

ブロックのダウンロード中は、500ブロックごとにのみデータベースをディスクにフラッシュします。ブロック数が??499や??999で一時停止するのが見えるかもしれません。それがフラッシュしている時です。

自分で検証とインデックス作成を行うことが、インデックスデータの安全性を確保する唯一の方法です。信頼できないソースからblk0001.datとblkindex.datをコピーした場合、その中身すべてを信頼できるかどうか知る方法はありません。

Berkeley DBの設定を調整して、キャッシュメモリを有効化または増加できるかもしれません。
