---
title: "Re: いくつかの提案"
date: 2009-12-15T05:21:09.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg68#msg68"
author: "The Madhatter"
participants:
  - name: "The Madhatter"
    slug: "the-madhatter"
description: "BitcoinTalkトピック12におけるThe Madhatterの文脈投稿。msg70で引用。"
isSatoshi: false
threadId: "bt-a-few-suggestions"
tags: []
translationStatus: complete
---

了解、std::stringの問題を調べてみる。最新版のUbuntu Linuxでも同じstd::stringの問題が出ている。だからこれはOSXだけの問題ではない。正直に言うと、俺のメインの経歴はCであってC++ではないので、C++のデータ型/ヘッダー/その他の仕様はまだ「やりながら」学んでいるところだ。Smiley

wx/defs.hには__WXCOCOA__と__WXMAC__のdefineしかない（何か見落としているはずだ…wxwidgetsを再ビルドする必要があるかもしれない――試してみる）。既存のdefineの組み合わせを試したが成功していない。もう一つの選択肢はOSXでgtkを使うことだが、ウィンドウ描画が遅くなるし（個人的な意見だが）「見苦しい」。CarbonがOSXには最適だろう。動くまでハックし続ける。Smiley

FreeBSD用の起動スクリプトも作った。xorgの仮想フレームバッファをlocalhostに起動し、Bitcoinを立ち上げ、X11の画面出力を（モニターではなく）メモリに送り込むものだ。かなりの大技だが、Bitcoinを疑似UNIXデーモンとして動かすことはできる。12時間以上コードを走らせているが、メモリリークやその他の異常は検出されていない。

また、Bitcoinがクラッシュしたりポート8333で応答しなくなったりした場合に検知し、ページを送信し、デーモンを再起動するシンプルなネットワークモニターも作った。この構成は理想的だ。世界中の自分が管理するサーバーにシードのデプロイを始めた。Smiley

一つ質問：debug.logを有効にするにはどうすればいい？Bitcoinを停止し、~/.bitcoin/debug.logをtouchして再起動してみたが、ファイルに書き込まれないようだ。何か見落としているのだろうか？

SFのセットアップが済んだら、これらのツールを含める予定だ。

乾杯！
