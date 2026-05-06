---
title: "ビットコイン：P2P通貨のオープンソース実装"
date: 2009-02-11T22:27:00Z
type: "forum-post"
source: "p2pfoundation"
sourceUrl: "https://satoshi.nakamotoinstitute.org/posts/p2pfoundation/1/"
sourceStatus: "archived"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがP2P Foundationフォーラムでビットコインを発表。従来の通貨の問題点と、ビットコインが信頼ではなく暗号学的証明によってそれらをどのように解決するかを説明しています。"
isSatoshi: true
tags:
  - "announcement"
  - "trust"
  - "central-banking"
  - "cryptographic-proof"
translationStatus: complete
relatedEntries:
  - aftermath/2009-02-12-michel-bauwens-biography
---

私はBitcoinと呼ばれる新しいオープンソースのP2P電子キャッシュシステムを開発した。信頼ではなく暗号学的証明に基づいているため、中央サーバーや信頼できる第三者を必要とせず、完全に分散化されている。

従来の通貨の根本的な問題は、それを機能させるために必要な、あらゆる信頼だ。中央銀行は通貨の価値を下げないと信頼されなければならない。しかし法定通貨の歴史は、その信頼への裏切りに満ちている。銀行は私たちのお金を保管し電子的に送金すると信頼されなければならないが、彼らはほんのわずかな準備金しか持たずに信用バブルの波の中でそれを貸し出している。私たちは彼らにプライバシーを委ね、身元詐称犯に口座を空にされないよう信頼しなければならない。

暗号学的証明に基づく電子通貨であれば、第三者の仲介者を信頼する必要がなく、お金は安全に、取引は手軽に行える。

Bitcoinが提案する解決策は、二重支払いを検出するためにピアツーピアネットワークを使用することだ。簡単に言えば、ネットワークは分散型タイムスタンプサーバーのように機能し、コインを使用する最初のトランザクションにスタンプを押す。情報は拡散しやすいが抑え込みにくいという性質を利用している。

仕組みの詳細については、http://www.bitcoin.org/bitcoin.pdf の設計論文を参照するか、http://www.bitcoin.org にアクセスしてソフトウェアをダウンロードして試してほしい。

Satoshi Nakamoto

---

**関連:** [アーカイブ収蔵のホワイトペーパー](/BitcoinArchive/ja/entries/emails/cryptography/2008-10-31-bitcoin-whitepaper-final/)
