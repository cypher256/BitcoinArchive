---
title: "Re: いくつかの提案"
date: 2009-12-14T17:15:56.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg67#msg67"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「いくつかの提案」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/23/"
threadId: "bt-a-few-suggestions"
threadTitle: "A few suggestions"
threadPosition: 6
translationStatus: complete
---

[madhatter2の2009年12月14日 03:01:39 PMの投稿より引用](https://bitcointalk.org/index.php?topic=12.msg66#msg66)誰かここを解説してくれませんか？

g++ -c -O0 -Wno-invalid-offsetof -Wformat -g -D**__WXMAC__** -DNOPCH -DBUILD_MACOSX -I"/usr/include" -I"/usr/local/include/wx-2.8" -I"/usr/local/include" -I"/usr/local/boost_1_41_0" -I"/sw/include/db4" -I"/usr/local/ssl/include" -I"/usr/local/lib/wx/include/mac-ansi-release-2.8" -o headers.h.gch headers.h
...
ui.h:430: error: no matching function for call to 'wxTextCtrl::SetValue(const **std::basic_string**<char, std::char_traits<char>, std::allocator<char> >&)'
/usr/local/include/wx-2.8/wx/textctrl.h:303: note: candidates are: virtual void wxTextCtrlBase::SetValue(**const wxString&**)

std::stringからwxStringへの暗黙の変換が機能していないようです。これはあらゆるところで使用されており、変換が動作する必要があります。

wxStringはwin32の16ビットwcharと8ビットansiのデュアルコンパイルをサポートするため複雑です。Windowsでは「unicode」（つまりwchar）ビルドを使用した場合にこの問題が発生する可能性があり、その場合wxStringはwcharでstd::stringはcharになります。

おそらくwxWidgetsのコンパイル定義やビルド設定の問題でしょう。「configure」でどのオプションを使用しましたか？

__WXMAC__が正しい定義かわかりません。wxStringを複雑にしているのはMac Classicサポートかもしれませんが、私たちはOSXだけが必要です。__WXOSX__を試してみてください（または以下を参照）

[http://docs.wxwidgets.org/stable/wx_cppconst.html](http://docs.wxwidgets.org/stable/wx_cppconst.html)
「wxWidgetsにはMac OSへの2つの移植があります。そのうちの1つ、wxMacにはClassicとCarbonの2つのバージョンがあります。ClassicバージョンはMac OSバージョン8で動作する唯一のものです。CarbonバージョンはCFMまたはMach-O（ELFのようなバイナリフォーマット）としてビルドでき、前者はOS 9で動作し、後者はOS Xでのみ動作します。最後に、OS Xでのみ使用できる新しいCocoaポートがあります。まとめると：

    * ClassicとOS Xを含むすべてのMacプラットフォームをテストしたい場合は、__WXMAC__と__WXCOCOA__の両方をテストしてください。
    * OS X上の任意のGUI Macポートをテストしたい場合は、__WXOSX__を使用してください。
    * wxGTKやwxBaseを含むMac OS X上の任意のポートをテストしたい場合は、__DARWIN__を使用してください」
