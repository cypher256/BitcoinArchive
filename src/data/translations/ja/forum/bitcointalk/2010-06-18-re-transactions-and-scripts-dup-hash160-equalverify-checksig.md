---
title: "Re: トランザクションとスクリプト: DUP HASH160 ... EQUALVERIFY CHECKSIG"
date: 2010-06-18T16:17:14.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=195.msg1617#msg1617"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「トランザクションとスクリプト: DUP HASH160 ... EQUALVERIFY CHECKSIG」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/127/"
threadId: "bt-transactions-and-scripts-dup-hash160-equalverify-c"
threadPosition: 2
translationStatus: complete
---

第2のバージョンは、私にとって大規模な開発とメンテナンスの負担になるだろう。第2のバージョンが物事を固定してしまう中で、ネットワークをアップグレードしながら後方互換性を維持するのは十分に大変だ。もし第2のバージョンに問題が発生すれば、ユーザー体験は両方に悪い印象を与えるが、少なくとも公式バージョンを使い続けることの重要性をユーザーに再認識させることにはなるだろう。もし誰かが第2のバージョンをフォークしようとしていたら、少数派バージョンを使うリスクについて多くの免責事項を公表しなければならないだろう。これは意見の不一致がある場合に多数派バージョンが勝つ設計であり、少数派バージョンにとってはかなり厳しいことになるし、できれば詳しく触れたくない。バージョンが1つしかない限り、その必要はない。

そうだ、ほとんどの開発者はソフトウェアのフォークを好まないが、今回は本当の技術的な理由がある。

[gavinandresen、2010年6月17日 午後7:58:14の引用](https://bitcointalk.org/index.php?topic=195.msg1613#msg1613)トランザクション内スクリプトの柔軟性には感心しますが、私の悪い小さな頭はすぐにそれを悪用する方法を考え始めます。TxOutスクリプトにあらゆる種類の興味深い情報をエンコードでき、改造されていないクライアントがそれらのトランザクションを検証して無視するなら、便利な秘密のブロードキャスト通信チャネルになるでしょう。

それは人気が出て、誰かが支払いネットワークに何百万ものトランザクションを送り込んで最新のLady Gagaの動画を友達全員に転送するのが楽しいと思うまでは素敵な機能だな...
それがトランザクション手数料の理由の1つだ。必要であれば他にもできることがある。

[laszlo、2010年6月17日 午後6:50:31の引用](https://bitcointalk.org/index.php?topic=195.msg1612#msg1612)この設計にどのくらい取り組んでいるのですか、サトシ？非常によく考え抜かれているように見えます。事前に多くのブレインストーミングと議論をせずに、ただ座ってコーディングするような種類のものではありません。皆が穴を探して明白な質問をしていますが、よく持ちこたえています
2007年からだ。ある時点で、信頼をまったく必要とせずにこれを行う方法があると確信し、考え続けることを止められなかった。コーディングよりも設計の作業の方がはるかに多かった。

幸いなことに、これまでに提起されたすべての問題は、以前に検討し計画していたものだ。
