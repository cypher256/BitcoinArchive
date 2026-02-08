---
title: "Re: ネットワークが長期間分断されて再接続された場合どうなるか？"
date: 2010-08-03T22:45:07.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=661.msg7356#msg7356"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoがネットワーク分断のシナリオについて説明し、分断は非対称になりやすく、少数派フォークのクライアントは異常を検知できると述べた。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/312/"
translationStatus: complete
---

creighto：そのアイデアに同意します。数時間後には、ブロックの流れが偶然の範囲を超えて減少していないか、クライアントが気づけるようになるはずです。世界のハム音が聞こえなくなったかどうかがわかるでしょう。

[Quote from: knightmb on August 03, 2010, 07:02:13 PM](https://bitcointalk.org/index.php?topic=661.msg7303#msg7303)[Quote from: gavinandresen on August 03, 2010, 06:38:44 PM](https://bitcointalk.org/index.php?topic=661.msg7293#msg7293)あるいは分断が十分長く続いた場合（100ブロック以上）、短い方のチェーンで生成されたコインを含むトランザクションは、マージ時に無効になります。
興味深い情報です。つまり、二重支払いの問題以外は、ブロックチェーンが100ブロック程度（または16時間以上）分離しない限り、
実際には、分断は非常に非対称になりやすいです。世界を真っ二つに分けるのは難しいでしょう。むしろ一国対それ以外の世界という形になりやすく、例えば1:10の分割とします。その場合、少数派フォークが100ブロック生成するのに10倍の時間がかかり、約7日になります。また、クライアントにとってブロック数が少なすぎて何かがおかしいと気づくのは非常に簡単でしょう。

[Quote from: knightmb on August 03, 2010, 07:02:13 PM](https://bitcointalk.org/index.php?topic=661.msg7303#msg7303)分断遅延にハードコードされた制限はありますか？ つまり、小さなネットワークを公開ネットワークから分離して、コインを使い回し、数日後に公開ネットワークと同期させた場合（コイン生成を除いて）、トランザクションは問題ないですか？
時間制限はありません。少数派フォークで生成されたコインを使ったり、受け取った誰かの二重支払いを使ったりしていない限り、あなたのトランザクションはいつでも後からもう一方のチェーンに取り込むことができます。
