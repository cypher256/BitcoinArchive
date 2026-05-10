---
title: "メモリーリーク"
date: 2010-09-12T20:51:44.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1023.msg12522#msg12522"
author: "eurekafag"
participants:
  - name: "eurekafag"
    slug: "eurekafag"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "eurekafag がスレッドを開始: メモリーリーク"
isSatoshi: false
tags: []
translationStatus: complete
---

私は特殊な構成を使用している。ヘッドレスのゲートウェイでは bitcoind が動作しており、デスクトップでは標準の bitcoin クライアントが動作している（両方とも Linux OpenSuSE、ゲートウェイは 11.1、デスクトップは 11.3、bitcoin は両方とも 0.3.12）。TCP ポート 8333 はゲートウェイからデスクトップに転送されている（そのためゲートウェイのクライアントは着信接続を受けられない）。原因は不明だが、ゲートウェイの後にデスクトップのクライアントを起動すると、デスクトップのクライアントが接続できず、長時間にわたって接続数が 0 と 2 の間を行き来する。最終的には接続できることもあるが、接続できない間はメモリーが大量にリークする。約 200KB/秒（0-2 の切り替えのたびに）。クライアントが即座に接続できれば気づかない程度かもしれないが、私のケースではそうならない。デスクトップを先に起動し、その後ヘッドレスクライアントを（デスクトップが接続した後に）起動すれば、すべて正常に動作し、リークは発生しない（あるいは無視できる程度である）。ブートストラップ関数またはブートストラッププロセスのどこかで解放されていないメモリーがあるのではないかと推測している。
