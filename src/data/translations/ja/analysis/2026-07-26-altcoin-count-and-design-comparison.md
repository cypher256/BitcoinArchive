---
title: "どの通貨の価格が上がるのか ― 12 チェーンの設計文書は何と書いているか"
date: 2026-07-26T00:00:00Z
type: "analysis"
source: "coingecko"
sourceUrl: "https://www.coingecko.com/"
sourceNote: "上の出所が供給するのは末尾の節の各社の数である。いずれも 2026 年 7 月 26 日に読み取った現在値で、日々変わり、しかも互いに置き換えられない。数える対象が社ごとに違うからである。それ以外の箇所は、記述のそばに典拠を置いている。"
author: "Bitcoin Institute"
participants:
  - name: "Vitalik Buterin"
    slug: "vitalik-buterin"
  - name: "Charlie Lee"
    slug: "charlie-lee"
  - name: "Charles Hoskinson"
    slug: "charles-hoskinson"
  - name: "Anatoly Yakovenko"
    slug: "anatoly-yakovenko"
  - name: "Jeremy Allaire"
    slug: "jeremy-allaire"
  - name: "Riccardo Spagni"
    slug: "riccardo-spagni"
  - name: "Jed McCaleb"
    slug: "jed-mccaleb"
  - name: "Jackson Palmer"
    slug: "jackson-palmer"
description: "12 チェーンを、その発行規則が 1 単位の価格について何を決め、何には手が届かないかで並べた。"
isSatoshi: false
tags:
  - "analysis"
  - "altcoin"
  - "comparison"
  - "stablecoin"
  - "governance"
  - "memecoin"
secondarySources:
  - name: "Benzinga — 供給の設定値は価格を決めないとするビリー・マーカスの発言 (2021 年 4 月)"
    url: "https://www.benzinga.com/markets/cryptocurrency/21/04/20675276/dogecoin-creator-defends-meme-cryptos-supply-dont-matter-for-price"
  - name: "International Business Times UK — ドージコインは何のためかを語ったジャクソン・パーマー (2014 年 12 月 8 日)"
    url: "https://www.ibtimes.co.uk/jackson-palmer-year-dogecoin-jar-nutella-all-i-have-show-1478649"
  - name: "FXStreet — ビットコインの逃避先としての性格と資本規制についてのアレールの発言 (CNBC 取材、2019 年 8 月 20 日)"
    url: "https://www.fxstreet.com/amp/cryptocurrencies/news/circle-ceo-optimistic-about-bitcoin-safe-haven-status-despite-recent-volatility-201908201330"
  - name: "CoinGecko — 全体チャート (同じ日に別の数)"
    url: "https://www.coingecko.com/en/global-charts"
    note: "1,509 取引所にまたがる 1 万 6,775 種。2026 年 7 月 26 日に読み取り。"
  - name: "CoinMarketCap — トップページの資産数"
    url: "https://coinmarketcap.com/"
    note: "5,477 万。2026 年 7 月 26 日に読み取り。"
  - name: "CoinMarketCap — 収録方針 (数が測定ではなく方針であること)"
    url: "https://coinmarketcap.com/methodology/"
  - name: "CoinMarketCap — 全体指標のチャート (active_cryptocurrencies: 2,941、2024 年 10 月 11 日)"
    url: "https://coinmarketcap.com/charts/"
  - name: "The Cryptonomist — pump.fun の累計発行数 (2026 年 6 月 10 日)"
    url: "https://en.cryptonomist.ch/2026/06/10/pump-fun-solana-token-launches/"
  - name: "CoinGecko Research — pump.fun のトークン寿命の調査"
    url: "https://www.coingecko.com/research/publications/average-lifespan-of-pumpfun-tokens"
  - name: "arXiv — ローンチパッド発行トークンの生存分析 (2026 年)"
    url: "https://arxiv.org/pdf/2607.02823"
  - name: "CoinDesk — Satis Group による ICO 品質評価報告についての記事 (2018 年 7 月 12 日)"
    url: "https://www.coindesk.com/markets/2018/07/12/report-more-than-three-quarters-of-icos-were-scams"
  - name: "Boston College — 「Digital Tulips? Returns to Investors in Initial Coin Offerings」"
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3182169"
  - name: "99Bitcoins — 停止した通貨の一覧 (DeadCoins.com の後継)"
    url: "https://99bitcoins.com/deadcoins/"
  - name: "$TRUMP 公式サイト (関係二社が 80% を保有すると明記)"
    url: "https://www.gettrumpmemes.com/"
  - name: "The American Presidency Project — コインを告知した Truth Social の投稿 (2025 年 1 月 17 日)"
    url: "https://www.presidency.ucsb.edu/documents/truth-social-posts-january-17-2025"
  - name: "CoinGecko — OFFICIAL TRUMP の価格と供給データ"
    url: "https://www.coingecko.com/en/coins/official-trump"
  - name: "SEC — ミームコインについての職員声明 (2025 年 2 月 27 日)"
    url: "https://www.sec.gov/newsroom/speeches-statements/staff-statement-meme-coins"
  - name: "Chainalysis — $TRUMP 保有者の損益分布"
    url: "https://www.chainalysis.com/blog/trump-memecoin-analysis/"
  - name: "DL News — 暴落後にミレイ大統領が LIBRA から距離を置く (2025 年 2 月)"
    url: "https://www.dlnews.com/articles/markets/milei-backs-away-from-libra-memecoin-after-90-crash-not-aware-of-the-details/"
  - name: "CryptoSlate — MELANIA の内部者売却と価格崩壊"
    url: "https://cryptoslate.com/insights/melania-insiders-dump-35m-in-tokens-as-price-crashes-over-98/"
  - name: "JPYC — 資金移動業者の登録と円建てステーブルコインの裏付け資産について (2025 年 8 月)"
    url: "https://prtimes.jp/main/html/rd/p/000000274.000054018.html"
  - name: "The Japan Times — 初の円連動ステーブルコイン JPYC が発行される (2025 年 10 月 27 日)"
    url: "https://www.japantimes.co.jp/business/2025/10/27/tech/jpyc-first-yen-pegged-stablecoin/"
  - name: "CNN — かつて「薄い空気の上」と評したビットコインの会議に登壇 (2024 年 7 月 27 日)"
    url: "https://www.cnn.com/2024/07/27/politics/donald-trump-bitcoin-cryptocurrency/index.html"
  - name: "CoinDesk — ナッシュビルの Bitcoin 2024 における戦略準備の表明 (2024 年 7 月 27 日)"
    url: "https://www.coindesk.com/policy/2024/07/27/if-we-dont-do-it-china-will-trumps-crypto-embrace-tightens-as-he-speaks-at-bitcoin-event-in-nashville"
  - name: "Forbes — ミレイはアルゼンチンをビットコインへ動かしていない (2024 年 6 月 2 日)"
    url: "https://www.forbes.com/sites/digital-assets/2024/06/02/milei-is-not-moving-argentina-towards-bitcoin/"
  - name: "SEC — 開示なしの暗号資産宣伝についてキム・カーダシアンを提訴・和解 (2022 年 10 月 3 日)"
    url: "https://www.sec.gov/newsroom/press-releases/2022-183"
  - name: "arXiv — pump.fun の到達率に関する最初の大規模調査"
    url: "https://arxiv.org/pdf/2602.14860"
  - name: "CoinRanking — 停止した通貨の一覧 (独立に運用される別の一覧)"
    url: "https://coinranking.com/coins/dead"
  - name: "Forbes — トークン公開と時価総額 120 億ドル超え (2025 年 1 月 19 日)"
    url: "https://www.forbes.com/sites/tylerroush/2025/01/19/donald-trump-launches-trump-meme-coin-token-exceeds-12-billion-market-cap/"
  - name: "CoinDesk — 発行者側が取引手数料で 3 億 2,000 万ドルを得た (2025 年 5 月 9 日)"
    url: "https://www.coindesk.com/business/2025/05/09/trump-family-profited-usd320m-on-memecoin-despite-87-decline-since-day-one"
  - name: "Fortune — 保有者の損失と 6 億 3,600 万ドルの資産公開 (2026 年 7 月 7 日)"
    url: "https://fortune.com/2026/07/07/donald-trump-meme-coin-world-liberty-financial-finance-politics/"
  - name: "CNBC — ミームコインの購入者について語った SEC 委員ヘスター・パース (2025 年 5 月 30 日)"
    url: "https://www.cnbc.com/2025/05/30/trump-and-other-meme-coins-wont-be-protected-by-sec-hester-peirce.html"
  - name: "Polkadot 公式サポート ― 21 億 DOT の上限と段階的発行予定表 (Referendum 1710)"
    url: "https://support.polkadot.network/support/solutions/articles/65000173907-what-is-the-total-supply-of-dot-"
  - name: "The Block — 中央アフリカ共和国のトークンの価格崩壊"
    url: "https://www.theblock.co/post/339923/central-african-republic-car-memecoin-price-collapse"
relatedEntries:
  - analysis/2008-10-31-bitcoin-digital-gold-structural-features
  - analysis/2008-10-31-fixed-supply-vs-adjustable-money
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
  - aftermath/2011-10-13-charlie-lee-biography
  - aftermath/2013-01-01-charles-hoskinson-biography
  - aftermath/2017-01-01-anatoly-yakovenko-biography
  - aftermath/2018-09-26-jeremy-allaire-biography
  - aftermath/2014-04-18-riccardo-spagni-biography
  - aftermath/2010-07-18-jed-mccaleb-biography
  - aftermath/2012-09-01-chris-larsen-biography
  - aftermath/2015-04-01-brad-garlinghouse-biography
  - aftermath/2015-04-24-jackson-palmer-biography
  - aftermath/2011-09-01-vitalik-buterin-biography
  - analysis/2008-10-31-bitcoin-electronic-cash-vs-digital-gold
  - aftermath/2025-03-06-us-strategic-bitcoin-reserve
  - currency/2026-07-27-bitcoin-cash-currency-overview
  - currency/2026-07-27-bitcoin-sv-currency-overview
  - currency/2026-07-27-cardano-currency-overview
  - currency/2026-07-27-dogecoin-currency-overview
  - currency/2026-07-27-ethereum-currency-overview
  - currency/2026-07-27-litecoin-currency-overview
  - currency/2026-07-27-monero-currency-overview
  - currency/2026-07-27-polkadot-currency-overview
  - currency/2026-07-27-solana-currency-overview
  - currency/2026-07-27-usdc-currency-overview
  - currency/2026-07-27-usdt-currency-overview
  - currency/2026-07-27-xrp-currency-overview
  - analysis/2026-07-28-bitcoin-nation-state-policy-history
  - analysis/2026-08-02-ai-crypto-investment-survey
inlineLinkKeywords:
  - "アルトコインの数"
  - "アルトコイン比較"
  - "消滅した通貨"
  - "ミームコイン"
translationStatus: complete
---

![暗い背景の図解。長さの異なる四本の横棒がそれぞれ右側に別々の数え方の名前を添えて並び、その右に広い口から細い先へすぼまる漏斗、さらに右に三種類の濃さの小さな円の格子、最下部に三つの説明枠が並ぶ](/BitcoinArchive/images/analysis/2026-07-26-altcoin-count-and-design-comparison-hero.png)

この通貨は来年、いまより多くの円と交換できるのか。どのチェーンも、誰かが買うより何年も前に、その答えの一部を自分の規則に書き込んでいる。ただし書かれているのは、問いよりも狭い部分だけである。

[なぜその発行規則を選んだか](/BitcoinArchive/ja/entries/analysis/2008-10-31-fixed-supply-vs-adjustable-money/)は 1998 年から続く議論であり、[そもそもビットコインになぜ価値があるのか](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-digital-gold-structural-features/)は構造の議論であり、[その希少性がなぜ現金としての用途を削ったのか](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-electronic-cash-vs-digital-gold/)は、後発のすべての設計が答えねばならなかった緊張である。三つとも、買い手が実際に抱く、もっと素っ気ない問いの上に乗っている。

## 1. 設計が価格にできること、できないこと

1 単位の価格は、需要が供給より速く伸びれば上がる。発行規則が決めているのは、この二つのうち片方だけだ。供給が毎年どれだけ増えるか。それを何年も前に、コードの中で確定させる。もう片方には手が届かない。つまり設計が決めるのは、買いが越えるべき高さであって、その買いが来るかどうかではない。

だから買い手の問いは二つに割れる。高さはどれだけか。そして買いはそれより速く伸びているか。答えが書き留められているのは前者だけである。以下で「買いの勢いが一定なら」と言うのは、入ってくる資金の流れがいまの速さのまま続く、という意味だ。すでに投じられた総額が凍結される、という意味ではない。

権限としては狭い。貨幣の設計が握っているのはそれだけである。

しかし、どの規則を**選ぶか**は狭い話ではない。それは、この通貨が自分を何だと思っているかの表明になる。上限は「この単位を薄めてはならない」と言う。使用量に連動する焼却は「供給はネットワークに従うべきだ」と言う。釘付けは「単位は動くべきでない」と言う。毎年一定の発行は「これは持つものではなく使うものだ」と言う。

その立場は六つに分かれ、それぞれが違う高さを設定する。[固定供給と自動調整の比較](/BitcoinArchive/ja/entries/analysis/2008-10-31-fixed-supply-vs-adjustable-money/)は、各企画がその立場を採ったときにどの失敗を避けようとしたのかを、1998 年の b-money から[イーサリアム](/BitcoinArchive/ja/entries/currency/2026-07-27-ethereum-currency-overview/)のマージまでたどっている。

| その通貨が自分を何だと考えているか | 規則がそれをどう言うか | 該当 | 越えるべき高さ — 供給が毎年どれだけ増えるか | 買いの勢いが一定なら価格はどちらへ |
|---|---|---|---|---|
| **希少 — 薄められてはならない** | 上限を置き、発行はそこへ向けて減衰する | ビットコイン、[ライトコイン](/BitcoinArchive/ja/entries/currency/2026-07-27-litecoin-currency-overview/)、[BCH](/BitcoinArchive/ja/entries/currency/2026-07-27-bitcoin-cash-currency-overview/)、[BSV](/BitcoinArchive/ja/entries/currency/2026-07-27-bitcoin-sv-currency-overview/)、[カルダノ](/BitcoinArchive/ja/entries/currency/2026-07-27-cardano-currency-overview/)、[ポルカドット](/BitcoinArchive/ja/entries/currency/2026-07-27-polkadot-currency-overview/) | 段階的に落ちて、上限へ向かう | **上がる。** 段を追うごとに越えるべき高さが下がるため、同じ買いでも余力が増える |
| **希少、かつ一度に全量を発行** | 公開時に供給の全量を生成 | [XRP](/BitcoinArchive/ja/entries/currency/2026-07-27-xrp-currency-overview/) | ゼロ。走らせる計画がもう残っていない | **上がる。** 越えるべき高さがそもそも無い |
| **自動調整 — 供給はネットワークに従う** | 発行に手数料の焼却を足し、供給は縮みうる | [イーサリアム](/BitcoinArchive/ja/entries/currency/2026-07-27-ethereum-currency-overview/) | 使用量が決める。焼却が発行を上回れば負になる | **どちらにも。** チェーンがどれだけ使われているか次第 |
| **公開された曲線に沿った自動調整** | 逓減する率、またはゼロにならない恒久的な末尾発行 | [ソラナ](/BitcoinArchive/ja/entries/currency/2026-07-27-solana-currency-overview/)、[モネロ](/BitcoinArchive/ja/entries/currency/2026-07-27-monero-currency-overview/) | 下がり続けるが、ゼロにはならない | **上がる。** ただし縮み続ける高さを、買いが越えたときだけ |
| **持つ資産ではなく、使う通貨** | 一定の枚数を永久に発行 | [ドージコイン](/BitcoinArchive/ja/entries/currency/2026-07-27-dogecoin-currency-overview/) | 増え続ける母数に対して年 52.56 億枚。約 3.5% で、下がっていく | **上がる。** 規則が一度も変わらないまま高さが落ちていく |
| **釘付け — 動いてはならない** | 1 ドルを保つよう供給が伸縮する | [USDT](/BitcoinArchive/ja/entries/currency/2026-07-27-usdt-currency-overview/)、[USDC](/BitcoinArchive/ja/entries/currency/2026-07-27-usdc-currency-overview/) | 発行体の準備資産次第 | **価格は動かない。** 発行体に届いた資金は、価格ではなく単位数を増やす |

一行目と五行目は、同じ観察を両端から見たものである。[電子キャッシュの読み](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-electronic-cash-vs-digital-gold/)は、ビットコイン自身の希少性が現金としての用途をどう削っていったかをたどっている。今日の昼食に、明日はもっと高いものを払う人はいない。金にした性質が、そのまま使う理由を奪った。**使われること**を先に置く設計はそこに答えねばならず、その答えが「動き続ける供給」になる。ドージコインが永久に発行するのは、持つことを勝ち筋にしないためである。イーサリアムが発行を使用量に結びつけるのは、計画ではなくネットワークの活動に数を決めさせるためである。上の表で自動調整と使用重視は別々の思想ではない。希少性の設計が取った取引の、現金の側を取っただけの、一つの立場である。

この二つの列から、二つのことが出てくる。

**高さこそが、設計の寄与のすべてである。** それは数字であり、公開されており、誰かが買うより何年も前に確定している。価格がどちらへ行くかの残りは、比較の反対側にある。

**どの設計も、買いを連れてはこない。** 半減は買い手を一人も増やさない。焼却も上限も増やさない。いずれも越えるべき高さを下げるだけで、それを越える当のものは供給しない。右端の列が「買いの勢いが一定なら」と断っているのはそのためだ。重さを負っているのはこの条件のほうで、発行予定表のどの行もそれを保証しない。

ドル連動通貨は、価格を比較から外してしまうことで継ぎ目を見せる。USDC を買っても価格は動かない。単位が一つ増えるだけだ。預けられたドルの額は絶えず動き、1 単位の価格は動かない。設計上そうなっている。

ここで、広く見られる二つの読み方が崩れる。

**「永久にインフレ」は「一定率で希釈され続ける」を意味しない。** ドージコインは毎年同じ 52.56 億単位を、毎年増える母数に対して発行する。だから規則が一度も変わらないまま、新規発行が供給に占める割合は毎年落ちていく。希釈率を一定に保つには枚数ではなく割合を目標に置く必要があり、それを持っていたチェーンはもう持っていない。ポルカドットは年約 10% の目標を掲げていたが、自分のトークン保有者の投票がそれを廃した。2026 年 1 月に発効した Referendum 1710 は供給に 21 億 DOT の上限を置き、目標の代わりに、二年ごとに**残余**供給の 13.14% を発行する段階制を敷いた。最初の段は 2026 年 3 月 14 日である。「規則を変えられるのは誰か」という §2 の最後の列が実際に使われた、この表で最も明快な事例だ。

**上限は単位数の床であって、価格の床ではない。** ビットコインの上限が保証するのは分母が増えるのを止めることであり、分子については何も保証しない。上限が実際に取り除くのは、価値を失う特定の経路のうち「誰かの裁量で発行されること」の一つだけである。

逆向きには、恒久的に使用不能になったコインが、規則の変更なしに実質的な分母を減らす。記録された事例は[象徴的な喪失の総覧](/BitcoinArchive/ja/entries/analysis/2026-06-02-bitcoin-iconic-losses-overview/)が集めている。

1 単位の価格に一つだけできないことがあり、それがもっとも多く使われている用途でもある。通貨どうしを比べることだ。ビットコインは 2,100 万単位で頭打ちになり、XRP は公開時に 1,000 億単位を生成し、ドージコインは毎年 52.56 億単位を足す。1 兆単位が発行済みで 0.2 ドルの通貨は、100 万単位で 200 ドルの通貨より大きな資産である。「安いから伸びしろがある」はこの数字が誘う直観だが、算術はそれを支持しない。割る側の単位数は公開時に選ばれたもので、需要については何も語らないからだ。逆転にもっとも近づいた場面、すなわち 2017 年 6 月にイーサリアムがビットコインの時価総額の約 85% に達したことは、日付つきの記録とともに[フォークと隣接通貨の系譜](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/)に置いてある。

### そもそも「値が上がる」ことを意図した設計はあるのか

各設計は 1 単位の**価値**がどうなることを望むと述べているか。答えは三つに分かれる。薄められないようにする（上限のあるチェーン群）、そもそも動かさない（ドル連動通貨）、価値は自分の担当ではないとする（性能重視のチェーン群と、ドージコイン）。

この一群に欠けているのが四つ目である。**この 12 のうち、自分のコインがより高くなると論じている設計文書は一つもない。** 上限を持つ企画が論じているのは誰が発行しうるかであって、価格がどこへ向かうかではない。イーサリアムの技術文書が上限を置かない理由として挙げるのは、後から来た者への公平さである。ドル連動通貨が約束するのは値上がりの逆である。そしてドージコインの共同創設者は、その結びつきを正面から否定している。供給と価格について、この記録の中でもっとも鋭い一文である。

<!-- audit:quote-skip -->
> 新しいコインは毎日、毎時、毎分、さまざまな設定値と、優れているとかいないとか人が指させる適当な理由をつけて出てくる。そういうものは価格には関係ない。関係するのは売り買いだけだ。

ジャクソン・パーマーは、ドージコインは何のためのものかと問われて、対になる答えを返している。

<!-- audit:quote-skip -->
> ドージコインが金融の世界の土台を揺るがす日が来るか。来ない。そもそもそんな意図はなかった。

つまり値上がりの議論は、仕様書ではなく保有者の側から出ている。それはこの議論への反論ではない。希少で裁量の効かない資産は、設計者がそう言ったかどうかとは無関係に持つに値しうる。その構造版の議論は[デジタルゴールドの読み](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-digital-gold-structural-features/)にあり、[サトシ自身の生産コストの議論](/BitcoinArchive/ja/entries/analysis/2010-02-21-bitcoin-price-vs-production-cost/)は、この歴史の中で設計者が価格について直接に推論している唯一の場所である。ここで言いたいのは、二つの主張を分けて読むべきだということだ。企画の側がそう分けているのだから。

§8 のトークンは例外で、そこでは問いが裏返る。供給が公開前に発行者へ割り当てられ、手数料収入が価格の向きに関係なく発行者へ入る設計は、価値がどこへ行くかについて極めて明確な見解を持っている。ただしそれは、1 単位の価格についての見解ではない。

### 板挟みと、その下にある問い

二つの半分を合わせると、この分類は罠になる。

薄まらないよう単位を守る設計は、その単位を持つに値するものにする。そして持つに値するものは使われない。これが[電子キャッシュの読み](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-electronic-cash-vs-digital-gold/)が、ピザから決済層まで、ビットコイン自身の歴史を通してたどった機構である。

だが逆も成り立つ。単位が使えるままであるよう発行し続ける設計は、それを溜め込む理由を取り除いた設計でもある。ドージコインは安く、速く、動く。[公開の記録](/BitcoinArchive/ja/entries/aftermath/2013-12-06-dogecoin-launch/)は、その持続的な意義は技術ではなく社会的なものだと結論している。位置を保ったのは共同体と知名度によるのであって、貨幣としての設計が良い貨幣にしたからではない。ドル連動通貨がもっとも明快な事例で、膨大な量が保有されていながら、作りからして、値上がりを期待して持つ者はいない。

つまり表のそれぞれの側が、反対側の目的については失敗している。単一の目標に対する出来の悪い実装が二つあるのではない。誰も回避できずにいる取引の、二つの端である。

そこから、この比較全体が乗っている問いが出てくる。そしてこのアーカイブはそれに答えられない。これは何のためのものなのか。必要なのが支払いの利便なら、その必要はすでに満たされている。カード網は一日に何十億件も決済しているし、中央集権だからという理由で PayPal を使わない人はほとんどいない。主権の外にある貨幣への需要を正直に書けば、人々がそれを好んでいる、ではない。**自分が切られる側になるまでは必要にならず、そうなった途端に絶対的に必要になる**、である。

記録された事例が一つある。2010 年 11 月、CableGate の後に、Bank of America・Visa・MasterCard・PayPal・Western Union がそろって WikiLeaks への寄付を遮断し、収入の推定 95% が失われた。そして [2011 年 6 月、WikiLeaks はビットコインの受け取りを始めた](/BitcoinArchive/ja/entries/aftermath/2011-06-14-wikileaks-accepts-bitcoin/)。この件に利便の要素は一つもない。買われた性質は「断れる相手が存在しないこと」であり、それこそ §3 が試すものであり、既存のどの事業者にも提供できないものである。主権の内側の製品を売っている[ジェレミー・アレール](/BitcoinArchive/ja/participants/jeremy-allaire/)が、カウンターの反対側から同じ需要を述べている。

<!-- audit:quote-skip -->
> それがデジタルゴールドの命題だ。ビットコインを積み上げる機関も個人も、とりわけ資本規制への強い懸念がある地域や環境にいる個人が、そう考えていると思う。

これは「インターネットのための貨幣」より狭い需要であり、しかも条件つきである。実在し、記録もされていて、そして大多数の人にとっては大多数の日において無関係だ。

そこで居心地の悪い読みが残る。記録はそちらに傾いている。**この領域で量を動かしているのは決済の性質ではない。価格である。** このアーカイブで保有者数が最大級のコインには、決済用途がまったくない。就任式の三日前に交流サイトの投稿で告知されたトークンを約 200 万のウォレットが買い、Chainalysis はその四分の三が損失を抱えていると測っている。ビットコイン自身の、実物を買った最初の取引も、いまでは設計が働いた記録としてではなく、するべきでなかった売買として記憶されている。ドージコインの共同創設者は、供給の設定値は無関係で価格を決めるのは売り買いだけだと言う。ビットコインが引用した b-money の著者ウェイ・ダイは、その変動の大きさが日常の通貨としての適性を損なうと述べた。

同じ問いは作った側にも向けられる。そしてそこが居心地の悪いところだ。このアーカイブは動機を断定しない。誰が何を意図したかは記録にない。記録にあるのは、思想が市場で試される前に誰が何を持っていたかである。リップルの創設者たちと会社は、公開時に全量が生成された供給の大半を握っていた。カルダノは販売した引換券の 20% を IOHK・EMURGO・財団に割り当てたと、自ら公開したページに書いている。イーサリアムは公開前の販売を行い、創設者と寄稿者への配分があった。ソラナは、トークン入札の際に 11,365,067 SOL の貸付を公衆に伝えていなかったと自ら公表している。いずれの場合も、貨幣についての議論と配分の表は、同じ企画から出た二つの文書であり、貨幣がどうあるべきかを論じているのは前者だけである。

§3 の「公平な立ち上がり」の列が道徳の点数表ではなく構造の点数表なのは、そのためだ。公開前の配分を持つ創設者は、「この設計は正しいか」という問いと「この設計は自分に払うか」という問いを切り離せない。後者の答えが前者に依存しないからである。この記録の中で、その絡まりを意図的に断ち切った創設者はちょうど一人いる。[チャーリー・リー](/BitcoinArchive/ja/participants/charlie-lee/)は 2017 年 12 月に自身のライトコインをすべて売却または寄付し、理由を明言した。保有しながら発言するのは利益相反である、自分は価格に対して影響力を持ちすぎている、と。一度きりだったという事実のほうが、行為そのものより多くを語る。

つまり設計の側は貨幣がどうあるべきかの議論をしていて、市場の側はその議論にほとんど参加していない。これは議論を退ける理由にはならない。WikiLeaks の事例こそがその議論の目的であり、稀であることは現実でなくなることを意味しない。もう一つ、作る側と使う側の区別を横断する事柄が続く。誰にも奪えない資産への需要は、誰かが奪う見込みをどれだけ高く見積もるかの関数である。制度がうまく働いている場所では既存の配管で足り、その性質は抽象のままだ。働いていない場所、たとえば遮断や資本規制、購買力の 99% を失った通貨の下では、その性質だけが手に入るものになる。これは人間の本性についての主張ではない。記録が実際に示している需要曲線の形であり、同じ設計がある地域では資産構成上の物珍しさに読め、別の地域では出口に読める理由でもある。

そしてそれは、現在のもっとも奇妙な点も説明する。保有者はもはや、制度に備える個人だけではない。制度そのものが保有者になっている。[誰がビットコインを握っているのか](/BitcoinArchive/ja/entries/analysis/2026-07-09-bitcoin-ownership-map/)は、企業の準備資産・現物上場投資信託・国家準備が同じ表を登ってくる様子を記録し、同時に、コインを持つことは分散の第二層が言うプロトコルへの権威を何ら与えない、と述べている。国家は資産を買える。その資産を持つに値するものにしていた性質のほうは買えない。この区別が、十分に集中した保有と接触しても保たれるのか。それが §3 のどの行の下にもある未決の問いである。

むしろ、どんな比較表を読むときも二つを分けて読むべき理由になる。チェーンが何であろうとして作られたかは、なぜ誰かがそれを買ったかを説明しない。

## 2. 12 のチェーンは実際に何で分かれているか
このアーカイブに繰り返し現れる、ビットコイン以外の 12 チェーンを、ビットコインを基準行として並べる。供給はここでは六つの軸の一つとして並ぶ。発行設計そのものを 15 通貨にわたって見るなら[固定供給と自動調整の比較](/BitcoinArchive/ja/entries/analysis/2008-10-31-fixed-supply-vs-adjustable-money/)へ。

| チェーン | 供給 | 合意形成 | 初期配分 | 台帳の可視性 | 規則を変えられるのは誰か |
|---|---|---|---|---|---|
| **ビットコイン** | 2,100 万枚の上限 | プルーフ・オブ・ワーク | ブロック 1 から採掘、事前配分なし | 公開・仮名 | ノード運用者・マイナー・寄稿者のゆるやかな合意。主体は存在しない |
| **[ライトコイン](/BitcoinArchive/ja/entries/currency/2026-07-27-litecoin-currency-overview/)** | 8,400 万枚の上限 | プルーフ・オブ・ワーク (Scrypt) | 採掘。事前配分は 150 枚のみ | 公開 | 寄稿者。創設者は公に活動中 |
| **[ドージコイン](/BitcoinArchive/ja/entries/currency/2026-07-27-dogecoin-currency-overview/)** | 上限なし。年 52.56 億枚を永久に | プルーフ・オブ・ワーク、ライトコインと結合採掘 | 採掘 | 公開 | 寄稿者。共同創設者は公に発言 |
| **[ビットコインキャッシュ](/BitcoinArchive/ja/entries/currency/2026-07-27-bitcoin-cash-currency-overview/)** | 2,100 万枚の上限 | プルーフ・オブ・ワーク | 2017 年の分岐時点のビットコインの状態を継承 | 公開 | 実装ごとの開発集団。その後さらに二度分裂 |
| **[ビットコイン SV](/BitcoinArchive/ja/entries/currency/2026-07-27-bitcoin-sv-currency-overview/)** | 2,100 万枚の上限 | プルーフ・オブ・ワーク | 2018 年の分岐時点の BCH の状態を継承 | 公開 | nChain 主導 |
| **[イーサリアム](/BitcoinArchive/ja/entries/currency/2026-07-27-ethereum-currency-overview/)** | 上限なし。発行と手数料の焼却 | 2022 年以降はプルーフ・オブ・ステーク | 2014 年の公開販売と創設者・寄稿者への配分 | 公開 | イーサリアム財団が調整する提案手続き |
| **[XRP](/BitcoinArchive/ja/entries/currency/2026-07-27-xrp-currency-overview/)** | 1,000 億枚。公開時に全量生成 | 検証者の合意 (採掘なし) | 事前生成。大半を創設者とリップルが保有 | 公開 | リップル社と検証者一覧 |
| **[カルダノ](/BitcoinArchive/ja/entries/currency/2026-07-27-cardano-currency-overview/)** | 450 億枚の上限 | プルーフ・オブ・ステーク (Ouroboros) | 2015 ~ 17 年の引換券販売。20% を IOHK・EMURGO・財団へ | 公開。付帯情報は任意 | 三つの調整組織とチェーン上の投票 |
| **[ソラナ](/BitcoinArchive/ja/entries/currency/2026-07-27-solana-currency-overview/)** | 上限なし。逓減する発行率 | プルーフ・オブ・ステークと Proof of History | 事前配分。財団と投資家への割当 | 公開 | ソラナ財団と Solana Labs |
| **[モネロ](/BitcoinArchive/ja/entries/currency/2026-07-27-monero-currency-overview/)** | 1,840 万枚＋毎ブロック 0.6 枚を永久に | プルーフ・オブ・ワーク (RandomX) | 採掘。事前配分なし | **既定で不可視** (リング署名・金額の秘匿) | 寄稿者。プロトコル権限を持つ財団は存在しない |
| **[ポルカドット](/BitcoinArchive/ja/entries/currency/2026-07-27-polkadot-currency-overview/)** | 2026 年 1 月以降、21 億枚の上限 | 指名式プルーフ・オブ・ステーク | 2017 年の販売と Web3 財団への配分 | 公開 | トークン投票によるチェーン上の統治 |
| **[USDT](/BitcoinArchive/ja/entries/currency/2026-07-27-usdt-currency-overview/) (テザー)** | 発行体の準備資産次第 | 該当なし。他チェーン上のトークン | 法定通貨と引き換えに随時発行 | 公開 | Tether 社 |
| **[USDC](/BitcoinArchive/ja/entries/currency/2026-07-27-usdc-currency-overview/) (Circle)** | 発行体の準備資産次第 | 該当なし。他チェーン上のトークン | 法定通貨と引き換えに随時発行 | 公開 | Circle 社 |

この一群を分ける列は、供給でも合意形成でもない。最後の列である。この表のうち、ビットコインとモネロ（条件つき）を除くすべての行に、説得され、召喚され、買収され、あるいは交代させられうる特定可能な主体がいる。これは不祥事ではない。表に並ぶ用途の大半にとっては要件でさえある。ただ、この領域が隣に建てられた金融の仕組みともっとも区別がつかない軸が、そこだということである。

## 3. 六つの構造的特徴を当てはめる
[デジタルゴールドの分析](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-digital-gold-structural-features/)は六つの構造的特徴を定め、ビットコインの位置はその六つを同時に満たすことに拠ると論じている。定義はそちらにある。

**凡例（この表のみ）。** 🟢 満たす・🟡 部分的、または争いがある、または但し書き付きで満たす・🔴 満たさない。この記号は点数ではない。**🟢 の数を合計してはいけない。** 六つの特徴は独立でも等価でもなく、いくつかは互いに緊張関係にある。素早い改良を望むチェーンは構造上 4 を持てないが、それは失敗ではなく設計上の判断である。行を合計として読むと、六つの特徴が組み込まれた議論を丸ごと取り落とすことになる。

| チェーン | 1 システムの分散 | 2 人・組織の分散 | 3 公平な立ち上がり | 4 創設者の離脱 | 5 固定供給 | 6 先行者 |
|---|---|---|---|---|---|---|
| **ビットコイン** | 🟢 | 🟢 | 🟢 | 🟢 | 🟢 | 🟢 |
| **[ライトコイン](/BitcoinArchive/ja/entries/currency/2026-07-27-litecoin-currency-overview/)** | 🟢 | 🟡 創設者は活動中だがプロトコルを握る組織はない | 🟢 | 🔴 | 🟢 | 🔴 |
| **[ドージコイン](/BitcoinArchive/ja/entries/currency/2026-07-27-dogecoin-currency-overview/)** | 🟡 ハッシュレートを結合採掘に依存 | 🟡 共同創設者は論者として活動 | 🟢 | 🟡 二人とも一度退いて発言者として戻った | 🔴 上限なし | 🔴 |
| **[ビットコインキャッシュ](/BitcoinArchive/ja/entries/currency/2026-07-27-bitcoin-cash-currency-overview/)** | 🟢 | 🟡 実装集団に名前のある責任者がいる | 🟡 状態を継承。新規発行はなし | 🔴 | 🟢 | 🔴 |
| **[ビットコイン SV](/BitcoinArchive/ja/entries/currency/2026-07-27-bitcoin-sv-currency-overview/)** | 🟡 低ハッシュレート、再編成が頻発 | 🔴 | 🟡 状態を継承 | 🔴 | 🟢 | 🔴 |
| **[イーサリアム](/BitcoinArchive/ja/entries/currency/2026-07-27-ethereum-currency-overview/)** | 🟢 | 🔴 財団と活動中の創設者 | 🔴 公開前の販売 | 🔴 | 🔴 上限なし | 🔴 |
| **[XRP](/BitcoinArchive/ja/entries/currency/2026-07-27-xrp-currency-overview/)** | 🔴 選定された検証者一覧 | 🔴 企業が管理 | 🔴 全量を事前生成 | 🔴 | 🟡 総量は固定だが発行体が保有 | 🔴 |
| **[カルダノ](/BitcoinArchive/ja/entries/currency/2026-07-27-cardano-currency-overview/)** | 🟡 2021 年 3 月まで完全な中央集権 | 🔴 三組織と活動中の創設者 | 🔴 販売に加え 20% の配分 | 🔴 | 🟢 | 🔴 |
| **[ソラナ](/BitcoinArchive/ja/entries/currency/2026-07-27-solana-currency-overview/)** | 🟡 検証者に高い機材要件 | 🔴 財団と活動中の創設者 | 🔴 事前配分 | 🔴 | 🔴 上限なし | 🔴 |
| **[モネロ](/BitcoinArchive/ja/entries/currency/2026-07-27-monero-currency-overview/)** | 🟢 | 🟢 プロトコル権限を持つ財団がない | 🟢 事前配分なし | 🟡 仮名の考案者は不在、後任は公然 | 🟡 上限の後に恒久的な末尾発行 | 🔴 |
| **[ポルカドット](/BitcoinArchive/ja/entries/currency/2026-07-27-polkadot-currency-overview/)** | 🟢 | 🔴 財団と活動中の創設者 | 🔴 販売と配分 | 🔴 | 🟡 2026 年に上限。ただし投票で決めたものは投票で変わる | 🔴 |
| **[USDT](/BitcoinArchive/ja/entries/currency/2026-07-27-usdt-currency-overview/) / [USDC](/BitcoinArchive/ja/entries/currency/2026-07-27-usdc-currency-overview/)** | 🔴 | 🔴 | 🔴 | 🔴 | 🔴 発行体が決める | 🔴 |

興味深いのはモネロの行である。公平な立ち上がり、支配する組織の不在、システムの分散という三点で、この表の 12 チェーンの中ではビットコインと一致する唯一のものである。分かれるのは供給で、上限ではなく恒久的な末尾発行を選んだ。発行が尽きた後も安全性の費用を払い続けるための、意図的な選択である。同じ問いに対する別の賭けであり、何を手放すかを正確に理解した人々が行っている。理由は[リカルド・スパーニの記録](/BitcoinArchive/ja/participants/riccardo-spagni/)が扱う。

## 4. ドル連動通貨は同じ範疇にない
USDT と USDC は、構造的特徴がすべて 🔴 になる。これは批判ではなく、範疇の取り違えの訂正である。法定通貨連動型のドル連動通貨は、ブロックチェーンの接続口を持つドルである。供給は発行体の準備資産に従い、安定は貸借対照表に依存し、発行体は残高を凍結できる。CENTRE の技術文書自身がそう書いている。ドル連動通貨をめぐる議論の大半は、この一文で終わるはずのものだ。

<!-- audit:quote-skip -->
> この手法は分かれてはいるが、完全に分散していると称するものでも、それを目指すものでもない。

釘付けもまた一枚岩ではない。違いは、誰が、どんな義務のもとでその釘を保証しているかにある。USDC の準備構成は自主的な開示の産物だった。2021 年にはコマーシャルペーパーと社債を抱え、その後に現金および現金同等物へ移した。統治体の CENTRE は 2023 年に解散したが、保有者の同意は要らなかった。

もう一方に、法律による型がある。日本の改正資金決済法は円建てのドル連動型を登録制度の下に置き、JPYC 株式会社は 2025 年 8 月 18 日に資金移動業者として登録され（関東財務局長第 00099 号）、「裏付け資産は日本円（預貯金および国債）によって保全します」と述べている。発行開始は 2025 年 10 月 27 日である。準備の規則が会社の方針なのか免許の条件なのかは、上の構造上の判定を変えない。発行主体は依然として存在し、依然として残高を凍結できる。変わるのは、発行主体が考えを変えたときに約束がどれだけ残るかであり、それは別の軸で、しかも実在する軸である。

この取引で買えるのは、ビットコインが提供しないもの、すなわち家賃の計算に使う通貨に対して動かない単位である。代償は §3 のすべての性質になる。[ジェレミー・アレールの記録](/BitcoinArchive/ja/participants/jeremy-allaire/)は両側をもっとも明快に述べている。主権の外にある資産を擁護しながら、主権の内側にある資産を売っているからだ。

## 5. 各チェーンがなぜその設計を選んだか
§2 の設計にはそれぞれ、作った当人が公にした理由がある。以下は要点で、詳細はそれぞれの記録にある。

- **ライトコイン。** [チャーリー・リー](/BitcoinArchive/ja/participants/charlie-lee/)は変更を最小限にすることから始めた。「正当な理由がない限り、(ビットコインで) 動いているものを変えない」。動かした設定値は四つ、いずれも 4 倍か 4 分の 1 である。
- **ドージコイン。** [ジャクソン・パーマー](/BitcoinArchive/ja/participants/jackson-palmer/)は前提そのものを辞退した。このチェーンに技術文書はなく、共同創設者は供給の設定値が価格を決めるわけではないと公に主張している。
- **イーサリアム。** 技術文書が上限を置かない選択を名指しで述べ、恒久的な線形発行のほうが後から来た者に公平だという理由を挙げている。その後の三度の改定は[固定供給の分析](/BitcoinArchive/ja/entries/analysis/2008-10-31-fixed-supply-vs-adjustable-money/)がたどっている。
- **XRP。** [ジェド・マケーレブ](/BitcoinArchive/ja/participants/jed-mccaleb/)と共同創設者たちは、裁判所が争いのない事実として要約したとおり「ビットコインのブロックチェーンに対し、より速く、より安く、よりエネルギー効率の高い代替物」を目指し、公開時に供給の全量を生成した。
- **カルダノ。** [チャールズ・ホスキンソン](/BitcoinArchive/ja/participants/charles-hoskinson/)の企画は、ビットコインが「安定した識別子・付帯情報・評判」を捨てたことを、自分たちが継がないものとして名指しし、決済と計算を意図的に分けている。
- **ソラナ。** [アナトリー・ヤコベンコ](/BitcoinArchive/ja/participants/anatoly-yakovenko/)の技術文書は、共有された時計の不在を隘路と特定し、それを解くために一貫性より可用性を選ぶと述べている。
- **モネロ。** [リカルド・スパーニ](/BitcoinArchive/ja/participants/riccardo-spagni/)が担ったチェーンは、ビットコインが「追跡不能性の要件を満たさない」と書く方式を実装し、半減の設計を貨幣上の特徴ではなく安全性の危険として扱う。
- **USDC。** [ジェレミー・アレール](/BitcoinArchive/ja/participants/jeremy-allaire/)の設計は四つの候補から法定通貨担保型を選び、その技術文書は分散を代償として名指ししている。

八つに共通する型は同じである。どれもビットコインの特定の設計判断に対する具体的で論拠のある異議であり、どれも変更のために特定の代償を受け入れている。そしてどれも、ビットコインが機能していないという主張ではない。

## 6. 創設者たちはビットコインについて何を語ったか
分量のある創設者については、七つの伝記が出典付きの記録を集めている（[チャーリー・リー](/BitcoinArchive/ja/participants/charlie-lee/)、[チャールズ・ホスキンソン](/BitcoinArchive/ja/participants/charles-hoskinson/)、[アナトリー・ヤコベンコ](/BitcoinArchive/ja/participants/anatoly-yakovenko/)、[ジェレミー・アレール](/BitcoinArchive/ja/participants/jeremy-allaire/)、[リカルド・スパーニ](/BitcoinArchive/ja/participants/riccardo-spagni/)、[ジェド・マケーレブ](/BitcoinArchive/ja/participants/jed-mccaleb/)、[ジャクソン・パーマー](/BitcoinArchive/ja/participants/jackson-palmer/)）。

並べて読むと、擁護派と否定派には分かれない。繰り返し現れる形はもっと狭く、もっと奇妙である。留保のない技術的賞賛と、具体的な構造上の異議とが、同じ人物の中に、しばしば同じ取材の中に同居している。ヤコベンコはプルーフ・オブ・ワークを「優雅さと単純さの点で傑作」と呼び、別の場では資産としては保険以上の「価値はない」と述べる。ホスキンソンは 2018 年にサトシの仕事を「チューリング賞に値する」と言い、2024 年にビットコインを「宗教であって生態系ではない」と言い、その半年後にインターネットにおける価値の保存手段だと述べている。初期のビットコイン取引の大半が通った取引所を作ったマケーレブは、あの論文を読むまで二重支払いが解けるとは思っていなかったと語る。

残る三人が残した記録は、それより短い。

- **ギャヴィン・ウッド** (ポルカドット、イーサリアム共同創設者) は電力面と処理面の両方から異議を述べている。ビットコインは「自分を守るためだけに、どこかの小国の消費量に相当する電力を使い果たしている」と言い、平均は 10 分でも実際には承認に一時間かかることがあると指摘する。
- **クリス・ラーセン** (リップル共同創設者) は 2021 年 4 月、プルーフ・オブ・ワークを「見事に設計された技術だが、今日の世界では時代遅れになりつつある」と書き、その変更は「ビットコインが世界の支配的な暗号通貨であり続けるために決定的に重要だ」と論じた。競合上の主張ではなく助言の形をとった異議である。
- **ブラッド・ガーリングハウス** (リップル最高経営責任者) は 2018 年に、ビットコインは事実上少数の中国の採掘事業に支配されていると述べ、2020 年には「価値の保存手段としての BTC には強気だが、決済用としてはそうではない」と語った。これは[ビットコイン自身の歴史の内側を貫いている](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-electronic-cash-vs-digital-gold/)電子現金とデジタルゴールドの分岐と同じものである。

## 7. アルトコインは何種類あるか

同じ日に二社へ聞くと、答えは桁が三つずれる。どちらも誤りではない。数えている対象が違う。

| 出所 | 数 | 何を数えているか | 時点 |
|---|---|---|---|
| CoinGecko トップページ | **1 万 7,825** | 収録判断を経た一覧に載っている銘柄 | 2026-07-26 |
| CoinGecko 全体チャート | **1 万 6,775** | 1,509 取引所にまたがる追跡銘柄。同じサイトの別ページ、同じ日 | 2026-07-26 |
| CoinMarketCap トップページ | **5,477 万** | 収録判断の有無を問わず、検出したすべての資産 | 2026-07-26 |
| CoinMarketCap の全体指標 API | **2,941** | 同社内部の「稼働中」の数 (`active_cryptocurrencies`) | 2024-10-11 |

CoinMarketCap は理由をそのまま書いている。「我々の考えは、データは常に過剰に提供すべきだというものである (検閲し取り締まるのではなく)」。この方針で作られた一覧はチェーン上に存在するトークンを数え、収録判断を経た一覧は誰かが載せる価値があると判断したトークンを数える。前者はブロック領域の性質、後者は編集上の判断である。実際の下限を決めているのは発行台で、pump.fun 一つで 2026 年 6 月までに 1,190 万を超えるトークンを鋳造していた。CoinGecko の一覧全体の数百倍にあたる。

そのほとんどは続かない。ここでも測定は定義に依存する。pump.fun のトークンについて、CoinGecko Research は 68.67% が公開当日に最後の取引を記録したとし、学術的な生存分析は実際の市場に到達する率を 0.63%、その八か月後のより大きな集団では 0.198% としている。2017 年前後の ICO については、Satis Group の評価が約 78% を詐欺と判定し、取引所で取引されたのは約 15% だった。Boston College の調査では、資金調達も上場もしなかった企画の 83% が不活発になったのに対し、両方を達成した企画では 16% だった。消滅した通貨を数える一覧どうしは桁で食い違う。それぞれが自前の定義を使っているからである。

<!-- chart: altcoin-population-counts -->

だから「アルトコインは何種類あるか」への誠実な答えは、問い返しになる。取引されているもののことか、一覧に載っているもののことか、存在しているもののことか。この但し書きなしに示された数は、示した本人が特定していない何かを測っている。そして母集団の異なる数は、決して比較も合算もしてはならない。

## 8. 対極の事例 — 大統領が出すトークン
§7 の発行台の数字が描いているのは工業的な過程である。その過程が何を可能にするかをもっとも明確に示した事例が 2025 年 1 月に現れた。事実は発行者自身が公表している。

2025 年 1 月 17 日、就任式の三日前に、ドナルド・トランプは自身の Truth Social の口座でトークンを告知し、その配布元へ支持者を誘導した。トークンの公式サイトは配分をこう書いている。

<!-- audit:quote-skip -->
> トランプ・オーガニゼーションの関連会社である CIC Digital LLC と、Fight Fight Fight LLC が、3 年間の解除予定に従うかたちで Trump Cards の 80% を保有する。

10 億枚のうち 2 億枚が公開時に放出された。時価総額はおよそ二日で 150 億ドル近くまで上がった。CoinGecko は 2025 年 1 月 19 日の最高値 73.43 ドルを記録している。2026 年 7 月下旬の取引値は 1.57 ドル前後である。ただし最高値は出所によって食い違い、CoinDesk は初日の高値を 77.26 ドル、Fortune は最高値を 75.35 ドルとしている。この種の公開をめぐる数字がいかに定まらないかの、小さな一例でもある。Chainalysis は、購入したことのある約 200 万のウォレットのうちおよそ 76 万 4,000 が損失を抱える一方、58 のウォレットが合計 11 億ドルの利益を得たとしている。発行者側については、2025 年 5 月時点で取引手数料収入が 3 億 2,000 万ドル、トランプ本人の資産公開ではこのトークンだけで 6 億 3,600 万ドルと報じられた。

同じ弧を数か月のうちに描いた事例が他に三つある。アルゼンチン大統領は 2025 年 2 月に LIBRA を宣伝し、価格は 40 分で 2,000% 超上昇した後、時価総額は数時間で 45 億ドルから約 2 億ドルへ落ちた。チェーン上の分析は、十に満たないウォレットが 8,740 万ドルを現金化したと特定している。MELANIA は最高値から 98% 超下落し、供給の 90% 超が内部者とみられるウォレットに保有されていた。中央アフリカ共和国の大統領が宣伝したトークンは、約 24 時間で 96.7% 下落した。

二人ともビットコインそのものについての記録がある。しかも一方は、その発言のほうが先だった。トランプは 2019 年にこれを退けており、五年後に CNN が本人に突き返した表現は、暗号通貨は「薄い空気の上に成り立っている」というものだった。そして 2024 年 7 月 27 日、ナッシュビルのビットコイン会議の壇上で、国家戦略としてのビットコイン準備、政府が保有するコインを決して売らないこと、そして次の一言を約束している。

<!-- audit:quote-skip -->
> 採掘も、鋳造も、製造も、米国でやってほしい。

トークンが出たのは、この演説の六か月後である。

ミレイの立場は評判より古く、かつ狭い。中央銀行制度を詐欺だと呼び、ビットコインを「貨幣が本来の創り手である民間部門へ戻ること」と評してきたが、実際の政策はドル化であり、彼の下のアルゼンチンがビットコインの採用へ動いたことはない。この引用が独り歩きしてビットコイン支持者と見なされてきたが、報道はその区別を明示している。

規制上、この範疇は証券としての保護の外にある。SEC の職員声明は 2025 年 2 月、この種のミームコインは証券に当たらないと述べた。ただしこの声明に法的拘束力はなく、詐欺は別の法律で引き続き問える。同年 5 月には現職の委員が業界の聴衆にこう述べている。「これらに SEC の保護があると期待しているなら、期待すべきではない」。著名人による宣伝について判断が下された唯一の先例は、開示なしの有償宣伝をめぐる 2022 年のキム・カーダシアンとの和解のままである。

このアーカイブはこれらの出来事を記録し、その背後の意図を性格づけない。言えるのは構造の話である。構造上の第一の事実は、これらがどれもチェーンではないことだ。四件とも、ソラナの上で鋳造されたトークンである。ソラナは §2 に、発行規則と合意形成の仕組みと、自分の貨幣が何のためのものかという公開された主張を持って並んでいる。その台帳の上で鋳造されたトークンは、そのどれも受け継がない。そうしたトークンの供給は発行の計画ではなく、発行者が選んだ数である。だから §3 が試す性質は、作りからして全部欠けている。供給は公開前に発行者へ割り当てられ、発行者は名前のある主体であり、公開はその主体自身が告知し、手数料収入は価格の向きに関係なくその主体へ入る。ビットコインが持っていた立ち上がりの条件のちょうど裏返しであり、しかもいまや、その過程は一日に数万回動かせるほど安い。

## 9. 本エントリーの限界
- **投資助言ではなく、予測でもない。** 価格目標も順位づけも「どれが勝つか」もない。[価格についてのアーカイブの立場](/BitcoinArchive/ja/entries/analysis/2008-10-31-fixed-supply-vs-adjustable-money/)は、供給設計を結果の出ていない賭けと見る。ここでも同じである。同じ「順位をつけない」姿勢を別の角度から試した実験がある。AI 投資調査は同じ問いを 5 つの独立した AI システムに投げ、その回答理由を一次資料で検証した。
- **技術的な性能比較ではない。** 処理量・手数料・遅延は版が変わるたびに動く。その表は数か月で誤りになる。上で選んだ軸は、公開時に決まるがゆえに滅多に動かないものである。
- **網羅の主張ではない。** 下限が八桁の母集団に対する 12 チェーンという標本は、一つの理由で選んである。このアーカイブが保管するビットコインの記録に、繰り返し現れるチェーンだからだ。
- **創設者への判定ではない。** 伝記が集めているのは、出典と日付つきで、その人が何を言ったかである。発言どうしが食い違う場合、食い違いは解消せずに記録する。

擁護できる結論は一つだけで、それは §7 が強いるものである。暗号通貨が何種類存在するかに依存する議論は、用語を定義していない議論である。そしてこの領域の議論の大半は、賛否どちらの側でも、まさにそこに依存している。
