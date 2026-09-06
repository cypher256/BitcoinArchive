---
title: "Re: CAboutDialog における UTF-8 から ANSI へのハック"
date: 2010-02-05T07:16:23Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "2024 年 2 月、COPA 対ライト裁判の証言の一環として GitHub で公開"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "マルミが About ダイアログの UTF-8 エンコーディング変更は意図的ではなく、エンコーディングの問題が原因だったと回答。"
isSatoshi: false
tags:
  - "early-contributor"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
quotes:
  - id: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2010-02-04T19:33:26Z"
    sourceEntryId: "correspondence/martti-malmi/2010-02-04-utf-8-to-ansi-hack-in-caboutdialog-146"
translationStatus: complete
---

<!-- speaker: Martti Malmi -->
意図的に変更したわけではないです。エンコーディングの問題だったのでしょう。

<!-- quote: q1 -->
<!-- speaker: Satoshi Nakamoto -->
> この変更の理由は何だったのか？
>
> #if !wxUSE_UNICODE
> ...
>     if (str.Find('Â') != wxNOT_FOUND)
>         str.Remove(str.Find('Â'), 1);
> を以下に変更:
>     if (str.Find('ï¿½') != wxNOT_FOUND)
>         str.Remove(str.Find('ï¿½'), 1);
>
> wxFormBuilder は(c)記号を自動的に UTF-8 に変換する。wxWidgets-2.8.9 の
> ANSI 版では、著作権記号に余分なゴミ文字が付いて表示される。このハック
> は非 Unicode（ANSI）の場合にそれを修正するものだ。

<!-- speaker: Martti Malmi -->
