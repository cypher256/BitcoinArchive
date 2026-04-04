---
title: "Re: 0.3.6向けSSE2 CPUでの4ハッシュ並列処理"
date: 2010-08-07T21:16:01.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg8145#msg8145"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがCRITICAL_BLOCKマクロのbreak制限について謝罪し、IntelでSSE2コードが遅い原因の調査を提案。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/330/"
translationStatus: complete
---

[Quote from: impossible7 on August 06, 2010, 11:37:20 AM](#msg7838)
> CRITICAL_BLOCKはforループを含むマクロだ。アサーション失敗は、ループ本体内でbreakが呼ばれたことを示している。このブロック内で唯一のbreak文は2762行目にある。オリジナルのソースファイルでは、このクリティカルブロック内にbreak文はない。2759-2762行を削除すべきだと思う。オリジナルのmain.cppにはそのようなものはない。

申し訳ない。CRITICAL_BLOCKは完璧ではない。その中からbreakやcontinueしないよう注意が必要だ。breakを検出して警告するassertがある。使用していることを批判されるかもしれないが、これなしでは構文がはるかに冗長でエラーが起きやすくなる。

SSE2コードがIntelで遅いのは、回避策がある何かの癖のせいだろうか？ 例えば、アラインされていないと動作するが遅い、キャッシュスラッシングが起きている、または特定の種類の命令が本当に遅いなど。利用可能かどうかわからないが、Intelには命令単位でプロファイリングするプロファイラがあったと思う。tcatmが遅いプロセッサを搭載したテスト用システムを持っていなければ、あまり見込みはないだろう。でも、ほとんどのCPUで動作するようになると本当にいいのだが。
