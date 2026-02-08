---
title: "Re: 提案ではなく"
date: 2010-08-13T19:28:47.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=770.msg9074#msg9074"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoが「鍵のブラインド化」と「グループ署名」の概念を用いたプライバシー強化の可能性を探求。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/356/"
threadId: "bt-not-a-suggestion"
threadTitle: "Not a suggestion"
threadPosition: 5
translationStatus: complete
---

あなたのアイデアをまだ把握できていません。公開ネットワークから何か情報を隠しますか？ 利点は何ですか？

少なくとも50%のノードがトランザクションを十分に検証して古いトランザクションを破棄できるなら、全員がすべてを見て記録を保持できたということです。

公開ノードはトランザクションの値を見ることができますか？ 値がどの前のトランザクションから来たかを見ることができますか？ できるなら、すべてを知っています。できないなら、値が有効なソースから来たことを検証できないので、彼らが生成したチェーンをその検証として受け取ることはできません。

Bitcoinアドレスを隠しますか？ それですか？ OK、それならわかるかもしれません。

暗号は「鍵のブラインド化」を行う方法を提供するかもしれません。いくつか調査しましたが、あまり知られていない分野でした。しかし何かあるかもしれません。「グループ署名」が関連しているかもしれません。

この一般的な分野に何かあります：
[http://www.users.zetnet.co.uk/hopwood/crypto/rh/](http://www.users.zetnet.co.uk/hopwood/crypto/rh/)

必要なのは、公開鍵の追加のブラインドされたバリエーションを生成する方法です。ブラインドされたバリエーションはルート公開鍵と同じ特性を持ち、秘密鍵がそのいずれに対しても署名を生成できるようにします。他者はブラインドされた鍵がルート鍵に関連しているか、同じルート鍵からの他のブラインドされた鍵に関連しているかを判別できません。これがブラインド化の特性です。ブラインド化は、簡単に言えば x = (x * large_random_int) mod m です。

Bitcoinアドレスへの支払い時に、使用ごとに新しいブラインドされた鍵を生成することになります。

次に、2つの署名が同じ秘密鍵から来たことがわからないように署名できる必要があります。常に異なるブラインドされた公開鍵に署名することでこの特性が既に得られるかどうかはわかりません。得られない場合、そこでグループ署名が登場すると思います。グループ署名では、何かに署名できますが、誰が署名したかわからないようにすることが可能です。

例として、不人気な軍事攻撃の命令が必要だが、歴史にそれを命令した人として名前を残したくない場合を想像してください。10人の指導者が秘密鍵を持っていれば、そのうちの1人が命令に署名でき、誰がやったかわからないようにできます。
