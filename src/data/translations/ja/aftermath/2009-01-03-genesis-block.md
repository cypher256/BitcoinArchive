---
title: "なぜサトシはビットコイン最初のブロックに「銀行救済」の見出しを刻んだのか"
date: 2009-01-03T18:15:05Z
type: "article"
source: "sourceforge"
sourceUrl: "https://sourceforge.net/projects/bitcoin/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "最初のブロックに刻まれたタイムズ紙の見出しは、二度目の銀行救済を伝える一行 ― サトシが設計の中に残した唯一の個人の声。なぜその見出しを選んだのかを読む。"
isSatoshi: true
tags:
  - "sourceforge"
  - "genesis-block"
  - "historic"
  - "blockchain"
secondarySources:
  - name: "ブロック 0 on mempool.space"
    url: "https://mempool.space/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"
  - name: "ブロック 0 on Blockstream Explorer"
    url: "https://blockstream.info/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"
relatedEntries:
  - aftermath/2008-10-31-satoshi-nakamoto-biography
  - analysis/2009-01-03-genesis-block-hardcode-analysis
  - analysis/2008-10-31-satoshi-anonymity-architecture
  - aftermath/2024-10-01-bitcoin-magazine-genesis-block-5-day-mystery
  - aftermath/2022-10-06-serhack-alternative-genesis-block
  - aftermath/2020-11-23-chain-bulletin-satoshi-london-hypothesis
  - aftermath/2011-04-26-satoshi-final-known-email
  - analysis/2026-05-23-how-bitcoin-works-visual-glossary
  - design/2009-01-03-bitcoin-system-design-overview
quotes:
  - id: "q1"
    person: "The Times"
    date: "2009-01-03"
translationStatus: complete
---

2009 年 1 月 3 日、サトシ・ナカモトは Bitcoin ブロックチェーンの最初のブロックを v0.1 ソースにハードコードした。そのブロックのコインベーストランザクションに刻んだのは、ソフトウェアのバージョン文字列でも、自分の名前でも、「Hello World」でもなく、その日のタイムズ紙一面の見出しをそのまま転記したものだった：

<!-- quote: q1 -->
> The Times 03/Jan/2009 Chancellor on brink of second bailout for banks
>
> 財務相、銀行への 2 度目の救済へ

これがサトシが Bitcoin の設計の中に置いた、ただ一つの個人の声だ。他のあらゆる場面で、彼は身元の手がかりを丹念に削っていた ― Tor の使用、アドレスを使い分けたメールアカウント、英米綴りの混在、タイピング癖への注意、自発的な退場 ([匿名性アーキテクチャ分析](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-anonymity-architecture/)に全体像)。設計の中のある一点だけ、彼は痕跡を削ることを止めて、逆に一つ挿入した。その一点に選んだ場所が、Bitcoin の最初のブロックだった ― システムが持つもっとも永続的な表面である。

永続性は二つの軸で効いている。ブロックそのものは取り除けない。すべてのノードが定数からバイト単位で同一のコピーを自力で組み立てるからだ。そのブロックに結びついた 50 BTC のコインベース報酬は動かせない。v0.1 のブロック 0 構築経路はコインベース出力を UTXO セットに書き込まないため、報酬はチェーン上に存在しながら仕様上動かせない ([ジェネシスブロック・ハードコード分析](/BitcoinArchive/ja/entries/analysis/2009-01-03-genesis-block-hardcode-analysis/) §5〜§6 で機構を詳述)。メッセージと動かない 50 BTC が並んで置かれている ― どちらも編集できず、撤回できず、ひそかに抜き取ることもできない。

選ばれた見出しは中立なタイムスタンプの選定ではなかった。「財務相、銀行への 2 度目の救済へ」は、政府が二度目の救済に踏み切る瞬間 ― そもそも救済を必要とする失敗を繰り返してきた金融システムに、もう一度公的資金で底入れする瞬間 ― を名指していた。[ホワイトペーパー](/BitcoinArchive/ja/entries/emails/cryptography/2008-10-31-bitcoin-whitepaper-final/)は 2 か月前、信頼できる金融仲介者を必要としない支払いシステムを提案していた。ジェネシスのコインベースは、その提案を、「仲介者を必要とすること」が現実に生み出している事象に結びつけた。この組み合わせが編集判断だ。

サトシは書き物で確信を表に出すことがめったになかった。もっとも近い記録された瞬間は、[2008 年 11 月 6 日の暗号学メーリングリストでジェームズ・A・ドナルドに返した一行](/BitcoinArchive/ja/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-06-sni4-bitcoin-p2p-e-cash-paper/) ― 「我々は軍拡競争における大きな戦いに勝ち、数年間の新たな自由の領域を獲得することができる」 ― 一度言って、繰り返さなかった。後のメッセージ、とりわけ [2011 年 4 月のマイク・ハーンとギャビン・アンドレセンへの別れ](/BitcoinArchive/ja/entries/aftermath/2011-04-26-satoshi-final-known-email/)は意図して平板だ ― 「他のことに取り組むことにした」。平板な業務散文と、消えた個人の声、二つの語調の間で、ブロック 0 のタイムズ紙見出しだけが、通りすがりに語られたのではなく、取り戻せない形式で記録に刻まれた唯一の宣言である。

ブロックハッシュ：

```
000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f
```

なぜジェネシスがハードコードなのか、なぜコインベースが動かせないのか、なぜ次のブロック（ブロック 1）が 10 分目標にもかかわらず 5 日後に出現するのか ― 構造的読みは[ジェネシスブロック・ハードコード分析](/BitcoinArchive/ja/entries/analysis/2009-01-03-genesis-block-hardcode-analysis/)を参照。同じ 5 日のギャップを扱った [2024 年 Bitcoin Magazine の整理](/BitcoinArchive/ja/entries/aftermath/2024-10-01-bitcoin-magazine-genesis-block-5-day-mystery/)と並べて読むとよい。

*[補足：ジェネシスブロックのコインベースに刻まれたタイムズの見出しは、小説『[ジェネシス ― 創設者の消失と約束](/BitcoinArchive/ja/novel/)』で、公の場では一度も感情を見せなかった主人公が残した唯一の例外として読まれる。]*
