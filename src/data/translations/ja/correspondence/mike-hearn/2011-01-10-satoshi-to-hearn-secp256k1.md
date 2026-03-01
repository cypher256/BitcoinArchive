---
title: "ECDSA曲線の選択と開発の歴史"
date: 2011-01-10T20:47:00Z
source: correspondence
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread3.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "SatoshiがHal Finneyは初期の支援者であったことを確認し、Bitcoinはリリース前に2年間の開発を要したことを明かし、ECDSA曲線と鍵サイズの選択理由を説明する。"
isSatoshi: true
threadId: "satoshi-mike-hearn-more-questions"
threadPosition: 8
tags:
  - "correspondence"
  - "secp256k1"
  - "ecdsa"
  - "hal-finney"
  - "cryptography"
  - "development-history"
translationStatus: complete
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
---

> ところで、もしまだ見ていなければ、フォーラムでsecp256k1のセキュリティに関する議論があります：
>
> http://www.bitcoin.org/smf/index.php?topic=2699.0
>
> Hal（Hal Finneyだと思いますが）

はい、彼です。Cryptographyメーリングリストで支持的で、最初のノードの一つを運用していました。

> この曲線はランダムな曲線よりも攻撃のリスクが高いと考えているようです。パフォーマンスの改善のためにsecp256k1を選んだのですか？

正直に言うと、このプロジェクトはリリース前に2年間の開発を要し、多くの課題のそれぞれにかけられる時間は限られていました。SHAとRSAの推奨サイズに関するガイダンスは見つかりましたが、比較的新しかったECDSAについては何も見つかりませんでした。RSAの推奨鍵サイズを取り、ECDSAの同等の鍵サイズに変換しましたが、アプリ全体が256ビットセキュリティと言えるように増やしました。曲線の種類を推奨するものは見つからなかったので、ただ……一つ選びました。鍵サイズが十分に大きければ、欠点を補えることを願っています。

当時は、ECDSAを使っても帯域幅とストレージのサイズが実用的かどうか懸念していました。RSAの巨大な鍵は論外でした。当時はストレージと帯域幅がより厳しかったように感じました。サイズがようやく実用的になりつつあるか、もうすぐそうなるだろうと感じていました。発表したとき、サイズについて他の誰も懸念しなかったことに驚きましたが、彼らがいかに多くの問題を議論したかにも驚き、さらにそのすべてが私がすでに考えて解決していたことだったのにも驚きました。

結果的に、ECDSAの検証時間がより大きなボトルネックかもしれません。（私のテストでは、OpenSSLはECDSA検証に3.5msかかり、毎秒約285回の検証が可能でした）クライアント版はこの問題を回避します。

状況が進化するにつれて、フルノードを実行する必要がある人の数は、当初想像していたよりも少なくなりました。処理負荷が重くなっても、少数のノードでネットワークは問題なく機能するでしょう。
