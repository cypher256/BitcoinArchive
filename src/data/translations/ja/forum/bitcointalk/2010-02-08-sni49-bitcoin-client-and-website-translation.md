---
title: "Bitcoinクライアントとウェブサイトの翻訳"
date: 2010-02-08T16:10:37.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=47.msg283#msg283"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoの投稿：「Bitcoinクライアントとウェブサイトの翻訳」。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/49/"
threadId: "bt-bitcoin-client-and-website-translation"
threadTitle: "Bitcoin client and website translation"
threadPosition: 2
translationStatus: complete
---

単一のバイナリと複数の.moファイルを持つ方がはるかに簡単です。多数のビルドバリエーションを持つのはメンテナンス作業が多すぎます。ソフトウェアのサポートが実装されれば、誰でも翻訳に貢献できるようになります。

wxWidgetsはgettext標準を使用しています。gettextツールやpoeditのようなものを使用して、ソースファイルから文字列をスキャンして.poファイルを作成し、翻訳を.poファイルに編集してから、.moファイルにコンパイルします。プログラムは実行時に.moファイルを読み込み、すべての文字列を置き換えます。プログラムを再コンパイルすることなく、.moファイルを追加するだけで既存のプログラムに追加言語を追加できます。

Windowsでは、.moファイルはEXEがあるディレクトリのlangサブディレクトリに配置します。

現在はJSON-RPCとコマンドラインサポートに取り組んでいますが、それが完了したら次にこれに取り組む予定です。
