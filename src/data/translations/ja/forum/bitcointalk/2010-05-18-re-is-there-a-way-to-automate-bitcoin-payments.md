---
title: "返信: ビットコインの支払いを自動化する方法はありますか..."
date: 2010-05-18T02:58:11.000Z
source: bitcointalk
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

少し遅くなりましたが、同じ問題を抱えている方がいるかもしれないので。コンパイルのダンプには2つの警告（それぞれ20行の長さ）と2つのリンクエラーがありました。エラーは以下の通りです:
引用：obj/nogui/init.o(.gnu.linkonce.t._ZNK13wxArrayString4ItemEm+0x13): In function `wxArrayString::Item(unsigned long) const':
/usr/local/include/wx-2.9/wx/buffer.h:42: undefined reference to `wxTheAssertHandler'

obj/nogui/init.o(.gnu.linkonce.t._ZNK13wxArrayString4ItemEm+0x45): In function `wxArrayString::Item(unsigned long) const':
/usr/src/bitcoin/trunk/uint256.h:526: undefined reference to `wxOnAssert(char const*, int, char const*, char const*, wchar_t const*)'

これらはおそらく、wxWidgetsのデバッグビルドからリリースビルドに切り替えたことが原因です。開発者たちはデバッグビルドのみに移行し、リリースビルドを廃止する方向に進んでいるので、存在しないassert関連の参照によりリリースビルドが壊れていても気にしないのでしょう。デバッグビルドを恐れる必要はありません。リリース用途に完全に適しています。

bitcoindはデーモンとして動作し、コマンドラインまたはJSON-RPCで制御できます。

FreeBSDでのビルド手順を詳しく説明してくれたmadhatterとgenericaに感謝します。
