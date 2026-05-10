---
title: "「[bitcoin-list] Bitcoin 0.3.18 is released」— サトシが v0.3.18 リリースを告知（2010-12）"
date: 2010-12-08T23:11:55.000Z
type: "mailing-list"
source: "bitcoin-list"
sourceUrl: "https://sourceforge.net/p/bitcoin/mailman/message/26722835/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトによる Bitcoin 0.3.18 のリリース告知。wallet.dat の互換性修正とアカウントベースの JSON-RPC コマンドの追加。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/33/"
relatedEntries:
  - sourceforge/2010-12-08-bitcoin-v0318-released
translationStatus: complete
---

<!-- speaker: Satoshi Nakamoto -->
バージョン 0.3.18 が公開された。

変更点：
- 0.3.17 からダウングレードした後に再びアップグレードした場合の wallet.dat の互換性問題を修正
- ブロックに既知のトランザクション種類のみを含めるための IsStandard()チェック
- 初回ブロックダウンロードを少し高速化する Jgarzik の最適化

今回のリリースの主な追加機能は、Gavin が開発を進めてきたアカウントベースの JSON-RPC コマンドだ（詳細は http://www.bitcoin.org/smf/index.php?topic=1886.0 を参照）。
- getaccountaddress
- sendfrom
- move
- getbalance
- listtransactions

ダウンロード：<br>
http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.18/
