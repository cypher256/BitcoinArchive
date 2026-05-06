---
title: "SegWit2x が有効化 3 日前に中止 — マイク・ベルシェがニューヨーク合意を終わらせる (2017 年 11 月)"
date: 2017-11-08T17:00:00Z
type: "mailing-list"
source: "linuxfoundation"
sourceUrl: "https://lists.linuxfoundation.org/pipermail/bitcoin-segwit2x/2017-November/000685.html"
author: "Mike Belshe"
participants:
  - name: "Mike Belshe"
    slug: "mike-belshe"
description: "マイク・ベルシェがメーリングリストで SegWit2x ハードフォーク中止を告知。ブロック 494784 での 2 MB 有効化予定の 3 日前。ニューヨーク合意はチェーン分裂を生まず崩壊した。"
isSatoshi: false
tags:
  - "segwit2x"
  - "block-size-war"
  - "new-york-agreement"
  - "scaling"
  - "fork"
  - "cancelled-fork"
secondarySources:
  - name: "Wikipedia — SegWit2x"
    url: "https://en.wikipedia.org/wiki/SegWit2x"
  - name: "Coindesk — SegWit2x Hard Fork Suspended for Lack of Consensus"
    url: "https://www.coindesk.com/markets/2017/11/08/segwit2x-hard-fork-suspended-for-lack-of-consensus/"
relatedEntries:
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
  - aftermath/2015-08-15-bitcoin-xt-launch
  - aftermath/2017-08-01-bitcoin-cash-fork
  - bip/2015-12-21-bip-0141
  - aftermath/2013-10-01-mike-belshe-biography
---

2017 年 11 月 8 日、[マイク・ベルシェ](https://en.wikipedia.org/wiki/SegWit2x) は `bitcoin-segwit2x@lists.linuxfoundation.org` メーリングリストで、約 3 日後のブロック 494784 で予定されていた SegWit2x ハードフォークの中止を告知した。投稿全文:

> 「ビットコインの円滑なアップグレードが我々の目標だった。より大きなブロックサイズが必要だと強く信じてはいるが、それ以上に大切だと我々が信じるものがある ─ コミュニティを一つに保つこと、である。残念ながら、現時点ではクリーンなブロックサイズアップグレードに必要な合意は形成できていないことが明らかになった。現在の経路を進めばコミュニティを分裂させ、ビットコインの成長の妨げになりかねない。それは Segwit2x の目標ではなかった。」

投稿はベルシェ、ウェンセス・カサレス、ジハン・ウー、ジェフ・ガージック、ピーター・スミス、エリック・ヴォーヒースの 6 名による連名で、ニューヨーク合意の最初の署名者の中の 5 名を含んでいた。

SegWit2x は [ニューヨーク合意](https://en.wikipedia.org/wiki/SegWit2x) (NYA) の中核的な約束だった。NYA は 2017 年 5 月 23 日の Consensus 2017 会議で、58 の主要ビットコイン事業者とマイナーの代表により合意された。協定は二つのプロトコル変更を束ねていた:

- **前半**: BIP 91 ロックイン機構を経由して、本体チェーンで Segregated Witness (BIP 141) を有効化する。これは 2017 年 8 月 24 日に展開された。
- **後半**: SegWit 有効化の三か月後に、ビットコインプロトコルを 2 MB ブロックサイズ制限へハードフォークする。これが 11 月 8 日に中止された半分である。

中止を強いたのは、十分にレビューされていない争いの起こるハードフォークを支持しないと判断した Bitcoin Core 開発者・フルノード運用者・取引所の連合だった。彼らの参加なしには、ハードフォークはネットワーク全体のアップグレードではなく少数派ハッシュレートのチェーン分裂を生むだけになる。ベルシェの投稿は負ける有効化を強行する代わりに、それを認めた。

SegWit2x の中止により、2015 年 8 月の [Bitcoin XT のリリース](/BitcoinArchive/ja/entries/aftermath/2015-08-15-bitcoin-xt-launch/) 以来続いていたブロックサイズ戦争の本体チェーン側が閉じた。より大きなブロックを望んだ陣営は 2017 年 8 月 1 日に [Bitcoin Cash](/BitcoinArchive/ja/entries/aftermath/2017-08-01-bitcoin-cash-fork/) として既に分離していた。SegWit2x の中止は、本体チェーンが争いの起こるハードフォークを経験せずに済むことを意味した。11 月 8 日以降、本体チェーンでは新たなハードフォークの試みは組織されていない。プロトコルはソフトフォーク (Taproot、2021 年 11 月) で進化してきた。

ベルシェのメーリングリスト投稿は、ニューヨーク合意の文字通りの終結である。中止メッセージへの署名は元の NYA 署名者の全員ではないが、他の署名者から反対の署名付き声明が出されなかったこと自体が、コミュニティ全体の中止承認として機能した。全経緯は[ビットコイン系譜の分析](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/) に記録されている。
