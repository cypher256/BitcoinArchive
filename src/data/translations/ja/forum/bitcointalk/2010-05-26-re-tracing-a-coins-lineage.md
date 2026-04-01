---
title: "Re: コインの系譜を追跡する"
date: 2010-05-26T18:51:04.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=154.msg1254#msg1254"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「コインの系譜を追跡する」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/108/"
translationStatus: complete
---

> [Quote from: Xunie on May 26, 2010, 12:50:04 AM](/BitcoinArchive/ja/entries/forum/bitcointalk/2010-05-26-xunie-msg1242/)
> ユーザーに支払い受取時に新しいアドレスの使用を強制することはできませんか？
支払いを受け取るたびに、アドレスバーに別のビットコインアドレスを表示する。（もちろんビットコインアドレス経由のトランザクションのみで、IPではない。IPでは意味がないからだ）
実際のキーは保持され、同じアドレスに送金する人からの支払いもユーザーが引き続き受け取れるようにする。
これは私のリストに入っている。近いうちに「あなたのビットコインアドレス:」ウィンドウが、表示されているアドレスに何かを受信するたびに自動的に変更されるようにする。

ウェブアプリの実装にもこのアプローチを推奨している。このやり方を提案するサンプルコードを先ほど投稿した。

0.2.4以降のSVNバージョンでは、手動での変更を促すために、アドレスバーの横に「新規...」ボタンがすでに追加されている。

@theymos: 他に方法がなければ、将来その解決策に頼ることができる。
