---
title: "Re: DEBパッケージ？"
date: 2010-02-12T02:33:02.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=49.msg315#msg315"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「DEBパッケージ？」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/51/"
threadId: "bt-deb-package"
threadTitle: "DEB Package?"
threadPosition: 1
translationStatus: complete
---

プログラムを実行しようとしているだけですか、それとも本当にコンパイルする必要がありますか？「sudo apt-get ia32-libs」をすれば、64ビットUbuntuで実行できる32ビットLinuxバイナリがあります。
[http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.2.0-linux.tar.gz/download](http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.2.0-linux.tar.gz/download)

最近、wxWidgets 2.9.0を使って64ビットKarmicでのビルド用にSVNを更新しました。これは0.2.0リリースの後です。0.2.0リリースはまだ64ビットでビルドできませんでした。

残念ながら、使用できるwxWidgetsのバージョンの-dev debパッケージが現在存在しません。Karmicにはutf-16版しかありません。ANSI（libwxgtk2.8-ansi-dev）版またはUTF-8（wxWidgets 2.9.0）版が必要です。2.9.0に移行中です。

VMは嫌だとおっしゃっていたのは承知していますが、最終手段として、最後に確認したところWindowsバージョンはWineで正常に動作します。
