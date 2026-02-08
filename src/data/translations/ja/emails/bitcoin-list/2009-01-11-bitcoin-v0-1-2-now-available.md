---
title: "[bitcoin-list] Bitcoin v0.1.2 公開"
date: 2009-01-11T22:32:18.000Z
source: bitcoin-list
sourceUrl: "https://sourceforge.net/p/bitcoin/mailman/message/21303153/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi NakamotoによるBitcoin v0.1.2のリリース告知。ノード接続に関するバグ修正を含む。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/20/"
translationStatus: complete
---

Bitcoin v0.1.2 がダウンロード可能になりました。

ダウンロードリンクは http://www.bitcoin.org をご覧ください。

これまでに見つかった問題はすべて、他のノードを自動的に検出して接続するコードに関するものです。これまで実環境でテストできなかったためです。実際のインターネットでは、接続がうまくいかなくなる原因がはるかに多くあります。

修正されたバグ：
- 新しいノードが接続先の他のノードを見つけにくくしていた様々な問題を修正。
- ファイアウォールの背後にいる場合、1つの接続しか受け付けられず、2つ目の接続が常に切断と再接続を繰り返していた問題を修正。

これらの問題はネットワークにかなりの支障をきたしており、ユーザーが増えるにつれて悪化するため、必ずアップグレードしてください。

Satoshi Nakamoto
