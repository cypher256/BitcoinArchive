---
title: "Re: Bitcoinアドレスの衝突"
date: 2010-02-23T16:26:09.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=62.msg443#msg443"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「Bitcoinアドレスの衝突」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/69/"
threadId: "bt-bitcoin-address-collisions"
threadPosition: 2
translationStatus: complete
---

すべてのBitcoinアドレスに対して個別の公開鍵/秘密鍵ペアがある。すべてを解錠する単一の秘密鍵はない。Bitcoinアドレスは公開鍵の160ビットハッシュであり、システム内の他のすべては256ビットだ。

衝突が発生した場合、衝突した者はそのアドレスに送られたお金を使うことができる。そのアドレスに送られたお金だけであり、ウォレット全体ではない。

意図的に衝突を起こそうとした場合、現在では衝突するBitcoinアドレスを生成するのにブロックを生成するより2^126倍長い時間がかかる。ブロックを生成する方がはるかに多くのお金を得られただろう。

ランダムシードは非常に徹底している。Windowsでは、コンピュータの起動以来のディスクパフォーマンス、ネットワークカードの指標、CPU時間、ページングなどのあらゆるビットを測定するパフォーマンスモニターデータをすべて使用する。Linuxには組み込みのエントロピーコレクターがある。さらに、Bitcoinウィンドウ内でマウスを動かすたびにエントロピーが生成され、ディスク操作のタイミングからもエントロピーがキャプチャされる。
