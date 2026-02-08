---
title: "Re: wallet.datの自動バックアップ"
date: 2010-08-27T15:47:57.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=921.msg11399#msg11399"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「wallet.datの自動バックアップ」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/425/"
threadId: "bt-auto-backing-up-of-wallet-dat"
threadTitle: "auto backing up of wallet.dat"
threadPosition: 4
translationStatus: complete
---

すみません、最近非常に忙しくてメッセージを流し読みしていますが、それでも追いつけません。

可能な限りWindows API呼び出しは避けたいです。通常6〜8個のパラメータが必要で、正しく動作させるために多くのテストが必要で、簡単なことを行うのに1ページ分のコードが必要になります。

通常iostreamsは避けています。よく制限にぶつかるようです。90年代にC++ストリーム標準をやや台無しにしてしまいました。残念なことに、正しく実装すればストリームは非常に強力で便利なものになり得ます。rpc.cppで使っているのは、まだ間違いだったと判明するかもしれません。

結論は、自作のものを作ってテストするよりも、既存のファイルコピー関数を呼び出す方が良いということです。
