---
title: "Re: DEB パッケージ？"
date: 2010-02-13T01:38:37.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=49.msg326#msg326"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「DEB パッケージ？」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/55/"
translationStatus: complete
---

Karmic 64 ビットで wxWidgets 2.8.9 をコンパイルすることは私もできなかった。

wxWidgets 2.9.0 を使って最新の SVN を Karmic 64 ビットでコンパイルしており、64 ビットで問題なくコンパイルできる。build-unix.txt を読み、wxWidgets に指定された configure パラメーターを使用して、付属の makefile.unix.wx2.9 を使用できるようにしてほしい。（--enable-debug --disable-shared --enable-monolithic）

2.9.0 にはまだ修正が必要な表示上のバグが 1 つあり、ステータスの数値表示が何かの理由で詰まって表示される。──修正済み

ホームページのダウンロードリンクは SourceForge の tar.gz アーカイブへのもので、32 ビットバイナリと 0.2.0 のソースが含まれているが、当時はまだ 64 ビットでビルドできなかった。

SVN が 64 ビットの wx2.9.0 で初めてビルド可能になったのは 2010年1月28日だ。

いつか wxWidgets 2.9.0 の Debian パッケージができることを願っている。
