---
title: "Re: 0.3.6向けSSE2 CPUでの4ハッシュ並列処理"
date: 2010-08-07T21:16:01.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg8145#msg8145"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi NakamotoがCRITICAL_BLOCKマクロのbreak制限について謝罪し、IntelでSSE2コードが遅い原因の調査を提案。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/330/"
threadId: "bt-4-hashes-parallel-on-sse2-cpus-for-0-3-6"
threadTitle: "4 hashes parallel on SSE2 CPUs for 0.3.6"
threadPosition: 3
translationStatus: complete
---

[Quote from: impossible7 on August 06, 2010, 11:37:20 AM](https://bitcointalk.org/index.php?topic=648.msg7838#msg7838)CRITICAL_BLOCKはforループを含むマクロです。アサーション失敗はループ本体内でbreakが呼ばれたことを示しています。このブロック内の唯一のbreak文は2762行目にあります。元のソースファイルでは、このクリティカルブロック内にbreak文はありません。2759-2762行を削除すべきだと思います。元のmain.cppにはそのようなものはありません。
申し訳ありません。CRITICAL_BLOCKは完璧ではありません。その中からbreakやcontinueしないよう注意が必要です。breakを検出して警告するassertがあります。使用していることを批判されるかもしれませんが、これなしでは構文がはるかに冗長でエラーが起きやすくなります。

SSE2コードがIntelで遅いのは、回避策がある何かの癖のせいでしょうか？ 例えば、アラインされていないと動作するが遅い、キャッシュスラッシングが起きている、または特定の種類の命令が本当に遅いなど。利用可能かどうかわかりませんが、Intelには命令単位でプロファイリングするプロファイラがあったと思います。tcatmが遅いプロセッサを搭載したテスト用システムを持っていなければ、あまり見込みはないでしょう。でも、ほとんどのCPUで動作するようになると本当にいいのですが。
