---
title: "Re: ビットコインブロガー：ビットコインは購入と生成のどちらが良いか？"
date: 2010-09-08T20:27:39.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=955.msg12248#msg12248"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「ビットコインブロガー：ビットコインは購入と生成のどちらが良いか？」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/443/"
translationStatus: complete
---

[Quote from: BitLex on September 07, 2010, 08:10:54 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-955/2010-09-07-bitlex-msg12189/)
> [Quote from: TTBit on September 07, 2010, 07:12:53 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-955/2010-09-07-ttbit-msg12180/)
> > Kill-a-Wattをコンピュータに接続して、2200 khash/sで140ワットを消費していることを計算した（モニターオフ）。計算機によると、ブロックを生成するのに14日2時間3分、つまり338.05時間ごとになるはずだ。1ブロック生成に47.327 kWhかかり、1 kWhあたり12セントだと1ブロックあたり5.68ドルで、赤字だ。
> >
> > 興味深いのは、CUDAスレッドでビデオカードで25,000 khash/秒を生成しているという報告だ。1000ワット未満で済むなら（そうであるべきだが）、電気代的には再び採算が取れることになる。
> >
> > 年末までに難易度1000。
>
> 最近リリースされたCUDAクライアントで簡単なテストをした。結果は以下の通り。
>
> AMD X3 @2.8ghz
> ->標準クライアント
> 約3800khs 約150ワット
>
> GTX260
> ->puddinpopのCUDAクライアント
> 約33000khs 約200ワット
>
> CPUマイニングは私にとってもう利益が出ない。最新の難易度ステップでほとんどのジェネレーターを停止した。
> GPUでのマイニングは確かに再び利益が出るだろう。
> 残高を勝手にいじるクライアントは信用したくないので使っていないが、
> いつかオープンソースクライアントが出ることを願う。
>
> しかし、あの1000は冗談だろう？
> 年末？
> もしかして今週末。 Grin

->標準クライアント
~3800khs ~150ワット
-4wayを試したか？

Quote:24コアのマシンではどれくらいのハッシュが期待できますか？クアッドコアで毎秒4,300ハッシュを生成しているので、24コアのマシンなら毎秒25,000ハッシュでマイニングできると見積もっています。
AMD Phenom（確か4コア）CPUは-4wayで約11,000khpsを出しており、約100%の速度向上だ。24コアなら66,000khpsになるはずだ。AMDは最良のSSE2実装を持っているため最善の選択だ。（あるいはtcatmがAMDを持っていてそのコードをそれ向けに最適化したからかもしれない）

他にやることが多すぎて-4wayを自動にする時間がなかった。今のところまだ手動で行う必要がある。
[topic 820](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-820/2010-08-16-ground-loop-msg9674/)
