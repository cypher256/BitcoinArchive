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
threadPosition: 4
translationStatus: complete
---

実際よりも、すべてが間違っていると想定する傾向があるようだね。

ブロックインデックスの書き込みは軽い作業だ。txインデックスの構築は1ブロックあたりのランダムアクセスがはるかに多い。すべてのprev txinの読み取りが遅い原因ではないかと疑っている。読み取りキャッシュが役立つだろう。DBがそれを行うのが最善だ。キャッシュメモリの使用量の設定があるかもしれない。

引用：1) bitcoinはプログラムの起動時に環境だけでなくデータベースを開き、プログラムのシャットダウン時にデータベースを閉じるべきです。
すでにそうしている。CDBを参照してくれ。（例えば）CTxDBオブジェクトの寿命は、データベーストランザクションのサポートと、シャットダウン時にまだデータベースを使用しているものがあるかどうかを知るためだけだ。

引用：そして、さらにbitcoinはデータベースのチェックポイントを強制し、すべてのトランザクションをログからメインデータベースにプッシュします。
そうしていたらはるかに遅くなるだろう。1分または500ブロックに1回のみのはずだ：

```cpp
    if (strFile == "blkindex.dat" && IsInitialBlockDownload() && nBestHeight % 500 != 0)
        nMinutes = 1;
    dbenv.txn_checkpoint(0, nMinutes, 0);
```

おそらくこれを追加すべきだ：
```cpp
    if (!fReadOnly)
        dbenv.txn_checkpoint(0, nMinutes, 0);
```

引用：2) 初回ブロックダウンロードでは、txnコミットはレコードごとではなくN件ごとに行うべきです。N=1000を提案します。
トランザクションコミットはフラッシュを意味するのか？それは驚きだ。トランザクションでラップされたデータベース操作は、他のデータベース操作と同様にログに記録されると思う。多くのデータベースアプリケーションでは、ほぼすべての操作のペアをトランザクションでラップする必要がある。例えば、あるアカウントから別のアカウントへの送金（aを借方、bを貸方）などだ。すべてを自分でバッチ処理することが求められるとは想像できない。

以下のケースで、ケース1は1回フラッシュし、ケース2は2回フラッシュするのだろうか？

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

データベースの使用方法を歪めるのは正しいアプローチではないだろう。BDBの設定とキャッシュで対応すべきだ。
