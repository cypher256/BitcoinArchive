---
title: "Re: ファイルホスティングとプロキシサービスのアイデア"
date: 2010-03-25T18:20:45.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=83.msg815#msg815"
author: "BitcoinFX"
participants:
  - name: "BitcoinFX"
    slug: "bitcoinfx"
description: "BitcoinTalk トピック 83 における BitcoinFX の文脈投稿。after msg810, サトシを引用."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-03-24T18:01:57.000Z"
translationStatus: complete
---

<!-- quote: q1 -->
> タイトルを変更した。
>
> プロキシサービスを運用した実経験のある人がいるのは助かる。現時点ではPsiphonが一番だと思うか？（始めた当時は一番だったものが、後でもっと良いものが見つかる、ということもあるので）

すべてのプロキシサービスとソフトウェアソリューションには、運用者とユーザーの両方にとって利点と欠点がある。

Psiphon の第 1 版はインストールと導入が非常に簡単だ。ユーザーは登録されたメールアドレスによってのみ運用者に識別され、アクセスパスワードは必要に応じて変更可能、「問題のある」利用に対するロギングも有効化されている。ユーザーアカウントの削除も可能だ。

できる限り高速かつ安全に動作させるため、上記の.dll などを更新している。

ユーザーは接続先の https アドレスを受け取り、自己署名の SSL 証明書を受け入れる（変更可能）。その後ログインページが表示され、ユーザー名とパスワードを入力してブラウジングを開始する。

https アドレスのデフォルトは https :// xxx.xxx.xxx.xxx:443/*random_sub_domain* だ。私は DynDNS.com のアップデータを使っているので、自分の IP は保護されており、「ブロックされた」ユーザーには新しい「ランダムな」ドメインを提供することもできる。たとえば https://*random*.ath.cx:443/*random_sub_domain* のように。

つまり私のサービスは TLD 上で動作しているわけでもなく、好きなときにアドレスを変更できる。

これは Tor のようなものに比べて利点がある。ランダムなサービスへの安全なブラウザー接続のようにしか見えないからだ。たとえば中国のユーザーにとって Tor の主な問題は、Tor が Tor だとすぐに識別されてしまうことだ。多くの点で、Psiphon 型のプロキシの方がずっとプライベートで安全だ。

「望ましくない」コンテンツへのアクセスを制御するため、Untangle Gateway と OpenDNS を高度なブロッキングとともに使っている。
