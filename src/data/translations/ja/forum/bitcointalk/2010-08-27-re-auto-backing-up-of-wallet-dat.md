---
title: "Re: wallet.datの自動バックアップ"
date: 2010-08-27T01:13:42.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=921.msg11345#msg11345"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「wallet.datの自動バックアップ」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/423/"
threadId: "bt-auto-backing-up-of-wallet-dat"
threadTitle: "auto backing up of wallet.dat"
threadPosition: 2
translationStatus: complete
---

メモリに読み込んで書き出す方法だと、メモリが逼迫した状況で失敗する可能性があります。

copyfile(const char* from, const char* to)やcopyfile(path from, path to)のような、できればBoostにあるものを探しています。見つけてくれれば、実装にかかる可能性が高くなります。

[Quote from: nelisky on August 26, 2010, 01:21:57 AM](https://bitcointalk.org/index.php?topic=921.msg11232#msg11232)ファイルコピーについて、なぜBoostの依存関係を増やすのですか？個人的には依存関係の少ないコアライブラリが欲しいです。
JSONやwxWidgetsの依存関係を置き換える多数のものにBoostが必要です。Boostは良い、ポータブルなもので、避けるべきではありません。
