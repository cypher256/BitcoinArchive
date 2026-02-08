---
title: "Re: UIの改善"
date: 2010-02-23T01:16:28.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=60.msg434#msg434"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「UIの改善」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/68/"
threadId: "bt-ui-improvements"
threadTitle: "UI improvements"
threadPosition: 2
translationStatus: complete
---

アドレス帳に「送信」と「受信」のタブができました。あなたのアドレスは「受信アドレス」と呼ばれます。

madhatterがMacでのビルドに取り組んでいました。UTF-16のwxWidgets 2.8が原因と思われるエラーが出ていました。2.9.0では改善されるはずです。wxWidgets 2.9.0はUTF-8なので、その問題は起きないでしょう。

FreeBSDでは動作していたと思いますが、非UIバージョンを希望していました。

コマンドラインとJSON-RPCのデーモン版が動作するようになりました。1〜2日中にSVNにコミットします。

UbuntuシステムでGDMを無効にしてコマンドラインで起動するようにしました。rcconfで再度有効にできることを願っています。
