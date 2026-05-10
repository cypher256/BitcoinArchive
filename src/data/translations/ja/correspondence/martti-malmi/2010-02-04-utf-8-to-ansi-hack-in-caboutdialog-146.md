---
title: "CAboutDialog における UTF-8 から ANSI へのハック"
date: 2010-02-04T19:33:26Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "2024 年 2 月、COPA 対ライト裁判の証言の一環として GitHub で公開"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "サトシが wxWidgets の著作権記号に関する About ダイアログの UTF-8 から ANSI への変換ハックのコード変更についてマルミに質問。"
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

<!-- speaker: Satoshi Nakamoto -->
この変更の理由は何だったのか？

```cpp
#if !wxUSE_UNICODE
...
     if (str.Find('Â') != wxNOT_FOUND)
         str.Remove(str.Find('Â'), 1);
```
を以下に変更:
```cpp
     if (str.Find('ï¿½') != wxNOT_FOUND)
         str.Remove(str.Find('ï¿½'), 1);
```

wxFormBuilder は(c)記号を自動的に UTF-8 に変換する。wxWidgets-2.8.9 の ANSI 版では、著作権記号に余分なゴミ文字が付いて表示される。このハックは非 Unicode（ANSI）の場合にそれを修正するものだ。
