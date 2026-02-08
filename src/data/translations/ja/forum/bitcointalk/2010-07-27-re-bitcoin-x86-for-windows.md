---
title: "Re: Bitcoin x86 for Windows"
date: 2010-07-27T01:29:42.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=572.msg5978#msg5978"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi NakamotoがキャッシュされたSHA256のアイデアをSVNに追加し約70%の高速化を達成したこと、およびCrypto++ 5.6.0のASM SHAコードのコンパイラ互換性について議論。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/280/"
threadId: "bt-bitcoin-x86-for-windows"
threadTitle: "Bitcoin x86 for Windows"
threadPosition: 1
translationStatus: complete
---

[Quote from: Olipro on July 26, 2010, 01:04:41 PM](https://bitcointalk.org/index.php?topic=572.msg5851#msg5851)Crypto++ 5.6.0: [http://www.cryptopp.com/](http://www.cryptopp.com/)
Cached SHA256: [http://pastebin.com/rJAYZJ32](http://pastebin.com/rJAYZJ32)（これは他の場所でも公開されていると思いますが、IRCでリンクを教えてもらいました）
キャッシュされたSHA256の状態のアイデアをSVNのrev 113に追加しました。高速化は約70%です。x64スレッドでのあなたの投稿に基づいて、tcatmの功績としました。

Crypto++ 5.6.0のASM SHAコードをMinGWでコンパイルできますが、実行するとすぐにクラッシュします。MASM（Microsoftのアセンブラ）用と書かれており、サンプルのコマンドラインはVisual C++のもののようです。MSVCとIntelコンパイラでしか動作しないのでしょうか？
