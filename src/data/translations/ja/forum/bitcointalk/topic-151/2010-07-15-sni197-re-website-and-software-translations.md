---
title: "Re: ウェブサイトとソフトウェアの翻訳"
date: 2010-07-15T18:37:13.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=151.msg3242#msg3242"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「ウェブサイトとソフトウェアの翻訳」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/197/"
translationStatus: complete
---

0.3.1用に更新したbitcoin.poをこのメッセージに添付してアップロードした：
[http://bitcointalk.org/index.php?topic=151.msg1259#msg1259](http://bitcointalk.org/index.php?topic=151.msg1259#msg1259)

新しい翻訳を始める場合はこちらを使ってほしい。

すでにpoファイルがあるなら、poeditで更新できる。  
- 開発フォーラムに投稿された0.3.1リリース候補からsrcディレクトリを取得する。どのバージョンでもよい：
[http://bitcointalk.org/index.php?topic=383.0](http://bitcointalk.org/index.php?topic=383.0)
- src配下にサブディレクトリを作る：locale/??/LC_MESSAGES
（??は実際なんでもよい。「en」か自分の言語の2文字コード）
- そこに.poファイルを置く
- poeditで開く
- poeditで、Catalog->Update from sources

肝心なのは、ソースファイルが入ったsrcディレクトリが、.poファイルから3階層上にある必要があることだ。
