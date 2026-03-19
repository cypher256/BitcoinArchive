---
title: "Re: 0.3ほぼ完成"
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
threadPosition: 5
translationStatus: complete
---

私が返信を投稿するより早く解決されたようだ。

LaszloのビルドのBerkeley DBには、私たちのものと互換性のないdatabase/log.*ファイルがあるようだ。.datファイルは問題なく、そのフォーマットは変わるべきではない。すべてのデータは.datファイルに保存されている。すべての自分のデータはwallet.datに保存されている。ブロックチェーンの再ダウンロードを待っていれば、ブロックチェーンがそれらのトランザクションが記録された地点に到達した時点で、欠けていたトランザクションと生成されたコインが表示されたはずだ。

log.0000000002を除いてディレクトリをコピーしたのは最善の解決策だ。これで問題ないはずだ。

database/log.*ファイルには一時的なデータベースデータのみが含まれている。前回Bitcoinを正常に終了した場合、つまり強制終了やクラッシュではなく正常終了した場合、database/log.*ファイルは通常安全に削除できる。これらはデータベースがトランザクションの途中でコンピュータがクラッシュしたりプログラムが強制終了やクラッシュした場合に、データを失わずに復旧するためにのみ使用される。

可能であればv0.3を使い続けてほしい、v0.2.10には戻らないでほしい。

この問題に当たった方は、database\log.000000000*ファイルをどこか別の場所に移動してほしい。（その後問題なく動作すれば、後で削除できる）

インストーラーにそれらのファイルを削除や移動させることには躊躇している。前回の実行がクラッシュや強制終了で停止した場合、それは間違った対応になるからだ。
