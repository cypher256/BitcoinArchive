---
title: "Re: 0.3 ほぼ完成 — Mac バージョンをテストしてください！"
date: 2010-06-25T02:17:41.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=199.msg1760#msg1760"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「0.3 ほぼ完成」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/145/"
translationStatus: complete
---

分からない。もっと Linux 経験のある方が必要なライブラリのインストール方法を知っているかもしれない。

Ubuntu 10.04 でビルドした。間違いだったかもしれない。より多くの後方互換性のために、古いバージョンでビルドすべきだったかもしれない。Linux ではこれは問題なのだろうか。最新バージョンでビルドすると、古いバージョンで動作に問題が出るのだろうか？10.04 で GCC の古いバージョンにダウングレードする方法はあるか？

64 ビット版は 32 ビット版より速くないはずだが、2 つの Linux バージョンを並べて比較して確認してもらえると素晴らしい。SHA-256 は 32 ビットアルゴリズムであり、BitcoinMiner では 64 ビットはまったく使用していない。

Windows 用の 64 ビット版は必要ない。32 ビットプログラムはすべてのバージョンの Windows で動作する。64 ビット OS が 64 ビットプログラムを要求する Linux とは違う。

Linux が Windows より少し速いかどうかも気になる。

ディレクトリ構成はどうすべきだと思うか:
/bin32/
/bin64/
それとも
/bin/32/
/bin/64/
