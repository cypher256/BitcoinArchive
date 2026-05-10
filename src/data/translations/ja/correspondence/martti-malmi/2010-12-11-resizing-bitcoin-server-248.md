---
title: "Bitcoin サーバーのリサイズ"
date: 2010-12-11T18:36:32Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "2024 年 2 月、COPA 対ライト裁判の証言の一環として GitHub で公開"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "マルミが bitcoin.org のメモリー不足エラーによる mysqld の停止を報告し、サーバーの RAM を 512MB から 1024MB に増設した経緯を説明。"
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

<!-- speaker: Martti Malmi -->
Bitcoin.org が今日もしばらくダウンしていました。ping には応答しましたが、ssh や http には応答しませんでした。再起動してメモリー不足エラーが原因で mysqld が kill されたことが判明しました。前回も同じエラーでしたが、その時は apache が kill されていました。他に良い方法が思いつかなかったので、サーバーのメモリーを 512MB から 1024MB に増設しました。
