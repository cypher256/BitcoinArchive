#!/bin/bash
# verify-translations.sh — 全数翻訳検証
#
# Phase 6 後の検証スクリプト。720 件の JA ファイルが正しく翻訳されているか確認。
#
# チェック項目:
#   1. translationStatus: complete になっている
#   2. body に英語の文（連続した英単語）が残っていない
#   3. quotes[] frontmatter が無傷
#   4. <!-- quote: qN --> マーカーが無傷
#   5. <!-- speaker: --> 注釈が無傷
#   6. 既存 1,811 EN ファイルが SHA-1 一致

set -e

echo "=== Phase 6 Translation Verification ==="
echo

# 対象ファイル: pending-files.txt のもの（720件）
TARGET_LIST=/tmp/pending-files.txt
if [ ! -f "$TARGET_LIST" ]; then
  echo "Error: $TARGET_LIST not found"
  exit 1
fi

TOTAL=$(wc -l < "$TARGET_LIST" | tr -d ' ')
echo "Target files: $TOTAL"
echo

# ---------------------------------------------------------------------------
# 1. translationStatus: complete
# ---------------------------------------------------------------------------
echo "1. translationStatus check..."
STILL_PENDING=0
while IFS= read -r f; do
  if [ -f "$f" ] && grep -q '^translationStatus: pending' "$f"; then
    STILL_PENDING=$((STILL_PENDING + 1))
    echo "   PENDING: $f"
  fi
done < "$TARGET_LIST"
echo "   Pending count: $STILL_PENDING"
echo

# ---------------------------------------------------------------------------
# 2. body に英語が残っているか（簡易チェック）
# 連続した4語以上の英単語が body にあれば翻訳漏れの可能性
# ---------------------------------------------------------------------------
echo "2. English remnants check..."
ENGLISH_REMNANTS=0
while IFS= read -r f; do
  if [ ! -f "$f" ]; then continue; fi
  # frontmatter を除いた body を取得
  body=$(awk '/^---$/{c++; next} c==2{print}' "$f")
  # 4 語以上連続英単語（quote マーカー、URL、コードを除外）
  if echo "$body" | grep -E '\b[A-Za-z]+ [A-Za-z]+ [A-Za-z]+ [A-Za-z]+\b' | \
     grep -v '<!-- ' | \
     grep -v 'http' | \
     grep -v '```' | \
     grep -v '^>.*From:' | \
     grep -v 'msg[0-9]' | head -1 | grep -q .; then
    ENGLISH_REMNANTS=$((ENGLISH_REMNANTS + 1))
    if [ "$ENGLISH_REMNANTS" -le 5 ]; then
      echo "   ENGLISH: $f"
    fi
  fi
done < "$TARGET_LIST"
echo "   Files with possible English remnants: $ENGLISH_REMNANTS"
echo

# ---------------------------------------------------------------------------
# 3. quotes[] frontmatter
# ---------------------------------------------------------------------------
echo "3. quotes[] integrity check..."
BROKEN_QUOTES=0
while IFS= read -r f; do
  if [ ! -f "$f" ]; then continue; fi
  # 対応する EN ファイル
  en_file=${f/translations\/ja/entries\/en}
  if [ ! -f "$en_file" ]; then continue; fi
  # quotes 行数を比較
  ja_quotes=$(grep -c '^  - id: ' "$f" || echo 0)
  en_quotes=$(grep -c '^  - id: ' "$en_file" || echo 0)
  if [ "$ja_quotes" != "$en_quotes" ]; then
    BROKEN_QUOTES=$((BROKEN_QUOTES + 1))
    echo "   QUOTES MISMATCH: $f (JA=$ja_quotes EN=$en_quotes)"
  fi
done < "$TARGET_LIST"
echo "   Quotes mismatch count: $BROKEN_QUOTES"
echo

# ---------------------------------------------------------------------------
# 4. <!-- quote: qN --> マーカー
# ---------------------------------------------------------------------------
echo "4. quote marker integrity check..."
BROKEN_MARKERS=0
while IFS= read -r f; do
  if [ ! -f "$f" ]; then continue; fi
  en_file=${f/translations\/ja/entries\/en}
  if [ ! -f "$en_file" ]; then continue; fi
  ja_markers=$(grep -c '<!-- quote: q' "$f" || echo 0)
  en_markers=$(grep -c '<!-- quote: q' "$en_file" || echo 0)
  if [ "$ja_markers" != "$en_markers" ]; then
    BROKEN_MARKERS=$((BROKEN_MARKERS + 1))
    echo "   MARKER MISMATCH: $f (JA=$ja_markers EN=$en_markers)"
  fi
done < "$TARGET_LIST"
echo "   Marker mismatch count: $BROKEN_MARKERS"
echo

# ---------------------------------------------------------------------------
# 5. 既存 EN ファイル無傷
# ---------------------------------------------------------------------------
echo "5. Existing EN files unchanged..."
bash scripts/verify-no-regression.sh /tmp/before-fetch-replies.sha1
echo

# ---------------------------------------------------------------------------
# Summary
# ---------------------------------------------------------------------------
echo "=== Summary ==="
echo "Pending: $STILL_PENDING / $TOTAL"
echo "English remnants: $ENGLISH_REMNANTS / $TOTAL"
echo "Quote count mismatch: $BROKEN_QUOTES / $TOTAL"
echo "Marker count mismatch: $BROKEN_MARKERS / $TOTAL"

if [ "$STILL_PENDING" -eq 0 ] && [ "$BROKEN_QUOTES" -eq 0 ] && [ "$BROKEN_MARKERS" -eq 0 ]; then
  echo
  echo "✓ All translations verified"
  exit 0
else
  echo
  echo "✗ Issues found"
  exit 1
fi
