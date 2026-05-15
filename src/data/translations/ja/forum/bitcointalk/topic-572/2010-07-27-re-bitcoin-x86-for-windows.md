---
title: "Re: Windows 用 Bitcoin x86"
date: 2010-07-27T01:29:42.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=572.msg5978#msg5978"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがキャッシュされた SHA256 のアイデアを SVN に追加し約 70%の高速化を達成したこと、と Crypto++ 5.6.0 の ASM SHA のコンパイラー互換性を議論。"
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
    sourceEntryId: "forum/bitcointalk/topic-572/2010-07-26-olipro-msg5851"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> Crypto++ 5.6.0: [http://www.cryptopp.com/](http://www.cryptopp.com/)
<!-- /tone-skip -->

Cached SHA256: [http://pastebin.com/rJAYZJ32](http://pastebin.com/rJAYZJ32)（これは他の場所でも公開されていると思うが、IRC でリンクを教えてもらった）
キャッシュされた SHA256 の状態のアイデアを SVN の rev 113 に追加した。高速化は約 70%だ。x64 スレッドでのあなたの投稿に基づいて、tcatm の功績とした。

Crypto++ 5.6.0 の ASM SHA コードを MinGW でコンパイルできるが、実行するとすぐにクラッシュする。MASM（Microsoft のアセンブラ）用と書かれており、サンプルのコマンドラインは Visual C++のもののようだ。MSVC と Intel コンパイラーでしか動作しないのだろうか？
