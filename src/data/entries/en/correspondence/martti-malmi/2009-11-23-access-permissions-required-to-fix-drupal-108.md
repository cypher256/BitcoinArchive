---
title: "Access permissions required to fix Drupal"
date: 2009-11-23T05:48:19Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Drupal's .htaccess file which uses mod_rewrite to allow clean URLs"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 108
tags:
  - "correspondence"
  - "early-contributor"
  - "website"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

Drupal's .htaccess file which uses mod_rewrite to allow clean URLs 
without the ? parameter is not working because its changes are rejected 
because Apache is not configured with "AllowOverride All".  This is 
needed to make Drupal coexist with the other site the way we want.

I need access to change these files to fix it:
  /etc/apache2/sites-available/default
  /etc/apache2/sites-available/default-ssl
  /etc/apache2/httpd.conf

Here's the planned fix.  If you do it yourself, please still give me 
access to httpd.conf in case I need to change it again later.

In /etc/apache2/sites-available/default
change the 2nd instance of "AllowOverride None"
      to "AllowOverride All"

and in /etc/apache2/sites-available/default-ssl
change the 2nd instance of "AllowOverride AuthConfig"
      to "AllowOverride All"

replace
  /etc/apache2/httpd.conf
with
  /home/maintenance/httpd.conf

This probably requires Apache to be restarted after.
(apache2ctl graceful)

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
