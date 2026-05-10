---
title: "Re: 0.3 ほぼ完成 — Mac バージョンをテストしてください！"
date: 2010-06-22T19:46:23.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=199.msg1679#msg1679"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「0.3 ほぼ完成」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/142/"
translationStatus: complete
---

私が返信を投稿するより早く解決されたようだ。

Laszlo のビルドの Berkeley DB には、私たちのものと互換性のない database/log.*ファイルがあるようだ。.dat ファイルは問題なく、そのフォーマットは変わるべきではない。すべてのデータは.dat ファイルに保存されている。すべての自分のデータは wallet.dat に保存されている。ブロックチェーンの再ダウンロードを待っていれば、ブロックチェーンがそれらのトランザクションが記録された地点に到達した時点で、欠けていたトランザクションと生成されたコインが表示されたはずだ。

log.0000000002 を除いてディレクトリをコピーしたのは最善の解決策だ。これで問題ないはずだ。

database/log.*ファイルには一時的なデータベースデータのみが含まれている。前回 Bitcoin を正常に終了した場合、つまり強制終了やクラッシュではなく正常終了した場合、database/log.*ファイルは通常安全に削除できる。これらはデータベースがトランザクションの途中でコンピューターがクラッシュしたりプログラムが強制終了やクラッシュした場合に、データを失わずに復旧するためにのみ使用される。

可能であれば v0.3 を使い続けてほしい、v0.2.10 には戻らないでほしい。

この問題に当たった方は、database\log.000000000*ファイルをどこか別の場所に移動してほしい。（その後問題なく動作すれば、後で削除できる）

インストーラーにそれらのファイルを削除や移動させることには躊躇している。前回の実行がクラッシュや強制終了で停止した場合、それは間違った対応になるからだ。
