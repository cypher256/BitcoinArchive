---
title: "返信: 0.3ほぼ完成"
date: 2010-06-22T19:46:23.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=199.msg1679#msg1679"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「0.3ほぼ完成」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/142/"
threadId: "bt-0-3-almost-ready"
threadTitle: "0.3 almost ready"
threadPosition: 4
translationStatus: complete
---

私が返信を投稿するより早く解決されましたね。

LaszloのビルドのBerkeley DBには、私たちのものと互換性のないdatabase/log.*ファイルがあるようです。.datファイルは問題なく、そのフォーマットは変わるべきではありません。すべてのデータは.datファイルに保存されています。すべての自分のデータはwallet.datに保存されています。ブロックチェーンの再ダウンロードを待っていれば、ブロックチェーンがそれらのトランザクションが記録された地点に到達した時点で、欠けていたトランザクションと生成されたコインが表示されたはずです。

log.0000000002を除いてディレクトリをコピーしたのは最善の解決策です。これで問題ないはずです。

database/log.*ファイルには一時的なデータベースデータのみが含まれています。前回Bitcoinを正常に終了した場合、つまり強制終了やクラッシュではなく正常終了した場合、database/log.*ファイルは通常安全に削除できます。これらはデータベースがトランザクションの途中でコンピュータがクラッシュしたりプログラムが強制終了やクラッシュした場合に、データを失わずに復旧するためにのみ使用されます。

可能であればv0.3を使い続けてください、v0.2.10には戻らないでください。

この問題に当たった方は、database\log.000000000*ファイルをどこか別の場所に移動してください。（その後問題なく動作すれば、後で削除できます）

インストーラーにそれらのファイルを削除や移動させることには躊躇しています。前回の実行がクラッシュや強制終了で停止した場合、それは間違った対応になるからです。
