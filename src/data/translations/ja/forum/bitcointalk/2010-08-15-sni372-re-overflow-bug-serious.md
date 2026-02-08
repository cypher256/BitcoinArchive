---
title: "Re: オーバーフローバグ 深刻"
date: 2010-08-15T22:58:08.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9573#msg9573"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「オーバーフローバグ 深刻」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/372/"
threadId: "bt-overflow-bug-serious"
threadTitle: "overflow bug SERIOUS"
threadPosition: 4
translationStatus: complete
---

ブロックチェーンのダウンロードを更新しないでください。誰かのブロックチェーンダウンロードを使う場合、最後まで含むものは望ましくありません。やや古いもののほうが良く、最新のブロックをダウンロードして検証できます。

tcatmの4-way SSE2 SHA-256はファイルsha256.cppに入っており、数リビジョン前にすでにアップロードされています。

たった今、Linux上でのビルドを有効にするmakefile.unixであるrev 134をアップロードしました。今Linuxでrev 134をビルドすると-4wayスイッチが使えます。

ビルドに問題がある場合は、makefile.unixを編集して：
- -DFOURWAYSSE2を削除
- 以下の行の末尾からobj/sha256.oを削除：
bitcoin: $(OBJS) obj/ui.o obj/uibase.o obj/sha256.o
bitcoind: $(OBJS:obj/%=obj/nogui/%) obj/sha256.o

0.3.10のLinuxビルドには、私がビルドする際に-4wayオプションが*含まれます*。

Windows用のパッチダウンロードはこちらです：

[http://www.bitcoin.org/download/bitcoin-0.3.10-win32-setup.exe](http://www.bitcoin.org/download/bitcoin-0.3.10-win32-setup.exe)
[http://www.bitcoin.org/download/bitcoin-0.3.10-win32.zip](http://www.bitcoin.org/download/bitcoin-0.3.10-win32.zip)

SHA1 16645ec5fcdb35bc54bc7195309a1a81105242bb bitcoin-0.3.10-win32-setup.exe
SHA1 4f35ad7711a38fe8c880c6c9beab430824c426d3 bitcoin-0.3.10-win32.zip

手順：
1) シャットダウンする。
2) knightmbのblkファイルをダウンロードし、blk0001.datとblkindex.datファイルを置き換える。
[http://knightmb.dyndns.org/files/bitcoin/blocks/](http://knightmb.dyndns.org/files/bitcoin/blocks/)
[http://rapidshare.com/files/413168038/BitcoinBlocks.torrent](http://rapidshare.com/files/413168038/BitcoinBlocks.torrent)
3) 0.3.10にアップグレードする。
4) 74000ブロック未満から開始され、残りを再ダウンロードするはずです。

あるいは、blkファイルのダウンロードが面倒な場合は、以下のようにするだけでよいです：

1) シャットダウンする。
2) blk*.datを削除（または移動）する。
3) 0.3.10にアップグレードする。
4) すべてのブロックを再ダウンロードし、おそらく約1時間かかります。
