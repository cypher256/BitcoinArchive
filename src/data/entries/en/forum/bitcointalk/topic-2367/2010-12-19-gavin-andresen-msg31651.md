---
title: "Development process straw-man"
date: 2010-12-19T16:41:39.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=2367.msg31651#msg31651"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Gavin Andresen publicly announces taking on active project management for Bitcoin with Satoshi's blessing, creating the bitcoin/bitcoin GitHub staging tree and proposing a development process."
isSatoshi: false
tags:
  - "gavin-andresen"
  - "leadership"
  - "transition"
  - "succession"
  - "lead-maintainer"
  - "github"
  - "historic"
relatedEntries:
  - aftermath/2010-12-12-satoshi-handover-to-andresen
  - aftermath/2010-12-19-andresen-lead-maintainer-announcement
---

With Satoshi's blessing, and with great reluctance, I'm going to start doing more active project management for bitcoin.

Everybody please be patient with me; I've had a lot of project management experience at startups, but this is the first open source project of any size I've been involved with.  Anyway, I've created an integration/staging tree at:
  https://github.com/bitcoin/bitcoin

... and am proposing this for a development process:

Straw-man plan for Bitcoin development (open source vets, please slap me around and help make this better):

Developers work in their own trees, then submit pull requests when they think their feature is ready.

Requests get discussed (where? here in the bitcoin forums?) and if there's broad consensus they're a good thing, well written, match coding style, etc. then they're merged into the 'master' branch.

master branch is regularly built and tested (by who? need people willing to be quality assurance testers), and periodically pushed to the subversion repo to become the official, stable, released bitcoin.

We'll create feature branches if/when there are major new features being worked on by several people.

Discussion, feedback, etc, **especially** from people with experience leading or working on other open source projects, is very welcome.
