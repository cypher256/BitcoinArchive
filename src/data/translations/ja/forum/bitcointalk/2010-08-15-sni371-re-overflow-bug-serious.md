---
title: "Re: オーバーフローバグ 深刻"
date: 2010-08-15T21:40:19.000Z
type: "forum-post"
source: "bitcointalk"
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
translationStatus: complete
---

パッチがSVN rev 132にアップロードされた！

現時点での推奨手順：
1) シャットダウンする。
2) knightmbのblkファイルをダウンロードする。（blk0001.datとblkindex.datファイルを置き換える）
3) アップグレードする。
4) 74000ブロック未満から開始されるはずだ。残りを再ダウンロードさせてほしい。

knightmbのファイルを使いたくない場合は、blk*.datファイルを削除するだけでもよいが、全員が同時にブロックインデックス全体をダウンロードするとネットワークにかなりの負荷がかかる。

まもなくリリースをビルドする。
