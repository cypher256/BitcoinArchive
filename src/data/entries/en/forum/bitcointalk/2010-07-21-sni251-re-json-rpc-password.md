---
title: "Re: JSON-RPC password"
date: 2010-07-21T05:51:34.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4646#msg4646"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"JSON-RPC password\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/251/"
threadId: "bt-json-rpc-password"
threadTitle: "JSON-RPC password"
threadPosition: 5
---

I was researching config file formats, here's a comparison.

YAML is massive.  I'm not sure there's a lightweight easy to build library we can integrate into our project.  Seems overkill.

JSON is tempting and I'm inclined to like it, but two main sticking points:
1) No comments!  How can you have a config file where you can't comment out a line to disable it?
2) Not very user friendly to have to "quote" all the strings, including the keys, and also have to remember the comma at the end of lines.
{
    "key" : "value",
}

I suppose we could easily preprocess JSON reading the config file one line at a time, truncate the lines at any # character (and/or "//"?), concatenate them into a string and pass it to JSON, so you could go:
# comment
"key" : "value",   # still have to remember the comma 
"key2" : "value",   // comment like this or both

Boost has boost::program_options.

We could read lines ourselves and feed them into a map<string, string> mapConfig.

while (!eof)
  read line
  if '#' found, truncate line
  split line at first ':' -> key, value
  mapConfig.insert(key, value)

If we use the syntax:
# comment
key : value

...and don't allow whitespace indenting before the keys, I guess we would be a subset of YAML and could switch to YAML someday if we need more complexity. 

If we go with self parsed, that doesn't mean we can't use JSON on particular parameter values as needed.  If an option needs a list or more structured data, it could always parse its value as json:
key : ["item1", "item2", "item3"]

Although it has to be all on one line then.

I guess I'm leaning towards self parsed mapConfig:
# comment
key : value
