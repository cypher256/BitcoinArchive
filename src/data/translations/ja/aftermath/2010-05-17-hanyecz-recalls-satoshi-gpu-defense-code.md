---
title: "ラズロ・ハニエツが回想するサトシの防衛用 GPU マイニングコード共有（2010 年 5 月）"
date: 2010-05-17T00:00:00Z
type: "article"
source: "cointelegraph"
sourceUrl: "https://cointelegraph.com/news/satoshi-invented-gpu-mining-to-defend-the-network-says-early-dev"
author: "Laszlo Hanyecz"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Laszlo Hanyecz"
    slug: "laszlo-hanyecz"
description: "ハニエツの回想：サトシが返礼として自作のGPUマイニングコードを共有。マイニングではなく51%攻撃への備えとされた。日付は近似値、後年の取材に基づく。"
isSatoshi: false
tags:
  - "gpu-mining"
  - "network-defense"
  - "51-percent-attack"
  - "early-developer"
  - "recollection"
secondarySources:
  - name: "InsideBitcoins - Laszlo Hanyecz Claims Satoshi Invented GPU Mining"
    url: "https://insidebitcoins.com/news/laszlo-hanyecs-claims-satoshi-invented-gpu-mining-to-prevent-51-attacks"
relatedEntries:
  - aftermath/2010-04-19-hanyecz-recalls-satoshi-correspondence
  - aftermath/2010-05-10-hanyecz-recalls-satoshi-gpu-pushback
  - aftermath/2010-05-22-laszlo-hanyecz-biography
  - aftermath/2010-05-22-bitcoin-pizza-day
translationStatus: complete
---

*[編者注：本エントリーは回想に基づく記事であり、メールの一次資料ではない。サトシとハニエツの完全なメールは公開されていない。以下に記すやり取り — サトシが GPU マイニングコードを返礼として共有したこと、防衛目的の動機、意図的に最適化を避けた選択 — は、ハニエツの後年のインタビュー（Cointelegraph、InsideBitcoins）から再構成したものである。2010 年 5 月 17 日という日付は、ハニエツの 5 月 10 日 Bitcointalk GPU 発表との前後関係から推定した近似値。]*

<!-- speaker: narrator -->
ラズロ・ハニエツの後年の回想によれば、ハニエツがサトシに GPU マイナーのコードを共有した後に注目すべきやり取りがあったという。サトシは独自に開発した GPU マイニングコードを返礼として共有してきた。ハニエツが伝えるところでは、この事実は、サトシがハニエツの公開発表より前から GPU マイニングに取り組んでいたことを示すものであった — コインをマイニングするためではなく、ネットワークを潜在的な 51% 攻撃から防衛するための備えとしてである。

ハニエツは後に次のように語った：

<!-- speaker: Laszlo Hanyecz -->
> そして彼は実際に自分のバージョンを共有してくれた。つまりビットコインのソフトウェアには含まれていなかったが、GPUマイニングのコードは持っていて、ネットワークを防衛する必要が生じた場合に備えて準備しておいたと言っていた。

<!-- speaker: narrator -->
サトシはGPUマイニングアルゴリズムの複数のバージョンを開発していたが、公開のビットコインソフトウェアに含めないことを意図的に選択した。彼の戦略的な理由は二つあった：潜在的な攻撃者に対する防御兵器としてGPUマイニング能力を保持しておきたかったことと、ネットワークの難易度を早まって引き上げたくなかったことである。後者は一般のCPUマイナーの参加意欲を削ぐことになるからだ。

ハニエツは自分のGPUコードの方がサトシのバージョンよりも実際にはパフォーマンスが良かったが、サトシは意図的に最適化を避けていたと指摘した：

<!-- speaker: Laszlo Hanyecz -->
> そして感じたのは、その一因として、彼はネットワークの難易度を上げたくないから、早まって最適化したくなかったということだ。

<!-- speaker: narrator -->
このやり取りはサトシの戦略的思考の魅力的な一面を明らかにしている：アクセシビリティを守るために公のGPUマイニングを抑制しつつ、敵対的な攻撃に対する保険としてプライベートにGPUマイニング能力を維持していた。これは、サトシが潜在的な攻撃ベクトルについて深く考え、事前に防御策を準備していたことを示している。
