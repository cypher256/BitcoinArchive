---
title: "Re: Gentoo Linux Ebuild"
date: 2010-08-27T08:03:27.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=930.msg11370#msg11370"
author: "mizerydearia"
participants:
  - name: "mizerydearia"
    slug: "mizerydearia"
description: "BitcoinTalkトピック930におけるmizerydeariaの文脈投稿。after msg11342, サトシを引用."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-08-27T00:49:43.000Z"
    sourceEntryId: "forum/bitcointalk/topic-930/2010-08-27-re-gentoo-linux-ebuild"
  - id: "q2"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-08-27T00:49:43.000Z"
    sourceEntryId: "forum/bitcointalk/topic-930/2010-08-27-re-gentoo-linux-ebuild"
  - id: "q3"
    person: "BioMike"
    personSlug: "biomike"
    date: "2010-08-27T05:22:35.000Z"
  - id: "q4"
    person: "BioMike"
    personSlug: "biomike"
    date: "2010-08-27T05:22:35.000Z"
  - id: "q5"
    person: "BioMike"
    personSlug: "biomike"
    date: "2010-08-27T05:22:35.000Z"
  - id: "q6"
    person: "BioMike"
    personSlug: "biomike"
    date: "2010-08-27T05:22:35.000Z"
translationStatus: complete
---

<!-- quote: q1 -->
> 前回 $(shell /usr/bin/wx-config) を試したとき、それに関するビルド問題ですぐに騒ぎになった。当時は調査する時間がなかった。
>
> $(shell /usr/bin/wx-config) の問題の一つは、たまたまそこにあるwxWidgetsの任意のバージョン（wx 2.8）と任意の構成（非UTF-8）を拾ってしまうことだ。-lwx_gtk2ud-2.9は正しい構成にしかマッチしない。wxWidgetsが間違った構成でビルドされていれば失敗する。

参考までに、Gentooには特定のwxWidgetsバージョンに対して以下の回避策がある：

```
$ eselect wxwidgets list
Available wxWidgets profiles:
  [1]   gtk2-ansi-release-2.6
  [2]   gtk2-unicode-2.9 *
  [3]   gtk2-unicode-release-2.6
  [4]   gtk2-unicode-release-2.8
```

$ /usr/bin/wx-config --version
2.9.1

# eselect wxwidgets set 1

Setting wxWidgets profile to gtk2-ansi-release-2.6

$ /usr/bin/wx-config --version
2.6.4
他のディストロについては分からないが。

<!-- quote: q2 -->
> Quoteこれは私のシステムではパスが /usr/include/wx-2.9/wx/wx.h だからだ
> なぜそこにあるのか？ OSに含まれていたのか、それとも自分でビルドしたのか？ もし自分でビルドしたのなら、なぜ別の場所に置かれるのか不思議だ。

Quote from: bonsaikitten<bonsaikitten> necrodearia: それは正しい場所だからそこにある
<bonsaikitten> necrodearia: /usr/local にないのは、そこが正しい場所ではないからだ
<bonsaikitten> さらなる質問はFHSを読めば解決するかもしれない
http://www.pathname.com/fhs/

Gentoo Linuxは（99.99%の）パッケージをソースからコンパイルするように設計されているので、そう、私はGentoo Linuxのパッケージ管理ソフトウェアであるPortageのebuildを使ってwxGTKをコンパイルした。

<!-- quote: q3 -->
> 1) ヘッダーを直す必要があることを覚えておいてくれ。

これが分からない。どのヘッダー？

<!-- quote: q4 -->
> 4) /home/bticoin？

bitcoinをどこでスペルミスしたか分からない。どのファイル？

<!-- quote: q5 -->
> 5) Makefileから最適化フラグを取り除いて、ユーザーに指定させろ（あるいは適切に除去しろ）

「最適化フラグ」が何を指すのかはっきりしない。

<!-- quote: q6 -->
> 6) 静的コードをビルドするな。動的コードをビルドするMakefileを持っている。欲しければ送れる。多少手を入れる必要はあるが。

コードのどの部分が静的で、動的に変換できるのかが分からない。誰もやっていないようだったのでebuildを準備しただけだ。ebuildを完璧にできるほどのスキルはないが、誰か他に改善に貢献したい人がいれば、gitリポジトリを用意した： http://github.com/mizerydearia/bitcoin_gentoo_ebuild
