---
title: "[bitcoin-list] Bitcoin 0.3.18リリース"
date: 2010-12-08T23:09:45Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Bitcoin バージョン0.3.18のリリースアナウンス。アカウントベースのJSON-RPCコマンドを含む"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 247
tags:
  - "correspondence"
  - "early-contributor"
  - "release"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

バージョン0.3.18が利用可能になりました。

変更点：
- 0.3.17からダウングレードして再度アップグレードした場合のwallet.dat互換性の問題を修正
- ブロックに既知のトランザクションタイプのみを含めるIsStandard()チェックを追加
- Jgarzikによる初期ブロックダウンロードを若干高速化する最適化

今回のリリースの主な追加機能は、Gavinが開発してきたアカウントベースのJSON-RPCコマンドです（詳細は http://www.bitcoin.org/smf/index.php?topic=1886.0 を参照）。
- getaccountaddress
- sendfrom
- move
- getbalance
- listtransactions

ダウンロード：
http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.18/




------------------------------------------------------------------------------
This SF Dev2Dev email is sponsored by:

WikiLeaks The End of the Free Internet
http://p.sf.net/sfu/therealnews-com
_______________________________________________
bitcoin-list mailing list
bitcoin-list@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/bitcoin-list

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
