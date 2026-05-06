---
title: "Re: 転送: bitcoin.sourceforge.net"
date: 2009-10-29T02:05:30Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "サトシがクロスプラットフォーム互換性のためCriticalSectionコードのwxCriticalSectionへの変換を計画し、Linuxビルドに着手する時期であることに同意する。"
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

<!-- speaker: Satoshi Nakamoto -->
CriticalSectionのコードをwxCriticalSectionに変換してSVNにアップロードするよ（少しトリッキーだけど）。TryEnterCriticalSectionをどうするかはまだわからない。もうすぐすべてチェックインできる状態になると思う。

君の言う通り、そろそろLinuxビルドをやる時期だろうね。Linux環境のセットアップと依存関係のビルドに取り組んでいるところだ。

<!-- speaker: Martti Malmi -->
> はい。WindowsのスレッドとソケットライブラリのインクルードをそれらのPOSIX版に
> 置き換えたところ、エラーが少しだけ出るようになりました。主にCriticalSectionから
> のエラーです。動作するようにできたら、svn/branchesに入れます。公式リリースで
> ある必要はまだありません。
