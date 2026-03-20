---
title: "CAboutDialogにおけるUTF-8からANSIへのハック"
date: 2010-02-04T19:33:26Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "サトシがwxWidgetsの著作権記号に関するAboutダイアログのUTF-8からANSIへの変換ハックのコード変更についてマルミに質問。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadPosition: 146
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
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

wxFormBuilderは(c)記号を自動的にUTF-8に変換する。wxWidgets-2.8.9のANSI版では、著作権記号に余分なゴミ文字が付いて表示される。このハックは非Unicode（ANSI）の場合にそれを修正するものだ。

*出典：COPA対ライト裁判の証言の一環として、2024年2月にマルッティ・マルミによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
