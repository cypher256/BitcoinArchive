---
title: "Re: [パッチ] 自動ブロック検証"
date: 2010-08-16T17:08:02.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=832.msg9775#msg9775"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「[パッチ] 自動ブロック検証」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/392/"
translationStatus: complete
---

[Quote from: satoshi on August 16, 2010, 03:25:54 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-832/2010-08-16-satoshi-msg9754/)
> それは難しいアプローチだ。
>
> 再編成（reorg）を起こして、無効なチェーンを切り離す必要がある。
>
> このコードはめったにテストされず、かなり複雑なので、シンプルで安全なものが最善だ。
>
> 自分が考えていたのはこうだ。（まだテストしていない）メインチェーンのすべてのブロックをチェックする。不正なブロックが見つかった場合、そのチェーンのbnChainWorkをすべて0に設定して再びベストチェーンになれないようにし、フォークレベルまでベストチェーンワークを下げることで、フォーク後の新しいブロックが再編成を引き起こすようにする。（実際にreorgを行わずにpindexBestを変更することはできない）
>
> これはまだ完璧ではない。reorgをトリガーするために有効なブロックを1つ受信する必要がある。
>
> チェック後にAddToBlockIndexやReorganizeを開始することはおそらく可能だが、はるかに慎重な注意が必要になる。おそらくAddToBlockIndexの新しいベストブロックを設定する部分を分離すべきだ。おそらく以下のコードの代わりにそうすることになるだろう。
>
> Code:bool CTxDB::LoadBlockIndex()
> {
>     ...
>
>     // メインチェーンのブロックを検証
>     vector<CBlockIndex*> vChain;
>     for (CBlockIndex* pindex = pindexBest; pindex && pindex->pprev; pindex = pindex->pprev)
>     {
>         vChain.push_back(pindex);
>         CBlock block;
>         if (!block.ReadFromDisk(pindex))
>             return error("LoadBlockIndex() : block.ReadFromDisk failed");
>         if (!block.CheckBlock())
>         {
>             bnBestChainWork = pindex->pprev->bnChainWork;
>             foreach(CBlockIndex* pindex2, vChain)
>                 pindex2->bnChainWork = 0;
>         }
>     }
>
>     return true;
> }

最終的にSVN rev 139でそのようにした。

不正なチェーンを削除する代わりに、ConnectBlockに追加のCheckBlockを加えて、不正なブロックが一度排除された後に最良チェーンに戻れないようにした。
