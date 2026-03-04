---
title: "Re: Gentoo Linux Ebuild"
date: 2010-08-27T00:49:43.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=930.msg11342#msg11342"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「Gentoo Linux Ebuild」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/422/"
translationStatus: complete
---

-datadir=を試してみてほしい。

前回$(shell /usr/bin/wx-config)を試した時、すぐにビルド問題について騒ぎになった。当時は調査する時間がなかった。

$(shell /usr/bin/wx-config)の問題の一つは、そこにたまたまあるどのバージョン（wx 2.8）やどの設定（非UTF-8）のwxWidgetsでも拾ってしまうことだ。-lwx_gtk2ud-2.9は正しい設定にのみ一致する。wxWidgetsが間違った設定でビルドされていると失敗する。

Quote:思い出せば、freenodeの#wxwidgetsでチャットした時、そこの開発者はなぜそれが使われているのか困惑していました。
なぜ困惑していたか言っていたか？

Quote:私のシステムではパスが/usr/include/wx-2.9/wx/wx.hだからです
なぜそこにあるのか？OSに含まれていたのか、それともビルドする必要があったのか？ビルドした場合、なぜ別の場所にインストールされるのか不思議だ。

wxWidgets 2.9はついにDebianパッケージとして利用可能になり始めたのか？

おそらくこうすべきだろう：

INCLUDEPATHS= \
 -I"/usr/local/include/wx-2.9" \
 -I"/usr/local/lib/wx/include/gtk2-unicode-debug-static-2.9" \
 -I"/usr/include/wx-2.9" \
 -I"/usr/lib/wx/include/gtk2-unicode-debug-static-2.9"

繰り返すが、これらのパスは2.9のみであることを確認し、2.8では失敗するようにするのに役立つ。

wxWidgets 2.8にはANSIとUTF-16があり、どちらも我々には不適切だ。パッケージとして簡単に入手できるため魅力的だが、多くの人が2.9をmakefileにハードコードし始めるまでフラストレーションを感じていた。
