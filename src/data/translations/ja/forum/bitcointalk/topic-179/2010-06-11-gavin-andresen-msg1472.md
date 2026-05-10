---
title: "Re: 技術的な説明"
date: 2010-06-11T01:34:11.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=179.msg1472#msg1472"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalk トピック 179 におけるギャビン・アンドレセンの文脈投稿。msg1588 の前。"
isSatoshi: false
tags: []
translationStatus: complete
quotes:
  - id: "q1"
    person: "nixoid"
    personSlug: "nixoid"
    date: "2010-06-10T11:38:13.000Z"
    sourceEntryId: "forum/bitcointalk/topic-179/2010-06-10-nixoid-msg1461"
---

答えられるものに答えてみよう：

<!-- quote: q1 -->
<!-- tone-skip -->
> みなさん、こんにちは。分散型通貨に興味があり、このプロジェクトの開発に参加するか、自分のバージョンを開発するかのどちらかを考えている。決断する前に、ドキュメントからは明確でないいくつかの技術的な点を確認したい。部分的には英語が母国語ではないからでもあるが。
<!-- /tone-skip -->

ノードを実行するか、誰か（MyBitcoin.com のような）を信頼してウォレットを預けるかのどちらかだ。

口座残高は wallet.dat という Berkeley DB ファイルに保存される（どのディレクトリかは OS による。Mac では~/Library/Application Support/Bitcoin/wallet.dat、Linux では~/.bitcoin/wallet.dat、PC については不明）。

wallet.dat を読めるアプリケーションは bitcoin のコードだけで、データベース構造は bitcoin の C++ソースコード以外にはどこにもドキュメント化されていない。
理論的にはいいえだが、軽量な検証を行うコードはまだ書かれていない。
サトシはウォレットデータベースの暗号化を計画しているので、読むためにはパスワードを入力する必要がある。（トランザクションを生成するためには秘密鍵が必要で、それが wallet.dat に保存されているものだ）
分からない。
このフォーラムにこれについての別のスレッドがある。「サトシの TODO リスト」スレッドを始めて、人々にボランティアを呼びかけてはどうか。
今後 N 年間（N は何年だ、20？）にわたって生成されるコインはますます少なくなる。これはバグではなく機能だ…

自分のバージョンの開発について：既存の C++実装と互換性のある 2番目の bitcoin 実装を作ることを考えているのか（俺の意見では良いアイデア）？ それとも似ているが同じではないシステムを作ることか（俺の意見では悪いアイデア）？
