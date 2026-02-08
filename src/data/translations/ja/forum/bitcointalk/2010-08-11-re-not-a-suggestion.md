---
title: "Re: 提案ではなく"
date: 2010-08-11T00:14:22.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=770.msg8637#msg8637"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoが二重支払いの不在を証明する課題について議論し、ゼロ知識証明の適用可能性を検討。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/339/"
threadId: "bt-not-a-suggestion"
threadTitle: "Not a suggestion"
threadPosition: 2
translationStatus: complete
---

これは非常に興味深いトピックです。解決策が見つかれば、はるかに優れた、簡単で便利なBitcoinの実装が可能になるでしょう。

元々、コインは単なる署名のチェーンであり得ます。タイムスタンプサービスがあれば、バックトレースのファンアウトが大きくなりすぎる前に古いものを最終的に破棄できますし、コインを個別にまたは額面単位で保持できます。二重支払いの不在をチェックする必要があるからこそ、すべてのトランザクションのグローバルな知識が必要になります。

課題は、他の支出が存在しないことをどうやって証明するかです。ノードはそれを検証するためにすべてのトランザクションを知っている必要があるようです。入出力ポイントのハッシュしか知らなければ、出力ポイントが以前に使われたかどうかを署名で確認できません。このことについて何かアイデアはありますか？

このケースでゼロ知識証明をどう適用するか考えるのは困難です。

何かの不在を証明しようとしています。これにはすべてを知り、そのものが含まれていないことを確認する必要があるようです。
