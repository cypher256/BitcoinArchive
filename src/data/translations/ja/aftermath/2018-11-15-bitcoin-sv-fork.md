---
title: "ビットコインSVがビットコインキャッシュから分裂 — ライトとエアの「オリジナルプロトコル」 チェーン (2018 年 11 月)"
date: 2018-11-15T00:00:00Z
type: "article"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Bitcoin_SV"
author: "nChain / CoinGeek"
participants:
  - name: "Craig Wright"
    slug: "craig-wright"
description: "ビットコインSVが 2018 年 11 月 15 日、Bitcoin ABC とのビットコインキャッシュ内ハッシュ戦争で分裂。128 MB ブロックと「オリジナル」 オペコードを復活。"
isSatoshi: false
tags:
  - "fork"
  - "bitcoin-sv"
  - "bitcoin-cash"
  - "block-size"
  - "hash-war"
  - "craig-wright"
secondarySources:
  - name: "Coindesk — Bitcoin Cash Hard Fork: What You Need to Know"
    url: "https://www.coindesk.com/markets/2018/11/14/bitcoin-cash-hard-fork-what-you-need-to-know/"
relatedEntries:
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
  - aftermath/2017-08-01-bitcoin-cash-fork
  - aftermath/2024-03-14-copa-v-wright-ruling
  - aftermath/2015-01-01-amaury-sechet-biography
---

2018 年 11 月 15 日、ビットコインキャッシュが分裂した。ビットコインキャッシュブロックチェーン — それ自体が [2017 年 8 月のビットコインからのフォーク](/BitcoinArchive/ja/entries/aftermath/2017-08-01-bitcoin-cash-fork/) — は、互いに競合する二つのチェーンに割れた。Bitcoin ABC (既存クライアントで、BCH のティッカーを保持) と、[クレイグ・ライト](/BitcoinArchive/ja/participants/craig-wright/) とカルヴィン・エアの nChain 組織が率いる Bitcoin SV (Satoshi Vision) である。

分裂を生んだ論争は、ビットコインキャッシュの次のプロトコル更新の内容についてだった。Bitcoin ABC は Canonical Transaction Ordering (CTOR) と新しいオペコード群を含む通常更新を提案した。一方、nChain が支援する実装である Bitcoin SV は、以下の変更を提案した:

- ブロックサイズ上限を 32 MB から 128 MB へ引き上げ
- 過去のビットコインコードで無効化されたオペコード (`OP_MUL`、`OP_LSHIFT`、`OP_RSHIFT` 等) を復活
- 取引ごとのスクリプトサイズ制限を撤廃

ライトとエアは、SV 提案を「オリジナルのビットコインプロトコル」 (サトシの設計が改変されなければそうなっていたはずの形) を復活させるものとして枠付けした。この枠付けはビットコインコミュニティの大半から異論を呼んだ。Bitcoin ABC のリードであるアモリー・セシェも、その変更はサトシの実際の公開発言からは技術的に支持されないと主張した。

11 月 15 日に向けて、マイニングプールは陣営別に整列した。CoinGeek (エアが支援する運営) と SVPool は SV チェーンへハッシュパワーを投入し、Bitcoin.com (ロジャー・ヴァーが運営) と Bitmain 系列のプールは ABC を支持した。11 月 15 日のハードフォークはハッシュ戦争を発火させた。両陣営は競合するハッシュレートで自陣のチェーンを採掘し、より大きなハッシュレートを持つ側が再編成攻撃で小さい方のチェーンを攻撃するという明示的な脅威の下に置かれた。

ハッシュ戦争は予測された再編成を生まなかった。両方のチェーンが各々のブロック履歴を蓄積し、取引所 (Coinbase、Bitfinex、Kraken) は数日以内に両者を別資産として上場した。11 月末までに BCH のティッカーは Bitcoin ABC チェーンに残り、SV のティッカーがビットコインSVチェーンに新設された。両チェーンはそれ以降、独立に動作し続けている。

ビットコインSVのその後の歴史は、クレイグ・ライトのサトシ・ナカモト主張を巡る長期的な法廷闘争に支配された。主張は [COPA v Wright (2024 年 3 月 14 日)](/BitcoinArchive/ja/entries/aftermath/2024-03-14-copa-v-wright-ruling/) でイングランド・ウェールズ高等法院により決定的に否定された。判決は、ライトが文書を偽造しサトシではないと認定した。ただし BSV チェーン自体はライトの正体主張とは技術的に独立している。チェーンは 2018 年 11 月 15 日の分裂時に選ばれたパラメーター集合のまま、COPA の判決とは無関係に動作し続けている。

2018 年 11 月 15 日の分裂は、[2017 年 8 月 1 日のビットコインキャッシュフォーク](/BitcoinArchive/ja/entries/aftermath/2017-08-01-bitcoin-cash-fork/) に続く、ビットコイン系譜における二度目の重大な決裂である。これはまた、ビットコインの家系図のなかで持続的なネットワーク占有率を生んだ最後のプロトコル分岐チェーンでもある。それ以降のフォーク (Bitcoin ABC 自体の 2020 年の BCH と BCHA への分裂、雑多な「Bitcoin Diamond」「Super Bitcoin」 等のローンチ) は、実質的な存在感を持つチェーンではなく、出来高の薄いニッチチェーンしか生んでいない。全経緯は[ビットコイン系譜の分析](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/) に記録されている。
