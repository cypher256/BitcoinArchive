---
title: "Bitcoin XT がブロックサイズ戦争を開く — ハーンとアンドレセンが 8 MB ブロックを提案 (2015 年 8 月)"
date: 2015-08-15T00:00:00Z
type: "article"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Bitcoin_XT"
author: "Mike Hearn"
participants:
  - name: "Mike Hearn"
    slug: "mike-hearn"
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "マイク・ハーンとギャビン・アンドレセンが Bitcoin XT 0.11A をリリース。BIP 101 で 8 MB ブロックを 2 年ごとに倍増。ブロックサイズ戦争の公開段階の起点。"
isSatoshi: false
tags:
  - "fork"
  - "bitcoin-xt"
  - "block-size"
  - "block-size-war"
  - "scaling"
  - "bip-101"
secondarySources:
  - name: "BIP 101 — Increase maximum block size"
    url: "https://github.com/bitcoin/bips/blob/master/bip-0101.mediawiki"
  - name: "Coindesk — Mike Hearn and Gavin Andresen Just Forked Bitcoin"
    url: "https://www.coindesk.com/markets/2015/08/15/mike-hearn-and-gavin-andresen-just-forked-bitcoin/"
relatedEntries:
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
  - aftermath/2016-01-14-mike-hearn-resolution-bitcoin-experiment
  - bip/2015-12-21-bip-0141
  - analysis/2014-03-19-bitcoin-core-rebrand-authority-effects
  - aftermath/2017-08-01-bitcoin-cash-fork
  - aftermath/2017-11-08-segwit2x-cancellation
---

2015 年 8 月 15 日、[マイク・ハーン](/BitcoinArchive/ja/participants/mike-hearn/) は Bitcoin XT バージョン 0.11A をリリースした。Bitcoin Core のフォークで [BIP 101](https://github.com/bitcoin/bips/blob/master/bip-0101.mediawiki) を実装するものだった。当時 Bitcoin Core のリード保守者だった [ギャビン・アンドレセン](/BitcoinArchive/ja/participants/gavin-andresen/) は二か月前に BIP 101 を執筆し、XT のリリースを支持した。

BIP 101 は、ビットコインの 1 MB ブロックサイズ制限を 2016 年 1 月 11 日から 8 MB に引き上げ、その後 2 年ごとに倍増させて 2036 年までに 8 GB に到達させるという提案だった。有効化には、1,000 ブロックの窓内で採掘ブロックの 75% が支持を表明することが要件とされた。

このリリースは、2013 年にブロック充填が定常的な懸念になり始めて以降積み上がってきた論争の、公開フォーク段階の幕開けだった。ハーンとアンドレセンは、[サトシ](/BitcoinArchive/ja/participants/satoshi-nakamoto/) が 2010 年 9 月にスパム対策の暫定措置として導入した 1 MB 制限がやがてビットコインの取引確認能力を絞り込む、より大きな制限へのハードフォークが拡張への唯一の現実的経路だ、と主張した。これに対し、グレゴリー・マクスウェル、ピーター・ウィーユ、ウラジミール・ファン・デル・ラーンらが率いる Bitcoin Core 開発者群は、争いの起こるハードフォークはネットワークを分裂させる、拡張はオフチェーン層と Segregated Witness のようなプロトコル更新で達成できる、BIP 101 の成長スケジュールはノード運営を資源を持つ少数の運用者に集中させる危険がある、と反論した。

Bitcoin XT は 2015 年末に約 1,000 ノードを一時的に集めたが、75% の有効化閾値には決して近づかなかった。2016 年 1 月までにノード数は 30 を下回るまで崩落し、ハーンは [「ビットコイン実験の終結」](/BitcoinArchive/ja/entries/aftermath/2016-01-14-mike-hearn-resolution-bitcoin-experiment/) を公開してビットコインの失敗を宣言、保有していた全コインを売却した。XT は小規模なネットワークとして存続したが、Bitcoin Core への対抗としては事実上停止した。

ブロックサイズ戦争は XT で終わらなかった。[Bitcoin Classic](https://en.wikipedia.org/wiki/Bitcoin_Classic) が 2016 年 2 月に同様の 2 MB 提案で立ち上がり、Bitcoin Unlimited が 2016 年 10 月にマイナー主導の可変方式で続いた。2017 年 5 月の[ニューヨーク合意](https://en.wikipedia.org/wiki/SegWit2x) は SegWit + 2 MB の妥協を試みた。論争は 2017 年 8 月 1 日の [Bitcoin Cash ハードフォーク](/BitcoinArchive/ja/entries/aftermath/2017-08-01-bitcoin-cash-fork/) で頂点に達した。全経緯は[ビットコイン系譜の分析](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/) に記録されている。

XT のリリースは、論争の公開フォーク段階の時系列上の起点である。それ以前にもメーリングリストや BitcoinTalk スレッドに不一致は存在したが、2015 年 8 月 15 日は、Bitcoin Core のフォークが、インストール可能なバイナリと公開された有効化スケジュールを伴って製品ソフトウェアとしてリリースされた日付である。
