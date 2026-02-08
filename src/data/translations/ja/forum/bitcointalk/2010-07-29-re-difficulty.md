---
title: "Re: 難易度"
date: 2010-07-29T01:16:23.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=587.msg6301#msg6301"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoがブロックのタイムスタンプ検証に関する正しいコードを示し、タイムスタンプの制約について説明。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/286/"
translationStatus: complete
---

見ていたコードが間違っています。適用されるコードはこちらです：

Code:bool CBlock::CheckBlock() const
{
...
    // タイムスタンプをチェック
    if (nTime > GetAdjustedTime() + 2 * 60 * 60)
        return error("CheckBlock() : block timestamp too far in the future");
...

bool CBlock::AcceptBlock()
{
   ...
    // 前のブロックに対してタイムスタンプをチェック
    if (nTime <= pindexPrev->GetMedianTimePast())
        return error("AcceptBlock() : block's timestamp is too early");

タイムスタンプは未来方向には最大2時間に制限されています。前のブロックより早い時刻にすることはできますが、直近11ブロックの中央値より大きくなければなりません。このようにしている理由は、前のブロックのタイムスタンプが未来すぎた場合（今回起きたように）、次のブロックで時刻を修正できるようにするためです。
