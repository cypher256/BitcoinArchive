---
title: "Re: UI の改善"
date: 2010-02-23T01:16:28.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=60.msg434#msg434"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「UI の改善」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/68/"
translationStatus: complete
---

アドレス帳に「送信」と「受信」のタブができた。あなたのアドレスは「受信アドレス」と呼ばれる。

madhatter が Mac でのビルドに取り組んでいた。UTF-16 の wxWidgets 2.8 が原因と思われるエラーが出ていた。2.9.0 では改善されるはずだ。wxWidgets 2.9.0 は UTF-8 なので、その問題は起きないだろう。

FreeBSD では動作していたと思うが、非 UI バージョンを希望していた。

コマンドラインと JSON-RPC のデーモン版が動作するようになった。1〜2日中に SVN にコミットする。

Ubuntu システムで GDM を無効にしてコマンドラインで起動するようにした。rcconf で再度有効にできることを願っている。
