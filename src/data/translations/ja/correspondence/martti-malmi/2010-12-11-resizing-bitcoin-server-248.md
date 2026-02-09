---
title: "Bitcoinサーバーのリサイズ"
date: 2010-12-11T18:36:32Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Marttiがbitcoin.orgのメモリ不足による障害を報告し、サーバーのメモリを増設"
isSatoshi: false
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 248
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

Bitcoin.orgが今日もしばらくダウンしていました。pingには応答しましたが、sshやhttpには応答しませんでした。再起動してメモリ不足エラーが原因でmysqldがkillされたことが判明しました。前回も同じエラーでしたが、その時はapacheがkillされていました。他に良い方法が思いつかなかったので、サーバーのメモリを512MBから1024MBに増設しました。

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
