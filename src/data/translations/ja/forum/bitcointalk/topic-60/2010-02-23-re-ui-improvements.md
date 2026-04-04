---
title: "Re: UIの改善"
date: 2010-02-23T01:16:28.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=60.msg434#msg434"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「UIの改善」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/68/"
translationStatus: complete
---

アドレス帳に「送信」と「受信」のタブができた。あなたのアドレスは「受信アドレス」と呼ばれる。

madhatterがMacでのビルドに取り組んでいた。UTF-16のwxWidgets 2.8が原因と思われるエラーが出ていた。2.9.0では改善されるはずだ。wxWidgets 2.9.0はUTF-8なので、その問題は起きないだろう。

FreeBSDでは動作していたと思うが、非UIバージョンを希望していた。

コマンドラインとJSON-RPCのデーモン版が動作するようになった。1〜2日中にSVNにコミットする。

UbuntuシステムでGDMを無効にしてコマンドラインで起動するようにした。rcconfで再度有効にできることを願っている。
