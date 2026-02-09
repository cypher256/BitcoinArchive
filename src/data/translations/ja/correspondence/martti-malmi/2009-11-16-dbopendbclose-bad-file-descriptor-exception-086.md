---
title: "返信: Db::open/Db::close \"Bad file descriptor\" 例外"
date: 2009-11-16T06:20:52Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "回避策のアイデアがありますが、エラーがどのファイルで発生しているかによります。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 86
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

回避策のアイデアがありますが、エラーがどのファイルで発生しているかによります。db.logにエラーがいくつか蓄積されているなら、送ってもらえますか？（たとえ非常にシンプルで退屈な内容でも）記録されているファイルは常にblkindex.datですか、それともaddr.datやwallet.datも含まれますか？

Liberty Standard の書き込み：
> データディレクトリをSSDカードに戻して、bitcoin test 6を開始しました。今日、ログにDb::openのセグメンテーションフォルトが発生しました。720pのmkv動画を見ている間、プロセッサ/コアを1つだけ使用する設定に変更していました。映画が終わった後にセグメンテーションフォルトに気づきました。
>
> 2009年11月15日(日) 午前12:45、Satoshi Nakamoto <satoshin@gmx.com
> <mailto:satoshin@gmx.com>> の書き込み：
>
>     Berkeley DBを別の方法でリンクしたバージョンです。試してみる価値はあります。
>     それ以外はtest5と同一です。
>
>     （同じ方法で失敗するまでは、少なくともdatadirはハードドライブに置いて
>     おいてください。成功する可能性はそれなりにあります。）
>
>

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
