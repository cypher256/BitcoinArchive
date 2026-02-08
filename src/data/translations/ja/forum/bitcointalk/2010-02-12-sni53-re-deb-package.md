---
title: "Re: DEBパッケージ？"
date: 2010-02-12T15:57:37.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=49.msg322#msg322"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「DEBパッケージ？」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/53/"
threadId: "bt-deb-package"
threadTitle: "DEB Package?"
threadPosition: 2
translationStatus: complete
---

[soultcerの2010年2月12日 02:31:50 PMの投稿より引用](https://bitcointalk.org/index.php?topic=49.msg321#msg321)必要でしたら、コンパイル済みバイナリを提供できますよ。

何か見落としていますか？bitcoin.orgの32ビットLinuxプリコンパイル済みバイナリに問題がありますか？

配布物のBitcoinバイナリはwxWidgetsライブラリを静的リンクしており、共有リンク（opensslとGTK）はUbuntuに含まれているため、依存関係をダウンロードする.debでなくても実行できます。

UTF-8のためにwxWidgets 2.9.0にアップグレードしているところで、これにはまだDEBパッケージがないため、静的リンクを続ける必要があります。
