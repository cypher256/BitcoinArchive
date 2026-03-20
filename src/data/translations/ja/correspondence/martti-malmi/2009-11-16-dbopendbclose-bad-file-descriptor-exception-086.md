---
title: "Re: Db::open/Db::close \"Bad file descriptor\" 例外"
date: 2009-11-16T06:20:52Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "サトシがBerkeley DBの「Bad file descriptor」例外に対する回避策のアイデアを持っており、エラーが発生しているデータベースファイルの特定をLiberty Standardに依頼。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
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

<!-- speaker: Satoshi Nakamoto -->

回避策のアイデアがあるが、エラーがどのファイルで発生しているかによる。db.logにエラーがいくつか蓄積されているなら、送ってもらえるか？（たとえ非常にシンプルで退屈な内容でも）記録されているファイルは常にblkindex.datか、それともaddr.datやwallet.datも含まれるか？

<!-- speaker: Liberty Standard -->

Liberty Standard の書き込み：
> データディレクトリをSSDカードに戻して、bitcoin test 6を開始しました。今日、ログにDb::openのセグメンテーションフォルトが発生しました。720pのmkv動画を見ている間、プロセッサ/コアを1つだけ使用する設定に変更していました。映画が終わった後にセグメンテーションフォルトに気づきました。
>
> 2009年11月15日(日) 午前12:45、Satoshi Nakamoto <satoshin@gmx.com
> <mailto:satoshin@gmx.com>> の書き込み：
>
>     Berkeley DBを別の方法でリンクしたバージョンだ。試してみる価値はある。
>     それ以外はtest5と同一だ。
>
>     （同じ方法で失敗するまでは、少なくともdatadirはハードドライブに置いて
>     おいてくれ。成功する可能性はそれなりにある。）
>
>

*出典：COPA対ライト裁判の証言の一環として、2024年2月にマルッティ・マルミによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
