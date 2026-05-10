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

0.3.1 用に更新した bitcoin.po をこのメッセージに添付してアップロードした：
[http://bitcointalk.org/index.php?topic=151.msg1259#msg1259](http://bitcointalk.org/index.php?topic=151.msg1259#msg1259)

新しい翻訳を始める場合はこちらを使ってほしい。

すでに po ファイルがあるなら、poedit で更新できる。  
- 開発フォーラムに投稿された 0.3.1 リリース候補から src ディレクトリを取得する。どのバージョンでもよい：
[http://bitcointalk.org/index.php?topic=383.0](http://bitcointalk.org/index.php?topic=383.0)
- src 配下にサブディレクトリを作る：locale/??/LC_MESSAGES
（??は実際なんでもよい。「en」か自分の言語の 2 文字コード）
- そこに.po ファイルを置く
- poedit で開く
- poedit で、Catalog->Update from sources

肝心なのは、ソースファイルが入った src ディレクトリが、.po ファイルから 3 階層上にある必要があることだ。
