---
title: "アモリー・セシェ — Bitcoin Core 寄稿者、Bitcoin ABC リード開発者、Bitcoin Cash ハードフォークの設計者"
date: 2015-01-01T00:00:00Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Bitcoin_Cash"
author: "Bitcoin Institute"
participants:
  - name: "Amaury Séchet"
    slug: "amaury-sechet"
description: "フランス人エンジニア。2015 年頃 Bitcoin Core 寄稿、Bitcoin ABC 立ち上げ、2017 年 BCH ハードフォーク主導、2020 年に eCash へ分裂。"
isSatoshi: false
tags:
  - "amaury-sechet"
  - "biography"
  - "bitcoin-cash"
  - "bitcoin-abc"
  - "ecash"
  - "block-size-war"
secondarySources:
  - name: "Bitcoin ABC — official site"
    url: "https://www.bitcoinabc.org/"
  - name: "GitHub — deadalnix (Amaury Séchet)"
    url: "https://github.com/deadalnix"
  - name: "CoinDesk — Bitcoin Cash hard-fork lead developer Amaury Séchet"
    url: "https://www.coindesk.com/markets/2017/07/29/bitcoin-cash-hard-fork-the-week-ahead/"
relatedEntries:
  - aftermath/2017-08-01-bitcoin-cash-fork
  - aftermath/2018-11-15-bitcoin-sv-fork
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
---

アモリー・セシェ (オンラインハンドル `deadalnix`) はフランス人ソフトウェアエンジニアで、ビットコイン以前は Facebook の HHVM (HipHop 仮想マシン) チームに勤務していた。2015 年頃から Bitcoin Core への寄稿を行い、後に 2017 年 8 月 1 日のブロック 478558 における [Bitcoin Cash ハードフォーク](/BitcoinArchive/ja/entries/aftermath/2017-08-01-bitcoin-cash-fork/) を生んだ Bitcoin ABC 実装のリード開発者となった。

## Bitcoin Core 寄稿期 (2015 ~ 2017)

セシェの GitHub 履歴 (`deadalnix`、`secondarySources` にリンク) には 2015 年以降の Bitcoin Core 寄稿が記録されている。主にプロトコル層のコード (合意ルール、P2P ネットワーキング、検証) への寄稿である。彼は後の [ブロックサイズ戦争](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/) となる公開議論で活発に発言し、より大きなブロック陣営に整列していた。2016 年までには、Bitcoin Core の他のメンバーが収束しつつあった SegWit + レイヤー 2 路線ではなく、オンチェーンのブロックサイズ拡張を可視的に主張していた。

## Bitcoin ABC と Bitcoin Cash フォーク (2017 年)

セシェは 2017 年中盤、**Bitcoin ABC** (「Adjustable Blocksize Cap」 の略) を立ち上げた。Bitcoin Core 開発チームの協力なしに大きなブロックフォークを有効化するための、クリーンルーム実装である。マイニングプールとノードが 2017 年 8 月 1 日のブロック 478558 でフォークを生成するために動かしたのが、この Bitcoin ABC ソフトウェアだった。セシェは同期間のリード開発者として、SIGHASH_FORKID 再生攻撃保護方式、少数派ハッシュレートでも新チェーンがブロック生成を維持できるようにする Emergency Difficulty Adjustment (EDA) アルゴリズム、フォーク後のガバナンス / 開発体制の設計を担った。

## Bitcoin SV とのハッシュ戦争 (2018 年)

2018 年 11 月、BCH コミュニティはプロトコル更新案を巡って分裂した。セシェは Bitcoin ABC 側を主導し、[クレイグ・ライトとカルヴィン・エアの nChain](/BitcoinArchive/ja/entries/aftermath/2018-11-15-bitcoin-sv-fork/) は対抗案 (Bitcoin SV、128 MB ブロックと「復活したオリジナルオペコード」) を主導した。両陣営は 11 月 15 日のフォーク地点に競合するハッシュレートを投じ、各チェーンが再編成攻撃を仕掛けられるかどうかで生存が決まるハッシュ戦争状況を生んだ。結果は永続的な分裂となった ─ BCH (Bitcoin ABC のチェーン) は BCH ティッカーを保持し、BSV は新しい SV ティッカーで別個に継続した。

## Bitcoin Cash ABC 分裂と eCash (2020 ~ 2021 年)

2020 年 11 月、セシェはさらに別の分裂 ─ 今回は BCH 内部での ─ を主導した。マイナー報酬の 8% を開発資金に振り向ける税 (「インフラ資金計画」) の提案を巡る分裂だった。BCH のマイナーの大半および広範な BCH コミュニティはこの提案を拒否し、セシェと Bitcoin ABC チームは分裂して別のチェーン ─ 当初は Bitcoin Cash ABC (BCHA) と呼ばれた ─ に分かれた。同チェーンは 2021 年中頃に eCash (XEC) として再ブランド化された。元の BCH チェーンは別のリード開発者の下で継続している。セシェの 2020 年以降の活動は eCash および隣接プロジェクトに集中している。

## ビットコインにおける意義

セシェの記録は本アーカイブで主に、2017 年 BCH ハードフォークの技術的リード ─ ビットコインプロトコル分岐のうち、実質的に生存するネットワーク占有率を持つチェーンを生んだ唯一の事例 ─ として意味を持つ。彼が設計した再生攻撃保護および難易度調整機構は、BCH が実用的にローンチできた条件であり、その後の他の争いの起こるフォークイベントでも研究・応用されている。2018 年の BSV ハッシュ戦争と 2020 年の BCHA / eCash 分裂は、同系譜の下流イベントとして上記の関連エントリーに記録されている。
