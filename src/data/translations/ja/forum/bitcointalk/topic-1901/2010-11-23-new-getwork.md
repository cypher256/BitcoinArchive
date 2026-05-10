---
title: "新しい getwork"
date: 2010-11-23T19:50:12.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1901.msg23876#msg23876"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿: \"新しい getwork\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/507/"
translationStatus: complete
---

m0mchil の getwork を再設計して SVN rev 189（バージョン 31601）にアップロードした。

m0mchil の外部ビットコインマイナーのアイデアは多くの問題を解決した。GPU プログラミングは未成熟でコンパイルが難しく、ビルドに追加の依存関係を加えたくなかった。getwork により、異なるハードウェアや OS に対して異なるプログラムで、これらの問題を個別に解決できる。サーバーファームが単一の Bitcoin ノードを実行し、残りは getwork クライアントだけを実行できるのも便利だ。

インターフェースにいくつかの変更がある：

getwork [data]<br>
[data]が指定されていない場合、作業用のフォーマット済みハッシュデータを返す：<br>
  "midstate" : データの前半をハッシュした後の事前計算されたハッシュ状態<br>
  "data" : ブロックデータ<br>
  "hash1" : 2回目のハッシュ用のフォーマット済みハッシュバッファ<br>
  "target" : リトルエンディアンのハッシュターゲット<br>
[data]が指定された場合、ブロックの解決を試み、成功した場合は true を返す。[data]は"data"フィールドで返されたのと同じ 128 バイトのブロックデータだが、ナンスが変更されている。

注意：
- 候補を送信した時には work を返さない。パラメーターなしで呼び出した時のみだ。
- block フィールドは data と hash1 に分離された。
- data は 128 バイトで、midstate ですでにハッシュされた前半を含む。
- hash1 は常に同じだが、便利のために含まれている。
- "ThreadRPCServer method=getwork"のログは無効化されている。ログにゴミが多すぎるためだ。
