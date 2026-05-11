---
title: "Re: 認証、JSON RPC と Python"
date: 2010-08-03T22:52:10.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=689.msg7358#msg7358"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalk トピック 689 におけるギャビン・アンドレセンの文脈投稿。msg7335 の後。"
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "Jeff Garzik"
    personSlug: "jeff-garzik"
    date: "2010-08-03T18:58:58.000Z"
    sourceEntryId: "forum/bitcointalk/topic-689/2010-08-03-jgarzik-msg7300"
translationStatus: complete
---

<!-- quote: q1 -->
> CPAN（Perl）で利用可能な 2 つの JSON RPC ライブラリと、動作を検証するために私がローカルで書いた準拠 C ライブラリだ。

Perl の LWP モジュールは間違いなく Content-Length ヘッダーを設定している。HTTP 1.0 では必須で、HTTP 1.1 の仕様でもクライアントは「SHOULD」設定すべきとされているので、設定していなかったらむしろ驚きだ。

少し格闘した末に、CPAN の最初の JSON::RPC ライブラリで動かすことができた：

```
use JSON::RPC::Client;
use Data::Dumper;
```

my $client = new JSON::RPC::Client;

$client->ua->credentials(
   'localhost:8332', 'jsonrpc', 'my rpcusername' => 'my rpcpassword'   # Replace with real user/pass
    );
my @foo = $client->ua->credentials('localhost:8332', 'jsonrpc');
print "@foo\n";

my $uri = 'http://localhost:8332/';
my $obj = {
    method  => 'getinfo',
    params  => ],
 };

my $res = $client->call( $uri, $obj );

if($res){
    if ($res->is_error) {
        print "Error : ", $res->error_message;
    }
    else {
        print Dumper($res->result);
    }
}
else {
    print $client->status_line;
}
苦労したのは realm を 'jsonrpc' に設定する点だ（ここがうるさい）。これは wiki にドキュメントとして書いておく。
