---
title: "マイク・ベルシェ — HTTP/2 寄稿者、BitGo 共同創業者兼 CEO、ニューヨーク合意 / SegWit2x の署名者にして中止判断者"
date: 2013-10-01T00:00:00Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/SegWit2x"
author: "Bitcoin Institute"
participants:
  - name: "Mike Belshe"
    slug: "mike-belshe"
description: "アメリカのエンジニア。HTTP/2 (SPDY) 寄稿後、2013 年 BitGo 共同創業 (機関向け保管)。NYA 署名後、2017 年 11 月 SegWit2x を中止。"
isSatoshi: false
tags:
  - "mike-belshe"
  - "biography"
  - "bitgo"
  - "custody"
  - "multisig"
  - "segwit2x"
  - "block-size-war"
secondarySources:
  - name: "BitGo — official site"
    url: "https://www.bitgo.com/"
  - name: "Mike Belshe — SegWit2x cancellation post (Bitcoin-segwit2x mailing list)"
    url: "https://lists.linuxfoundation.org/pipermail/bitcoin-segwit2x/2017-November/000685.html"
  - name: "Forbes — How BitGo Helped MakerDAO Make Bitcoin Tradable"
    url: "https://www.forbes.com/sites/michaeldelcastillo/2019/05/13/from-bitcoin-custody-to-defi-bitgos-mike-belshe-on-the-future-of-finance/"
relatedEntries:
  - aftermath/2017-11-08-segwit2x-cancellation
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
---

マイク・ベルシェはアメリカのソフトウェアエンジニアで、ビットコイン以前は HTTP/2 の基盤となった SPDY プロトコルへの寄稿者だった。2013 年 10 月、ウィル・オブライエンとベン・ダヴェンポートと **BitGo** を共同創業した ─ 機関向けビットコイン保管とマルチシグウォレット技術に特化した最初期の企業の一つである。2017 年までに BitGo はビットコイン取引所および法人保有者向けの主要なインフラ提供者の一つとなり、これがベルシェをニューヨーク合意の交渉席に座らせ、最終的にその中止を起草する立場に置いた。

## ビットコイン以前: HTTP/2 / SPDY

ベルシェのビットコイン以前のソフトウェアキャリアは、Google での Web プロトコル改善の広範な仕事を含む。彼は SPDY プロトコル仕様の共著者で、SPDY は HTTP/1.1 に対する多重化・ヘッダー圧縮・その他のトランスポート層改善を提案した。SPDY は後に HTTP/2 ─ 現在の Web で広く用いられているプロトコル ─ の基盤として採用された。

## BitGo とビットコイン保管 (2013 ~)

2013 年 10 月、ベルシェは BitGo を共同創業した。同社の製品の中心はマルチシグウォレット技術 ─ 具体的には、機関保有者 (取引所、ヘッジファンド、決済処理事業) が単一鍵への露出なしにビットコインを保管できる 2-of-3 ウォレット ─ だった。BitGo のマルチシグ SDK と HSM 裏付けの署名サービスは、2010 年代中盤を通じてビットコイン取引所業界の標準インフラとなった。2016 年には、ビットコインの機関保管市場のかなりの部分の技術基盤を担う立場にあった。

ベルシェは創業以来 CEO を務めている (正式な肩書きは断続的に変動している)。2014 ~ 2016 年にかけて BitGo は保管サービスの提供範囲を広げ、ホットウォレット管理、鍵復旧手続き、規制対象機関向けのコンプライアンスツールを含むようになった。同社は「ビットコインのエンタープライズインフラ」 ─ ビットコインの信頼不要プロトコルと規制対象金融機関の運用要件を橋渡しする層 ─ の可視的な顔の一つとなった。

## ニューヨーク合意と SegWit2x (2017 年)

ベルシェは 2017 年 5 月 23 日の Consensus 2017 会議における [ニューヨーク合意](https://en.wikipedia.org/wiki/SegWit2x) の主要署名者の一人だった。同合意は二つのプロトコル約束を束ねていた: ビットコイン本体チェーンで Segregated Witness を有効化すること (2017 年 8 月に実行)、その三か月後に 2 MB ブロックサイズ上限へのハードフォーク (「2x」 部分) を行うこと。ベルシェは特に後半 ─ SegWit2x ハードフォーク ─ で、合意に署名した主要ビットコイン事業者を代表する存在として目立った。

2017 年 10 月までには、SegWit2x ハードフォークがコミュニティ全体の支持を得られないことが明らかになった。Bitcoin Core 開発者は当初から公的に反対しており、ユーザー有効化ソフトフォーク (UASF) 運動はノード運営者がマイニングハッシュレートに依存せずプロトコルルールを強制できることを実証していたし、複数の主要取引所は SegWit2x チェーンを上場しないことを表明していた。

2017 年 11 月 8 日 ─ ブロック 494784 での有効化予定の 3 日前 ─ ベルシェは `bitcoin-segwit2x@lists.linuxfoundation.org` メーリングリストに [SegWit2x 中止メッセージ](/BitcoinArchive/ja/entries/aftermath/2017-11-08-segwit2x-cancellation/) を投稿した。投稿は他の主要署名者 5 名 (ウェンセス・カサレス、ジハン・ウー、ジェフ・ガージック、ピーター・スミス、エリック・ヴォーヒース) との連名だった。中止により、ニューヨーク合意は事実上終結し、[ブロックサイズ戦争](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/) の本体チェーン側が閉じた。

## ビットコインにおける意義

ベルシェの記録は本アーカイブで二つの理由で意味を持つ。第一に、BitGo のマルチシグインフラは、2014 ~ 2018 年期にビットコインを機関保有者にとって実用可能にした基盤的な技術貢献の一つである。当該保管層がなければ、その後の法人普及の多くは運用上不可能だっただろう。第二に、2017 年 11 月 8 日の中止メッセージはニューヨーク合意の文字通りの終結 ─ より大きなブロック陣営の本体チェーン側のキャンペーンが閉じた瞬間であり、Bitcoin Core のソフトフォーク限定のプロトコル進化文化を生存モデルとして残した契機である。

ベルシェと BitGo は、本エントリー最終編集時点でもビットコイン保管およびデジタル資産インフラ領域で活動を続けている。
