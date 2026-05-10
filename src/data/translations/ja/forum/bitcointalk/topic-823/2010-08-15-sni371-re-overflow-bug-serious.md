---
title: "Re: オーバーフローバグ深刻"
date: 2010-08-15T21:40:19.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9548#msg9548"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「オーバーフローバグ深刻」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/371/"
translationStatus: complete
---

パッチが SVN rev 132 にアップロードされた！

現時点での推奨手順：
1) シャットダウンする。
2) knightmb の blk ファイルをダウンロードする。（blk0001.dat と blkindex.dat ファイルを置き換える）
3) アップグレードする。
4) 74000 ブロック未満から開始されるはずだ。残りを再ダウンロードさせてほしい。

knightmb のファイルを使いたくない場合は、blk*.dat ファイルを削除するだけでもよいが、全員が同時にブロックインデックス全体をダウンロードするとネットワークにかなりの負荷がかかる。

まもなくリリースをビルドする。
