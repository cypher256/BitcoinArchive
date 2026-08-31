---
title: "Re: ウェイ・ダイの「b-money」プロトコル"
date: 1998-12-07T00:23:22Z
type: "mailing-list"
source: "cypherpunks-mailing-list"
sourceUrl: "https://mailing-list-archive.cryptoanarchy.wiki/archive/1998/12/eb51721ed32076703cfdc22e2097b779b95605799343f65e86c3c57e06ac7a3b/"
author: "Wei Dai"
participants:
  - name: "Wei Dai"
    slug: "wei-dai"
  - name: "Adam Back"
    slug: "adam-back"
description: "ウェイ・ダイがアダム・バックに返信。b-money のインフレは設計で対処済みと反論し、リンク可能性はチャウム方式のペイメントミックスで解消できると提案（論点 1・3〜6）。"
inReplyTo: "emails/cypherpunks/b-money-protocol/1998-12-06-adam-back-b-money-critique"
isSatoshi: false
tags:
  - "wei-dai"
  - "adam-back"
  - "b-money"
  - "cypherpunks"
  - "monetary-policy"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Adam Back"
    personSlug: "adam-back"
    date: "1998-12-06T00:48:42Z"
    sourceEntryId: "emails/cypherpunks/b-money-protocol/1998-12-06-adam-back-b-money-critique"
relatedEntries:
  - "aftermath/1998-12-07-wei-dai-re-b-money-protocol"
  - "analysis/2008-10-31-wei-dai-fixed-supply-critique-unanswered"
---

1998 年 12 月 6 日 0:08:04（UTC）、アダム・バックは次のように書きました：

<!-- speaker: Adam Back -->
<!-- quote: q1 -->
<!-- tone-skip -->
> (1) インフレ — 所定の衝突を計算するために要するハードウェアのコストは、ムーアの法則に沿って下がる。b-money の単位が時間とともにより多くの計算量を要するように定義すれば、これを回避できるかもしれない。たとえば 1 b-money 単位を、その時点の価格とハードウェア水準で 1000 ドルで買える最も効率的なハードウェアによる 1 か月分の計算量と定義する、といった具合だ。
<!-- /tone-skip -->

<!-- speaker: Wei Dai -->
実は、この問題はプロトコルですでに考慮済みです。CPU 時間を燃やして b-money を作るとき、作られる量は、標準的な財のバスケットに対する CPU 時間の相対的なコストに依存します。計算のコストがそのバスケットに対して下がるにつれて、1 単位の b-money を作るのに必要な CPU 時間は自動的に増えます。その結果、b-money の経済が縮小するか、b-money の流通速度が上がらない限り、b-money にインフレは生じないはずです（b-money の貨幣供給を減らすことはできないので）。

<!-- speaker: Adam Back -->
<!-- tone-skip -->
> (3) リンク可能性 — 参加者は匿名だが、そのトランザクションはリンク可能であり、したがって b-money の参加者は仮名にとどまる（リンク可能な匿名性とは、すなわち仮名性のことだ）。これは、公開帳簿の記入が確実に更新されるようトランザクションをブロードキャストする必要があることに由来する、本質的な性質だ。
>
> (4) 資金を入れることはできる — ハードウェアを買えばよい — が、人によってコストが異なる。既存の汎用ワークステーションを使うなら、カスタムハードウェアを買う場合より単位あたりのコストは高くつく。さほど悪い問題ではなく、規模の経済、あるいは量割引と見なせばよい。
>
> (5) ハードウェアを買って資金を入れる方法は機能するが、人々はカスタムハードウェアを買う手間を嫌い、武力独占に裏付けられた通貨（各国の法定通貨）で b-money を買いたがるだろう。最新のカスタムハードウェアを買い集めることを事業とする鋳造所を設けたとしても、仮名の身元が、追跡可能な決済手段（クレジットカード、小切手、電信送金など）の利用によって割れてしまうため、匿名で b-money を買うのは難しい。
>
> (6) 資金を出すのも難しい。仮名の b-money 利用者が、身元を明かさずに武力独占通貨を得るのは困難だろう。
<!-- /tone-skip -->

<!-- speaker: Wei Dai -->
問題の 3〜6 は、私のペイメントミックスのアイデアで解決できます。これは単純に、人々が b-money でブラインド化された電子キャッシュを買い、少し後に別の仮名でそれを売り戻す、チャウム方式の鋳造所です。これであなたの b-money はもうリンクできなくなります。この鋳造所の良い点は、いつでも未決済の債務がごくわずかなはずなので、それほど信用しなくてよいことです。負っている債務も、もちろん b-money で裏付けられます。
