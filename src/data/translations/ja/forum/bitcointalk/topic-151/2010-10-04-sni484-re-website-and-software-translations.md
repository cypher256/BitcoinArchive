---
title: "Re: ウェブサイトとソフトウェアの翻訳"
date: 2010-10-04T19:21:01.000Z
type: "forum-post"
source: "bitcointalk"
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
translationStatus: complete
quotes:
  - id: "q1"
    person: "eurekafag"
    personSlug: "eurekafag"
    date: "2010-10-04T01:55:56.000Z"
    sourceEntryId: "forum/bitcointalk/topic-151/2010-10-04-eurekafag-msg15248"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> それは嬉しい。翻訳を最新に保つための最新の英語.poファイルはどこで見つかるだろうか？
<!-- /tone-skip -->

poedit で行える。リリースから src ディレクトリを取得するか、SVN でダウンロードしてくれ。src ディレクトリの 3 階層下に.po ファイルを配置する。poedit で開いて Catalog->Update from sources を実行する。

例えば、以下のようになる：
src
src\base58.h
src\bignum.h
...
src\util.cpp
src\util.h
src\xpm
src\localeu\LC_MESSAGES\bitcoin.po

bitcoin.po を poedit で開いて、Catalog->Update from sources を実行する。bitcoin.po がある場所から 3 階層上（..\..\..\）のソースコードを探す。

これにより、すでに作業済みの既存の.po ファイルが更新され、新しい文字列が追加される。近い文字列のマッチを試みることがあるので、確認して誤った推測がないかチェックしてくれ。

私が SVN にアップロードした、またはリリースに含まれる.po ファイルを使用してくれ。少なくとも数箇所は常に修正を加えているためだ。ロシア語のファイルをこのメッセージに添付している。
