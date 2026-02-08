---
title: "Re: 64ビットサポート"
date: 2010-01-14T20:17:20.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=18.msg97#msg97"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「64ビットサポート」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/29/"
threadId: "bt-64bit-support"
threadTitle: "64bit support"
threadPosition: 1
translationStatus: complete
---

64ビットのコンパイルはまだ試していません。64ビット数を使用するのはわずかな箇所だけで、SHA-256は32ビットアルゴリズムなので、64ビットにしても速くなりませんが、64ビットOSを使っている人には便利かもしれません。機会があれば-m64を試して問題が何か確認してみます。

ia32-libsをインストールすれば、64ビットLinux上で32ビット版を実行できます。（sudo apt-get install ia32-libs）Debianパッケージを作成すれば、依存関係として自動的に取り込むことができるでしょう。
