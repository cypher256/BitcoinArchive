---
title: "Re: Db::open/Db::close \"Bad file descriptor\" exception ( test6 で segfault )"
date: 2009-11-16T05:00:00Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "Satoshi と Martti Malmi の往復メール内に引用返信として保存。 2024 年 2 月、 COPA 対 Wright 訴訟での Malmi の証言として GitHub で公開。 元メッセージの正確な送信時刻は記録されていない。 上記の時刻は 11 月 16 日 06:20 UTC の Satoshi 返信から逆算した目安。"
author: "Liberty Standard"
participants:
  - name: "Liberty Standard"
    slug: "newlibertystandard"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Liberty Standard が SSD カードに戻して test 6 を起動した時にセグメンテーション違反が発生したと報告。 動画視聴中は 1 コア設定だった。"
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

データディレクトリを SSD カードに戻して、 bitcoin test 6 を起動した。 今日、 ログに Db::open が出るかたちでセグメンテーション違反が発生した。 720p mkv 動画を見ている間、 設定をプロセッサー / コア 1 つだけ使うように変えていた。 セグメンテーション違反には、 映画が終わってから気付いた。
