---
title: "Re: DEBパッケージ？"
date: 2010-02-13T01:38:37.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=49.msg326#msg326"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「DEBパッケージ？」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/55/"
threadId: "bt-deb-package"
threadTitle: "DEB Package?"
threadPosition: 3
translationStatus: complete
---

Karmic 64ビットでwxWidgets 2.8.9をコンパイルすることは私もできませんでした。

wxWidgets 2.9.0を使って最新のSVNをKarmic 64ビットでコンパイルしており、64ビットで問題なくコンパイルできます。build-unix.txtを読み、wxWidgetsに指定されたconfigureパラメータを使用して、付属のmakefile.unix.wx2.9を使用できるようにしてください。（--enable-debug --disable-shared --enable-monolithic）

2.9.0にはまだ修正が必要な表示上のバグが1つあり、ステータスの数値表示が何かの理由で詰まって表示されます。──修正済み

ホームページのダウンロードリンクはSourceForgeのtar.gzアーカイブへのもので、32ビットバイナリと0.2.0のソースが含まれていますが、当時はまだ64ビットでビルドできませんでした。

SVNが64ビットのwx2.9.0で初めてビルド可能になったのは2010年1月28日です。

いつかwxWidgets 2.9.0のDebianパッケージができることを願っています。
