---
title: "アダム・バック：ビットコインの量子脅威は 20〜40年先"
date: 2025-11-15T00:00:00Z
type: "article"
source: "x"
sourceUrl: "https://x.com/adam3us/status/1989721899991986374"
author: "Adam Back"
participants:
  - name: "Adam Back"
    slug: "adam-back"
description: "Blockstream CEO アダム・バックが、ビットコインの量子コンピューティング脅威はおよそ 20〜40 年先で、NIST ポスト量子署名 SLH-DSA を事前に導入できると述べた。"
isSatoshi: false
tags:
  - "quantum-computing"
  - "cryptography"
  - "NIST"
  - "SLH-DSA"
  - "security"
secondarySources:
  - name: "CoinTelegraph — Adam Back: Bitcoin faces no quantum risk for next 20–40 years"
    url: "https://web.archive.org/web/20251215111115/https://cointelegraph.com/news/bitcoin-quantum-threat-decades-post-quantum-migration"
  - name: "CryptoSlate — Why Adam Back thinks Bitcoin's 20-year quantum runway matters"
    url: "https://cryptoslate.com/why-adam-backs-thinks-bitcoins-20-year-quantum-runway-matters-more-than-todays-headlines/"
relatedEntries:
  - analysis/2026-05-18-bitcoin-quantum-threat
  - tweets/adam-back/2025-11-15-quantum-threat-timeline
  - design/2009-01-03-bitcoin-security-model
quotes:
  - id: "q1"
    person: "Adam Back"
    personSlug: "adam-back"
    date: "2025-11-15T00:00:00Z"
    sourceEntryId: "tweets/adam-back/2025-11-15-quantum-threat-timeline"
translationStatus: complete
---

![濃紺の背景に、起点を示す丸いマーカーから複数の年代の目盛りを経て、地平線上の小さな量子コンピューターのシルエットへと伸びる、オレンジ色から紫色へ変化する光る曲線状のタイムラインを描いたインフォグラフィックで、下部には錠前のアイコンと層状の鍵のアイコンが矢印でつながれている。](/BitcoinArchive/images/analysis/2025-11-15-adam-back-quantum-threat-timeline-hero.png)

量子研究の進展によりビットコインが危険にさらされているかという質問に対し、 [アダム・バック](/BitcoinArchive/ja/participants/adam-back/)は X に投稿した:

<!-- quote: q1 -->
> おそらく 20〜40 年は来ない。来るとしても。それにポスト量子署名はある。 NIST が去年 SLH-DSA を標準化した。ビットコインは時間をかけて追加できる。評価が続く中で量子耐性を備え、暗号学的に意味のある量子コンピューターが到着するはるか前に準備を整えられる。

バックは量子脅威を、数十年の猶予がある解決可能なエンジニアリング問題として再定義した。ジェイムソン・ロップが起草した Bitcoin Improvement Proposal 360 (BIP-360) は、 NIST が標準化したアルゴリズムを使用した量子耐性のある出力への段階的移行を概説している。 2025 年時点で、最も高性能な量子システムでさえ、ビットコインの楕円曲線署名に対してショアのアルゴリズムを実行するのに必要な閾値をはるかに下回っている。この 20〜40 年という推定は、[セキュリティーモデルの量子脅威節](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-security-model/)で引用されている年数と同じものである。

[量子脅威の分析](/BitcoinArchive/ja/entries/analysis/2026-05-18-bitcoin-quantum-threat/)は、この 20〜40 年という推定を、NSA が示す 2035 年の移行期限など制度側の時間軸と突き合わせている。