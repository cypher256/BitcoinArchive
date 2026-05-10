---
title: "Re: ウェブサイトで Bitcoin 支払いを自動化する方法はあるか？"
date: 2010-05-18T02:58:11.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=112.msg1143#msg1143"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「ビットコインの支払いを自動化する方法はありますか...」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/104/"
translationStatus: complete
---

少し遅くなったが、同じ問題を抱えている人がいるかもしれないので。コンパイルのダンプには 2 つの警告（それぞれ 20 行の長さ）と 2 つのリンクエラーがあった。エラーは以下の通りだ:
> obj/nogui/init.o(.gnu.linkonce.t._ZNK13wxArrayString4ItemEm+0x13): In function `wxArrayString::Item(unsigned long) const':
> /usr/local/include/wx-2.9/wx/buffer.h:42: undefined reference to `wxTheAssertHandler'
>
> obj/nogui/init.o(.gnu.linkonce.t._ZNK13wxArrayString4ItemEm+0x45): In function `wxArrayString::Item(unsigned long) const':
> /usr/src/bitcoin/trunk/uint256.h:526: undefined reference to `wxOnAssert(char const*, int, char const*, char const*, wchar_t const*)'

これらはおそらく、wxWidgets のデバッグビルドからリリースビルドに切り替えたことが原因だ。開発者たちはデバッグビルドのみに移行し、リリースビルドを廃止する方向に進んでいるので、存在しない assert 関連の参照によりリリースビルドが壊れていても気にしないのだろう。デバッグビルドを恐れる必要はない。リリース用途に完全に適している。

bitcoind はデーモンとして動作し、コマンドラインまたは JSON-RPC で制御できる。

FreeBSD でのビルド手順を詳しく説明してくれた madhatter と generica に感謝する。
