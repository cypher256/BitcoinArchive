---
title: "Re: 新しいデモンストレーション用 CPU マイナーが利用可能に"
date: 2010-11-26T22:02:41.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1925.msg24719#msg24719"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「新しいデモ CPU マイナーが利用可能」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/516/"
translationStatus: complete
---

sha256.cpp にある tcatm の 4-way SSE2 SHA で試してみてくれ。C ファイルとして問題なくコンパイルできる。sha256.cpp を sha256.c にリネームするだけだ。Windows での簡単なテストでは動作させることができたが、Bitcoin とリンクした時はうまくいかなかった。C++プログラムの一部としてよりも、C プログラムの一部としての方がうまくいく可能性があるかもしれない。

現在は Linux ビルドでのみ有効なので、動作させることができれば Windows ユーザーに提供できるだろう。AMD CPU では約 100%のスピードアップだ。
