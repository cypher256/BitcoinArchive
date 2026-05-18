---
title: "ピーター・トッド（1985–） — Bitcoin Core 開発者、Replace-by-Fee の提唱者"
date: 2010-12-07T00:00:00Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Peter_Todd"
author: "Peter Todd"
participants:
  - name: "Peter Todd"
    slug: "peter-todd"
description: "カナダの暗号学者、Bitcoin Core 開発者（1985-）。Replace-by-Fee 提唱、OpenTimestamps 開発。2024年 HBO にサトシ候補として挙げられたが本人は否定。"
isSatoshi: false
callout:
  entry: "analysis/2024-10-08-todd-satoshi-identity-hypothesis"
  label: "サトシ正体仮説"
tags:
  - "peter-todd"
  - "biography"
  - "replace-by-fee"
  - "opentimestamps"
  - "bitcoin-core"
secondarySources:
  - name: "Wikidata — Peter Todd (Q130523424)"
    url: "https://www.wikidata.org/wiki/Q130523424"
  - name: "Peter Todd — OpenTimestamps"
    url: "https://opentimestamps.org/"
  - name: "BIP 125 — Opt-in Full Replace-by-Fee Signaling"
    url: "https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki"
  - name: "HBO — Money Electric: The Bitcoin Mystery（2024年10月）"
    url: "https://www.hbo.com/movies/money-electric-the-bitcoin-mystery"
  - name: "Peter Todd — BitcoinTalk プロフィール"
    url: "https://bitcointalk.org/index.php?action=profile;u=2546"
  - name: "Peter Todd — GitHub プロフィール"
    url: "https://github.com/petertodd"
  - name: "Gregory Maxwell — Hacker News コメント（retep の逆綴りに気づくのに 10年近くかかった）"
    url: "https://news.ycombinator.com/item?id=41784567"
  - name: "Peter Todd — 公式ウェブサイト"
    url: "https://petertodd.org/"
relatedEntries:
  - aftermath/2010-12-07-retep-diaspora-invite-first-post
  - aftermath/2014-10-01-peter-todd-bip-65-checklocktimeverify
  - aftermath/2015-12-04-peter-todd-bip-125-replace-by-fee
  - aftermath/2016-09-15-peter-todd-opentimestamps-announcement
  - aftermath/2016-10-22-peter-todd-zcash-trusted-setup
  - aftermath/2024-10-08-hbo-money-electric-peter-todd
  - analysis/2024-10-08-todd-satoshi-identity-hypothesis
  - forum/bitcointalk/topic-2181/2010-12-10-retep-re-fees-in-bitdns-confusion
  - forum/bitcointalk/topic-2228/2010-12-12-satoshi-final-post
  - bip/2015-11-03-bip-0125
  - analysis/2008-10-31-satoshi-identity-hypotheses-overview
  - analysis/2008-10-31-satoshi-identification-asymmetry
  - analysis/2008-10-31-satoshi-anonymity-architecture
  - analysis/2014-03-19-bitcoin-core-rebrand-authority-effects
translationStatus: complete
---

2010 年 12 月 7 日、BitcoinTalk に「retep」 という名前の新しいアカウントが登録された。3 日後、このアカウントの 2 番目の投稿は[サトシ・ナカモトのスレッド](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-2181/2010-12-10-retep-re-fees-in-bitdns-confusion/) —— トランザクション置換手数料に関するもの —— に返信した:

> 「もちろん、正確に言えば、二つ目のトランザクションに手数料がある場合、入力と出力は*正確には*一致しない。」

2 日後、[サトシは最後の公開投稿](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-2228/2010-12-12-satoshi-final-post/)を行って沈黙した。数年後、このアカウントのユーザー名は Peter Todd に変更された。Bitcoin Core 開発者のグレゴリー・マクスウェルは [Hacker News でこう書いている](https://news.ycombinator.com/item?id=41784567) —— 「retep が peter の逆綴りだと気づくのに 10 年近くかかった」。

2024 年 10 月、HBO のドキュメンタリー[「Money Electric: The Bitcoin Mystery」](/BitcoinArchive/ja/entries/aftermath/2024-10-08-hbo-money-electric-peter-todd/)はトッドをサトシ・ナカモトの正体候補として名指しし、2010 年 12 月の返信を証拠として挙げた。放送当日の CoinDesk への取材でトッドは映画製作者カレン・ホーバックを「藁にもすがる」 と評しつつ「もちろん、俺はサトシじゃない」 と明確に否定した。ドキュメンタリー本編でホーバックから問われた際は皮肉で「ばかげている。だが、まあそう言うなら、そうだよ、俺がサトシだ」 と返している。トッドは作品を無責任な主張として退けている。

ピーター・トッド（1985 年 3 月 14 日、カナダ・バンクーバー生まれ）は暗号学者、応用暗号コンサルタント、Bitcoin Core 開発者である。2011 年に OCAD 大学（オンタリオ・カレッジ・オブ・アート・アンド・デザイン）の Integrated Media 専攻を卒業、それ以前は地球物理学スタートアップ Gedex Inc. でアナログ電子工学の設計者として勤務していた。ビットコインへの主要貢献は [BIP 65 OP_CHECKLOCKTIMEVERIFY](/BitcoinArchive/ja/entries/aftermath/2014-10-01-peter-todd-bip-65-checklocktimeverify/)（2014）、[BIP 125 Replace-by-Fee](/BitcoinArchive/ja/entries/bip/2015-11-03-bip-0125/) の共著（2015）、[OpenTimestamps](/BitcoinArchive/ja/entries/aftermath/2016-09-15-peter-todd-opentimestamps-announcement/)（2016）。

```mermaid
timeline
    1985 : バンクーバー誕生 (3月14日)
    2008 : GitHub アカウント登録 (4月)
    2010 : BitcoinTalk 「retep」 登録 (12月7日)
    %% link: /BitcoinArchive/ja/entries/aftermath/2010-12-07-retep-diaspora-invite-first-post/
         : サトシスレッド BitDNS に返信 (12月10日)
    %% link: /BitcoinArchive/ja/entries/forum/bitcointalk/topic-2181/2010-12-10-retep-re-fees-in-bitdns-confusion/
         : サトシ最終公開投稿 (12月12日)
    %% link: /BitcoinArchive/ja/entries/forum/bitcointalk/topic-2228/2010-12-12-satoshi-final-post/
    2011 : OCAD 大学 Integrated Media 専攻 卒業
    2012 : Bitcoin Core 活発な貢献開始 (4月)
    2014 : BIP 65 OP_CHECKLOCKTIMEVERIFY 提案 (10月)
    %% link: /BitcoinArchive/ja/entries/aftermath/2014-10-01-peter-todd-bip-65-checklocktimeverify/
    2015 : BIP 125 Replace-by-Fee 共著 (12月)
    %% link: /BitcoinArchive/ja/entries/aftermath/2015-12-04-peter-todd-bip-125-replace-by-fee/
    2016 : OpenTimestamps 公開 (9月)
    %% link: /BitcoinArchive/ja/entries/aftermath/2016-09-15-peter-todd-opentimestamps-announcement/
         : Zcash トラステッドセットアップ 参加 (10月)
    %% link: /BitcoinArchive/ja/entries/aftermath/2016-10-22-peter-todd-zcash-trusted-setup/
    2024 : HBO ドキュメンタリー サトシ候補と 名指し、 本人否定 (10月8日)
    %% link: /BitcoinArchive/ja/entries/aftermath/2024-10-08-hbo-money-electric-peter-todd/
```

### Bitcoin Core への貢献

トッドは 2012年4月から Bitcoin Core の活発な貢献者となり、最終的に Bitcoin Core の GitHub リポジトリで 11番目に多い貢献者となった。プロトコルレベルのセキュリティ、トランザクションポリシー、ネットワークの耐障害性に注力した。

### BIP 65: OP_CHECKLOCKTIMEVERIFY（2014年10月）
トッドは [BIP 65](/BitcoinArchive/ja/entries/aftermath/2014-10-01-peter-todd-bip-65-checklocktimeverify/) を提案し、トランザクション出力を指定された将来の時点まで使用不能にする新しいオペコードを導入した。ソフトフォークとしてデプロイされ、ペイメントチャネルおよび Lightning Network の構成要素となった。

### Replace-by-Fee（RBF）— BIP 125（2015年12月）
トッドが最も知られているのは Replace-by-Fee（RBF）の推進である。未確認トランザクションを手数料の高い新しいバージョンに置き換えることを可能にする仕組みで、[BIP 125](/BitcoinArchive/ja/entries/bip/2015-11-03-bip-0125/) としてデイヴィッド・A・ハーディングとの共著で正式に策定された。BIP の Rationale（根拠）は、サトシ・ナカモトのオリジナルのトランザクション置換メカニズムに概念を明示的に辿っている。

### [OpenTimestamps](/BitcoinArchive/ja/entries/aftermath/2016-09-15-peter-todd-opentimestamps-announcement/)（2016年9月）
トッドは OpenTimestamps を開発した。ビットコインブロックチェーンを利用して改ざん不可能なタイムスタンプを作成するオープンソースプロジェクトで、特定の時点で文書が存在していたことを証明できる。サトシがビットコインのコア設計に組み込んだタイムスタンプ機能を一般化したプロジェクトである。

### Zcash トラステッドセットアップセレモニー（2016年10月）
トッドは Zcash のトラステッドセットアップセレモニーの 6人の参加者の 1人だった。ブリティッシュコロンビア州をドライブしながら計算を実行し、ラップトップをファラデーケージで遮蔽し、終了後にハードウェアをプロパントーチで破壊した。参加したにもかかわらず、プロセスを痛烈に批判し、参加者間の共謀は証明不可能であり、未監査の決定論的ビルドはセレモニーを「暗号的なまやかし」にしていると述べた。

### その他の役職
トッドは Mastercoin および Dark Wallet でチーフサイエンティストを務め、プライバシー強化のためのステルスアドレス（BIP 63、未実装）の設計にも貢献した。2014年7月から Coinkite のコンサルタントとして勤務した。

