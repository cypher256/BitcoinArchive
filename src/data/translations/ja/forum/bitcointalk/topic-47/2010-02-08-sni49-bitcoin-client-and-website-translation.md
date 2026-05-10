---
title: "Bitcoin クライアントとウェブサイトの翻訳"
date: 2010-02-08T16:10:37.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=47.msg283#msg283"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿：「Bitcoin クライアントとウェブサイトの翻訳」。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/49/"
translationStatus: complete
---

単一のバイナリと複数の.mo ファイルを持つ方がはるかに簡単だ。多数のビルドバリエーションを持つのはメンテナンス作業が多すぎる。ソフトウェアのサポートが実装されれば、誰でも翻訳に貢献できるようになる。

wxWidgets は gettext 標準を使用している。gettext ツールや poedit のようなものを使用して、ソースファイルから文字列をスキャンして.po ファイルを作成し、翻訳を.po ファイルに編集してから、.mo ファイルにコンパイルする。プログラムは実行時に.mo ファイルを読み込み、すべての文字列を置き換える。プログラムを再コンパイルすることなく、.mo ファイルを追加するだけで既存のプログラムに追加言語を追加できる。

Windows では、.mo ファイルは EXE があるディレクトリの lang サブディレクトリに配置する。

現在は JSON-RPC とコマンドラインサポートに取り組んでいるが、それが完了したら次にこれに取り組む予定だ。
