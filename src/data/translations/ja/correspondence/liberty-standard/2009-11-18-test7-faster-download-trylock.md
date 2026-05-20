---
title: "Re: linux-0.1.6-test7 ( ダウンロードが大幅高速化、 TryLock で 1 回クラッシュ )"
date: 2009-11-18T03:00:00Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "Satoshi と Martti Malmi の往復メール内に引用返信として保存。 2024 年 2 月、 COPA 対 Wright 訴訟での Malmi の証言として GitHub で公開。 元メッセージの正確な送信時刻は記録されていない。 上記の時刻は 11 月 18 日 04:35 UTC の Satoshi 返信から逆算した目安。"
author: "Liberty Standard"
participants:
  - name: "Liberty Standard"
    slug: "newlibertystandard"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Liberty Standard が test7 でブロック取得が数分から約 15 秒に短縮と報告。 TryLock アサーションで 1 回クラッシュ、 セグメンテーション違反は未発生。"
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

test7 を、 新しいデータディレクトリで開始しました。 ブロックのダウンロードが格段に速く始まりました。 これまでの Linux ビルドでは数分かかっていましたが、 今回は約 15 秒で済みました。 ブロックをダウンロードしている間に 1 回クラッシュし、 ターミナルに以下のメッセージが出ました。

../include/wx/thrimpl.cpp(50): assert "m_internal" failed in TryLock(): wxMutex::TryLock(): not initialized [in child thread]
Trace/breakpoint trap

ログファイルを添付しますが、 ビットコイン再起動の前にバックアップを取り忘れたので、 ログのどの時点でクラッシュが起きたかは分かりません。

幸いセグメンテーション違反にはまだ遭遇していません。 直前までのビルドでセグメンテーション違反の頻度には大きなばらつきがありましたので、 引き続き動かして、 問題があれば知らせます。
