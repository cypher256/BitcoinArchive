---
title: "Bitcoinクライアントとウェブサイトの翻訳"
date: 2010-02-08T16:10:37.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=47.msg283#msg283"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿：「Bitcoinクライアントとウェブサイトの翻訳」。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/49/"
threadId: "bt-bitcoin-client-and-website-translation"
translationStatus: complete
---

単一のバイナリと複数の.moファイルを持つ方がはるかに簡単だ。多数のビルドバリエーションを持つのはメンテナンス作業が多すぎる。ソフトウェアのサポートが実装されれば、誰でも翻訳に貢献できるようになる。

wxWidgetsはgettext標準を使用している。gettextツールやpoeditのようなものを使用して、ソースファイルから文字列をスキャンして.poファイルを作成し、翻訳を.poファイルに編集してから、.moファイルにコンパイルする。プログラムは実行時に.moファイルを読み込み、すべての文字列を置き換える。プログラムを再コンパイルすることなく、.moファイルを追加するだけで既存のプログラムに追加言語を追加できる。

Windowsでは、.moファイルはEXEがあるディレクトリのlangサブディレクトリに配置する。

現在はJSON-RPCとコマンドラインサポートに取り組んでいるが、それが完了したら次にこれに取り組む予定だ。
