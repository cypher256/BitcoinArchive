---
title: "Re: wallet.datの自動バックアップ"
date: 2010-08-27T01:13:42.000Z
type: "forum-post"
source: "bitcointalk"
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
translationStatus: complete
---

メモリに読み込んで書き出す方法だと、メモリが逼迫した状況で失敗する可能性がある。

copyfile(const char* from, const char* to)やcopyfile(path from, path to)のような、できればBoostにあるものを探している。見つけてくれれば、実装にかかる可能性が高くなる。

[Quote from: nelisky on August 26, 2010, 01:21:57 AM](#msg11232)
> ファイルコピーについて、なぜboostの依存関係を増やすのか？個人的には依存関係の少ないコアライブラリがほしい。C++では標準のファイルストリームを使えばいいのでは？http://www.dreamincode.net/code/snippet2306.htm のようなもの（簡単なGoogle検索から。試していないが正しそうに見える）。
> おまけに、ウォレットに変更があるたびにコピーするトリガーを追加するのはどうか？まあ、これはファイルロックが正しく動くことに依存するし、Windowsではそれがダメだったと記憶している。あちらでコードを書いてからしばらく経つ Smiley

JSONやwxWidgetsの依存関係を置き換える多数のものにBoostが必要だ。Boostは良い、ポータブルなもので、避けるべきではない。
