---
title: "ピーター・トッドとデイヴィッド・ハーディングが BIP 125 で Replace-by-Fee を正式化"
date: 2015-12-04T00:00:00Z
type: "article"
source: "github"
sourceUrl: "https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki"
author: "David A. Harding, Peter Todd"
participants:
  - name: "Peter Todd"
    slug: "peter-todd"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "BIP 125 はオプトイン Replace-by-Fee（RBF）を正式化。サトシの 2010 年 12 月 BitcoinTalk 提案を起源とし、トッドのフォーラム 2 件目投稿のスレッド。"
isSatoshi: false
tags:
  - "peter-todd"
  - "bip"
  - "replace-by-fee"
  - "transaction-policy"
  - "satoshi-connection"
secondarySources:
  - name: "Bitcoin Wiki — Transaction replacement"
    url: "https://en.bitcoin.it/wiki/Transaction_replacement"
  - name: "BitcoinTalk — Fees in BitDNS confusion（サトシの原議論）"
    url: "https://bitcointalk.org/index.php?topic=2181.msg28918#msg28918"
  - name: "HBO — Money Electric: The Bitcoin Mystery"
    url: "https://www.hbo.com/movies/money-electric-the-bitcoin-mystery"
relatedEntries:
  - aftermath/2010-12-07-peter-todd-biography
  - aftermath/2010-12-07-retep-diaspora-invite-first-post
  - aftermath/2014-10-01-peter-todd-bip-65-checklocktimeverify
  - aftermath/2016-09-15-peter-todd-opentimestamps-announcement
  - aftermath/2016-10-22-peter-todd-zcash-trusted-setup
  - aftermath/2024-10-08-hbo-money-electric-peter-todd
  - analysis/2024-10-08-todd-satoshi-identity-hypothesis
  - bip/2015-11-03-bip-0125
  - analysis/2026-05-18-mining-reward-exhaustion-fee-only-future
  - design/2009-01-03-bitcoin-monetary-design
quotes:
  - id: "q1"
    person: "Peter Todd"
    personSlug: "peter-todd"
    date: "2010-12-10T01:27:59Z"
    sourceEntryId: "forum/bitcointalk/topic-2181/2010-12-10-retep-re-fees-in-bitdns-confusion"
translationStatus: complete
---

![台帳カードの中で 1 件の取引が取り消されて手数料の高い取引に置き換わる様子と、オプトインの切替スイッチ、年表でつながる 2 つのシルエットの人物を、濃紺の背景に描いたイラスト。](/BitcoinArchive/images/analysis/2015-12-04-peter-todd-bip-125-replace-by-fee-hero.png)

<!-- speaker: narrator -->
2015年12月4日、デイヴィッド・A・ハーディングとピーター・トッドは BIP 125「Opt-in Full Replace-by-Fee Signaling」を公開した。未確認トランザクションをより手数料の高いバージョンに置換できることを通知する標準を確立し、サトシ・ナカモトが 5年前に最初に説明した概念を正式化した。

## サトシの設計に起源

<!-- speaker: narrator -->
BIP の Rationale（根拠）は、ナカモトのオリジナルの Bitcoin 実装にあった nSequence 番号を使用したトランザクション置換メカニズムから概念を明示的に辿っている。サトシは 2010年12月に BitcoinTalk でこの概念を説明し、送信者がより高い手数料でトランザクションを更新できる方法を述べた。この機能は DoS 攻撃の懸念から Bitcoin Core から削除された。サトシ自身が 2010 年 8 月に無効化し、残っていた不要コードは 2013 年 11 月に最終的に削除された。この手数料機構の歴史は[通貨設計エントリー](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-monetary-design/)で通しで追える。

## 2010年12月のつながり

2010年12月10日、[ピーター・トッド](/BitcoinArchive/ja/participants/peter-todd/)（当時[「retep」](/BitcoinArchive/ja/entries/aftermath/2010-12-07-retep-diaspora-invite-first-post/)として投稿）はサトシのトランザクション置換の説明に対して技術的な指摘で返信した：

<!-- quote: q1 -->
> 「もちろん、正確に言えば、二つ目のトランザクションに手数料がある場合、入力と出力は*正確には*一致しない」

<!-- speaker: narrator -->
これはトッドの BitcoinTalk での 2回目の投稿で、登録から 3日後だった。[サトシの最後の公開フォーラム投稿](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-2228/2010-12-12-satoshi-final-post/)はその 2日後だった。5年後、トッドはまさにサトシが説明していた概念を正式化した。

## BIP 125 の仕組み

<!-- speaker: narrator -->
トランザクションは任意の入力の nSequence 番号を（0xffffffff - 1）未満に設定することで置換可能性をシグナリングする。置換トランザクションは以下を満たす必要がある：元のトランザクションからの未確認入力のみ使用、絶対手数料が元を上回る、最低リレー手数料率を充足、退避されるトランザクション数が合計 100 を超えない。

## 論争

<!-- speaker: narrator -->
RBF は激しい論争を呼んだ変更だった。批判者はマーチャントが依存していた「ゼロ確認」トランザクションを壊すと主張した。支持者はゼロ確認トランザクションは元々安全ではなく、RBF は Bitcoin の手数料市場の設計に沿うものだと反論した。オプトイン方式は妥協案だった。明示的にシグナリングしたトランザクションのみが置換対象となる。

## 意義

<!-- speaker: narrator -->
BIP 125 はサトシが始めたことを完成させた。オリジナルのトランザクション置換は安全でないとして削除された。トッドのオプトイン方式がそれを実用的なものにした。これが先人の仕事を引き継いだ開発者を表すのか、あるいは [HBO のドキュメンタリー『Money Electric』](/BitcoinArchive/ja/entries/aftermath/2024-10-08-hbo-money-electric-peter-todd/)が物議を醸す形で示唆したように同一の知性が未完の設計を完成させるために戻ってきたことを表すのかは、未解決の問いのままである。
