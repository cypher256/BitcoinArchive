---
title: "[bitcoin-list] Bitcoin 0.3.18リリース"
date: 2010-12-08T23:09:45Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "サトシがBitcoin 0.3.18のリリースをメーリングリストに告知。wallet.datの互換性修正とギャビンのアカウントベースJSON-RPCコマンドを搭載。"
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
  - "release"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
    note: "2024 年 2 月、COPA 対ライト裁判の証言の一環として GitHub で公開"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

<!-- speaker: Satoshi Nakamoto -->
バージョン0.3.18が利用可能になった。

変更点：
- 0.3.17からダウングレードして再度アップグレードした場合のwallet.dat互換性の問題を修正
- ブロックに既知のトランザクションタイプのみを含めるIsStandard()チェックを追加
- Jgarzikによる初期ブロックダウンロードを若干高速化する最適化

今回のリリースの主な追加機能は、Gavinが開発してきたアカウントベースのJSON-RPCコマンドだ（詳細は http://www.bitcoin.org/smf/index.php?topic=1886.0 を参照）。
- getaccountaddress
- sendfrom
- move
- getbalance
- listtransactions

ダウンロード：<br>
http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.18/




------------------------------------------------------------------------------<br>
This SF Dev2Dev email is sponsored by:<br>
<br>
WikiLeaks The End of the Free Internet<br>
http://p.sf.net/sfu/therealnews-com<br>
_______________________________________________<br>
bitcoin-list mailing list<br>
bitcoin-list@lists.sourceforge.net<br>
https://lists.sourceforge.net/lists/listinfo/bitcoin-list
