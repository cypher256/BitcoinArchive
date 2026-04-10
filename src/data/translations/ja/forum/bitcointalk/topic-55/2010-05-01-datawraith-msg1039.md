---
title: "Re: Bitcoin用URIスキーム"
date: 2010-05-01T13:40:37.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=55.msg1039#msg1039"
author: "DataWraith"
participants:
  - name: "DataWraith"
    slug: "datawraith"
description: "BitcoinTalkトピック55におけるDataWraithの文脈投稿。msg481の後。"
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

magnetリンクをすでにある程度普及しているからという理由だけで使っても、欠点を上回るメリットはないと思う。magnetリンクはピアツーピアネットワーク上のファイルまたはファイル群を参照するために設計されたもので、よく知られているパラメータはどれもファイル（ファイル名、サイズなど）を指す。bitcoinはアプリケーション固有のxBitcoinパラメータに頼ることになるし、ファイルとbitcoinトランザクションを1つのリンクに混在させたいわけでもない。だから、独自の別フォーマットを使わない説得力のある理由はとくにない。そもそもmagnetリンク自体も公式には認知されていないしな。

引用：URIを調べる過程でfreenetと、彼らが使うmagnet風のシステムを思い出して、また見に行ってみた。[snip] これを使えば、出版者自身のウェブサイトの機能やビジネスシステム向けに設計された、アプリケーション固有データのリッチなデータベースにURIを連結できないか？bitcoinノードが実際のトランザクションを処理する一方で、freenetノードが個別に提示されるデータを処理する。
うわっ！Bitcoinクライアントを起動するだけの軽量なURLハンドラから、Freenetを必要とするところまで行くのは少し飛躍だ。これは絶対にオプションにすべきだ。

ただ、トランザクションに追加情報を付けられるのは確かにとても良い。ecの最初の投稿と、さらなる詳細が必要だという点を踏まえ、以下のURLパラメータ（あるいはその短縮版）を持つべきだと思う。

- address: bitcoinの送信先アドレス。人ごとに異なるアドレスを渡せるので、これは送信者の識別にもなりうる。
- amount（オプション）: 送る金額。
- message（オプション）: トランザクションを説明する短いメッセージ（Bitcoinクライアントのフィールドと同じ）。
- details（オプション）: トランザクションの詳細をエンコードしたURL。たとえばオンラインショップでの購入なら、購入の詳細にリンクできる。これ自体がフル機能のURLになるので、匿名性を保つためにfreenetやi2p、torにリンクすることもできる。
