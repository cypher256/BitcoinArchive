---
title: "ビットコイン P2P 電子キャッシュ論文"
date: 2008-11-09T04:55:23Z
type: "mailing-list"
source: "cryptography-mailing-list"
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014834.html"
sourceNote: "2008 年 11 月 8 日 ( 土 ) 23:55:23 EST ( 11 月 9 日 04:55:23 UTC ) にジェームズ・A・ドナルド ( jamesd at echeque.com ) が metzdowd cryptography メーリングリストに投稿。"
author: "James A. Donald"
participants:
  - name: "James A. Donald"
    slug: "james-donald"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシの帯域論への返信。ドナルドは新しい通貨は既存網と正面から競えないとし、ビットコインを土台に銀行と口座マネーの層を重ねる構想を示し、後の取引所を先取りした。"
isSatoshi: false
tags:
  - "mailing-list"
  - "scalability"
  - "micropayments"
  - "bandwidth"
  - "bitcoin-bank"
secondarySources:
  - name: "Satoshi Nakamoto Institute (スレッド表示)"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/threads/1/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2008-11-03T01:37:00Z"
    sourceEntryId: "emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-02-re-bitcoin-p2p-e-cash-paper-satoshi-1"
---

<!-- speaker: Satoshi Nakamoto -->
<!-- quote: q1 -->
<!-- tone-skip -->
> 帯域幅はあなたが思うほど禁止的ではないかもしれない。典型的なトランザクションは約 400 バイトだ（ECC はうまくコンパクトだ）。各トランザクションは 2回ブロードキャストされる必要があるので、1 トランザクションあたり 1KB としよう。Visa は 2008 会計年度に 370 億件のトランザクションを処理した。これは 1日平均 1 億件のトランザクションだ。それだけのトランザクションには 100GB の帯域幅、つまり DVD12枚分か HD 画質の映画 2 本分、現在の価格で約 18 ドル相当の帯域幅が必要となる。
<!-- /tone-skip -->

<!-- speaker: James A. Donald -->
問題は、あなたが既存の銀行カード網と比較している点だ。

だが新しい通貨が古い通貨と正面から競うことはできない。ネットワーク効果が古い側に味方するからだ。

既存のカード網が手を出さない領域へ行くしかない。

いまファイル共有はビットの物々交換で成り立っているが、これには欲求の二重の一致が要る。人々は自分がダウンロードしているファイルしかアップロードせず、ダウンロードが終わればシードをやめる。だから出回るのは、同時に多くの人が欲しがる活発なファイルだけだ。

ファイル共有には極めて安価なトランザクションが要る。クライアントあたり毎秒数件、来る日も来る日もで、月あたりの取引コストはクライアントあたりごく僅かでなければならない。だからビットコインの上でファイル共有を支えるには、ビットコインの上に口座マネーの層を重ね、最小コインの十万分の一規模のトランザクションを扱えるようにし、匿名性のためにはさらにその上にチャウム式の電子マネーを重ねる必要がある。

ビットコイン銀行を bink と呼ぼう。ビットコインは口座マネーに対して、金本位制時代の金と同じ関係に立つ。bink どうしは、最も流動性が必要なときに相手が流動的でいる保証を互いに信用しないので、十万秒に一度ほどビットコインを動かして純差額を決済する。だからビットコインの持ち主はそう頻繁には替わらない。ほとんどの取引は口座のレベルで相殺される。bink が互いにビットコインを要求するのは、口座マネーを長く抱えたくないからにすぎない。こうして、少量のビットコインを稀に動かすだけで、それより多くの口座マネーを頻繁に取引させることができる。
