---
title: "Re: 2回目のトランザクションは正しく動作していますか？"
date: 2010-01-05T20:00:46.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=17.msg85#msg85"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「2回目のトランザクションは正しく動作していますか？」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/28/"
translationStatus: complete
---

IPアドレスで送信した場合、転送は即時だ。Bitcoinアドレスで送信し、受取人がその時点でオンラインでない場合、表示されるまで30分以上かかる場合がある。

また、受信したトランザクションを確認するには、受取人がブロックチェーンと同期している必要がある。つまり、下部のステータスバーに少なくとも33000ブロックと表示されている必要がある。例えば「x接続  33200ブロック  xトランザクション」のように。

[Quote from: sirius-m on January 05, 2010, 01:20:06 AM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-17/2010-01-05-sirius-msg84/)
> [Quote from: Agora on January 01, 2010, 06:09:58 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-17/2010-01-01-agoramutual-msg83/)

トランザクションのブロック数は、そのトランザクションの後にネットワーク全体で生成された新しいブロックの数だ。チェーン内の各新しいブロックは、その作成者に新しいコインをもたらす。トランザクションリスト内の1つの「生成済み」トランザクションは、あなたが1つのブロックを生成したことを意味する。「ブロック」の概念を初見で少しわかりにくいと感じたのはあなたが最初ではない。

ステータスが「x確認」と表示されたらもっとわかりやすくなるだろうか。例えば：
2/未確認
3/未確認
4/未確認
5/未確認
6確認
7確認
8確認

各ブロックは基本的に、別のノードがその時点までのすべてのトランザクションに同意したことを確認したことを意味する。
