---
title: "Re: Hashcash 論文の引用について（Bitcoin v0.1 リリース通知）"
date: 2009-01-10T18:46:45Z
type: "correspondence"
source: "bitcoin-magazine"
sourceUrl: "https://bitcoinmagazine.com/technical/bitcoin-adam-backs-complete-emails-satoshi-nakamoto"
sourceNote: "Bitcoin Magazine が Adam Back の COPA 対 Wright 証拠 (2024 年 2 月) として公開したメール画像の書き起こし。送信元アドレスが 2008 年 8 月のメールチェーンで使われていた satoshi@anonymousspeech.com から satoshi@vistomail.com に変わっている。"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Adam Back"
    slug: "adam-back"
description: "サトシが Bitcoin v0.1 リリースの翌日にアダム・バックへリリースを通知し、暗号学メーリングリストでのハル・フィニーの概観を転送する。"
isSatoshi: true
tags:
  - "hashcash"
  - "bitcoin-launch"
  - "hal-finney"
  - "v0.1"
  - "origins"
translationStatus: complete
secondarySources:
  - name: "COPA 対 Wright 裁判証拠"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
    note: "Adam Back の第二証人陳述書 (文書 C/21) に完全な 5 通のメールチェーンが含まれている。"
quotes:
  - id: "q1"
    person: "Hal Finney"
    personSlug: "hal-finney"
    date: "2008-11-13T16:24:18Z"
    sourceEntryId: "emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-13-re-bitcoin-p2p-e-cash-paper-finney"
---

ウェイ・ダイの b-money 論文や他の論文を紹介してくれてありがとう。

論文のオープンソース実装、 Bitcoin v0.1 をリリースした。詳細、ダウンロード、スクリーンショットは www.bitcoin.org にある。

システムの主要なアイデアは、ハッシュベースのプルーフ・オブ・ワークの連鎖を生成し、多数派合意の自己存在的な証明を作ることだ。ユーザーはプルーフ・オブ・ワークを連鎖に提供することで新しいコインを得る。

暗号学メーリングリストで設計についての議論があった。ハル・フィニーが良い概観を示してくれた:

<!-- quote: q1 -->
> 一つ言っておきたいんだけど、ビットコインは多くの点で二つの独立したアイデアなんだ。ジェームズがここで挙げている種類の問題を解決する方法、つまりグローバルに一貫性がありながら分散型のデータベースを作ること。そしてそれをウェイ・ダイの b-money（論文中で参照されている）に類似したシステムに使うこと、ただしアカウントベースではなくトランザクション/コインベースだ。グローバルで大規模に分散されたデータベース問題を解決することが、ジェームズが強調するように、おそらくより難しい部分なんだ。この目的のためのプルーフ・オブ・ワークの使用は、私見では、さらなる検討に値する新しいアイデアだと思うよ。

Satoshi
