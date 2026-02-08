---
title: "バージョン0.3.11 アップグレードアラート付き"
date: 2010-08-27T21:54:12.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=941.msg11439#msg11439"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿：「バージョン0.3.11 アップグレードアラート付き」。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/429/"
threadId: "bt-version-0-3-11-with-upgrade-alerts"
threadTitle: "Version 0.3.11 with upgrade alerts"
threadPosition: 1
translationStatus: complete
---

バージョン0.3.11が利用可能になりました。

変更点：
- ロード時のblk*.datの検証
- -4wayコードを-march=amdfam10でビルドし、少し高速化
- 時計がずれすぎている場合の警告
- 警告/エラー/アラートがgetinfoコマンドでも確認可能
- アラートシステム

アラートシステムは、重要なセキュリティアップデートのためにアップグレードが必要なバージョンを実行している場合、ステータスバーに通知を表示してアラートできます。

アラートに応答して、ノードはセーフモードに入ることもあり、以下のjson-rpcコマンド（自動化されたウェブサイトで使用）を無効にして、アップグレードの機会が得られるまで資金の損失から保護します：
 sendtoaddress
 getbalance
 getreceivedbyaddress
 getreceivedbylabel
 listreceivedbyaddress
 listreceivedbylabel

誤報だと判断してリスクを取りたい場合は、-disablesafemodeスイッチを使って再有効化できます。

これは重要な安全性の改善です。可能な問題の大部分について、問題が発見されたらすぐに全員に警告し、不正な情報に基づいて行動するのを防ぐことができます。

ノードはアラートに応答して稼働を継続し生成を停止しないため、旧バージョンがフォークを作ろうとするかもしれませんが、アラートシステムはユーザーがフォーク内の何かに基づいて行動しないよう警告できます。

ダウンロード：
[http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.11/](http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.11/)
