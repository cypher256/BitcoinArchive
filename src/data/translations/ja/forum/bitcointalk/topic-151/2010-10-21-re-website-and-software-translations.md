---
title: "Re: ウェブサイトとソフトウェアの翻訳"
date: 2010-10-21T22:50:47.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=151.msg17965#msg17965"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「ウェブサイトとソフトウェアの翻訳」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/492/"
translationStatus: complete
---

順序はプログラムにとっては問題ないが、メンテナンスする私にとっては重要だ。.poファイルの順序がバラバラになると、変更のdiffが取れない。プログラムの英語テキストを変更する際に7つの翻訳ファイルすべてを更新する必要があり、すべて同じ順序であるほうが容易だ。

poeditに再スキャンさせれば、通常の順序に戻すことはできる。

未翻訳の文字列が上部に表示されるのは正常だ。

[Quote from: eurekafag on October 06, 2010, 07:39:36 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-151/2010-10-06-eurekafag-msg15697/)
> おかしいな。通常のXFSで実行したら、未翻訳の新しい文字列が上部に表示された。順序はそんなに重要だろうか？ プログラムにとっても翻訳者にとっても重要ではないと思う。poeditを使えば特定の文字列がどこに属するか常に確認できるから。ところで、おそらく1つに置き換えられるような似た行がいくつかある。意味が非常に近く、1〜2語しか違わない。もちろんただの提案だが。

わかっているが、ソースコードを複雑にせずには容易にできない。
