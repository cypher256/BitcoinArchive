---
title: "サトシ・ナカモトはどうやって匿名であり続けたのか — 匿名性を成立させる 6 層構造のアーキテクチャ"
date: 2008-10-31T00:00:00Z
type: "analysis"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Satoshi_Nakamoto"
author: "Bitcoin Institute"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「サトシ・ナカモト」 が開発期間・公の活動期間・段階的撤退を通じて身元特定されない手段を 6 層（仮名、通信、言語、開発環境、ジェネシス定数、撤退）に整理。"
isSatoshi: false
homeOrder: 2
tags:
  - "satoshi-anonymity"
  - "pseudonym-analysis"
  - "satoshi-identity"
  - "analysis"
secondarySources:
  - name: "Wikipedia (English) — Satoshi Nakamoto"
    url: "https://en.wikipedia.org/wiki/Satoshi_Nakamoto"
  - name: "Sergio Demian Lerner — The Patoshi mining pattern (April 2013)"
    url: "https://bitslog.com/2013/04/17/the-well-deserved-fortune-of-satoshi-nakamoto/"
  - name: "Jameson Lopp — Was Satoshi Greedy? (2022)"
    url: "https://www.lopp.net/pdf/Was-Satoshi-Greedy.pdf"
relatedEntries:
  - analysis/2026-04-08-adam-back-satoshi-identity-hypothesis
  - aftermath/2026-04-08-nyt-carreyrou-adam-back-satoshi-investigation
  - analysis/2008-10-31-satoshi-identity-hypotheses-overview
  - analysis/2008-10-31-satoshi-identification-asymmetry
  - analysis/2011-07-03-sassaman-satoshi-identity-hypothesis
  - aftermath/2021-02-22-evan-hatch-sassaman-satoshi-cypherpunk-history
  - analysis/2013-07-06-kaneko-isamu-satoshi-identity-hypothesis
  - "aftermath/2013-12-05-techcrunch-skye-grey-szabo-stylometric"
  - "aftermath/2015-05-15-popper-nyt-szabo-satoshi-investigation"
  - "aftermath/2014-04-16-aston-university-szabo-stylometric-study"
  - "aftermath/2024-04-13-van-dorst-where-is-satoshi-stylometric-corpus"
  - "analysis/2026-05-03-van-dorst-corpus-reanalysis-named-candidates"
  - "analysis/2013-12-05-szabo-satoshi-identity-hypothesis"
  - analysis/2024-10-08-todd-satoshi-identity-hypothesis
  - aftermath/2005-12-29-nick-szabo-biography
  - aftermath/2008-08-20-adam-back-biography
  - aftermath/2008-08-22-wei-dai-biography
  - aftermath/2008-10-31-satoshi-nakamoto-biography
  - aftermath/2009-04-12-mike-hearn-biography
  - aftermath/2010-06-11-gavin-andresen-biography
  - aftermath/2010-12-07-peter-todd-biography
  - aftermath/2011-07-03-len-sassaman-biography
  - aftermath/2014-03-06-dorian-nakamoto-biography
  - aftermath/2014-08-28-hal-finney-biography
  - aftermath/2016-05-02-craig-wright-biography
  - aftermath/2019-02-19-paul-le-roux-biography
  - aftermath/2011-04-26-satoshi-final-known-email
  - aftermath/2013-04-17-sergio-lerner-patoshi-analysis
  - aftermath/2014-01-12-wei-dai-retrospective-on-satoshi
  - aftermath/2014-03-06-newsweek-dorian-nakamoto
  - aftermath/2020-11-23-chain-bulletin-satoshi-london-hypothesis
  - aftermath/2022-09-16-lopp-was-satoshi-greedy-miner
  - aftermath/2024-02-21-adam-back-retrospective-testimony
  - aftermath/2024-03-14-copa-v-wright-ruling
  - aftermath/2024-08-06-forensicxs-bitcoin-v01-code-walkthrough
  - aftermath/2024-10-08-hbo-money-electric-peter-todd
  - aftermath/2016-05-02-gavin-andresen-satoshi-retrospective
  - analysis/2008-10-31-satoshi-name-techno-orientalism
  - analysis/2008-10-31-cypherpunk-independent-arrival
  - analysis/2009-01-03-genesis-block-hardcode-analysis
  - analysis/2009-01-09-satoshi-code-analysis
  - analysis/2008-08-20-satoshi-activity-timeline
  - analysis/2008-08-20-satoshi-self-statements
  - aftermath/2010-09-01-satoshi-andresen-other-projects-notice
  - forum/bitcointalk/topic-2228/2010-12-12-satoshi-final-post
  - correspondence/gavin-andresen/2011-04-26-satoshi-to-andresen-alert-key
  - analysis/2009-01-09-satoshi-distribution-and-tooling-anomalies
  - analysis/2009-01-10-satoshi-launch-environment
inlineLinkKeywords:
  - "匿名性のアーキテクチャ"
  - "サトシ匿名性のアーキテクチャ"
  - "匿名化の階層"
  - "匿名化の層"
translationStatus: complete
---

本エントリは記述的である。下に整理する 6 層が特定の意図によって組まれた、と主張するものではない。「サトシ・ナカモト」 という仮名が、開発期間 (2007 年中頃〜2008 年 8 月)・公の活動期間 (2008 年 10 月〜2010 年 12 月)・段階的撤退 (2010 年 9 月〜2011 年 4 月) を通じて身元を特定されないでいる手段を、公開記録から観察可能な痕跡として 6 層に整理する。

本エントリは [身元仮説総覧](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/) および [識別の非対称性](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-identification-asymmetry/) と互いに補完する: 総覧は「サトシは誰か」 を問い候補を比較する。識別の非対称性は「これだけの追跡試行と材料があるのになぜ不明状態が続くのか」 を扱う。本エントリは「サトシはどう匿名であり続けたのか」 — に対して、非特定化の手段を 6 層に組織化することで答える: **いずれの候補も公開記録上のサトシ像を完全には満たさない理由**を構造的に示す。

本エントリは最も有力なサトシ候補を名指さず、新しい候補を提案せず、特定の層が意図的に選ばれたとも主張しない。6 層を意図とは独立に観察可能なものとして扱う。

## 1. 仮名 (命名層)

西洋的な人名でも、明らかに技術的なハンドルでも、明示的な匿名エイリアスでもなく、日本人の形をした仮名が選ばれた。この選択は、1990 年代後半から 2000 年代初頭にかけての英語圏の SF とハッカー文化のなかですでに強く形成されていた象徴空間 — ネットワーク化された匿名性が東アジア (とりわけ日本) の視覚的・命名的な記号で語られていた空間 — の内側に落ちる。詳細な構造的観察は [テクノオリエンタリズム的読解](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-name-techno-orientalism/) に譲る。

本エントリの目的では、命名層は次の構造的性質を持つ: 暗号学メーリングリストという文脈に置かれた日本人の形をした仮名は、「ネットワークの匿名性 → 日本語的に読める名前 → 国籍不明」 という連想空間を生成する。いかなる身元仮説もまずこの象徴空間を分解しなければ、特定の人物にたどり着けない。仮名そのものは特定の国籍・言語的出自を指示せず、象徴空間を指示する。

## 2. 通信チャネル (媒体層)

3 つの匿名メールアドレスが記録されている:

- `satoshi@anonymousspeech.com` — 2008 年 8 月、アダム・バックとウェイ・ダイへの最初のコンタクトで使用。
- `satoshi@vistomail.com` — 2008 年 10 月、初期ドラフト論文と暗号学メーリングリスト投稿で使用。Vistomail は運営元不明の匿名メールサービスで、現在は閉鎖されている。
- `satoshin@gmx.com` — 2008 年 10 月以降、最終版論文・BitcoinTalk フォーラム・P2P Foundation アカウント登録・メール、および 2014 年 3 月の Newsweek 誤報否定投稿 (「I am not Dorian Nakamoto」) で使用。2014 年の投稿は本人かアカウント侵害かの真偽が議論されている。

3 つのアドレスは公開記録上確立した事実として扱う (Wikipedia「サトシ・ナカモト」 エントリ、`mmalmi.github.io/satoshi`・`plan99.net`・Bitcoin Magazine が公開したアダム・バック宛メール群によって裏付けられる)。

公開チャネルも分散している:

- **暗号学メーリングリスト (Metzdowd cryptography)** — 論文初公開 (2008 年 10 月 31 日) と v0.1 リリース告知 (2009 年 1 月 9 日)。
- **SourceForge** — v0.1 の初期配布 (2009 年 1 月 8 日、`.rar` 形式)。SVN リポジトリは 2009 年 8 月以降 (マルッティ・マルミがセットアップ、サトシ自身ではない)。
- **BitcoinTalk フォーラム** — 2009 年 11 月 22 日〜2010 年 12 月 12 日の間に 575 投稿。
- **P2P Foundation** — 2009 年 2 月 11 日にアカウント作成、同日「Bitcoin open source implementation of P2P currency」 スレッドを投稿。
- **p2p-research メーリングリスト** — 2009 年 2 月 11 日に並行投稿。
- **AnonymousSpeech 経由のドメイン取得** — 2008 年 8 月 18 日、匿名登録仲介サービスを経由して `bitcoin.org` を取得。

互いに無関係な複数のメールプロバイダー、匿名登録仲介、5 つのチャネルへの投稿の分散 (暗号学メーリングリスト・SourceForge・BitcoinTalk・P2P Foundation・p2p-research) — このパターンは、いずれか単一のチャネルから一貫した身元プロファイルを組み立てることを許さない構造になっている。

**Tor について。** 2 つの別の問いを区別する必要がある。(a) *サトシは Tor を技術的話題として論じたか?* — はい。サトシは BitcoinTalk の「[TOR and I2P](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-22/2010-01-20-re-tor-and-i2p/)」 スレッドに参加し (2010 年 1 月 20 日と [2 月 4 日](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-22/2010-02-04-re-tor-and-i2p/) の返信)、`.onion` のバックエンドサポート、Tor SOCKS ポート 9050、Tor プロキシ経由での Bitcoin の挙動を技術的に詳しく論じている。Tor を話題として扱ったことは公開記録上確認できる。(b) *サトシ自身の通信を Tor 経由で送出していたか?* — これはサトシの運用プロファイルに関する二次的言説で広く主張されているが、サトシ自身の経路選択についてはサトシ本人による一次資料での明言は確認されていない。この推測は匿名メール + 匿名登録 + 複数チャネル投稿の運用要件に基づくものであって、自己言及によるものではない。本エントリでは個人通信の Tor 経由利用を「妥当に推測されるが直接の確認は取れていない」 として扱いつつ、サトシの Tor に対する技術的習熟は検証可能であることを併記する。

## 3. 言語的痕跡と時間的痕跡 (言語層)

公開記録から観察可能な、独立した 2 つの不一致がある。

**英文体の不一致。** サトシの文章は BitcoinTalk 投稿とメールのやりとりのなかでイギリス英語とアメリカ英語の綴りを混在させている。イギリス式 (`colour`、`favour`、`grey`、`optimise`) とアメリカ式 (`characterized`) が共存する。口語表現には英・豪のスラング (`bloody hard` — BitcoinTalk 投稿、`flat`、`maths`) が混じる一方、ソースコードの慣習は一貫してアメリカ式 (`color`、`catalog`)。このパターンは長文形式のサトシ身元分析で繰り返し言及されている。

**タイムスタンプ・タイムゾーンの不一致。** 論文 PDF メタデータの 2 つのドラフトで、タイムゾーンオフセットが異なる:

- 2008 年 10 月のドラフト: `Language: en-GB`、`CreationDate: 2008:10:03 13:49:58-07:00` (太平洋時間帯)。
- 2009 年 3 月の最終版: `Language: en-GB`、`CreationDate: 2009:03:24 11:33:15-06:00` (山岳または中部時間帯、サマータイムの整合により変動)。

BitcoinTalk フォーラムの投稿時間は 24 時間に分散しており、UTC 6:00〜12:00 の時間帯にはサトシの投稿活動がほぼ完全に途絶えるという 1 つの一貫した間隙を示す。このパターンは BitcoinTalk 公開アーカイブの 575 投稿から導出できる。サトシのソースコードコミット (v0.1.0〜v0.3.19) のタイムスタンプ分析でも同じ時間帯の空白が観察されており、EST (UTC-5) または CST (UTC-6) 在住を示唆する読みが提示されている — その仮定では空白は現地時間でほぼ 01:00〜07:00 (通常の睡眠時間帯) にあたる。GMT (英国) や JST (日本) の仮定では空白の時間帯が不自然に反転する。コミットパターンの導出については [コード分析エントリ](/BitcoinArchive/ja/entries/analysis/2009-01-09-satoshi-code-analysis/) を参照。

組み合わさった言語的・時間的パターンは、いずれの単一の国・言語・時間帯プロファイルにも整合しないという意味で内的に矛盾している。いかなる身元仮説も、これらを意図的なノイズとして扱うか、同一人物が自然に生成したものと説明する必要がある。

## 4. 開発・配布の選択 (技術層)

v0.1 コードベース・配布アーカイブ・バージョン管理履歴の公開記録は、Windows ベースの一貫した開発環境を裏付ける:

- コンパイルツールチェーン: Visual C++ 6.0 SP6 + MinGW GCC 3.4.5 (Bitcoin v0.1 リリースの `Makefile.unix` とバイナリメタデータより)。
- ソースファイルの改行コード: CRLF (Windows 慣習)。
- 配布形式: `.rar` アーカイブ (Linux のオープンソース配布より、2000 年代後半の Windows ソフトウェア配布に多い形式)。
- ホスティング: SourceForge。

詳細は [起動環境分析](/BitcoinArchive/ja/entries/analysis/2009-01-10-satoshi-launch-environment/) と [配布・ツーリング異常分析](/BitcoinArchive/ja/entries/analysis/2009-01-09-satoshi-distribution-and-tooling-anomalies/) で扱われている。

バージョン管理履歴は関連する 2 つの性質を示す:

- 2007 年から 2009 年 1 月までの開発期間は、いかなる公開可能な形式のバージョン管理にも置かれていなかった。2009 年 1 月の v0.1 初期リリースは SourceForge 上の単一の `.rar` アーカイブであって、リポジトリのスナップショットではない。
- Subversion リポジトリは Linux 移植期間中にマルッティ・マルミの協力で SourceForge プロジェクト上にセットアップされた。サトシ自身ではない。リポジトリで保存されている最古のコミットは 2009 年 10 月以降である ([コード分析](/BitcoinArchive/ja/entries/analysis/2009-01-09-satoshi-code-analysis/) のコミット履歴整理を参照)。
- GitHub 上の `bitcoin/bitcoin` リポジトリは引き継ぎ期間中の 2010 年 12 月にギャビン・アンドレセンによって作成された。サトシの最終 SVN コミット (revision 202、2010 年 12 月 15 日) の後である。

2010 年 12 月のギャビン・アンドレセン宛メールで、サトシは「[Gavin is] technically much more Linux capable than me (ギャビンの方が私より技術的に Linux に習熟している)」 と自己評価している ([自己言及エントリ](/BitcoinArchive/ja/entries/analysis/2008-08-20-satoshi-self-statements/) に整理あり)。この記述は v0.1 コードベースの Windows 環境パターンと整合している。

## 5. ジェネシスブロックの定数化 (起源の脱帰属化層)

ビットコインチェーンのジェネシスブロック (高さ 0) は、サトシが採掘してネットワークにブロードキャストしたものではない。そのパラメーター — タイムスタンプ `2009-01-03 18:15:05 UTC`、ナンス `2083236893`、ハッシュ `000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f`、コインベースメッセージ、マークルルート — はすべてソースコードの中に定数として埋め込まれている。空のデータベースから起動するノードは、これらの定数から決定論的に同じブロック 0 を再構築する。誰が最初にこれらの値を導出したかは関係ない。

詳細は [ジェネシスブロックハードコード分析](/BitcoinArchive/ja/entries/analysis/2009-01-03-genesis-block-hardcode-analysis/) で扱う。

本エントリで重要な構造的性質は、**ブロック 0 が伝播の足跡を持たない**ということである。後続のブロックが特定の採掘ノードによって P2P ネットワークにブロードキャストされ、推測可能な到達経路を持つのと違い、ブロック 0 はブロードキャストされたことがない。チェーンの起点は、プロトコルがネットワーク送信元まで遡ることのできない唯一のブロックである。

これは仮名・メールアドレス・言語的ノイズを超えた層である: システム自身が、いったん動き始めれば、その起点を作った主体の痕跡をどこにも保持していない。オンチェーンの起源データからサトシを識別しようとするフォレンジック分析は、ブロック 1 から先に進むことができない。

## 6. 段階的撤退 (退場層)

サトシのプロジェクトからの撤退は単一のイベントとして起きていない。公開記録は約 7 ヶ月にわたる段階的な経過を記録している:

| 日付 (UTC) | 出来事 | 出典 |
|---|---|---|
| 2010 年 9 月 | サトシ → ギャビン・アンドレセンへメール「他のプロジェクトに取り組んでいる」。具体的な日付・媒体は公開記録になく、アンドレセンの後年の回想からの再構成。 | ギャビン・アンドレセンのインタビュー ([CoinMarketCap「Satoshi Files: ギャビン・アンドレセン」](https://coinmarketcap.com/academy/article/satoshi-files-gavin-andresen)) |
| 2010 年 12 月 3 日 | サトシ → マルッティ・マルミ「ギャビンが適任だ」。プロジェクトマネージャーとしてアンドレセンを推薦。 | [`mmalmi.github.io/satoshi` 公開メール](/BitcoinArchive/ja/entries/correspondence/martti-malmi/2009-05-02-first-contact-satoshi-reply/) |
| 2010 年 12 月 5 日 | BitcoinTalk「Bring it on」 スレッドへのサトシの公的反対投稿: 「No, don't 'bring it on'. The project needs to grow gradually so the software can be strengthened along the way.」 | [BitcoinTalk スレッド](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-2216/2010-12-11-re-wikileaks-hornet-nest/) |
| 2010 年 12 月 12 日 | サトシ → アンドレセン、SourceForge リポジトリへのコミット権を正式譲渡 (メール)。同日公開側: BitcoinTalk の DDoS 緩和スレッドにて最終公開投稿、結びは「I'm doing a few more things, then I plan to pass the baton.」 | COPA v Wright 公開証拠資料、[BitcoinTalk スレッド](https://bitcointalk.org/index.php?topic=2228.msg29699#msg29699) |
| 2010 年 12 月 15 日 | サトシ最終 SVN コミット (revision 202) — IRC 経由の外部 IP 取得処理の小さな修正。 | SourceForge SVN 履歴 |
| 2010 年 12 月 19 日 | アンドレセンがリードメンテナーとしての就任を公式に発表。同日、GitHub `bitcoin/bitcoin` リポジトリ作成。 | BitcoinTalk アナウンスメント |
| 2010 年 12 月 27 日 | マイク・ハーン → サトシ、クリスマスメッセージと 21M コイン上限・10 分ブロック目標・500 KB ブロックサイズ上限への質問。 | [`plan99.net`](https://plan99.net/~mike/satoshi-emails/) 公開メール |
| 2010 年 12 月 29 日 | サトシ → マイク・ハーン、長文メール。完全な SPV / クライアントモード設計の解説、21M の「Educated guess」 説明、ブロックサイズ拡大に対するムーアの法則の引用。サトシが書いた最後の長文メール。 | `plan99.net` |
| 2011 年 4 月 23 日 | サトシ → マイク・ハーン: 「I've moved on to other things. It's in good hands with Gavin and everyone.」 | `plan99.net` |
| 2011 年 4 月 26 日 | サトシ → ギャビン・アンドレセン: 「謎の影の人物として語らないでほしい」 と要請、CAlert キーとブロードキャストコード (ネットワーク非常停止権限 — サトシが最後まで保持していた技術的権限) を譲渡。 | ギャビン・アンドレセンの後年公開 ([CoinMarketCap](https://coinmarketcap.com/academy/article/satoshi-files-gavin-andresen)) |
| 2014 年 3 月 6 日 | サトシ P2P Foundation アカウントから「I am not Dorian Nakamoto」 投稿。本人かアカウント侵害かの真偽は議論されている。 | [P2P Foundation スレッド](http://p2pfoundation.ning.com/forum/topics/bitcoin-open-source) |

7 ヶ月の経過は構造的に特異である: 2010 年 9 月にギャビン・アンドレセン宛メールで「他のプロジェクトに取り組んでいる」 という退場シグナルが出され、コード管理権限の正式譲渡そのものは続く数か月のあいだに段階的に進む (公開記録上完了するのは 12 月 12 日)。同じ 12 月 12 日に日常的な技術スレッドのなかで公開向け予告が控えめに置かれ、12 月 15 日に最終コミット、そして 2011 年 4 月 26 日にネットワーク非常停止権限である CAlert キーが — 最後の梃子として — 解放される。劇的な別れの宣言はない。BitcoinTalk への公開告別投稿もない。このパターンはアーキテクチャ全体と整合している: 影響力と可視性は、それ自体がフォレンジック・イベントとなるような単一の瞬間に断ち切られるのではなく、段階的に縮減される。

別の観察として: 同じ 4 月 26 日のメッセージのなかで、サトシは「謎の影の人物として語らないでほしい」 と明示的に要請した。これもアーキテクチャ全体と整合している。象徴的な焦点となること自体が、プロジェクトの設計 (「分散」) と構造的に矛盾し、身元仮説言説の温床となる — 本エントリが整理しているまさにその層である。

## 7. 観察できること、観察できないこと

上記 6 層はすべて公開記録から観察可能である。一方、以下は公開記録から観察**できない**ものであり、本エントリでは主張しない:

- **サトシが匿名性を選んだ内的動機。** 「なぜ」 は射程外。「どのように」 が射程内。
- **投稿時に用いられた具体的なアンチフィンガープリント技術。** Tor 利用は妥当に推測される (§2)。一方、キーストローク・タイミングのランダム化、ブラウザーフィンガープリント偽装、仮想マシン分離などの具体的な手段は一次資料に記録されていない。
- **Patoshi マイニングパターンに紐付けられている約 110 万 BTC の処分。** 観察可能なのは「これらのコインが 2010 年初頭の採掘期間以降オンチェーンで動いていない」 ことまで。**観察できないのは**、対応する秘密鍵が保持されているか、失われたか、意図的に破棄されたか、後継者が保持しているか、のいずれであるか。
- **開発の地理的拠点。** Windows 環境に関する証拠 (§4) とタイムゾーンメタデータ (§3) は妥当な作業地推定に制約をかけるが、単一の場所を特定はしない。メタデータは内的に矛盾している (§3)。
- **サトシの個人的背景・家族・経歴・職業・学歴・母語。** 公開記録に存在しない。上記の層からの推測は一方向的である: 各層は特定の候補を除外しうるが、特定の人物を肯定的に同定はしない。

## 8. 構造的観察: 層の積層が身元仮説の決定打を奪う

6 層は、互いを参照することなく独立に観察可能であるという意味で**独立**である。また、いずれか一層を破ったとしても (たとえば特定のノード運営者の同定、秘密鍵の復元、削除されたメールアカウントの復元) それだけでは他の層は破れないという意味でも独立である。身元仮説がサトシを同定するには、この 6 層を同時に整合させる必要がある。

**[身元仮説総覧](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/) を層構造から読む。** 個別の候補は、いずれかの層で整合し、別の層で整合しない:

- サトシが明示的に引用した候補 (アダム・バック、ウェイ・ダイ) はサイファーパンク参加と BTC 系譜という背景の層 (層 1・2 の背景) で整合するが、彼ら自身とサトシとのリリース前のやりとりが決定的な反証になる (同一著者の足場ではなく、第三者受信としての挙動)。
- 2007〜2008 年に公開活動が記録されている能力適合候補 (ハル・フィニー、ニック・サボ) は段階的撤退層 (時間整合) と、ウェイ・ダイの 2014 年の指摘 (「開発期間中にサイファーパンクとして公的に活動していた人物ではないと思う」) が示す開発期間不可視性の期待で整合しない。
- 自己主張型候補 (クレイグ・ライト) と名前一致候補 (ドリアン・ナカモト) は複数層で同時に整合しない。
- 能力のみ適合の候補 (ピーター・トッド、金子勇、ポール・ルルー) は 1〜2 層 (実装能力、日本人名一致) で整合し、他で整合しない。

各場合、整合しない層は公開記録から観察可能である。構造的観察は、いずれの候補も 6 層を同時には満たさない、ということ。本エントリの枠組みでは、層構造はこの結果の**原因**ではない — しかし、原因が公開記録に現れる**形式**である。

本エントリは、層が意図的に非特定化を生むよう設計された、と主張するわけではない。記述的観察で十分である: 層はそこにあり、互いに独立であり、6 つの異なる識別次元を集合的にカバーしており、いくつかの次元で成立する身元仮説は他の次元で成立しない。

## 9. 本エントリの限界

- 本エントリは記述的である。特定の意図が層を組織したとも、層が非特定性を生むよう設計されたとも主張しない。
- 本エントリは新しい身元候補を提案せず、既存の候補を排除せず、候補同士の優劣を付けない。候補のランク付けは [身元仮説総覧](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/) と各個別仮説エントリの役割。
- 本エントリは新しい証拠を提示しない。各観察は引用された一次記録、既知の二次文献、または他のアーカイブエントリに紐付けられている。
- 6 層という整理は一つの読み方である。同じ痕跡を別の軸 (たとえば参加段階順ではなく攻撃面/フォレンジック類で) によって整理することも可能。本エントリの読みは [身元仮説総覧](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/) との比較を構造的に直接にすることを意図したもの。
- §2 の Tor 推測と §7 の作業地制約の推測は二次文献に依存する。一次記録は沈黙している。本エントリではこれらを推測として扱い、確立した事実としては扱わない。
