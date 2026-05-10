---
title: "Re: DEB パッケージ？"
date: 2010-02-12T15:57:37.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=49.msg322#msg322"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「DEB パッケージ？」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/53/"
translationStatus: complete
---

[Deleted] Quote from: soultcer on February 12, 2010, 02:31:50 PM
> 必要でしたら、コンパイル済みバイナリを提供できますよ。

何か見落としているだろうか？bitcoin.org の 32 ビット Linux プリコンパイル済みバイナリに問題があるか？

配布物の Bitcoin バイナリは wxWidgets ライブラリを静的リンクしており、共有リンク（openssl と GTK）は Ubuntu に含まれているため、依存関係をダウンロードする.deb でなくても実行できる。

UTF-8 のために wxWidgets 2.9.0 にアップグレードしているところで、これにはまだ DEB パッケージがないため、静的リンクを続ける必要がある。
