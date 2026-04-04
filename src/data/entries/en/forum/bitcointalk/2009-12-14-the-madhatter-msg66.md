---
title: "Re: A few suggestions"
date: 2009-12-14T15:01:39.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg66#msg66"
author: "The Madhatter"
participants:
  - name: "The Madhatter"
    slug: "the-madhatter"
description: "Context post by The Madhatter in BitcoinTalk topic 12. quoted by msg67."
isSatoshi: false
tags: []
---

Can anyone shed some light here?

g++ -c -O0 -Wno-invalid-offsetof -Wformat -g -D__WXMAC__ -DNOPCH -DBUILD_MACOSX -I"/usr/include" -I"/usr/local/include/wx-2.8" -I"/usr/local/include" -I"/usr/local/boost_1_41_0" -I"/sw/include/db4" -I"/usr/local/ssl/include" -I"/usr/local/lib/wx/include/mac-ansi-release-2.8" -o headers.h.gch headers.h
ui.h: In constructor 'CGetTextFromUserDialog::CGetTextFromUserDialog(wxWindow*, const std::string&, const std::string&, const std::string&, const std::string&, const std::string&)':
ui.h:421: error: no matching function for call to 'CGetTextFromUserDialogBase::CGetTextFromUserDialogBase(wxWindow*&, <anonymous enum>, const std::basic_string<char, std::char_traits<char>, std::allocator<char> >&)'
uibase.h:673: note: candidates are: CGetTextFromUserDialogBase::CGetTextFromUserDialogBase(wxWindow*, wxWindowID, const wxString&, const wxPoint&, const wxSize&, long int)
uibase.h:651: note:                 CGetTextFromUserDialogBase::CGetTextFromUserDialogBase(const CGetTextFromUserDialogBase&)
ui.h:423: error: no matching function for call to 'wxStaticText::SetLabel(const std::basic_string<char, std::char_traits<char>, std::allocator<char> >&)'
/usr/local/include/wx-2.8/wx/mac/carbon/stattext.h:38: note: candidates are: virtual void wxStaticText::SetLabel(const wxString&)
ui.h:424: error: no matching function for call to 'wxTextCtrl::SetValue(const std::basic_string<char, std::char_traits<char>, std::allocator<char> >&)'
/usr/local/include/wx-2.8/wx/textctrl.h:303: note: candidates are: virtual void wxTextCtrlBase::SetValue(const wxString&)
ui.h:428: error: no matching function for call to 'wxStaticText::SetLabel(const std::basic_string<char, std::char_traits<char>, std::allocator<char> >&)'
/usr/local/include/wx-2.8/wx/mac/carbon/stattext.h:38: note: candidates are: virtual void wxStaticText::SetLabel(const wxString&)
ui.h:430: error: no matching function for call to 'wxTextCtrl::SetValue(const std::basic_string<char, std::char_traits<char>, std::allocator<char> >&)'
/usr/local/include/wx-2.8/wx/textctrl.h:303: note: candidates are: virtual void wxTextCtrlBase::SetValue(const wxString&)
make: *** [headers.h.gch] Error 1
