---
title: "Re: 0.3.1リリース候補、テストしてください"
date: 2010-07-15T22:07:35.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=383.msg3305#msg3305"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「0.3.1リリース候補、テストしてください」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/201/"
translationStatus: complete
---

<!-- tone-skip -->
[Quote from: knightmb on July 15, 2010, 08:15:46 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-383/2010-07-15-knightmb-msg3274/)
> Linuxクライアント（64ビット）では、「閉じる時に最小化」がまだトレイに最小化する（しばらくすると複数のトレイアイコンを生成してXサーバーがハングする）。
>
> しかし、スレッドの優先度は全て適切にniceされているようだ。CPUを全て使っているスレッドはnice 19で、0や2の他のスレッドはCPUを使っていないので、システムはレスポンシブに感じる。
> Code:[knightmb@KnightMB ~]$ ps -eflL | grep bitcoin
> 0 S knightmb 13676 13591 13676  0    9  80   0 - 113704 poll_s 14:52 pts/1   00:00:02 ./bitcoin
> 1 S knightmb 13676 13591 13681  0    9  80   0 - 113704 hrtime 14:52 pts/1   00:00:00 ./bitcoin
> ...
>
> 「Start BitCoin on window system startup」が何をするのか正確にはわからないが？
>
> ライブラリエラーについて、古めのLinuxクライアント（1つはたった1年前のもの）で**/usr/lib/libstdc++.so.6 'GLIBCXX_3.4.11' not found**が出る。ファイルを確認したところ、libstdc++.so.10にリンクされているが、十分なバージョンかどうかわからない。
<!-- /tone-skip -->

最初の投稿をこの修正を含むLinux用rc2へのリンクで更新した。修正されているか確認してほしい。ありがとう！

[http://www.bitcoin.org/download/bitcoin-0.3.1.rc2-linux.tar.gz](http://www.bitcoin.org/download/bitcoin-0.3.1.rc2-linux.tar.gz)
