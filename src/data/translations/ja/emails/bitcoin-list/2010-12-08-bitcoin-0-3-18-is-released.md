---
title: "[bitcoin-list] Bitcoin 0.3.18 リリース"
date: 2010-12-08T23:11:55.000Z
source: bitcoin-list
sourceUrl: "https://sourceforge.net/p/bitcoin/mailman/message/26722835/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi NakamotoによるBitcoin 0.3.18のリリース告知。wallet.datの互換性修正とアカウントベースのJSON-RPCコマンドの追加。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/33/"
translationStatus: complete
---

バージョン0.3.18が公開されました。

変更点：
- 0.3.17からダウングレードした後に再びアップグレードした場合のwallet.datの互換性問題を修正
- ブロックに既知のトランザクション種類のみを含めるためのIsStandard()チェック
- 初回ブロックダウンロードを少し高速化するJgarzikの最適化

今回のリリースの主な追加機能は、Gavinが開発を進めてきたアカウントベースのJSON-RPCコマンドです（詳細は http://www.bitcoin.org/smf/index.php?topic=1886.0 をご覧ください）。
- getaccountaddress
- sendfrom
- move
- getbalance
- listtransactions

ダウンロード：
http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.18/
