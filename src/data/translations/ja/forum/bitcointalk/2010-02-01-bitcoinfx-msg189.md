---
title: "Re:（BitcoinFXの文脈投稿）"
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
threadId: ""
tags: []
translationStatus: complete
---

Bitcoinソフトウェアの初回インストール・使用時に遭遇した問題を記録しておきたい。

正しいインストールとポート転送設定にもかかわらず、最初の24時間は20以上の接続があるにもかかわらずBitcoinがコインや「ブロック」を生成していないことに気づいた。ブロック数はずっと0のままだった。Bitcoinがネットワーク全体のブロックダウンロードや生成に「追いついていない」ことに気づき、タスクマネージャーを開いてさらに調査した。

bitcoin.exeプロセスがMsMpEng.exe（Microsoft Security Essentials）とCPU使用率を「奪い合っている」ように見えた。かなり高スペックなPCだったのでシステムの速度低下には気づいていなかった。bitcoin.exeと適切なプログラムフォルダの場所を「ファイルと場所の除外」および「プロセスの除外」に追加した後、Bitcoinは即座にブロックの生成を開始し、CPUプロセスは正常に戻った。

ウイルスアラートやBitcoinの「誤検知」は一切なかった。**ソフトウェアが100%問題ないことは分かっている**。Microsoft Security Essentialsの「ライブ保護」エンジンが、「ブロック」生成で使用されるCPU集約型サイクルの何らかの側面とうまく「共存できない」のだろうと推測している。

さらなるテストはまだ行っていないが、Comodo Internet Security（無料版）を使用した際にも同じ問題に遭遇した。

これは、あまり「技術に詳しくない」新しいBitcoinユーザーにとって明らかに問題になるだろう。同様の問題に遭遇した人はいるだろうか？
