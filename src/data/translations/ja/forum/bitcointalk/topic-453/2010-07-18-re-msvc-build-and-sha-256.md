---
title: "Re: MSVC ビルドと SHA-256"
date: 2010-07-18T21:24:09.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=453.msg4068#msg4068"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「MSVC ビルドと SHA-256」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/243/"
translationStatus: complete
---

OpenSSL には、SHA256 のブロックハッシュの低レベルな生の部分だけを行うインターフェースは無い。SHA256 は、データを特定のフォーマットのバッファーで包むところから始まる。我々のように 1～2 ブロックしかハッシュしない場合、バッファーの準備は実際のハッシュ処理よりも一桁長い時間がかかる。これは数 KB～数 MB のデータをハッシュするケースで時間が均されるように想定されているからだ。BitcoinMiner では、バッファーを一度フォーマットして使い回している。

もし我々のものより速い SHA256 コード（MinGW/GCC 環境）が見つかったら、本当にありがたい！（ただしライセンスには気をつけてほしい）我々が使っているのは試してみた唯一のものなので、改善の余地は十分にある。

これを書いた 2年以上前は、SHA1 の実装は猛烈に速いものが多数あったが、SHA256 はあまり注目されていなかった。それから時間も経っているので、より良いものが出ている可能性は高い。当時の最速の SHA1 と比べて SHA256 はかなり遅く、私が思っていたほどの速度差で済むようなものではなかった。SHA256 が SHA1 より一定程度遅いのは当然だが、私が見たほどではないはずだ。

（スレッドの名前を変えてしまったが許してほしい。SHA-256 の最適化は私がいつも忘れがちな重要事項なので）
