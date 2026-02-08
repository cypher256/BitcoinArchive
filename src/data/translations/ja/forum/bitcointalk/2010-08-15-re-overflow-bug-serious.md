---
title: "Re: オーバーフローバグ 深刻"
date: 2010-08-15T20:59:09.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9530#msg9530"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoがオーバーフローバグに対する予備的な修正コードを共有し、負の値とオーバーフロー値のチェックを追加。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/368/"
threadId: "bt-overflow-bug-serious"
threadTitle: "overflow bug SERIOUS"
threadPosition: 1
translationStatus: complete
---

予備的な変更です。正しいですか？ まだ変更することがあります。これがすべてではありません。間もなくSVNにコミットします。

Code:    bool CheckTransaction() const
    {
        // コンテキストに依存しない基本チェック
        if (vin.empty() || vout.empty())
            return error("CTransaction::CheckTransaction() : vin or vout empty");

        // 負の値とオーバーフロー値のチェック
        int64 nTotal = 0;
        foreach(const CTxOut& txout, vout)
        {
            if (txout.nValue < 0)
                return error("CTransaction::CheckTransaction() : txout.nValue negative");
            if (txout.nValue > 21000000 * COIN)
                return error("CTransaction::CheckTransaction() : txout.nValue too high");
            nTotal += txout.nValue;
            if (nTotal > 21000000 * COIN)
                return error("CTransaction::CheckTransaction() : txout total too high");
        }

        if (IsCoinBase())
        {
            if (vin[0].scriptSig.size() < 2 || vin[0].scriptSig.size() > 100)
                return error("CTransaction::CheckTransaction() : coinbase script size");
        }
        else
        {
            foreach(const CTxIn& txin, vin)
                if (txin.prevout.IsNull())
                    return error("CTransaction::CheckTransaction() : prevout is null");
        }

        return true;
    }

トピックをスティッキーにしないでください、あそこは誰も見ません。バンプするのに十分な投稿があるでしょう。
