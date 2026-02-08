---
title: "Re: A few suggestions"
date: 2009-12-14T17:15:56.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg67#msg67"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"A few suggestions\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/23/"
threadId: "bt-a-few-suggestions"
threadTitle: "A few suggestions"
threadPosition: 6
---

[Quote from: madhatter2 on December 14, 2009, 03:01:39 PM](https://bitcointalk.org/index.php?topic=12.msg66#msg66)Can anyone shed some light here?

g++ -c -O0 -Wno-invalid-offsetof -Wformat -g -D**__WXMAC__** -DNOPCH -DBUILD_MACOSX -I"/usr/include" -I"/usr/local/include/wx-2.8" -I"/usr/local/include" -I"/usr/local/boost_1_41_0" -I"/sw/include/db4" -I"/usr/local/ssl/include" -I"/usr/local/lib/wx/include/mac-ansi-release-2.8" -o headers.h.gch headers.h
...
ui.h:430: error: no matching function for call to 'wxTextCtrl::SetValue(const **std::basic_string**<char, std::char_traits<char>, std::allocator<char> >&)'
/usr/local/include/wx-2.8/wx/textctrl.h:303: note: candidates are: virtual void wxTextCtrlBase::SetValue(**const wxString&**)

It looks like the implicit conversion from std::string to wxString isn't working.  That's used everywhere, the conversion needs to work.

wxString is complicated by supporting win32's 16-bit wchar and 8-bit ansi dual-compile.  You can get that problem on Windows if the "unicode" (meaning wchar) build is used, so that wxString is wchar and std::string is char.

It's probably some wxWidgets compile defines or build configuration.  What "configure" options did you use?

I'm not sure __WXMAC__ is the right define.  It may be the Mac Classic support that's complicating wxString, and we only want OSX.  Try __WXOSX__ (or see below)

[http://docs.wxwidgets.org/stable/wx_cppconst.html](http://docs.wxwidgets.org/stable/wx_cppconst.html)
"There are two wxWidgets ports to Mac OS. One of them, wxMac, exists in two versions: Classic and Carbon. The Classic version is the only one to work on Mac OS version 8. The Carbon version may be built either as CFM or Mach-O (binary format, like ELF) and the former may run under OS 9 while the latter only runs under OS X. Finally, there is a new Cocoa port which can only be used under OS X. To summarize:

    * If you want to test for all Mac platforms, classic and OS X, you should test both __WXMAC__ and __WXCOCOA__.
    * If you want to test for any GUI Mac port under OS X, use __WXOSX__.
    * If you want to test for any port under Mac OS X, including, for example, wxGTK and also wxBase, use __DARWIN__"
