---
title: "Re: BitcoinをGTKに変換：賛成？反対？wxの方が良い？"
date: 2010-08-19T18:44:36.000Z
type: "forum-post"
source: "bitcointalk"
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

[Quote from: BioMike on August 19, 2010, 08:05:18 AM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-867/2010-08-19-biomike-msg10226/)
> WxWidgetsは実際には問題ではない。問題は使用されているバージョン（2.9）で、多くのディストリビューションパッケージャーは不安定だと見なしている（WxWidgetsの開発者はそうではないと言っているが）。一方で、私の知る限りWxWidgetsはLinuxではgtkを使って描画しており、Bitcoin開発者にとってクロスプラットフォーム対応を容易にしている。

wxWidgets 2.9は彼らの最初のUTF-8バージョンだ。我々はWindows含むすべてのプラットフォームでUTF-8を使用している。

ディストロの2.8パッケージはUTF-16であるため、人々をつまずかせるだけだ。2.9に標準化するまで、2.8とそのwxString UTF-16/ANSI条件付きビルドオプションで終わりのないビルド問題があった。また、2.8を使うためにANSIを使用していたが、これはwxWidgetsがUTF-8をサポートするまでの一時的な応急措置に過ぎなかった。

これは自然に解決する問題だ。時間が経てば、2.9はより主流のリリースになるだろう。
