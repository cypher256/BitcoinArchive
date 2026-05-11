---
title: "Re: Windows 用 Bitcoin x86"
date: 2010-07-27T18:27:30.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=572.msg6069#msg6069"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトが Crypto++ 5.6.0 の SHA256 機能の統合について議論し、SSE2 アセンブリコードにより約 2.5倍の高速化を達成したことを報告。"
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
> Crypto++ 5.6.0 の SHA256 機能を Bitcoin に統合することができた。SSE2 アセンブリコードを使った最速の SHA256 だ。Bitcoin がブロックハッシュ関数にアライメントされていないデータを送っていたため、MOVDQA 命令を MOVDQU に変更する必要があった。
<!-- /tone-skip -->

Crypto++ 5.6.0 の SHA256 機能を使うのが今のところ最善の方向だと思う。
Crypto++ 5.6.0 ライブラリのサブセットを SVN に追加した。SHA と 11個の汎用依存ファイルだけに絞り込んだ。SHA 以外の暗号は含まれていないはずだ。

データフィールドをアラインしたところ、動作した。ASM SHA-256 は約 48%高速だ。合計の高速化はバージョン 0.3.3 と比べて約 2.5倍だ。

SSE2 を使用しているようだ。コンパイル時にコンパイラー環境に基づいてビルド設定を自動的に決定する。

実行時に SSE2 の検出も行っているようだが、利用できない場合に実際にフォールバックするかどうかは判断しにくい。リリースビルドには SSE2 を入れたいと思う。SSE2 は最初の Pentium 4 から存在している。Pentium 3 以前のものでは遅すぎて、生成しようとしても電気代の無駄になるだろう。

これは SVN rev 114 だ。
