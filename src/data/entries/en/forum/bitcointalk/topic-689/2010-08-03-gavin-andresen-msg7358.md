---
title: "Re: Authentication, JSON RPC and Python"
date: 2010-08-03T22:52:10.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=689.msg7358#msg7358"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 689. after msg7335."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "jgarzik"
    personSlug: "jgarzik"
    date: "2010-08-03T18:58:58.000Z"
    sourceEntryId: "forum/bitcointalk/topic-689/2010-08-03-jgarzik-msg7300"
---

<!-- quote: q1 -->
> The two JSON RPC libs available at CPAN (Perl), and a compliant C lib that I wrote locally to verify the behavior.

Perl's LWP module definitely sets the Content-Length header.  I would've been surprised if it didn't, since it is required by HTTP 1.0 and the HTTP 1.1 spec says clients 'SHOULD' set it.

After some struggle, I got the first JSON::RPC library at CPAN to work:
Code:use JSON::RPC::Client;
use Data::Dumper;
 
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
The struggle was setting the realm to 'jsonrpc' (it is fussy about that).  I'll document that on the wiki.
