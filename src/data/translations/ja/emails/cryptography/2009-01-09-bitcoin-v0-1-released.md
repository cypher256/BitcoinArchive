---
title: "ビットコイン v0.1 リリース"
date: 2009-01-09T03:05:00Z
source: cryptography-mailing-list
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2009-January/014994.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshiがビットコインv0.1のリリースを発表。Windows向けのビットコインソフトウェア初の動作する実装で、ソースコードが含まれていた。"
isSatoshi: true
tags:
  - "release"
  - "v0.1"
  - "software"
  - "announcement"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/17/"
translationStatus: complete
---

ビットコインの最初のリリースを発表する。二重支払いを防止するためにピアツーピアネットワークを使用する新しい電子キャッシュシステムである。サーバーや中央機関のない、完全な分散型システムである。

スクリーンショットはbitcoin.orgを参照。

ダウンロードリンク：
http://downloads.sourceforge.net/bitcoin/bitcoin-0.1.0.rar

現時点ではWindowsのみ。オープンソースのC++コードが含まれている。

- ファイルをディレクトリに展開し、BITCOIN.EXEを実行する
- 自動的に他のノードに接続する

着信接続を受け入れるノードを稼働させ続けることができれば、ネットワークに大いに貢献できる。着信接続を受信するにはファイアウォールのポート8333を開放する必要がある。

ソフトウェアはまだアルファ版で実験的である。必要になった場合にシステムの状態をリスタートしなければならない保証はないが、拡張性とバージョニングを組み込むためにできる限りのことはした。

コインを得るには、誰かに送ってもらうか、Options->Generate Coinsをオンにしてノードを実行しブロックを生成する。プルーフ・オブ・ワークの難易度を最初はとんでもなく簡単に設定したので、最初のうちは一般的なPCでもわずか数時間でコインを生成できるだろう。自動調整による難易度上昇で競争が激化すると、かなり難しくなる。

Satoshi Nakamoto
