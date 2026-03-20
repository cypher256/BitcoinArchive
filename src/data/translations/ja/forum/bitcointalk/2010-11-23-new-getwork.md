---
title: "新しいgetwork"
date: 2010-11-23T19:50:12.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1901.msg23876#msg23876"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿: \"新しいgetwork\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/507/"
threadId: "bt-new-getwork"
threadPosition: 1
translationStatus: complete
---

m0mchilのgetworkを再設計してSVN rev 189（バージョン31601）にアップロードした。

m0mchilの外部ビットコインマイナーのアイデアは多くの問題を解決した。GPUプログラミングは未成熟でコンパイルが難しく、ビルドに追加の依存関係を加えたくなかった。getworkにより、異なるハードウェアやOSに対して異なるプログラムで、これらの問題を個別に解決できる。サーバーファームが単一のBitcoinノードを実行し、残りはgetworkクライアントだけを実行できるのも便利だ。

インターフェースにいくつかの変更がある：

getwork [data]<br>
[data]が指定されていない場合、作業用のフォーマット済みハッシュデータを返す：<br>
  "midstate" : データの前半をハッシュした後の事前計算されたハッシュ状態<br>
  "data" : ブロックデータ<br>
  "hash1" : 2回目のハッシュ用のフォーマット済みハッシュバッファ<br>
  "target" : リトルエンディアンのハッシュターゲット<br>
[data]が指定された場合、ブロックの解決を試み、成功した場合はtrueを返す。[data]は"data"フィールドで返されたのと同じ128バイトのブロックデータだが、nonceが変更されている。

注意：
- 候補を送信した時にはworkを返さない。パラメータなしで呼び出した時のみだ。
- blockフィールドはdataとhash1に分離された。
- dataは128バイトで、midstateですでにハッシュされた前半を含む。
- hash1は常に同じだが、便利のために含まれている。
- "ThreadRPCServer method=getwork"のログは無効化されている。ログにゴミが多すぎるためだ。
