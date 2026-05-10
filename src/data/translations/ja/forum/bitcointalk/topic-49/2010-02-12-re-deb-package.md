---
title: "Re: DEB パッケージ？"
date: 2010-02-12T02:33:02.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=49.msg315#msg315"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「DEB パッケージ？」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/51/"
translationStatus: complete
---

プログラムを実行しようとしているだけか、それとも本当にコンパイルする必要があるのか？「sudo apt-get ia32-libs」をすれば、64 ビット Ubuntu で実行できる 32 ビット Linux バイナリがある。
[http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.2.0-linux.tar.gz/download](http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.2.0-linux.tar.gz/download)

最近、wxWidgets 2.9.0 を使って 64 ビット Karmic でのビルド用に SVN を更新した。これは 0.2.0 リリースの後だ。0.2.0 リリースはまだ 64 ビットでビルドできなかった。

残念ながら、使用できる wxWidgets のバージョンの-dev deb パッケージが現在存在しない。Karmic には utf-16 版しかない。ANSI（libwxgtk2.8-ansi-dev）版または UTF-8（wxWidgets 2.9.0）版が必要だ。2.9.0 に移行中だ。

VM は嫌だと言っていたのは承知しているが、最終手段として、最後に確認したところ Windows バージョンは Wine で正常に動作する。
