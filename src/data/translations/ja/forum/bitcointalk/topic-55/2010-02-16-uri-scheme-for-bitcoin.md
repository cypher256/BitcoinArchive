---
title: "Bitcoin用URIスキーム"
date: 2010-02-16T11:51:42.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=55.msg377#msg377"
author: "ec"
participants:
  - name: "ec"
    slug: "ec"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "ecがスレッドを開始: Bitcoin用URIスキーム"
isSatoshi: false
tags: []
translationStatus: complete
---

こんにちは、ビットコインのシステムに興味を持ち、一つアイデアがある：

ビットコインアドレスは、例えばトレントの[マグネットリンク](http://en.wikipedia.org/wiki/Magnet_URI_scheme)のような[URIスキーム](http://en.wikipedia.org/wiki/URI_scheme)を実装することで改善できるだろう。

つまり、*1Nu6wZC7JSuh6h8nfKkSTZ4kp9U4f83hhZ* の代わりに、より明確に *[bitcoin:?addr=1Nu6wZC7JSuh6h8nfKkSTZ4kp9U4f83hhZ](bitcoin:?addr=1Nu6wZC7JSuh6h8nfKkSTZ4kp9U4f83hhZ)* と表記でき、さらにブラウザーでこのようなリンクのクリックをビットコインクライアントにリダイレクトするよう設定できる。これにより、ホームページに「寄付ボタン」を、ウェブショップに「支払いボタン」を実装できるようになるだろう。

IPを含める必要がある場合、URIでは *[bitcoin://HOST_OR_IP:PORT?addr=1Nu6wZC7JSuh6h8nfKkSTZ4kp9U4f83hhZ](bitcoin://HOST_OR_IP:PORT?addr=1Nu6wZC7JSuh6h8nfKkSTZ4kp9U4f83hhZ)* と記述できる。希望すれば金額も *[bitcoin:?amount=42.00;addr=1Nu6wZC7JSuh6h8nfKkSTZ4kp9U4f83hhZ](bitcoin:?amount=42.00;addr=1Nu6wZC7JSuh6h8nfKkSTZ4kp9U4f83hhZ)* のように指定できる（もちろんユーザーがセキュアなビットコインクライアントで確認するためのものだ）。

以上、私の0.02 &#3647;（気に入らなければ [bitcoin:?addr=1Nu6wZC7JSuh6h8nfKkSTZ4kp9U4f83hhZ](bitcoin:?addr=1Nu6wZC7JSuh6h8nfKkSTZ4kp9U4f83hhZ) に返してくれ）
