---
title: "Re: wallet.datの自動バックアップ"
date: 2010-08-26T00:57:40.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=921.msg11228#msg11228"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「wallet.datの自動バックアップ」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/421/"
threadId: "bt-auto-backing-up-of-wallet-dat"
threadTitle: "auto backing up of wallet.dat"
threadPosition: 1
translationStatus: complete
---

別のトピックに投稿し始めましたが、ここでも繰り返します。このスレッドの方がトピックに特化しているようです。

主なバックアップの改善は、事前生成された鍵のプールと、ロード時にブロック履歴から見逃したトランザクションをスクレイピングする再スキャンです。そうすればバックアップは長期間有効に持続します。

nelisky、あなたと同じアイデアを投稿し始めていました。

ウォレットをロックし、フラッシュし、wallet.datを指定した場所にコピーしてからアンロックするjson-rpcコマンドはどうでしょうか？プールされた鍵よりも小さなプロジェクトなので、先に実装できるかもしれません。

ファイルをコピーする最もシンプルでポータブルな方法は何でしょうか？Boostに何かありますか？

名前は何がよいでしょうか？例えば：
backupwallet <destination>
