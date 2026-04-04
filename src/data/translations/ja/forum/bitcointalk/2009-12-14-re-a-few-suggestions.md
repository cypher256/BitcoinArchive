---
title: "Re: いくつかの提案"
date: 2009-12-14T17:15:56.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg67#msg67"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「いくつかの提案」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/23/"
translationStatus: complete
---

<!-- tone-skip -->
[Quote from: madhatter2 on December 14, 2009, 03:01:39 PM](#msg66)
> 誰かここについて教えてくれないか？
>
> g++ -c -O0 -Wno-invalid-offsetof -Wformat -g -D__WXMAC__ -DNOPCH -DBUILD_MACOSX -I"/usr/include" -I"/usr/local/include/wx-2.8" -I"/usr/local/include" -I"/usr/local/boost_1_41_0" -I"/sw/include/db4" -I"/usr/local/ssl/include" -I"/usr/local/lib/wx/include/mac-ansi-release-2.8" -o headers.h.gch headers.h
> ui.h: In constructor 'CGetTextFromUserDialog::CGetTextFromUserDialog(wxWindow*, const std::string&, const std::string&, const std::string&, const std::string&, const std::string&)':
> ui.h:421: error: no matching function for call to 'CGetTextFromUserDialogBase::CGetTextFromUserDialogBase(wxWindow*&, <anonymous enum>, const std::basic_string<char, std::char_traits<char>, std::allocator<char> >&)'
> uibase.h:673: note: candidates are: CGetTextFromUserDialogBase::CGetTextFromUserDialogBase(wxWindow*, wxWindowID, const wxString&, const wxPoint&, const wxSize&, long int)
> uibase.h:651: note:                 CGetTextFromUserDialogBase::CGetTextFromUserDialogBase(const CGetTextFromUserDialogBase&)
> ui.h:423: error: no matching function for call to 'wxStaticText::SetLabel(const std::basic_string<char, std::char_traits<char>, std::allocator<char> >&)'
> /usr/local/include/wx-2.8/wx/mac/carbon/stattext.h:38: note: candidates are: virtual void wxStaticText::SetLabel(const wxString&)
> ui.h:424: error: no matching function for call to 'wxTextCtrl::SetValue(const std::basic_string<char, std::char_traits<char>, std::allocator<char> >&)'
> /usr/local/include/wx-2.8/wx/textctrl.h:303: note: candidates are: virtual void wxTextCtrlBase::SetValue(const wxString&)
> ui.h:428: error: no matching function for call to 'wxStaticText::SetLabel(const std::basic_string<char, std::char_traits<char>, std::allocator<char> >&)'
> /usr/local/include/wx-2.8/wx/mac/carbon/stattext.h:38: note: candidates are: virtual void wxStaticText::SetLabel(const wxString&)
> ui.h:430: error: no matching function for call to 'wxTextCtrl::SetValue(const std::basic_string<char, std::char_traits<char>, std::allocator<char> >&)'
> /usr/local/include/wx-2.8/wx/textctrl.h:303: note: candidates are: virtual void wxTextCtrlBase::SetValue(const wxString&)
> make: *** [headers.h.gch] Error 1
<!-- /tone-skip -->

std::stringからwxStringへの暗黙の変換が機能していないようだ。これはあらゆるところで使用されており、変換が動作する必要がある。

wxStringはwin32の16ビットwcharと8ビットansiのデュアルコンパイルをサポートするため複雑だ。Windowsでは「unicode」（つまりwchar）ビルドを使用した場合にこの問題が発生する可能性があり、その場合wxStringはwcharでstd::stringはcharになる。

おそらくwxWidgetsのコンパイル定義やビルド設定の問題だろう。「configure」でどのオプションを使用したか？

__WXMAC__が正しい定義かわからない。wxStringを複雑にしているのはMac Classicサポートかもしれないが、私たちはOSXだけが必要だ。__WXOSX__を試してみてほしい（または以下を参照）

[http://docs.wxwidgets.org/stable/wx_cppconst.html](http://docs.wxwidgets.org/stable/wx_cppconst.html)
<!-- tone-skip -->
「wxWidgetsにはMac OSへの2つの移植があります。そのうちの1つ、wxMacにはClassicとCarbonの2つのバージョンがあります。ClassicバージョンはMac OSバージョン8で動作する唯一のものです。CarbonバージョンはCFMまたはMach-O（ELFのようなバイナリフォーマット）としてビルドでき、前者はOS 9で動作し、後者はOS Xでのみ動作します。最後に、OS Xでのみ使用できる新しいCocoaポートがあります。まとめると：

    * ClassicとOS Xを含むすべてのMacプラットフォームをテストしたい場合は、__WXMAC__と__WXCOCOA__の両方をテストしてください。
    * OS X上の任意のGUI Macポートをテストしたい場合は、__WXOSX__を使用してください。
    * wxGTKやwxBaseを含むMac OS X上の任意のポートをテストしたい場合は、__DARWIN__を使用してください」
<!-- /tone-skip -->
