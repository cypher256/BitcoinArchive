---
title: "Re: オーバーフローバグ深刻"
date: 2010-08-15T22:58:08.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9573#msg9573"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「オーバーフローバグ深刻」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/372/"
translationStatus: complete
---

ブロックチェーンのダウンロードを更新しないでほしい。誰かのブロックチェーンダウンロードを使う場合、最後まで含むものは望ましくない。やや古いもののほうが良く、最新のブロックをダウンロードして検証できる。

tcatm の 4-way SSE2 SHA-256 はファイル sha256.cpp に入っており、数リビジョン前にすでにアップロードされている。

たった今、Linux 上でのビルドを有効にする makefile.unix である rev 134 をアップロードした。今 Linux で rev 134 をビルドすると-4way スイッチが使える。

ビルドに問題がある場合は、makefile.unix を編集して：
- -DFOURWAYSSE2 を削除
- 以下の行の末尾から obj/sha256.o を削除：

```makefile
bitcoin: $(OBJS) obj/ui.o obj/uibase.o obj/sha256.o
bitcoind: $(OBJS:obj/%=obj/nogui/%) obj/sha256.o
```

0.3.10 の Linux ビルドには、私がビルドする際に-4way オプションが*含まれる*。

Windows 用のパッチダウンロードはこちらだ：

[http://www.bitcoin.org/download/bitcoin-0.3.10-win32-setup.exe](http://www.bitcoin.org/download/bitcoin-0.3.10-win32-setup.exe)
[http://www.bitcoin.org/download/bitcoin-0.3.10-win32.zip](http://www.bitcoin.org/download/bitcoin-0.3.10-win32.zip)

SHA1 16645ec5fcdb35bc54bc7195309a1a81105242bb bitcoin-0.3.10-win32-setup.exe
SHA1 4f35ad7711a38fe8c880c6c9beab430824c426d3 bitcoin-0.3.10-win32.zip

手順：
1) シャットダウンする。
2) knightmb の blk ファイルをダウンロードし、blk0001.dat と blkindex.dat ファイルを置き換える。
[http://knightmb.dyndns.org/files/bitcoin/blocks/](http://knightmb.dyndns.org/files/bitcoin/blocks/)
[http://rapidshare.com/files/413168038/BitcoinBlocks.torrent](http://rapidshare.com/files/413168038/BitcoinBlocks.torrent)
3) 0.3.10 にアップグレードする。
4) 74000 ブロック未満から開始され、残りを再ダウンロードするはずだ。

あるいは、blk ファイルのダウンロードが面倒な場合は、以下のようにするだけでよい：

1) シャットダウンする。
2) blk*.dat を削除（または移動）する。
3) 0.3.10 にアップグレードする。
4) すべてのブロックを再ダウンロードし、おそらく約 1時間かかる。
