---
title: "Re: ウェブサイトとソフトウェアの翻訳"
date: 2010-10-04T19:21:01.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=151.msg15360#msg15360"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「ウェブサイトとソフトウェアの翻訳」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/484/"
threadId: "bt-website-and-software-translations"
threadTitle: "Website and software translations"
threadPosition: 4
translationStatus: complete
---

[Quote from: eurekafag on October 04, 2010, 10:55:56 AM](https://bitcointalk.org/index.php?topic=151.msg15248#msg15248)翻訳を最新の状態に保つための最新の英語版.poファイルはどこにありますか？
poeditで行えます。リリースからsrcディレクトリを取得するか、SVNでダウンロードしてください。srcディレクトリの3階層下に.poファイルを配置します。poeditで開いてCatalog->Update from sourcesを実行します。

例えば、以下のようになります：
src
src\base58.h
src\bignum.h
...
src\util.cpp
src\util.h
src\xpm
src\localeu\LC_MESSAGES\bitcoin.po

bitcoin.poをpoeditで開いて、Catalog->Update from sourcesを実行します。bitcoin.poがある場所から3階層上（..\..\..\）のソースコードを探します。

これにより、すでに作業済みの既存の.poファイルが更新され、新しい文字列が追加されます。近い文字列のマッチを試みることがあるので、確認して誤った推測がないかチェックしてください。

私がSVNにアップロードした、またはリリースに含まれる.poファイルを使用してください。少なくとも数箇所は常に修正を加えているためです。ロシア語のファイルをこのメッセージに添付しています。
