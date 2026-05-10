---
title: "Re: Bitcoin アドレスの衝突"
date: 2010-02-23T16:26:09.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=62.msg443#msg443"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「Bitcoin アドレスの衝突」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/69/"
translationStatus: complete
---

すべての Bitcoin アドレスに対して個別の公開鍵/秘密鍵ペアがある。すべてを解錠する単一の秘密鍵はない。Bitcoin アドレスは公開鍵の 160 ビットハッシュであり、システム内の他のすべては 256 ビットだ。

衝突が発生した場合、衝突した者はそのアドレスに送られたお金を使うことができる。そのアドレスに送られたお金だけであり、ウォレット全体ではない。

意図的に衝突を起こそうとした場合、現在では衝突する Bitcoin アドレスを生成するのにブロックを生成するより 2^126倍長い時間がかかる。ブロックを生成する方がはるかに多くのお金を得られただろう。

ランダムシードは非常に徹底している。Windows では、コンピューターの起動以来のディスクパフォーマンス、ネットワークカードの指標、CPU 時間、ページングなどのあらゆるビットを測定するパフォーマンスモニターデータをすべて使用する。Linux には組み込みのエントロピーコレクターがある。さらに、Bitcoin ウィンドウ内でマウスを動かすたびにエントロピーが生成され、ディスク操作のタイミングからもエントロピーがキャプチャされる。
