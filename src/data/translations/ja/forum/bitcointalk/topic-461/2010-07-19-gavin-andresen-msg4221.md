---
title: "Re: JSON-RPCパスワード"
date: 2010-07-19T12:30:03.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4221#msg4221"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック461におけるギャビン・アンドレセンの文脈投稿。msg4268の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

TransmissionのBitTorrentクライアントは認証付きJSON-RPCを実装している。「Remote Control」セクションを参照：
 https://trac.transmissionbt.com/wiki/ConfigurationParameters

例えば、setting.jsonファイルは次のようになる：
Code:{
    "rpc-enabled":1
    "rpc-authentication-required": 1,
    "rpc-password": "xxxxxxxxxx",
    "rpc-port": 9091,
    "rpc-username": "xxxxxxxxxx",
    "rpc-whitelist-enabled":1
    "rpc-whitelist":"127.0.0.1,192.168.*.*"
}
HTTPの「basic」認証（HTTPヘッダーにAuthorization: basic base64(username:password)）を使用している。
