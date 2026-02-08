---
title: "Re: オーバーフローバグ 深刻"
date: 2010-08-15T21:40:19.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9548#msg9548"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「オーバーフローバグ 深刻」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/371/"
threadId: "bt-overflow-bug-serious"
threadTitle: "overflow bug SERIOUS"
threadPosition: 3
translationStatus: complete
---

パッチがSVN rev 132にアップロードされました！

現時点での推奨手順：
1) シャットダウンする。
2) knightmbのblkファイルをダウンロードする。（blk0001.datとblkindex.datファイルを置き換える）
3) アップグレードする。
4) 74000ブロック未満から開始されるはずです。残りを再ダウンロードさせてください。

knightmbのファイルを使いたくない場合は、blk*.datファイルを削除するだけでもよいですが、全員が同時にブロックインデックス全体をダウンロードするとネットワークにかなりの負荷がかかります。

まもなくリリースをビルドします。
