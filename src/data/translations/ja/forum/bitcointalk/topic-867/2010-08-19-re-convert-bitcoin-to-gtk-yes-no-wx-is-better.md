---
title: "Re: Bitcoin を GTK に変換：賛成？反対？wx の方が良い？"
date: 2010-08-19T18:44:36.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=867.msg10272#msg10272"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「Bitcoin を GTK に変換：賛成？反対？wx の方が良い？」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/400/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "BioMike"
    personSlug: "biomike"
    date: "2010-08-18T23:05:18.000Z"
    sourceEntryId: "forum/bitcointalk/topic-867/2010-08-19-biomike-msg10226"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> WxWidgets は実際には問題ではない。問題は使用されているバージョン（2.9）で、多くのディストリビューションパッケージャーは不安定だと見なしている（WxWidgets の開発者はそうではないと言っているが）。一方で、私の知る限り WxWidgets は Linux では gtk を使って描画しており、Bitcoin 開発者にとってクロスプラットフォーム対応を容易にしている。
<!-- /tone-skip -->

wxWidgets 2.9 は彼らの最初の UTF-8 バージョンだ。我々は Windows 含むすべてのプラットフォームで UTF-8 を使用している。

ディストロの 2.8 パッケージは UTF-16 であるため、人々をつまずかせるだけだ。2.9 に標準化するまで、2.8 とその wxString UTF-16/ANSI 条件付きビルドオプションで終わりのないビルド問題があった。また、2.8 を使うために ANSI を使用していたが、これは wxWidgets が UTF-8 をサポートするまでの一時的な応急措置に過ぎなかった。

これは自然に解決する問題だ。時間が経てば、2.9 はより主流のリリースになるだろう。
