---
title: "セルジオ・デミアン・ラーナー（1972–） — Patoshiマイニングパターンを発見したブロックチェーン研究者"
date: 2013-04-17T00:00:00Z
type: "biography"
source: "bitslog"
sourceUrl: "https://bitslog.com/2013/04/17/the-well-deserved-fortune-of-satoshi-nakamoto/"
author: "Sergio Demian Lerner"
participants:
  - name: "Sergio Demian Lerner"
    slug: "sergio-demian-lerner"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "セルジオ・デミアン・ラーナー：アルゼンチンの暗号学者・ブロックチェーン研究者。ビットコイン史上最も重要なブロックチェーンフォレンジック分析——「Patoshi」分析——を行った。ビットコインの最初期のブロックにおける単一の支配的マイナーを特定し、サトシ・ナカモトに帰属するとされる約110万BTCを蓄積しながら一度も使用しなかったことを証明した。"
isSatoshi: false
tags:
  - "sergio-demian-lerner"
  - "biography"
  - "patoshi"
  - "blockchain-forensics"
  - "mining"
  - "satoshi-fortune"
  - "historic"
secondarySources:
  - name: "Bitslog — The Well Deserved Fortune of Satoshi Nakamoto (April 17, 2013)"
    url: "https://bitslog.com/2013/04/17/the-well-deserved-fortune-of-satoshi-nakamoto/"
  - name: "Bitslog — A New Mystery about Satoshi (September 3, 2013)"
    url: "https://bitslog.com/2013/09/03/new-mystery-about-satoshi/"
  - name: "Bitslog — The Return of the Deniers and the Revenge of Patoshi (April 16, 2019)"
    url: "https://bitslog.com/2019/04/16/the-return-of-the-deniers-and-the-revenge-of-patoshi/"
  - name: "Bitslog — The Patoshi Mining Machine (August 22, 2020)"
    url: "https://bitslog.com/2020/08/22/the-patoshi-mining-machine/"
relatedEntries:
  - aftermath/2013-04-17-sergio-lerner-patoshi-analysis
  - aftermath/2013-09-03-sergio-lerner-nonce-lsb-discovery
  - aftermath/2019-04-16-sergio-lerner-patoshi-naming
  - aftermath/2020-08-22-sergio-lerner-patoshi-mining-machine
  - aftermath/2021-02-08-satoshi-bitcoin-holdings-analysis
  - aftermath/2021-09-30-plos-one-patoshi-anomaly-study
translationStatus: complete
---

セルジオ・デミアン・ラーナーは、アルゼンチンの暗号学者・ブロックチェーン研究者である。ブログBitslog（bitslog.com）で研究を発表しており、ビットコイン史上最も重要なブロックチェーンフォレンジック分析を行ったことで知られる。

**最初のPatoshi分析（2013年4月）：**
2013年4月17日、ラーナーは[「The Well Deserved Fortune of Satoshi Nakamoto」](/BitcoinArchive/ja/entries/aftermath/2013-04-17-sergio-lerner-patoshi-analysis/)を発表した——ビットコインの最初期のマイニングパターンに関する初の体系的分析である。最初の36,288ブロックにわたるコインベーストランザクションのExtraNonceフィールドを追跡し、ビットコインの最初の1年間に約100万BTCを採掘した単一のエンティティを特定した。これらのコインは事実上一度も使用されていなかった。

**ナンスLSBの発見（2013年9月）：**
5ヵ月後、ラーナーは[第二の独立した指紋を発見した](/BitcoinArchive/ja/entries/aftermath/2013-09-03-sergio-lerner-nonce-lsb-discovery/)。支配的マイナーのブロックにおけるナンス値の最下位バイト（LSB）が、256通りの値のうち約50個に制限されていた——ナンス探索空間を並列スレッドに分割するカスタムマイニングソフトウェアと一致するパターンだった。このマイナーが標準のビットコインクライアントではなく、改変されたソフトウェアを使用していたことが証明された。

**「Patoshi」命名（2019年4月）：**
[「The Return of the Deniers and the Revenge of Patoshi」](/BitcoinArchive/ja/entries/aftermath/2019-04-16-sergio-lerner-patoshi-naming/)で、ラーナーは「Patoshi」——PatternとSatoshiの合成語——という用語を提唱し、以降のすべての研究で標準的な呼称となった。推定を約22,000ブロック・約110万BTCに更新した。タイムスタンプ逆転分析により、ほぼ数学的な証明を提供した——連続するPatoshiブロック間のタイムスタンプ逆転がゼロであるのに対し、非Patoshiブロック間では224回であり、単一のPCクロックの使用が証明された。

**マイニングマシン（2020年8月）：**
ラーナーは、Patoshiマイナーが50台以上のネットワーク接続されたコンピューターではなく、マルチスレッドを備えた単一のハイエンドCPUを使用したと[結論づけた](/BitcoinArchive/ja/entries/aftermath/2020-08-22-sergio-lerner-patoshi-mining-machine/)。ナンス空間は5つのサブレンジに分割され、並列スレッドでスキャンされていた。SSE2の最適化が使用された可能性が高い。このマシンは他の初期マイナーの約4.3倍の速度であった。

**歴史的意義：**
ラーナーの研究は、[サトシ・ナカモト](/BitcoinArchive/ja/participants/satoshi-nakamoto/)がビットコインの総供給量2,100万の約5%を蓄積し、一度も使用しないことを選んだことを確立した。この発見は、ビットコインの経済性、サトシの動機、初期ビットコインの歴史の解釈に重大な意味を持つ。彼の研究は複数の研究者により独立して検証・拡張されている。
