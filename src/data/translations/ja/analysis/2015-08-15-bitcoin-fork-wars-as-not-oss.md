---
title: "ビットコインのフォーク戦争はオープンソースの話ではない — サトシが残した真空、上に乗った金、縛る三層"
date: 2015-08-15T00:00:00Z
type: "analysis"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Bitcoin_scalability_problem"
author: "Bitcoin Institute"
participants:
  - name: "Mike Hearn"
    slug: "mike-hearn"
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
  - name: "Wladimir van der Laan"
    slug: "wladimir-van-der-laan"
  - name: "Peter Todd"
    slug: "peter-todd"
  - name: "Gregory Maxwell"
    slug: "gregory-maxwell"
  - name: "Adam Back"
    slug: "adam-back"
  - name: "Roger Ver"
    slug: "roger-ver"
  - name: "Jihan Wu"
    slug: "jihan-wu"
  - name: "Mike Belshe"
    slug: "mike-belshe"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "ビットコインの 2015-2017 年フォーク戦争がアイデンティティの争奪戦になった理由 — 権威の真空、経済の重み、コードと通貨を縛る三層構造。"
isSatoshi: false
tags:
  - "block-size-war"
  - "governance"
  - "fork"
  - "scaling"
  - "bitcoin-core"
  - "analysis"
secondarySources:
  - name: "Wikipedia — Bitcoin Core"
    url: "https://en.wikipedia.org/wiki/Bitcoin_Core"
  - name: "Wikipedia — Bitcoin Cash"
    url: "https://en.wikipedia.org/wiki/Bitcoin_Cash"
  - name: "Wikipedia — SegWit2x"
    url: "https://en.wikipedia.org/wiki/SegWit2x"
  - name: "Wikipedia — Blockstream"
    url: "https://en.wikipedia.org/wiki/Blockstream"
  - name: "Wikipedia — Bitmain"
    url: "https://en.wikipedia.org/wiki/Bitmain"
relatedEntries:
  - analysis/2014-03-19-bitcoin-core-rebrand-authority-effects
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
  - aftermath/2025-02-21-mike-hearn-coingeek-retrospective
  - aftermath/2016-01-14-mike-hearn-resolution-bitcoin-experiment
  - aftermath/2015-08-15-bitcoin-xt-launch
  - aftermath/2017-08-01-bitcoin-cash-fork
  - aftermath/2017-11-08-segwit2x-cancellation
translationStatus: complete
---

ビットコインの 2015-2017 年フォーク戦争は、本流チェーンに対する 4 度のハードフォーク試行 (Bitcoin XT, Bitcoin Classic, Bitcoin Unlimited, SegWit2x) と、生き残った 1 件の分岐 (ビットコインキャッシュ、2017 年 8 月 1 日) を生んだ。隣接する 2 つの考察記事が、これらの出来事が何であり、改称がそれらに何をしたかを扱っている: [ビットコインの家系図](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/) は出来事の連鎖を記録し、[Bitcoin Core 改称が権威構造に与えた影響の考察](/BitcoinArchive/ja/entries/analysis/2014-03-19-bitcoin-core-rebrand-authority-effects/) は 2014 年の改称が導入した語彙の非対称を読む。本記事は、その 2 つの記事が直接扱っていない第三の問いを取り上げる: なぜこれらの出来事は、それぞれが普通のオープンソースの意見対立としてではなく、政治的・経済的な争奪戦として展開したのか。

ここで提示する読み筋は構造的なものである。2014-2017 年のビットコインに揃っていた 3 つの条件 — 指名された権威の真空、規則決定の上に積み上がった経済的重み、そしてプロトコル・ソフトウェア・稼働中の通貨ネットワークという三層分離 — が組み合わさって、鍵となるパラメーターをめぐる対立がソフトウェアの問題にとどまることを構造的に不可能にした。改称考察が記録する語彙の非対称は、これらの条件が表現に至るための語彙的な道具である。本記事が読むのは、その下にある条件そのものである。

## 1. 2011 年 4 月以後の真空 (結果ではなく前提)

しばしば見られる読み筋は、サトシ離脱を戦争の感情的形状の中に置く — 「あれだけ揉めていたのだから、いなくなるのも当然だ」 という型である。年表は逆を語る:

| 日付 | 出来事 |
|---|---|
| 2011 年 4 月 23 日 | [マイク・ハーン宛のサトシ最終メール](/BitcoinArchive/ja/entries/correspondence/mike-hearn/holding-coins/2011-04-23-satoshi-to-hearn-moved-on/) |
| 2011 年 4 月 26 日 | [ギャビン・アンドレセン宛のサトシ最終メール](/BitcoinArchive/ja/entries/aftermath/2011-04-26-satoshi-final-known-email/) (警告鍵の引き渡し) |
| 2011-2014 年 | アンドレセンと小さな集団がコードを保守、大きな対立はなし |
| 2013 年 12 月 16 日 | [Bitcoin Core 改称マージ](/BitcoinArchive/ja/entries/analysis/2014-03-19-bitcoin-core-rebrand-authority-effects/) |
| 2015 年 8 月 15 日 | [Bitcoin XT 立ち上げ](/BitcoinArchive/ja/entries/aftermath/2015-08-15-bitcoin-xt-launch/) — 戦争の公的局面の始まり |
| 2017 年 8 月 1 日 | [ビットコインキャッシュ分岐](/BitcoinArchive/ja/entries/aftermath/2017-08-01-bitcoin-cash-fork/) |

サトシは公的フォーク局面の幕開けより 4 年以上前に離脱している。対立が彼を追い出したのではない。彼の不在が既に作っていた構造の真空のなかで、対立は起きた。(サトシ離脱の*理由*については、2010 年末の BitcoinTalk 上の宣教的圧力を扱う [ハーン 2025 年 CoinGeek 回顧](/BitcoinArchive/ja/entries/aftermath/2025-02-21-mike-hearn-coingeek-retrospective/) を参照。その動因は 2014 年以後に起きたこととは別の力学である。)

公的な後継者宣言はなかった。プロジェクトを保有する法人もなかった。形式的な引き渡し文書もなかった。後年のハーンの説明によれば、引き渡しに最も近かったものは場当たり的な手続きだった:

> 「サトシが去ったとき、彼は私たちが今 Bitcoin Core と呼んでいるプログラムの手綱を、初期の貢献者であるギャビン・アンドレセンに渡した。…… ただ一つだけ困ったことに、サトシは実際にはギャビンにその仕事を引き受けてもらえるかと尋ねたことがなく、しかも実のところギャビンはそれを望んでいなかった」
>
> — マイク・ハーン、[「ビットコイン実験の決着」](/BitcoinArchive/ja/entries/aftermath/2016-01-14-mike-hearn-resolution-bitcoin-experiment/) (2016 年 1 月 14 日)

[アンドレセンのリードメンテナ就任表明](/BitcoinArchive/ja/entries/aftermath/2010-12-19-andresen-lead-maintainer-announcement/) (2010 年 12 月 19 日) はサトシの沈黙より 4 か月前のもので、対象はコードベースであってプロトコルではなかった。2011 年以後、コードベースには保守者がいたが、プロトコルには誰もいなかった。ビットコイン財団 (2012 年 9 月設立) はその役割を引き受けようとしたが、[2015 年までに財政的に破綻している](https://coinjournal.net/news/recently-elected-board-member-olivier-janssens-reveals-all-bitcoin-foundation-broke-gavin-seems-to-confirm/)。コードベースの保守者 (アンドレセン、続いて 2014 年 4 月以降の [ヴラディミール・ヴァン・デア・ラーン](/BitcoinArchive/ja/participants/wladimir-van-der-laan/)) は事実上の決定者だったが、その権威は慣習的なものであって、指名されたものではなかった。

これがあとで起きたすべての前提である。語彙の非対称、経済的重み、三層構造は、この真空に流れ込んだものである。

## 2. 2014-2015 年までに上に積み上がった金

[Bitcoin XT 立ち上げ (2015 年 8 月 15 日)](/BitcoinArchive/ja/entries/aftermath/2015-08-15-bitcoin-xt-launch/) の頃には、ビットコインの経済的表面積は趣味プロジェクトと呼べる規模を遥かに超えていた:

- **価格**。2015 年 8 月でおよそ 230 ドル、2013 年末には 1,000 ドル超のピークがあった。
- **採掘**。ASIC 機材が GPU・CPU 採掘を駆逐していた。[Bitmain](https://en.wikipedia.org/wiki/Bitmain) (2013 年 10 月設立、共同設立者 [ジハン・ウー](/BitcoinArchive/ja/participants/jihan-wu/)) が支配的な ASIC 製造業者だった。採掘は資本集約的・地理的に集約された産業活動になっており、規則の継続性に経済的に依存していた。
- **取引所と保管**。主要取引所 (Bitfinex, Coinbase, Kraken) は機関投資家の資金フローを扱っていた。保管サービスは大きな残高を守っていた。BitGo (2013 年設立、最高経営責任者 [マイク・ベルシェ](/BitcoinArchive/ja/participants/mike-belshe/)、後の 2017 年 [SegWit2x](/BitcoinArchive/ja/entries/aftermath/2017-11-08-segwit2x-cancellation/) 署名者の一人) が代表例。
- **保守側の企業圏**。[Blockstream](https://en.wikipedia.org/wiki/Blockstream) (2014 年 11 月設立、[アダム・バック](/BitcoinArchive/ja/participants/adam-back/)、[グレゴリー・マクスウェル](/BitcoinArchive/ja/participants/gregory-maxwell/)、ピーター・ウィレ、ホルヘ・ティモン、マット・コラロ等が共同設立) は複数の Bitcoin Core 貢献者を雇用し、研究と周辺ツール開発 (サイドチェーン、ライトニング、Liquid) を進めていた。
- **拡大派の企業圏**。[ロジャー・ヴァー](/BitcoinArchive/ja/participants/roger-ver/) の bitcoin.com は拡大派と整合した最も目立つ商業的拠点だった。Bitmain のハッシュレート占有はオンチェーン拡張と商業的に整合していた。後に [nChain](/BitcoinArchive/ja/entries/aftermath/2018-11-15-bitcoin-sv-fork/) (カルヴィン・エアー、クレイグ・ライト) が BSV 分岐の企業基盤を提供する。

これらの条件のもとで鍵となるパラメーター (ブロックサイズ、手数料市場、ソフトフォーク有効化方針) が議論されると、「純粋な技術判断」 は収益、ハッシュレートの整合、資産評価から切り離せなくなる。各陣営は一貫した技術的論拠を提示でき、しかもその一貫した技術的論拠は商業的立場と整合していた。この整合自体は失格の理由ではない — それは、プロジェクトが経済的に大きくなったときに起きることである。ただし、この整合は、「参加者は技術的に正しいことだけを議論していた」 という前提を取り去る。

## 3. 縛る三つの層

ここがビットコインを普通のオープンソースプロジェクトと分ける概念上の論点である。「ビットコイン」 という名前を 3 つのものが共有している:

| 層 | 中身 |
|---|---|
| プロトコル | 合意規則 — ブロック形式、署名検証、最長チェーン規則、2,100 万通貨上限 |
| ソフトウェア | リファレンス実装 (Bitcoin Core)、およびプロトコルに合致するあらゆる代替実装 (XT, Classic, Unlimited, ABC 等) |
| ネットワーク・通貨 | その規則に従って稼働する生きたチェーン — その規則を採用したすべてのノード、マイナー、取引所、保有者、決済事業者 |

普通のオープンソースでは三層は重なる: プロジェクト、ソフトウェア、配備物が同延的である。コードベースをフォークすれば代替実装が生まれるだけで、それ以外は何も変わらない。Spring のフォークは Spring のフォークである。Ruby のフォークは Ruby のフォークである。ブランドと利用者基盤は移らない。本家は本家のままで、フォークは自分で築ける範囲の利用者から始める。

ビットコインでは三層は原理的には分離可能でも、実態としては結合している。プロトコルはノードが受け入れるものによって定義され、ソフトウェアはそのプロトコルを符号化し、生きた通貨は規則が共同で維持されている場所で稼働する。コードベースをフォークして異なる規則で動かすことは、生きた通貨ネットワークから出ることを意味する — 既存チェーンのハッシュレート、取引所上場、アドレス体系、ティッカー、ブランドへの接続を失う。同じ規則で生きたネットワークに留まることは、2014 年の語彙では「Bitcoin Core」 か互換実装になることを意味する。普通のオープンソースには、本家の選択から離れながらブランドと利用者基盤を保持するフォーク、という類比物が存在しない。意見対立のコストは異常に高い。

これが、2015-2017 年の各フォークが「自分こそビットコインだ」 と主張する必要があった理由である。[Bitcoin XT](/BitcoinArchive/ja/entries/aftermath/2015-08-15-bitcoin-xt-launch/)、Bitcoin Classic、Bitcoin Unlimited、[ビットコインキャッシュ](/BitcoinArchive/ja/entries/aftermath/2017-08-01-bitcoin-cash-fork/) のすべてがそうした。これは虚栄ではない。流動性、ハッシュレート、取引所上場、ブランド認知 — それなしにチェーンは自立できない — を引き寄せるための構造的要件だった。「ビットコイン」 という名前を公に手放したフォークは、利用者ゼロから出発することになる。

## 4. 三つの条件の組み合わせ

§1-§3 はそれぞれ単独では部分的にしか説明しない。真空単独ではリーダーシップ問題が生じる。金単独では普通のロビー活動が生じる。三層構造単独ではプロトコル ≠ ソフトウェア ≠ ネットワークという技術的観察が生まれる。三つが積み重なると、2015-2017 年戦争のあの特有の形状が生まれる:

- 真空は、ビットコインを代表して問題を解決する権限を持つ機関がない、という意味になる。
- 金は、各陣営が利害を持ち、技術判断と商業的立場を完全に分けることができない、という意味になる。
- 三層構造は、技術的フォークが同時にアイデンティティのフォークでもある、という意味になる — 規則について意見が対立することは、何をビットコインと呼ぶかを争うことになる。

[改称考察](/BitcoinArchive/ja/entries/analysis/2014-03-19-bitcoin-core-rebrand-authority-effects/) が記録する語彙の非対称は、これらの条件が手を伸ばした語彙的な道具である。2014 年の「Bitcoin Core」 という選択は、利用可能な語彙を一方向に重みづけたが、2014 年に別の名前が選ばれていたとしても、下にある構造は変わらなかったはずである。本流クライアントが何と呼ばれていたとしても、争われる対象は依然として「ビットコイン」 という名前だっただろう — なぜなら、ネットワーク、ハッシュレート、金がそこに乗っていたからである。ハーンの [2016 年離脱エッセイ](/BitcoinArchive/ja/entries/aftermath/2016-01-14-mike-hearn-resolution-bitcoin-experiment/) の枠付け (「ビットコインは失敗した」 であって「拡大派は失敗した」 ではない) も、BCH・BSV 陣営の「本物のビットコイン」 という言い回しも、文体的な大げさではない。それらは構造が参加者に言わせていることである。

これは、普通のオープンソースから来た観察者が当惑する戦争の特徴も説明する: 中立的に負ける道がなかった。普通のフォークでは、負けた側は単に小さな規模で自分のプロジェクトを動かして、それで暮らしを続ける。ビットコインでは、負けた側は規則を完全に放棄するか、または、本流主流ではビットコインと呼ぶことができないチェーンの上で、ハッシュレート占有・取引所上場・別ティッカーを引き受けるか、どちらかしかなかった。2015-2017 年の 4 件のハードフォーク試行はいずれも本来のティッカーを確保できなかった。この帰結は構造的な読みと整合する: 争いは規則だけではなく、名前とネットワークをめぐるものだった。

## 5. 残された論点

3 つの対抗読みを明示しておく。

**(a) 「フォークは技術的論拠で負けた」**。BIP 101 の 8 MB 倍化スケジュール、BCH の 8 MB 初期上限、BSV の 128 MB 上限は、それぞれ技術的に独自の問題を抱えていた — 採掘集中化リスク、伝播遅延、ノード可動性の懸念は実在し、無視できない論点だった、という立場は擁護可能である。この読みは §1-§4 と矛盾しない。本記事の構造的条件は、どちらの側が技術的に正しかったかを決定したわけではない。技術的にどちらが正しいにせよ、争いはアイデンティティ争奪戦として展開する、ということを決めただけである。両者の読みは同時に真でありうる。

**(b) 「保守側は Blockstream の作戦だった」**。拡大派でしばしば主張される読みでは、Blockstream の研究計画 (SegWit、ライトニング、オフチェーン層) が本流側の立場を駆動しており、これは企業による占拠だった、ということになる。文書的記録は*雇用の事実* を支持する — 複数の Bitcoin Core 貢献者は Blockstream 従業員だった — が、それ自体では*占拠主張* を支持しない。技術的立場は、書き手が報酬を受けているからといって無効になるわけではない。同じ懐疑は鏡像にも適用される: Bitmain のハッシュレート占有と bitcoin.com のブランディングは、拡大ブロックという商業的利害と整合していた。どちら側の立場も資金によって無効化されるわけではないし、同時に、どちら側の立場も資金から自由ではなかった。

**(c) 「ビットコインはただのオープンソースで、フォーク = 離脱という枠付け自体が間違っている」**。この読みでは、すべてのフォークは普通のソフトウェアフォークと同じであり、占有を獲得したものは技術判断が持ちこたえたものである、ということになる。この読みは内的に一貫しており、初めてこの話題に触れるソフトウェア技術者にとって最も自然に響くものである。ただし、参加者自身が — [2016 年に書いたハーン](/BitcoinArchive/ja/entries/aftermath/2016-01-14-mike-hearn-resolution-bitcoin-experiment/) と [2025 年に書いたハーン](/BitcoinArchive/ja/entries/aftermath/2025-02-21-mike-hearn-coingeek-retrospective/) を含む — これらの出来事を、ソフトウェアの観点ではなくアイデンティティ・権威・名前の観点で繰り返し枠付けたことを、この読みは説明できない。参加者自身の枠付けは文書的記録の一部である。それを単なる混乱として片づけねばならない読みは、それを証拠として受け止める読みより仕事をしていない。

§1-§4 の読みはひとつの読みとして提示するものである。主張するのは次の一点だけである — 参加者自身の枠付け (権威・名前・真空・アイデンティティ) は、コードの上に乗った実在の荷重を記述したものであって、普通のオープンソースの意見対立を誤認したものではない。

*[編者注：本記事は 2014-2017 年のビットコインに揃っていた 3 つの構造的条件を集め、それらを系として読む。特定の人物の動機についての主張は意図的に避けた。主張するのは構造であって、心理ではない。語彙の軸については [Bitcoin Core 改称が権威構造に与えた影響の考察](/BitcoinArchive/ja/entries/analysis/2014-03-19-bitcoin-core-rebrand-authority-effects/)、出来事の連鎖については [ビットコインの家系図](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/) を参照。]*
