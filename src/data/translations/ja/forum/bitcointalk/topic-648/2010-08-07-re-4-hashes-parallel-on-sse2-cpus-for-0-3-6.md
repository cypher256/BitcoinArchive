---
title: "Re: 0.3.6 向け SSE2 CPU での 4 ハッシュ並列処理"
date: 2010-08-07T21:16:01.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg8145#msg8145"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトが CRITICAL_BLOCK マクロの break 制限について謝罪し、Intel で SSE2 コードが遅い原因の調査を提案。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/330/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "impossible7"
    personSlug: "impossible7"
    date: "2010-08-06T02:37:20.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> CRITICAL_BLOCK は for ループを含むマクロだ。アサーション失敗は、ループ本体内で break が呼ばれたことを示している。このブロック内で唯一の break 文は 2762 行目にある。オリジナルのソースファイルでは、このクリティカルブロック内に break 文はない。2759-2762 行を削除すべきだと思う。オリジナルの main.cpp にはそのようなものはない。
<!-- /tone-skip -->

申し訳ない。CRITICAL_BLOCK は完璧ではない。その中から break や continue しないよう注意が必要だ。break を検出して警告する assert がある。使用していることを批判されるかもしれないが、これなしでは構文がはるかに冗長でエラーが起きやすくなる。

SSE2 コードが Intel で遅いのは、回避策がある何かの癖のせいだろうか？ 例えば、アラインされていないと動作するが遅い、キャッシュスラッシングが起きている、または特定の種類の命令が本当に遅いなど。利用可能かどうかわからないが、Intel には命令単位でプロファイリングするプロファイラがあったと思う。tcatm が遅いプロセッサーを搭載したテスト用システムを持っていなければ、あまり見込みはないだろう。でも、ほとんどの CPU で動作するようになると本当にいいのだが。
