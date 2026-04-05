---
title: "Re: (context post by MoonShadow)"
date: 2010-08-17T21:52:06.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=846.msg9983#msg9983"
author: "MoonShadow"
participants:
  - name: "MoonShadow"
    slug: "moonshadow"
description: "BitcoinTalkトピック846におけるMoonShadowのコンテキスト投稿。msg10076の前。"
isSatoshi: false
tags: []
translationStatus: complete
---
[Quote from: lfm on August 17, 2010, 09:33:14 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-846/2010-08-17-lfm-msg9981/)
> [Quote from: creighto on August 17, 2010, 08:51:11 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-846/2010-08-17-moonshadow-msg9973/)
> > 誰かがこれを使ったのではないかと賭けてもいい…

そうだが、あなたが見落とした2つの点がある。まず、ソフトウェアトランシーバーは通常これらのチップを4つ必要とする。（受信用に2つ、送信用に2つ。1つがデジタル信号処理を行い、もう1つが生信号のデジタルフィルタリングを行う。別の言い方をすると、1つが仮想マイク/スピーカーで、もう1つが仮想チューナーだ。すべてのソフトウェア無線セットアップが4つ必要なわけではないが。）だからアマチュア無線家がこれらを4つ持っていれば、4つすべてをこの目的にプログラムできる。もう1つのポイントは、明示的には述べなかったが、1つのFPGAが1つのsha-256プロセッサにしかならないわけではないということだ。1つのFPGAチップに複数のそのようなプロセッサをプログラムすることが可能であり、むしろありそうだ。これらのチップはかなり複雑な論理回路を「仮想化」できるように大きく、才能あるプログラマーなら1つのチップに複数のsha-256プロセッサを並列で動作するようにプログラムできるだろう。これでも彼のメインCPUとGPUはさらなるKh/sが欲しければまだ利用可能だ。同じシステム内の1つ以上のGPUをハッシュ計算用にプログラムするスキルを持つハッカーはすでにエリートであり、単一のFPGA上で複数のsha-256コアを実行するのは朝飯前だろう。そして我々はBitcoinコミュニティ内にエリートな才能がいることをすでに知っている。動かしたい人も壊したい人も。
