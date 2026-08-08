---
title: "ラズロ・ハニエツが回想するサトシの防衛用 GPU マイニングコード共有（2010 年 5 月）"
date: 2010-05-17T00:00:00Z
type: "article"
source: "cointelegraph"
sourceUrl: "https://web.archive.org/web/20250505211557/https://cointelegraph.com/news/satoshi-invented-gpu-mining-to-defend-the-network-says-early-dev"
sourceNote: "Cointelegraph およびその他のメディアとのインタビューにおけるラズロ・ハニエツの公開発言に基づく。完全なメールは公開されておらず、本記事の引用はハニエツがサトシの発言や共有内容について思い出した回想である。"
author: "Laszlo Hanyecz"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Laszlo Hanyecz"
    slug: "laszlo-hanyecz"
description: "ハニエツの回想：サトシが返礼として自作の GPU マイニングコードを共有。マイニングではなく 51%攻撃への備えとされた。日付は近似値、後年の取材に基づく。"
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

![ハニエツとサトシを示す 2 台のシルエットのコンピュータータワーが破線で結ばれ、間に盾のアイコンと抑制されたダイヤルが描かれたイラスト。](/BitcoinArchive/images/analysis/2010-05-17-hanyecz-recalls-satoshi-gpu-defense-code-hero.png)

*[編者注：本エントリーは回想に基づく記事であり、メールの一次資料ではない。サトシとハニエツの完全なメールは公開されていない。以下では、サトシが GPU マイニングコードを返礼として共有したこと、防衛目的の動機、意図的に最適化を避けた選択を記す。これらは、ハニエツの後年のインタビュー（Cointelegraph、InsideBitcoins）から再構成したものである。2010 年 5 月 17 日という日付は、ハニエツの 5 月 10 日 Bitcointalk GPU 発表との前後関係から推定した近似値。]*

<!-- speaker: narrator -->
ラズロ・ハニエツの後年の回想によれば、ハニエツがサトシに GPU マイナーのコードを共有した後に注目すべきやり取りがあったという。サトシは独自に開発した GPU マイニングコードを返礼として共有してきた。ハニエツが伝えるところでは、この事実は、サトシがハニエツの公開発表より前から GPU マイニングに取り組んでいたことを示すものであった。その目的は、コインをマイニングすることではなく、ネットワークを潜在的な 51% 攻撃から防衛するための備えだった。

ハニエツは後に次のように語った：

<!-- speaker: Laszlo Hanyecz -->
<!-- audit:quote-skip -->
> そして彼は実際に自分のバージョンを共有してくれた。つまりビットコインのソフトウェアには含まれていなかったが、GPU マイニングのコードは持っていて、ネットワークを防衛する必要が生じた場合に備えて準備しておいたと言っていた。

<!-- speaker: narrator -->
サトシは GPU マイニングアルゴリズムの複数のバージョンを開発していたが、公開のビットコインソフトウェアに含めないことを意図的に選択した。彼の戦略的な理由は二つあった：潜在的な攻撃者に対する防御兵器として GPU マイニング能力を保持しておきたかったことと、ネットワークの難易度を早まって引き上げたくなかったことである。後者は一般の CPU マイナーの参加意欲を削ぐことになるからだ。

ハニエツは自分の GPU コードの方がサトシのバージョンよりも実際にはパフォーマンスが良かったが、サトシは意図的に最適化を避けていたと指摘した：

<!-- speaker: Laszlo Hanyecz -->
<!-- audit:quote-skip -->
> そして感じたのは、その一因として、彼はネットワークの難易度を上げたくないから、早まって最適化したくなかったということだ。

<!-- speaker: narrator -->
対比こそが要点だ。公の場ではサトシは一般の CPU を競争にとどめるために GPU マイニングを抑え、私的には意図的に最適化を避けたまま GPU マイナーを用意しておいた。ネットワークを 51% 攻撃から守る必要が生じたときにだけ投入するためのものだった。

この能力を私的に保持する選択は、 [サトシがハニエツの 5 月 10 日の GPU マイニング発表に示した懸念](/BitcoinArchive/ja/entries/aftermath/2010-05-10-hanyecz-recalls-satoshi-gpu-pushback/)に記録された公のスタンスと表裏一体だった。そこでもまたハニエツの回想によれば、一般の CPU マイナーが落胆しないよう、サトシはハニエツに歩みを緩めるよう求めていた。
