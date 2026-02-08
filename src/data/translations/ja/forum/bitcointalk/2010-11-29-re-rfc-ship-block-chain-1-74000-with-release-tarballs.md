---
title: "Re: RFC: リリースtarballにブロックチェーン1-74000を同梱する？"
date: 2010-11-29T20:19:12.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1931.msg25449#msg25449"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「RFC: リリースtarballにブロックチェーン1-74000を同梱する？」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/520/"
threadId: "bt-rfc-ship-block-chain-1-74000-with-release-tarballs"
threadTitle: "RFC: ship block chain 1-74000 with release tarballs?"
threadPosition: 4
translationStatus: complete
---

実際よりも、すべてが間違っていると想定する傾向があるようですね。

ブロックインデックスの書き込みは軽い作業です。txインデックスの構築は1ブロックあたりのランダムアクセスがはるかに多いです。すべてのprev txinの読み取りが遅い原因ではないかと疑っています。読み取りキャッシュが役立つでしょう。DBがそれを行うのが最善です。キャッシュメモリの使用量の設定があるかもしれません。

引用：1) bitcoinはプログラムの起動時に環境だけでなくデータベースを開き、プログラムのシャットダウン時にデータベースを閉じるべきです。
すでにそうしています。CDBを参照してください。（例えば）CTxDBオブジェクトの寿命は、データベーストランザクションのサポートと、シャットダウン時にまだデータベースを使用しているものがあるかどうかを知るためだけです。

引用：そして、さらにbitcoinはデータベースのチェックポイントを強制し、すべてのトランザクションをログからメインデータベースにプッシュします。
そうしていたらはるかに遅くなるでしょう。1分または500ブロックに1回のみのはずです：

    if (strFile == "blkindex.dat" && IsInitialBlockDownload() && nBestHeight % 500 != 0)
        nMinutes = 1;
    dbenv.txn_checkpoint(0, nMinutes, 0);

おそらくこれを追加すべきです：
    if (!fReadOnly)
        dbenv.txn_checkpoint(0, nMinutes, 0);

引用：2) 初回ブロックダウンロードでは、txnコミットはレコードごとではなくN件ごとに行うべきです。N=1000を提案します。
トランザクションコミットはフラッシュを意味しますか？それは驚きです。トランザクションでラップされたデータベース操作は、他のデータベース操作と同様にログに記録されると思います。多くのデータベースアプリケーションでは、ほぼすべての操作のペアをトランザクションでラップする必要があります。例えば、あるアカウントから別のアカウントへの送金（aを借方、bを貸方）などです。すべてを自分でバッチ処理することが求められるとは想像できません。

以下のケースで、ケース1は1回フラッシュし、ケース2は2回フラッシュするのでしょうか？

ケース1：
write
write
write
write
checkpoint

ケース2：
begin transaction
write
write
commit transaction
begin transaction
write
write
commit transaction
checkpoint

データベースの使用方法を歪めるのは正しいアプローチではないでしょう。BDBの設定とキャッシュで対応すべきです。
