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
tags: []
translationStatus: complete
---

了解、std::stringの問題を調べてみる。最新バージョンのUbuntu Linuxでも同じstd::stringの問題が出ている。だからこれはOSXだけの問題ではない。俺の本来のバックグラウンドはCであってC++ではないので、C++のデータ型やヘッダーなどの詳細についてはまだ「やりながら」学んでいるところだ。😊

wx/defs.hには__WXCOCOA__と__WXMAC__のdefineしかない（何か見落としているに違いない…wxwidgetsをリビルドする必要があるかもしれない――試してみよう）。既存のdefineの組み合わせを試したが成功していない。もう一つの選択肢はOSX上でgtkを使うことだが、ウィンドウ処理が遅くなるし、（個人的には）「見た目が悪い」。CarbonがOSXには最適だろう。動くまでハックし続ける。😊

FreeBSD用の起動スクリプトも完成した。xorgの仮想フレームバッファをlocalhostで起動し、bitcoinを立ち上げて、X11の画面出力を（モニターではなく）メモリーに格納するものだ。かなりの力技だが、bitcoinを擬似的なUnixデーモンとして実行できるようになる。このコードを12時間以上動かしているが、メモリーリークやその他の異常は検出されていない。

また、bitcoinがクラッシュしたりポート8333で応答しなくなったりしたことを検出し、ページを送信して、デーモンを再起動するシンプルなネットワークモニターも用意した。この構成は理想的だ。世界中の自分が管理するサーバーにシードのデプロイを始めた。😊

一つ質問：debug.logを有効にするにはどうすればいい？ bitcoinを停止して~/.bitcoin/debug.logをtouchしてからbitcoinを再起動してみたが、ファイルに書き込まれないようだ。何か見落としているだろうか？

SFのセットアップが完了したら、これらのツールを含める予定だ。

Cheers!
