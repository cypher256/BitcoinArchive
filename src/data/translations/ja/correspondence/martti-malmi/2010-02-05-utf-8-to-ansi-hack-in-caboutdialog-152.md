---
title: "Re: CAboutDialogにおけるUTF-8からANSIへのハック"
date: 2010-02-05T18:39:18Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "サトシがAboutダイアログの著作権記号のUTF-8ハックを16進エスケープシーケンスに変更し、今後のエンコーディング破損を防止する修正を提案。"
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "mmalmi@cc.hut.fi"
    personSlug: "martti-malmi"
---

<!-- speaker: Satoshi Nakamoto -->

了解した。再び壊れないように以下のように変更する:
```cpp
     if (str.Find('\xC2') != wxNOT_FOUND)
         str.Remove(str.Find('\xC2'), 1);
```

<!-- speaker: Martti Malmi -->

<!-- quote: q1 -->
<!-- tone-skip -->
> 意図的に変更したわけではありません。エンコーディングの問題だったのでしょう。
>
<!-- /tone-skip -->
<!-- speaker: Satoshi Nakamoto -->
>> この変更の理由は何だったのか？
>>
>> #if !wxUSE_UNICODE
>> ...
>>     if (str.Find('Â') != wxNOT_FOUND)
>>         str.Remove(str.Find('Â'), 1);
>> を以下に変更:
>>     if (str.Find('ï¿½') != wxNOT_FOUND)
>>         str.Remove(str.Find('ï¿½'), 1);
>>
>> wxFormBuilderは(c)記号を自動的にUTF-8に変換する。wxWidgets-2.8.9の
>> ANSI版では、著作権記号に余分なゴミ文字が付いて表示される。このハック
>> は非Unicode（ANSI）の場合にそれを修正するものだ。
>
>
>
