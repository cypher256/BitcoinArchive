---
title: "Re: ウェブサイトとソフトウェアの翻訳"
date: 2010-07-15T18:30:22.000Z
type: "forum-post"
source: "bitcointalk"
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
translationStatus: complete
---

<!-- tone-skip -->
[Quote from: aidos on July 15, 2010, 12:49:11 AM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-151/2010-07-15-aidos-msg3017/)
> フランス語の.poファイルを用意した。ついでに、いくつかの問題を指摘しておく：
<!-- /tone-skip -->
更新された.poファイルを提供する必要がある。

<!-- tone-skip -->
[Quote from: aidos on July 15, 2010, 12:49:11 AM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-151/2010-07-15-aidos-msg3017/)
> 2. メインウィンドウのトランザクションリストで、トランザクションの説明に発音区別符号（「éàèç」など）が含まれていると表示されない。どこかで文字列がUTF8として適切に処理されていないのだと思う。

<!-- /tone-skip -->
はい、これはどこかに問題があるはずだ。確認する必要があるし、他の開発者にも見てもらえる。

<!-- tone-skip -->
[Quote from: aidos on July 15, 2010, 12:49:11 AM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-151/2010-07-15-aidos-msg3017/)
> 4. .poファイルについて：

   - .poファイル内に翻訳が不要な文字列がいくつかある（例：「Bitcoin」）。これらは _("...") の中に入れるべきではないのでは？
   - 分割すべきでない文字列がある。トランザクション手数料に関するメッセージで、%sを使えばいいところを手数料の値を挿入するために文字列が2つに分割されていた。何が起きているのか正確に理解するためにソースコードを確認する必要があり、翻訳が難しくなる。
   - 一部の文字列の先頭や末尾に空白があり、その必要性は非常に疑わしく、PoEditで見落としやすい。
<!-- /tone-skip -->
これらの文字列の多くは、uiproject.fbpから自動生成されたコード内にあり、これらの問題について何もできない。文字列の先頭と末尾の空白の不一致をすべて見つけるプログラムを使って、SVNにアップロードする前に手動で修正している。
