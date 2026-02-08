---
title: "新しいgetwork"
date: 2010-11-23T19:50:12.000Z
source: bitcointalk
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
threadTitle: "New getwork"
threadPosition: 1
translationStatus: complete
---

m0mchilのgetworkを再設計してSVN rev 189（バージョン31601）にアップロードしました。

m0mchilの外部ビットコインマイナーのアイデアは多くの問題を解決しました。GPUプログラミングは未成熟でコンパイルが難しく、ビルドに追加の依存関係を加えたくありませんでした。getworkにより、異なるハードウェアやOSに対して異なるプログラムで、これらの問題を個別に解決できます。サーバーファームが単一のBitcoinノードを実行し、残りはgetworkクライアントだけを実行できるのも便利です。

インターフェースにいくつかの変更があります：

getwork [data]
[data]が指定されていない場合、作業用のフォーマット済みハッシュデータを返します：
  "midstate" : データの前半をハッシュした後の事前計算されたハッシュ状態
  "data" : ブロックデータ
  "hash1" : 2回目のハッシュ用のフォーマット済みハッシュバッファ
  "target" : リトルエンディアンのハッシュターゲット
[data]が指定された場合、ブロックの解決を試み、成功した場合はtrueを返します。[data]は"data"フィールドで返されたのと同じ128バイトのブロックデータですが、nonceが変更されています。

注意：
- 候補を送信した時にはworkを返しません。パラメータなしで呼び出した時のみです。
- blockフィールドはdataとhash1に分離されました。
- dataは128バイトで、midstateですでにハッシュされた前半を含みます。
- hash1は常に同じですが、便利のために含まれています。
- "ThreadRPCServer method=getwork"のログは無効化されています。ログにゴミが多すぎるためです。
