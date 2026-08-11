---
title: "ラズロ・ハニエツが回想するサトシの GPU マイニング早期公開への懸念（2010 年 5 月）"
date: 2010-05-10T00:00:00Z
type: "article"
source: "coindesk"
sourceUrl: "https://www.coindesk.com/tech/2025/05/22/what-you-didnt-know-about-laszlo-hanyecz-the-bitcoin-pizza-day-legend"
sourceNote: "本記事中でサトシに帰属させた引用は、CoinDesk（2025 年）・Bitcoin Magazine・Cointelegraph 等のインタビューでラズロ・ハニエツが共有した回想に基づく。完全なメールは公開されていない。"
author: "Laszlo Hanyecz"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Laszlo Hanyecz"
    slug: "laszlo-hanyecz"
description: "ハニエツが 2010年5月10日の GPU マイニング公開発表に対するサトシのメールでの懸念を回想。原文未公開、後年の取材に基づく。"
isSatoshi: false
tags:
  - "gpu-mining"
  - "early-developer"
  - "adoption"
  - "mining-difficulty"
  - "recollection"
secondarySources:
  - name: "Cointelegraph - Satoshi Invented GPU Mining to Defend the Network"
    url: "https://web.archive.org/web/20250505211557/https://cointelegraph.com/news/satoshi-invented-gpu-mining-to-defend-the-network-says-early-dev"
relatedEntries:
  - aftermath/2010-04-19-hanyecz-recalls-satoshi-correspondence
  - aftermath/2010-05-17-hanyecz-recalls-satoshi-gpu-defense-code
  - aftermath/2010-05-22-laszlo-hanyecz-biography
  - aftermath/2010-05-22-bitcoin-pizza-day
  - analysis/2026-05-24-satoshi-design-vs-current-reality
translationStatus: complete
---

![濃紺の背景に、小さなノートパソコンのシルエットと、それより大きなタワー型パソコンのシルエットが並び、右側のパネルでは家の形をしたアバターアイコンが 2 つ、点線とメールアイコンでつながれ、下には右肩上がりの折れ線グラフが途中で横ばいになる様子が描かれている。](/BitcoinArchive/images/analysis/2010-05-10-hanyecz-recalls-satoshi-gpu-pushback-hero.png)

*[編者注：回想に基づく記事であり、メールの一次資料ではない。一次資料で検証可能なのは、ハニエツによる GPU マイニング発表（2010 年 5 月 10 日、Bitcointalk フォーラム公開記録）のみである。サトシ側のやり取り、すなわち引用されるメールは、ハニエツの後年のインタビューでの回想に依拠する。元のメール文言は公開されておらず、以下に掲載するのは CoinDesk（2025 年）、Bitcoin Magazine、Cointelegraph 等のインタビューでハニエツが思い出した語感と内容である。]*

<!-- speaker: narrator -->
2010 年 5 月 10 日にラズロ・ハニエツが Bitcointalk フォーラムで GPU マイニングの発見を発表した後、ハニエツの後年のインタビュー証言によれば、サトシ・ナカモトは懸念を示すメールを送ってきた。ハニエツは初めて GPU（グラフィックス・プロセッシング・ユニット）を使ったビットコインのマイニングに成功した人物であり、CPU マイニングよりも劇的に高いハッシュレートを達成していた。

ハニエツの回想によれば、サトシは次のように書いてきたという：

<!-- speaker: Satoshi Nakamoto -->
<!-- audit:quote-skip -->
> 新規ユーザーへの大きな魅力は、誰でもコンピューターで無料のコインを生成できることだ。GPU は高性能ハードウェアを持つ人だけに報酬を限定してしまう。いずれ GPU クラスタが全てを独占するのは不可避だが、その日を早めたくはない。

<!-- speaker: narrator -->
ハニエツが受け取ったと回想する別のメッセージでは、サトシはより率直だったという：

<!-- speaker: Satoshi Nakamoto -->
<!-- audit:quote-skip -->
> ねえ、これはゆっくりやってくれないか？[……] いいかい、人々がビットコインを買い溜めしても構わないし、富が集中しても構わない。でも今は、誰でもビットコインをダウンロードしてノートパソコンでマイニングを始められることが大きな魅力なんだ。

<!-- speaker: narrator -->
ハニエツは後に自身の発見の影響について罪悪感を感じたことを回想している。2019 年のインタビューで彼は語った：「その後、[GPU マイニングの] 宣伝はやめた。『あなたのプロジェクトを台無しにしてしまった気がする。ごめん』という気持ちだった。彼は CPU でブロックをマイニングできないことで落胆する人がいるかもしれないと心配していた。」

ハニエツが回想するこのやり取りは、編集的に示唆に富んでいる。回想されるサトシは、イデオロギー的な理由で GPU マイニングに反対していたわけではない。富の集中は気にしないとも明言していた、とハニエツは伝えている。ハニエツの枠組みでは、サトシの懸念は純粋に戦略的だった。GPU の早すぎる普及は一般ユーザーが参加するインセンティブを奪うことで初期のネットワーク成長を阻害する。元のメールがこの枠組みを正確にもっていたのか、それとも回想の過程で枠組みが整理されたのかは、現在の記録では分離不能である。

この回想されたやり取りのもう半分は、 1 週間後の[サトシによる自作の防衛用 GPU コードの返礼的な共有](/BitcoinArchive/ja/entries/aftermath/2010-05-17-hanyecz-recalls-satoshi-gpu-defense-code/)に現れる。ハニエツによれば、サトシは、ここで述べた公の抑制と、 51% 攻撃への保険として私的に GPU マイナーを準備しておいたことの両方を併せ持っていたという。この同じ出来事は、サトシの「1 CPU = 1 票」という設計意図からの[マイニングハードウェア集中化という乖離の起点](/BitcoinArchive/ja/entries/analysis/2026-05-24-satoshi-design-vs-current-reality/)として、ビットコイン史の反対側の端からも独立に引用されている。
