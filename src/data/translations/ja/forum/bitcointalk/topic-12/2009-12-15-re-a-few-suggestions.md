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
quotes:
  - id: "q1"
    person: "madhatter2"
    date: "2009-12-14T20:21:09.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> 了解、std::stringの問題を調べてみる。最新バージョンのUbuntu Linuxでも同じstd::stringの問題が出ている。だからこれはOSXだけの問題ではない。俺の本来のバックグラウンドはCであってC++ではないので、C++のデータ型やヘッダーなどの詳細についてはまだ「やりながら」学んでいるところだ。Smiley
<!-- /tone-skip -->
それなら、wxWidgetsのビルドまたは設定で何か異なることをしているはずだ。

wxWidgetsの「configure」スクリプトでどのオプションを使用したか？私が使用したオプションはbuild-unix.txtに記載されている。

引用：「一つ質問：debug.logを有効にするにはどうすればいいですか？Bitcoinを停止して~/.bitcoin/debug.logをtouchして、再度Bitcoinを起動してみましたが、ファイルに書き込まれることはありません。何か見落としていますか？」
そのようなことは聞いたことがない。debug.logに何か入っているか？ファイルをtouchしたなら、何か入っているはずだ。プログラムにファイルへの書き込みアクセス権はあるか？
