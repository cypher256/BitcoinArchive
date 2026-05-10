---
title: "Re: 64 ビットサポート"
date: 2010-01-29T00:42:49.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=18.msg174#msg174"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「64 ビットサポート」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/38/"
translationStatus: complete
---

64 ビットコンパイルの修正と、wxWidgets 2.9.0 をサポートするためのいくつかの修正を SVN にコミットした。

64 ビット用に serialize.h の min(sizeof())にコンパイルエラーが 1 つあり、それを修正した。残りの 64 ビットコンパイルエラーは wxWidgets 2.8.9 で発生していたため、wxWidgets 2.9.0 のサポートに取り組み始めた。

wxWidgets 2.9.0 は UTF-8 だ。wxWidgets の UTF-8 サポートを見越して、wxWidgets 2.8.9 の ANSI バージョンを使用してきた。

64 ビットの Ubuntu 9.10 Karmic でコンパイルして実行した。

残っているバグはステータスの数値が崩れる問題だけだと思う。原因はわからないが、UTF-8 関連の可能性があるが、どうしてそうなるかは見当もつかない。まだ調べていない。

build-unix.txt が更新され、SVN に 2 つの makefile があります：
makefile.unix.wx2.8
makefile.unix.wx2.9

残念ながら、私たちが使用するどちらのバージョンの wxWidgets にもまだ Debian パッケージがない。wchar（「unicode」）版の wxWidgets 2.8 しかなく、wchar の wxString は std::string に変換できないため問題だ。私たちは ANSI の wxWidgets 2.8、または wxWidgets 2.9 のいずれかを使用している。なので、まだ自分で取得してビルドする必要がある。
