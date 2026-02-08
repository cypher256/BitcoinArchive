---
title: "Re: いくつかの提案"
date: 2009-12-15T20:37:32.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg70#msg70"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「いくつかの提案」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/24/"
threadId: "bt-a-few-suggestions"
threadTitle: "A few suggestions"
threadPosition: 7
translationStatus: complete
---

[madhatter2の2009年12月15日 05:21:09 AMの投稿より引用](https://bitcointalk.org/index.php?topic=12.msg68#msg68)最新バージョンのUbuntu Linuxでも同じstd::stringの問題が発生しています。
それなら、wxWidgetsのビルドまたは設定で何か異なることをしているはずです。

wxWidgetsの「configure」スクリプトでどのオプションを使用しましたか？私が使用したオプションはbuild-unix.txtに記載されています。

引用：「一つ質問：debug.logを有効にするにはどうすればいいですか？Bitcoinを停止して~/.bitcoin/debug.logをtouchして、再度Bitcoinを起動してみましたが、ファイルに書き込まれることはありません。何か見落としていますか？」
そのようなことは聞いたことがありません。debug.logに何か入っていますか？ファイルをtouchしたなら、何か入っているはずです。プログラムにファイルへの書き込みアクセス権はありますか？
