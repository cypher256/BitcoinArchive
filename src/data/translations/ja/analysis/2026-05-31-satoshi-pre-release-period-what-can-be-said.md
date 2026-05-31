---
title: "サトシの v0.1 リリース前期間 ― 何が言えて、何は言えないのか"
date: 2026-05-31T00:00:00Z
type: "analysis"
source: "bitcoin-institute"
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014863.html"
author: "Bitcoin Institute"
participants:
  - name: "サトシ・ナカモト"
    slug: "satoshi-nakamoto"
description: "v0.1 リリース前期間の主張を 4 段に区分: 本人発言 (direct)、 推定 (mid-2007 着手・2009 年 1 月終点)、 補強、 未決定。 本アーカイブの真実源。"
isSatoshi: false
tags:
  - "satoshi-identity"
  - "pre-release-period"
  - "self-statements"
  - "evidence-tiering"
  - "analysis"
secondarySources:
  - name: "Satoshi Nakamoto Institute ― cryptography メーリングリスト (2008-11-17)"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/15/"
  - name: "Satoshi Nakamoto Institute ― サトシからハル・フィニー (2008-11-10)"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/14/"
  - name: "マルッティ・マルミの公開メールアーカイブ"
    url: "https://mmalmi.github.io/satoshi/"
relatedEntries:
  - analysis/2008-08-20-satoshi-self-statements
  - analysis/2008-10-31-cypherpunk-independent-arrival
  - analysis/2008-10-31-bitcoin-design-lineage
  - analysis/2008-10-31-satoshi-identity-hypotheses-overview
  - analysis/2008-10-31-satoshi-anonymity-architecture
  - analysis/2009-01-09-satoshi-windows-development-environment
  - analysis/2009-01-09-satoshi-code-analysis
  - analysis/2009-01-09-satoshi-distribution-and-tooling-anomalies
  - analysis/2009-01-03-genesis-block-hardcode-analysis
  - emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-10-re-bitcoin-p2p-e-cash-paper-satoshi-finney
  - emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-17-bitcoin-p2p-e-cash-paper
  - correspondence/martti-malmi/2009-07-21-bitcoin-024
  - correspondence/adam-back/2008-08-20-satoshi-to-adam-back-hashcash-citation
  - correspondence/adam-back/2008-08-21-satoshi-to-adam-back-b-money
  - correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai
  - aftermath/2020-07-20-whale-alert-satoshi-fortune
inlineLinkKeywords:
  - "リリース前期間"
  - "何が言えて何は言えない"
translationStatus: complete
---

本アーカイブ全体で、 数十の分析・伝記・フォーラム投稿エントリが、 同じ約 18 か月の期間 ― おおむね 2007 年半ばから 2009 年 1 月 9 日の v0.1 リリースまで ― を繰り返し参照する。 この期間中、 サトシは誰にも知られずビットコインを設計・実装した。 参照は積み重なる: 識別仮説ページは候補を採点するために「リリース前期間」 を引き、 設計系譜の分析は彼が知っていた範囲を限定するためにこの期間を引き、 開発環境のフォレンジック分析は Windows 専一の道具立てを位置づけるためにこの期間を引く。 しかし、 この期間を巡って積み上がってきた主張は、 同じ性質のものではない。 ある主張はサトシ本人の言葉から直接来る。 ある主張は本人発言からの妥当な推定である。 ある主張は独立のフォレンジック証拠で補強される。 そしてある主張は、 これらいずれの源泉が実際に支えるものを超えて、 静かに外挿されてきた。

本エントリは、 それらを段に分ける。 Archive がサトシのリリース前期間を語るときの正典的な参照源である: 何が **direct (本人の言葉)** で、 何が **inferred (合理的に導けるが、 導出 ― 事実そのものではない)** で、 何が **forensically corroborated (独立証拠が inferred を補強する)** で、 何が **open (公開記録が不確定にする領域、 Archive 上で事実として書いてはならない)** か。

姉妹エントリの[サトシ自己発言のインベントリ](/BitcoinArchive/ja/entries/analysis/2008-08-20-satoshi-self-statements/)はあらゆるサトシの自己言及を網羅する。 [サイファーパンクへの独立到達分析](/BitcoinArchive/ja/entries/analysis/2008-10-31-cypherpunk-independent-arrival/)はリリース前期間をサイファーパンクの技術系譜に照らして読む。 [ビットコインの設計系譜分析](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-design-lineage/)はシステムが実際に先行研究から何を受け継いだかを限定する。 本エントリはそれらの一つ上の層: Archive 内のどこで書かれるリリース前期間の主張も、 ここで定めた evidence tier を表明することを要求する。

## 1. なぜ本エントリが必要か

Archive のリリース前期間への言及は、 異なる時期に異なる人々によって書かれ、 多くのエントリに分散して積み重なってきた。 2026-05 に行った全件監査が、 5 つの編集上のずれを明らかにした:

- **算数が合わない期間ラベル**: 「18 か月の開発期間 (2007 年半ば〜 2008 年 8 月)」 という表現が複数ページに存在した。 18 か月の実体は 2007 年半ばから 2009 年 1 月の v0.1 リリースまで ― 2007 年半ばから 2008 年 8 月では約 14 か月にしかならない
- **`<!-- speaker: -->` 引用ブロックでの引用の言い換え**: サトシ本人の "worked through all those little details over the last year and a half" が "worked through every detail in the last year and a half" として表示されていた
- **引用の受信者誤認**: 「year and a half while coding it」 引用 (実際は 2008 年 11 月 17 日の cryptography メーリングリストでのジェームズ・A・ドナルドへの返信) が「2008 年 8 月のアダム・バック宛メール」 と帰属されていた。 「break from it after 18 months」 引用 (実際は 2009 年 7 月 21 日のマルッティ・マルミ宛メール) がマイク・ハーン宛と帰属されていた
- **用語のオーバーロード**: 「development period」 という用語が、 18 か月の長い期間にも、 狭義の「実装期間」 (2007 年半ば〜 2008 年 8 月、 サトシが最初にアダム・バックに連絡を取るまで) にも、 区別なく使われていた
- **編集者の推定を direct 事実として記述**: 「サトシは 2007 年初頭に着手した」 のような表現が、 一次資料に裏付けがあるかのような文脈で現れていた。 実体は「2008-11-17 の自己発言から逆算した『2007 年半ば頃』」 までしか言えない

5 つすべての根は共通している: Archive には「サトシが何を述べたか」 と「サトシの述べたことから何を推定するか」 の境界線を明示的に引く一つの場所がなかった。 本エントリがその線を引く。

## 2. 第 1 段 ― direct (サトシ本人が述べたこと)

サトシのリリース前期間を限定する一次資料の言明は 5 つ。 それぞれの出典付きで verbatim で引く。 この一覧にないものは direct 主張ではなく、 Archive 上のどこでも「サトシのリリース前期間に関する直接の事実」 として書いてはならない。

| # | 日付 | 宛先 / 媒体 | verbatim 引用 | 直接的に確定すること |
|---|---|---|---|---|
| D1 | 2008-08-20 | → [アダム・バック](/BitcoinArchive/ja/entries/correspondence/adam-back/2008-08-20-satoshi-to-adam-back-hashcash-citation/) | "I'm getting ready to release a paper that expands on your ideas into a complete working system" | 2008 年 8 月時点で実装は実質的に完了、 論文準備中、 草稿 (`ecash.pdf`) 添付 |
| D2 | 2008-08-21 | → [アダム・バック](/BitcoinArchive/ja/entries/correspondence/adam-back/2008-08-21-satoshi-to-adam-back-b-money/) | "Thanks, I wasn't aware of the b-money page, but my ideas start from exactly that point" | Hashcash は知っていた (D1)、 b-money は紹介されるまで (2008-08-21) 知らなかった |
| D3 | 2008-11-10 | → [ハル・フィニー](/BitcoinArchive/ja/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-10-re-bitcoin-p2p-e-cash-paper-satoshi-finney/) | "I actually did this kind of backwards. I had to write all the code before I could convince myself that I could solve every problem, then I wrote the paper." | 作業順序: コードを先に書き、 その後で論文 |
| D4 | 2008-11-17 | [cryptography メーリングリスト](/BitcoinArchive/ja/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-17-bitcoin-p2p-e-cash-paper/) (ジェームズ・A・ドナルドへの返信) | "I believe I've worked through all those little details over the last year and a half while coding it, and there were a lot of them." | 2008 年 11 月 17 日時点での累計コーディング期間:「1 年半」 |
| D5 | 2009-07-21 | → [マルッティ・マルミ](/BitcoinArchive/ja/entries/correspondence/martti-malmi/2009-07-21-bitcoin-024/) | "need a break from it after 18 months development" | 2009 年 7 月 21 日時点での累計 development 期間:「18 か月」 |

第 1 段に**含まれないこと**: 暦上の着手日、 暦上の終了日、 動機、 単独 vs チームの主張、 地理的位置、 着手前の読書範囲。 これらに沿うものは第 2 段 (inferred)、 第 3 段 (corroborated)、 または第 4 段 (open) に属する。

## 3. 第 2 段 ― inferred (第 1 段から合理的に導出されるが、 あくまで推定)

inferred 主張は、 Archive が保守的な解釈と認める導出により第 1 段から導かれる。 これらは「サトシに関する事実」 ではなく、 「サトシの述べたことから、 保守的な読みで導かれる結果」 である。

| # | 推定主張 | 導出 | 限界 |
|---|---|---|---|
| I1 | コーディング着手は 2007 年半ば頃 | D4 (2008-11-17 時点で「1 年半」) から逆算: 2008-11-17 − 1.5 年 ≈ 2007-05、 「2007 年半ば」 は保守的な丸め | 「1 年半」 自体が丸めの表現で、 実際の着手は 2007 年のどの月でもありうる。 「2007 年半ば」 は Archive が採用する canonical 丸め |
| I2 | 18 か月のコーディング期間の終点は v0.1 リリース (2009 年 1 月 9 日) 頃 | D4 (Nov 2008 時点で 1.5 年) と D5 (Jul 2009 時点で 18 か月) を**同一の 18 か月期間** (2007 年半ば〜 v0.1 リリース) と解釈すれば整合する。 別解釈 (各発言を発言時点から個別に逆算) は約 8 か月ずれた 2 つの着手時期を要求する | 別解釈の余地はある: D5 を「現時点までの development 累計」 と読むこともできる。 Archive は 2 つの発言を整合させる解釈を採用 |
| I3 | 実装作業は 2008 年 8 月までに実質的に完了 | D1 で論文準備開始を本人が告知し、 草稿を添付; D2 でこれ以降に b-money 引用を追加 | 「実質的に完了」 は、 Nov 2008 の cryptography ML での議論や v0.1.x パッチでの継続的な refinement を除外する意味ではない |
| I4 | 「コード先、 論文後」 の順序は事故ではなく意図的な方法論 | D3 の本人による枠付け「I actually did this kind of backwards」 ― 状況ではなく選択として位置づけている | サトシが述べた**動機**は「自分自身を納得させるために全コードを書く必要があった」 のみ。 これ以上の動機は第 4 段 (open) |
| I5 | サトシは 2008 年以前にサイファーパンクの技術コミュニティで可視には活動していなかった | D2 (b-money 不知) とウェイ・ダイの 2014 年識別性論証 | **可視の**参加に対する論証であり、 受動的な読み手だった可能性 ([cypherpunk-independent-arrival §4 Tier 3 参照](/BitcoinArchive/ja/entries/analysis/2008-10-31-cypherpunk-independent-arrival/)) には及ばない |

Archive のいかなるエントリでリリース前期間の主張を書くときも、 第 2 段の主張はヘッジを付けねばならない。 「サトシ本人の『1 年半』 発言から推定して、 コーディング着手は 2007 年半ば頃」 と書く ― 「サトシは 2007 年 5 月にコーディングを始めた」 とは書かない。

## 4. 第 3 段 ― forensically corroborated (独立証拠が inferred 主張を補強する)

第 3 段は第 1 段より強くはない ― 第 2 段の推定がフォレンジック記録と整合することを示す独立証拠である。 第 3 段は第 1 段を上書きできない; 第 2 段を補強または弱めるのみ。

| # | 補強証拠 | 補強対象 | 出典 |
|---|---|---|---|
| F1 | Windows 専一の開発環境が 2007〜2009 年の全期間で継続 (Phase 1 に Linux 痕跡なし) | I1, I2 (単独開発者、 単一環境の 18 か月期間) | [satoshi-windows-development-environment](/BitcoinArchive/ja/entries/analysis/2009-01-09-satoshi-windows-development-environment/) |
| F2 | v0.1 コードベース ≈ 19,901 行の C++、 統合された新規システムを実装 | D3 (「全コードを書いた」) + I3 (2008 年 8 月までに実質的に完了) | [satoshi-code-analysis](/BitcoinArchive/ja/entries/analysis/2009-01-09-satoshi-code-analysis/) |
| F3 | ジェネシスブロックのハードコードが 2009-01-03、 ブロック 1 採掘が 2009-01-09 (5 日空白) | I2 (リリース期の終点)、 I3 (2008 年 8 月実質完了 → 2009 年 1 月リリース準備完了) | [genesis-block-hardcode-analysis](/BitcoinArchive/ja/entries/analysis/2009-01-03-genesis-block-hardcode-analysis/) |
| F4 | Patoshi 採掘パターンが 2009 年 1 月以降、 防衛的ハッシュレート (ネットワークの約 60%) を維持、 他者参加に応じて意図的に絞っていく | D3 + I4 (意図的な方法論が運用期にも延長、 個人利得より網保護を優先) | [whale-alert-satoshi-fortune](/BitcoinArchive/ja/entries/aftermath/2020-07-20-whale-alert-satoshi-fortune/) |
| F5 | 配布規約 (`.rar` アーカイブ、 インストーラなし、 Windows 消費者親和型パッケージ) と道具立ての特異性 (ハンガリアン記法、 Visual C++ 6.0、 MinGW PGP 末尾) | I1 (単独開発者が一貫した環境で作業) | [satoshi-distribution-and-tooling-anomalies](/BitcoinArchive/ja/entries/analysis/2009-01-09-satoshi-distribution-and-tooling-anomalies/) |

これらの補強が、 canonical 時間軸 (「2007 年半ばから 2009 年 1 月の v0.1 リリースまで、 実装作業は 2008 年 8 月までに実質的に完了」) を最も無理のない読みにする。 ただし、 これによって第 1 段の事実に格上げされるわけではない。

## 5. 第 4 段 ― open (公開記録から確定できない領域)

第 4 段の項目は、 Archive の事実として書いてはならない。 開かれた問い、 仮説の領域、 または明示的にそうと記された推測としてのみ扱える。

| open 項目 | 不明な内容 |
|---|---|
| 着手の具体的な暦上の日 | 「2007 年半ば」 は保守的丸め; 具体的な月は公開記録に存在しない |
| コーディング着手前の設計・構想期間の長さ | サトシの「コーディングしながらこの 1 年半」 はコーディング期間を限定する; 設計作業がそれ以前に始まっていたかどうか・どれだけ早かったかは未述 |
| 単独開発者 vs 協働 | 通信での 1 人称代名詞は単独著作と整合するが、 単独であることを確定しない; 共著や背景支援は一次資料だけでは排除できない |
| 地理的位置 | 英国式英語寄りの文体とタイムゾーン分析は、 P2P Foundation プロファイルの日本主張と整合しない方に重みを置くが、 積極的な国特定は未支持 |
| 母語 | コモンウェルス英語の文体は非ネイティブ日本語を示唆するが、 積極的な母語特定は未支持 |
| 反信頼の枠付け以上の個人的動機 | ホワイトペーパーの「信頼ではなく…」 の枠付けが公開記録上最も明示的な動機; これより狭い動機 (リバタリアン、 オーストリア学派経済学、 反救済等) はすべて解釈 |
| サイファーパンク資料を受動的に読んでいたか | D2 (b-money 不知) は**可視の**参加を限定する; マニフェスト・メーリングリストアーカイブ・関連文献の受動的読書は確定も否定もされていない |
| 身元 | Archive の身元仮説エントリで詳しく扱われる; 本エントリは立場を取らない |

## 6. Archive エントリのための canonical な表現規約

サトシのリリース前期間に言及するすべての Archive エントリは、 以下の規約に従うこと。 今後の監査はこの節を基準に検査する。

| 主張 | canonical 表現 | 避ける反パターン |
|---|---|---|
| 18 か月期間 | "18 か月 (2007 年半ば〜 v0.1 リリースの 2009 年 1 月)" | "18 か月 (2007 年半ば〜 2008 年 8 月)" ― それは約 14 か月 |
| 実装期間 | 「実装作業 (2007 年半ば〜 2008 年 8 月)」 と「実装」 を明示 | 「開発期間 (2007 年半ば〜 2008 年 8 月)」 ― 18 か月の用法と衝突 |
| 着手起点 | 「2007 年半ば頃」「2007 年半ば以降」 | 「2007 年初頭」「2007 年 5 月」 ― 第 1 段を超える精度 |
| 作業順序 | 「コードを先に書き、 その後で論文を書いた」 (D3 を踏襲) | 「並行して書かれた」 ― D3 と矛盾 |
| 実装完了 | 「設計は 2008 年 8 月までに実質的に完了」「実装作業は 2008 年 8 月までに実質的に完了」 | 「ビットコインは 2008 年 8 月までに完了していた」 ― 運用面の refinement は v0.1 リリースまで継続 |
| サトシの引用 | verbatim のみ、 例:「コーディングしながらこの 1 年半でそれらの細かい詳細をすべて検討してきた」 | 「この 1 年半、 細部まで詰めながらコーディングしてきた」 ― 言い換え |
| D4 の出典帰属 | 「2008 年 11 月 17 日 cryptography メーリングリスト」 (ジェームズ・A・ドナルドへの返信) | 「2008 年 8 月のアダム・バック宛メール」 ― 宛先・媒体ともに誤り |
| D5 の出典帰属 | 「2009 年 7 月 21 日マルッティ・マルミ宛メール」 | 「マイク・ハーン宛メール」 ― 宛先誤り |
| 識別仮説ページでの 18 か月期間 | 「2007 年半ばから v0.1 リリースの 2009 年 1 月までの 18 か月の集中的な開発期間 (実装作業は 2008 年 8 月までに実質的に完了)」 | 「2007 年半ばから 2008 年 8 月まで」 を「18 か月」 ラベル付きで |

エントリが公開前期間のみ (2007 年半ば〜 2008 年 8 月) を扱うときは、 「実装期間」「公開前の実装期間」 のように明示的な限定を付けて、 広い 18 か月期間と区別する。

## 7. 限界と本エントリの位置

- 本エントリは 2026-05 の Archive 監査結果を反映している。 新規一次資料 (新たに公開されるサトシのメール、 v0.1.x ソースの再解析によるフォレンジック発見) があれば、 段間の項目移動や §2-§4 の更新が必要
- §6 の canonical 表現規約は Archive 内の整合性ルール。 外部の記事・書籍・他媒体での同じ期間の表現を制約しない ― Archive の読みが唯一の妥当な読みだとも主張しない。 Archive 内で一つの主張に一つの表現を使い、 読者がエントリ間で同じ anchor に依拠できることを保証するだけ
- 本エントリはサトシの身元を絞り込まない。 身元の問いは[識別仮説 overview](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/) と各候補エントリの管轄。 本エントリが確立するのは、 リリース前期間に**何が起きたか**に関する任意の主張の evidence tier であって、 **誰が**それを行ったかではない
- 4 段構造はこの証拠を整理する唯一の方法ではない。 別の読者は第 2 段と第 3 段を統合するかもしれない、 または第 2 段を「算術的」 と「解釈的」 推定に分けるかもしれない。 ここで採用した 4 段は、 Archive が走らせられる 4 つの異なる検証経路にきれいに対応するため選ばれた

## 8. まとめ

- サトシはリリース前期間について 5 つの direct な自己発言を残した (§2 の D1〜D5)。 それぞれ verbatim で、 日付があり、 特定の受信者または媒体に紐付いている。 これらが第 1 段の事実のすべてである
- 5 つの保守的な inferred 主張 (§3 の I1〜I5) が第 1 段から導かれる ― 2007 年半ば着手、 18 か月期間の終点 = 2009 年 1 月、 2008 年 8 月までの実装作業実質完了、 意図的な「コード先」 方法論、 2008 年以前のサイファーパンクコミュニティでの可視の不参加。 それぞれ書くときはヘッジを付け、 事実として記述しない
- 5 つの独立フォレンジック補強 (§4 の F1〜F5) が第 2 段の推定を補強する ― ただし格上げはしない。 フォレンジック記録は canonical 時間軸と整合する; canonical 時間軸を証明するわけではない
- 8 つのカテゴリの主張 (§5) が公開記録上 *open* である ― 着手日の精度、 コーディング前の構想期間の長さ、 単独 vs チーム、 位置、 母語、 狭義の動機、 受動的読書、 身元。 これらは Archive のどこでも事実として書かない
- §6 の canonical 表現規約は、 Archive 著者に具体的な使用表現と回避すべき反パターンを与える。 本エントリは、 リリース前期間に言及する将来のエントリの真実源として機能する
