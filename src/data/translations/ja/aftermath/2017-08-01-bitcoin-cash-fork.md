---
title: "ビットコインキャッシュがブロック 478558 で分裂 — ブロックサイズ戦争最初の生存フォーク (2017 年 8 月)"
date: 2017-08-01T12:37:00Z
type: "article"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Bitcoin_Cash"
author: "Bitcoin ABC project"
participants:
  - name: "Roger Ver"
    slug: "roger-ver"
  - name: "Jihan Wu"
    slug: "jihan-wu"
  - name: "Amaury Séchet"
    slug: "amaury-sechet"
description: "ビットコインキャッシュが 12:37 UTC 頃 ViaBTC のブロック 478558 で分岐。8 MB・SegWit なしの永続的な別ネットワークを残した最初のプロトコル分岐。"
isSatoshi: false
tags:
  - "fork"
  - "bitcoin-cash"
  - "block-size"
  - "block-size-war"
  - "scaling"
  - "hard-fork"
  - "segwit"
secondarySources:
  - name: "Bitcoin Cash — block 478558 explorer view"
    url: "https://blockchair.com/bitcoin-cash/block/478558"
  - name: "Coindesk — Bitcoin Cash Hard Fork: Currency Up and Running"
    url: "https://www.coindesk.com/markets/2017/08/02/bitcoin-cash-hard-fork-cryptocurrency-now-up-and-running/"
relatedEntries:
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
  - aftermath/2015-08-15-bitcoin-xt-launch
  - aftermath/2017-11-08-segwit2x-cancellation
  - aftermath/2018-11-15-bitcoin-sv-fork
  - bip/2015-12-21-bip-0141
  - aftermath/2011-04-01-roger-ver-biography
  - aftermath/2011-08-01-jihan-wu-biography
  - aftermath/2015-01-01-amaury-sechet-biography
---

2017 年 8 月 1 日、ビットコインのチェーンが分裂した。12:37 UTC 頃に ViaBTC マイニングプールが採掘したブロック 478558 で、Bitcoin ABC ソフトウェアを動かしていたクライアント群が 1 MB サイズ制限を超えるブロックを受け入れ、ビットコイン本体チェーンから分岐した新しいチェーンを作った。新しいチェーンはビットコインキャッシュ (BCH) と名付けられた。

この分裂は、2015 年 8 月の [Bitcoin XT のリリース](/BitcoinArchive/ja/entries/aftermath/2015-08-15-bitcoin-xt-launch/) 以来積み上がってきたブロックサイズ戦争の、長く予想されていた決裂だった。二年にわたる有効化失敗 (XT、Classic、Unlimited) と崩壊した妥協案 (ニューヨーク合意) の後、より大きなブロックを望んだ陣営は、本体チェーンで争い続けるのではなく独自のチェーンに分かれた。

ビットコインキャッシュのローンチ仕様:

- **ブロックサイズ**: 初期上限 8 MB (2018 年 5 月に 32 MB へ引き上げ)
- **SegWit**: 拒否。オンチェーンブロックサイズのみが正当な拡張手段とされた
- **難易度調整**: Emergency Difficulty Adjustment (EDA) で改良。少数派ハッシュレートでも小さな新チェーンがブロック採掘を続けられるように
- **再生攻撃保護**: SIGHASH_FORKID フラグ。一方のチェーンの取引はもう一方では無効

BCH ローンチの旗手は、[ロジャー・ヴァー](https://en.wikipedia.org/wiki/Roger_Ver) (初期のビットコイン投資家で bitcoin.com の運用者)、ジハン・ウー (採掘ハードウェア企業 Bitmain の共同創業者)、アモリー・セシェ (Bitcoin ABC のリード開発者) だった。それぞれがリリースの異なる層に貢献した — ヴァーは公開向けのブランディング、ウーはマイニングプール側の支持、セシェはプロトコル実装である。

ビットコインキャッシュはローンチイベントを生き延びた。フォーク後数時間以内に BCH は独自のブロック生成、取引所上場 (Bitfinex、ViaBTC、Kraken)、価格発見 (約 300 ドルの初期取引) を持っていた。Bitcoin XT・Bitcoin Classic・Bitcoin Unlimited が永続的な別チェーンを残せず崩壊したのに対し、BCH の意図的なハードフォーク方式は、現在まで動作し続ける別ネットワークを残した。

BCH コミュニティ自体は一年後に分裂した。2018 年 11 月 15 日、Bitcoin ABC 陣営とビットコインSV陣営の間のハッシュ戦争が [ビットコインSVのフォーク](/BitcoinArchive/ja/entries/aftermath/2018-11-15-bitcoin-sv-fork/) を生み、SV チェーンは別ネットワークとして継続した。元の BCH チェーンはその後もプロトコル変更 (Cash Tokens、Adaptive Blocksize Limit Algorithm) を続けたが、ネットワーク占有率はビットコイン本体チェーンより一貫して小さいままだった。

2017 年 8 月 1 日の分裂は、ブロックサイズ戦争の時系列上の決着点である。論争の対象だったパラメーター (ブロックサイズ) は、チェーンの合意ではなくチェーンの分離によって解決された。本体チェーンはその後、BCH のフォークから三週間後の 2017 年 8 月 24 日に Segregated Witness を有効化し、その後も Lightning ネットワーク、後の Taproot と、本体チェーンのソフトフォーク経路で進んだ。全経緯は[ビットコイン系譜の分析](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/) に記録されている。
