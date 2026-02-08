---
title: "Re: 64ビットサポート"
date: 2010-01-29T00:42:49.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=18.msg174#msg174"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「64ビットサポート」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/38/"
threadId: "bt-64bit-support"
threadTitle: "64bit support"
threadPosition: 2
translationStatus: complete
---

64ビットコンパイルの修正と、wxWidgets 2.9.0をサポートするためのいくつかの修正をSVNにコミットしました。

64ビット用にserialize.hのmin(sizeof())にコンパイルエラーが1つあり、それを修正しました。残りの64ビットコンパイルエラーはwxWidgets 2.8.9で発生していたため、wxWidgets 2.9.0のサポートに取り組み始めました。

wxWidgets 2.9.0はUTF-8です。wxWidgetsのUTF-8サポートを見越して、wxWidgets 2.8.9のANSIバージョンを使用してきました。

64ビットのUbuntu 9.10 Karmicでコンパイルして実行しました。

残っているバグはステータスの数値が崩れる問題だけだと思います。原因はわかりませんが、UTF-8関連の可能性がありますが、どうしてそうなるかは見当もつきません。まだ調べていません。

build-unix.txtが更新され、SVNに2つのmakefileがあります：
makefile.unix.wx2.8
makefile.unix.wx2.9

残念ながら、私たちが使用するどちらのバージョンのwxWidgetsにもまだDebianパッケージがありません。wchar（「unicode」）版のwxWidgets 2.8しかなく、wcharのwxStringはstd::stringに変換できないため問題です。私たちはANSIのwxWidgets 2.8、またはwxWidgets 2.9のいずれかを使用しています。なので、まだ自分で取得してビルドする必要があります。
