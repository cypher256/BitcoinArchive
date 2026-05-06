---
title: "ニック・サボ（1964–） — Bit Goldとスマートコントラクトの考案者"
date: 2005-12-29T00:00:00Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Nick_Szabo"
author: "Nick Szabo"
participants:
  - name: "Nick Szabo"
    slug: "nick-szabo"
description: "コンピューター科学者・法学者・暗号学者（1964-）。Bit Gold（1998年）を構想し、「スマートコントラクト」という用語を生み出した。"
isSatoshi: false
tags:
  - "nick-szabo"
  - "biography"
  - "bit-gold"
  - "smart-contracts"
  - "precursor"
  - "cypherpunk"
  - "historic"
secondarySources:
  - name: "Nick Szabo — 'Bit Gold' (Unenumerated blog, December 29, 2005)"
    url: "https://unenumerated.blogspot.com/2005/12/bit-gold.html"
  - name: "Bitcoin Magazine — The Genesis Files: With Bit Gold, Szabo Was Inches Away From Inventing Bitcoin"
    url: "https://bitcoinmagazine.com/culture/genesis-files-bit-gold-szabo-was-inches-away-inventing-bitcoin"
  - name: "Satoshi Nakamoto Institute — Bit Gold"
    url: "https://nakamotoinstitute.org/library/bit-gold/"
  - name: "Nick Szabo — 'Bitcoin, what took ye so long?' (Unenumerated blog, May 28, 2011)"
    url: "https://unenumerated.blogspot.com/2011/05/bitcoin-what-took-ye-so-long.html"
  - name: "Nick Szabo — 'Smart Contracts: Building Blocks for Digital Markets' (1996)"
    url: "https://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smart_contracts_2.html"
relatedEntries:
  - aftermath/2013-12-05-techcrunch-skye-grey-szabo-stylometric
  - aftermath/2015-05-15-popper-nyt-szabo-satoshi-investigation
  - analysis/2013-12-05-szabo-satoshi-identity-hypothesis
  - "aftermath/2008-04-27-nick-szabo-bit-gold-implementation-request"
  - "aftermath/2011-05-28-nick-szabo-bitcoin-what-took-ye-so-long"
  - "analysis/2008-10-31-satoshi-identity-hypotheses-overview"
  - "analysis/2008-10-31-satoshi-anonymity-architecture"
  - "analysis/2008-10-31-satoshi-identification-asymmetry"
  - "analysis/2008-10-31-cypherpunk-independent-arrival"
translationStatus: complete
---

ニック・サボは、デジタル通貨とスマートコントラクトの先駆的研究で知られるコンピューター科学者・法学者・暗号学者である。彼の経歴の詳細は非公開のままである。

```mermaid
timeline
    1994 : 「スマートコントラクト」 用語を提唱
    1996 : 論文「Smart Contracts: Building Blocks for Digital Markets」 発表
    1998 : Bit Gold を構想 (libtech 非公開メーリングリスト)
    2005 : Bit Gold 完全設計を Unenumerated ブログで公開 (12月29日)
    2008 : 「誰か Bit Gold を実装してくれないか」 Unenumerated コメント (4月27日)
    %% link: /BitcoinArchive/ja/entries/aftermath/2008-04-27-nick-szabo-bit-gold-implementation-request/
    2009 : Bitcoin v0.1 公開、 サボは Unenumerated 継続 (1月)
    %% link: /BitcoinArchive/ja/entries/sourceforge/2009-01-09-bitcoin-v01-released/
    2011 : 「Nakamoto improved my design」 Unenumerated 投稿 (5月28日)
    %% link: /BitcoinArchive/ja/entries/aftermath/2011-05-28-nick-szabo-bitcoin-what-took-ye-so-long/
    2013 : Skye Grey + TechCrunch サボ＝サトシ説 (12月)
    %% link: /BitcoinArchive/ja/entries/aftermath/2013-12-05-techcrunch-skye-grey-szabo-stylometric/
    2014 : アストン大学 文体計量研究 サボを首位 (4月)
    %% link: /BitcoinArchive/ja/entries/aftermath/2014-04-16-aston-university-szabo-stylometric-study/
         : フリスビー宛 メール返信「残念ながら 間違いだ」 (否定)
    2015 : NYT ポッパー 『Digital Gold』 抜粋 - サボを最有力候補と示唆 (5月)
    %% link: /BitcoinArchive/ja/entries/aftermath/2015-05-15-popper-nyt-szabo-satoshi-investigation/
    2017 : ティム・フェリス・ショウ #244 出演 (6月)
    2018 : Fortune 10 周年 特集 - 肯定的扱い
```

### スマートコントラクト
1994年、サボは「スマートコントラクト」という用語を提唱した——契約条件がコードに直接記述された自己実行型の契約である。この概念は時代を数十年先取りしており、後にイーサリアムなどのプラットフォームの基盤となった。

### Bit Gold
1998年、サボはプルーフ・オブ・ワークに基づく分散型デジタル通貨システム、Bit Goldを構想した。2005年12月29日、ブログ「Unenumerated」で完全な設計を公開した。Bit Goldは、信頼できる第三者なしにデジタル希少性を実現するという根本的な問題——ビットコインが後に解決するのと同じ問題——に取り組んだ。サボは後に振り返っている。「この一般的なアイデアを聞いたほとんど全員が、非常に悪いアイデアだと思ったのだ」。

Bit Goldはビットコインと重要な概念を共有していた——プルーフ・オブ・ワーク、連鎖するパズル、分散型検証——しかし重大なセキュリティ上の弱点があった。単一の主体がノードの過半数を支配することを防ぐ問題を解決していなかった。[サトシ・ナカモト](/BitcoinArchive/ja/participants/satoshi-nakamoto/)はこの設計を改良した。

### ビットコインとの関係
サボは[2011年のブログ記事](/BitcoinArchive/ja/entries/aftermath/2011-05-28-nick-szabo-bitcoin-what-took-ye-so-long/)でサトシの改良を認めている。「ナカモトは、私の設計にあった重大なセキュリティ上の欠陥を改善したのだ。すなわち、プルーフ・オブ・ワークをビザンチン耐性のあるピアツーピアシステムのノードとなるために要求することで、信頼できない主体がノードの過半数を支配する脅威を大幅に軽減したというわけだ」。

[ハル・フィニー](/BitcoinArchive/ja/participants/hal-finney/)は、ビットコインに関する初期のメールのやり取りの中で、ビットコインとサボのBit Goldの類似性に言及した。サトシは、[ウェイ・ダイ](/BitcoinArchive/ja/participants/wei-dai/)を通じてサボの研究を知った。ダイは自身の[b-money](/BitcoinArchive/ja/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/)の概念と合わせてBit Goldのレビューを提案した。

### サトシ推測
Bit Goldとビットコインの深い概念的類似性から、サボがサトシ・ナカモトではないかと推測する者もいる。サボはこれを否定している。サボとサトシの間の確認された直接的な通信は公開されていない。
