---
title: "ピーター・トッドとデイヴィッド・ハーディングがBIP 125でReplace-by-Feeを正式化"
date: 2015-12-04T00:00:00Z
type: "bip"
source: "github"
sourceUrl: "https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki"
author: "David A. Harding, Peter Todd"
participants:
  - name: "Peter Todd"
    slug: "peter-todd"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "BIP 125はオプトイン方式のReplace-by-Fee（RBF）を正式化し、Bitcoin送信者が未確認トランザクションをより手数料の高いバージョンに置換できることを通知するシグナリングを導入した。この概念はサトシ・ナカモトが2010年12月にBitcoinTalkで説明したオリジナルのトランザクション置換メカニズムに直接遡る——ピーター・トッドがフォーラムで2番目の投稿をしたまさにそのスレッドである。"
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
translationStatus: complete
---

<!-- speaker: narrator -->
2015年12月4日、デイヴィッド・A・ハーディングとピーター・トッドはBIP 125「Opt-in Full Replace-by-Fee Signaling」を公開した。未確認トランザクションをより手数料の高いバージョンに置換できることを通知する標準を確立し、サトシ・ナカモトが5年前に最初に説明した概念を正式化した。

**サトシの設計に起源：**

<!-- speaker: narrator -->
BIPのRationale（根拠）は、ナカモトのオリジナルのBitcoin実装にあったnSequence番号を使用したトランザクション置換メカニズムから概念を明示的に辿っている。サトシは2010年12月にBitcoinTalkでこの概念を説明し、送信者がより高い手数料でトランザクションを更新できる方法を述べた。この機能はDoS攻撃の懸念からBitcoin Coreから削除された。

**2010年12月の接続：**

<!-- speaker: Peter Todd -->
2010年12月10日、[ピーター・トッド](/BitcoinArchive/ja/entries/aftermath/2010-12-07-peter-todd-biography/)（当時[「retep」](/BitcoinArchive/ja/entries/aftermath/2010-12-07-retep-diaspora-invite-first-post/)として投稿）はサトシのトランザクション置換の説明に対して技術的な指摘で返信した：

> 「もちろん、正確に言えば、2つ目のトランザクションに手数料がある場合、入力と出力は*正確には*一致しない」

<!-- speaker: narrator -->
これはトッドのBitcoinTalkでの2回目の投稿で、登録から3日後だった。[サトシの最後の公開フォーラム投稿](/BitcoinArchive/ja/entries/forum/bitcointalk/2010-12-12-satoshi-final-post/)はその2日後だった。5年後、トッドはまさにサトシが説明していた概念を正式化した。

**BIP 125の仕組み：**

<!-- speaker: narrator -->
トランザクションは任意の入力のnSequence番号を（0xffffffff - 1）未満に設定することで置換可能性をシグナリングする。置換トランザクションは以下を満たす必要がある：元のトランザクションからの未確認入力のみ使用、絶対手数料が元を上回る、最低リレー手数料率を充足、退避されるトランザクション数が合計100を超えない。

**論争：**

<!-- speaker: narrator -->
RBFはBitcoin史上最も議論を呼んだ変更の一つだった。批判者はマーチャントが依存していた「ゼロ確認」トランザクションを壊すと主張した。支持者はゼロ確認トランザクションは元々安全ではなく、RBFはBitcoinの手数料市場の設計に沿うものだと反論した。オプトイン方式は妥協案だった——明示的にシグナリングしたトランザクションのみが置換対象となる。

**意義：**

<!-- speaker: narrator -->
BIP 125はサトシが始めたことを完成させた。オリジナルのトランザクション置換は安全でないとして削除された。トッドのオプトイン方式がそれを実用的なものにした。これが先人の仕事を引き継いだ開発者を表すのか、あるいはHBOのドキュメンタリー「Money Electric」が物議を醸す形で示唆したように同一の知性が未完の設計を完成させるために戻ってきたことを表すのかは、Bitcoinで最も議論される問いの一つであり続けている。
