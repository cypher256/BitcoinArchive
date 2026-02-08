---
title: "Re: Bitcoinアドレスの衝突"
date: 2010-02-23T16:26:09.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=62.msg443#msg443"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「Bitcoinアドレスの衝突」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/69/"
threadId: "bt-bitcoin-address-collisions"
threadTitle: "Bitcoin Address Collisions"
threadPosition: 1
translationStatus: complete
---

すべてのBitcoinアドレスに対して個別の公開鍵/秘密鍵ペアがあります。すべてを解錠する単一の秘密鍵はありません。Bitcoinアドレスは公開鍵の160ビットハッシュであり、システム内の他のすべては256ビットです。

衝突が発生した場合、衝突した者はそのアドレスに送られたお金を使うことができます。そのアドレスに送られたお金だけであり、ウォレット全体ではありません。

意図的に衝突を起こそうとした場合、現在では衝突するBitcoinアドレスを生成するのにブロックを生成するより2^126倍長い時間がかかります。ブロックを生成する方がはるかに多くのお金を得られたでしょう。

ランダムシードは非常に徹底しています。Windowsでは、コンピュータの起動以来のディスクパフォーマンス、ネットワークカードの指標、CPU時間、ページングなどのあらゆるビットを測定するパフォーマンスモニターデータをすべて使用します。Linuxには組み込みのエントロピーコレクターがあります。さらに、Bitcoinウィンドウ内でマウスを動かすたびにエントロピーが生成され、ディスク操作のタイミングからもエントロピーがキャプチャされます。
