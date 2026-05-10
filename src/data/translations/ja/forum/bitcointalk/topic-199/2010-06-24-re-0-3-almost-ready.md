---
title: "Re: 0.3 ほぼ完成 — Mac バージョンをテストしてください！"
date: 2010-06-24T17:40:05.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=199.msg1748#msg1748"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「0.3 ほぼ完成」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/144/"
translationStatus: complete
---

テスト用の Linux 版 RC1 はこちらだ:
（リンク削除済み、下記参照）

32 ビットと 64 ビットの両方のバイナリが含まれている。

最近の変更:

build-unix.txt:
- bitcoind のコンパイルに必要な wxBase のビルド手順を追加。
- libboost-dev パッケージは何もインストールしなくなったため、libboost-all-dev を取得する必要がある。
- バージョン番号を更新。

makefile.unix:
- libboost ライブラリは 1.40 でファイル名から"-mt"を削除した。Ubuntu Karmic のように Boost 1.38 以下でコンパイルする場合は、boost_system-mt と boost_filesystem-mt に戻す必要がある。
