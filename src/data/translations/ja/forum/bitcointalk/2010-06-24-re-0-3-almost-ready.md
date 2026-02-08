---
title: "返信: 0.3ほぼ完成"
date: 2010-06-24T17:40:05.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=199.msg1748#msg1748"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「0.3ほぼ完成」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/144/"
threadId: "bt-0-3-almost-ready"
threadTitle: "0.3 almost ready"
threadPosition: 6
translationStatus: complete
---

テスト用のLinux版RC1はこちらです:
（リンク削除済み、下記参照）

32ビットと64ビットの両方のバイナリが含まれています。

最近の変更:

build-unix.txt:
- bitcoindのコンパイルに必要なwxBaseのビルド手順を追加。
- libboost-devパッケージは何もインストールしなくなったため、libboost-all-devを取得する必要があります。
- バージョン番号を更新。

makefile.unix:
- libboostライブラリは1.40でファイル名から"-mt"を削除しました。Ubuntu KarmicのようにBoost 1.38以下でコンパイルする場合は、boost_system-mtとboost_filesystem-mtに戻す必要があります。
