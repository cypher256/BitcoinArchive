---
title: "ダン・カミンスキーのビットコインセキュリティ分析"
date: 2011-10-10T00:00:00Z
type: "article"
source: "new-yorker"
sourceUrl: "https://www.newyorker.com/magazine/2011/10/10/the-crypto-currency"
author: "Joshua Davis"
participants:
  - name: "Dan Kaminsky"
    slug: "dan-kaminsky"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "著名なセキュリティ研究者ダン・カミンスキーがビットコインの脆弱性を見つけようとして失敗した記録。「美しいバグを見つけた。だがコードを攻撃するたびに、問題に対処する一行があった」彼は結論づけた：「チームで作ったか、天才の仕業だ」"
isSatoshi: false
tags:
  - "dan-kaminsky"
  - "security"
  - "code-review"
  - "new-yorker"
  - "genius"
secondarySources:
  - name: "CoinDesk — Security Guru Confesses, 'I Couldn't Hack Bitcoin'"
    url: "https://www.coindesk.com/markets/2013/04/23/security-guru-confesses-i-couldnt-hack-bitcoin"
  - name: "Black Hat USA 2011 Slides"
    url: "https://www.slideshare.net/dakami/black-ops-of-tcpip-2011-black-hat-usa-2011"
relatedEntries:
  - aftermath/2011-07-03-len-sassaman-biography
  - aftermath/2011-07-30-len-sassaman-blockchain-tribute
  - aftermath/2011-11-23-wired-rise-and-fall-of-bitcoin
  - aftermath/2011-04-20-forbes-crypto-currency
  - aftermath/2016-01-15-libsecp256k1-replaces-openssl-bitcoin-core-v012
  - analysis/2009-01-09-satoshi-distribution-and-tooling-anomalies
translationStatus: complete
---

*ジョシュア・デイヴィス著「The Crypto-Currency」、The New Yorker、2011年10月10日より：*

> ダン・カミンスキーは一流のインターネットセキュリティ研究者であり、ビットコインのコード（当時約31,000行）を調査した。
>
> 「初めてコードを見た時、絶対に破れると確信した」とカミンスキーは語った。
>
> 「全体のフォーマットは正気の沙汰ではなかった。世界で最も偏執的で、最も几帳面なコーダーでなければ、ミスを避けることはできないだろう」
>
> 彼はすぐにシステムを侵害する9つの方法を特定し、コードへの攻撃を開始した。だが適切な場所を見つけた時、そこにはメッセージが待っていた：「Attack Removed」（攻撃は除去済み）。同じことが何度も繰り返され、カミンスキーを激怒させた。
>
> 「美しいバグを見つけた」と彼は言った。「だがコードを攻撃するたびに、問題に対処する一行があった」
>
> 「彼はワールドクラスのプログラマーであり、C++プログラミング言語を深く理解している」とカミンスキーはビットコインの作成者について語った。「経済学、暗号学、P2Pネットワーキングを理解している」
>
> 「チームで作ったか、天才の仕業だ」

---

*[補足：ダン・カミンスキーは 2011 年 8 月の Black Hat USA 2011（ラスベガス）でもビットコインの分析を発表した。同じ Black Hat の場で、3 か月前に亡くなった [レン・サスマンへの ASCII アート追悼をビットコインのブロックチェーンに埋め込んだ件](/BitcoinArchive/ja/entries/aftermath/2011-07-30-len-sassaman-blockchain-tribute/) も別途公開している。2013 年には CoinDesk に対し「コア技術は実際に機能しており、誰もが予測したわけではない程度にまで機能し続けている」と語った。カミンスキーは 2008 年に重大な DNS 脆弱性を発見したことで有名だった。2021 年 4 月 23 日に亡くなった。]*
