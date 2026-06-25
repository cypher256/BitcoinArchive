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
  - "aftermath/2008-04-27-nick-szabo-bit-gold-implementation-request"
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

ニック・サボの Unenumerated ブログに 2011 年 5 月 28 日公開された、ビットコイン公開後にサボが最初に書いた長文公開投稿。タイミングが重要で、 [サトシのギャビン・アンドレセン宛最終私的メール](/BitcoinArchive/ja/entries/aftermath/2011-04-26-satoshi-to-andresen-alert-key/)から約一ヶ月後、ビットコインが初めて米ドル等価に達した年に出ている。投稿は二層構造を持つ ― [ビットゴールド](/BitcoinArchive/ja/entries/aftermath/2008-04-27-nick-szabo-bit-gold-implementation-request/) (1998 年) からビットコイン (2009 年) までデジタル通貨のアイデアが出荷されるのに 13 年かかった理由の回顧、そして先駆システムの最も近い既知の生存設計者によって書かれたビットゴールドとビットコインの構造比較。

**「なぜそんなに長く」議論。** サボの第一の主張は、困難は技術ではなく社会学的だった、というもの:

<!-- quote: q1 -->
> セキュリティ技術は決して自明なものではないが、「なぜ」の方がはるかに大きな躓きの石だった ― 一般的なアイデアを聞いたほぼ全員が、それは非常に悪いアイデアだと思ったのだから。

抵抗を経済学的直観に帰している ― ほとんどの人は通貨が商品裏付け (金属伝統) か主権発行 (国家伝統) のどちらかを必要とすると信じ、第三の選択肢 (どちらも持たない希少デジタルトークン) は広く却下された。サボはこれを 1990 年代後半のビットゴールド議論で繰り返し遭遇したメンガーとミーゼスの誤読と結び付ける。

**`libtech` メーリングリストの開示。** 投稿は 1990 年代後半のデジタル通貨研究が特定の私的経路で起きていたことを公的に初めて確認している:

<!-- quote: q2 -->
> ビットゴールドのアイデアを読んだ人はごくわずかだった。 1998 年に考えついたのだが ― ウェイ・ダイがビーマネーを考案していたのと同じ時期、同じ私的メーリングリストで ― 長い話なのだが ― そのほとんどは 2005 年まで公に記述されなかった。

これは `libtech` を 1998 年に[ウェイ・ダイ](/BitcoinArchive/ja/participants/wei-dai/)の[ビーマネー](/BitcoinArchive/ja/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/)とサボのビットゴールドが並行開発された場として特定する。独立した孤立発明ではなく閉じたリストでの並行開発という構造的事実は、後の同定分析 ([ウェイ・ダイ=サトシ仮説](/BitcoinArchive/ja/entries/analysis/2008-08-22-wei-dai-satoshi-identity-hypothesis/)と[サボ=サトシ仮説](/BitcoinArchive/ja/entries/analysis/2013-12-05-szabo-satoshi-identity-hypothesis/)) で繰り返し参照される。

**ビットゴールドとビットコインの比較。** 構造比較セクションはビットコインがビットゴールドに対して行った二つの具体的改善を特定している:

<!-- quote: q3 -->
> ナカモトは、私の設計にあった重大なセキュリティ上の欠陥を改善した。すなわち、プルーフ・オブ・ワークをビザンチン耐性のある P2P システムのノードとすることを要求し、信頼できない当事者がノードの過半数を支配する脅威を大幅に低減したというわけだ。
>
> 私の自動マーケットの代わりに ― ハードウェアの進歩や暗号学のブレークスルーによってパズルの難易度が劇的に変わりうるという事実と、需要の予測不可能性を考慮するための ― ナカモトはビザンチン合意に基づく難易度調整アルゴリズムを設計したのだ。ビットコインのこの側面が機能なのかバグなのか、私には決めかねるが、よりシンプルにはなっているのだよ。

第一の改善 ― プルーフ・オブ・ワークを別個のコイン生成機能ではなくネットワーク参加の門として使うこと ― はビットコインのセキュリティモデルを成立させる構造的革新。第二 ― 自動マーケットの代わりの難易度調整アルゴリズム ― について、サボは明白な改善というより、トレードオフとして位置づけている ― アルゴリズムは市場ベースのプルーフ・オブ・ワーク費用価格発見を取り除く代償でシンプルさを得ている。

**口調と同定議論。** 投稿はサボの特徴的な調子で書かれている ― 歴史経済的散文に工学的論点が織り込まれ、「皮肉にもリバタリアンたちから来た一般的な議論」への小気味よい脇道つき ― そして設計空間に実質的な知的投資を持つ人物の作品として読める。この調子の特徴は、 2013 年の[文体計量分析](/BitcoinArchive/ja/entries/aftermath/2013-12-05-techcrunch-skye-grey-szabo-stylometric/)と 2015 年の [Popper NYT 調査](/BitcoinArchive/ja/entries/aftermath/2015-05-15-popper-nyt-szabo-satoshi-investigation/)がサボを主要同定候補として返した理由の一部。サボはサトシであることを否定しているが、投稿はオリジナルのビットゴールド設計者としての役割を超えて何かを確認も否定もしない。

**起源コーパスにおける位置。** [ウェイ・ダイのビーマネー告知](/BitcoinArchive/ja/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/)、 [アダム・バックの Hashcash 告知](/BitcoinArchive/ja/entries/aftermath/1997-03-28-adam-back-hashcash-announcement/)、 [ハル・フィニーの RPOW 告知](/BitcoinArchive/ja/entries/aftermath/2019-08-21-hal-finney-rpow-recognition/)と並んで、この 2011 年の回顧は設計系譜を内側から埋める ― 実際に出荷されたシステムの同定候補でもある先駆設計者によって書かれたもの。これら四つの文書は、ビットコインのホワイトペーパーが引用する設計系譜の土台をなす。
