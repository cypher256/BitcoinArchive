---
title: "Re: MSVCビルドとSHA-256"
date: 2010-07-18T21:24:09.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=453.msg4068#msg4068"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「MSVCビルドとSHA-256」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/243/"
translationStatus: complete
---

OpenSSLには、SHA256のブロックハッシュの低レベルな生の部分だけを行うインターフェースは無い。SHA256は、データを特定のフォーマットのバッファーで包むところから始まる。我々のように1～2ブロックしかハッシュしない場合、バッファーの準備は実際のハッシュ処理よりも一桁長い時間がかかる。これは数KB～数MBのデータをハッシュするケースで時間が均されるように想定されているからだ。BitcoinMinerでは、バッファーを一度フォーマットして使い回している。

もし我々のものより速いSHA256コード（MinGW/GCC環境）が見つかったら、本当にありがたい！（ただしライセンスには気をつけてほしい）我々が使っているのは試してみた唯一のものなので、改善の余地は十分にある。

これを書いた2年以上前は、SHA1の実装は猛烈に速いものが多数あったが、SHA256はあまり注目されていなかった。それから時間も経っているので、より良いものが出ている可能性は高い。当時の最速のSHA1と比べてSHA256はかなり遅く、私が思っていたほどの速度差で済むようなものではなかった。SHA256がSHA1より一定程度遅いのは当然だが、私が見たほどではないはずだ。

（スレッドの名前を変えてしまったが許してほしい。SHA-256の最適化は私がいつも忘れがちな重要事項なので）
