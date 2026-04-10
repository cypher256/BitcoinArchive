---
title: "Re: 0.3ほぼ完成 — Macバージョンをテストしてください！"
date: 2010-06-25T02:17:41.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=199.msg1760#msg1760"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「0.3ほぼ完成」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/145/"
translationStatus: complete
---

分からない。もっとLinux経験のある方が必要なライブラリのインストール方法を知っているかもしれない。

Ubuntu 10.04でビルドした。間違いだったかもしれない。より多くの後方互換性のために、古いバージョンでビルドすべきだったかもしれない。Linuxではこれは問題なのだろうか。最新バージョンでビルドすると、古いバージョンで動作に問題が出るのだろうか？10.04でGCCの古いバージョンにダウングレードする方法はあるか？

64ビット版は32ビット版より速くないはずだが、2つのLinuxバージョンを並べて比較して確認してもらえると素晴らしい。SHA-256は32ビットアルゴリズムであり、BitcoinMinerでは64ビットはまったく使用していない。

Windows用の64ビット版は必要ない。32ビットプログラムはすべてのバージョンのWindowsで動作する。64ビットOSが64ビットプログラムを要求するLinuxとは違う。

LinuxがWindowsより少し速いかどうかも気になる。

ディレクトリ構成はどうすべきだと思うか:
/bin32/
/bin64/
それとも
/bin/32/
/bin/64/
