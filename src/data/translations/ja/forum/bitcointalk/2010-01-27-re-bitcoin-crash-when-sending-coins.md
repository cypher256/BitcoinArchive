---
title: "Re: コイン送信時のBitcoinクラッシュ"
date: 2010-01-27T21:52:27.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=27.msg156#msg156"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「コイン送信時のBitcoinクラッシュ」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/32/"
threadId: "bt-bitcoin-crash-when-sending-coins"
threadTitle: "Bitcoin crash when sending coins"
threadPosition: 1
translationStatus: complete
---

ウォレットファイルをコピーして回るとそうなります。ウォレットファイルを2台目のコンピュータにコピーすると、両方ともウォレット内のお金は自分のものだと思い込みます。一方がそのお金を使うと、もう一方はそれらのコインが既に使われていることを知らず、再度使おうとし、そのエラーに遭遇することになります。

これが重要なエラーメッセージであることが明らかになったので、「このお金は既に使われているようです... ウォレットファイルのコピーを別のコンピュータで使用した場合にこれが発生する可能性があります。」のようなものにすべきでしょう。

ウォレットファイルを移動またはバックアップすることはできますが、「系統」は1つだけにして、一度に1つの場所でのみ使用する必要があります。ウォレットからお金を送金した場合、以前のコピーは使用してはいけません。

これは良い指摘です。コインを使った後のバックアップを復元する場合に備えて、どのコインが既に使われたかを再発見するための再同期機能を追加する必要があります。これは実装が難しくなく、まだ実装されていないだけです。リストに追加しておきます。これにより、そのエラーメッセージを表示する代わりに、ほぼ状況を修復できるようになるでしょう。
