---
title: "返信: 0.3ほぼ完成"
date: 2010-06-25T02:17:41.000Z
source: bitcointalk
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
threadId: "bt-0-3-almost-ready"
threadTitle: "0.3 almost ready"
threadPosition: 7
translationStatus: complete
---

分かりません。もっとLinux経験のある方が必要なライブラリのインストール方法を知っているかもしれません。

Ubuntu 10.04でビルドしました。間違いだったかもしれません。より多くの後方互換性のために、古いバージョンでビルドすべきだったかもしれません。Linuxではこれは問題なのでしょうか。最新バージョンでビルドすると、古いバージョンで動作に問題が出るのでしょうか？10.04でGCCの古いバージョンにダウングレードする方法はありますか？

64ビット版は32ビット版より速くないはずですが、2つのLinuxバージョンを並べて比較して確認していただけると素晴らしいです。SHA-256は32ビットアルゴリズムであり、BitcoinMinerでは64ビットはまったく使用していません。

Windows用の64ビット版は必要ありません。32ビットプログラムはすべてのバージョンのWindowsで動作します。64ビットOSが64ビットプログラムを要求するLinuxとは違います。

LinuxがWindowsより少し速いかどうかも気になります。

ディレクトリ構成はどうすべきだと思いますか:
/bin32/
/bin64/
それとも
/bin/32/
/bin/64/
