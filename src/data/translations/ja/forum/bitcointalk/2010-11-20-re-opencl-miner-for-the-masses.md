---
title: "Re: 大衆向けOpenCLマイナー"
date: 2010-11-20T17:24:20.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1334.msg23097#msg23097"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「大衆向けOpenCLマイナー」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/506/"
threadId: "bt-opencl-miner-for-the-masses"
threadTitle: "OpenCL miner for the masses"
threadPosition: 1
translationStatus: complete
---

[Quote from: m0mchil on November 20, 2010, 10:16:19 AM](https://bitcointalk.org/index.php?topic=1334.msg23018#msg23018)SVN 186に更新しました
m0mchilさん、更新に追従してくれてありがとうございます！

GPUマイナーの皆さん、無料トランザクションの悪用を止めるため、できるだけ早くアップグレードしてください！このバージョンには新しい優先度ベースの無料トランザクションスパム制限があります。

[Quote from: m0mchil on November 16, 2010, 10:30:41 AM](https://bitcointalk.org/index.php?topic=1334.msg22251#msg22251)SVN 181に更新し、getworkパッチを修正して新しいトランザクションでブロックを再構築する間に60秒待つようにしました。これは実際にはオリジナルクライアントの動作で、パッチでミスにより忘れられていました。すべてのgetworkリクエストでの重いCPU使用率を修正（最近の大量トランザクションスパムで顕著になった）。アップグレードしてください。
SVN 184より前は、トランザクションをブロックにコンパイルする処理がn^2のアルゴリズムを使用していました。新しい効率的なシングルパスアルゴリズムは桁違いに高速です。（O(n)対O(n^2)/2アルゴリズム、n=200で10〜100倍高速）
