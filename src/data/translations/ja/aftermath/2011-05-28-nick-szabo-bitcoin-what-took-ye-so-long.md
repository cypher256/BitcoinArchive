---
title: "ニック・サボ「ビットコイン、なぜこんなに遅く来たんだ」 — デジタル通貨が数十年を要した理由"
date: 2011-05-28T00:00:00Z
type: "article"
source: "unenumerated"
sourceUrl: "https://unenumerated.blogspot.com/2011/05/bitcoin-what-took-ye-so-long.html"
author: "Bitcoin Institute"
participants:
  - name: "Nick Szabo"
    slug: "nick-szabo"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Wei Dai"
    slug: "wei-dai"
  - name: "Hal Finney"
    slug: "hal-finney"
description: "サボの 2011 年 5 月 Unenumerated 投稿。ビットゴールド (1998) からビットコイン (2009) までの 13 年を論じ、私的リストを `libtech` と特定。"
isSatoshi: false
tags:
  - "nick-szabo"
  - "bit-gold"
  - "origins"
  - "proof-of-work"
  - "deflation"
secondarySources:
  - name: "Gwern Mirror"
    url: "https://gwern.net/doc/www/unenumerated.blogspot.com/3ecbb48879787f383ef10206358e0a14adf2f5dd.html"
relatedEntries:
  - aftermath/2013-12-05-techcrunch-skye-grey-szabo-stylometric
  - aftermath/2015-05-15-popper-nyt-szabo-satoshi-investigation
  - analysis/2013-12-05-szabo-satoshi-identity-hypothesis
  - "aftermath/2005-12-29-nick-szabo-biography"
  - "aftermath/2008-04-10-nick-szabo-bit-gold-implementation-request"
inlineLinkKeywords:
  - "libtech"
quotes:
  - id: "q1"
    person: "Nick Szabo"
    personSlug: "nick-szabo"
    date: "2011-05-28T00:00:00Z"
  - id: "q2"
    person: "Nick Szabo"
    personSlug: "nick-szabo"
    date: "2011-05-28T00:00:00Z"
  - id: "q3"
    person: "Nick Szabo"
    personSlug: "nick-szabo"
    date: "2011-05-28T00:00:00Z"
translationStatus: complete
---

![濃紺色の背景に、1998年を示す点から菱形の中継点を経て、ゲートのアイコンと天秤のアイコンを添えたノード群へ、さらに 2009年を示す点へと続く波状のタイムラインを配置し、2 本の曲線が南京錠付きの封筒アイコンへ収束する様子と、日付を刻んだ点が並んで書類アイコンへ続く様子を描いたインフォグラフィック](/BitcoinArchive/images/analysis/2011-05-28-nick-szabo-bitcoin-what-took-ye-so-long-hero.png)

ニック・サボの Unenumerated ブログに 2011 年 5 月 28 日公開された、ビットコイン公開後にサボが最初に書いた長文公開投稿。タイミングが重要で、 [サトシのギャビン・アンドレセン宛最終私的メール](/BitcoinArchive/ja/entries/aftermath/2011-04-26-satoshi-to-andresen-alert-key/)から約一ヶ月後、ビットコインが初めて米ドル等価に達した年に出ている。投稿は二層構造を持つ。[ビットゴールド](/BitcoinArchive/ja/entries/aftermath/2008-04-10-nick-szabo-bit-gold-implementation-request/) (1998 年) からビットコイン (2009 年) までデジタル通貨のアイデアが形になるのに 13 年かかった理由の回顧と、先駆システムの最も近い既知の生存設計者によって書かれたビットゴールドとビットコインの構造比較である。

**「なぜそんなに長く」議論。** サボはまず、困難は技術ではなく社会学的だったと主張する:

<!-- quote: q1 -->
> セキュリティ技術は決して自明なものではないが、「なぜ」の方がはるかに大きな躓きの石だった ― 一般的なアイデアを聞いたほぼ全員が、それは非常に悪いアイデアだと思ったのだから。

サボ自身の説明によれば、抵抗の源は経済学的直観にあった。当時の人々は、通貨が商品裏付け (金属伝統) か主権発行 (国家伝統) のどちらかを必要とすると、繰り返し彼にそう言った。そのため、どちらにも当てはまらない希少なデジタルトークンという第三の選択肢は、聞いた者のほとんどから即座に退けられた。サボはこれを 1990 年代後半のビットゴールド議論で繰り返し遭遇したメンガーとミーゼスの誤読と結び付ける。

**`libtech` メーリングリストの開示。** 投稿は 1990 年代後半のデジタル通貨研究が特定の私的経路で起きていたことを公的に初めて確認している:

<!-- quote: q2 -->
> ビットゴールドのアイデアを読んだ人はごくわずかだった。 1998 年に考えついたのだが ― ウェイ・ダイがビーマネーを考案していたのと同じ時期、同じ私的メーリングリストで ― 長い話なのだが ― そのほとんどは 2005 年まで公に記述されなかった。もっとも、その断片のいくつかは先に記述していたのだよ。たとえば、私が secure property titles（安全な財産権原）と呼ぶものへ一般化した、要となるビザンチン複製の署名済みトランザクション連鎖の部分だ。

これは `libtech` を 1998 年に[ウェイ・ダイ](/BitcoinArchive/ja/participants/wei-dai/)の[ビーマネー](/BitcoinArchive/ja/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/)とサボのビットゴールドが並行開発された場として特定する。独立した孤立発明ではなく閉じたリストでの並行開発という構造的事実は、後の同定分析 ([ウェイ・ダイ=サトシ仮説](/BitcoinArchive/ja/entries/analysis/2008-08-22-wei-dai-satoshi-identity-hypothesis/)と[サボ=サトシ仮説](/BitcoinArchive/ja/entries/analysis/2013-12-05-szabo-satoshi-identity-hypothesis/)) で繰り返し参照される。

**ビットゴールドとビットコインの比較。** 構造比較セクションはビットコインがビットゴールドに対して行った二つの具体的改善を特定している:

<!-- quote: q3 -->
> ナカモトは、私の設計にあった重大なセキュリティ上の欠陥を改善したのだ。ビザンチン耐性を持つ P2P システムでノードになるためにプルーフ・オブ・ワークを要求することで、信頼できない当事者がノードの過半数を制御し、それによって重要なセキュリティ機能の数々を損なう脅威を軽減したのだ。
>
> 私の自動マーケットの代わりに ― ハードウェアの進歩や暗号学のブレークスルーによってパズルの難易度が劇的に変わりうるという事実と、需要の予測不可能性を考慮するための ― ナカモトはビザンチン合意に基づく難易度調整アルゴリズムを設計したのだ。ビットコインのこの側面が機能なのかバグなのか、私には決めかねるが、よりシンプルにはなっているのだよ。

第一の改善は、プルーフ・オブ・ワークを別個のコイン生成機能ではなくネットワーク参加の門として使うことだ。ビットコインのセキュリティモデルを成立させる構造的革新である。第二は、自動マーケットの代わりに難易度調整アルゴリズムを置いた点。サボはこれを明白な改善というよりトレードオフとして位置づけている。アルゴリズムは市場ベースのプルーフ・オブ・ワーク費用価格発見を取り除く代償で、シンプルさを得ている。

**口調と同定議論。** 投稿はサボの特徴的な調子で書かれている。歴史経済的散文に工学的論点が織り込まれ、「皮肉にもリバタリアンたちから来た一般的な議論」への小気味よい脇道も挟まれる。設計空間に実質的な知的投資を持つ人物の作品として読める。この調子の特徴は、 2013 年の[文体計量分析](/BitcoinArchive/ja/entries/aftermath/2013-12-05-techcrunch-skye-grey-szabo-stylometric/)と 2015 年の [Popper NYT 調査](/BitcoinArchive/ja/entries/aftermath/2015-05-15-popper-nyt-szabo-satoshi-investigation/)がサボを主要同定候補として返した理由の一部。サボはサトシであることを否定しているが、投稿はオリジナルのビットゴールド設計者としての役割を超えて何かを確認も否定もしない。

**起源コーパスにおける位置。** [ウェイ・ダイのビーマネー告知](/BitcoinArchive/ja/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/)、 [アダム・バックの Hashcash 告知](/BitcoinArchive/ja/entries/aftermath/1997-03-28-adam-back-hashcash-announcement/)、 [ハル・フィニーの RPOW 告知](/BitcoinArchive/ja/entries/aftermath/2019-08-21-hal-finney-rpow-recognition/)と並んで、この 2011 年の回顧は設計系譜を内側から埋める。実際に世に出たシステムの同定候補でもある先駆設計者が書いたものだからだ。これら四つの文書はビットコインの設計系譜を描く。ただしホワイトペーパーが引用するのは Hashcash と b-money の二つで、bit gold と RPOW はその参照の外にある。
