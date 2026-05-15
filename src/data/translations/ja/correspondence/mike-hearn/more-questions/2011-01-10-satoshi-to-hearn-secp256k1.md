---
title: "サトシからマイク・ハーンへ：ECDSA 曲線の選択と開発の歴史（2011-01-10）"
date: 2011-01-10T20:47:00Z
type: "correspondence"
source: "plan99"
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread3.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "サトシがハル・フィニーは初期の支援者であったことを確認し、ビットコインはリリース前に 2年間の開発を要したことを明かし、ECDSA 曲線と鍵サイズの選択理由を説明する。"
isSatoshi: true
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
    url: "https://web.archive.org/web/20240809162549/https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
quotes:
  - id: "q1"
    person: "Mike Hearn"
    personSlug: "mike-hearn"
    sourceEntryId: "correspondence/mike-hearn/more-questions/2011-01-10-hearn-to-satoshi-secp256k1"
  - id: "q2"
    person: "Mike Hearn"
    personSlug: "mike-hearn"
    sourceEntryId: "correspondence/mike-hearn/more-questions/2011-01-10-hearn-to-satoshi-secp256k1"
---

<!-- speaker: Mike Hearn -->
<!-- quote: q1 -->
<!-- tone-skip -->
> ところで、もしまだ見ていなければ、フォーラムでsecp256k1のセキュリティに関する議論がある：
>
> http://www.bitcoin.org/smf/index.php?topic=2699.0
>
> ハル（ハル・フィニーだと思うが）
<!-- /tone-skip -->

<!-- speaker: Satoshi Nakamoto -->
はい、彼だ。Cryptography メーリングリストで支持的で、最初のノードの一つを運用していた。

<!-- speaker: Mike Hearn -->
<!-- quote: q2 -->
<!-- tone-skip -->
> この曲線はランダムな曲線よりも攻撃のリスクが高いと考えているようだ。パフォーマンスの改善のためにsecp256k1を選んだのか？
<!-- /tone-skip -->

<!-- speaker: Satoshi Nakamoto -->
正直に言うと、このプロジェクトはリリース前に 2年間の開発を要し、多くの課題のそれぞれにかけられる時間は限られていた。SHA と RSA の推奨サイズに関するガイダンスは見つかったが、比較的新しかった ECDSA については何も見つからなかった。RSA の推奨鍵サイズを取り、ECDSA の同等の鍵サイズに変換したが、アプリ全体が 256 ビットセキュリティと言えるように増やした。曲線の種類を推奨するものは見つからなかったので、ただ……一つ選んだ。鍵サイズが十分に大きければ、欠点を補えることを願っている。

当時は、ECDSA を使っても帯域幅とストレージのサイズが実用的かどうか懸念していた。RSA の巨大な鍵は論外だった。当時はストレージと帯域幅がより厳しかったように感じた。サイズがようやく実用的になりつつあるか、もうすぐそうなるだろうと感じていた。発表したとき、サイズについて他の誰も懸念しなかったことに驚いたが、彼らがいかに多くの問題を議論したかにも驚き、さらにそのすべてが私がすでに考えて解決していたことだったのにも驚いた。

結果的に、ECDSA の検証時間がより大きなボトルネックかもしれない。（私のテストでは、OpenSSL は ECDSA 検証に 3.5ms かかり、毎秒約 285回の検証が可能だった）クライアント版はこの問題を回避する。

状況が進化するにつれて、フルノードを実行する必要がある人の数は、当初想像していたよりも少なくなった。処理負荷が重くなっても、少数のノードでネットワークは問題なく機能するだろう。
