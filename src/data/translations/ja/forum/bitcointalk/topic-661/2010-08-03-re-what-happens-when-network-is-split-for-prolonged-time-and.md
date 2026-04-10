---
title: "Re: ネットワークが長期間分断された後に再接続されたらどうなるか？"
date: 2010-08-03T22:45:07.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=661.msg7356#msg7356"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがネットワーク分断のシナリオについて説明し、分断は非対称になりやすく、少数派フォークのクライアントは異常を検知できると述べた。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/312/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "knightmb"
    personSlug: "knightmb"
    date: "2010-08-03T10:02:13.000Z"
    sourceEntryId: "forum/bitcointalk/topic-661/2010-08-03-knightmb-msg7303"
  - id: "q2"
    person: "gavinandresen"
    personSlug: "gavin-andresen"
    date: "2010-08-03T09:38:44.000Z"
    sourceEntryId: "forum/bitcointalk/topic-661/2010-08-03-gavin-andresen-msg7293"
  - id: "q3"
    person: "knightmb"
    personSlug: "knightmb"
    date: "2010-08-03T10:02:13.000Z"
    sourceEntryId: "forum/bitcointalk/topic-661/2010-08-03-knightmb-msg7303"
---

creighto：そのアイデアに同意する。数時間後には、ブロックの流れが偶然の範囲を超えて減少していないか、クライアントが気づけるようになるはずだ。世界のハム音が聞こえなくなったかどうかがわかるだろう。

<!-- quote: q1 -->
<!-- tone-skip -->
> <!-- quote: q2 -->
> <!-- tone-skip -->
> > あるいは分断が十分長く続いた場合（100ブロック以上）、短い方のチェーンで生成されたコインを含むトランザクションはマージ時に無効になる。
> <!-- /tone-skip -->
<!-- /tone-skip -->

実際には、分断は非常に非対称になりやすい。世界を真っ二つに分けるのは難しいだろう。むしろ一国対それ以外の世界という形になりやすく、例えば1:10の分割とする。その場合、少数派フォークが100ブロック生成するのに10倍の時間がかかり、約7日になる。また、クライアントにとってブロック数が少なすぎて何かがおかしいと気づくのは非常に簡単だろう。

<!-- quote: q3 -->
<!-- tone-skip -->
> 分断の遅延にハードコードされた制限はあるのか？ つまり、パブリックネットワークから分離された小規模ネットワークがあり、コインを使い回してから数日後にパブリックネットワークと同期させた場合（コイン生成が起きた場合を除いて）、トランザクションは問題ないのか？
<!-- /tone-skip -->
時間制限はない。少数派フォークで生成されたコインを使ったり、受け取った誰かの二重支払いを使ったりしていない限り、あなたのトランザクションはいつでも後からもう一方のチェーンに取り込むことができる。
