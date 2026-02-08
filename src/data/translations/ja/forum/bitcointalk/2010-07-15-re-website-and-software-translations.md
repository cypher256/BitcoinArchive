---
title: "Re: ウェブサイトとソフトウェアの翻訳"
date: 2010-07-15T18:30:22.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=151.msg3238#msg3238"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「ウェブサイトとソフトウェアの翻訳」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/196/"
threadId: "bt-website-and-software-translations"
threadTitle: "Website and software translations"
threadPosition: 1
translationStatus: complete
---

[Quote from: aidos on July 15, 2010, 12:49:11 AM](https://bitcointalk.org/index.php?topic=151.msg3017#msg3017)フランス語の.poファイルがこちらです。ついでに、いくつかの問題に気づきました:

1. 「About」ボックスは翻訳が反映されておらず、ソフトウェアの他の部分は翻訳された文字列を使用しており、.poファイルにも「About」ボックスのメッセージの翻訳文字列が含まれているにもかかわらず、英語版が表示されたままです。設定ウィンドウの「Apply」ボタンも同様の問題があります。
更新された.poファイルを提供する必要があります。

[Quote from: aidos on July 15, 2010, 12:49:11 AM](https://bitcointalk.org/index.php?topic=151.msg3017#msg3017)2. メインウィンドウの取引一覧にある取引の説明にダイアクリティカル文字（「éàèç」など）が含まれている場合、表示されません。おそらくどこかで文字列がUTF8として正しく処理されていないのだと思います。
はい、これはどこかに問題があるはずです。確認する必要がありますし、他の開発者にも見てもらえます。

[Quote from: aidos on July 15, 2010, 12:49:11 AM](https://bitcointalk.org/index.php?topic=151.msg3017#msg3017)4. .poファイルについて:
   - .poファイルの中に翻訳不要な文字列がいくつかあります（例: "Bitcoin"）。これらは _("...") の中に入れるべきではないのでは？
   - 分割すべきでない文字列もあります。取引手数料に関するメッセージで、手数料の値を挿入するために文字列が二つに分割されていたのを覚えていますが、単に%sを使えばよかったはずです。ソースを確認して何が起きているのか調べる必要があったため、翻訳が難しくなっています。
   - 末尾や先頭に空白がある文字列があり、その必要性は非常に疑わしく、PoEditでは見落としやすいです。
これらの文字列の多くは、uiproject.fbpから自動生成されたコード内にあり、これらの問題について何もできません。文字列の先頭と末尾の空白の不一致をすべて見つけるプログラムを使って、SVNにアップロードする前に手動で修正しています。
