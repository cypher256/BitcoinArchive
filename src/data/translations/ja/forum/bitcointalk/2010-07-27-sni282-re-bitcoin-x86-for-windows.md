---
title: "Re: Bitcoin x86 for Windows"
date: 2010-07-27T18:27:30.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=572.msg6069#msg6069"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi NakamotoがCrypto++ 5.6.0のSHA256機能の統合について議論し、SSE2アセンブリコードにより約2.5倍の高速化を達成したことを報告。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/282/"
threadId: "bt-bitcoin-x86-for-windows"
threadTitle: "Bitcoin x86 for Windows"
threadPosition: 2
translationStatus: complete
---

[Quote from: BlackEye on July 25, 2010, 10:12:23 PM](https://bitcointalk.org/index.php?topic=453.msg5774#msg5774)Crypto++ 5.6.0のSHA256機能をBitcoinに統合することができました。これはSSE2アセンブリコードを使用した最速のSHA256です。Bitcoinがブロックハッシュ関数にアラインされていないデータを送っていたため、MOVDQA命令をMOVDQUに変更する必要がありました。

Crypto++ 5.6.0のSHA256機能を使うのが今のところ最善の方向だと思います。
Crypto++ 5.6.0ライブラリのサブセットをSVNに追加しました。SHAと11個の汎用依存ファイルだけに絞り込みました。SHA以外の暗号は含まれていないはずです。

データフィールドをアラインしたところ、動作しました。ASM SHA-256は約48%高速です。合計の高速化はバージョン0.3.3と比べて約2.5倍です。

SSE2を使用しているようです。コンパイル時にコンパイラ環境に基づいてビルド設定を自動的に決定します。

実行時にSSE2の検出も行っているようですが、利用できない場合に実際にフォールバックするかどうかは判断しにくいです。リリースビルドにはSSE2を入れたいと思います。SSE2は最初のPentium 4から存在しています。Pentium 3以前のものでは遅すぎて、生成しようとしても電気代の無駄になるでしょう。

これはSVN rev 114です。
