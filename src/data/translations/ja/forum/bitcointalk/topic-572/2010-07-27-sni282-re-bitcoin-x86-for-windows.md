---
title: "Re: Bitcoin x86 for Windows"
date: 2010-07-27T18:27:30.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=572.msg6069#msg6069"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがCrypto++ 5.6.0のSHA256機能の統合について議論し、SSE2アセンブリコードにより約2.5倍の高速化を達成したことを報告。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/282/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "BlackEye"
    personSlug: "blackeye"
    date: "2010-07-25T13:12:23.000Z"
    sourceEntryId: "forum/bitcointalk/topic-453/2010-07-25-blackeye-msg5774"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> Crypto++ 5.6.0のSHA256機能をBitcoinに統合することができた。SSE2アセンブリコードを使った最速のSHA256だ。Bitcoinがブロックハッシュ関数にアライメントされていないデータを送っていたため、MOVDQA命令をMOVDQUに変更する必要があった。
<!-- /tone-skip -->

Crypto++ 5.6.0のSHA256機能を使うのが今のところ最善の方向だと思う。
Crypto++ 5.6.0ライブラリのサブセットをSVNに追加した。SHAと11個の汎用依存ファイルだけに絞り込んだ。SHA以外の暗号は含まれていないはずだ。

データフィールドをアラインしたところ、動作した。ASM SHA-256は約48%高速だ。合計の高速化はバージョン0.3.3と比べて約2.5倍だ。

SSE2を使用しているようだ。コンパイル時にコンパイラ環境に基づいてビルド設定を自動的に決定する。

実行時にSSE2の検出も行っているようだが、利用できない場合に実際にフォールバックするかどうかは判断しにくい。リリースビルドにはSSE2を入れたいと思う。SSE2は最初のPentium 4から存在している。Pentium 3以前のものでは遅すぎて、生成しようとしても電気代の無駄になるだろう。

これはSVN rev 114だ。
