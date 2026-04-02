---
title: "Re: DEBパッケージ？"
date: 2010-02-12T15:57:37.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=49.msg322#msg322"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「DEBパッケージ？」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/53/"
threadId: "bt-deb-package"
translationStatus: complete
---

> [Deleted] Quote from: soultcer on February 12, 2010, 02:31:50 PM
> 必要でしたら、コンパイル済みバイナリを提供できますよ。

何か見落としているだろうか？bitcoin.orgの32ビットLinuxプリコンパイル済みバイナリに問題があるか？

配布物のBitcoinバイナリはwxWidgetsライブラリを静的リンクしており、共有リンク（opensslとGTK）はUbuntuに含まれているため、依存関係をダウンロードする.debでなくても実行できる。

UTF-8のためにwxWidgets 2.9.0にアップグレードしているところで、これにはまだDEBパッケージがないため、静的リンクを続ける必要がある。
