---
title: "サトシは自分について何を語ったのか — 技術は語った、自分のことは語らなかった男"
date: 2008-08-20T00:00:00Z
type: "analysis"
source: "bitcoin-magazine"
sourceUrl: "https://bitcoinmagazine.com/technical/bitcoin-adam-backs-complete-emails-satoshi-nakamoto"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシの全自己言及を公開記録（2008 年 8 月〜2011 年 4 月）から整理。識別主張、開発過程、運用状態、撤退表明、真正性議論つき。各行は一次資料に紐付け。"
isSatoshi: false
tags:
  - "satoshi-identity"
  - "primary-source-inventory"
  - "self-statements"
  - "analysis"
secondarySources:
  - name: "P2P Foundation — Satoshi Nakamoto profile (Wayback Machine snapshot; original offline since the Ning network was taken down)"
    url: "https://web.archive.org/web/20151225125440/http://p2pfoundation.ning.com/profile/SatoshiNakamoto"
  - name: "Satoshi Nakamoto Institute — Complete Works"
    url: "https://satoshi.nakamotoinstitute.org/"
  - name: "Martti Malmi's published email archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "Mike Hearn — published Satoshi correspondence"
    url: "https://plan99.net/~mike/satoshi-emails/"
  - name: "Gavin Andresen — Eleven Years Ago Today (alert key handover)"
    url: "https://riski.wiki/wiki/User:Gavinandresen/Blog/2022-04-26_Eleven_years_ago_today%E2%80%A6"
relatedEntries:
  - analysis/2008-10-31-satoshi-nationality-question
  - analysis/2010-12-27-satoshi-non-technical-silence
  - analysis/2008-08-21-what-they-said-about-satoshi
  - aftermath/2008-10-31-satoshi-nakamoto-biography
  - analysis/2008-10-31-satoshi-anonymity-architecture
  - analysis/2008-10-31-satoshi-identification-asymmetry
  - analysis/2008-08-20-satoshi-activity-timeline
  - aftermath/2008-08-20-adam-back-biography
  - aftermath/2008-08-22-wei-dai-biography
  - aftermath/2009-01-11-dustin-trammell-biography
  - aftermath/2009-04-12-mike-hearn-biography
  - aftermath/2009-05-01-martti-malmi-biography
  - aftermath/2010-06-11-gavin-andresen-biography
  - aftermath/2014-08-28-hal-finney-biography
  - aftermath/2010-09-01-satoshi-andresen-other-projects-notice
  - aftermath/2011-04-26-satoshi-final-known-email
  - aftermath/2014-01-12-wei-dai-retrospective-on-satoshi
  - aftermath/2016-05-02-gavin-andresen-satoshi-retrospective
  - aftermath/2020-11-26-coindesk-unpublished-satoshi-finney-emails
  - aftermath/2008-08-20-satoshi-to-adam-back
  - aftermath/2008-08-21-adam-back-to-satoshi
  - emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-17-bitcoin-p2p-e-cash-paper
  - aftermath/2009-01-12-satoshi-to-finney-connections
  - correspondence/martti-malmi/2009-07-21-bitcoin-024
  - correspondence/mike-hearn/holding-coins/2011-04-23-satoshi-to-hearn-moved-on
  - aftermath/2011-04-26-satoshi-to-andresen-alert-key
  - aftermath/2014-03-07-satoshi-p2p-foundation-return
  - aftermath/2009-07-22-bitcoin-exchange-proposal
  - aftermath/2026-04-22-finding-satoshi-finney-sassaman-documentary
  - aftermath/2024-10-28-jeff-garzik-satoshi-lone-genius
  - correspondence/mike-hearn/more-questions/2011-01-10-satoshi-to-hearn-secp256k1
inlineLinkKeywords:
  - "サトシの自己言及"
  - "サトシ自身の言葉"
translationStatus: complete
---

![左半分には回路図のような技術的な線と引用メモ、右半分には顔のないシルエットと斜線で消された身分証カードが並んでいる](/BitcoinArchive/images/analysis/2008-08-20-satoshi-self-statements-hero.png)

32 か月の公開記録の中で、サトシ・ナカモトは何十回も自分自身について書いている。だが書かれた中身は身元に関する主張ではほとんどない（そのような主張は数えるほどしかない）。多くを占めるのは、設計過程の開示（「私は実はこれを逆順にやった。コードを全部書いてから論文を書いた」）、運用状態のメモ（「ここ 1 か月半ほど、他のことで忙しかった」）、能力の自己評価（「そこは自分の専門外だから助かる」）、別れの言葉（「他のことに取り組むことにした」）である。本エントリは、サトシが自分自身を主語または含意として置いた、自明でない発言のすべてを棚卸しする。それを「サトシが自分について何を言ったか」という一つの証拠群として読み、「公開記録に残る行動の軌跡が何を示しているか」とは分けて扱う。

**収録基準:** 発言にサトシの自己言及（自分の状態、立場、能力、意図、身元のいずれか）が含まれていること。

**収録範囲外:** 自己言及を含まない純粋な業務発信（論文の引用書誌の依頼、コードのリリース告知、プロトコル機構の説明等）。これらはアーカイブの別エントリにあるが、ここには集めない。

## 1. 自己言及の網羅一覧

5 つのサブカテゴリーに分け、各カテゴリー内は時系列順。「状態」列は、その発言が独立に検証できる証拠に照らしたときどう成立するかを示す（発言が誠実なものだったかどうかではない）。

### 1.1 身元の主張（P2P Foundation プロフィール）

| サトシの発言 | 一次資料 | 日付 | 状態 |
|---|---|---|---|
| 生年月日：1975 年 4 月 5 日 | P2P Foundation プロフィール（Wayback） | プロフィール作成 2009 年 | プロフィール項目。架空のものと広く考えられている |
| 国籍：日本人 | P2P Foundation プロフィール（Wayback） | 同上 | プロフィール項目。英連邦慣習の英文と矛盾 |
| 所在地：日本 | P2P Foundation プロフィール（Wayback） | 同上 | プロフィール項目。投稿タイムスタンプ分析と矛盾 |

3 つの身元の主張はすべて単一のアーティファクト（P2P Foundation プロフィール）にまとまっており、公開記録の他の場所には現れない。

### 1.2 設計過程の自己開示

| サトシの発言 | 一次資料 | 日付 | 状態 |
|---|---|---|---|
| 「あなたのアイデアを完全に動作するシステムに拡張する論文を公開する準備をしている」 | [→ アダム・バック 2008-08-20](/BitcoinArchive/ja/entries/aftermath/2008-08-20-satoshi-to-adam-back/) | 2008-08-20 | 著者性と意図の自己帰属。後続のホワイトペーパー公開で確定 |
| 「b-money は読んだことがなかったが、私のアイデアはまさにその出発点から始まっている」 | [→ アダム・バック 2008-08-21](/BitcoinArchive/ja/entries/aftermath/2008-08-21-adam-back-to-satoshi/) | 2008-08-21 | 開発期間中の特定の知識ギャップの自己開示 |
| 「あなたの b-money ページを非常に興味深く読んだ」 (バックの紹介後) | [→ ウェイ・ダイ 2008-08-22](/BitcoinArchive/ja/entries/correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai/) | 2008-08-22 | 上の行と内部的に整合 |
| 「コーディングしながらこの 1 年半でそれらの細かい詳細をすべて検討してきた」 | [cryptography メーリングリスト 2008-11-17](/BitcoinArchive/ja/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-17-bitcoin-p2p-e-cash-paper/) | 2008-11-17 | 約 18 か月のコーディング期間を述べる。逆算するとコーディング開始は 2007 年半ば頃。サトシが後に語った「2007 年から」「リリース前に 2 年間の開発」はこの同じリリース前作業をより広い範囲で語ったもの。作業順序 (コードが先、論文が後) は §2.2 で別途整理 |
| 「ビットコインと呼ぶ新しいオープンソース P2P 電子キャッシュシステムを開発した。完全に分散化されている、なぜならすべてが信頼ではなく暗号学的証明に基づいているからだ」 | [P2P Foundation フォーラム](/BitcoinArchive/ja/entries/forum/p2pfoundation/bitcoin-open-source/2009-02-11-bitcoin-open-source-implementation/) | 2009-02-11 | 一人称による公的著者性の表明。プロジェクトを制度的信頼に対立する位置に置く |

### 1.3 運用状態と能力の自己開示

| サトシの発言 | 一次資料 | 日付 | 状態 |
|---|---|---|---|
| 「残念だけど、今いる場所からは外部からの接続が受けられない」 | [→ ハル・フィニー](/BitcoinArchive/ja/entries/aftermath/2009-01-12-satoshi-to-finney-connections/) | 2009-01-12 | 運用状態の自己開示。[リリース期環境分析](/BitcoinArchive/ja/entries/analysis/2009-01-10-satoshi-launch-environment/)で扱う |
| 「私も今は大して役に立てない、仕事で忙しく、 18 か月の開発の後で休みが必要だ」 | [→ マルッティ・マルミ 2009-07-21](/BitcoinArchive/ja/entries/correspondence/martti-malmi/2009-07-21-bitcoin-024/) | 2009-07-21 | 「18 か月の開発」と述べる (この語句が示す範囲がコーディング期間と一致するかは表現上開いている)。疲労の自己開示 (同メール直前の文はハル・フィニーの活動低下を述べており、サトシの「私も」が自身の状態への転換となる) |
| 「そこは自分の専門外だ」 (Linux/FreeBSD テストについて) | BitcoinTalk フォーラム投稿、2009 年 12 月 | 2009-12 | クロスプラットフォームでの専門性ギャップ |
| 「ギャビンは技術的に自分よりはるかに Linux に精通している」 | ギャビン・アンドレセン宛のメール、2010 年 12 月 | 2010-12 | 自分の Linux 能力をギャビンと比べた本人の評価 |

### 1.4 撤退表明

| サトシの発言 | 一次資料 | 日付 | 状態 |
|---|---|---|---|
| 「他のプロジェクトに取り組んでいる」 (パラフレーズ。本文は公表されていない) | [→ ギャビン・アンドレセン 2010 年 9 月](/BitcoinArchive/ja/entries/aftermath/2010-09-01-satoshi-andresen-other-projects-notice/) | 2010-09 (具体的な日付は公的記録になし) | ステップバック意図の最も早い記録。本文はギャビンの後年インタビューで言及されるのみで、原文は公表されていない |
| 「あといくつかのことを行ったら、バトンを渡す予定だ」 | [BitcoinTalk topic-2228、最後の公開投稿](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-2228/2010-12-12-satoshi-final-post/) | 2010-12-12 | BitcoinTalk における最後の公開投稿。4 か月後の私的離脱の前触れ |
| 「他のことに取り組むことにした。[ギャビン](/BitcoinArchive/ja/participants/gavin-andresen/)たちに任せれば、安心だ」 | [→ マイク・ハーン 2011-04-23](/BitcoinArchive/ja/entries/correspondence/mike-hearn/holding-coins/2011-04-23-satoshi-to-hearn-moved-on/) | 2011-04-23 | 撤退表明 |
| 「私のことを謎めいた影の人物として話し続けるのはやめてほしい、報道はそれを海賊通貨という切り口に変えてしまう」 | [→ ギャビン・アンドレセン 2011-04-26](/BitcoinArchive/ja/entries/aftermath/2011-04-26-satoshi-to-andresen-alert-key/) | 2011-04-26 | 自己認識の表明。「謎めいた影の人物」という枠組みの拒否 |
| 「他のことに取り組むことにした。おそらく連絡が取れなくなる」 | [→ ギャビン・アンドレセン 2011-04-26](/BitcoinArchive/ja/entries/aftermath/2011-04-26-satoshi-to-andresen-alert-key/) | 2011-04-26 | 最終的な撤退表明 |

### 1.5 真正性議論あり

| サトシの発言 | 一次資料 | 日付 | 状態 |
|---|---|---|---|
| 「私はドリアン・ナカモトではない」 | [Newsweek 報道後の P2P Foundation プロフィール投稿](/BitcoinArchive/ja/entries/aftermath/2014-03-07-satoshi-p2p-foundation-return/) | 2014-03-07 | 真正性議論あり。投稿が元のサトシ本人かどうかは未確定 |

### 1.6 公開前期間に関する自己発言 (記録された 11 の言及)

上の小節は*自己開示の種類*で発言を分類している。本小節はそのうちの一部を *サトシが公開前作業について何かを言った時期*で並べ直したものである。対象は、2009 年 1 月 9 日の v0.1 リリースまで誰にも知られず進行した設計とコーディングの取り組みについての言及。 11 の記録された言及がこの期間に関わる: 7 つは作業中のもの (2008 年 8 月 〜 2009 年 7 月)、 4 つは事後のもの (2010 年 6 月 〜 2011 年 1 月)、最も古い 2 つはサイファーパンク系譜に関する知識をめぐる問いについても時期を確定する。日付順:

| # | 日付 (UTC) | 宛先または媒体 | 時期・順序に関する発言 | この発言が直接確定すること (解釈ではなく発話事実) |
|---|---|---|---|---|
| D1 | 2008-08-20 | → [アダム・バック](/BitcoinArchive/ja/entries/correspondence/adam-back/2008-08-20-satoshi-to-adam-back-hashcash-citation/) | 「あなたの Hashcash 論文を参考文献として引用する論文をリリースする準備をしている」 + 「C++ 実装もほぼ完成しており、オープンソースとしてリリース予定だ」 | 2008 年 8 月 20 日時点の表現: 論文公開準備中、 C++ 実装は「ほぼ完成」 |
| D2 | 2008-08-21 | → [アダム・バック](/BitcoinArchive/ja/entries/correspondence/adam-back/2008-08-21-satoshi-to-adam-back-b-money/) | 「ありがとう。b-money は読んだことがなかったが、私のアイデアはまさにその出発点から始まっている」 | 2008 年 8 月 21 日時点の知識状態: b-money はバックの紹介まで未知。設計の起点を「まさにその出発点」と表現 |
| D3 | 2008-08-22 | → [ウェイ・ダイ](/BitcoinArchive/ja/entries/correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai/) | 「あなたの b-money ページを非常に興味深く読んだ。あなたのアイデアを完全に動作するシステムに拡張した論文を公開する準備をしている」 | 2008 年 8 月 22 日時点の表現: 自身の作業を「完全に動作するシステム」と記述 |
| D4 | 2008-10-31 | [cryptography メーリングリスト (告知投稿)](/BitcoinArchive/ja/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-10-31-bitcoin-p2p-e-cash-paper/) | 「新しい電子キャッシュシステムに取り組んでいる。完全な P2P 方式で、信頼された第三者を必要としない」 | 最初の公開告知。英文原文は現在完了形 "I've been working on"。過去から続く作業を含意するが、期間は明示しない |
| D5 | 2008-11-09 | → [ハル・フィニー](/BitcoinArchive/ja/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-10-re-bitcoin-p2p-e-cash-paper-satoshi-finney/) | 「ご質問をありがたく思う。実は私はこれを逆の順序で行った。すべての問題を解決できると自分を納得させるために、まずすべてのコードを書き、その後論文を書いた」 | 作業順序: コードを先に書き、その後で論文 |
| D6 | 2008-11-17 | [cryptography メーリングリスト (ジェームズ・A・ドナルドへの返信)](/BitcoinArchive/ja/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-17-bitcoin-p2p-e-cash-paper/) | 「コーディングしながらこの 1 年半でそれらの細かい詳細をすべて検討してきた」 | コーディングの期間を「1 年半」と表現 |
| D7 | 2009-07-21 | → [マルッティ・マルミ](/BitcoinArchive/ja/entries/correspondence/martti-malmi/2009-07-21-bitcoin-024/) | 「18 か月の開発の後で一息つく必要がある」 | 期間を「18 か月」と表現 (この語句が示す範囲がコーディング期間と一致するかは表現上開いている) |
| D8 | 2010-06-17 | [BitcoinTalk 返信](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-195/2010-06-17-re-transactions-and-scripts-dup-hash160-equalverify-checksig/) | 「この設計は、私が何年も前に設計した非常に多様なトランザクション種別をサポートする」 | トランザクション種別の設計作業を「何年も前に」行われたものとして発言時点より前に位置づける |
| D9 | 2010-06-18 | [BitcoinTalk でのラズロ・ハニエツへの返信](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-195/2010-06-18-re-transactions-and-scripts-dup-hash160-equalverify-checksig/) | 「2007年からだ。ある時点で、信頼をまったく必要とせずにこれを行う方法があると確信し、考え続けることを止められなかった。コーディングよりも設計の作業の方がはるかに多かった」 | 「この設計にどれくらい取り組んできたか」への返答:「2007 年から」。作業全体の中で、コーディングよりも設計判断・思考に多くの比重があったことを示す |
| D10 | 2010-07-18 | [BitcoinTalk 返信](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-453/2010-07-18-re-msvc-build-and-sha-256/) | 「これを書いた 2 年以上前は、 SHA1 の実装は猛烈に速いものが多数あったが、 SHA256 はあまり注目されていなかった」 | 「2 年以上前」という表現で、ある特定の実装上の選択 (ビットコイン内の SHA-256 ルーチン) を 2008 年半ば以前に位置づける |
| D11 | 2011-01-10 | → [マイク・ハーン](/BitcoinArchive/ja/entries/correspondence/mike-hearn/more-questions/2011-01-10-satoshi-to-hearn-secp256k1/) | 「正直に言うと、このプロジェクトはリリース前に 2 年間の開発を要した」 | 期間を「2 年」と表現 |

これら 11 の発言は 3 つの別の事柄に関わる:

- **作業順序**。 D5 がコード先・論文後の順序を述べる唯一の自己発言である。「すべての問題を解決できると自分を納得させるために、まずすべてのコードを書き、その後論文を書いた」。同じメールの「詳細な仕様を書くよりも先にコードをリリースできると思う」という一節もこれを裏付ける。サトシはコーディングに先立つ独立した設計段階を述べておらず、記録された順序はコードが先、論文が後である。
- **期間**。 D6 と D7 は「1 年半」「18 か月」を同時期にほぼ近接して述べ、 D11 は「2 年」を事後に述べている。最も簡潔な読みは、これらが同じリリース前作業を異なる範囲と粒度で述べたものだとする読みである。具体的には、同時期のコーディング期間の幅 (2007 年半ばから v0.1 までの約 18 か月) と、後年の約 2 年という振り返りを指す。「2 年」は実際に経験したコーディング期間に、サトシがエディターを開く前に設計上の問題を考えていた数か月を足して丸めたものと読める。
- **作業内での D9**。「作業の大部分は設計であり、コーディングはそれより少なかった」は、作業全体に占める比重（問題を考え抜くこと、アーキテクチャを決めること、モデルをデバッグすること）を述べたものであり、実装に先行する独立した設計段階を述べたものではない。 D5 の作業順序がこの読みを裏付ける: 設計の形式的成果物である論文は、コードが実質的に完了した後に書かれた。

D1〜D11 のいずれも確定させないこと: 月単位の精度でのコーディング開始月、「設計」 (コーディングとは別) の終了月、ホワイトペーパー時点の「信頼の代わりに」という位置づけを超える動機、単独開発者か否か、地理的位置。いずれも本小節ではなく隣接する分析で扱われる。

## 2. カテゴリー別の読解

### 2.1 身元の主張（すべて単一プロフィール、独立に検証不能）

サトシを人物として位置づける主張は 3 つ（日本人、1975 年 4 月 5 日生まれ、日本在住）あり、いずれも単一の資料（P2P Foundation プロフィール）にまとまっている。公開記録の他の場所には現れない。これらが架空であるという広く共有された読みは、独立した 3 つの反証となる観察に基づいている:

- **言語**: サトシの英語は一貫して英連邦慣習を示す (米国式の「favor / color」ではなく英国式の「favour / colour」、「math」ではなく「maths」等)。日本語母語話者による作文とは整合しない
- **投稿タイムスタンプ**: 統計分析（特に『Chain Bulletin』のドンチョ・カライヴァノフによる）は、サトシの活動時間が日本時間で過ごす人物には自然でない範囲にあることを示している。[『Finding Satoshi』ドキュメンタリーのエントリ](/BitcoinArchive/ja/entries/aftermath/2026-04-22-finding-satoshi-finney-sassaman-documentary/)で引用されているアリッサ・ブラックバーンの活動時間帯分析は、これを太平洋標準時 (PST) 午前 6 時から午後 10 時という具体的な時間帯にまで絞り込み、フィニーとサッサマンという米国拠点の組み合わせに合致するとしているが、本目録はどちらの読みがより妥当かについて判断を下さない。もう一つ判断を下していない対がある：[このアーカイブ自身のコード分析](/BitcoinArchive/ja/entries/analysis/2009-01-09-satoshi-code-analysis/)は、サトシのコミット時刻の空白を Chain Bulletin の GMT ではなく EST 圏／CST 圏と読む。サトシ自身のタイムスタンプに関するこの二つの直接分析の不一致を、脚注ではなく主要な論点として扱うのが[国籍の問いの分析](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-nationality-question/)である
- **行動パターン**: プロフィール項目は、コーパス全体で *唯一の* 身元を位置づける主張である。主張通りの国・年齢で普通の生活を送る人物なら、年単位の通信を通じて偶発的な細部がもっと漏れるはずだが、サトシではそうなっていない

プロフィール主張は「**宣言された身元情報だが、記録の残りはこれを裏付けない**」と読むのが最も妥当であり、「サトシの実際の伝記」ではない。

### 2.2 開発過程の自己開示

これらは形式的な身元の宣言ではなく技術的会話のなかでの何気ない発言であるため、最も証拠的価値が高い:

- 「1 年半」のタイムライン (cryptography メーリングリスト 2008-11-17 + マルミ 2009-07-21) は、 2007 年半ばから 2009 年 1 月の v0.1 リリース付近までの約 18 か月のコーディング期間を示す。サトシ自身は作業順序も記録している: 「すべての問題を解けると確信するためにまず全コードを書く必要があり、その後で論文を書いた」 (ハル・フィニー宛、 2008 年 11 月 10 日)。論文と詳細仕様はコードが実質的に完了した後に書かれた。後年の「2007 年から」「リリース前に 2 年間の開発」という言い方 (ハニエツ 2010-06-18、ハーン 2011-01-10) は、この同じリリース前作業をより広い範囲で語ったものである。約 2 年の振り返りは、実際に経験したコーディング期間に、サトシがエディターを開く前に問題を考えていた数か月を足して丸めたものであり、コーディングに先行する独立した設計段階を想定するものではない。
- 「b-money のページは知らなかった」の自己開示 (アダム・バック 2008-08-21) は、開発期間中のサトシのサイファーパンク技術系譜への露出範囲を絞り込む。[サイファーパンク独立到達分析](/BitcoinArchive/ja/entries/analysis/2008-10-31-cypherpunk-independent-arrival/)で詳しく扱う
- 一人称による著者性の表明 (バック宛の「論文を公開する準備をしている」、P2P Foundation の「ビットコインと呼ぶ新しいオープンソース P2P 電子キャッシュシステムを開発した」) は、作業を一貫して一人の人物のものとして語っており、チームの仕事とはしていない

### 2.3 運用状態と能力の自己開示

- 「今いる場所からは」の自己開示 (ハル・フィニー 2009-01-10) は、身元の位置づけではなく運用上のものである。[リリース期環境分析](/BitcoinArchive/ja/entries/analysis/2009-01-10-satoshi-launch-environment/)で扱う
- Linux 能力の自己認識（2009 年 12 月のフォーラム「専門外」発言、2010 年 12 月のギャビン宛で自分の Linux 能力をギャビンと比較）は、Windows 中心の開発環境という[コード分析](/BitcoinArchive/ja/entries/analysis/2009-01-09-satoshi-code-analysis/)の観察と整合する
- 「18 か月の開発の後で休みが必要だ」の自己開示（マルミ 2009-07-21）はコーパス内で唯一の明示的な疲労表明である。後から見ると 2011 年の撤退の前兆となる。同じメールは、[それが引き金となったブートストラップ・アプリケーション提案のエントリー](/BitcoinArchive/ja/entries/aftermath/2009-07-22-bitcoin-exchange-proposal/)でもあり、ビットコイン初の取引所へと直接つながった

### 2.4 動機表明（特に乏しい）

公開記録には、サトシがビットコインを作った *理由* についての自己言及がほとんど含まれていない。最も近いのは P2P Foundation 紹介での制度的信頼に対する対立的な位置づけ（「中央銀行は通貨を毀損しないと信頼されなければならない」）と、特定の設計トレードオフについての BitcoinTalk での散発的な言及である。

もう一つは回帰定理スレッドにある。金と同じく希少だが通信路を通じて送れる卑金属を想像してみよ、と説いた直後、サトシは括弧で「[私は間違いなく欲しい](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-583/2010-08-27-re-bitcoin-does-not-violate-mises-regression-theorem/)」と添えた。自分の作ったものの希少性に買い手として自分も立つと述べた、数少ない一人称の確信だ。ただし経済論争の合間に落とした括弧書きであって、動機の宣言ではない。本人によるより広いマニフェストは存在しない。

この乏しさそれ自体が注目すべき観察である: サイファーパンクとクリプトアナーキストの宣言が声高に語られた時代に、サトシの *プロジェクト* は明確な思想を体現していたが、サトシが *自分で語った動機* は最小限だった。ウェイ・ダイの 2014 年の回想によるサトシの動機についての推測と対比すれば違いがはっきりする。あの読みはダイによるものであって、サトシによるものではない。

### 2.5 撤退表明

撤退の軌跡は公的記録上で 7 か月にわたる。最も早期の記録は 2010 年 9 月のギャビン・アンドレセン宛メール (「他のプロジェクトに取り組んでいる」)。公的な転換点は 2010 年 12 月 12 日の BitcoinTalk 投稿 (「あといくつかのことを行ったら、バトンを渡す予定だ」で締めくくられる、最後の公開発言)。2011 年 4 月の別れ (ハーン 2011-04-23、ギャビン 2011-04-26) は、すでに数か月前から見えていた過程の正式な終結である。

2011 年の一連の発言自体は一貫しており簡潔である:

- 完了の表明: リーダーシップは委譲された、プロジェクトは安全な手にある
- 具体的な要望: 私を「謎めいた影の人物」として描かないでほしい
- 前向きな表明: 「他のことに取り組むことにした。おそらく連絡が取れなくなる」

議論ありの 2014 年 P2P Foundation 投稿は唯一の曖昧な追加である。簡潔で、文脈に応じた発言（Newsweek のドリアン記事への反応）であり、元のプロフィール認証情報がまだ使われていた場合に限ってサトシ本人による発言となる。

## 3. この目録が確立すること、確立しないこと

**サトシ自身の発言から確立されること:**

- 実装作業のタイムライン: おおむね 2007 年半ばから 2008 年 8 月まで (サトシが後に「2007 年から」「リリース前に 2 年間の開発」と述べた約 2 年のリリース前作業のうちのコーディング期間。論文はコードの後に書かれた、 D5 による)
- 開発時点の知識境界: ハッシュキャッシュは知っていた、b-money は知らなかった
- リリース週の運用状態: 場所依存的な接続制約
- 能力プロファイル: Linux より Windows のほうが快適
- 撤退時の心理状態: 退く準備ができている、個人的な注目という枠組みに不快感
- 表明された身元情報: 日本人、1975-04-05 生まれ、日本在住（プロフィール由来）

**サトシ自身の発言だけでは確立されないこと:**

- 地理的所在地（プロフィール主張はタイムゾーン分析を通らない）
- 母語（プロフィールは日本語を含意。文体は英連邦の英語を示唆）
- 身元、年齢、実際の伝記（プロフィールは誤誘導するように設計されたと一般に読まれる）
- 動機の詳細（サトシは制度的信頼への高水準の対立的枠組みを与えたのみで、それ以上はほとんどない）
- 撤退の理由（撤退したことのみ）

非対称性は構造的である: サトシは技術的・運用的な自己開示には *寛大* で、伝記的・動機的な自己開示には *最小限* だった。これは偶然ではない。これは身元を伏せたまま他者と協力してシステムを築く人物の自己開示パターンである。共に開発に携わった[ジェフ・ガージックの回想](/BitcoinArchive/ja/entries/aftermath/2024-10-28-jeff-garzik-satoshi-lone-genius/)も、傍らで見た者の視点から同じパターンを裏付けている。サトシはビットコインの話以外は一切せず、個人的なことを漏らすこともなかったという証言である。

## 4. 公開記録上の行動的証拠との収束と乖離

行動的記録（文体、コーディングスタイル、投稿時間、ツール選択、匿名化手法）は独立した情報源を構成する。次の表は、その記録がサトシの自己言及とどこで収束し、どこで乖離するかをまとめる:

| 自己言及 | 行動的記録 | 判定 |
|---|---|---|
| 「日本人、日本在住、1975 年生まれ」 | 英文体は英連邦慣習。タイムスタンプは日本時間と整合しない | **乖離** |
| 「1 年半のコーディング」 | v0.1 のコード考古学は長期の単独開発と整合 | **収束** |
| 「b-money は知らなかった」 | ウェイ・ダイ 2014: サイファーパンクのコミュニティに以前から積極的に参加していた人物ではない | **収束** |
| 「今いる場所からは外部からの接続が受けられない」 | v0.1.2 リリース週のデバッグ活動は運用上の負荷と整合 | **収束** ([リリース期環境分析](/BitcoinArchive/ja/entries/analysis/2009-01-10-satoshi-launch-environment/)参照) |
| 「Linux 能力は劣る」 | v0.1 は Windows 専用、ハンガリアン記法は MS Windows C++ 業界の典型 | **収束** |
| 「他のことに取り組むことにした」 | 2011 年以降の確認された通信なし | **収束** |
| 「謎めいた影の人物ではない」 | 行動は意図的な強い匿名化と整合（Tor、匿名メールリレー、IP 追跡可能なメタデータなし。層別の全体像は[匿名性アーキテクチャ](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-anonymity-architecture/)に記載） | **乖離**。*行動* は、本人の好みに関係なく、「謎めいた人物」という認識を生み出すまさにそのものである |

体系的なパターン: **運用的・技術的な自己言及は行動的記録と収束する。身元を位置づける自己言及は乖離する**。両情報源は、サトシという開発者については整合的な物語を、サトシという人物については両立しない物語を語っている。

## 5. 限界

- **この目録は公開された分に限定される**。サトシと他者（特にマイク・ハーンとギャビン・アンドレセン）の間のメールは部分的または全体的に未公開のものが多く残る。新しい自己言及が出現する可能性がある
- **「真正性議論あり」の項目はきれいに分類できない**。2014 年のドリアン反論はその典型であり、元のプロフィール認証情報がサトシ本人に再使用されたなら自己言及だが、入手または推測されたなら自己言及ではない
- **何気ない発言を読み込みすぎる危険**。一部の項目（例: 1.3 の Linux 能力に関する発言）は技術スレッド内で他者の発言に応じた一言であり、意図的な身元開示ではない。これらを伝記的証拠として扱うには注意が要る
- **身元仮説は導かれない**。本エントリはサトシの実際の身元を絞り込まない。サトシが *語ったこと* と、それらの発言が記録の *示すもの* とどう関係するかを整理する。身元仮説の選択は本エントリの範囲外の証拠を必要とする

<!-- entry-closing -->
まとめて読むと、自己言及は開発者をくっきりと描き、人物を焦点の外に置く。私はこの分裂を、残った資料の偶然とは受け取らない。システムについては寛大で、その人物については沈黙した誰かが組み立てた仮名の形である。彼が語ったことは上に目録化した。彼が答えなかったことは肖像のもう半分であり、[サトシの非技術的スルー](/BitcoinArchive/ja/entries/analysis/2010-12-27-satoshi-non-technical-silence/)で扱う。
