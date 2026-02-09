---
title: "返信: CAboutDialogにおけるUTF-8からANSIへのハック"
date: 2010-02-05T18:39:18Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "了解です。再び壊れないように以下のように変更します。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 152
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

了解です。再び壊れないように以下のように変更します:
     if (str.Find('\xC2') != wxNOT_FOUND)
         str.Remove(str.Find('\xC2'), 1);

mmalmi@cc.hut.fi の書き込み:
> 意図的に変更したわけではありません。エンコーディングの問題だったのでしょう。
>
>> この変更の理由は何でしたか？
>>
>> #if !wxUSE_UNICODE
>> ...
>>     if (str.Find('Â') != wxNOT_FOUND)
>>         str.Remove(str.Find('Â'), 1);
>> を以下に変更:
>>     if (str.Find('ï¿½') != wxNOT_FOUND)
>>         str.Remove(str.Find('ï¿½'), 1);
>>
>> wxFormBuilderは(c)記号を自動的にUTF-8に変換します。wxWidgets-2.8.9の
>> ANSI版では、著作権記号に余分なゴミ文字が付いて表示されます。このハック
>> は非Unicode（ANSI）の場合にそれを修正するものです。
>
>
>

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
