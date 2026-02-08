---
title: "初期ブロックダウンロードの高速化（5倍高速）"
date: 2010-07-23T18:24:56.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=550.msg5349#msg5349"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿: \"初期ブロックダウンロードの高速化（5倍高速）\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/258/"
translationStatus: complete
---

データベース設定をいくつか調整することで、初期ブロックダウンロードを約5倍高速化することができました。約30分でダウンロードが完了します。

データベースのデフォルト設定では、各ブロックを同期的にディスクに書き込んでいましたが、これは必要ありません。変更をメモリにキャッシュし、バッチで書き出すように設定を変更しました。ブロックはトランザクション的に書き込まれるため、完全な変更が行われるか、まったく行われないかのどちらかであり、いずれの場合もデータは有効な状態に保たれます。

この変更は初期ブロックダウンロード中のみ有効にしました。最新のブロックから2000ブロック以内に近づくと、これらの変更はオフになり、従来の速度に戻ります。

使い始めたい方のためにテストビルドを作成しました:

[http://www.bitcoin.org/download/bitcoin-0.3.2.5-win32.zip](http://www.bitcoin.org/download/bitcoin-0.3.2.5-win32.zip)
[http://www.bitcoin.org/download/bitcoin-0.3.2.5-linux.tar.gz](http://www.bitcoin.org/download/bitcoin-0.3.2.5-linux.tar.gz)

これらのバイナリには、Gavin AndresenのJSON-RPC HTTP認証機能と、0.3.2からのその他の重要なセキュリティ改善も含まれています。

過去24時間にわたって、初期ブロックダウンロードを試みている最中に2〜60秒ごとにランダムに強制終了して再起動するテストを実行しましたが（かわいそうに）、問題ありませんでした。

wallet.datの処理方法に変更はありません。この変更はblk*.datと重要でないaddr.datのみが対象です。blk*.datがおかしくなった場合は、いつでも削除して再ダウンロードさせることができます。
