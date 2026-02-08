---
title: "Re: BitcoinをGTKに変換：賛成？反対？wxの方が良い？"
date: 2010-08-19T18:44:36.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=867.msg10272#msg10272"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「BitcoinをGTKに変換：賛成？反対？wxの方が良い？」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/400/"
translationStatus: complete
---

[Quote from: BioMike on August 19, 2010, 08:05:18 AM](https://bitcointalk.org/index.php?topic=867.msg10226#msg10226)wxWidgets自体は問題ではありません。問題は使用されているバージョン（2.9）で、多くのディストロのパッケージ管理者が不安定と見なしています（wxWidgetsの開発者はそうではないと言っていますが）。一方、私の知る限り、wxWidgetsはLinux上ではgtkを使ってすべてを描画しており、Bitcoin開発者がクロスプラットフォーム対応を容易にしています。
wxWidgets 2.9は彼らの最初のUTF-8バージョンです。我々はWindows含むすべてのプラットフォームでUTF-8を使用しています。

ディストロの2.8パッケージはUTF-16であるため、人々をつまずかせるだけです。2.9に標準化するまで、2.8とそのwxString UTF-16/ANSI条件付きビルドオプションで終わりのないビルド問題がありました。また、2.8を使うためにANSIを使用していましたが、これはwxWidgetsがUTF-8をサポートするまでの一時的な応急措置に過ぎませんでした。

これは自然に解決する問題です。時間が経てば、2.9はより主流のリリースになるでしょう。
