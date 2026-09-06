---
title: "レイ・ディリンジャー「始めようとしていたものを知っていたなら」 — ビットコイン初期コードレビュアーの回顧"
date: 2017-09-20T00:00:00Z
type: "article"
source: "linkedin"
sourceUrl: "https://www.linkedin.com/pulse/id-known-what-we-were-starting-ray-dillinger"
author: "Ray Dillinger"
participants:
  - name: "Ray Dillinger"
    slug: "ray-dillinger"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Hal Finney"
    slug: "hal-finney"
description: "レイ・ディリンジャーがビットコイン最初期の役割を回顧。ブロックチェーンコードのレビュー、ハル・フィニーとの分業、サトシの誠実さについて語る。"
isSatoshi: false
tags:
  - "code-review"
  - "hal-finney"
  - "altcoins"
  - "retrospective"
secondarySources:
  - name: "Ramon Quesada Mirror"
    url: "https://ramonquesada.com/english/if-id-known-what-we-were-starting/"
  - name: "BitcoinVN News Mirror"
    url: "https://bitcoinvn.io/news/bitcoin-if-id-known-what-we-were-starting/"
  - name: "Hacker News Discussion"
    url: "https://news.ycombinator.com/item?id=15299849"
relatedEntries:
  - aftermath/2008-11-06-ray-dillinger-biography
  - aftermath/2018-10-01-ray-dillinger-interview
  - aftermath/2022-09-16-lopp-was-satoshi-greedy-miner
translationStatus: complete
---

![夕暮れの道を挟んだ両側の机に黒い人影が座り、一方は連なるブロックの列を、もう一方は六角形の記号の列を見つめている。道の中央には輝くコインの山が静かに積まれ、奥へ向かって細い道が幾筋にも枝分かれしている。](/BitcoinArchive/images/analysis/2017-09-20-ray-dillinger-if-id-known-hero.png)

2008年11月、俺はビットコインのソースコードのブロックチェーン部分のコードレビューとセキュリティ監査を行った。

分業はこうだ：俺がブロックチェーンのコードをレビューし、[ハル・フィニー](/BitcoinArchive/ja/participants/hal-finney/)がスクリプト言語をレビューし、[サトシ](/BitcoinArchive/ja/participants/satoshi-nakamoto/)は俺たちの質問に答えたり、自ら質問したりを交互に行った。

1995年5月、大学院のネットワーキングクラスの研究論文として、俺はブロックチェーンを使用した最初のデジタルキャッシュプロトコルと思われるものを作成した。

暗号学的なコードは緻密だ。その点は認める。だが、俺が特定した懸念は二つだ：第一に、初期ネットワークの強力なアクターによる攻撃への脆弱性。第二に、でかくなりすぎたときのスケーラビリティと帯域幅の問題だ。

ローンチ後、プルーフ・オブ・ワークのハッシュにゼロ以外の価値がつくとは思えなかったし、帯域幅の要件が実用的でないと考えた。だから俺は身を引いた。

---

ビットコインは、信頼された役割がまったくない、最初のデジタルキャッシュシステムだった。サトシは料金所のない高速道路を作ったんだ。彼はコインを売っていたんじゃない。ハッシュを解いた者に与えていたんだよ。

サトシは約 100 万ビットコインを採掘したが、一度も売らなかった。これは個人的な利益への真の無関心を示していたってことだ。

その後、3,000 以上のアルトコインが続いた。そのほとんどは自分がやっていることを分かっているし、少なくとも 4分の 3 は自分がやっていることが人々を騙すことだと知っているだろ。

多くの ICO は露骨な株価操作とインサイダー取引に類似している。正当なブロックチェーンのユースケースは、詐欺との関連付けによって火の中に巻き込まれているんだよ。

本記事は 2017 年 9 月 20 日に LinkedIn に公開され、翌 9 月 21 日に Hacker News のトップページに達し、329 ポイントと 86 件のコメントを獲得した。

ディリンジャーはここでハル・フィニーとの分業を概観しているが、その監査にはより深い技術的な中身がある。浮動小数点による会計の発見と satoshi 精度の設計判断は、 [ティム・スワンソンによる 2018 年のインタビュー](/BitcoinArchive/ja/entries/aftermath/2018-10-01-ray-dillinger-interview/)で詳しく語られている。

ここでディリンジャーが語った「サトシは約 100 万 BTC を採掘しながら一切売らなかった」という証言は、5 年後に発表された[ジェイムソン・ロップの 2022 年のデータ分析](/BitcoinArchive/ja/entries/aftermath/2022-09-16-lopp-was-satoshi-greedy-miner/)によって裏付けられ、数値としても示されている。ロップの試算では、サトシの実際の採掘量はフル稼働時に得られたはずの量のおよそ半分にとどまっていたという。
