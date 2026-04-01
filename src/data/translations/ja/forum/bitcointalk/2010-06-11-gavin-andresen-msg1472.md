---
title: "Re: (context post by Gavin Andresen)"
date: 2010-06-11T01:34:11.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=179.msg1472#msg1472"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック179におけるギャビン・アンドレセンのコンテキスト投稿。msg1588の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

答えられるものに答えてみよう：

[Quote from: nixoid on June 10, 2010, 08:38:13 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/2010-06-10-nixoid-msg1461/)
> 0) ウォレットを持つためにノードを実行する必要があるのか？ 特定のノードに紐付けられるのか、それとも例えばフラッシュドライブにウォレットを保管して任意のノードで使えるのか？ 口座残高はどこにどのような形式で保存されるのか？

ノードを実行するか、誰か（MyBitcoin.comのような）を信頼してウォレットを預けるかのどちらかだ。

口座残高はwallet.datというBerkeley DBファイルに保存される（どのディレクトリかはOSによる。Macでは~/Library/Application Support/Bitcoin/wallet.dat、Linuxでは~/.bitcoin/wallet.dat、PCについては不明）。

wallet.datを読めるアプリケーションはbitcoinのコードだけで、データベース構造はbitcoinのC++ソースコード以外にはどこにもドキュメント化されていない。
理論的にはいいえだが、軽量な検証を行うコードはまだ書かれていない。
サトシはウォレットデータベースの暗号化を計画しているので、読むためにはパスワードを入力する必要がある。（トランザクションを生成するためには秘密鍵が必要で、それがwallet.datに保存されているものだ）
分からない。
このフォーラムにこれについての別のスレッドがある。「サトシのTODOリスト」スレッドを始めて、人々にボランティアを呼びかけてはどうか。
今後N年間（Nは何年だ、20？）にわたって生成されるコインはますます少なくなる。これはバグではなく機能だ…

自分のバージョンの開発について：既存のC++実装と互換性のある2番目のbitcoin実装を作ることを考えているのか（俺の意見では良いアイデア）？ それとも似ているが同じではないシステムを作ることか（俺の意見では悪いアイデア）？
