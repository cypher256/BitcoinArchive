---
title: "Re: コイン送信時のBitcoinクラッシュ"
date: 2010-01-27T21:52:27.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=27.msg156#msg156"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「コイン送信時のBitcoinクラッシュ」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/32/"
translationStatus: complete
---

ウォレットファイルをコピーして回るとそうなる。ウォレットファイルを2台目のコンピュータにコピーすると、両方ともウォレット内のお金は自分のものだと思い込む。一方がそのお金を使うと、もう一方はそれらのコインが既に使われていることを知らず、再度使おうとし、そのエラーに遭遇することになる。

これが重要なエラーメッセージであることが明らかになったので、「このお金は既に使われているようだ... ウォレットファイルのコピーを別のコンピュータで使用した場合にこれが発生する可能性がある。」のようなものにすべきだろう。

ウォレットファイルを移動またはバックアップすることはできるが、「系統」は1つだけにして、一度に1つの場所でのみ使用する必要がある。ウォレットからお金を送金した場合、以前のコピーは使用してはいけない。

これは良い指摘だ。コインを使った後のバックアップを復元する場合に備えて、どのコインが既に使われたかを再発見するための再同期機能を追加する必要がある。これは実装が難しくなく、まだ実装されていないだけだ。リストに追加しておく。これにより、そのエラーメッセージを表示する代わりに、ほぼ状況を修復できるようになるだろう。
