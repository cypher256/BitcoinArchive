---
title: "Re: RFC: リリースtarballにブロックチェーン1-74000を同梱する？"
date: 2010-11-28T17:13:01.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1931.msg25138#msg25138"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「RFC: リリースtarballにブロックチェーン1-74000を同梱する？」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/518/"
threadId: "bt-rfc-ship-block-chain-1-74000-with-release-tarballs"
threadTitle: "RFC: ship block chain 1-74000 with release tarballs?"
threadPosition: 3
translationStatus: complete
---

他の議論にもかかわらず、現在の次のステップは：
引用：誰かが異なるBerkeley DB設定で実験して、ダウンロードを大幅に速くするものがないか確認すべきです。大幅な改善が見つかれば、詳細を詰めることができます。
特に、読み取りキャッシュを増やすと大いに役立つのではないかと思います。

[Quote from: jgarzik on November 28, 2010, 02:33:29 AM](https://bitcointalk.org/index.php?topic=1931.msg25017#msg25017)IRCでまた新しいユーザーが、今度はLinuxで、1ブロックあたり4秒の速度でダウンロードしていました — 総ダウンロード時間の推定は約4日間。
それなら何かもっと具体的な問題がありました。通常の初回ダウンロード時間によるものではありません。より詳細がなければ診断できません。遅いダウンロードが原因だったなら、次のブロックブロードキャストでより速いソースに切り替わるはずの10〜20分後に速くなりましたか？debug.logに手がかりがあるかもしれません。インターネット接続はどのくらい速いですか？一貫して遅かったのか、ある時点で遅くなっただけですか？

引用：ジェネシスブロックからブロック74000までのハッシュがbitcoinにハードコード（コンパイル）されているので、ブロックデータベースの圧縮zipファイルを*どこからでも*自動的にダウンロードし、展開し、検証し、実行を開始できない理由はないはずです。
74000チェックポイントは保護に十分ではなく、ダウンロードがすでに74000を過ぎていれば何もしません。-checkblocksはより多くのことをしますが、依然として簡単に突破されます。zipファイルの提供者を信頼しなければなりません。

「検証する」ステップがあれば、現在の通常の初回ダウンロードと同じくらい時間がかかるでしょう。データダウンロードではなく、インデックス作成がボトルネックなのです。

[Quote from: jgarzik on November 28, 2010, 07:33:55 AM](https://bitcointalk.org/index.php?topic=1931.msg25058#msg25058)おそらくいずれブロックヘッダのみをダウンロードする軽量クライアントが登場するでしょうが、それでも数十万のヘッダがあるでしょう...
ヘッダあたり80バイトでインデックス作成作業なし。1分程度で済むかもしれません。

引用：一括データ転送用に設計されていないプロトコル（bitcoin P2P）を使用した非圧縮データ。
データの大部分はハッシュ、鍵、署名で、圧縮不可能です。

初回ダウンロードの速度は、プロトコルの一括データ転送レートを反映していません。制限要因はダウンロード中のインデックス作成です。
