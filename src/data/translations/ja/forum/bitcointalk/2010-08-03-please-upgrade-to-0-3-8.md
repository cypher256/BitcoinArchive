---
title: "0.3.8にアップグレードしてください！"
date: 2010-08-03T23:40:18.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=696.msg7364#msg7364"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoが重要なセキュリティ改善を含むバージョン0.3.8へのアップグレードを呼びかけ、問題検出時の警告メッセージ機能を説明。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/313/"
threadId: "bt-please-upgrade-to-0-3-8"
threadTitle: "Please upgrade to 0.3.8!"
threadPosition: 1
translationStatus: complete
---

バージョン0.3.8は重要なセキュリティの改善を追加しています。この変更を取得するために、全員がアップグレードすべきです。

新しい安全機能は、アップグレードが必要な問題を検出した場合、ステータスバーに警告メッセージを表示し、RPCをロックダウンします。

より長いチェーンを見つけたが処理できない場合、何かが間違っていることがわかります。「警告：表示されているトランザクションが正しくない可能性があります！ アップグレードが必要かもしれません。」と表示し、ほとんどのRPCコマンドがエラーを返すようにします。ネットワークの安定性のために必要なので、生成は通常通り続けます。

これ以前のバージョンにも重要なセキュリティアップデートがありましたので、最近アップグレードしていない場合は、今すぐアップグレードすることが極めて重要です！

また、tcatmのmidstateキャッシュ最適化とBlackEyeのASM SHA-256動作の協力により、最近2.4倍の生成高速化を追加したことをお忘れなく。

ダウンロード：
[http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.8/](http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.8/)
