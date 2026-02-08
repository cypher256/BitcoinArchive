---
title: "Re: ウォレットを壊してしまい、送金が承認されなくなった"
date: 2010-10-06T16:54:23.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1306.msg15672#msg15672"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「ウォレットを壊してしまい、送金が承認されなくなった」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/487/"
threadId: "bt-i-broke-my-wallet-sends-never-confirm-now"
threadTitle: "I broke my wallet, sends never confirm now."
threadPosition: 3
translationStatus: complete
---

それはどちらかというとSelectCoinsの問題になるでしょう。

SVN rev 161には、自分の未承認トランザクションが使用可能かどうかを再帰的に判定する改良が含まれています。自分のお釣りはすぐに使えるべきなので、これが必要です。

新しい再帰的判定は：0/未承認のトランザクションは、それが自分のものであり、そのすべての依存関係がブロック内にあるか、やはり自分のものである場合に使用できます。

Windows版のビルドはこちらです：
[http://www.bitcoin.org/download/bitcoin-0.3.13.2-win32-setup.exe](http://www.bitcoin.org/download/bitcoin-0.3.13.2-win32-setup.exe)

このバージョンは、すでに0/未承認トランザクションがあり、それをすでに使用した可能性がある場合の改善です。0/未承認トランザクションの元の作成者である場合は、引き続きtheymosのパッチが必要です。
