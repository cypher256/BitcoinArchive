---
title: "Re: DEBパッケージ？"
date: 2010-02-12T02:33:02.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=49.msg315#msg315"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「DEBパッケージ？」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/51/"
translationStatus: complete
---

プログラムを実行しようとしているだけか、それとも本当にコンパイルする必要があるのか？「sudo apt-get ia32-libs」をすれば、64ビットUbuntuで実行できる32ビットLinuxバイナリがある。
[http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.2.0-linux.tar.gz/download](http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.2.0-linux.tar.gz/download)

最近、wxWidgets 2.9.0を使って64ビットKarmicでのビルド用にSVNを更新した。これは0.2.0リリースの後だ。0.2.0リリースはまだ64ビットでビルドできなかった。

残念ながら、使用できるwxWidgetsのバージョンの-dev debパッケージが現在存在しない。Karmicにはutf-16版しかない。ANSI（libwxgtk2.8-ansi-dev）版またはUTF-8（wxWidgets 2.9.0）版が必要だ。2.9.0に移行中だ。

VMは嫌だと言っていたのは承知しているが、最終手段として、最後に確認したところWindowsバージョンはWineで正常に動作する。
