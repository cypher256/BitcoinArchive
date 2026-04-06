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
translationStatus: complete
quotes:
  - id: "q1"
    person: "nelisky"
    date: "2010-08-25T16:21:57.000Z"
---

メモリに読み込んで書き出す方法だと、メモリが逼迫した状況で失敗する可能性がある。

copyfile(const char* from, const char* to)やcopyfile(path from, path to)のような、できればBoostにあるものを探している。見つけてくれれば、実装にかかる可能性が高くなる。

<!-- quote: q1 -->
<!-- tone-skip -->
> ファイルコピーについて、なぜBoostへの依存を増やすのか？コアライブラリは依存関係が少ない方がいい。
<!-- /tone-skip -->

JSONやwxWidgetsの依存関係を置き換える多数のものにBoostが必要だ。Boostは良い、ポータブルなもので、避けるべきではない。
