---
title: "Win32 CPUサイクル vs 'ライブプロテクション'エンジン"
date: 2010-02-01T18:51:53.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=35.msg189#msg189"
author: "BitcoinFX"
participants:
  - name: "BitcoinFX"
    slug: "bitcoinfx"
description: "BitcoinTalkトピック35におけるBitcoinFXの文脈投稿。msg220の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

Bitcoinソフトウェアを最初にインストールして使用した際に遭遇した問題を記録しておきたい。

正しいインストールとポートフォワード設定にもかかわらず、最初の24時間で20以上の接続があったにもかかわらず、Bitcoinがコインも「ブロック」も生成していないことに気づいた。ブロック数は0のままだった。Bitcoinがネットワーク全体のブロックダウンロードや生成に「追いついて」いないことに気づいた後、タスクマネージャーを開いてさらに調査した。

bitcoin.exeプロセスがMsMpEng.exe（Microsoft Security Essentials）とCPU使用率を「奪い合って」いるようだった。かなりハイスペックなPCなのでシステムの遅延には気づかなかった。bitcoin.exeと適切なプログラムフォルダーの場所を「ファイルと場所の除外」と「プロセスの除外」に追加したところ、Bitcoinは即座にブロックの生成を開始し、CPUプロセスは正常に戻った。

ウイルスアラートも「誤検知」もなかった。**ソフトウェアは100%問題ないことは分かっている**。Microsoft Security Essentialsの「ライブプロテクション」エンジンが、「ブロック」生成で使われるCPU集約的なサイクルの何らかの側面と「うまくやれない」のだと推測している。

さらなるテストはまだだが、Comodo Internet Security（無料版）を使用した際にも同じ問題に遭遇した。

テクノロジーに詳しくない新規Bitcoinユーザーにとっては明らかに問題になるだろう。同様の問題に遭遇した人はいるだろうか？
