---
title: "「Bitcoin v0.1 released」— サトシが暗号学メーリングリストにビットコイン初版リリースを告知（2009-01）"
date: 2009-01-08T19:27:40Z
type: "mailing-list"
source: "cryptography-mailing-list"
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2009-January/014994.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシがビットコイン v0.1 のリリースを発表。Windows 向けのビットコインソフトウェア初の動作する実装で、ソースコードが含まれていた。"
isSatoshi: true
tags:
  - "release"
  - "v0.1"
  - "software"
  - "announcement"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/16/"
relatedEntries:
  - correspondence/hal-finney/2009-01-08-satoshi-to-finney-release
  - aftermath/2009-01-09-bitcoin-v01-released
  - aftermath/2009-01-11-hal-finney-running-bitcoin-tweet
  - correspondence/hal-finney/2009-01-11-first-bitcoin-transaction
  - aftermath/2009-01-12-first-bitcoin-transaction
translationStatus: complete
---

<!-- speaker: Satoshi Nakamoto -->
ビットコイン v0.1 をリリースする。二重支払いを防ぐために P2P ネットワークを使用する新しい電子決済システムだ。完全に分散化されており、サーバーも中央機関もない。

スクリーンショットは bitcoin.org を参照。

ダウンロードリンク：<br>
http://downloads.sourceforge.net/bitcoin/bitcoin-0.1.0.rar

現時点では Windows のみ。オープンソースの C++コードが含まれている。

- ファイルをディレクトリに展開する
- BITCOIN.EXE を実行する
- 自動的に他のノードに接続する

着信接続を受け入れるノードを稼働させ続けることができれば、ネットワークに大いに貢献できる。着信接続を受信するにはファイアウォールのポート 8333 を開放する必要がある。

ソフトウェアはまだアルファ版で実験的だ。必要になった場合にシステムの状態をリスタートしなければならない保証はないが、拡張性とバージョニングを組み込むためにできる限りのことはした。

コインを得るには、誰かに送ってもらうか、Options->Generate Coins をオンにしてノードを実行しブロックを生成する。プルーフ・オブ・ワークの難易度を最初はとんでもなく簡単に設定したので、最初のうちは一般的な PC でもわずか数時間でコインを生成できるだろう。自動調整による難易度上昇で競争が激化すると、かなり難しくなる。生成されたコインは使用可能になるまで 120 ブロックの成熟を待つ必要がある。

送金方法は 2 つある。受取人がオンラインの場合、IP アドレスを入力すると接続し、新しい公開鍵を取得してコメント付きでトランザクションを送信する。受取人がオフラインの場合、受取人が提供する公開鍵のハッシュであるビットコインアドレスに送金することが可能だ。受取人は次回接続してそのブロックを取得した際にトランザクションを受信する。この方法はコメント情報が送信されないこと、アドレスを複数回使用するとプライバシーが多少失われるという欠点があるが、両ユーザーが同時にオンラインになれない場合や受取人が着信接続を受信できない場合の有用な代替手段だ。

総発行量は 2100 万枚。ノードがブロックを生成する際にネットワークノードに分配され、その量は 4年ごとに半減する。

最初の 4年：10,500,000 コイン<br>
次の 4年：5,250,000 コイン<br>
次の 4年：2,625,000 コイン<br>
次の 4年：1,312,500 コイン<br>
以下同様……

それが尽きた場合、必要に応じてシステムはトランザクション手数料をサポートできる。オープンマーケットの競争に基づいており、無料でトランザクションを処理するノードは常に存在するだろう。

Satoshi Nakamoto

---------------------------------------------------------------------
The Cryptography Mailing List
Unsubscribe by sending "unsubscribe cryptography" to majordomo at metzdowd.com
