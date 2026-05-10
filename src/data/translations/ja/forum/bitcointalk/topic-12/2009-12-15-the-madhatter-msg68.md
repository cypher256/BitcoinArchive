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
description: "BitcoinTalk トピック 12 における The Madhatter の文脈投稿。msg70 で引用。"
isSatoshi: false
tags: []
translationStatus: complete
---

了解、std::string の問題を調べてみる。最新バージョンの Ubuntu Linux でも同じ std::string の問題が出ている。だからこれは OSX だけの問題ではない。俺の本来のバックグラウンドは C であって C++ではないので、C++のデータ型やヘッダーなどの詳細についてはまだ「やりながら」学んでいるところだ。😊

wx/defs.h には__WXCOCOA__と__WXMAC__の define しかない（何か見落としているに違いない…wxwidgets をリビルドする必要があるかもしれない――試してみよう）。既存の define の組み合わせを試したが成功していない。もう一つの選択肢は OSX 上で gtk を使うことだが、ウィンドウ処理が遅くなるし、（個人的には）「見た目が悪い」。Carbon が OSX には最適だろう。動くまでハックし続ける。😊

FreeBSD 用の起動スクリプトも完成した。xorg の仮想フレームバッファを localhost で起動し、bitcoin を立ち上げて、X11 の画面出力を（モニターではなく）メモリーに格納するものだ。かなりの力技だが、bitcoin を擬似的な Unix デーモンとして実行できるようになる。このコードを 12時間以上動かしているが、メモリーリークやその他の異常は検出されていない。

また、bitcoin がクラッシュしたりポート 8333 で応答しなくなったりしたことを検出し、ページを送信して、デーモンを再起動するシンプルなネットワークモニターも用意した。この構成は理想的だ。世界中の自分が管理するサーバーにシードのデプロイを始めた。😊

一つ質問：debug.log を有効にするにはどうすればいい？ bitcoin を停止して~/.bitcoin/debug.log を touch してから bitcoin を再起動してみたが、ファイルに書き込まれないようだ。何か見落としているだろうか？

SF のセットアップが完了したら、これらのツールを含める予定だ。

Cheers!
