---
title: "BitcoinJのオープンソースリリースとプロトコルに関する質問"
date: 2011-03-07T14:13:00Z
source: correspondence
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread4.html"
author: "Mike Hearn"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Mike HearnがApache 2ライセンスの下でBitcoinJをオープンソースとしてリリースしたことを発表し、merkleブランチ検証、スクリプト言語のアイデア、トランザクション置換が無効化された理由について質問する。"
isSatoshi: false
threadId: "satoshi-mike-hearn-bitcoinj"
threadTitle: "Open sourced my Java SPV impl"
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

Satoshiさん、こんにちは。

お元気でいらっしゃることを願っています。ようやくすべての弁護士を説得し、GoogleのもとでApache 2ライセンスを使用してBitCoinJをリリースすることができました：

http://www.bitcoin.org/smf/index.php?topic=4236.0

まだ不完全で、特にブロックチェーンの分岐を適切に処理できていませんが、残りの部分は順次実装していきます。ドキュメントとコメントに多くの労力を費やしたので、現在のコードを理解・ビルドできなかった新しい層にBitCoinを開放できればと思います。今後1〜2ヶ月で、完全なクライアントモード実装に必要な大きな欠落部分を仕上げる予定です。

お忙しいところ恐れ入りますが、いくつか質問にお時間をいただければ幸いです。

完全なSPVの実装の一環として、プロトコルにgetmerklebranchメッセージを追加することを考えています。これはトランザクションハッシュを指定すると{blockhash, branch}のペアのセットを返すもので、フルチェーンを保存せずにブロードキャストされたトランザクションをブロックに組み込まれる前に検証できるようにするものです。このアプローチについてどう思われますか？

また、最近さまざまなトランザクションタイプの探求を考えています。例えばtestnetでIsStandard()チェックを削除するなどです。単純なコインの移動以外のトランザクションについて、あなたが事前に多くの思考を費やしたことは明らかですが、残念ながらそのいずれも論文やコード内に文書化されていません。エスクロー、マルチペイなどはいずれも興味深いですが、スクリプト言語で何ができるかのアイデアリストをまとめていただけないでしょうか。

最後に、トランザクション置換を可能にするコードは無効化されていますが、コメントにはその理由が書かれていません。これは単に攻撃対象領域・複雑さを減らすためでしょうか、それともより深い理由があるのでしょうか？シーケンス番号がトランザクション自体ではなくトランザクション入力のプロパティである理由も完全には理解できていません。

早くコミュニティに戻ってきていただけることを願っています！これをご覧になったかどうか分かりませんが：

http://bitcoin.sipa.be/speed-lin.png

ネットワークにとってエキサイティングな時期です！

ありがとうございます！
/mike
