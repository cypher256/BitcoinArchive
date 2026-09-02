---
title: "ウェイ・ダイ：ビットコインの固定供給は失敗だ — サトシは先に答えていた"
date: 2008-10-31T00:00:00Z
type: "analysis"
source: "lesswrong"
sourceUrl: "https://www.lesswrong.com/posts/P9jggxRZTMJcjnaPw/bitcoins-are-not-digital-greenbacks"
author: "Wei Dai"
participants:
  - name: "Wei Dai"
    slug: "wei-dai"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Adam Back"
    slug: "adam-back"
description: "ウェイ・ダイは 2013 年、固定供給を失敗と断じた。だが彼自身の b-money 設計も、サトシが「知る方法はない」と答えた価値の数値を必要としていた。"
isSatoshi: false
tags:
  - "analysis"
  - "monetary-policy"
  - "wei-dai"
  - "b-money"
  - "adam-back"
  - "hard-money"
  - "elastic-supply"
secondarySources:
  - name: "Wei Dai — b-money proposal (1998)"
    url: "http://www.weidai.com/bmoney.txt"
  - name: "Wei Dai — 'Ask Any LessWronger Anything' (LessWrong, 2014)"
    url: "https://www.lesswrong.com/posts/YdfpDyRpNyypivgdu/aalwa-ask-any-lesswronger-anything"
relatedEntries:
  - aftermath/2013-04-21-wei-dai-bitcoin-monetary-policy-critique
  - analysis/2008-10-31-fixed-supply-vs-adjustable-money
  - aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement
  - emails/cypherpunks/b-money-protocol/1998-12-05-adam-back-b-money-protocol-repost
  - aftermath/1998-12-06-adam-back-b-money-monetary-critique
  - aftermath/1998-12-07-wei-dai-re-b-money-protocol
  - emails/cypherpunks/b-money-protocol/1998-12-07-wei-dai-re-b-money-protocol
  - emails/cypherpunks/b-money-protocol/1998-12-08-wei-dai-re-b-money-protocol
  - aftermath/2014-01-12-wei-dai-retrospective-on-satoshi
  - analysis/2008-10-31-bitcoin-digital-gold-structural-features
  - forum/p2pfoundation/bitcoin-open-source/2009-02-18-bitcoin-open-source-implementation-of-p2p-currency
  - aftermath/2008-08-22-wei-dai-biography
  - aftermath/2008-08-20-adam-back-biography
  - design/2009-01-03-bitcoin-monetary-design
inlineLinkKeywords:
  - "失敗の判定"
  - "現実世界の価値を知る方法"
quotes:
  - id: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2009-02-18T20:50:00.000Z"
    sourceEntryId: "forum/p2pfoundation/bitcoin-open-source/2009-02-18-bitcoin-open-source-implementation-of-p2p-currency"
    parent: null
  - id: "q2"
    person: "Wei Dai"
    personSlug: "wei-dai"
    date: "1998-12-05T19:55:55.000Z"
    sourceEntryId: "emails/cypherpunks/b-money-protocol/1998-12-05-adam-back-b-money-protocol-repost"
    parent: null
  - id: "q3"
    person: "Adam Back"
    personSlug: "adam-back"
    date: "1998-12-06T00:48:42.000Z"
    sourceEntryId: "emails/cypherpunks/b-money-protocol/1998-12-06-adam-back-b-money-critique"
    parent: null
  - id: "q4"
    person: "Wei Dai"
    personSlug: "wei-dai"
    date: "1998-12-07T00:23:22.000Z"
    sourceEntryId: "emails/cypherpunks/b-money-protocol/1998-12-07-wei-dai-re-b-money-protocol"
    parent: null
  - id: "q5"
    person: "Wei Dai"
    personSlug: "wei-dai"
    date: "1998-12-08T00:12:21.000Z"
    sourceEntryId: "emails/cypherpunks/b-money-protocol/1998-12-08-wei-dai-re-b-money-protocol"
    parent: null
translationStatus: complete
---

![濃紺の背景、左に 1998 年の手書き風メール 2 通、中央に赤線を引いた疑問符、右に法廷の小槌が「FAILED」のスタンプの上に置かれ、1998 年から 2013 年へ延びる細い年表でつながれているイラスト。](/BitcoinArchive/images/analysis/2008-10-31-wei-dai-fixed-supply-critique-unanswered-hero.png)

[ウェイ・ダイ](/BitcoinArchive/ja/participants/wei-dai/)の b-money 提案は、ビットコインホワイトペーパーの参考文献 [1] に引用されている。2013 年 4 月、そのダイが、自ら着想を与えた設計に判定を下した。ビットコインの固定供給は金融政策の失敗だ、と。さらに踏み込んで、サトシから 2008 年に届いた白書草稿へのコメント依頼に返信しなかったことを悔やんだ。返信していれば、その考えを思いとどまらせられたかもしれないからだ。

この判定は 10 年以上、ビットコイン最大の被引用先行者が固定供給を誤りと考えていた証拠として流通してきた。だがこの判定からは、二つの事実が抜け落ちている。2009 年 2 月に、サトシ自身がなぜ代替案を試みなかったかを自分の言葉で説明していたこと。そして、ダイ本人がビットコインより 10 年早くその代替案を提案したとき、何が起きたかだ。

## サトシが挙げた理由

サトシの供給スケジュールはプロトコルレベルで固定されている。委員会も、フィードバックループも、通貨供給が世界の何かを追跡する仕組みもない。2009 年 2 月、需要に合わせて供給を調整しない理由を P2P Foundation のフォーラムで説明した際、サトシは理由を直接述べている。

<!-- quote: q1 -->
> そのためには、価値を決める信頼できる第三者が必要になっただろう。ソフトウェアに物の現実世界での価値を判断させる方法を、私は知らないからだ。

これはヘッジ表現ではない。具体的で反証可能な主張だ。サトシは、誰かに言わせるのではなく分散環境のソフトウェアが何かの実世界での価値を知るための実働する方法を持っていなかった。そして次節で追うとおり、すでに試みていた唯一の詳細な代替設計も、それを持っていなかった。実際の価値に応答する供給規則には、その方法が要る。それが無ければ、「弾力供給」は設計図のままであって、動く仕組みではない。

## ウェイ・ダイ自身の代替案が必要としていたもの

その P2P Foundation 投稿の 10 年前、ウェイ・ダイはすでにその代替案を設計していた。そしてそれは、まさにサトシが「作る方法を知らない」と言ったものを必要としていた。ダイは [1998 年 11 月に Cypherpunks メーリングリストで b-money を告知](/BitcoinArchive/ja/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/)し、その 9 日後にリストへ再投稿された[提案の全文](/BitcoinArchive/ja/entries/emails/cypherpunks/b-money-protocol/1998-12-05-adam-back-b-money-protocol-repost/)は、新規貨幣の創出を弾力的にし、それを生み出した計算のコストに、実物商品建てで連動させていた。

<!-- quote: q2 -->
> 創出される通貨単位の数は、標準商品バスケットで測った計算努力のコストに等しい。例えば、ある問題を解くのに、それを最も経済的に解けるコンピューターで 100 時間かかり、そのコンピューターでの 100 時間分の計算時間を公開市場で購入するのに標準バスケット 3 個分かかるとすれば、その問題の解答が放送された時点で、全員が放送者の口座に 3 単位を貸方記入する。

この仕組みを注意深く読むと、抜け穴はまさにサトシが後に指した場所にある。この式は、誰か一人を信頼することなく全参加者が検証できる形で、「公開市場」での「標準商品バスケット」に対して 100 時間分の計算時間がいくらするかを知る必要がある。提案は入力項目を名指ししている。分散ネットワークがどうやってそれに合意するかは書いていない。

## その穴に名前がついたのは、10 日後

[アダム・バック](/BitcoinArchive/ja/participants/adam-back/)はこの提案を読み、月が変わる前に Cypherpunks リストへ返信し、7 つの金融設計上の問題を指摘した。1 つ目が、まさにこの穴だ。

<!-- quote: q3 -->
> (1) インフレ——衝突を 1 つ計算するのに必要なハードウェアのコストは、ムーアの法則に沿って下落する。1 b-money 単位が要求する計算努力量を、時間とともに増やすよう定義すれば、これを回避できるかもしれない。例えば、1 b-money 単位を、現在の価格とハードウェアの状態のもとで 1000 ドルで買える最も効率的なハードウェアでの 1 か月分の計算努力、と定義する。

バック自身が提案した回避策が何をしているかに注目してほしい。現実世界の価格参照の必要性を取り除いてはいない。ただ「現在の価格で 1000 ドル」へ場所を移しただけだ。この設計が公になってから 10 日、それを最もよく擁護できる立場にいた人物は、同じ未解決の入力値で穴をふさごうとすることで、むしろその欠陥を裏付けてしまった。

## ウェイ・ダイ自身の反論——それでも前提としているもの

翌日、ダイはバックへ直接、論点(1)について返信した。そして、それを認めはしなかった。プロトコルはすでにこれを織り込み済みだ、と言ったのだ。

<!-- quote: q4 -->
> 実は、この問題はプロトコル内ですでに織り込み済みだ。CPU 時間を燃やして生成される b-money の量は、標準商品バスケットに対する CPU 時間の相対コストに依存する。そのバスケットに対して計算コストが下がるにつれ、1 単位の b-money を生成するのに必要な CPU 時間は自動的に上がる。だから b-money のマネーサプライを減らすことはできない以上、b-money 経済が縮小するか、b-money の流通速度が上がらない限り、インフレは起きないはずだ。

この返信をそれ自体として読めば、ムーアの法則によるインフレへの反論としては筋が通っている。単位を絶対的な CPU サイクル数ではなく、商品バスケット価格に対して相対的に定義するなら、ハードウェアが安くなるだけでは通貨は毀損しない。だが、この反論は「症状」への反論であって、「仕組み」そのものを改めて主張し直しているにすぎない。依然として「標準商品バスケットに対する CPU 時間の相対コスト」が要る。それは、分散ネットワークがどうやって合意するのか、元の提案が一度も説明していなかったのと同じ、現実世界の価格の数値だ。ダイはバックのインフレへの異議には答えたが、その下にあるもっと難しい問いには一度も触れていない。「その交換レートが分かっているなら式はインフレを防ぐか」ではなく、「そもそもソフトウェアはその交換レートをどうやって知るのか」という問いだ。

同じスレッドの他の論点については、ダイはそこまで自信を見せていない。翌日、バックの残りの懸念に返信した際、彼はこの設計の射程について率直だった。

<!-- quote: q5 -->
> 私が思うに、b-money はせいぜい、政府公認の仕組みを使いたくない、あるいは使えない人々に向けた、ニッチな通貨／契約執行メカニズムにとどまります。

物価安定、景気循環、最適インフレ率を、すでに自分が解いた問題としてではなく、より広い採用を目指す通貨システムなら誰もが直面する未解決の問いとして挙げている。15 年後、b-money をなぜ実装しなかったかを振り返った 2014 年の LessWrong スレッドで、ダイはこの設計がまさにその未完成のままだったことを認めている。

<!-- audit:quote-skip -->
> その理由の一部は、b-money がまだ完全な実用設計になっていなかったからだ。

## 15年間、その間に修正はなかった

1998 年 12 月の提案から 2013 年 4 月の判定に至るまで、分散ネットワークが誰かに報告させることなく現実世界の価格をどう決定するのか、ダイ自身もアダム・バックも、それを明示した痕跡は公開記録のどこにもない。b-money は一度も実装されなかった。その間、実働する仕組みは一つも世に出なかった。ダイが 2013 年の判定を書いたとき、彼はサトシが見送った実証済みの代替案を指していたのではない。1998 年以来、自分の設計が必要とし、擁護はしたが閉じることのなかった、その同じ未解決の要件を指していたのだ。

これはダイのビットコインの乱高下への診断が誤りだということではない。彼が名指しした価格変動は現実であり、その先は[固定供給 vs 自動調整通貨分析](/BitcoinArchive/ja/entries/analysis/2008-10-31-fixed-supply-vs-adjustable-money/)が、ビットコインの上限に対して 15 年分の暗号資産の供給設計を横断して整理している。ここで言えるのはもっと狭く、もっと具体的なことだ。2013 年の判定は、代わりに選べたはずの、実装済みで動く代替案という重みを帯びて流通してきた。記録はその重みを支えない。b-money 自身の仕組みは、サトシが「作る方法を知らない」と言ったのと同じものを必要としており、それとは違うことを示せる立場にいたはずの唯一の人物は、ついにそれを示さなかった。

もっとも、この空白が証明するのは不在であって、不可能ではない。1998 年にも 2013 年にも分散型の現実世界価値オラクルは存在しなかった。後年の暗号学やオラクルネットワークの研究は、この 15 年の窓の外にある。サトシに答えが無かったことは、なぜ固定スケジュールを選んだかの説明にはなるが、固定供給が他の根拠において正しかったことの証明ではない。そしてダイ自身は、b-money が先へ進まなかった理由を仕組みだけに置いていない。書き上げる頃には「クリプトアナーキーに、ある程度幻滅していた」のだという。

<!-- entry-closing -->

ウェイ・ダイの名は、ビットコインホワイトペーパーに参考文献 [1] として刻まれている。その金融政策への判定は 10 年以上、資格を備えた異論として流通してきた。先行者本人が、後継者は間違えたと言っている。その資格は本物だ。だがその異論が拠って立つ仕組みは、その設計者自身が最後まで作り上げなかったものであり、しかもその理由は、提案から 10 日以内に、設計者自身の手で記録に残されている。「もっと賢い方法はなかったのか」というサトシへの問いに、サトシ自身の答えは「作り方を知らないからだ」だった。15 年後、その問いを発した本人も、それを知らなかった。
