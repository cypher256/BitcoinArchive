---
title: "返信: 転送: bitcoin.sourceforge.net"
date: 2009-10-29T02:05:30Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "CriticalSectionのコードをwxCriticalSectionに変換してSVNにアップロードするよ（少しトリッキーだけど）。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 46
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

CriticalSectionのコードをwxCriticalSectionに変換してSVNにアップロードするよ（少しトリッキーだけど）。TryEnterCriticalSectionをどうするかはまだわからない。もうすぐすべてチェックインできる状態になると思う。

君の言う通り、そろそろLinuxビルドをやる時期だろうね。Linux環境のセットアップと依存関係のビルドに取り組んでいるところだ。

> はい。WindowsのスレッドとソケットライブラリのインクルードをそれらのPOSIX版に
> 置き換えたところ、エラーが少しだけ出るようになりました。主にCriticalSectionから
> のエラーです。動作するようにできたら、svn/branchesに入れます。公式リリースで
> ある必要はまだありません。

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
