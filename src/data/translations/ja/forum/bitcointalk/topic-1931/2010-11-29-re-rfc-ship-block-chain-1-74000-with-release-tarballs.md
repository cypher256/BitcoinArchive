---
title: "Re: RFC: リリース tarball にブロックチェーン 1-74000 を同梱する？"
date: 2010-11-29T20:19:12.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1931.msg25449#msg25449"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「RFC: リリース tarball にブロックチェーン 1-74000 を同梱する？」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/520/"
translationStatus: complete
---

実際よりも、すべてが間違っていると想定する傾向があるようだね。

ブロックインデックスの書き込みは軽い作業だ。tx インデックスの構築は 1 ブロックあたりのランダムアクセスがはるかに多い。すべての prev txin の読み取りが遅い原因ではないかと疑っている。読み取りキャッシュが役立つだろう。DB がそれを行うのが最善だ。キャッシュメモリーの使用量の設定があるかもしれない。

<!-- tone-skip -->
> 1) bitcoinはプログラムの起動時に環境だけでなくデータベースを開き、プログラムのシャットダウン時にデータベースを閉じるべきです。
<!-- /tone-skip -->

すでにそうしている。CDB を参照してくれ。（例えば）CTxDB オブジェクトの寿命は、データベーストランザクションのサポートと、シャットダウン時にまだデータベースを使用しているものがあるかどうかを知るためだけだ。

<!-- tone-skip -->
> 加えて、Bitcoin はデータベースチェックポイントを強制し、ログから全トランザクションをメインデータベースに押し込む。
<!-- /tone-skip -->

そうしていたらはるかに遅くなるだろう。1分または 500 ブロックに 1回のみのはずだ：

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

<!-- tone-skip -->
> 2) 初回ブロックダウンロードでは、txn コミットはレコードごとではなく N レコードごとに 1回行うべきだ。N=1000 を提案する。
<!-- /tone-skip -->

トランザクションコミットはフラッシュを意味するのか？それは驚きだ。トランザクションでラップされたデータベース操作は、他のデータベース操作と同様にログに記録されると思う。多くのデータベースアプリケーションでは、ほぼすべての操作のペアをトランザクションでラップする必要がある。例えば、あるアカウントから別のアカウントへの送金（a を借方、b を貸方）などだ。すべてを自分でバッチ処理することが求められるとは想像できない。

以下のケースで、ケース 1 は 1回フラッシュし、ケース 2 は 2回フラッシュするのだろうか？

ケース 1：
write
write
write
write
checkpoint

ケース 2：
begin transaction
write
write
commit transaction
begin transaction
write
write
commit transaction
checkpoint

データベースの使用方法を歪めるのは正しいアプローチではないだろう。BDB の設定とキャッシュで対応すべきだ。
