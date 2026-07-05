---
title: "クレイグ・ライトはサトシだったのか — 本人が自ら名乗り出た、唯一の候補"
date: 2016-05-02T00:00:00Z
type: "analysis"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Craig_Steven_Wright"
author: "Craig Wright"
participants:
  - name: "Craig Wright"
    slug: "craig-wright"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "候補者自身が立てた唯一のサトシ正体説。2016 年 5 月のライトの自称、署名再利用の「証明」、そして 2024 年 COPA 対ライト判決 —— サトシではなく大規模な証拠偽造を認定した。"
isSatoshi: false
tags:
  - "satoshi-identity"
  - "craig-wright"
  - "identity-claim"
  - "debunked"
  - "copa"
  - "analysis"
  - "disputed"
secondarySources:
  - name: "COPA v Wright — UK High Court Judgment (March 14, 2024)"
    url: "https://www.judiciary.uk/judgments/copa-v-wright/"
  - name: "BBC — Craig Wright reveals himself as Bitcoin creator (May 2, 2016)"
    url: "https://www.bbc.co.uk/news/technology-36168863"
  - name: "Wired — Is Craig Wright Satoshi Nakamoto? (December 8, 2015)"
    url: "https://www.wired.com/2015/12/bitcoins-creator-satoshi-nakamoto-is-probably-this-unknown-australian-genius/"
  - name: "Law Gazette — 'Fake Satoshi' hit with costs bill over AI evidence (March 2025)"
    url: "https://www.lawgazette.co.uk/news/fake-satoshi-hit-with-costs-bill-over-ai-evidence/5122587.article"
partOf: "analysis/2008-10-31-satoshi-identity-hypotheses-overview"
relatedEntries:
  - aftermath/2016-05-02-craig-wright-biography
  - analysis/2008-10-31-satoshi-identity-hypotheses-overview
inlineLinkKeywords:
  - "クレイグ・ライト仮説"
  - "クレイグ・ライト＝サトシ"
translationStatus: complete
---

他のすべての固有名候補の仮説は、ある人物に *ついて* なされた主張だ。これだけは、本人 *によって* なされた。2016 年 5 月 2 日、クレイグ・ライトは [BBC・The Economist・GQ との連携インタビュー](/BitcoinArchive/ja/entries/aftermath/2016-05-02-craig-wright-bbc-economist-claim/)で、自分がサトシ・ナカモトであると宣言し、決着をつけるための暗号学的証明を提示した。証明は数時間で崩れ、8 年後に英国高等法院が [COPA 対ライト](/BitcoinArchive/ja/entries/aftermath/2024-03-14-copa-v-wright-ruling/)で、彼はサトシではなく、その主張を裏付けるために大規模に文書を偽造した、と認定した。出来事の全体と年表は[クレイグ・ライト伝記](/BitcoinArchive/ja/participants/craig-wright/)にある。

## 1. 仮説が主張する内容

主張は、クレイグ・スティーブン・ライト —— オーストラリアの計算機科学者・実業家 —— が 2008〜2011 年にサトシ・ナカモトの仮名の中の人物であり、ホワイトペーパーと初期のビットコインソフトウェアの著者だった、というものである。発端は 2015 年 12 月、[Wired と Gizmodo がライトを有力なサトシ候補と名指しした](/BitcoinArchive/ja/entries/aftermath/2015-12-08-wired-gizmodo-craig-wright-claims/)ときで、根拠とされた流出資料は後に捏造と判明する。ライトはその後、2016 年 5 月、自らの名で自分自身としてこの主張を行った。候補者が否定ではなく自ら主張した、唯一のサトシ正体仮説である。

## 2. 主張が依拠した論点

### 2.1 暗号学的「証明」

ビットコインの著者性は、原理的には暗号学的に示せる —— サトシの鍵を握る者は、その鍵でメッセージに署名できる。ライトは 2016 年 5 月、まさにこの実演を演じ、初期のビットコインブロックに関連する鍵で署名したメッセージを提示した。

反論：数時間のうちに、セキュリティ研究者たちはその「署名」が、2009 年のビットコイン取引から取り出した既存の署名を、あたかも主張する鍵での新規署名であるかのように再提示したものだと示した。複製された署名は、誰が鍵を握っているかについて何も示さない —— 証明に見えて何も証明しない、ただ一つの手だ。

### 2.2 初期ブロックの署名主張

ライトの論は、初期ブロック（1〜9 番、サトシがほぼ一人で採掘していた時期）の鍵で署名できることに依拠していた。

反論：それはジェネシスブロックのコインベース鍵には決して及ばなかった —— 決定打となるただ一つの実演である。[ジェネシスブロックハードコード分析](/BitcoinArchive/ja/entries/analysis/2009-01-03-genesis-block-hardcode-analysis/)が指摘するとおり、その署名はライトを含め誰も行っていない。1〜9 番の署名を主張しながら、問いを決する鍵を持つ唯一のブロックの手前で止まる論は、問いを未決のまま残す。

### 2.3 さらなる証拠の約束

2016 年 5 月の実演が失敗すると、ライトはさらに決定的な証拠を提示すると約束し、代わりに[撤回し](/BitcoinArchive/ja/participants/craig-wright/)、結局は匿名の年月を後にできなかったと書いた。

反論：そのさらなる証拠は来なかった。常に提示される寸前で、ついに提示されない証拠に依拠する主張は、約束からは何の重みも得ない。

## 3. 反証

| 反証 | 中心観察 | 強度の評価 |
|---|---|---|
| §3.1 署名の再利用 | 2016 年の「証明」は 2009 年取引の署名の再提示で、新規署名ではない | 主張が提示した唯一の積極的実演を破壊する |
| §3.2 COPA 対ライト判決 | 英国高等法院が 4 点にわたりライトはサトシでないと認定 | 全証拠記録に対する直接の司法判断 —— 最も強い単一の反証 |
| §3.3 偽造の認定 | 同法院がライトを極めて不誠実な証人とし、広範な文書偽造を認定 | 積極的論拠を主張への反証へと転じさせる |
| §3.4 署名されないジェネシス鍵 | 決定打となる実演は一度も行われなかった | 主張は、確証しえた唯一の試験を一度も満たしていない |

### 3.1 署名の再利用

2016 年の実演は主張の唯一の積極的証拠であり、数時間の検証で崩れた —— ライトが提示した署名は、握っていると主張する鍵で新たに生成したものではなく、2009 年のビットコイン取引から複製したものだった。実演が崩れた後、ライトは決定的な証拠を約束したが、提示しなかった。

### 3.2 COPA 対ライト判決

2024 年 3 月 14 日、[英国高等法院のメラー判事は](/BitcoinArchive/ja/entries/aftermath/2024-03-14-copa-v-wright-ruling/)、暗号オープン特許アライアンス（COPA）が提起した訴訟で、4 つの別個の点について、ライトはホワイトペーパーの著者ではなく、2008〜2011 年にサトシの仮名で活動した人物でもなく、ビットコインシステムを創設してもおらず、ビットコインソフトウェアの初期バージョンを開発してもいない、と認定した。判決は、[マルッティ・マルミ](/BitcoinArchive/ja/entries/aftermath/2024-02-21-copa-trial-malmi-testimony/)や[マイク・ハーン](/BitcoinArchive/ja/entries/aftermath/2024-02-22-mike-hearn-copa-trial-testimony/)を含む初期参加者の証言を聴いた本裁判の後に下された。

### 3.3 偽造の認定

同じ判決は、主張を信用しないと述べるにとどまらなかった —— 主張が意図的かつ広範な文書偽造によって支えられていたと認定し、ライトを極めて不誠実な証人と評した。この型は裁判後も続いた。2025 年 3 月、控訴裁判所は、ライトの AI で作成した提出書面が実在しない判例を引用し裁判について虚偽の陳述を含んでいたとして、22 万 5000 ポンドの費用支払いを命じた。捏造された証拠で支えられた正体主張は、著者性の弱い証拠なのではない。著者性に反する証拠である。

### 3.4 署名されないジェネシス鍵

著者性を主張した 9 年の間、ライトは論争を終わらせるただ一つの実演 —— ジェネシスブロックの鍵による署名 —— を一度も行わなかった。[ジェネシスブロックハードコード分析](/BitcoinArchive/ja/entries/analysis/2009-01-03-genesis-block-hardcode-analysis/)は、その署名が誰によっても行われていないことを記録する。それを提示するあらゆる動機を持つ主張者にとって、署名がないこと自体が雄弁な事実である。

## 4. 公的記録全体の中での位置

自称は[ドリアン・ナカモトの名前一致](/BitcoinArchive/ja/entries/analysis/2014-03-06-dorian-nakamoto-satoshi-identity-hypothesis/)の構造的な裏返しである —— 望まない人物に名前を貼り付ける外部の偶然ではなく、望む人物による内部の言明だ。両者はともに証拠が一本の糸に縮む —— 一方は名前、他方は本人の言い分 —— そして総覧の横断観察は、両者がともに公的に反証されたことを記録する。[サトシ同定の非対称性分析](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-identification-asymmetry/)は、自称がそれ自体の土俵で失敗する理由を鋭くする：真の著者なら、既知のサトシ鍵で署名するだけで著者性を容易に証明できる。だからそれができず、代わりに偽造する主張者は、まさにその回避した実演によって著者と区別される。候補全体の比較は[サトシ正体仮説の総覧](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/)を参照。

## 5. 本エントリーの限界

- 本エントリーは新しい証拠を提示するものではない。公的に利用可能な資料を整理する。
- 出来事の全体 —— 2016 年の宣言、Wired／Gizmodo の先行報道、Cobra へのホワイトペーパー訴訟、裁判、控訴 —— は[クレイグ・ライト伝記](/BitcoinArchive/ja/participants/craig-wright/)にある。本エントリーは仮説の論述のみを扱う。

本仮説エントリーは[クレイグ・ライト伝記](/BitcoinArchive/ja/participants/craig-wright/)（仮説の対象人物）と[サトシ正体仮説の総覧](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/)から参照される。総覧は、必要だが十分ではないという評価枠組みの中で、クレイグ・ライトを C 群に位置づけている。
