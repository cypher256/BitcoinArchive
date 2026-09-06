---
title: "マイク・ベルシェ — BitGo 共同創業者兼 CEO、ニューヨーク合意 / SegWit2x の署名者にして中止判断者"
date: 2013-10-01T00:00:00Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/BitGo"
sourceNote: "ベルシェ本人の Wikipedia エントリーはなく、BitGo 企業ページが彼を共同創業者兼 CEO として記載する最も安定した制度的参照となる。SegWit2x 中止投稿は、彼の最も公的なビットコインガバナンス行為の正規一次記録。"
author: "Bitcoin Institute"
participants:
  - name: "Mike Belshe"
    slug: "mike-belshe"
description: "アメリカのエンジニア。HTTP/2 (SPDY) 寄稿後、2013 年 BitGo 共同創業 (機関向け保管)。NYA 署名後、2017 年 11 月 SegWit2x を中止。"
isSatoshi: false
tags:
  - "mike-belshe"
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
relatedEntries:
  - aftermath/2017-11-08-segwit2x-cancellation
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
  - aftermath/2011-08-01-jihan-wu-biography
---

![細い線が 1 本の光る線に収束する図、3 つの鍵のうち 2 つが光ってロックにつながる図、赤い X で塞がれた分岐路と署名文書のアイコンを描いたイラスト](/BitcoinArchive/images/analysis/2013-10-01-mike-belshe-biography-hero.png)

2017 年 11 月 8 日、マイク・ベルシェが [SegWit2x の中止を告知する文書を起草した](/BitcoinArchive/ja/entries/aftermath/2017-11-08-segwit2x-cancellation/)。SegWit2x は、2017 年 5 月のニューヨーク合意で交渉されていた、ビットコインのブロックサイズ上限を倍にするハードフォーク計画である。十分なコミュニティ合意がないことを理由にしたこの中止は、ネットワーク立ち上げ以降で最大規模の論争的プロトコル変更の試みを終わらせた。ベルシェが起草するのに特に適していたのは、機関向けビットコイン保管企業 **BitGo**（その 2-of-3 マルチシグ SDK は取引所業界の標準インフラとなっていた）の共同創業者・CEO として、彼自身が NYA の主要署名者の一人だったからである。

ベルシェはアメリカのソフトウェアエンジニアである。ビットコイン以前は、Google で SPDY プロトコル仕様を共著した。SPDY は HTTP/2 の基盤となり、現代の Web で広く用いられている。2013 年 10 月、ウィル・オブライエンとベン・ダヴェンポートと BitGo を共同創業、機関向けビットコイン保管に特化した最初期の企業の一つとなった。

## ビットコイン以前: HTTP/2 / SPDY

ベルシェのビットコイン以前のソフトウェアキャリアは、Google での Web プロトコル改善の広範な仕事を含む。彼は SPDY プロトコル仕様の共著者で、SPDY は HTTP/1.1 に対する多重化・ヘッダー圧縮・その他のトランスポート層改善を提案した。SPDY は後に、現在の Web で広く用いられているプロトコル HTTP/2 の基盤として採用された。

## BitGo とビットコイン保管 (2013 ~)

2013 年 10 月、ベルシェは BitGo を共同創業した。同社の製品の中心はマルチシグウォレット技術だった。具体的には、機関保有者 (取引所、ヘッジファンド、決済処理事業) が単一鍵への露出なしにビットコインを保管できる 2-of-3 ウォレットである。BitGo のマルチシグ SDK と HSM 裏付けの署名サービスは、2010 年代中盤を通じてビットコイン取引所業界の標準インフラとなった。2016 年には、ビットコインの機関保管市場のかなりの部分の技術基盤を担う立場にあった。

ベルシェは創業以来 CEO を務めている (正式な肩書きは断続的に変動している)。2014 ~ 2016 年にかけて BitGo は保管サービスの提供範囲を広げ、ホットウォレット管理、鍵復旧手続き、規制対象機関向けのコンプライアンスツールを含むようになった。同社は、ビットコインの信頼不要プロトコルと規制対象金融機関の運用要件を橋渡しする層である「ビットコインのエンタープライズインフラ」の可視的な顔の一つとなった。

## ニューヨーク合意と SegWit2x (2017 年)

ベルシェは 2017 年 5 月 23 日の Consensus 2017 会議におけるニューヨーク合意の主要署名者の一人だった。同合意は二つのプロトコル約束を束ねていた: ビットコイン本体チェーンで Segregated Witness を有効化すること (2017 年 8 月に実行)、その三か月後に 2 MB ブロックサイズ上限へのハードフォーク (「2x」部分) を行うこと。ベルシェは特に、後半の SegWit2x ハードフォークで、合意に署名した主要ビットコイン事業者を代表する存在として目立った。

2017 年 10 月までには、SegWit2x ハードフォークがコミュニティ全体の支持を得られないことが明らかになった。Bitcoin Core 開発者は当初から公的に反対しており、ユーザー有効化ソフトフォーク (UASF) 運動はノード運営者がマイニングハッシュレートに依存せずプロトコルルールを強制できることを実証していたし、複数の主要取引所は SegWit2x チェーンを上場しないことを表明していた。

ブロック 494784 での有効化予定の約 1 週間前にあたる 2017 年 11 月 8 日、ベルシェは `bitcoin-segwit2x@lists.linuxfoundation.org` メーリングリストに [SegWit2x 中止メッセージ](/BitcoinArchive/ja/entries/aftermath/2017-11-08-segwit2x-cancellation/)を投稿した。投稿は他の主要署名者 5 名 (ウェンセス・カサレス、ジハン・ウー、ジェフ・ガージック、ピーター・スミス、エリック・ヴォーヒース) との連名だった。このうち、Bitmain 共同創業者で同じニューヨーク合意に署名し、SegWit2x 崩壊後には Bitmain 系列のハッシュレートを[ビットコインキャッシュ](/BitcoinArchive/ja/entries/currency/2026-07-27-bitcoin-cash-currency-overview/)に投じることになるウーについては、[ウー自身の伝記エントリー](/BitcoinArchive/ja/participants/jihan-wu/)で詳しく扱っている。中止により、ニューヨーク合意は事実上終結し、[ブロックサイズ戦争](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/)の本体チェーン側が閉じた。

## キャリア時系列

| 日付 | 出来事 |
|---|---|
| 2013 年以前 | Google で SPDY プロトコル仕様を共著（HTTP/2 の基盤） |
| 2013-10 | ウィル・オブライエンとベン・ダヴェンポートと BitGo を共同創業 |
| 2014–2016 | BitGo のマルチシグ SDK と HSM 裏付け署名サービスが取引所業界の標準インフラに |
| 2017-05-23 | Consensus 2017 でニューヨーク合意に署名 |
| 2017-08 | ビットコイン本体チェーンで SegWit 有効化（NYA 第一の約束） |
| 2017-11-08 | SegWit2x 中止メッセージを投稿（ブロック 494784 での有効化予定の約 1 週間前） |

## ビットコインにおける意義

ベルシェの記録はビットコイン・インスティテュートにとって二つの理由で意味を持つ。第一に、BitGo のマルチシグインフラは、2014 ~ 2018 年期にビットコインを機関保有者にとって実用可能にした基盤的な技術貢献の一つである。当該保管層がなければ、その後の法人普及の多くは運用上不可能だっただろう。

第二に、2017 年 11 月 8 日の中止メッセージはニューヨーク合意の文字通りの終結だった。それは、より大きなブロック陣営の本体チェーン側のキャンペーンが閉じた瞬間であり、Bitcoin Core のソフトフォーク限定のプロトコル進化文化を生存モデルとして残した契機である。

ベルシェと BitGo は、本エントリー最終編集時点でもビットコイン保管およびデジタル資産インフラ領域で活動を続けている。
