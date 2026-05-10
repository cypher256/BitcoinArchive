---
title: "Win32 CPU サイクル vs 'ライブプロテクション'エンジン"
date: 2010-02-01T18:51:53.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=35.msg189#msg189"
author: "BitcoinFX"
participants:
  - name: "BitcoinFX"
    slug: "bitcoinfx"
description: "BitcoinTalk トピック 35 における BitcoinFX の文脈投稿。msg220 の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

Bitcoin ソフトウェアを最初にインストールして使用した際に遭遇した問題を記録しておきたい。

正しいインストールとポートフォワード設定にもかかわらず、最初の 24時間で 20 以上の接続があったにもかかわらず、Bitcoin がコインも「ブロック」も生成していないことに気づいた。ブロック数は 0 のままだった。Bitcoin がネットワーク全体のブロックダウンロードや生成に「追いついて」いないことに気づいた後、タスクマネージャーを開いてさらに調査した。

bitcoin.exe プロセスが MsMpEng.exe（Microsoft Security Essentials）と CPU 使用率を「奪い合って」いるようだった。かなりハイスペックな PC なのでシステムの遅延には気づかなかった。bitcoin.exe と適切なプログラムフォルダーの場所を「ファイルと場所の除外」と「プロセスの除外」に追加したところ、Bitcoin は即座にブロックの生成を開始し、CPU プロセスは正常に戻った。

ウイルスアラートも「誤検知」もなかった。**ソフトウェアは 100%問題ないことは分かっている**。Microsoft Security Essentials の「ライブプロテクション」エンジンが、「ブロック」生成で使われる CPU 集約的なサイクルの何らかの側面と「うまくやれない」のだと推測している。

さらなるテストはまだだが、Comodo Internet Security（無料版）を使用した際にも同じ問題に遭遇した。

テクノロジーに詳しくない新規 Bitcoin ユーザーにとっては明らかに問題になるだろう。同様の問題に遭遇した人はいるだろうか？
