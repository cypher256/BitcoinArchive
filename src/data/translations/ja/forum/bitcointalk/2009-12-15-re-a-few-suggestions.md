---
title: "Re: いくつかの提案"
date: 2009-12-15T20:37:32.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg70#msg70"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「いくつかの提案」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/24/"
translationStatus: complete
---

<!-- tone-skip -->
[Quote from: madhatter2 on December 15, 2009, 05:21:09 AM](#msg68)
> 了解、std::stringの問題を調べてみる。最新バージョンのUbuntu Linuxでも同じstd::stringの問題が出ている。だからこれはOSXだけの問題ではない。俺の本来のバックグラウンドはCであってC++ではないので、C++のデータ型やヘッダーなどの詳細についてはまだ「やりながら」学んでいるところだ。Smiley
>
> wx/defs.hには__WXCOCOA__と__WXMAC__のdefineしかない（何か見落としているに違いない…wxwidgetsをリビルドする必要があるかもしれない――試してみよう）。既存のdefineの組み合わせを試したが成功していない。もう一つの選択肢はOSX上でgtkを使うことだが、ウィンドウ処理が遅くなるし、（個人的には）「見た目が悪い」。CarbonがOSXには最適だろう。動くまでハックし続ける。Smiley
>
> FreeBSD用の起動スクリプトも完成した。xorgの仮想フレームバッファをlocalhostで起動し、bitcoinを立ち上げて、X11の画面出力を（モニターではなく）メモリに格納するものだ。かなりの力技だが、bitcoinを擬似的なUnixデーモンとして実行できるようになる。このコードを12時間以上動かしているが、メモリリークやその他の異常は検出されていない。
>
> また、bitcoinがクラッシュしたりポート8333で応答しなくなったりしたことを検出し、ページを送信して、デーモンを再起動するシンプルなネットワークモニターも用意した。この構成は理想的だ。世界中の自分が管理するサーバーにシードのデプロイを始めた。Smiley
>
> 一つ質問：debug.logを有効にするにはどうすればいい？ bitcoinを停止して~/.bitcoin/debug.logをtouchしてからbitcoinを再起動してみたが、ファイルに書き込まれないようだ。何か見落としているだろうか？
>
> SFのセットアップが完了したら、これらのツールを含める予定だ。
>
> Cheers!
<!-- /tone-skip -->
それなら、wxWidgetsのビルドまたは設定で何か異なることをしているはずだ。

wxWidgetsの「configure」スクリプトでどのオプションを使用したか？私が使用したオプションはbuild-unix.txtに記載されている。

引用：「一つ質問：debug.logを有効にするにはどうすればいいですか？Bitcoinを停止して~/.bitcoin/debug.logをtouchして、再度Bitcoinを起動してみましたが、ファイルに書き込まれることはありません。何か見落としていますか？」
そのようなことは聞いたことがない。debug.logに何か入っているか？ファイルをtouchしたなら、何か入っているはずだ。プログラムにファイルへの書き込みアクセス権はあるか？
