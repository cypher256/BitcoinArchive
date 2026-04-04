---
title: "Re: 64ビットサポート"
date: 2010-01-14T20:17:20.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=18.msg97#msg97"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「64ビットサポート」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/29/"
translationStatus: complete
---

64ビットのコンパイルはまだ試していない。64ビット数を使用するのはわずかな箇所だけで、SHA-256は32ビットアルゴリズムなので、64ビットにしても速くならないが、64ビットOSを使っている人には便利かもしれない。機会があれば-m64を試して問題が何か確認してみる。

ia32-libsをインストールすれば、64ビットLinux上で32ビット版を実行できる。（sudo apt-get install ia32-libs）Debianパッケージを作成すれば、依存関係として自動的に取り込むことができるだろう。
