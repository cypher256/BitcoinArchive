---
title: "Re: Bitcoin x86 for Windows"
date: 2010-07-27T01:29:42.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=572.msg5978#msg5978"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがキャッシュされたSHA256のアイデアをSVNに追加し約70%の高速化を達成したこと、およびCrypto++ 5.6.0のASM SHAコードのコンパイラ互換性について議論。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/280/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Olipro"
    personSlug: "olipro"
    date: "2010-07-26T04:04:41.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> Crypto++ 5.6.0: [http://www.cryptopp.com/](http://www.cryptopp.com/)
<!-- /tone-skip -->

Cached SHA256: [http://pastebin.com/rJAYZJ32](http://pastebin.com/rJAYZJ32)（これは他の場所でも公開されていると思いますが、IRCでリンクを教えてもらいました）
キャッシュされたSHA256の状態のアイデアをSVNのrev 113に追加した。高速化は約70%だ。x64スレッドでのあなたの投稿に基づいて、tcatmの功績とした。

Crypto++ 5.6.0のASM SHAコードをMinGWでコンパイルできるが、実行するとすぐにクラッシュする。MASM（Microsoftのアセンブラ）用と書かれており、サンプルのコマンドラインはVisual C++のもののようだ。MSVCとIntelコンパイラでしか動作しないのだろうか？
