---
title: "Re: RFC: リリース tarball にブロックチェーン 1-74000 を同梱する？"
date: 2010-11-28T17:13:01.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1931.msg25138#msg25138"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「RFC: リリース tarball にブロックチェーン 1-74000 を同梱する？」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/518/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Jeff Garzik"
    personSlug: "jeff-garzik"
    date: "2010-11-27T17:33:29.000Z"
    sourceEntryId: "forum/bitcointalk/topic-1931/2010-11-28-jgarzik-msg25017"
  - id: "q2"
    person: "Jeff Garzik"
    personSlug: "jeff-garzik"
    date: "2010-11-27T22:33:55.000Z"
    sourceEntryId: "forum/bitcointalk/topic-1931/2010-11-28-jgarzik-msg25058"
---

他の議論にもかかわらず、現在の次のステップは：
<!-- tone-skip -->
> 誰かが異なるBerkeley DB設定で実験して、ダウンロードを大幅に速くするものがないか確認すべきです。大幅な改善が見つかれば、詳細を詰めることができます。
<!-- /tone-skip -->

特に、読み取りキャッシュを増やすと大いに役立つのではないかと思う。

<!-- quote: q1 -->
<!-- tone-skip -->
> IRC の別の新規ユーザー（今回は Linux）が、1 ブロックあたり 4秒の速度でダウンロードしていた——推定合計ダウンロード時間は約 4日間。
<!-- /tone-skip -->

それなら何かもっと具体的な問題があった。通常の初回ダウンロード時間によるものではない。より詳細がなければ診断できない。遅いダウンロードが原因だったなら、次のブロックブロードキャストでより速いソースに切り替わるはずの 10〜20分後に速くなったか？debug.log に手がかりがあるかもしれない。インターネット接続はどのくらい速いか？一貫して遅かったのか、ある時点で遅くなっただけか？

<!-- tone-skip -->
> Genesis ブロックからブロック 74000 までのハッシュが Bitcoin にハードコード（コンパイル）されているので、ブロックデータベースの圧縮 zip ファイルを*どこからでも*自動的にダウンロードし、展開し、検証し、実行を開始できない理由はない。
<!-- /tone-skip -->

74000 チェックポイントは保護に十分ではなく、ダウンロードがすでに 74000 を過ぎていれば何もしない。-checkblocks はより多くのことをするが、依然として簡単に突破される。zip ファイルの提供者を信頼しなければならない。

「検証する」ステップがあれば、現在の通常の初回ダウンロードと同じくらい時間がかかるだろう。データダウンロードではなく、インデックス作成がボトルネックなのだ。

<!-- quote: q2 -->
<!-- tone-skip -->
> おそらくある時点でブロックヘッダーのみをダウンロードする軽量クライアントが登場するだろうが、それでも数十万のヘッダーがある……
<!-- /tone-skip -->

ヘッダーあたり 80 バイトでインデックス作成作業なし。1分程度で済むかもしれない。

> 一括データ転送用に設計されていないプロトコル（bitcoin P2P）を使用した非圧縮データ。

データの大部分はハッシュ、鍵、署名で、圧縮不可能だ。

初回ダウンロードの速度は、プロトコルの一括データ転送レートを反映していない。制限要因はダウンロード中のインデックス作成だ。
