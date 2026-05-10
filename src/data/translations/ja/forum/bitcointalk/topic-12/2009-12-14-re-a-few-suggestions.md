---
title: "Re: いくつかの提案"
date: 2009-12-14T17:15:56.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg67#msg67"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「いくつかの提案」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/23/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "madhatter2"
    date: "2009-12-14T06:01:39.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> 誰かここについて教えてくれないか？
<!-- /tone-skip -->

std::string から wxString への暗黙の変換が機能していないようだ。これはあらゆるところで使用されており、変換が動作する必要がある。

wxString は win32 の 16 ビット wchar と 8 ビット ansi のデュアルコンパイルをサポートするため複雑だ。Windows では「unicode」（つまり wchar）ビルドを使用した場合にこの問題が発生する可能性があり、その場合 wxString は wchar で std::string は char になる。

おそらく wxWidgets のコンパイル定義やビルド設定の問題だろう。「configure」でどのオプションを使用したか？

__WXMAC__が正しい定義かわからない。wxString を複雑にしているのは Mac Classic サポートかもしれないが、私たちは OSX だけが必要だ。__WXOSX__を試してみてほしい（または以下を参照）

[http://docs.wxwidgets.org/stable/wx_cppconst.html](http://docs.wxwidgets.org/stable/wx_cppconst.html)
<!-- tone-skip -->
「wxWidgets には Mac OS への 2 つの移植があります。そのうちの 1 つ、wxMac には Classic と Carbon の 2 つのバージョンがあります。Classic バージョンは Mac OS バージョン 8 で動作する唯一のものです。Carbon バージョンは CFM または Mach-O（ELF のようなバイナリフォーマット）としてビルドでき、前者は OS 9 で動作し、後者は OS X でのみ動作します。最後に、OS X でのみ使用できる新しい Cocoa ポートがあります。まとめると：

    * Classic と OS X を含むすべての Mac プラットフォームをテストしたい場合は、__WXMAC__と__WXCOCOA__の両方をテストしてください。
    * OS X 上の任意の GUI Mac ポートをテストしたい場合は、__WXOSX__を使用してください。
    * wxGTK や wxBase を含む Mac OS X 上の任意のポートをテストしたい場合は、__DARWIN__を使用してください」
<!-- /tone-skip -->
