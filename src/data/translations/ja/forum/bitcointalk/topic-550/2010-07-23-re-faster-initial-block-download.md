---
title: "Re: 初期ブロックダウンロードの高速化"
date: 2010-07-23T20:13:27.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=550.msg5378#msg5378"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「初期ブロックダウンロードの高速化」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/259/"
translationStatus: complete
---

[Quote from: knightmb on July 23, 2010, 07:32:58 PM](#msg5369)
> [Quote from: satoshi on July 23, 2010, 06:24:56 PM](#msg5349)
> > データベース設定をいくつか調整することで、初期ブロックダウンロードを約5倍高速化することができた。約30分でダウンロードが完了する。
> >
> > データベースのデフォルト設定では、各ブロックを同期的にディスクに書き込んでいたが、これは必要ない。変更をメモリにキャッシュし、バッチで書き出すように設定を変更した。ブロックはトランザクション的に書き込まれるため、完全な変更が行われるか、まったく行われないかのどちらかであり、いずれの場合もデータは有効な状態に保たれる。
> >
> > この変更は初期ブロックダウンロード中のみ有効にした。最新のブロックから2000ブロック以内に近づくと、これらの変更はオフになり、従来の速度に戻る。
> >
> > 使い始めたい方のためにテストビルドを作成した:
> >
> > [http://www.bitcoin.org/download/bitcoin-0.3.2.5-win32.zip](http://www.bitcoin.org/download/bitcoin-0.3.2.5-win32.zip)
> > [http://www.bitcoin.org/download/bitcoin-0.3.2.5-linux.tar.gz](http://www.bitcoin.org/download/bitcoin-0.3.2.5-linux.tar.gz)
> >
> > これらのバイナリには、Gavin AndresenのJSON-RPC HTTP認証機能と、0.3.2からのその他の重要なセキュリティ改善も含まれている。
> >
> > 過去24時間にわたって、初期ブロックダウンロードを試みている最中に2〜60秒ごとにランダムに強制終了して再起動するテストを実行したが（かわいそうに）、問題なかった。
> >
> > wallet.datの処理方法に変更はない。この変更はblk*.datと重要でないaddr.datのみが対象だ。blk*.datがおかしくなった場合は、いつでも削除して再ダウンロードさせることができる。
>
> 最初の70kブロックは約20分でダウンロードされ、残り2000ブロックは約7分で、0%から100%までわずか27分。非常に良い！最後の2000ブロックで止める安全上の理由があるのか、それとも残り500ブロックなどに調整できるのか？
>
> 念のため言うと、各ダウンロードバーストの平均速度は約3 Mbpsだった。

特にない。次回は1000に変更する。
