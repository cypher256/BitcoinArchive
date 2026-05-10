---
title: "Re: Bitcoin 用 URI スキーム"
date: 2010-05-01T13:40:37.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=55.msg1039#msg1039"
author: "DataWraith"
participants:
  - name: "DataWraith"
    slug: "datawraith"
description: "BitcoinTalk トピック 55 における DataWraith の文脈投稿。msg481 の後。"
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "Karmicads"
    personSlug: "karmicads"
    date: "2010-05-01T06:06:53.000Z"
    sourceEntryId: "forum/bitcointalk/topic-55/2010-05-01-karmicads-msg1038"
translationStatus: complete
---

<!-- quote: q1 -->
> これが実現する前に、URIがどんな形を取るかについて合意が必要だ。[snip] ……最も適したスキームは、特定のアドレスではなく、コンテンツの一意性の産物であるハッシュによってリソースを見つけるように設計されたmagnet URIのようだ。
> [snip] magnetの美点は、共有可能でその意味で開かれていることだ。

magnet リンクをすでにある程度普及しているからという理由だけで使っても、欠点を上回るメリットはないと思う。magnet リンクはピアツーピアネットワーク上のファイルまたはファイル群を参照するために設計されたもので、よく知られているパラメーターはどれもファイル（ファイル名、サイズなど）を指す。bitcoin はアプリケーション固有の xBitcoin パラメーターに頼ることになるし、ファイルと bitcoin トランザクションを 1 つのリンクに混在させたいわけでもない。だから、独自の別フォーマットを使わない説得力のある理由はとくにない。そもそも magnet リンク自体も公式には認知されていないしな。

> URIを調べる過程でfreenetと、彼らが使うmagnet風のシステムを思い出して、また見に行ってみた。[snip] これを使えば、出版者自身のウェブサイトの機能やビジネスシステム向けに設計された、アプリケーション固有データのリッチなデータベースにURIを連結できないか？bitcoinノードが実際のトランザクションを処理する一方で、freenetノードが個別に提示されるデータを処理する。

うわっ！Bitcoin クライアントを起動するだけの軽量な URL ハンドラから、Freenet を必要とするところまで行くのは少し飛躍だ。これは絶対にオプションにすべきだ。

ただ、トランザクションに追加情報を付けられるのは確かにとても良い。ec の最初の投稿と、さらなる詳細が必要だという点を踏まえ、以下の URL パラメーター（あるいはその短縮版）を持つべきだと思う。

- address: bitcoin の送信先アドレス。人ごとに異なるアドレスを渡せるので、これは送信者の識別にもなりうる。
- amount（オプション）: 送る金額。
- message（オプション）: トランザクションを説明する短いメッセージ（Bitcoin クライアントのフィールドと同じ）。
- details（オプション）: トランザクションの詳細をエンコードした URL。たとえばオンラインショップでの購入なら、購入の詳細にリンクできる。これ自体がフル機能の URL になるので、匿名性を保つために freenet や i2p、tor にリンクすることもできる。
