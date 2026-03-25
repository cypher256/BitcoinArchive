---
title: "BitcoinJのオープンソースリリースとプロトコルに関する質問"
date: 2011-03-07T14:13:00Z
type: "correspondence"
source: "plan99"
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread4.html"
author: "Mike Hearn"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "マイク・ハーンがApache 2ライセンスの下でBitcoinJをオープンソースとしてリリースしたことを発表し、merkleブランチ検証、スクリプト言語のアイデア、トランザクション置換が無効化された理由について質問する。"
isSatoshi: false
threadId: "satoshi-mike-hearn-bitcoinj"
threadPosition: 1
tags:
  - "correspondence"
  - "bitcoinj"
  - "open-source"
  - "spv"
  - "merkle-branch"
  - "script-language"
  - "transaction-replacement"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
translationStatus: complete
---

<!-- speaker: Mike Hearn -->
Satoshiさん、こんにちは。

お元気でいることを願っている。ようやくGoogleの弁護士全員を説得した。Apache 2ライセンスでBitCoinJを公開する：

http://www.bitcoin.org/smf/index.php?topic=4236.0

まだ不完全で、特にブロックチェーンの分岐を適切に処理できていないが、残りの部分は順次実装していく。ドキュメントとコメントに多くの労力を費やしたので、現在のコードを理解・ビルドできなかった新しい層にBitCoinを開放できればと思う。今後1〜2ヶ月で、完全なクライアントモード実装に必要な大きな欠落部分を仕上げる予定だ。

忙しいところ申し訳ないが、いくつか質問に答えてもらえないだろうか。

完全なSPVの実装の一環として、プロトコルにgetmerklebranchメッセージを追加することを考えている。これはトランザクションハッシュを指定すると{blockhash, branch}のペアのセットを返すもので、フルチェーンを保存せずにブロードキャストされたトランザクションをブロックに組み込まれる前に検証できるようにするものだ。このアプローチについてどう思うか？

また、最近さまざまなトランザクションタイプの探求を考えている。例えばtestnetでIsStandard()チェックを削除するなどだ。単純なコインの移動以外のトランザクションについて、あなたが事前に多くの思考を費やしたことは明らかだが、残念ながらそのいずれも論文やコード内に文書化されていない。エスクロー、マルチペイなどはいずれも興味深いが、スクリプト言語で何ができるかのアイデアリストをまとめてもらえないだろうか。

最後に、トランザクション置換を可能にするコードは無効化されているが、コメントにはその理由が書かれていない。これは単に攻撃対象領域・複雑さを減らすためだろうか、それともより深い理由があるのだろうか？シーケンス番号がトランザクション自体ではなくトランザクション入力のプロパティである理由も完全には理解できていない。

コミュニティに戻ってくるつもりはないか？これを見たかどうか分からないが：

http://bitcoin.sipa.be/speed-lin.png

ネットワークにとってエキサイティングな時期だ！

ありがとう！<br>
/mike
