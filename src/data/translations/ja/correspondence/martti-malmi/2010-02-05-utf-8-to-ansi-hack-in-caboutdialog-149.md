---
title: "Re: CAboutDialogにおけるUTF-8からANSIへのハック"
date: 2010-02-05T07:16:23Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "マルミがAboutダイアログのUTF-8エンコーディング変更は意図的ではなく、エンコーディングの問題が原因だったと回答。"
isSatoshi: false
threadId: "satoshi-martti-malmi"
threadPosition: 149
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

<!-- speaker: Martti Malmi -->
意図的に変更したわけではないです。エンコーディングの問題だったのでしょう。

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
> wxFormBuilderは(c)記号を自動的にUTF-8に変換する。wxWidgets-2.8.9の
> ANSI版では、著作権記号に余分なゴミ文字が付いて表示される。このハック
> は非Unicode（ANSI）の場合にそれを修正するものだ。

<!-- speaker: Martti Malmi -->
*出典：COPA対ライト裁判の証言の一環として、2024年2月にマルッティ・マルミによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
