#!/bin/bash
# verify-rule-b-authoritative.sh — Authoritative Rule B completeness check
#
# Runs fetch-replies-to-satoshi.mjs in dry-run mode against the live
# BitcoinTalk threads to determine the true set of reply posts that
# SHOULD exist on disk, then compares against what IS on disk.
#
# If the fetcher reports zero new files, Rule B is complete (relative to
# MAX_DATE and MAX_PAGES_PER_THREAD in fetch-replies-to-satoshi.mjs).
#
# This is SLOW: ~30-60 minutes for all 261 topics (limited by the 2s
# polite delay between BitcoinTalk page fetches). Not suitable for CI.
# Run manually before a release or when verifying fetch completeness.
#
# Usage:
#   bash scripts/verify-rule-b-authoritative.sh                    # all topics
#   bash scripts/verify-rule-b-authoritative.sh --topics=823       # single topic
#   bash scripts/verify-rule-b-authoritative.sh --topics=12,17,55  # multiple
#
# Exit codes:
#   0 — fetcher reports 0 missing files (Rule B complete)
#   1 — fetcher reports ≥ 1 missing files (Rule B incomplete) or error

set -e

TOPICS_ARG=""
for arg in "$@"; do
  case "$arg" in
    --topics=*)
      TOPICS_ARG="$arg"
      ;;
  esac
done

echo "=== Rule B Authoritative Verification ==="
echo "This script will fetch BitcoinTalk threads over the network."
echo "Expected duration: ~30-60 minutes for all topics (2s polite delay per page)."
if [ -n "$TOPICS_ARG" ]; then
  echo "Topics: $TOPICS_ARG"
fi
echo

LOG_FILE=$(mktemp -t verify-rule-b.XXXXXX.log)
echo "Output log: $LOG_FILE"
echo

# Run fetch-replies-to-satoshi.mjs in dry-run mode (no --apply).
# It will network-fetch each topic, determine what posts SHOULD be written
# according to Rule A (3 after Satoshi) and Rule B (quotes Satoshi), and
# report anything missing via "DRY-RUN:" lines.
if [ -n "$TOPICS_ARG" ]; then
  node scripts/fetch-replies-to-satoshi.mjs "$TOPICS_ARG" 2>&1 | tee "$LOG_FILE"
else
  node scripts/fetch-replies-to-satoshi.mjs 2>&1 | tee "$LOG_FILE"
fi
echo

# Parse the output. The fetcher prints one "DRY-RUN: filename.md (reason)"
# line per missing post, plus a summary "Files needed: N".
NEEDED=$(grep -E '^Files needed:' "$LOG_FILE" | tail -1 | grep -oE '[0-9]+' || echo "")
if [ -z "$NEEDED" ]; then
  echo "✗ Could not parse 'Files needed:' from output — fetcher may have errored"
  echo "  See: $LOG_FILE"
  exit 1
fi

DRY_RUN_LINES=$(grep -cE '^\s*DRY-RUN:' "$LOG_FILE" 2>/dev/null | head -1)
DRY_RUN_LINES=${DRY_RUN_LINES:-0}

echo "=== Summary ==="
echo "Files the fetcher would write (Files needed): $NEEDED"
echo "DRY-RUN lines in output:                       $DRY_RUN_LINES"
echo "Full log:                                      $LOG_FILE"
echo

if [ "$NEEDED" -eq 0 ]; then
  echo "✓ Rule B complete — fetcher reports 0 missing posts"
  echo "  (relative to MAX_DATE and MAX_PAGES_PER_THREAD in fetch-replies-to-satoshi.mjs)"
  exit 0
else
  echo "✗ Rule B incomplete — fetcher reports $NEEDED missing posts"
  echo "  Review the log above. Each DRY-RUN line shows a post that would be"
  echo "  written. To actually write them, re-run with --apply:"
  echo "    node scripts/fetch-replies-to-satoshi.mjs --apply"
  exit 1
fi
